import { defineStore } from "pinia";

interface FlightState {
  flightInfos: any;
    AirCompany: any;
    AirPorts: any;
    filters: any;
    filterAirline: any;
    SearchGuid: "";
}
export const useFlightStore = defineStore({
  id: 'flightStore',
  state: (): FlightState => ({
    flightInfos: [],
    AirCompany: [],
    AirPorts: [],
    filters: [],
    filterAirline: [],
    SearchGuid: "",
  }),

  actions: {
    async fetchFlights(filters: {
      trips: Array<{ from: string; to: string; date: string }>;
      travelers: { adults: number; childs: number };
      fclass: String;
      isRound: number; // 1: Нэг чиглэл | 2: Хоёр чиглэл | 3: Олон чиглэл
    }) {
      try {
        let url = "https://api.airkacc.mn/api/search/mn/";
        const params = [];

        // 📌 Анхны чиглэлийн нислэг (заавал байх)
        const firstTrip = filters.trips[0];
        params.push(`dpt=${firstTrip.from}`);
        params.push(`arr=${firstTrip.to}`);
        params.push(`date=${firstTrip.date}`);
        params.push(`fclass=${filters.fclass}`);
        params.push(`adults=${filters.travelers.adults}`);
        params.push(`childs=${filters.travelers.childs}`);
        params.push(`infants=0`);

        console.log("filters.isRound")
        console.log(filters.isRound)

        if (filters.isRound === 2 && filters.trips.length > 1) {
          // 📌 Хоёр чиглэлтэй нислэгийн буцах чиглэлийг нэмэх
          const returnTrip = filters.trips[1];
          params.push(`backDate=${returnTrip.date}`);
        } else if (filters.isRound === 3) {
          // 📌 Олон чиглэлт нислэгийн нэмэлт чиглэлүүд
          filters.trips.slice(1).forEach((trip, index) => {
            params.push(`mdate${index + 1}=${trip.date}`);
            params.push(`from${index + 1}=${trip.from}`);
            params.push(`to${index + 1}=${trip.to}`);
          });
          console.log(filters)
          console.log(params)
        }

        // Бүтэн URL үүсгэх
        const fullUrl = `${url}?${params.join("&")}`;
        console.log("Generated URL:", fullUrl);

        // 📌 API дуудах
        const response = await fetch(fullUrl);
        const data = await response.json();

        // 📌 API хариуг шалгах
        if (data.status === "SUCCESS" && data.result?.Body?.AeroSearchResponse?.AeroSearchResult) {
          const result = data.result.Body.AeroSearchResponse.AeroSearchResult;

          this.flightInfos = result.FlightData?.FlightData || [];
          this.AirCompany = result.AirCompany?.CodeValue || [];
          this.AirPorts = result.AirPorts?.AirPortInfo || [];
          this.filters = result || {};
          this.SearchGuid = result.SearchGuid || "";
          if(Array.isArray(this.AirCompany)){
            
          }else{
            this.AirCompany = this.AirCompany ? [this.AirCompany] : [];
          }
console.log(this.AirCompany)
          console.log("Fetched flights:", this.flightInfos);
        } else {
          console.error("Unexpected API response:", data);
        }
      } catch (error) {
        
        console.log("Fetched flights:", this.flightInfos);
        console.error("API call error:", error);
      }
    },

    setAirline(filter: any) {
      this.filterAirline = filter;
    },
  },

  getters: {
    firstAdultPrice: (state) => state.filterAirline || [],
  },
});

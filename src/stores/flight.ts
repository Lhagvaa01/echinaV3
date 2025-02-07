import { defineStore } from "pinia";

interface FlightState {
  flightInfos: any;
    AirCompany: any;
    AirPorts: any;
    filters: any;
    filterAirline: any;
}
export const useFlightStore = defineStore({
  id: 'flightStore',
  state: (): FlightState => ({
    flightInfos: [],
    AirCompany: [],
    AirPorts: [],
    filters: [],
    filterAirline: [],
  }),
  // state: () => ({
  //   flightInfos: [],
  //   AirCompany: [],
  //   AirPorts: [],
  //   filters: [],
  // }),
  actions: {
    fetchFlights(filters: { from: string; to: string; date: string; backDate: string; travelers: { adults: number; childs: number }; isRound: number }) {
      let url = "";
      if(filters.isRound == 1){
        url = `http://api.airkacc.mn/api/search/mn/?dpt=${filters.from}&arr=${filters.to}&date=${filters.date}&fclass=Econom&adults=${filters.travelers.adults}&childs=${filters.travelers.childs}&infants=0`;
      }else if(filters.isRound == 2){
        url = `http://api.airkacc.mn/api/search/mn/?dpt=${filters.from}&arr=${filters.to}&date=${filters.date}&backDate=${filters.backDate}&fclass=Econom&adults=${filters.travelers.adults}&childs=${filters.travelers.childs}&infants=0`;
      }
      console.log(url)
      fetch(url)
        .then(response => response.json())
        .then((data: any) => {
          if (data.status === 'SUCCESS') {
            this.flightInfos = data.result.Body.AeroSearchResponse.AeroSearchResult.FlightData.FlightData || [];
            this.AirCompany = data.result.Body.AeroSearchResponse.AeroSearchResult.AirCompany.CodeValue || [];
            this.AirPorts = data.result.Body.AeroSearchResponse.AeroSearchResult.AirPorts.AirPortInfo || [];
            this.filters = data.result.Body.AeroSearchResponse.AeroSearchResult || [];
            console.log(data)
          } else {
            console.error('API returned an unexpected structure:', data);
          }
        })
        .catch(error => {
          console.error('API call error:', error);
        });
    },
    
    setAirline(filter: any){
      this.filterAirline = filter;
    }
    
    
    // applyFilters() {
    //   return this.filters.filter((flight: any) => {
    //     // // Refundable шүүлт
    //     // if (this.filters.refundable && !flight.Refundable) return false;

    //     // Price шүүлт
    //     const price = parseFloat(flight.TotalPrice);
    //     if (price < this.filters.priceRange[0] || price > this.filters.priceRange[1]) return false;

    //     // // Stops шүүлт
    //     // if (
    //     //   this.filters.stops.length > 0 &&
    //     //   !this.filters.stops.includes(flight.Offers.OfferInfo.Segments.OfferSegment.FlightNum)
    //     // ) {
    //     //   return false;
    //     // }

    //     // // Preferred Airline шүүлт
    //     // if (
    //     //   this.filters.preferredAirline.length > 0 &&
    //     //   !this.filters.preferredAirline.includes(flight.Offers.OfferInfo.MarketingAirline)
    //     // ) {
    //     //   return false;
    //     // }

    //     return true;
    //   });
    // },
  },
  getters: {
    firstAdultPrice: (state) => {
      
      return state.filterAirline || [];  // Fallback value
    },
  },
});

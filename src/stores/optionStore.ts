import { defineStore } from "pinia";

interface FlightState {
    optionInfos: any;
    AirCompany: any;
    AirPorts: any;
    filters: any;
    filterAirline: any;
}
export const useOptionStore = defineStore({
  id: 'optionInfos',
  state: (): FlightState => ({
    optionInfos: [],
    AirCompany: [],
    AirPorts: [],
    filters: [],
    filterAirline: [],
  }),
  actions: {
    fetchFlights(filters: { offerCode: string; searchGuid: string; }) {
      let url = "";
      url = `https://api.airkacc.mn/api/prebooking/mn/?offerCode=${filters.offerCode}&searchGuid=${filters.searchGuid}`;
      console.log(url)
      fetch(url)
        .then(response => response.json())
        .then((data: any) => {
          if (data.status === 'SUCCESS') {
            this.optionInfos = data.result.Body.AeroPrebookResponse.AeroPrebookResult || [];
            // this.AirCompany = data.result.Body.AeroSearchResponse.AeroSearchResult.AirCompany.CodeValue || [];
            // this.AirPorts = data.result.Body.AeroSearchResponse.AeroSearchResult.AirPorts.AirPortInfo || [];
            // this.filters = data.result.Body.AeroSearchResponse.AeroSearchResult || [];
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
    
  },
  getters: {
    firstAdultPrice: (state) => {
      
      return state.filterAirline || [];  // Fallback value
    },
  },
  
});

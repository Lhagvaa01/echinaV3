import { defineStore } from "pinia";


export const useFlightStore = defineStore('flightStore', {
  state: (): {
    flightInfos: any;
    AirCompany: any;
    AirPorts: any;
    filters: any;
  } => ({
    flightInfos: [],
    AirCompany: [],
    AirPorts: [],
    filters: [],
  }),
  actions: {
    fetchFlights(filters: { from: string; to: string; date: string; travelers: number }) {
      const url = `http://api.airkacc.mn/api/search/mn/?dpt=${filters.from}&arr=${filters.to}&date=${filters.date}&fclass=Econom&adults=${filters.travelers}&childs=0&infants=0`;

      fetch(url)
        .then(response => response.json())
        .then((data: any) => {
          if (data.status === 'SUCCESS') {
            this.flightInfos = data.result.Body.AeroSearchResponse.AeroSearchResult.FlightData || [];
            this.AirCompany = data.result.Body.AeroSearchResponse.AeroSearchResult.AirCompany || [];
            this.AirPorts = data.result.Body.AeroSearchResponse.AeroSearchResult.AirPorts || [];
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
  }
});

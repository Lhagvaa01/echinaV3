// stores/airportStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

// Төрлийг тодорхойлох
interface City {
  value: string;
  label: string;
}

interface Region {
  label: string;
  choices: City[];
}

export const useAirportStore = defineStore('airportStore', () => {
  const destinationOptions = ref<Region[]>([]); // Тодорхой төрлийг зааж өгсөн

  const getAirports = async () => {
    try {
      const response = await fetch('http://api.echina.mn/api/getPopularAirports/en/');
      const data = await response.json();

      if (data.status === 'SUCCESS') {
        const newOptions = data.result.map((region: { name: string; cities: any[] }) => ({
          label: region.name,
          choices: region.cities.map(city => ({
            value: city.airport_iata,
            label: `${city.name} (${city.airport_iata}) - ${city.country}`,
          })),
        }));
        destinationOptions.value = newOptions; // Өгөгдлийг шинэчлэх
      } else {
        console.error('API Error:', data.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return {
    destinationOptions,
    getAirports,
  };
});

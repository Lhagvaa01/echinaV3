<template>
  <div class="popular-destinations">
    <h2>{{ t('txtMostPDest') }}</h2>
    <div class="carousel">
      <button @click="prev" class="nav-btn">‹</button>
      <div class="destinations">
        <div v-for="(destination, index) in visibleDestinations" :key="index" class="destination-card">
          <a :href="generateFlightLink(destination.iata)" class="destination-link">
            <div class="window-frame">
              <img :src="destination.image" :alt="destination.name" />
            </div>
          </a>
          <!-- <div class="window-frame">
            <img :src="destination.image" :alt="destination.name" />
          </div> -->
          <div class="info">
            <h3>{{ destination.name }}</h3>
            <p>{{ formatPrice(destination.price) }}</p>
          </div>
        </div>
      </div>
      <button @click="next" class="nav-btn">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const destinations = [
  { name: "Beijing", iata: "PEK", price: 997000, image: "https://media.istockphoto.com/id/482334184/photo/night-on-beijing-central-business-district-buildings-skyline-china-cityscape.jpg?s=612x612&w=0&k=20&c=gd1nunX5dLfHTAyyqTE2frn4Iw-dzyr60YqJGaK2M4U=" },
  { name: "Bangkok", iata: "DMK", price: 2470000, image: "https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg" },
  { name: "Sydney", iata: "SYD", price: 4199000, image: "https://media.istockphoto.com/id/1256052948/photo/sydney-opera-house-close-up.jpg?s=612x612&w=0&k=20&c=whIj_OHD1xUfx9rgcLaKC2V_AjOJZb24IQOCcKrxaCM=" },
  { name: "Narita", iata: "NRT", price: 2031000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzmonz5ZXOFOqFshD55rKvz9DGQuOmdzafg&s" },
  { name: "Incheon", iata: "ICN", price: 1175900, image: "https://t4.ftcdn.net/jpg/00/43/90/71/360_F_43907137_ulcjWLeyAXfdCeQgTiStww1f3LABpiXa.jpg" },
];
const currentIndex = ref(0);
const visibleCount = 3;

const visibleDestinations = computed(() => {
  return destinations.slice(currentIndex.value, currentIndex.value + visibleCount);
});

const next = () => {
  if (currentIndex.value + visibleCount < destinations.length) {
    currentIndex.value++;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};


const generateFlightLink = (destinationName) => {
  const departure = 'UBN'; // Departure airport code (could be dynamic as well)
  const arrival = destinationName.toUpperCase(); // Using the destination name as arrival airport code
  const today = new Date();
  today.setDate(today.getDate() + 2);
  const date = today.toLocaleDateString('en-GB').split('/').join('.'); // You can make this dynamic as needed
  const fclass = 'Econom'; // Flight class
  const adults = 1; // Number of adults
  const childs = 0; // Number of children
  const infants = 0; // Number of infants

  return `/flights/list/?dpt=${departure}&arr=${arrival}&date=${date}&fclass=${fclass}&adults=${adults}&childs=${childs}&infants=${infants}`;
};

const formatPrice = (price) => {
  return price.toLocaleString() + "₮";
};
</script>

<style scoped>
.popular-destinations {
  color: black;
  text-align: center;
  padding: 40px 20px;
}

.popular-destinations h2 {
  font-size: 24px;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.destinations {
  display: flex;
  overflow: hidden;
  max-width: 800px;
}

.destination-card {
  background: #ffffff;
  border-radius: 40px;
  margin: 0 15px;
  width: 220px;
  min-width: 220px;
  overflow: hidden;
  color: black;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.destination-card:hover {
  transform: translateY(-10px);
}

.window-frame {
  background: white;
  border: 8px solid #dfe4ea;
  border-radius: 60% / 40%;
  height: 200px;
  overflow: hidden;
  margin: 20px;
  position: relative;
}

.window-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  padding: 10px;
}

.info h3 {
  font-size: 18px;
  margin: 10px 0 5px 0;
}

.info p {
  font-size: 16px;
  color: #5143d9;
  font-weight: bold;
}

.nav-btn {
  background: #5143d9;
  color: white;
  border: none;
  font-size: 28px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 0 10px;
  transition: background 0.3s;
}

.nav-btn:hover {
  background: #5143d9;
}
</style>

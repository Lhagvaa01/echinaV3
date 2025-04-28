<template>
  <div class="bg-black">
    <b-container>
      <div class="airlines-carousel ">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
          <!-- <div v-for="(airline, index) in airlines" :key="index" class="carousel-slide">
            <img :src="flight[0]?.MarketingAirline
              ? 'https://api.echina.mn/assets/d/' + flight[0]?.MarketingAirline + '.png'
              : fallbackLogo" alt="Airline logo" class="me-2"
              style="width: 30px; height: auto;" />
              
          </div> -->
          <div v-for="(city, index) in cities" :key="index" class="carousel-slide">
            <img
              :src="city.country_code ? 'https://api.echina.mn/assets/d/' + city.country_code + '.png' : fallbackLogo"
              alt="Airport Logo" class="me-2" style="width: 30px; height: auto;" />
            <!-- <p>{{ city.name }} ({{ city.country_code }})</p> -->
          </div>
        </div>
        <!-- <div class="controls">
          <button @click="prevSlide" class="nav-btn">‹</button>
          <button @click="nextSlide" class="nav-btn">›</button>
        </div> -->
      </div>
    </b-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cities = ref([]);
const fallbackLogo = '/fallback-logo.png'; // fallback зурагны зам

async function fetchPopularAirports() {
  try {
    const response = await fetch('https://api.airkacc.mn/api/getPopularAirports/en/');
    const data = await response.json();
    if (data.status === 'SUCCESS') {
      // Asia хэсгээс авах
      const asia = data.result.find(region => region.name === 'Asia');
      if (asia) {
        cities.value = asia.cities;
      }
    }
  } catch (error) {
    console.error('Airport мэдээлэл татах үед алдаа гарлаа:', error);
  }
}

onMounted(() => {
  fetchPopularAirports();
});
</script>

<style scoped>
.airlines-carousel {
  overflow: hidden;
  position: relative;
  padding: 20px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  flex: 0 0 auto;
  width: 200px;
  margin: 0 10px;
  background: white;
  border-radius: 10px;
  padding: 10px;
}

.airline-logo {
  width: 100%;
  height: 80px;
  object-fit: contain;
}

.controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.nav-btn {
  background: #ff6600;
  color: white;
  border: none;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>

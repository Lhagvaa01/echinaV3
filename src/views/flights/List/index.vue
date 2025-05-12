<template>
  <Header />

  <main>
    <Booking @search-flights="loadFlights" />
    <Stepper :step="1" />
    <NoticeBoard />

    <b-container v-if="loading">
      <SkeletonLoader v-for="n in 10" :key="n" />
    </b-container>

    <div v-else-if="!flightInfos || flightInfos.length === 0" class="no-results-card">
      <div class="no-results-icon">
        <i class="fas fa-search"></i>
      </div>
      <p class="no-results-title">Илэрц олдсонгүй</p>
      <p class="no-results-subtitle">
        Таны хайлтанд тохирох нислэгийн мэдээлэл олдсонгүй.
      </p>
    </div>

    <FlightList v-else :flightInfos="flightInfos" :AirCompany="AirCompany" :AirPorts="AirPorts" />




  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">

import { ref, watch } from 'vue'
import NavBar4 from '@/views/flights/List/components/NavBar4.vue'

import SkeletonLoader from './components/Skeleton.vue'
import Header from '@/components/NewNavbar.vue'
import Booking from './components/Booking.vue'
import NoticeBoard from './components/NoticeBoard.vue'
import FlightList from './components/FlightList.vue'
import Footer from '@/views/flights/List/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
import Stepper from '../Components/Stepper.vue'
// import SkeletonLoader from './components/Skeleton.vue'





const flightInfos = ref([]);
const AirCompany = ref([]);
const AirPorts = ref([]);


import { useFlightStore } from '@/stores/flight';

const flightStore = useFlightStore();

// Access state
const flights = flightStore.flightInfos;

// Call actions
// function loadFlights(filters: any) {
//   console.log(filters)
//   flightStore.fetchFlights(filters);
// }
const loading = ref(false)
async function loadFlights(filters: any) {
  loading.value = true
  try {
    await flightStore.fetchFlights(filters)
    flightInfos.value = flightStore.flightInfos
    AirCompany.value = flightStore.AirCompany
    AirPorts.value = flightStore.AirPorts
  } catch (e) {
    console.error('Нислэг ачаалахад алдаа:', e)
  } finally {
    loading.value = false
  }
}


watch(flightInfos, (val) => {
})
</script>

<style lang="css" scoped>
.no-results-card {
  text-align: center;
  padding: 40px 20px;
  background-color: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.no-results-icon {
  font-size: 36px;
  color: #94a3b8;
  margin-bottom: 12px;
}

.no-results-title {
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
}

.no-results-subtitle {
  font-size: 14px;
  color: #64748b;
  max-width: 500px;
  margin: 0 auto;
}
</style>

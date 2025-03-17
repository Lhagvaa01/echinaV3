<template>
  <NavBar4 />

  <main>
    <Booking @search-flights="loadFlights" />

    <NoticeBoard />

    <FlightList :flightInfos="flightInfos" :AirCompany="AirCompany" :AirPorts="AirPorts" />




  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">

import { ref } from 'vue'
import NavBar4 from '@/views/flights/List/components/NavBar4.vue'
import Booking from './components/Booking.vue'
import NoticeBoard from './components/NoticeBoard.vue'
import FlightList from './components/FlightList.vue'
import Footer from '@/views/flights/List/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
// import SkeletonLoader from './components/Skeleton.vue'





const flightInfos = ref([]);
const AirCompany = ref([]);
const AirPorts = ref([]);
const loading = ref(true);


import { useFlightStore } from '@/stores/flight';

const flightStore = useFlightStore();

// Access state
const flights = flightStore.flightInfos;

// Call actions
// function loadFlights(filters: any) {
//   console.log(filters)
//   flightStore.fetchFlights(filters);
// }

async function loadFlights(filters: any) {
  try {
    // loading.value = true; // Ачааллыг эхлүүлэх
    await flightStore.fetchFlights(filters); // Нислэгийн мэдээллийг ачаалах
    flightInfos.value = flightStore.flightInfos; // Нислэгийн мэдээллийг шинэчлэх
    AirCompany.value = flightStore.AirCompany; // Агаарын компаниудын мэдээллийг шинэчлэх
    AirPorts.value = flightStore.AirPorts; // Нисэх буудлын мэдээллийг шинэчлэх
  } catch (error) {
    console.error('Error loading flights:', error);
  } finally {
    // loading.value = false; // Ачааллыг дуусгах
  }
}
</script>

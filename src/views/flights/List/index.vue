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



const flightInfos = ref([]);
const AirCompany = ref([]);
const AirPorts = ref([]);



import { useFlightStore } from '@/stores/flight';

const flightStore = useFlightStore();

// Access state
const flights = flightStore.flightInfos;

// Call actions
function loadFlights(filters: any) {
  // const filters = { from: 'NYC', to: 'LAX', date: '25.01.2025', travelers: 1 };
  console.log(filters)
  flightStore.fetchFlights(filters);
}
</script>

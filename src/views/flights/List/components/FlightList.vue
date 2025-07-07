<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <aside class="col-xl-3 col-xxl-3">
          <div class="d-none d-xl-block">
            <FlightListFilter />
          </div>
        </aside>

        <b-col xl="9" xxl="9">
          <div class="vstack gap-4">
            <!-- <FlightCard />

            <FlightCard2 /> -->

            <!-- <FlightCard3 /> -->

            <!-- <div v-for="(flight, index) in flightInfosD" :key="index" class="mb-3">
              <FlightCard3 :flight="flight" :AirCompany="AirCompany" :AirPorts="AirPorts" />
            </div> -->




            <div v-if="show == 4">
              <FlightCard3 />
            </div>
            <div v-else>
              <FlightCardRound />
            </div>
            <!-- <div v-for="(flight, index) in flightInfosD" :key="index" class="mb-3">
              <FlightCard3 :flight="flight" :AirCompany="AirCompany" />
            </div> -->



            <div class=" bg-success bg-opacity-10 p-3 rounded-2 d-sm-flex justify-content-sm-between
                align-items-center">
              <div class="d-flex align-items-center mb-3 mb-sm-0">
                <div class="position-relative z-index-1 me-2">
                  <img :src="element5" class="position-relative h-40px" alt="" />
                  <span class="smaller text-white position-absolute top-50 start-50 translate-middle">New</span>
                </div>
                <h6 class="mb-0 fw-normal">
                  Get <strong class="text-success ">12% Off</strong> On Your First Flight
                </h6>
              </div>

              <a href="#" class="btn btn-sm btn-success mb-0">Login / Signup</a>
            </div>

            <!-- <FlightCard4 /> -->

            <!-- <Pagination /> -->
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <FlightDetailModal />
</template>
<script setup lang="ts">
import element5 from '@/assets/images/element/05.svg'

import { ref } from 'vue'
import FlightListFilter from '@/views/flights/List/components/FlightListFilter.vue'
import FlightCard from '@/views/flights/List/components/FlightCard.vue'
import FlightCard2 from '@/views/flights/List/components/FlightCard2.vue'
import FlightCard3 from '@/views/flights/List/components/FlightCard3.vue'
// import FlightCardRound from '@/views/flights/List/components/FlightCardRound.vue'
import FlightCardRound from './FlightCardRound.vue'
import Pagination from '@/views/flights/List/components/Pagination.vue'
import FlightDetailModal from '@/views/flights/List/components/FlightDetailModal.vue'

import { computed } from 'vue'
// Props
const props = defineProps({
  flightInfos: {
    type: Object,
    required: true
  },
  AirCompany: {
    type: Object,
    required: true
  },
  AirPorts: {
    type: Object,
    required: true
  },
})

const flightInfosD = computed(() => props.flightInfos || [])
const AirCompany = computed(() => props.AirCompany || [])
const AirPorts = computed(() => props.AirPorts || [])

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);




</script>

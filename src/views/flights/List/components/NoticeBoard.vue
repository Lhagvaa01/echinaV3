<template>
  <section class="pt-0">
    <div v-if="filteredData.length > 0">
      <b-container class="position-relative">
        <b-row>
          <b-col cols="12">
            <div class="d-sm-flex justify-content-sm-between align-items-center">
              <div class="mb-3 mb-sm-0">
                <h1 class="d-flex fs-4">
                  {{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                    getFirstDeparture(0)).City}}
                  ({{StoreAirPorts.find((AirPorts: any) =>
                    AirPorts.Iata ===
                    getFirstDeparture(0)).Name}})
                  <PlaneTakeoff :size="40" color="#3949AB" class="mb-3 mx-3" />
                  <div v-if="showRound === 2">
                    {{StoreAirPorts.find((AirPorts: any) =>
                      AirPorts.Iata ===
                      returnFlights(0)[0].Departure.Iata).City}}
                    ({{StoreAirPorts.find((AirPorts: any) =>
                      AirPorts.Iata ===
                      returnFlights(0)[0].Departure.Iata).Name}})
                  </div>
                  <div v-else>
                    {{StoreAirPorts.find((AirPorts: any) =>
                      AirPorts.Iata ===
                      getLastArrival(0)).City}}
                    ({{StoreAirPorts.find((AirPorts: any) =>
                      AirPorts.Iata ===
                      getLastArrival(0)).Name}})
                  </div>

                </h1>
                <h5>Явах: {{ formatDate(getFirstDepartureTime(0)) }}</h5>
                <h5 v-if="showRound === 2">Очих: {{ formatDate(returnFlights(0)[0].Departure.Date) }}</h5>
                <div class="d-flex flex-row justify-content-start align-items-center">
                  <h5 class="me-3">
                    <Plane :size="30" color="#3949AB" /> Нийт: {{ filteredData.length }} нислэг
                  </h5>
                  <h5>
                    <TicketsPlane :size="30" color="#3949AB" /> {{ StoreAirCompany.length }} airlines
                  </h5>
                </div>
              </div>
              <button @click="toggleOffcanvas" class="btn btn-primary d-xl-none mb-0" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                <font-awesome-icon :icon="faSlidersH" class="me-1" />
                Show filters
              </button>
            </div>
          </b-col>
        </b-row>

        <div class="bg-primary bg-opacity-10 rounded-3 overflow-hidden mt-4 p-4">
          <b-row class="g-4 align-items-center">
            <b-col cols="6" md="3" class="text-center order-1">
              <img :src="element11" class="mb-n5" alt="" />
            </b-col>

            <b-col md="6" class="order-md-2">
              <h4>International Guideline</h4>
              <p class="mb-2">
                COVID safety measures adopted by various countries including VISA restrictions,
                quarantine rules, etc.
              </p>
              <a href="#" class="btn btn-sm btn-primary mb-0">View Guidelines</a>
            </b-col>

            <b-col cols="6" md="3" class="text-center order-3">
              <img :src="element10" class="mb-n5" alt="" />
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </section>

  <b-offcanvas body-class="m-0 p-0" size="xl" title="Advance Filters" placement="end" v-model="show">
    <div class="flex-column p-3 p-xl-0">
      <FlightListFilter />
    </div>
  </b-offcanvas>
</template>

<script setup lang="ts">
import element10 from '@/assets/images/element/10.svg'
import element11 from '@/assets/images/element/11.svg'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

import { useFlightStore } from '@/stores/flight';

import { ref, computed } from 'vue'

import { ChevronDown, Briefcase, Luggage, User, PlaneTakeoff, TicketsPlane, Plane } from 'lucide-vue-next';

import FlightListFilter from '@/views/flights/List/components/FlightListFilter.vue'

const show = ref(false)
const showRound = ref<number>(Number(sessionStorage.getItem("flight")) || 1);

const flightStore = useFlightStore();

const StoreflightInfos = computed(() => flightStore.flightInfos ?? []);
// console.log(flightStore.flightInfos.FlightData[0].Offers.OfferInfo[0].Segments.OfferSegment[0].AirCraft)
const StoreAirCompany = computed(() => flightStore.AirCompany);
const StoreAirPorts = computed(() => flightStore.AirPorts);
// let filteredData = computed(() => flightStore.firstAdultPrice || []);
const filteredData = computed(() => flightStore.firstAdultPrice.length > 0 ? flightStore.firstAdultPrice : flightStore.flightInfos);


const getFlightData = (index: number) => {
  return filteredData.value[index] || { Offers: { OfferInfo: [] } };
};

const getAllSegments = (index: number) => {
  // console.log(index, getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [])
  return getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
};

const getFirstDeparture = (index: number) => getAllSegments(index)[0]?.Departure.Iata || "N/A";
const getLastArrival = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Iata || "N/A";
const getFirstDepartureTime = (index: number) => getAllSegments(index)[0]?.Departure.Date || "N/A";

function formatDate(input: string): string {
  const [day, month, yearAndTime] = input.split(".");
  const [year, time] = yearAndTime.split(" ");
  return `${year}-${month}-${day}`;
}

const getFlightDataNew = (index: number) => {
  return filteredData.value[index]?.Offers?.OfferInfo || [];
};


const departureFlights = (index: number) => {
  const data = getFlightDataNew(index);
  let filter = []
  // Rph !== "2" байгаа Offer-г шалгаж байгаа нөхцөл
  if (data.some((offer: { Rph: string }) => offer.Rph === "2")) {
    filter = data
      .filter((offer: { Rph: string }) => offer.Rph === "1")
      .flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment);


  } else {
    filter = data
      .flatMap((offer: { Segments?: { OfferSegment?: any[] } }) => offer.Segments?.OfferSegment || [])
      .filter((segment: { Rph: string }) => segment.Rph === "1");

  }
  return filter;
};

const returnFlights = (index: number) => {
  const data = getFlightDataNew(index);

  let filter = []
  // Rph !== "2" байгаа Offer-г шалгаж байгаа нөхцөл
  if (data.some((offer: { Rph: string }) => offer.Rph === "2")) {
    filter = data
      .filter((offer: { Rph: string }) => offer.Rph === "2")
      .flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment);


  } else {
    filter = data
      .flatMap((offer: { Segments?: { OfferSegment?: any[] } }) => offer.Segments?.OfferSegment || [])
      .filter((segment: { Rph: string }) => segment.Rph === "2");

  }
  return filter;
};

const toggleOffcanvas = () => {
  show.value = !show.value
}
</script>

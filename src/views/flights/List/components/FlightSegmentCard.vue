<template>
    <b-card no-body class="border">
        <b-card-header class="d-sm-flex justify-content-sm-between align-items-center">
            <div class="d-flex align-items-center mb-2 mb-sm-0">
                <img :src="airlineLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                <h6 class="fw-normal mb-0">
                    {{ airlineName }} ({{ segment.FlightNum || 'SA-1254' }})
                </h6>
            </div>
            <h6 class="fw-normal mb-0">
                <span class="text-body">Travel Class:</span> {{ segment.FlightClass }}
            </h6>
        </b-card-header>

        <b-card-body class="p-4 pb-0">
            <b-row class="g-4">
                <b-col sm="4" md="3">
                    <h4>{{ departureDate }}</h4>
                    <p class="mb-0">{{ segment.Departure.Iata }}</p>
                    <p class="mb-0">{{ departureCity }}</p>
                </b-col>

                <b-col sm="4" md="3" class="my-sm-auto text-center">
                    <h5>{{ segment.FlightTime }}</h5>
                    <div class="position-relative my-4">
                        <hr class="bg-primary opacity-5 position-relative" />
                        <div
                            class="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle">
                            <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
                        </div>
                    </div>
                </b-col>

                <b-col sm="4" md="3">
                    <h4>{{ arrivalDate }}</h4>
                    <p class="mb-0">{{ segment.Arrival.Iata }}</p>
                </b-col>

                <b-col md="3" class="text-md-end">
                    <h4>{{ currency }}{{ price }}</h4>
                    <router-link :to="{ name: 'flights.details' }" class="btn btn-dark mb-0 mb-sm-2">Book
                        Now</router-link>
                </b-col>
            </b-row>
        </b-card-body>

        <div class="card-footer pt-4">
            <ul class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
                <li class="list-inline-item text-danger">Only 25 Seat Left</li>
                <li class="list-inline-item text-danger">Non-Refundable</li>
                <li class="list-inline-item">
                    <router-link v-b-toggle.flightDetail class="btn-more d-flex align-items-center collapsed p-0 mb-0"
                        to="#flightDetail" role="button" aria-controls="flightDetail">
                        Flight detail
                        <font-awesome-icon :icon="faAngleDown" class="ms-2" />
                    </router-link>
                </li>
            </ul>

            <b-collapse class="multi-collapse" id="flightDetail">
                <div class="pt-3">
                    <FlightDetailTab />
                </div>
            </b-collapse>
        </div>
    </b-card>
</template>

<script setup>
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleDown, faPlane } from '@fortawesome/free-solid-svg-icons';
import FlightDetailTab from '@/views/flights/List/components/FlightDetailTab.vue';
import { useFlightStore } from '@/stores/flight';
import flightLogo from '@/assets/images/element/09.svg';

const props = defineProps({
    segment: Object,
    fallbackLogo: String,
    airlines: Array,
    airports: Array,
    currency: String,
    price: Number
});

const flightStore = useFlightStore();

const airlineLogo = computed(() => props.segment.MarketingAirline
    ? `https://api.echina.mn/assets/d/${props.segment.MarketingAirline}.png`
    : props.fallbackLogo);

const airlineName = computed(() => {
    const airline = props.airlines.find(airline => airline.Code === props.segment.MarketingAirline);
    return airline ? airline.Value : 'Unknown Airline';
});

const departureDate = computed(() => props.segment.Departure.Date.split(" ")[1]);
const departureCity = computed(() => {
    const airport = props.airports.find(airport => airport.Iata === props.segment.Departure.Iata);
    return airport ? airport.City : 'Unknown City';
});

const arrivalDate = computed(() => props.segment.Arrival.Date.split(" ")[1]);
</script>
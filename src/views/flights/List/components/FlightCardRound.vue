<template>
    <!-- <div>Нийт нислэгийн тоо: {{ filteredData.length > 0 ? filteredData.length : StoreflightInfos.length }}</div> -->
    <!-- <div v-if="(filteredData.length > 0 ? filteredData.length : StoreflightInfos.length) == 0"> -->
    <div v-if="(paginatedFlights.length) == 0">

        <SkeletonLoader v-for="n in 10" :key="n" />
    </div>





    <div v-else>
        <!-- <div v-for="(offer, Mainindex) in paginatedFlights" :key="Mainindex" class="mb-4">
            {{ offer }}
        </div> -->
        <b-row class="mb-3 align-items-center">
            <b-col>
                {{ t('txtTotalFlight') }}: {{ filteredData.length }} {{ t('txtTotalFlightDes') }}
            </b-col>
            <b-col>
                <div class="dropdown w-100">
                    <button
                        class="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between"
                        type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="d-flex align-items-center">
                            <span class="fw-light text-primary">{{ selectedSortLabel }}</span>
                        </div>
                    </button>

                    <ul class="dropdown-menu w-100" aria-labelledby="sortDropdown">
                        <li><a class="dropdown-item" href="#" @click.prevent="setSortOrder('asc')">{{ t('txtPriceASC')
                                }}</a></li>
                        <li><a class="dropdown-item" href="#" @click.prevent="setSortOrder('desc')">{{ t('txtPriceDESC')
                                }}</a>
                        </li>
                    </ul>
                </div>
            </b-col>
            <!-- <b-col>
                <div class="dropdown w-100">
                    <button
                        class="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between"
                        type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="d-flex align-items-center">
                            <span class="fw-light text-primary">Хугацаагаар эрэмбэлэх</span>
                        </div>
                    </button>

                    <ul class="dropdown-menu w-100" aria-labelledby="sortDropdown">
                        <li><a class="dropdown-item" href="#">Богино хугацаа</a></li>
                        <li><a class="dropdown-item" href="#">Урт хугацаа</a></li>
                    </ul>
                </div>
            </b-col>
            <b-col>
                <div class="dropdown w-100">
                    <button
                        class="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between"
                        type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="d-flex align-items-center">
                            <span class="fw-light text-primary">Огноогоор эрэмбэлэх</span>
                        </div>
                    </button>

                    <ul class="dropdown-menu w-100" aria-labelledby="sortDropdown">
                        <li><a class="dropdown-item" href="#">Хамгийн эрт</a></li>
                        <li><a class="dropdown-item" href="#">Хамгийн орой</a></li>
                    </ul>
                </div>
            </b-col> -->
        </b-row>
        <div v-for="(offer, Mainindex) in paginatedFlights" :key="Mainindex" class="mb-4">
            <div>
                <div v-for="(segments, inx) in getAllSegments(offer).slice(0, 1)" :key="inx">
                    <b-card no-body class="border" :key="segments.FlightNum">

                        <div>
                            <!-- <p>{{ moreFlights(Mainindex).length }}</p> -->
                            <div v-for="(flight, findex) in moreFlights(Mainindex)" :key="findex">
                                <!-- <span>{{ flight }}</span> -->
                                <div v-if="flight.length > 0">
                                    <div class="d-flex justify-content-between align-items-center px-3">
                                        <h6 class="m-3 mb-0 fw-bold d-flex align-items-center"
                                            style="font-size: smaller;">
                                            <PlaneTakeoff color="#009dff" :size="32" class="me-3" />
                                            {{ (show == 2 && moreFlights(Mainindex).length - 1 === findex) ?
                                                t('txtToFlight')
                                                :
                                                t('txtFromFlight') }}
                                        </h6>
                                        <h6 class="fw-bold mb-0" style="font-size: smaller;">{{ flight.length > 1 ?
                                            t('txtTransit') :
                                            t('txtDirect') }}</h6>
                                    </div>
                                    <b-card-header
                                        class="d-sm-flex justify-content-sm-between align-items-center py-0 ps-4">

                                        <div class="d-flex align-items-center mb-2 mb-sm-0 "
                                            style="font-size: smaller;">
                                            <img :src="flight[0]?.MarketingAirline
                                                ? 'https://api.echina.mn/assets/d/' + flight[0]?.MarketingAirline + '.png'
                                                : fallbackLogo" alt="Airline logo" class="me-2"
                                                style="width: 30px; height: auto;" />
                                            <h6 class="fw-normal mb-0" style="font-size: smaller;">
                                                {{Array.isArray(StoreAirCompany) && StoreAirCompany.length > 0
                                                    ? StoreAirCompany.find((airline: any) => airline.Code ===
                                                        flight[0]?.MarketingAirline)?.Value || 'Airline Not Found'
                                                    : 'No Air Companies Available'
                                                }}
                                                ({{ flight[0]?.FlightNum || 'SA-1254' }})
                                            </h6>

                                            <p v-if="flight.length > 1" class="ms-2 text-warning"
                                                @mouseover="onMouseOver(getFlightKey(Mainindex))"
                                                @mouseleave="onMouseLeave(getFlightKey(Mainindex))">
                                                +{{ flight.length - 1 }} {{ t('txtTotalAirline') }}
                                            </p>
                                            <!-- Tooltip -->
                                            <div v-if="isHovered[getFlightKey(Mainindex)]"
                                                class="bg-white border rounded shadow position-absolute p-3 start-50 "
                                                style="z-index: 1000; min-width: 260px;">
                                                <div v-for="segment in flight" :key="segment.FlightNum"
                                                    class="d-flex align-items-start mb-2">
                                                    <img :src="segment.MarketingAirline
                                                        ? 'https://api.echina.mn/assets/d/' + segment.MarketingAirline + '.png'
                                                        : fallbackLogo" alt="Airline logo" class="me-2"
                                                        style="width: 32px; height: auto; border-radius: 4px;" />
                                                    <div class="d-flex gap-2">
                                                        <div class="fw-semibold text-dark" style="font-size: 14px;">
                                                            {{
                                                                StoreAirCompany.find((airline: any) => airline.Code ===
                                                                    segment.MarketingAirline)
                                                                    ?.Value || 'Unknown Airline'
                                                            }}
                                                            <span class="text-muted">({{ segment.FlightNum || 'SA-1254'
                                                            }})</span>
                                                        </div>
                                                        <div class="d-flex align-items-center mt-1">
                                                            <Briefcase v-if="segment.Baggage" class="me-2"
                                                                color="#5a2dd7" :size="16" />
                                                            <Luggage v-if="segment.CabinBaggage" color="#5a2dd7"
                                                                :size="16" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </b-card-header>
                                    <b-card-body class="p-4 pb-0">
                                        <b-row class="g-4">
                                            <b-col sm="4" md="2" class="mt-0 text-start ms-5 ps-4">
                                                <h4 class="fw-bold fs-6"> {{ flight[0]?.Departure.Date.split(" ")[1] }}
                                                </h4>
                                                <p class="mb-0" style="font-size: smaller;">{{ flight[0]?.Departure.Iata
                                                    }}<span v-if="flight[0]?.Departure.Terminal">-Терминал</span>
                                                    {{ flight[0]?.Departure.Terminal || '' }}</p>
                                                <p class="mb-0" style="font-size: smaller;">
                                                    {{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata
                                                        ===
                                                        flight[0]?.Departure.Iata).City}}</p>

                                                <p class="text-black mb-0" style="font-size: x-small;">{{
                                                    formatDate(flight[0]?.Departure.Date) }}</p>

                                            </b-col>

                                            <b-col sm="4" md="3" class=" text-center mt-3">
                                                <h5 class="mt-0  fw-light mb-0 pb-0" style="font-size: smaller;">{{
                                                    getTotalFlightTime(Mainindex, findex)
                                                    }}
                                                </h5>
                                                <div class="position-relative my-4 mt-0">
                                                    <hr class="bg-primary opacity-5 position-relative" />

                                                    <div class="icon-container"
                                                        style="display: flex; justify-content: space-evenly; flex-wrap: wrap; "
                                                        v-if="getStopIatas(Mainindex, findex).length > 0">
                                                        <div v-for="(segment, idx) in getStopIatas(Mainindex, findex)"
                                                            :key="'segment-' + idx">
                                                            <div class="icon-xs bg-primary text-white  position-relative"
                                                                style="transform: translate(10%, -250%); width: 8px;height: 8px;">
                                                                <p class="mt-2 text-black custom-margin"
                                                                    style="transform: rotate(0deg); display: inline-block; font-size: smaller;">
                                                                    {{ segment }}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-else>
                                                        <div class="icon-xs text-white position-relative"
                                                            style="transform: translate(10%, -150%); width: 8px;height: 8px;">
                                                            <p class="mt-4 text-black fs-6 custom-margin"
                                                                style="transform: rotate(0deg); display: inline-block;">

                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="icon-container"
                                                        style="display: flex; justify-content: space-between; ">
                                                        <div class="icon-xs bg-secondary text-white  position-relative"
                                                            style="transform: translate(0%, -350%); width: 8px;height: 8px;">
                                                        </div>
                                                        <div class="icon-xs bg-secondary text-white  position-relative"
                                                            style="transform: translate(0%, -350%); width: 8px;height: 8px;">
                                                        </div>
                                                    </div>
                                                </div>

                                            </b-col>

                                            <b-col sm="4" md="2" class="mt-0  text-start mt-0 ">
                                                <h4 class="fs-6">
                                                    {{ flight[flight.length -
                                                        1].Arrival.Date.split(" ")[1] }}
                                                </h4>


                                                <p class="mb-0" style="font-size: smaller;">{{
                                                    flight[flight.length -
                                                        1].Arrival.Iata }}<span v-if="flight[flight.length -
                                                        1].Arrival.Terminal">-Терминал</span>
                                                    {{
                                                        flight[flight.length -
                                                            1].Arrival.Terminal || '' }}</p>
                                                <p class="mb-0" style="font-size: smaller;">
                                                    {{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata
                                                        ===
                                                        flight[flight.length -
                                                            1].Arrival.Iata).City}}</p>
                                                <p class="text-black mb-0" style="font-size: x-small;">{{
                                                    formatDate(flight[flight.length -
                                                        1].Arrival.Date) }}</p>

                                            </b-col>
                                            <b-col v-if="moreFlights(Mainindex).length - 1 == findex" md="4"
                                                class="text-md-end mt-0">

                                                <h6 v-if="paginatedFlights[Mainindex].TotalPrice != paginatedFlights[Mainindex].AdultPrice"
                                                    class="d-flex fw-light flex-column mb-3 pt-2 "
                                                    style="font-size: smaller;">
                                                    {{ t('txtAdult') }}: {{
                                                        Math.ceil((paginatedFlights[Mainindex].AdultPrice *
                                                            parseFloat(rate))).toLocaleString() }}{{ currency }}
                                                    <span v-if="paginatedFlights[Mainindex].ChildPrice" class="mt-1">
                                                        {{ t('txtChild') }}: {{
                                                            Math.ceil((paginatedFlights[Mainindex].ChildPrice *
                                                                parseFloat(rate))).toLocaleString() }}{{ currency }}

                                                    </span>

                                                    <span v-if="paginatedFlights[Mainindex].InfantPrice" class="mt-1">
                                                        {{ t('txtInfants') }}: {{

                                                            Math.ceil((paginatedFlights[Mainindex].InfantPrice *
                                                                parseFloat(rate))).toLocaleString() }}{{ currency }}

                                                    </span>
                                                </h6>
                                                <h4 class="fw-bold fs-6 text-dark ms-3" v-else>
                                                    {{ Math.ceil((paginatedFlights[Mainindex].AdultPrice *
                                                        parseFloat(rate))).toLocaleString() }}{{ currency }}
                                                </h4>
                                                <h4 v-if="paginatedFlights[Mainindex].TotalPrice != paginatedFlights[Mainindex].AdultPrice"
                                                    class="d-flex align-items-center flex-wrap gap-2 justify-content-start justify-content-md-end">



                                                    <div
                                                        class="d-flex justify-content-end align-items-center mb-0 mt-0">
                                                        <!-- Насанд хүрэгчид -->
                                                        <span class="fw-medium fs-6 text-primary">
                                                            {{ Number(route.query.adults) }}
                                                        </span>
                                                        <!-- <User :size="25" color="#3949AB" /> -->
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                            viewBox="0 0 320 512"
                                                            class="text-primary h-4 w-4 text-[#F8C5B3]" height="20px"
                                                            width="20px" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z">
                                                            </path>
                                                        </svg>

                                                        <span v-if="paginatedFlights[Mainindex].ChildPrice">
                                                            <!-- Хүүхдүүд -->
                                                            <span class="fw-medium fs-6 text-primary">
                                                                {{ Number(route.query.childs) }}
                                                            </span>
                                                            <!-- <User :size="15" color="#3949AB" /> -->
                                                            <svg stroke="currentColor" fill="currentColor"
                                                                stroke-width="0" viewBox="0 0 384 512"
                                                                class="text-primary h-4 w-4 text-[#F8C5B3]"
                                                                height="20px" width="20px"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M256 64A64 64 0 1 0 128 64a64 64 0 1 0 128 0zM152.9 169.3c-23.7-8.4-44.5-24.3-58.8-45.8L74.6 94.2C64.8 79.5 45 75.6 30.2 85.4s-18.7 29.7-8.9 44.4L40.9 159c18.1 27.1 42.8 48.4 71.1 62.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V384h32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V221.6c29.1-14.2 54.4-36.2 72.7-64.2l18.2-27.9c9.6-14.8 5.4-34.6-9.4-44.3s-34.6-5.5-44.3 9.4L291 122.4c-21.8 33.4-58.9 53.6-98.8 53.6c-12.6 0-24.9-2-36.6-5.8c-.9-.3-1.8-.7-2.7-.9z">
                                                                </path>
                                                            </svg>
                                                        </span>

                                                        <span v-if="paginatedFlights[Mainindex].InfantPrice">
                                                            <!-- Хүүхдүүд -->
                                                            <span class="fw-medium fs-6 text-primary">
                                                                {{ Number(route.query.infants) }}
                                                            </span>
                                                            <!-- <User :size="10" color="#3949AB" /> -->
                                                            <svg stroke="currentColor" fill="currentColor"
                                                                stroke-width="0" viewBox="0 0 448 512"
                                                                class="text-primary h-4 w-4 text-[#F8C5B3]"
                                                                height="20px" width="20px"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>


                                                    <!-- Үнэ -->
                                                    <span class="fw-bold fs-6 text-dark ms-3">
                                                        {{ Math.ceil((Number(paginatedFlights[Mainindex].TotalPrice) *
                                                            parseFloat(rate))).toLocaleString() }}
                                                        {{ currency }}
                                                    </span>
                                                </h4>

                                                <b-button variant="dark" class="mb-0 mb-sm-2"
                                                    :id="`toggleOption${Mainindex}${segments.FlightNum}`"
                                                    :aria-controls="`flightOption${segments.FlightNum}`"
                                                    v-b-toggle="`flightOption${Mainindex}${segments.FlightNum}`"
                                                    @click="fetchOptions(offer.OfferCode, SearchGuid)">
                                                    {{ t('txtChoose') }}
                                                </b-button>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                    <div>
                                        <div v-for="(offseg, offsegIdx) in flight" :key="'offseg-' + offsegIdx">
                                            <div v-if="offseg.SelfConnect == 'true'" class="card-footer pt-4">
                                                <ul class="list-inline bg-light rounded-2 d-sm-flex text-end justify-content-sm-end mb-0 px-4 py-2"
                                                    style="font-size: small;">
                                                    <li v-if="flight.length > 0" class="list-inline-item text-orange">
                                                        {{ getTotalStops(Mainindex, findex) }} {{ t('txtFlightStop') }}
                                                    </li>
                                                    <li class="list-inline-item text-center" style="font-size: small;">
                                                        <h6 class="fw-medium mb-0" style="font-size: small;">
                                                            {{ t('txtSelfTBag') }} <br />
                                                            (Self-transfer baggage)
                                                        </h6>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>







                        <div class="card-footer pt-0" style="font-size: smaller;">
                            <ul
                                class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
                                <li class="d-flex align-items-center list-inline-item text-primary"
                                    style="font-size: smaller;">{{
                                        t('txtAvailableSeat') }}: {{
                                        segments.ResBookDesigQuantity
                                    }}</li>
                                <h6 class="d-flex fw-medium mb-0 align-items-center" style="font-size: smaller;"><span
                                        class="fw-medium">{{
                                            t('txtClass') }}:</span> {{
                                            segments.FlightClass }}</h6>
                                <li class="list-inline-item" style="font-size: smaller;">
                                    <a :to="'/some-route/' + Mainindex + segments.FlightNum"
                                        :id="'toggleButton' + Mainindex + segments.FlightNum"
                                        :aria-controls="'flightDetail' + segments.FlightNum"
                                        v-b-toggle="'flightDetail' + Mainindex + segments.FlightNum"
                                        class="btn-more d-flex align-items-center collapsed p-0 mb-0" role="button">
                                        {{ t('txtFlightDetail') }}
                                        <ChevronDown />
                                    </a>
                                </li>
                            </ul>
                            <b-collapse :id="'flightDetail' + Mainindex + segments.FlightNum" class="multi-collapse">
                                <div class="pt-3">
                                    <!-- <p>{{ segments }}</p>
                                    <p>{{ Mainindex }}</p> -->
                                    <FlightDetailTab :flight="segments" :index="Mainindex" />
                                </div>
                            </b-collapse>
                            <b-collapse :id="`flightOption${Mainindex}${segments.FlightNum}`" class="multi-collapse">
                                <div class="pt-3" v-if="isOptionLoaded">
                                    <OptionBooking :offerCode="offer.OfferCode" :searchGuid="SearchGuid" />
                                </div>
                            </b-collapse>
                        </div>


                    </b-card>
                </div>
            </div>

        </div>
        <!-- Хуудаслалтын товчнууд -->
        <!-- <div class="d-flex justify-content-center mt-4">
            <b-button @click="prevPage" :disabled="currentPage === 1">Өмнөх</b-button>
            <span class="mx-3">Хуудас {{ currentPage }} / {{ totalPages }}</span>
            <b-button @click="nextPage" :disabled="currentPage === totalPages">Дараагийн</b-button>
        </div> -->
        <Pagination :currentPage="currentPage" :totalPages="totalPages"
            @update:currentPage="page => currentPage = page" />
    </div>

</template>

<script lang="ts" setup>
import { faAngleDown, faPlane } from '@fortawesome/free-solid-svg-icons'
import FlightDetailTab from '@/views/flights/List/components/FlightDetailTab.vue'
import OptionBooking from '@/views/flights/List/components/OptionBooking.vue'
import { currency } from '@/helpers/constants'
import { computed, watch, ref } from 'vue'
import { useRouter } from 'vue-router';
import flightLogo from '@/assets/images/element/09.svg'
import { ChevronDown, Briefcase, Luggage, User } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import SkeletonLoader from './Skeleton.vue'
import { useOptionStore } from '@/stores/optionStore'
import { useI18n } from 'vue-i18n'
import Pagination from '@/views/flights/List/components/Pagination.vue'

const { t, locale } = useI18n()


// import { chevron-down } from 'bootstrap-icons-vue'

import { PlaneTakeoff } from 'lucide-vue-next';

import { useFlightStore } from '@/stores/flight';
import { string } from 'yup'
// Props
// Fallback logo

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);
const rate = sessionStorage.getItem('eur')
// const trips = ref<number>(Number(sessionStorage.getItem("trips")) || 1);
// const tripcount = sessionStorage.getItem("trips")?.length || 0;
const trips = parseInt(sessionStorage.getItem("trips") || "0", 10);
const optionStore = useOptionStore();

const isOptionLoaded = ref(false);
const router = useRouter();
async function fetchOptions(offerCode: string, searchGuid: string) {

    console.log(`Fetching for: ${offerCode}, ${searchGuid}`);
    if (!offerCode || !searchGuid) return;

    try {
        const response = await fetch(`https://api.airkacc.mn/api/prebooking/mn/?offerCode=${offerCode}&searchGuid=${searchGuid}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        optionStore.optionInfos = data;
        sessionStorage.setItem("PreBooking", JSON.stringify(data));
        isOptionLoaded.value = true; // Show the component after fetching
        if (!optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult?.Tariffs) {
            // Redirect to /flights/detail if Tariffs is missing
            sessionStorage.removeItem("Option")
            router.push({ path: '/flights/detail' });

        }
    } catch (error) {
        console.error('Error fetching options:', error);
    }
}



const route = useRoute();
const fallbackLogo = flightLogo


function formatDate(input: string): string {
    const [day, month, yearAndTime] = input.split(".");
    const [year, time] = yearAndTime.split(" ");
    return `${year}-${month}-${day}`;
}

const flightStore = useFlightStore();


// const filters = ref({
//   StoreflightInfos: [],
// });



// const selectedAirlines = computed(() => filters.value.StoreflightInfos);

// Access state
const StoreflightInfos = computed(() => flightStore.flightInfos ?? []);
// console.log(flightStore.flightInfos.FlightData[0].Offers.OfferInfo[0].Segments.OfferSegment[0].AirCraft)
const StoreAirCompany = computed(() => flightStore.AirCompany);
const StoreAirPorts = computed(() => flightStore.AirPorts);
const SearchGuid = computed(() => flightStore.SearchGuid);
// let filteredData = computed(() => flightStore.firstAdultPrice || []);
// const filteredData = computed(() => flightStore.firstAdultPrice.length > 0 ? flightStore.firstAdultPrice : flightStore.flightInfos);

const sortOrder = ref(null)

const setSortOrder = (order) => {
    sortOrder.value = order
}

const selectedSortLabel = computed(() => {
    if (sortOrder.value === 'asc') return t('txtPriceASC')
    if (sortOrder.value === 'desc') return t('txtPriceDESC')
    return t('txtPriceSort')
})

const filteredData = computed(() => {
    const source = flightStore.firstAdultPrice.length > 0
        ? flightStore.firstAdultPrice
        : flightStore.flightInfos

    if (!sortOrder.value) return source

    return [...source].sort((a, b) => {
        const priceA = a.AdultPrice || 0
        const priceB = b.AdultPrice || 0
        return sortOrder.value === 'asc' ? priceA - priceB : priceB - priceA
    })
})





const isHovered = ref<{ [key: string]: boolean }>({});

function getFlightKey(index: number) {
    return `${index}`;
}

function onMouseOver(key: string) {
    isHovered.value[key] = true;
}

function onMouseLeave(key: string) {
    isHovered.value[key] = false;
}


// const getFlightData = (index: number) => {
//     return filteredData.value[index]?.Offers?.OfferInfo || [];
// };

const getFlightData = (index: number) => {
    return paginatedFlights.value[index]?.Offers?.OfferInfo || [];
};




let test = 1;

const moreFlights = (index: number) => {
    const data = getFlightData(index);
    let filter: any[][] = [];  // Array of arrays to store segments for each i value

    const tripCount = trips.toString();



    // console.log(trips)
    // Iterate through Rph values starting from 1, ending at `trips.value`
    for (let i = 1; i <= trips; i++) {
        let currentFilter: any[] = [];

        if (data.some((offer: { Rph: string }) => offer.Rph === tripCount)) {
            currentFilter = data
                .filter((offer: { Rph: string }) => offer.Rph === i.toString())
                .flatMap((offer: { Segments: { OfferSegment: any[] } }) => offer.Segments.OfferSegment);
        } else {
            currentFilter = data
                .flatMap((offer: { Segments?: { OfferSegment?: any[] } }) => offer.Segments?.OfferSegment || [])
                .filter((segment: { Rph: string }) => segment.Rph === i.toString());
        }

        // Store the current filter array for each i value
        filter.push(currentFilter);
    }

    if (test == 1) {
        // console.log(filter);
        test = test + 1;
    }

    return filter;
};


const getFlightData2 = (index: number) => {
    // return filteredData.value[index] || { Offers: { OfferInfo: [] } };
    return paginatedFlights.value[index] || { Offers: { OfferInfo: [] } };
};


// const getAllSegments = (index: number) => {
//    return getFlightData2(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
// };

const getAllSegments = (offer: any) => {
    // console.log(offer)
    const offerData = offer || { Offers: { OfferInfo: [] } }
    // console.log(offerData.Offers.OfferInfo.flatMap((offer: { Segments?: { OfferSegment?: any } }) => offer.Segments?.OfferSegment) || [])
    return offerData.Offers.OfferInfo.flatMap((offer: { Segments?: { OfferSegment?: any } }) => offer.Segments?.OfferSegment) || [];
};

const getTotalStops = (index: number, findex: number) => {
    return moreFlights(index)[findex].length - 1
    // if (i === 1) {
    //     return departureFlights(index).length - 1
    // } else {
    //     return returnFlights(index).length - 1
    // }

};
const getStopIatas = (index: number, findex: number) => {
    return moreFlights(index)[findex].slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata)
    // if (i === 1) {
    //     return departureFlights(index).slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata)
    // } else {
    //     return returnFlights(index).slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata)
    // };
}

// const getFirstDeparture = (index: number) => getAllSegments(index)[0]?.Departure.Iata || "N/A";
// const getFirstDepartureTime = (index: number) => getAllSegments(index)[0]?.Departure.Date || "N/A";
// const getLastArrival = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Iata || "N/A";
// const getLastArrivalTime = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Date || "N/A";
const getTotalFlightTime = (index: number, findex: number) => {
    const totalMinutes = moreFlights(index)[findex].reduce(
        (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
        0
    );

    const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
    const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

    return `${hours} ${t('txtHour')} ${minutes} ${t('txtMin')}`; // Цаг, минутын форматаар буцаана
    // if (i === 1) {
    //     const totalMinutes = moreFlights(index)[findex].reduce(
    //         (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
    //         0
    //     );

    //     const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
    //     const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

    //     return `${hours} цаг ${minutes} мин`; // Цаг, минутын форматаар буцаана
    // } else {
    //     const totalMinutes = returnFlights(index).reduce(
    //         (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
    //         0
    //     );

    //     const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
    //     const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

    //     return `${hours} цаг ${minutes} мин`; // Цаг, минутын форматаар буцаана
    // }

};


watch(filteredData, (newValue, oldValue) => {
    console.log("filteredData өөрчлөгдлөө:", oldValue, "->", newValue);

    console.log("filteredData:", filteredData);
}, { deep: true });


// Хуудаслалтын хувьсагч
const currentPage = ref(1); // Одоогийн хуудас
const itemsPerPage = 20; // Нэг хуудсанд харагдах нислэгийн тоо

// Хуудаслалтын өгөгдөл
const paginatedFlights = computed(() => {
    let start = (currentPage.value - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    if (filteredData.value.length <= itemsPerPage) {
        return filteredData.value;
    }
    console.log(filteredData.value.slice(start, end))
    return filteredData.value.slice(start, end);
});

// Нийт хуудасны тоо
const totalPages = computed(() => {
    return Math.ceil(filteredData.value.length / itemsPerPage);
});

// Өмнөх хуудас руу шилжих
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        window.scrollTo({ top: 400, behavior: "smooth" }); // Дээгүүр нь гүйлгэх
    }
};

// Дараагийн хуудас руу шилжих
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        window.scrollTo({ top: 400, behavior: "smooth" }); // Дээгүүр нь гүйлгэх
    }
};


</script>



<style scoped>
.tooltip {
    position: absolute;
    bottom: 110%;
    width: 300px;
    /* Tooltip-ийн байрлал */
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(175, 175, 175);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 1;
    z-index: 10;
}


.custom-margin {
    margin-left: -8px;
}
</style>
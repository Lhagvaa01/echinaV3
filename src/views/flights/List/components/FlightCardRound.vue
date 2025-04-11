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
        <div v-for="(offer, Mainindex) in paginatedFlights" :key="Mainindex" class="mb-4">
            <div>
                <div v-for="(segments, inx) in getAllSegments(offer).slice(0, 1)" :key="inx">
                    <b-card no-body class="border" :key="segments.FlightNum">

                        <div>
                            <!-- <p>{{ moreFlights(Mainindex).length }}</p> -->
                            <div v-for="(flight, findex) in moreFlights(Mainindex)" :key="findex">
                                <!-- <span>{{ flight }}</span> -->
                                <div v-if="flight.length > 0">
                                    <h6 class="m-3 fw-bold d-flex align-items-center">
                                        <PlaneTakeoff color="#009dff" :size="32" class="me-3" />
                                        {{ (show == 2 && moreFlights(Mainindex).length - 1 === findex) ? 'Буцах нислэг'
                                            :
                                            'Явах нислэг' }}
                                    </h6>
                                    <b-card-header class="d-sm-flex justify-content-sm-between align-items-center">

                                        <div class="d-flex align-items-center mb-2 mb-sm-0">
                                            <img :src="flight[0]?.MarketingAirline
                                                ? 'https://api.echina.mn/assets/d/' + flight[0]?.MarketingAirline + '.png'
                                                : fallbackLogo" alt="Airline logo" class="me-2"
                                                style="width: 30px; height: auto;" />
                                            <h6 class="fw-normal mb-0">
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
                                                +{{ flight.length - 1 }} Airline
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

                                        <h6 class="fw-bold mb-0">{{ flight.length > 1 ? 'Дамжин нислэг' :
                                            'Шууд нислэг' }}</h6>
                                    </b-card-header>
                                    <b-card-body class="p-4 pb-0">
                                        <b-row class="g-4">
                                            <b-col sm="4" md="3" class="mt-0">
                                                <h4> {{ flight[0]?.Departure.Date.split(" ")[1] }}</h4>
                                                <p class="fw-bold text-black mb-0">{{
                                                    formatDate(flight[0]?.Departure.Date) }}</p>
                                                <p class="mb-0">{{ flight[0]?.Departure.Iata }}<span
                                                        v-if="flight[0]?.Departure.Terminal">-Терминал</span>
                                                    {{ flight[0]?.Departure.Terminal || '' }}</p>
                                                <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata
                                                    ===
                                                    flight[0]?.Departure.Iata).City}}</p>

                                            </b-col>

                                            <b-col sm="4" md="3" class="my-sm-auto text-center">
                                                <h5 class="mt-3">{{ getTotalFlightTime(Mainindex, findex) }}</h5>
                                                <div class="position-relative my-4">
                                                    <hr class="bg-primary opacity-5 position-relative" />

                                                    <div class="icon-container"
                                                        style="display: flex; justify-content: space-evenly; flex-wrap: wrap; "
                                                        v-if="getStopIatas(Mainindex, findex).length > 0">
                                                        <div v-for="(segment, idx) in getStopIatas(Mainindex, findex)"
                                                            :key="'segment-' + idx">
                                                            <div class="icon-xs bg-primary text-white rounded-circle position-relative"
                                                                style="transform: translate(10%, -150%);">
                                                                <p class="mt-4 text-black fs-6 custom-margin"
                                                                    style="transform: rotate(0deg); display: inline-block;">
                                                                    {{ segment }}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-else>
                                                        <div class="icon-xs text-white rounded-circle position-relative"
                                                            style="transform: translate(10%, -150%);">
                                                            <p class="mt-4 text-black fs-6 custom-margin"
                                                                style="transform: rotate(0deg); display: inline-block;">

                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="icon-container"
                                                        style="display: flex; justify-content: space-between; ">
                                                        <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                                                            style="transform: translate(0%, -250%);">
                                                        </div>
                                                        <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                                                            style="transform: translate(0%, -250%);">
                                                        </div>
                                                    </div>
                                                </div>

                                            </b-col>

                                            <b-col sm="4" md="3" class="mt-0">
                                                <h4>
                                                    {{ flight[flight.length -
                                                        1].Arrival.Date.split(" ")[1] }}
                                                </h4>
                                                <p class="fw-bold text-black mb-0">{{
                                                    formatDate(flight[flight.length -
                                                        1].Arrival.Date) }}</p>

                                                <p class="mb-0">{{
                                                    flight[flight.length -
                                                        1].Arrival.Iata }}<span v-if="flight[flight.length -
                                                        1].Arrival.Terminal">-Терминал</span>
                                                    {{
                                                        flight[flight.length -
                                                            1].Arrival.Terminal || '' }}</p>
                                                <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata
                                                    ===
                                                    flight[flight.length -
                                                        1].Arrival.Iata).City}}</p>

                                            </b-col>
                                            <b-col v-if="moreFlights(Mainindex).length - 1 == findex" md="3"
                                                class="text-md-end">
                                                <h6 v-if="paginatedFlights[Mainindex].TotalPrice != paginatedFlights[Mainindex].AdultPrice"
                                                    class="d-flex flex-column">
                                                    Том хүн: {{ currency }}{{ paginatedFlights[Mainindex].AdultPrice }}
                                                    <span v-if="paginatedFlights[Mainindex].ChildPrice" class="mt-1">
                                                        Хүүхэд: {{ currency }}{{ paginatedFlights[Mainindex].ChildPrice
                                                        }}
                                                    </span>
                                                </h6>
                                                <h4 v-else>{{ currency }}{{ paginatedFlights[Mainindex].AdultPrice }}
                                                </h4>
                                                <h4 v-if="paginatedFlights[Mainindex].TotalPrice != paginatedFlights[Mainindex].AdultPrice"
                                                    class="d-flex align-items-center">
                                                    <span class="fw-medium fs-5 text-primary">{{ route.query.adults
                                                    }}</span>
                                                    <User :size="36" color="#3949AB" class="me-2" />
                                                    <span class="fw-medium fs-5 text-primary">{{ route.query.childs
                                                    }}</span>
                                                    <User color="#3949AB" class="me-2" />
                                                    {{
                                                        currency
                                                    }}{{
                                                        paginatedFlights[Mainindex].TotalPrice ||
                                                        '' }}
                                                </h4>
                                                <b-button variant="dark" class="mb-0 mb-sm-2"
                                                    :id="`toggleOption${Mainindex}${segments.FlightNum}`"
                                                    :aria-controls="`flightOption${segments.FlightNum}`"
                                                    v-b-toggle="`flightOption${Mainindex}${segments.FlightNum}`"
                                                    @click="fetchOptions(offer.OfferCode, SearchGuid)">
                                                    Сонгох
                                                </b-button>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                    <div>
                                        <div v-for="(offseg, offsegIdx) in flight" :key="'offseg-' + offsegIdx">
                                            <div v-if="offseg.SelfConnect == 'true'" class="card-footer pt-4">
                                                <ul
                                                    class="list-inline bg-light rounded-2 d-sm-flex text-end justify-content-sm-end mb-0 px-4 py-2">
                                                    <li v-if="flight.length > 0" class="list-inline-item text-orange">
                                                        {{ getTotalStops(Mainindex, findex) }} Зогсолттой нислэг
                                                    </li>
                                                    <li class="list-inline-item text-center">
                                                        <h6 class="fw-medium mb-0">
                                                            Ачаагаа өөрөө авч, дахин бүртгүүлэх шаардлагатай <br />
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







                        <div class="card-footer pt-4">
                            <ul
                                class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
                                <li class="list-inline-item text-primary">Боломжит суудал: {{
                                    segments.ResBookDesigQuantity
                                    }}</li>
                                <h6 class="fw-medium mb-0"><span class="fw-medium">Ангилал:</span> {{
                                    segments.FlightClass }}</h6>
                                <li class="list-inline-item">
                                    <router-link :to="'/some-route/' + Mainindex + segments.FlightNum"
                                        :id="'toggleButton' + Mainindex + segments.FlightNum"
                                        :aria-controls="'flightDetail' + segments.FlightNum"
                                        v-b-toggle="'flightDetail' + Mainindex + segments.FlightNum"
                                        class="btn-more d-flex align-items-center collapsed p-0 mb-0" role="button">
                                        Нислэгийн дэлгэрэнгүй
                                        <ChevronDown />
                                    </router-link>
                                </li>
                            </ul>
                            <b-collapse :id="'flightDetail' + Mainindex + segments.FlightNum" class="multi-collapse">
                                <div class="pt-3">
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
        <div class="d-flex justify-content-center mt-4">
            <b-button @click="prevPage" :disabled="currentPage === 1">Өмнөх</b-button>
            <span class="mx-3">Хуудас {{ currentPage }} / {{ totalPages }}</span>
            <b-button @click="nextPage" :disabled="currentPage === totalPages">Дараагийн</b-button>
        </div>
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


// import { chevron-down } from 'bootstrap-icons-vue'

import { PlaneTakeoff } from 'lucide-vue-next';

import { useFlightStore } from '@/stores/flight';
import { string } from 'yup'
// Props
// Fallback logo

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);
// const trips = ref<number>(Number(sessionStorage.getItem("trips")) || 1);
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
const filteredData = computed(() => flightStore.firstAdultPrice.length > 0 ? flightStore.firstAdultPrice : flightStore.flightInfos);


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


    console.log(trips)
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
    console.log(offerData.Offers.OfferInfo.flatMap((offer: { Segments?: { OfferSegment?: any } }) => offer.Segments?.OfferSegment) || [])
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

    return `${hours} цаг ${minutes} мин`; // Цаг, минутын форматаар буцаана
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
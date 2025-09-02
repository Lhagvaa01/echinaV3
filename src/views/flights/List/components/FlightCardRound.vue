<template>
    <!-- <div>Нийт нислэгийн тоо: {{ filteredData.length > 0 ? filteredData.length : StoreflightInfos.length }}</div> -->
    <!-- <div v-if="(filteredData.length > 0 ? filteredData.length : StoreflightInfos.length) == 0"> -->
    <!-- <b-modal v-model="showTimeoutModal" centered hide-header hide-footer :no-close-on-backdrop="true"
        :no-close-on-esc="true">
        <div class="text-center p-4">
            <i class="fas fa-exclamation-circle text-danger" style="font-size: 48px;"></i>
            <h4 class="text-danger mt-3">{{ t('txtWarning') }}</h4>
            <p class="mt-2 mb-1">{{ t('txtTimeEndFlight') }}</p>
            <b-button variant="danger" class="mt-3 px-4" @click="redirectToSearch">
                {{ t('txtAgain') }}
            </b-button>
        </div>
    </b-modal> -->
    <div v-if="(paginatedFlights.length) == 0">

        <div class="no-results-card">
            <div class="no-results-icon">
                <i class="fas fa-search"></i>
            </div>
            <p class="no-results-title">{{ t('txtNotFind') }}</p>
            <p class="no-results-subtitle">
                {{ t('txtNotFindText') }}
            </p>
        </div>
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

                    <!-- <ul class="dropdown-menu w-100" aria-labelledby="sortDropdown">
                        <li><a class="dropdown-item" href="#" @click.prevent="setSortOrder('asc')">{{ t('txtPriceASC')
                                }}</a></li>
                        <li><a class="dropdown-item" href="#" @click.prevent="setSortOrder('desc')">{{ t('txtPriceDESC')
                                }}</a>
                        </li>
                    </ul> -->
                    <ul class="dropdown-menu w-100" aria-labelledby="sortDropdown">
                        <li><a class="dropdown-item" href="#" @click.prevent="setSortOrder('asc')">
                                {{ t('txtPriceASC') }}
                            </a></li>
                        <li><a class="dropdown-item" href="#" @click.prevent="setSortOrder('desc')">
                                {{ t('txtPriceDESC') }}
                            </a></li>

                        <!-- Нэмэгдсэн: Хугацаагаар эрэмжлэх -->
                        <li><a class="dropdown-item" href="#" @click.prevent="setSortOrder('timeAsc')">
                                {{ t('txtTimeASC') /* ж: Хамгийн бага хугацаа */ }}
                            </a></li>
                        <li><a class="dropdown-item" href="#" @click.prevent="setSortOrder('timeDesc')">
                                {{ t('txtTimeDESC') /* ж: Хамгийн их хугацаа */ }}
                            </a></li>
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
        <FlightOfferCard v-for="(offer, idx) in paginatedFlights" :key="offer.OfferCode || idx" :offer="offer"
            :index="idx" :rate="rate" :currency="currency" :adults="Number(route.query.adults)"
            :childs="Number(route.query.childs)" :infants="Number(route.query.infants)" :searchGuid="SearchGuid"
            :showOverride="show" />

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
import { computed, watch, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router';
import flightLogo from '@/assets/images/element/09.svg'
import { ChevronDown, Briefcase, Luggage, User } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import SkeletonLoader from './Skeleton.vue'
import { useOptionStore } from '@/stores/optionStore'
import { useI18n } from 'vue-i18n'
import Pagination from '@/views/flights/List/components/Pagination.vue'
import FlightOfferCard from '@/components/FlightOfferCard.vue'
const { t, locale } = useI18n()
const rateFromStorage = computed(() => {
    if (typeof window === 'undefined') return 1
    const v = window.sessionStorage.getItem('eur')
    return v ? parseFloat(v) : 1
})

// import { chevron-down } from 'bootstrap-icons-vue'

import { PlaneTakeoff } from 'lucide-vue-next';
import PlaneUp from '@/assets/images/Icon/planeup.svg';


import { useFlightStore } from '@/stores/flight';
import { string } from 'yup'
// Props
// Fallback logo

function getDotPositionStyle(index, total) {
    const percent = ((index + 1) / (total + 1)) * 100;
    return {
        left: `${percent}%`,
        transform: 'translate(-50%, -20%)',
        top: '0',
        bottom: '20px'
    };
}

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);
const rate = sessionStorage.getItem('eur') || '1'

const travelers = JSON.parse(sessionStorage.getItem("travelers") || '{}');
const totalPassengers = (travelers.adults || 0) + (travelers.childs || 0) + (travelers.infants || 0);

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


const detailsShown = ref({});

function showDetail(key) {
    detailsShown.value[key] = !detailsShown.value[key];
}

const detailsShowO = ref({});

function showDetailO(key, code, guid) {
    fetchOptions(code, guid);
    detailsShowO.value[key] = !detailsShowO.value[key];

}

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

// const selectedSortLabel = computed(() => {
//     if (sortOrder.value === 'asc') return t('txtPriceASC')
//     if (sortOrder.value === 'desc') return t('txtPriceDESC')
//     return t('txtPriceSort')
// })
const selectedSortLabel = computed(() => {
    if (sortOrder.value === 'asc') return t('txtPriceASC')
    if (sortOrder.value === 'desc') return t('txtPriceDESC')
    if (sortOrder.value === 'timeAsc') return t('txtTimeASC')   // Хамгийн бага хугацаа
    if (sortOrder.value === 'timeDesc') return t('txtTimeDESC') // Хамгийн их хугацаа
    return t('txtPriceSort')
})


const getTotalMinutes = (item) => {
    // Хэрэв backend өөр талбар хэрэглэдэг бол эндээс нэг л газраас засахад болно
    try {
        const offerInfos = item?.Offers?.OfferInfo || []
        let total = 0
        for (const oi of offerInfos) {
            const segs = oi?.Segments?.OfferSegment || []
            for (const s of segs) {
                const m = parseInt(s?.FlightMinutes, 10)
                if (!isNaN(m)) total += m
            }
        }
        return total
    } catch (_) {
        return 0
    }
}



const filteredData = computed(() => {
    const source = flightStore.firstAdultPrice.length > 0
        ? flightStore.firstAdultPrice
        : StoreflightInfos.value

    // console.log(source)
    if (!sortOrder.value) return source

    // return [...source].sort((a, b) => {
    //     const priceA = a.AdultPrice || 0
    //     const priceB = b.AdultPrice || 0
    //     return sortOrder.value === 'asc' ? priceA - priceB : priceB - priceA
    // })

    return [...source].sort((a, b) => {
        // Үнийн тооцоо – string байх магадлалтай тул parseFloat
        const priceA = parseFloat(a.AdultPrice ?? a?.TariffInfo?.AdultPrice ?? 0) || 0
        const priceB = parseFloat(b.AdultPrice ?? b?.TariffInfo?.AdultPrice ?? 0) || 0

        // Хугацааны тооцоо (нийт минут)
        const timeA = getTotalMinutes(a)
        const timeB = getTotalMinutes(b)

        switch (sortOrder.value) {
            case 'asc': return priceA - priceB            // Үнэ өсөх
            case 'desc': return priceB - priceA            // Үнэ буурах
            case 'timeAsc': return timeA - timeB              // Хугацаа бага → эхэнд
            case 'timeDesc': return timeB - timeA              // Хугацаа их → эхэнд
            default: return 0
        }
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

// const moreFlights = (index: number) => {
//     const data = getFlightData(index);
//     let filter: any[][] = [];  

//     const tripCount = trips.toString();
//     for (let i = 1; i <= trips; i++) {
//         let currentFilter: any[] = [];

//         if (data.some((offer: { Rph: string }) => offer.Rph === tripCount)) {
//             currentFilter = data
//                 .filter((offer: { Rph: string }) => offer.Rph === i.toString())
//                 .flatMap((offer: { Segments: { OfferSegment: any[] } }) => offer.Segments.OfferSegment);
//         } else {
//             currentFilter = data
//                 .flatMap((offer: { Segments?: { OfferSegment?: any[] } }) => offer.Segments?.OfferSegment || [])
//                 .filter((segment: { Rph: string }) => segment.Rph === i.toString());
//         }

//         filter.push(currentFilter);
//     }

//     if (test == 1) {
//         test = test + 1;
//     }

//     return filter;
// };
const moreFlightsCache = ref({});
const moreFlights = (offer, index) => {
    const key = offer.OfferCode || index;
    if (!moreFlightsCache.value[key]) {
        // ... бодоод хадгална (чиний кодоос шууд хуул)
        const data = getFlightData(index);
        let filter = [];
        const tripCount = trips.toString();
        for (let i = 1; i <= trips; i++) {
            let currentFilter = [];
            if (data.some((o) => o.Rph === tripCount)) {
                currentFilter = data.filter((o) => o.Rph === i.toString()).flatMap((o) => o.Segments.OfferSegment);
            } else {
                currentFilter = data.flatMap((o) => o.Segments?.OfferSegment || []).filter((s) => s.Rph === i.toString());
            }
            filter.push(currentFilter);
        }
        moreFlightsCache.value[key] = filter;
    }
    return moreFlightsCache.value[key];
};

// watch(currentPage, () => {
//   moreFlightsCache.value = {};
// });


const getFlightData2 = (index: number) => {
    // return filteredData.value[index] || { Offers: { OfferInfo: [] } };
    return paginatedFlights.value[index] || { Offers: { OfferInfo: [] } };
};


// const getAllSegments = (index: number) => {
//    return getFlightData2(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
// };

// const getAllSegments = (offer: any) => {
//     const offerData = offer || { Offers: { OfferInfo: [] } }
//     return offerData.Offers.OfferInfo.flatMap((offer: { Segments?: { OfferSegment?: any } }) => offer.Segments?.OfferSegment) || [];
// };

const allSegmentsCache = ref({});

const getAllSegments = (offer) => {
    if (!offer?.OfferCode) return [];
    if (!allSegmentsCache.value[offer.OfferCode]) {
        allSegmentsCache.value[offer.OfferCode] =
            offer.Offers.OfferInfo?.flatMap(o => o.Segments?.OfferSegment || []) || [];
    }
    return allSegmentsCache.value[offer.OfferCode];
};

const getTotalStops = (offer, index: number, findex: number) => {
    return moreFlights(offer, index)[findex].length - 1

};
const getStopIatas = (offer, index: number, findex: number) => {
    return moreFlights(offer, index)[findex].slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata)

}

// const getFirstDeparture = (index: number) => getAllSegments(index)[0]?.Departure.Iata || "N/A";
// const getFirstDepartureTime = (index: number) => getAllSegments(index)[0]?.Departure.Date || "N/A";
// const getLastArrival = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Iata || "N/A";
// const getLastArrivalTime = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Date || "N/A";
const getTotalFlightTime = (offer, index: number, findex: number) => {
    const totalMinutes = moreFlights(offer, index)[findex].reduce(
        (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
        0
    );

    const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
    const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

    return `${hours} ${t('txtHour')} ${minutes} ${t('txtMin')}`; // Цаг, минутын форматаар буцаана

};


watch(filteredData, (newValue, oldValue) => {
    // console.log("filteredData өөрчлөгдлөө:", oldValue, "->", newValue);

    // console.log("filteredData:", filteredData);
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
    // console.log(filteredData.value.slice(start, end))
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



watch([paginatedFlights, currentPage], () => {
    moreFlightsCache.value = {};
    allSegmentsCache.value = {};
}, { immediate: true });
;
const showTimeoutModal = ref(false);

function redirectToSearch() {
    window.location.reload();
}

let timeoutId: number | undefined;

onMounted(() => {
    timeoutId = window.setTimeout(() => {
        showTimeoutModal.value = true;
    }, 200000); // 20 секунд
});

onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId);
});

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

.vertical-divider {
    border-left: 1px dashed #ccc;
    width: 100%;
    /* эсвэл 100% гэж болно */
    margin: 0 0px;
}

@media (max-width: 768px) {
    .vertical-divider {
        display: none !important;
        /* mobile дээр divider алга болго */
    }
}
</style>
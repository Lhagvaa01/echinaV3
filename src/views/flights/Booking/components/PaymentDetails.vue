<template>
  <!-- <b-col xl="8"> -->
  <div>
    <div>
      <div v-for="(segment, inx) in getAllSegments().slice(0, 1)" :key="inx">
        <b-card no-body class="border" :key="segment.FlightNum">
          <b-card-header class="d-sm-flex justify-content-sm-between align-items-center">
            <div class="d-flex align-items-center mb-2 mb-sm-0">
              <img :src="segment.MarketingAirline
                ? 'https://api.echina.mn/assets/d/' + segment.MarketingAirline + '.png'
                : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
              <h6 class="fw-normal mb-0">
                <!-- {{Array.isArray(StoreAirCompany) && segment.MarketingAirline ? StoreAirCompany?.find((airline: any) =>
                    airline.Code ===
                    segment.MarketingAirline)?.Value : "No Air Company"}} -->
                {{ segment.MarketingAirlineName }} ({{ segment.FlightNum || 'SA-1254' }})
                <!-- ({{ segment.FlightNum || 'SA-1254' }}) -->
                <!-- <span v-if="getAllSegments().length > 1" class="text-warning ">+{{ getAllSegments().length - 1
                    }}Airline</span> -->

              </h6>
              <p v-if="(getAllSegments().length - 1) >= 1" class="ms-2 text-warning"
                @mouseover="onMouseOver(inx + segment.FlightNum)" @mouseleave="onMouseLeave(inx + segment.FlightNum)">
                +{{ getAllSegments().length - 1 }} Airlines
              </p>
              <!-- Tooltip -->
              <div v-if="isHovered[inx + segment.FlightNum]" class="tooltip text-white">
                ss
                <!-- <div v-for="segments in getAllSegments()" :key="segments.FlightNum"
                    class="d-flex justify-content-sm-start align-items-center">
                    <img :src="segments.MarketingAirline
                      ? 'https://api.echina.mn/assets/d/' + segments.MarketingAirline + '.png'
                      : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                    <h6 class="fw-bold mb-0 text-primary">
                      {{ StoreAirCompany.find((airline: any) => airline.Code ===
                        segments.MarketingAirline).Value }}
                      ({{ segments.FlightNum || 'SA-1254' }})
                    </h6>
  
                    <Briefcase v-if="segments.Baggage" class="mx-2" color="#5a2dd7" />
                    <Luggage v-if="segments.CabinBaggage" color="#5a2dd7" />
  
                  </div> -->
              </div>
            </div>

            <h6 class="fw-bold mb-0">{{ t('txtTransit') }}</h6>
          </b-card-header>


          <b-card-body class="p-4 pb-0">
            <b-row class="g-3">
              <b-col sm="5" md="4" class="mt-0">
                <h4 style="font-size: small;"> {{ segment.Departure.Date.split(" ")[1] }}</h4>
                <!-- <h4> 22</h4> -->
                <p class="mb-0">{{ segment.Departure.Iata }}<span v-if="segment.Departure.Terminal">-Терминал</span>
                  {{ segment.Departure.Terminal || '' }}</p>
                <p class="mb-0">{{ segment.Departure.City }}</p>

                <p class=" text-black mb-0" style="font-size: small;">{{ formatDate(segment.Departure.Date) }}
                </p>

              </b-col>

              <b-col sm="5" md="4" class="my-sm-auto text-center">
                <!-- <h5 class="mt-3">{{ convertTimeText(segment.FlightTime) }}</h5> -->
                <h5 class="mt-3" style="font-size: small;">{{ getTotalFlightTime() }}</h5>
                <div class="position-relative my-4">
                  <hr class="bg-primary opacity-5 position-relative" />

                  <div class="icon-container" style="display: flex; justify-content: space-evenly; flex-wrap: wrap; ">
                    <div v-for="(segment, idx) in getStopIatas()" :key="'segment-' + idx">
                      <div class="icon-xs bg-primary text-white  position-relative"
                        style="transform: translate(10%, -250%); width: 8px;height: 8px;">
                        <p class="mt-3 text-black  custom-margin"
                          style="transform: rotate(0deg); display: inline-block; font-size: smaller; transform: translate(-30%, -0%);">
                          {{ segment }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="icon-container" style="display: flex; justify-content: space-between; ">
                    <div class="icon-xs bg-secondary text-white  position-relative"
                      style="transform: translate(0%, -350%); width: 8px;height: 8px;">
                    </div>
                    <div class="icon-xs bg-secondary text-white  position-relative"
                      style="transform: translate(0%, -350%); width: 8px;height: 8px;">
                    </div>
                  </div>
                </div>

              </b-col>

              <b-col sm="5" md="4" class="mt-0">
                <h4 style="font-size: small;"> {{ goSegments[goSegments.length - 1].Arrival.Date.split(" ")[1] }}</h4>
                <!-- <h4> 22</h4> -->
                <p class="mb-0">{{ goSegments[goSegments.length - 1].Arrival.Iata }}<span
                    v-if="goSegments[goSegments.length - 1].Arrival.Terminal">-Терминал</span>
                  {{ goSegments[goSegments.length - 1].Arrival.Terminal || '' }}</p>
                <!-- <p>{{ returnSegments }}</p> -->
                <p class="mb-0">{{ goSegments[goSegments.length - 1].Arrival.City }}</p>

                <p class=" text-black mb-0" style="font-size: small;">{{ formatDate(goSegments[goSegments.length -
                  1].Arrival.Date) }}
                </p>

              </b-col>


            </b-row>
          </b-card-body>


          <div>
            <template v-for="(segment, idx) in getAllSegments()" :key="'segment-' + idx">
              <!-- <div v-for="(offseg, offsegIdx) in segment.Segments.OfferSegment" :key="'offseg-' + offsegIdx"> -->
              <div v-if="segment.SelfConnect == 'true'" class="card-footer pt-4">
                <ul class="list-inline bg-light rounded-2 d-sm-flex text-end justify-content-sm-end mb-0 px-4 py-2">
                  <li v-if="getAllSegments().length > 0" class="list-inline-item text-orange">
                    {{ getTotalStops() }} {{ t('txtFlightStop') }}
                  </li>
                  <li class="list-inline-item text-center">
                    <h6 class="fw-medium mb-0">
                      {{ t('txtSelfTBag') }} <br />
                      (Self-transfer baggage)
                    </h6>
                  </li>
                </ul>
              </div>
              <!-- </div> -->
            </template>
          </div>



          <div class="card-footer pt-4">
            <ul class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
              <li class="list-inline-item text-primary">{{ t('txtAvailableSeat') }}: {{ segment.ResBookDesigQuantity }}
              </li>
              <!-- <li class="list-inline-item text-danger">Non-Refundable</li> -->
              <h6 class="fw-medium mb-0"><span class="fw-medium">{{ t('txtClass') }}:</span> {{
                segment.FlightClass }}</h6>
              <li class="list-inline-item" style="font-size: smaller;">
                <a :to="'/some-route/' + inx + segment.FlightNum" :id="'toggleButton' + inx + segment.FlightNum"
                  :aria-controls="'flightDetail' + segment.FlightNum"
                  v-b-toggle="'flightDetail' + inx + segment.FlightNum"
                  class="btn-more d-flex align-items-center collapsed p-0 mb-0" role="button">
                  {{ t('txtFlightDetail') }}
                  <ChevronDown />
                </a>
              </li>
            </ul>
            <b-collapse :id="'flightDetail' + inx + segment.FlightNum" class="multi-collapse"
              style="font-size: smaller;">
              <div class="pt-3">
                <!-- <FlightDetailTab :flight="getAllSegments()" :index="inx" /> -->
                <FlightDetailTab :flight="OfferInfo" :index="1" :airports="StoreAirPorts" />
              </div>
            </b-collapse>

            <!-- <b-collapse :id="`flightOption${Mainindex}${segment.FlightNum}`" class="multi-collapse">
                <div class="pt-3" v-if="isOptionLoaded">
                  <OptionBooking :offerCode="offer.OfferCode" :searchGuid="SearchGuid" />
                </div>
              </b-collapse> -->
          </div>
        </b-card>
      </div>
      <!-- </p> -->
    </div>
  </div>
  <!-- </b-col> -->
</template>

<script setup lang="ts">
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { BIconEyeFill } from 'bootstrap-icons-vue'
import element9 from '@/assets/images/element/09.svg'
import { ref, computed, onMounted } from 'vue'
import { useOptionStore } from '@/stores/optionStore'
import { useFlightStore } from '@/stores/flight';
import flightLogo from '@/assets/images/element/09.svg'
import { useRoute } from 'vue-router'
import FlightDetailTab from '../../List/components/FlightDetailTab.vue'

import OptionDetailTab from '@/views/flights/Details/components/OptionDetailTab.vue'
import { ChevronDown, Briefcase, Luggage, User } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const flightStore = useFlightStore();
const fallbackLogo = flightLogo
const optionStore = useOptionStore();

const isHovered = ref<{ [key: string]: boolean }>({});

function onMouseOver(index: string) {
  isHovered.value[index] = true;
}

function onMouseLeave(index: string) {
  isHovered.value[index] = false;
}

const storedData = sessionStorage.getItem("BookingInfo") ? JSON.parse(sessionStorage.getItem("BookingInfo") || "") : null;

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);
const trips = parseInt(sessionStorage.getItem("trips") || "0", 10);




// onMounted(async () => {
//   if (!storedData) {
//     await fetchOrderInfo()
//   }
// })
// const route = useRoute()
// const error = ref('')
// const loading = ref(false)
// async function fetchOrderInfo() {

//   try {
//     const response = await fetch(`https://api.airkacc.mn/api/orderinfo/${route.params.oid}/mn/`)
//     if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

//     const data = await response.json()
//     console.log('Захиалгын өгөгдөл:', data)

//     if (data.status === 'SUCCESS' && data.result?.Body?.AeroBookResponse?.AeroBookResult) {
//       var orderInfo = data.result.Body.AeroBookResponse.AeroBookResult
//       // Хүсвэл sessionStorage-д хадгалах:
//       sessionStorage.setItem('BookingInfo', JSON.stringify(orderInfo))
//     } else {
//       error.value = 'Захиалгын дугаар олдсонгүй.'
//     }
//   } catch (err: any) {
//     console.error('Алдаа дэлгэрэнгүй:', err)
//     if (err.response) {
//       error.value = `Серверээс буцсан алдаа: ${err.response.status} - ${err.response.statusText}`
//     } else {
//       error.value = 'Алдаа гарлаа. Та дахин оролдоно уу.'
//     }
//   } finally {
//     loading.value = false
//   }
// }

const infos = computed(() => {
  // console.log(storedData?.result?.Body?.AeroBookResponse?.AeroBookResult)
  if (optionStore.optionInfos?.result?.Body?.AeroBookResponse?.AeroBookResult) {
    return optionStore.optionInfos?.result?.Body?.AeroBookResponse?.AeroBookResult || [];
  } else {
    return storedData?.result?.Body?.AeroBookResponse?.AeroBookResult || [];
  }

});

const StoreAirCompany = computed(() => flightStore.AirCompany);
const StoreAirPorts = computed(() => flightStore.AirPorts);


const getOptionPrice = () => {
  return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult?.TariffInfo || [];
};


const getFlightData = () => {
  return infos.value || { Offers: { OfferInfo: [] } };
};

const FlightData = computed(() => getFlightData());
const OfferInfo = computed(() => FlightData.value?.Offers?.OfferInfo ?? []); // шууд массив болго!

console.log('OfferInfo:', OfferInfo.value);

// Хэрвээ OfferInfo нь нэг ширхэг объект байвал массив болгож ав:
const OfferInfoArr = computed(() => {
  const oi = FlightData.value?.Offers?.OfferInfo;
  return Array.isArray(oi) ? oi : oi ? [oi] : [];
});

// Ашиглахдаа:
function getSegmentsByRph(rph) {
  if (!Array.isArray(OfferInfoArr.value)) return [];

  const segmentsFlat = OfferInfoArr.value.flatMap((offer) => offer.Segments?.OfferSegment || []);
  // console.log('Segments Flat:', segmentsFlat);

  if (show.value <= 2) {
    if (segmentsFlat.filter((seg) => seg.Rph === rph).length === 0) {
      return OfferInfoArr.value
        .filter((offer) => offer.Rph === rph)
        .flatMap((offer) => offer.Segments?.OfferSegment || []);
    } else {
      return segmentsFlat.filter((seg) => seg.Rph === rph);
    }
  } else {
    return segmentsFlat;
  }
}

const goSegments = computed(() => getSegmentsByRph("1"));
const returnSegments = computed(() => getSegmentsByRph("2"));


const getAllSegments = (): any[] => {
  // const ai = StoreAirCompany.value?.find((airline: any) => airline.Code === "KE").Value
  // console.log(ai)
  const offerInfo1 = OfferInfo.value;

  // OfferInfo массив биш бол шууд OfferSegment-ийг буцаах
  if (!Array.isArray(offerInfo1)) {
    let segment = offerInfo1?.Segments?.OfferSegment;
    if (!Array.isArray(segment)) {
      segment = segment ? [segment] : []
      // console.log(segment)

      return segment;
    }
    // console.log(StoreAirCompany.value?.find((airline: any) => airline.Code ===
    //   segment[0].MarketingAirline).Value)
    return segment;
  }

  // OfferInfo массив бол flatMap ашиглан сегментүүдийг цуглуулах
  return offerInfo1.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments?.OfferSegment || []);
};

function formatDate(input: string): string {
  const [day, month, yearAndTime] = input.split(".");
  const [year, time] = yearAndTime.split(" ");
  return `${year}-${month}-${day}`;
}

function convertTimeText(input: string): string {
  const [hours, minutes, seconds] = input.split(":").map(Number);
  const hourText = hours ? `${hours} цаг` : "";
  const minuteText = minutes ? `${minutes} мин` : " ";
  return [hourText, minuteText].filter(Boolean).join(" ");
}

const getTotalFlightTime = () => {
  const totalMinutes = getAllSegments().reduce(
    (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
    0
  );

  const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
  const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

  return `${hours} цаг ${minutes} мин`; // Цаг, минутын форматаар буцаана
};

const getTotalStops = () => getAllSegments().length - 1;
const getStopIatas = () => getAllSegments().slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata);


// Нислэгийн нэрийг олох функц
const getAirlineName = (code: any) => {
  if (!Array.isArray(StoreAirCompany.value)) {
    console.error('StoreAirCompany is not an array');
    return "No Air Company";
  }

  if (!code) {
    return "No Air Company";
  }

  const foundAirline = StoreAirCompany.value.find((airline) => airline.Code === code);
  return foundAirline ? foundAirline.Value : "No Air Company";
};


const getAllSegmentsDates = () => {
  const data = getFlightData();
  const offerInfo = data.Offers.OfferInfo;

  // OfferInfo массив биш бол шууд OfferSegment-ийг буцаах
  if (!Array.isArray(offerInfo)) {
    return offerInfo?.Segments?.OfferSegment.sort((a: { Departure: { Date: string | number | Date } }, b: { Departure: { Date: string | number | Date } }) => {
      // Convert both dates to Date objects, ensuring they're valid.
      const departureA = new Date(a.Departure.Date);
      const departureB = new Date(b.Departure.Date);

      // Ensure the dates are valid before comparing them
      if (isNaN(departureA.getTime()) || isNaN(departureB.getTime())) {
        return 0; // or handle as needed if one of the dates is invalid
      }

      return departureA.getTime() - departureB.getTime(); // Subtracting as timestamps
    }) || [];
  }

  return offerInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment).sort((a: { Departure: { Date: string | number | Date } }, b: { Departure: { Date: string | number | Date } }) => {
    // Convert both dates to Date objects, ensuring they're valid.
    const departureA = new Date(a.Departure.Date);
    const departureB = new Date(b.Departure.Date);

    // Ensure the dates are valid before comparing them
    if (isNaN(departureA.getTime()) || isNaN(departureB.getTime())) {
      return 0; // or handle as needed if one of the dates is invalid
    }

    return departureA.getTime() - departureB.getTime(); // Subtracting as timestamps
  }) || [];
};

function timeDifference(start: string, end: string): string {
  // Огнооны форматыг ISO 8601 хэлбэрт хөрвүүлэх
  const startDateFormatted = start.split(' ')[0].split('.').reverse().join('-') + 'T' + start.split(' ')[1] + ':00';
  const endDateFormatted = end.split(' ')[0].split('.').reverse().join('-') + 'T' + end.split(' ')[1] + ':00';

  // start болон end утгуудыг Date объект руу хөрвүүлэх
  const startDate = new Date(startDateFormatted);
  const endDate = new Date(endDateFormatted);

  // Нийт минутын зөрүү
  const diffMinutes = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60));

  // Цаг болон минут болгон хуваах
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  return `${hours} цаг ${minutes} минут`;
}

const showModal = ref(false)
</script>

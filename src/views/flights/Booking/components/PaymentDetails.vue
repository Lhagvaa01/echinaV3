<template>
  <!-- <b-col xl="8"> -->
  <div>
    <div>
      <div v-for="(segment, inx) in getAllSegments().slice(0, 1)" :key="inx">
        <b-card no-body class="border" :key="segment.FlightNum">


          <div class="d-flex justify-content-between align-items-center px-3  ">


            <h6 class="m-3 mb-0 fw-bold d-flex align-items-center text-primary" style="font-size: smaller;">
              <img :src="PlaneUp" alt="Plane Down" class="me-2" style="width: 32px; height: 32px;" />

              {{ (show == 2 && moreFlights(segment, inx).length - 1
                ===
                0) ?
                t('txtToFlight')
                :
                t('txtFromFlight') }}
            </h6>
            <h6 class="fw-bold mb-0 text-primary" style="font-size: smaller;">{{
              moreFlights(segment, inx)[0].length >
                1 ?
                t('txtTransit') :
                t('txtDirect') }}</h6>

          </div>
          <div class="border-1 border-bottom border-primary ms-4" style="width: 70px;"></div>
          <b-card-header class="d-flex justify-content-between align-items-center py-0 ps-4 mt-2">

            <div class="d-flex align-items-center mb-2 mb-sm-0 " style="font-size: smaller;">
              <img :src="segment?.MarketingAirline
                ? 'https://api.echina.mn/assets/d/' + segment?.MarketingAirline + '.png'
                : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
              <h6 class="fw-normal mb-0" style="font-size: smaller;">
                {{ segment?.MarketingAirlineName ||
                  'No Air Companies Available'
                }}
                ({{ segment?.FlightNum || 'SA-1254' }})
              </h6>

              <p v-if="moreFlights(segment, inx)[0].length > 1" class="ms-2 text-warning"
                @mouseover="onMouseOver(getFlightKey(inx))" @mouseleave="onMouseLeave(getFlightKey(inx))">
                +{{ moreFlights(segment, inx)[0].length - 1 }} {{ t('txtTotalAirline') }}
              </p>
              <!-- Tooltip -->
              <div v-if="isHovered[getFlightKey(inx)]"
                class="bg-white border rounded shadow position-absolute p-3 start-50 "
                style="z-index: 1000; min-width: 260px;">
                <div v-for="flight in moreFlights(segment, inx)[0]" :key="segment.FlightNum"
                  class="d-flex align-items-start mb-2">
                  <img :src="flight.MarketingAirline
                    ? 'https://api.echina.mn/assets/d/' + flight.MarketingAirline + '.png'
                    : fallbackLogo" alt="Airline logo" class="me-2"
                    style="width: 32px; height: auto; border-radius: 4px;" />
                  <div class="d-flex gap-2">
                    <div class="fw-semibold text-dark" style="font-size: 14px;">
                      {{
                        flight.MarketingAirlineName || 'Unknown Airline'
                      }}
                      <span class="text-muted">({{
                        flight.FlightNum
                        ||
                        'SA-1254'
                        }})</span>
                    </div>
                    <div class="d-flex align-items-center mt-1">
                      <Briefcase v-if="flight.Baggage" class="me-2" color="#5a2dd7" :size="16" />
                      <Luggage v-if="flight.CabinBaggage" color="#5a2dd7" :size="16" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 class="mt-0  fw-light mb-0 pb-0 text-muted" style="font-size: smaller;">Нийт: {{
                getTotalFlightTime2(segment, inx, 0)
                }}
              </h5>
            </div>


          </b-card-header>

          <b-card-body class="p-4 pb-0">
            <b-row class="g-3">
              <b-col cols="3" sm="4" md="3" class="mt-0 text-start ">
                <p class="mb-0" style="font-size: medium;">{{
                  moreFlights(segment, inx)[0][0]?.Departure.Iata
                }}</p>
                <p class="mb-0 text-truncate"
                  style="font-size: smaller; max-width: 120px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
                  :title="moreFlights(segment, inx)[0][0]?.Departure.City">
                  {{ moreFlights(segment, inx)[0][0]?.Departure.City
                  }}
                </p>

                <h4 class="fw-bold fs-4 mb-0"> {{
                  moreFlights(segment, inx)[0][0]?.Departure.Date.split(" ")[1] }}
                </h4>


                <p class="mb-0" style="font-size: x-small;">
                  {{
                    formatDate(moreFlights(segment, inx)[0][0]?.Departure.Date) }}</p>

                <!-- <p class="mb-0" style="font-size: smaller;">
                  {{StoreAirCompany.find((AirCompany: any) =>
                    AirCompany.Code
                    ===
                    moreFlights(segment, inx)[0][0]?.Departure.Iata).City}}</p> -->


              </b-col>

              <b-col cols="5" sm="4" md="6" class=" text-center mt-3">
                <div class="position-relative " style="height: 80px;">
                  <!-- Шугам -->
                  <hr class="position-absolute top-50 start-0 end-0 m-0" style="height: 1px; background-color: #ccc;" />

                  <!-- Голын цэгүүд болон шошго -->
                  <div v-for="(stop, index) in getStopIatas(segment, inx, 0)" :key="index"
                    class="position-absolute text-center "
                    :style="getDotPositionStyle(index, getStopIatas(segment, inx, 0).length)">
                    <div style="font-size: small; font-weight: bold;">
                      {{ stop }}
                    </div>
                    <div style="font-size: small; color: gray;">
                      ({{StoreAirPorts.find((a) => a.Iata ===
                        stop)?.City || ''}})
                    </div>
                    <div class="rounded-circle bg-primary mx-auto"
                      style="width: 8px; height: 8px; top: 50%; left: 0; transform: translateY(120%);">
                    </div>
                  </div>

                  <!-- Зүүн ба баруун саарал цэг -->
                  <div class="rounded-circle bg-secondary position-absolute"
                    style="width: 8px; height: 8px; top: 50%; left: 0; transform: translateY(-50%);">
                  </div>
                  <div class="rounded-circle bg-secondary position-absolute"
                    style="width: 8px; height: 8px; top: 50%; right: 0; transform: translateY(-50%);">
                  </div>
                </div>


              </b-col>

              <b-col cols="3" sm="4" md="3" class="mt-0  text-end mt-0 ">
                <p class="mb-0" style="font-size: medium;">{{
                  moreFlights(segment, inx)[0][moreFlights(segment, inx)[0].length - 1].Arrival.Iata }}</p>
                <p class="mb-0" style="font-size: smaller;">
                  {{ moreFlights(segment, inx)[0][moreFlights(segment, inx)[0].length - 1].Arrival.City || "" }}
                </p>
                <h4 class=" fs-4 mb-0">
                  {{ moreFlights(segment, inx)[0][moreFlights(segment, inx)[0].length - 1].Arrival.Date.split(" ")[1] }}
                </h4>

                <p class="mb-0" style="font-size: x-small;">
                  {{
                    formatDate(moreFlights(segment, inx)[0][moreFlights(segment, inx)[0].length - 1].Arrival.Date) }}</p>



              </b-col>


            </b-row>
          </b-card-body>

          <b-row v-for="(offseg, offsegIdx) in segment" :key="'offseg-' + offsegIdx" class="align-items-start mx-2">
            <!-- Зүүн талын блок -->
            <b-col cols="3" sm="2" md="4" v-if="offseg.SelfConnect === 'true'" class="d-flex pe-1">
              <div style="width: 100%; height: 55px; background-color: #eee9ff; border-radius: 10px;">
              </div>
            </b-col>

            <!-- Баруун талын анхааруулга -->
            <b-col cols="9" sm="10" md="8" class="mb-2 ps-1" v-if="offseg.SelfConnect === 'true'">
              <div style="background-color: #ffe6e6; border-radius: 10px; padding: 8px 12px;">
                <p class="mb-0 text-danger" style="font-size: small; white-space: pre-line;">
                  {{ getTotalStops2(segment, inx, 0) }} {{
                    t('txtFlightStop') }}
                  {{ t('txtSelfTBag') }}
                  (Self-transfer baggage)
                </p>
              </div>
            </b-col>
          </b-row>





          <div class="card-footer pt-4">
            <ul class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
              <li class="list-inline-item text-primary" style="font-size: smaller;">{{ t('txtAvailableSeat') }}: {{
                segment.ResBookDesigQuantity }}
              </li>
              <!-- <li class="list-inline-item text-danger">Non-Refundable</li> -->
              <h6 class="d-flex align-items-center fw-medium mb-0" style="font-size: smaller;"><span
                  class="fw-medium">{{
                    t('txtClass') }}:</span>
                {{
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
                <FlightDetailTab :flight="OfferInfo" :index="1" :airports="StoreAirPorts" />
              </div>
            </b-collapse>
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

import PlaneUp from '@/assets/images/Icon/planeup.svg';
import OptionDetailTab from '@/views/flights/Details/components/OptionDetailTab.vue'
import { ChevronDown, Briefcase, Luggage, User } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const flightStore = useFlightStore();
const fallbackLogo = flightLogo
const optionStore = useOptionStore();

const isHovered = ref<{ [key: string]: boolean }>({});


function getFlightKey(index: number) {
  return `${index}`;
}


function onMouseOver(index: string) {
  isHovered.value[index] = true;
}

function onMouseLeave(index: string) {
  isHovered.value[index] = false;
}

const storedData = sessionStorage.getItem("BookingInfo") ? JSON.parse(sessionStorage.getItem("BookingInfo") || "") : null;

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);




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

const getTotalFlightTime2 = (offer, index: number, findex: number) => {
  const totalMinutes = moreFlights(offer, index)[findex].reduce(
    (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
    0
  );

  const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
  const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

  return `${hours} ${t('txtHour')} ${minutes} ${t('txtMin')}`; // Цаг, минутын форматаар буцаана

};

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
console.log('OfferInfo:', getFlightData());
const getFlightData2 = () => {
  return infos.value?.Offers?.OfferInfo || [];
};
console.log('OfferInfo2:', getFlightData2());
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




const trips = parseInt(sessionStorage.getItem("trips") || "0", 10);
const moreFlightsCache = ref({});
const moreFlights = (offer, index) => {
  const key = offer.OfferCode || index;
  if (!moreFlightsCache.value[key]) {
    // ... бодоод хадгална (чиний кодоос шууд хуул)
    const data = [getFlightData2()];

    console.log('data:', data);
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
// const getStopIatas = () => getAllSegments().slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata);


const getTotalStops2 = (offer, index: number, findex: number) => {
  return moreFlights(offer, index)[findex].length - 1

};
const getStopIatas = (offer, index: number, findex: number) => {
  return moreFlights(offer, index)[findex].slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata)

}

function getDotPositionStyle(index, total) {
  const percent = ((index + 1) / (total + 1)) * 100;
  return {
    left: `${percent}%`,
    transform: 'translate(-50%, -20%)',
    top: '0',
    bottom: '20px'
  };
}

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

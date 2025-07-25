<template>

  <div v-if="OfferInfo">
    <b-tabs nav-class="nav nav-pills nav-justified nav-responsive  rounded p-2 mb-3 bg-primary bg-opacity-10">
      <b-tab>
        <template #title style="font-size: smaller;"> {{ t('txtFlightDetail') }} </template>
        <div class="container py-4">
          <h5 class="fw-bold mb-3">
            {{ getAirportName(firstDeparture) }} ⇄ {{ getAirportName(lastArrival) }}
          </h5>
          <div class="row">
            <!-- Явах багана -->
            <div class="col-md-6 border-end">
              <div class="mb-2">
                <span class="section-label bg-primary rounded-1">Явах
                </span>
                <span class="ms-2 text-primary small">Хугацаа:
                  {{ getSegmentDate(goSegments[0]?.Departure.Date || "03.07.2025 20:35") }} -
                  {{ getSegmentDate(goSegments[goSegments.length - 1]?.Arrival.Date || "03.07.2025 20:35") }}
                </span>
              </div>
              <div v-for="(seg, idx) in goSegments" :key="'go' + idx" class=" mb-2">
                <div class="d-flex">
                  <!-- Цаг, лого, огноо -->
                  <div class="d-grid align-items-start text-center justify-content-center" style="min-width:50px;">
                    <div class="time">{{ getTime(seg.Departure.Date) }}</div>
                    <img v-if="getAirlineLogo(seg.MarketingAirline)" :src="getAirlineLogo(seg.MarketingAirline)"
                      style="width:32px;" class="my-2 ms-2" />
                    <!-- <div v-if="idx === 0" class="text-danger small">{{ getSegmentDate(seg.Departure.Date) }}</div> -->

                    <div class="time ">{{ getTime(seg.Arrival.Date) }}</div>
                  </div>
                  <!-- Timeline -->
                  <div class="mx-2 d-flex flex-column align-items-center">
                    <!-- <div :class="['dot', idx === goSegments.length - 1 ? 'dot-last' : '']"></div> -->
                    <div class="timeline-line"></div>
                  </div>
                  <!-- Мэдээлэл -->
                  <div class="flex-grow-1 pb-3">
                    <div class="fw-bold text-black small">
                      {{ seg.Departure.Iata }} {{ getCityName(seg.Departure.Iata) || seg.Departure.Name }}
                    </div>
                    <div class="flight-meta  p-1 rounded " style="font-size:13px;">
                      {{ seg.FlightNum }} • {{ seg.AirCraft }}
                      <br>
                      Нислэгийн хугацаа: {{ convertTimeText(seg.FlightTime) }}

                    </div>
                    <div class="badge  bg-primary bg-opacity-10 text-primary border me-1 mt-1 text-start">
                      <div v-if="seg.Baggage" class="d-flex align-items-center">
                        <Briefcase class="me-2" color="#5a2dd7" :size="16" />
                        Тээшний ачаа • {{ seg?.Baggage?.Count || "" }}{{ seg?.Baggage?.BaggageType || "" }}
                      </div>
                      <div v-if="seg.CabinBaggage" class="d-flex align-items-center">
                        <Luggage class="me-2 mt-1" color=" #5a2dd7" :size="16" />
                        Гар тээш • {{ seg?.CabinBaggage?.Count || "" }}{{ seg?.CabinBaggage?.BaggageType || "" }}
                      </div>
                    </div>

                    <div class="fw-bold text-black small">
                      {{ seg.Arrival.Iata }} {{ getCityName(seg.Arrival.Iata) || seg.Arrival.Name }}
                    </div>


                  </div>
                </div>
                <div class="d-flex" v-if="idx < goSegments.length - 1">
                  <!-- <div class="fw-bold text-black">
              {{ getAirportName(seg.Arrival.Iata) }} ({{ seg.Arrival.Iata }})
            </div> -->
                  <div class="mx-2 px-3"></div>
                  <div class="mx-2 d-flex flex-column align-items-center">
                    <!-- <div :class="['dot', idx === goSegments.length - 1 ? 'dot-last' : '']"></div> -->

                    <!-- <div class="timeline-line"></div> -->

                  </div>
                  <div v-if="idx < goSegments.length - 1" class="alert alert-danger py-1 px-2 mb-1 "
                    style="font-size:13px;">
                    {{ getAirportName(seg.Arrival.Iata) }}
                    <span v-if="goLayovers[idx]">дээр {{ goLayovers[idx] }} хүлээнэ.</span>
                    <br>
                    <span v-if="seg.SelfConnect">Ачаагаа өөрөө авч, дахин бүртгүүлнэ</span>
                  </div>

                </div>
                <div v-else-if="seg.SelfConnect && idx < goSegments.length" class="alert alert-danger py-1 px-2 mb-1 "
                  style="font-size:13px;">
                  <span>Ачаагаа өөрөө авч, дахин бүртгүүлнэ</span>
                </div>
              </div>
            </div>
            <!-- Буцах багана -->
            <div v-if="show === 2" class="col-md-6">
              <div class="mb-2">
                <span class="section-label bg-primary rounded-1">Буцах</span>
                <span class="ms-2 text-primary small">Хугацаа:
                  {{ getSegmentDate(returnSegments[0]?.Departure.Date || "03.07.2025 20:35") }} -
                  {{ getSegmentDate(returnSegments[returnSegments.length - 1]?.Arrival.Date || "03.07.2025 20:35") }}
                </span>
              </div>
              <div v-for="(seg, idx) in returnSegments" :key="'return' + idx" class=" mb-2">
                <div class="d-flex">
                  <!-- Цаг, лого, огноо -->
                  <div class="d-grid align-items-start text-center justify-content-center" style="min-width:50px;">
                    <div class="time">{{ getTime(seg.Departure.Date) }}</div>
                    <img v-if="getAirlineLogo(seg.MarketingAirline)" :src="getAirlineLogo(seg.MarketingAirline)"
                      style="width:32px;" class="my-2 ms-2" />
                    <!-- <div v-if="idx === 0" class="text-danger small">{{ getSegmentDate(seg.Departure.Date) }}</div> -->

                    <div class="time ">{{ getTime(seg.Arrival.Date) }}</div>
                  </div>
                  <!-- Timeline -->
                  <div class="mx-2 d-flex flex-column align-items-center">
                    <!-- <div :class="['dot', idx === goSegments.length - 1 ? 'dot-last' : '']"></div> -->
                    <div class="timeline-line"></div>
                  </div>
                  <!-- Мэдээлэл -->
                  <div class="flex-grow-1 pb-3">
                    <div class="fw-bold text-black small">
                      {{ seg.Departure.Iata }} {{ getCityName(seg.Departure.Iata) || seg.Departure.Name }}
                    </div>
                    <div class="flight-meta  p-1 rounded " style="font-size:13px;">
                      {{ seg.FlightNum }} • {{ seg.AirCraft }}
                      <br>
                      Нислэгийн хугацаа: {{ convertTimeText(seg.FlightTime) }}

                    </div>
                    <div class="badge  bg-primary bg-opacity-10 text-primary border me-1 mt-1 text-start">
                      <div v-if="seg.Baggage" class="d-flex align-items-center">
                        <Briefcase class="me-2" color="#5a2dd7" :size="16" />
                        Тээшний ачаа • {{ seg?.Baggage?.Count || "" }}{{ seg?.Baggage?.BaggageType || "" }}
                      </div>
                      <div v-if="seg.CabinBaggage" class="d-flex align-items-center">
                        <Luggage class="me-2 mt-1" color=" #5a2dd7" :size="16" />
                        Гар тээш • {{ seg?.CabinBaggage?.Count || "" }}{{ seg?.CabinBaggage?.BaggageType || "" }}
                      </div>
                    </div>

                    <div class="fw-bold text-black small">
                      {{ seg.Arrival.Iata }} {{ getCityName(seg.Arrival.Iata) || seg.Arrival.Name }}
                    </div>

                  </div>
                </div>
                <div class="d-flex" v-if="idx < returnSegments.length - 1">
                  <!-- <div class="fw-bold text-black">
              {{ getAirportName(seg.Arrival.Iata) }} ({{ seg.Arrival.Iata }})
            </div> -->
                  <div class="mx-2 px-3"></div>
                  <div class="mx-2 d-flex flex-column align-items-center">
                    <!-- <div :class="['dot', idx === goSegments.length - 1 ? 'dot-last' : '']"></div> -->

                    <!-- <div class="timeline-line"></div> -->

                  </div>
                  <div v-if="idx < returnSegments.length - 1" class="alert alert-danger py-1 px-2 mb-1 "
                    style="font-size:13px;">
                    {{ getAirportName(seg.Arrival.Iata) }}
                    <span v-if="returnLayovers[idx]">дээр {{ returnLayovers[idx] }} хүлээнэ.</span>
                    <br>
                    <span v-if="seg.SelfConnect">Ачаагаа өөрөө авч, дахин бүртгүүлнэ</span>
                  </div>
                </div>
                <div v-if="seg.SelfConnect && idx < returnSegments.length" class="alert alert-danger py-1 px-2 mb-1 "
                  style="font-size:13px;">
                  <span>Ачаагаа өөрөө авч, дахин бүртгүүлнэ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab>
        <template #title style="font-size: smaller;"> {{ t('txtBagRule') }} </template>
        <div v-if="Array.isArray(StoreflightInfos) && StoreflightInfos[index]">



          <div v-if="Array.isArray(StoreflightInfos[index].Offers.OfferInfo)">
            <div v-for="(offer, idx) in StoreflightInfos[index].Offers.OfferInfo" :key="idx">
              <div v-if="Array.isArray(offer.Segments.OfferSegment)">
                <div
                  v-if="StoreflightInfos[index].Offers.OfferInfo.length === 1 && StoreflightInfos[index].Offers.OfferInfo[0].Segments.OfferSegment.length === 1"
                  v-for="(offerSegment, segidx) in offer.Segments.OfferSegment" :key="segidx">

                  <b-card no-body class="border mb-3">
                    <b-card-header class="d-flex align-items-center border-bottom bg-body-secondary">
                      <img :src="offerSegment.MarketingAirline
                        ? 'https://api.echina.mn/assets/d/' + offerSegment.MarketingAirline + '.png'
                        : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                      <b-card-title tag="h5" class="mb-0">{{
                        offerSegment.Departure.Iata }} -
                        {{ offerSegment.Arrival.Iata }}</b-card-title>
                    </b-card-header>

                    <b-card-body>
                      <div class="table-responsive-lg">
                        <table class="table caption-bottom mb-0">
                          <caption class="pb-0">
                            *1PC = 23KG
                          </caption>
                          <thead class="table-dark">
                            <tr>
                              <th scope="col" class="border-0 rounded-start">{{ t('txtBaggageType') }}</th>
                              <th scope="col" class="border-0">{{ t('txtMeasure') }}</th>
                              <th scope="col" class="border-0">{{ t('txtQTY') }}</th>
                            </tr>
                          </thead>
                          <tbody class="border-top-0" v-if="offerSegment.Baggage || offerSegment.CabinBaggage">
                            <tr v-if="offerSegment.Baggage">
                              <td>Baggage</td>
                              <td>{{ offerSegment.Baggage.BaggageType }}</td>
                              <td>{{ offerSegment.Baggage.Count }}</td>
                            </tr>
                            <tr v-if="offerSegment.CabinBaggage">
                              <td>CabinBaggage</td>
                              <td>
                                {{ offerSegment.CabinBaggage.BaggageType }}
                              </td>
                              <td>
                                {{ offerSegment.CabinBaggage.Count }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div v-else v-for="(offerSegment, segidxs) in offer.Segments.OfferSegment" :key="segidxs">
                  <b-card no-body class="border mb-3">
                    <b-card-header class="d-flex align-items-center border-bottom bg-body-secondary">
                      <img :src="offerSegment.MarketingAirline
                        ? 'https://api.echina.mn/assets/d/' + offerSegment.MarketingAirline + '.png'
                        : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                      <b-card-title tag="h5" class="mb-0">{{
                        offerSegment.Departure.Iata }} -
                        {{ offerSegment.Arrival.Iata }}</b-card-title>
                    </b-card-header>

                    <b-card-body>
                      <div class="table-responsive-lg">
                        <table class="table caption-bottom mb-0">
                          <caption class="pb-0">
                            *1PC = 23KG
                          </caption>
                          <thead class="table-dark">
                            <tr>
                              <th scope="col" class="border-0 rounded-start">{{ t('txtBaggageType') }}</th>
                              <th scope="col" class="border-0">{{ t('txtMeasure') }}</th>
                              <th scope="col" class="border-0">{{ t('txtQTY') }}</th>
                            </tr>
                          </thead>
                          <tbody class="border-top-0" v-if="offerSegment.Baggage || offerSegment.CabinBaggage">
                            <tr v-if="offerSegment.Baggage">
                              <td>Baggage</td>
                              <td>{{ offerSegment.Baggage.BaggageType }}</td>
                              <td>{{ offerSegment.Baggage.Count }}</td>
                            </tr>
                            <tr v-if="offerSegment.CabinBaggage">
                              <td>CabinBaggage</td>
                              <td>
                                {{ offerSegment.CabinBaggage.BaggageType }}
                              </td>
                              <td>
                                {{ offerSegment.CabinBaggage.Count }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab>
        <template #title style="font-size: smaller;"> {{ t('txtCancelationRule') }} </template>
        <b-card no-body class="border">
          <b-card-header class="d-flex align-items-center border-bottom bg-body-secondary">
            <img :src="element9" class="h-20px me-1" alt="" />
            <b-card-title tag="h5" class="mb-0">BOM - CDG</b-card-title>
          </b-card-header>

          <b-card-body>
            <div class="table-responsive-lg">
              <table class="table caption-bottom mb-0">
                <caption class="pb-0">
                  *From The Date Of Departure
                </caption>
                <thead class="table-dark">
                  <tr>
                    <th scope="col" class="border-0 rounded-start">Time Frame</th>
                    <th scope="col" class="border-0 rounded-end">Air Free + MMT Free</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr>
                    <td>0 hours to 24 hours</td>
                    <td>Non Refundable</td>
                  </tr>
                  <tr>
                    <td>24 hours to 365 days</td>
                    <td>{{ currency }}16,325 + {{ currency }}250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-body>
        </b-card>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useFlightStore } from "@/stores/flight"; // path-аа project-ынхаа дагуу тохируул
import { ChevronDown, Briefcase, Luggage, User } from 'lucide-vue-next';
import element9 from '@/assets/images/element/09.svg'
import { currency } from '@/helpers/constants'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import CabCard from '../../../cab/List/components/CabCard.vue'
import { cabsLists } from '../../../cab/List/data'
import fallbackLogo from '@/assets/images/element/09.svg'

import { PlaneTakeoff } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const flightStore = useFlightStore();

const props = defineProps({
  flight: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  airports: {
    type: Object,
    required: true
  }
})

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);
const trips = parseInt(sessionStorage.getItem("trips") || "0", 10);
const index = computed(() => props.index);
const flight = computed(() => props.flight); // 1-based index


const OfferInfo = computed(() =>
  props.index === 1 ? (Array.isArray(props.flight) ? props.flight : [props.flight]) : props.flight?.Offers?.OfferInfo ?? []
);


const StoreflightInfos = computed(() => flightStore.flightInfos || OfferInfo);
const StoreAirCompany = computed(() => flightStore.AirCompany?.CodeValue || []);
const StoreAirPorts = computed(() => flightStore.AirPorts?.AirPortInfo || []);

// const teest = computed(() => OfferInfo.value.flatMap((offer: any) => offer.Segments?.OfferSegment || []).filter((seg: any) => seg.Rph === "2"));

// ----------- ХАМГИЙН ГОЛ ХУВЬСАГЧИД -----------
// const OfferInfo = computed(() =>
//   StoreflightInfos.value[index.value]?.Offers?.OfferInfo ?? []
// );



const airports = computed(() =>
  props.airports ?? []
);

function getCityName(iata: string) {
  const port = airports.value.find((a: any) => a.Iata === iata);
  return port ? `${port.City} ${port.Name}` : "";
}


// console.log('FLIGHT:', getSegmentsByRph("1"));
function getSegmentsByRph(rph: string) {
  // console.log('FLIGHT:', Array.isArray(OfferInfo.value));
  // OfferInfo олон байж болно, segment бүрээс Rph-г ялгана
  if (!Array.isArray(OfferInfo.value)) return [];

  const segmentsFlat = OfferInfo.value.flatMap((offer: any) => offer.Segments?.OfferSegment || []);

  if (show.value <= 2) {
    if (segmentsFlat.filter((seg: any) => seg.Rph === "2").length === 0) {
      // Хэрвээ "2" Rph-тай сегмент байхгүй бол OfferInfo array-г өөрөө шалгана
      return OfferInfo.value
        .filter((offer: any) => offer.Rph === rph)
        .flatMap((offer: any) => offer.Segments?.OfferSegment || []);
    } else {
      // Эсрэг тохиолдолд шууд сегментүүдээс шүүж буцаана
      return segmentsFlat.filter((seg: any) => seg.Rph === rph);
    }
  } else {
    return segmentsFlat;
  }

}
const goSegments = computed(() => getSegmentsByRph("1"));
const returnSegments = computed(() => getSegmentsByRph("2"));

// ----------- LOOKUP функцууд -----------
function getAirlineName(code: string) {
  const found = StoreAirCompany.value.find((c: any) => c.Code === code);
  return found ? found.Value : code;
}
function getAirlineLogo(code: string) {
  return code ? `https://api.echina.mn/assets/d/${code}.png` : "";
}
function getAirportName(iata: string) {
  const found = airports.value.find((p: any) => p.Iata === iata);
  return found ? found.City : iata;
}
// Огноо, цаг ялгах
function getTime(str: string) {
  return str ? str.split(" ")[1]?.slice(0, 5) : "";
}
// function getSegmentDate(str: string) {
//   return str ? str.split(" ")[0] : "";
// }
function getSegmentDate(input: string): string {
  const [day, month, yearAndTime] = input.split(".");
  const [year, time] = yearAndTime.split(" ");
  return `${year}-${month}-${day}`;

}
function convertTimeText(time: string) {
  if (!time) return "";
  const [h, m] = time.split(":");
  return `${h} цаг ${m} мин`;
}

// Лэйовер тооцох
function getLayoverMinutes(arrival: string, nextDeparture: string) {
  if (!arrival || !nextDeparture) return "";
  const [ad, at] = arrival.split(" ");
  const [nd, nt] = nextDeparture.split(" ");
  const arr = new Date(`${ad.split(".").reverse().join("-")}T${at}:00`);
  const dep = new Date(`${nd.split(".").reverse().join("-")}T${nt}:00`);
  const mins = Math.floor((dep.getTime() - arr.getTime()) / (1000 * 60));
  return mins > 0 ? `${Math.floor(mins / 60)} цаг ${mins % 60} мин` : "";
}
const goLayovers = computed(() =>
  goSegments.value.map((seg, idx, arr) => {
    if (idx === arr.length - 1) return "";
    return getLayoverMinutes(seg.Arrival.Date, arr[idx + 1].Departure.Date);
  })
);
const returnLayovers = computed(() =>
  returnSegments.value.map((seg, idx, arr) => {
    if (idx === arr.length - 1) return "";
    return getLayoverMinutes(seg.Arrival.Date, arr[idx + 1].Departure.Date);
  })
);

// Нислэгийн эхлэх/дуусах буудал нэр
const firstDeparture = computed(() => goSegments.value[0]?.Departure.City || goSegments.value[0]?.Departure.Iata);
const lastArrival = computed(() =>
  show.value > 1 ? returnSegments.value[0]?.Departure?.City || returnSegments.value[0]?.Departure?.Iata :
    returnSegments.value.length
      ? returnSegments.value[returnSegments.value.length - 1].Arrival.Iata
      : goSegments.value[goSegments.value.length - 1]?.Arrival.Iata
);
</script>

<style scoped>
.time {
  font-size: 18px;
  font-weight: bold;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #bbb;
}

.dot-last {
  background: #6253ea;
  border-color: #6253ea;
}

.timeline-line {
  width: 2px;
  flex: 1;
  background: repeating-linear-gradient(to bottom, #bbb 0, #bbb 6px, transparent 6px, transparent 12px);
  margin: 2px 0;
}

.flight-meta {
  color: #3d2a96;
}

.section-label {
  color: #fff;
  padding: 4px 18px;
  font-size: 15px;
  font-weight: 500;
}



.bg-secondary {
  background: #3c45a0 !important;
}
</style>

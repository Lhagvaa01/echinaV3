<template>
  <div class="container py-4">
    <h5 class="fw-bold mb-3">
      {{ getAirportName(firstDeparture) }} ⇄ {{ getAirportName(lastArrival) }}
    </h5>
    <div class="row">
      <!-- Явах багана -->
      <div class="col-md-6">
        <div class="mb-2">
          <span class="section-label bg-primary">Явах</span>
          <span class="ms-2 text-muted">
            {{ getSegmentDate(goSegments[0]?.Departure.Date) }} -
            {{ getSegmentDate(goSegments[goSegments.length - 1]?.Arrival.Date) }}
          </span>
        </div>
        <div v-for="(seg, idx) in goSegments" :key="'go' + idx" class=" mb-2">
          <div class="d-flex">
            <!-- Цаг, лого, огноо -->
            <div class="d-grid text-center justify-content-between align-items-start" style="min-width:70px;">
              <div class="time">{{ getTime(seg.Departure.Date) }}</div>
              <img v-if="getAirlineLogo(seg.MarketingAirline)" :src="getAirlineLogo(seg.MarketingAirline)"
                style="width:32px;" />
              <!-- <div v-if="idx === 0" class="text-danger small">{{ getSegmentDate(seg.Departure.Date) }}</div> -->

              <div class="time">{{ getTime(seg.Arrival.Date) }}</div>
            </div>
            <!-- Timeline -->
            <div class="mx-2 d-flex flex-column align-items-center">
              <!-- <div :class="['dot', idx === goSegments.length - 1 ? 'dot-last' : '']"></div> -->
              <div class="timeline-line"></div>
            </div>
            <!-- Мэдээлэл -->
            <div class="flex-grow-1 pb-3">
              <div class="fw-bold text-black">
                {{ getAirportName(seg.Departure.Iata) }} ({{ seg.Departure.Iata }})
              </div>
              <div class="flight-meta bg-light p-1 rounded " style="font-size:13px;">
                {{ getAirlineName(seg.MarketingAirline) }} {{ seg.FlightNum }} • {{ seg.AirCraft }}
                <br>
                {{ convertTimeText(seg.FlightTime) }}<br>
                <span class="badge bg-light text-primary border me-1 mt-1">
                  <!-- {{ seg.CabinBaggage?.Count || "1" }}x Гар тээш • {{ seg.Baggage?.Count || "1" }}кг Тээш -->
                </span>
              </div>

              <div class="fw-bold text-black">
                {{ getAirportName(seg.Arrival.Iata) }} ({{ seg.Arrival.Iata }})
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
            <div v-if="idx < goSegments.length - 1" class="alert alert-danger py-1 px-2 mb-1 ms-4"
              style="font-size:13px;">
              Дамжин буух: {{ getAirportName(seg.Arrival.Iata) }}
              <span v-if="goLayovers[idx]">• Хүлээх: {{ goLayovers[idx] }}</span>
            </div>
          </div>

        </div>
      </div>
      <!-- Буцах багана -->
      <div v-if="show === 2" class="col-md-6">
        <div class="mb-2">
          <span class="section-label bg-secondary">Буцах</span>
          <span class="ms-2 text-muted">
            {{ getSegmentDate(returnSegments[0]?.Departure.Date) }} -
            {{ getSegmentDate(returnSegments[returnSegments.length - 1]?.Arrival.Date) }}
          </span>
        </div>
        <div v-for="(seg, idx) in returnSegments" :key="'return' + idx" class=" mb-2">
          <div class="d-flex">
            <!-- Цаг, лого, огноо -->
            <div class="d-grid text-center justify-content-between align-items-start" style="min-width:70px;">
              <div class="time">{{ getTime(seg.Departure.Date) }}</div>
              <img v-if="getAirlineLogo(seg.MarketingAirline)" :src="getAirlineLogo(seg.MarketingAirline)"
                style="width:32px;" />
              <!-- <div v-if="idx === 0" class="text-danger small">{{ getSegmentDate(seg.Departure.Date) }}</div> -->

              <div class="time">{{ getTime(seg.Arrival.Date) }}</div>
            </div>
            <!-- Timeline -->
            <div class="mx-2 d-flex flex-column align-items-center">
              <!-- <div :class="['dot', idx === goSegments.length - 1 ? 'dot-last' : '']"></div> -->
              <div class="timeline-line"></div>
            </div>
            <!-- Мэдээлэл -->
            <div class="flex-grow-1 pb-3">
              <div class="fw-bold text-black">
                {{ getAirportName(seg.Departure.Iata) }} ({{ seg.Departure.Iata }})
              </div>
              <div class="flight-meta bg-light p-1 rounded " style="font-size:13px;">
                {{ getAirlineName(seg.MarketingAirline) }} {{ seg.FlightNum }} • {{ seg.AirCraft }}
                <br>
                {{ convertTimeText(seg.FlightTime) }}<br>
                <span class="badge bg-light text-primary border me-1 mt-1">
                  <!-- {{ seg.CabinBaggage.Count }}x Гар тээш • {{ seg.Baggage.Count }}кг Тээш -->
                </span>
              </div>

              <div class="fw-bold text-black">
                {{ getAirportName(seg.Arrival.Iata) }} ({{ seg.Arrival.Iata }})
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
            <div v-if="idx < returnSegments.length - 1" class="alert alert-danger py-1 px-2 mb-1 ms-4"
              style="font-size:13px;">
              Дамжин буух: {{ getAirportName(seg.Arrival.Iata) }}
              <span v-if="returnLayovers[idx]">• Хүлээх: {{ returnLayovers[idx] }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useFlightStore } from "@/stores/flight"; // path-аа project-ынхаа дагуу тохируул

const flightStore = useFlightStore();

const props = defineProps({
  flight: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);
const trips = parseInt(sessionStorage.getItem("trips") || "0", 10);
const index = computed(() => props.index);
const flight = computed(() => props.flight); // 1-based index

const StoreflightInfos = computed(() => flightStore.flightInfos || []);
const StoreAirCompany = computed(() => flightStore.AirCompany?.CodeValue || []);
const StoreAirPorts = computed(() => flightStore.AirPorts?.AirPortInfo || []);

const teest = computed(() => OfferInfo.value.flatMap((offer: any) => offer.Segments?.OfferSegment || []).filter((seg: any) => seg.Rph === "2"));

// ----------- ХАМГИЙН ГОЛ ХУВЬСАГЧИД -----------
// const OfferInfo = computed(() =>
//   StoreflightInfos.value[index.value]?.Offers?.OfferInfo ?? []
// );
const OfferInfo = computed(() =>
  props.flight?.Offers?.OfferInfo ?? []
);

function getSegmentsByRph(rph: string) {
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
  const found = StoreAirPorts.value.find((p: any) => p.Iata === iata);
  return found ? found.Name : iata;
}
// Огноо, цаг ялгах
function getTime(str: string) {
  return str ? str.split(" ")[1]?.slice(0, 5) : "";
}
function getSegmentDate(str: string) {
  return str ? str.split(" ")[0] : "";
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
const firstDeparture = computed(() => goSegments.value[0]?.Departure.Iata || "");
const lastArrival = computed(() =>
  show.value > 1 ? returnSegments.value[0].Departure.Iata :
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
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
}

.bg-primary {
  background: #6253ea !important;
}

.bg-secondary {
  background: #3c45a0 !important;
}
</style>

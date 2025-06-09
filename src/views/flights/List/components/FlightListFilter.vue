<template>
  <div v-if="(filteredData.length > 0 ? filteredData.length : StoreflightInfos.length) == 0">

    <SkeletonLoader v-for="n in 10" :key="n" />
  </div>
  <div v-else>
    <b-form class="rounded-3 shadow">
      <!-- Popular filters -->
      <!-- <b-card no-body class="card-body rounded-0 rounded-top p-4">
        <h6 class="mb-2">Popular Filters</h6>
        <b-col cols="12">
          <div class="d-flex justify-content-between align-items-center">
            <b-form-checkbox id="popularType1">Refundable Fare</b-form-checkbox>
            <span class="small">(41)</span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <b-form-checkbox id="popularType2">1 Stop</b-form-checkbox>
            <span class="small">(20)</span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <b-form-checkbox id="popularType3">Late Departure</b-form-checkbox>
            <span class="small">(4)</span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <b-form-checkbox id="popularType4">Non-Stop</b-form-checkbox>
            <span class="small">(2)</span>
          </div>
        </b-col>
      </b-card> -->
      <hr class="my-0" />

      <!-- Onward stops -->
      <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Зогсолт</h6>
        <b-col cols="12">
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="btn-check-c1" :value="1"
              v-model="filters.preferredStops" />
            <label class="form-check-label ms-2" for="btn-check-c1">
              {{ t('txtDirect') }} ({{ direct.length }})
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="btn-check-c2" :value="2"
              v-model="filters.preferredStops" />
            <label class="form-check-label ms-2" for="btn-check-c2">
              {{ t('txt1Stop') }} ({{ OneStop.length }})
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="btn-check-c3" :value="3"
              v-model="filters.preferredStops" />
            <label class="form-check-label ms-2" for="btn-check-c3">
              {{ t('txt2PlusStop') }} ({{ TwoStop.length }})
            </label>
          </div>
        </b-col>
      </b-card>

      <hr class="my-0" />

      <!-- Price -->
      <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Үнэ</h6>
        <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
          <b-button variant="link" class="p-0 mb-0" @click="resetFilters">Clear all</b-button>
        </div>
        <div class="position-relative">
          <div class="d-flex justify-content-between">
            <span>{{ value[0].toLocaleString() }} {{ currency }}</span>
            <span>{{ value[1].toLocaleString() }} {{ currency }}</span>
          </div>
          <VueSlider v-model="value" :min="Math.ceil(minPrice * rate)" :max="Math.ceil(maxPrice * rate)" :interval="1"
            :dotSize="19" :dotStyle="dotStyle" :processStyle="processStyle" :railStyle="railStyle" tooltip="none" />
        </div>
      </b-card>





      <hr class="my-0" />

      <!-- Хөөрөх цагууд -->
      <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Хөөрөх цагууд</h6>
        <b-col cols="12">
          <div v-for="option in departOptions" :key="option.value" class="form-check">
            <input class="form-check-input" type="checkbox" :id="'depart-' + option.value" :value="option.value"
              v-model="selectedDepartTimes" />
            <label class="form-check-label ms-2" :for="'depart-' + option.value">
              {{ option.label }}
            </label>
            <span class="caption ms-2">{{ option.caption }}</span>
          </div>
        </b-col>
      </b-card>

      <b-card no-body class="card-body rounded-0 p-4 mt-3">
        <h6 class="mb-2">Газардaх цагууд</h6>
        <b-col cols="12">
          <div v-for="option in arrivalOptions" :key="option.value" class="form-check">
            <input class="form-check-input" type="checkbox" :id="'arrival-' + option.value" :value="option.value"
              v-model="selectedArrivalTimes" />
            <label class="form-check-label ms-2" :for="'arrival-' + option.value">
              {{ option.label }}
            </label>
            <span class="caption ms-2">{{ option.caption }}</span>
          </div>
        </b-col>
      </b-card>


      <!-- Return Stops -->
      <!-- <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Return Stops</h6>
        <ul class="list-inline mb-0 g-3">
          <li class="list-inline-item mb-0">
            <input type="checkbox" class="btn-check" id="btn-check-6" />
            <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-6">Direct</label>
          </li>
          <li class="list-inline-item mb-0">
            <input type="checkbox" class="btn-check" id="btn-check-7" />
            <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-7">1 Stop</label>
          </li>
          <li class="list-inline-item mb-0">
            <input type="checkbox" class="btn-check" id="btn-check-8" />
            <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-8">2+ Stops</label>
          </li>
        </ul>
      </b-card> -->



      <!-- <hr class="my-0" />
      <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Preferred Airline</h6>
        <b-col cols="12">
          <div v-if="Array.isArray(StoreAirCompany)">
            <div v-for="(comp, index) in StoreAirCompany.slice(0, 5)" :key="index" class="form-check">
              <div v-if="comp">
                <input class="form-check-input" type="checkbox" :value="comp.Code" :id="'airlineType' + index"
                  v-model="flightStore.filters.preferredAirline" />
                <label class="form-check-label" :for="'airlineType' + index">
                  <img :src="comp.Code ? 'https://api.echina.mn/assets/d/' + comp.Code + '.png' : element12"
                    alt="Airline logo" class="h-15px fa-fw me-2" />
                  {{ comp.Value }}
                </label>
              </div>
            </div>
          </div>
        </b-col>
      </b-card> -->


      <hr class="my-0" />

      <!-- Preferred Airline -->
      <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Preferred Airline</h6>
        <b-col cols="12">

          <div v-if="Array.isArray(StoreAirCompany)">
            <div v-for="(comp, index) in StoreAirCompany.slice(0, 5)" :key="index" class="form-check">
              <div v-if="comp">
                <!-- <input class="form-check-input" type="checkbox" :value="comp.Code" :id="'airlineType' + index" />
                <label class="form-check-label" for="airlineType1"> -->
                <input class="form-check-input" type="checkbox" :value="comp.Code" :id="'airlineType' + index"
                  v-model="filters.preferredAirlines" />
                <label :for="'airlineType' + index">
                  <img :src="comp.Code
                    ? 'https://api.echina.mn/assets/d/' + comp.Code + '.png'
                    : element12" alt="Airline logo" class="h-15px fa-fw me-2" />{{ comp.Value }}
                  <!-- <img :src="element12" class="h-15px fa-fw me-2" alt="" />{{ comp.Value }} -->
                </label>
              </div>
            </div>
          </div>


          <b-collapse class="multi-collapse" id="airlineCollapse">
            <div v-if="Array.isArray(StoreAirCompany)">
              <div v-for="(comp, index) in StoreAirCompany.slice(5)" :key="'collapsed-' + index" class="form-check">
                <div v-if="comp">
                  <input class="form-check-input" type="checkbox" :value="comp.Code" :id="'airlineType' + index"
                    v-model="filters.preferredAirlines" />
                  <label :for="'airlineType' + index">
                    <img :src="comp.Code
                      ? 'https://api.echina.mn/assets/d/' + comp.Code + '.png'
                      : element12" alt="Airline logo" class="h-15px fa-fw me-2" />{{ comp.Value }}
                  </label>
                </div>
              </div>
            </div>
          </b-collapse>

          <a v-b-toggle.airlineCollapse class="p-0 mb-to mt-2 btn-more d-flex align-items-center collapsed"
            data-bs-toggle="collapse" href="#airlineCollapes" role="button" aria-expanded="false"
            aria-controls="airlineCollapes">
            See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
            <font-awesome-icon :icon="faAngleDown" class="ms-2" />
          </a>
        </b-col>
      </b-card>

      <hr class="my-0" />

      <!-- Layover Airport -->
      <b-card no-body class="card-body rounded-0 rounded-bottom p-0">
        <h6 class="mb-2 p-4">Layover Airport</h6>
        <b-col cols="12">

          <div v-if="Array.isArray(StoreAirport)">
            <div v-for="(comp, index) in StoreAirport.slice(0, 5)" :key="index" class="form-check">
              <div v-if="comp" class=" px-4">
                <input class="form-check-input" type="checkbox" :value="comp.Iata" :id="'airportType' + index"
                  v-model="filters.preferredAirPorts" />
                <div class="d-flex justify-content-between align-items-center">

                  <label :for="'airportType' + index">
                    {{ comp.Name }}
                  </label>

                  {{ comp.Iata }}
                </div>
              </div>
            </div>
          </div>

          <b-collapse class="multi-collapse" id="lauoverCollapse">
            <div v-if="Array.isArray(StoreAirport)">
              <div v-for="(comp, index) in StoreAirport.slice(5)" :key="index" class="form-check">
                <div v-if="comp" class=" px-4">
                  <input class="form-check-input" type="checkbox" :value="comp.Iata" :id="'airportType' + index"
                    v-model="filters.preferredAirPorts" />
                  <div class="d-flex justify-content-between align-items-center">

                    <label :for="'airportType' + index">
                      {{ comp.Name }}
                    </label>

                    {{ comp.Iata }}
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>

          <a class="btn-more d-flex align-items-center collapsed p-4 mb-0 mt-2" v-b-toggle.lauoverCollapse
            href="#lauoverCollapes" role="button" aria-expanded="false" aria-controls="lauoverCollapes">
            See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
            <font-awesome-icon :icon="faAngleDown" class="me-2" />
          </a>
        </b-col>
      </b-card>
    </b-form>

    <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
      <b-button variant="link" class="p-0 mb-0">Clear all</b-button>
      <!-- <b-button variant="primary" class="mb-0" @click="applyFilter('223')">Filter Result</b-button> -->
    </div>
    <!-- <p>Сонгогдсон Airlines: {{ selectedAirlines }}</p>
    <p>Сонгогдсон AirPorts: {{ selectedAirPorts }}</p>
    <p>Сонгогдсон stops: {{ selectedStops }}</p> -->
  </div>
</template>

<script lang="ts" setup>
import element12 from '@/assets/images/element/12.svg'
import element13 from '@/assets/images/element/13.svg'
import element14 from '@/assets/images/element/14.svg'
import element15 from '@/assets/images/element/15.svg'

import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { computed, ref, watch } from 'vue'
import VueSlider from 'vue-3-slider-component'
import { currency } from '@/helpers/constants'
import { useFlightStore } from '@/stores/flight';
import SkeletonLoader from './Skeleton.vue'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'

const { t, locale } = useI18n()

const flightStore = useFlightStore();
type AirCompany = {
  Code: string;
  Value: string;
};
type Airport = {
  Code: string;
  Iata: string;
  Name: string;
};

const StoreAirCompany = computed<AirCompany[]>(() => flightStore.AirCompany || []);
const StoreAirport = computed<Airport[]>(() => flightStore.AirPorts || []);
const StoreflightInfos = computed(() => flightStore.flightInfos || []);

const direct = ref<any[]>([]);
const OneStop = ref<any[]>([]);
const TwoStop = ref<any[]>([]);

StoreflightInfos.value.forEach((flight: any, index: number) => {
  if (flight.Offers) {
    const segments = getAllSegments(index);
    const stops = segments.length;
    if (stops === 1) direct.value.push(flight);
    else if (stops === 2) OneStop.value.push(flight);
    else TwoStop.value.push(flight);
  }
});

const filters = ref({
  preferredAirlines: [],
  preferredAirPorts: [],
  preferredStops: [],
});

const selectedAirlines = computed(() => filters.value.preferredAirlines);
const selectedAirPorts = computed(() => filters.value.preferredAirPorts);
const selectedStops = computed(() => filters.value.preferredStops);

const rate = parseFloat(sessionStorage.getItem('eur') || '1')

// Dynamic min/max price:
const minPrice = computed(() => {
  const prices = StoreflightInfos.value.map(f =>
    Number(f.AdultPrice || f.TotalPrice || 0)
  ).filter(p => p > 0)
  return prices.length ? Math.min(...prices) : 0
})
const maxPrice = computed(() => {
  const prices = StoreflightInfos.value.map(f =>
    Number(f.AdultPrice || f.TotalPrice || 0)
  ).filter(p => p > 0)
  return prices.length ? Math.max(...prices) : 0
})

// Slider-ын value (анхны утга нь валютын ханшаар хөрвүүлсэн):
const value = ref([
  Math.ceil(minPrice.value * rate),
  Math.ceil(maxPrice.value * rate)
])

// min/max өөрчлөгдөхөд value шинэчлэх:
watch([minPrice, maxPrice], ([min, max]) => {
  value.value = [Math.ceil(min * rate), Math.ceil(max * rate)]
})

// Filter reset:
function resetFilters() {
  filters.value = {
    preferredAirlines: [],
    preferredAirPorts: [],
    preferredStops: [],
  }
  selectedDepartTimes.value = []
  selectedArrivalTimes.value = []
  value.value = [Math.ceil(minPrice.value * rate), Math.ceil(maxPrice.value * rate)]
}

const dotStyle = {
  backgroundColor: '#5143d9',
  border: '5px solid #fff',
  boxShadow: '0px 0px 0px 1px #5143d9'
}
const processStyle = {
  backgroundColor: '#5143d9'
}
const railStyle = {
  backgroundColor: 'rgb(81, 67, 217, 0.1)'
}

// Хөөрөх/Газардалтын цагийн сонголтууд
const departOptions = [
  { value: "morn", label: "00:00 - 12:00", caption: "Өглөө", range: [0, 720] },
  { value: "day", label: "12:00 - 18:00", caption: "Өдөр", range: [720, 1080] },
  { value: "eve", label: "18:00 - 00:00", caption: "Орой", range: [1080, 1440] }
]
const arrivalOptions = [
  { value: "morn", label: "00:00 - 12:00", caption: "Өглөө", range: [0, 720] },
  { value: "day", label: "12:00 - 18:00", caption: "Өдөр", range: [720, 1080] },
  { value: "eve", label: "18:00 - 00:00", caption: "Орой", range: [1080, 1440] }
]

const selectedDepartTimes = ref<string[]>([])
const selectedArrivalTimes = ref<string[]>([])

// Utility functions
function getFlightData(index: number) {
  return StoreflightInfos.value[index] || { Offers: { OfferInfo: [] } };
}
function getAllSegments(index: number) {
  return getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
}
function getFirstSegment(flight: any) {
  return flight.Offers?.OfferInfo?.[0]?.Segments?.OfferSegment?.[0] ?? null
}
function getLastSegment(flight: any) {
  const segs = flight.Offers?.OfferInfo?.[0]?.Segments?.OfferSegment ?? []
  return segs[segs.length - 1] ?? null
}
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
function timeToMinutes(dateStr: string) {
  const d = dayjs(dateStr, "DD.MM.YYYY HH:mm")
  console.log(d)
  return d.hour() * 60 + d.minute()
}

// БҮГДИЙГ нэгтгэсэн FilteredData (хамгийн гол нь энэ хэсэг)
const filteredData = computed(() => {
  const flights = StoreflightInfos.value || []

  return flights.filter(flight => {
    // 1. Онгоцны компани filter
    if (
      filters.value.preferredAirlines.length > 0 &&
      !flight.Offers.OfferInfo.some((offer: any) =>
        offer.Segments.OfferSegment.some(
          (segment: any) =>
            filters.value.preferredAirlines.includes(segment.MarketingAirline)
        )
      )
    ) {
      return false
    }

    // 2. Буудаг буудал filter
    if (
      filters.value.preferredAirPorts.length > 0 &&
      !flight.Offers.OfferInfo.some((offer: any) =>
        offer.Segments.OfferSegment.some(
          (segment: any) =>
            filters.value.preferredAirPorts.includes(segment.Arrival.Iata)
        )
      )
    ) {
      return false
    }

    // 3. Зогсолтын filter
    const segs = flight.Offers.OfferInfo[0]?.Segments?.OfferSegment || []
    const stops = segs.length
    if (
      filters.value.preferredStops.length > 0 &&
      !filters.value.preferredStops.includes(stops)
    ) {
      return false
    }

    // 4. Үнэний filter
    // const price = Number(flight.AdultPrice || flight.TotalPrice || 0)
    // if (price < value.value[0] || price > value.value[1]) {
    //   return false
    // }
    const price = Number(flight.TotalPrice || 0) * rate
    if (price < value.value[0] || price > value.value[1]) {
      return false
    }

    return true
  })
})

// Хөөрөх/Газардалтын цагийн filter-ийг бүх filter-тэй нийлүүлсэн байдлаар
const timeFilteredFlights = computed(() => {
  const data = filteredData.value.length ? filteredData.value : []
  console.log(filteredData.value.length)
  console.log(data.length)
  return data.filter(flight => {
    // Хөөрөх цагаар шүүх
    const departSeg = getFirstSegment(flight)
    const departMin = departSeg ? timeToMinutes(departSeg.Departure.Date) : null
    console.log(departSeg.Departure.Date)
    const departMatch =
      !selectedDepartTimes.value.length ||
      selectedDepartTimes.value.some(val => {
        const range = departOptions.find(o => o.value === val)?.range
        return range && departMin !== null && departMin >= range[0] && departMin < range[1]
      })

    // Газардалт цагаар шүүх
    const arrivalSeg = getLastSegment(flight)
    const arrivalMin = arrivalSeg ? timeToMinutes(arrivalSeg.Arrival.Date) : null
    const arrivalMatch =
      !selectedArrivalTimes.value.length ||
      selectedArrivalTimes.value.some(val => {
        const range = arrivalOptions.find(o => o.value === val)?.range
        return range && arrivalMin !== null && arrivalMin >= range[0] && arrivalMin < range[1]
      })

    return departMatch && arrivalMatch
  })
})

watch(timeFilteredFlights, (newData) => {
  // Шүүлтүүрдсэн нислэгүүдийг store-д хадгална
  console.log(newData)
  flightStore.filterAirline = newData
})
</script>

<style lang="css" scoped>
.section-title {
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 18px;
}

.checkbox-row {
  display: flex;
  align-items: center;
  margin-bottom: 2px;
}

.checkbox-row label {
  margin-left: 6px;
  margin-right: 8px;
  font-size: 15px;
}

.caption {
  color: #999;
  font-size: 13px;
  margin-left: auto;
}
</style>

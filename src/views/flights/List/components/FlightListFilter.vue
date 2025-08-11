<template>
  <div v-if="initialLoading">
    <SkeletonLoader v-for="n in 10" :key="n" />
  </div>

  <div v-else>
    <!-- Шүүлтүүрийн блок -->
    <b-form class="rounded-3 shadow position-relative">

      <!-- Loading overlay (filter солигдоход) -->
      <transition name="fade">
        <div v-if="isFiltering" class="filter-overlay d-flex flex-column align-items-center justify-content-center">
          <div class="spinner-border mb-2" role="status" aria-hidden="true"></div>
          <div class="small">{{ t('txtWaiting') }}</div>
        </div>
      </transition>

      <!-- Stops -->
      <hr class="my-0" />
      <b-card no-body class="card-body rounded-0 p-4">
        <div class="d-flex justify-content-between align-items-center p-2 p-xl-0  mb-2">
          <h6 class="mb-0">Зогсолт</h6>
          <b-button variant="link" class="p-0 mb-0" style="font-size: small;" @click="resetStops">Цэвэрлэх</b-button>
        </div>
        <b-col cols="12">
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="btn-check-c1" :value="1"
              v-model="filters.preferredStops" />
            <label class="form-check-label ms-2" for="btn-check-c1">
              {{ t('txtDirect') }} ({{ stopsCounts.direct }})
            </label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id="btn-check-c2" :value="2"
              v-model="filters.preferredStops" />
            <label class="form-check-label ms-2" for="btn-check-c2">
              {{ t('txt1Stop') }} ({{ stopsCounts.one }})
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="btn-check-c3" :value="3"
              v-model="filters.preferredStops" />
            <label class="form-check-label ms-2" for="btn-check-c3">
              {{ t('txt2PlusStop') }} ({{ stopsCounts.twoPlus }})
            </label>
          </div>
        </b-col>
      </b-card>

      <!-- Price -->
      <hr class="my-0" />
      <b-card no-body class="card-body rounded-0 p-4">
        <div class="d-flex justify-content-between align-items-center p-2 p-xl-0 mb-2">
          <h6 class="mb-0">Үнэ</h6>
          <b-button variant="link" class="p-0 mb-0" style="font-size: small;" @click="resetPrice">Цэвэрлэх</b-button>
        </div>
        <div class="position-relative">
          <div class="d-flex justify-content-between">
            <span>{{ value[0].toLocaleString() }} {{ currency }}</span>
            <span>{{ value[1].toLocaleString() }} {{ currency }}</span>
          </div>
          <VueSlider v-model="value" :min="Math.floor(minPrice * rate)" :max="Math.ceil(maxPrice * rate)" :interval="1"
            :dotSize="19" :dotStyle="dotStyle" :processStyle="processStyle" :railStyle="railStyle" tooltip="none" />
        </div>
      </b-card>

      <!-- Хөөрөх цагууд -->
      <hr class="my-0" />
      <b-card no-body class="card-body rounded-0 p-4">
        <div class="d-flex justify-content-between align-items-center p-2 p-xl-0 mb-2">
          <h6 class="mb-0">Хөөрөх цагууд</h6>
          <b-button variant="link" class="p-0 mb-0" style="font-size: small;" @click="resetDepDate">Цэвэрлэх</b-button>
        </div>
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

      <!-- Газардалт -->
      <b-card no-body class="card-body rounded-0 p-4 mt-3">
        <div class="d-flex justify-content-between align-items-center p-2 p-xl-0 mb-2">
          <h6 class="mb-0">Газардaх цагууд</h6>
          <b-button variant="link" class="p-0 mb-0" style="font-size: small;" @click="resetArrDate">Цэвэрлэх</b-button>
        </div>
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

      <!-- Preferred Airline -->
      <hr class="my-0" />
      <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Preferred Airline</h6>
        <b-col cols="12">
          <div v-if="Array.isArray(StoreAirCompany)">
            <div v-for="(comp, index) in StoreAirCompany.slice(0, 5)" :key="index" class="form-check">
              <div v-if="comp">
                <input class="form-check-input" type="checkbox" :value="comp.Code" :id="'airlineType' + index"
                  v-model="filters.preferredAirlines" />
                <label :for="'airlineType' + index">
                  <img :src="comp.Code ? 'https://api.echina.mn/assets/d/' + comp.Code + '.png' : element12"
                    alt="Airline logo" class="h-15px fa-fw me-2" />{{ comp.Value }}
                </label>
              </div>
            </div>
          </div>

          <b-collapse class="multi-collapse" id="airlineCollapse">
            <div v-if="Array.isArray(StoreAirCompany)">
              <div v-for="(comp, index) in StoreAirCompany.slice(5)" :key="'collapsed-' + index" class="form-check">
                <div v-if="comp">
                  <input class="form-check-input" type="checkbox" :value="comp.Code" :id="'airlineType-c' + index"
                    v-model="filters.preferredAirlines" />
                  <label :for="'airlineType-c' + index">
                    <img :src="comp.Code ? 'https://api.echina.mn/assets/d/' + comp.Code + '.png' : element12"
                      alt="Airline logo" class="h-15px fa-fw me-2" />{{ comp.Value }}
                  </label>
                </div>
              </div>
            </div>
          </b-collapse>

          <a v-b-toggle.airlineCollapse class="p-0 mb-to mt-2 btn-more d-flex align-items-center collapsed"
            role="button" aria-expanded="false" aria-controls="airlineCollapse">
            See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
            <font-awesome-icon :icon="faAngleDown" class="ms-2" />
          </a>
        </b-col>
      </b-card>

      <!-- Layover Airport -->
      <hr class="my-0" />
      <b-card no-body class="card-body rounded-0 rounded-bottom p-0">
        <h6 class="mb-2 p-4">Layover Airport</h6>
        <b-col cols="12">
          <div v-if="Array.isArray(StoreAirport)">
            <div v-for="(comp, index) in StoreAirport.slice(0, 5)" :key="index" class="form-check">
              <div v-if="comp" class="px-4">
                <input class="form-check-input" type="checkbox" :value="comp.Iata" :id="'airportType' + index"
                  v-model="filters.preferredAirPorts" />
                <div class="d-flex justify-content-between align-items-center">
                  <label :for="'airportType' + index">{{ comp.Name }}</label>
                  {{ comp.Iata }}
                </div>
              </div>
            </div>
          </div>

          <b-collapse class="multi-collapse" id="layoverCollapse">
            <div v-if="Array.isArray(StoreAirport)">
              <div v-for="(comp, index) in StoreAirport.slice(5)" :key="'ap-c' + index" class="form-check">
                <div v-if="comp" class="px-4">
                  <input class="form-check-input" type="checkbox" :value="comp.Iata" :id="'airportType-c' + index"
                    v-model="filters.preferredAirPorts" />
                  <div class="d-flex justify-content-between align-items-center">
                    <label :for="'airportType-c' + index">{{ comp.Name }}</label>
                    {{ comp.Iata }}
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>

          <a class="btn-more d-flex align-items-center collapsed p-4 mb-0 mt-2" v-b-toggle.layoverCollapse role="button"
            aria-expanded="false" aria-controls="layoverCollapse">
            See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
            <font-awesome-icon :icon="faAngleDown" class="me-2" />
          </a>
        </b-col>
      </b-card>
    </b-form>

    <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
      <b-button variant="link" class="p-0 mb-0 ms-3" style="font-size: small;" @click="resetFilters">Цэвэрлэх</b-button>
    </div>
  </div>
</template>


<script lang="ts" setup>
import element12 from '@/assets/images/element/12.svg'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { computed, ref, watch, nextTick } from 'vue'
import VueSlider from 'vue-3-slider-component'
import { currency } from '@/helpers/constants'
import { useFlightStore } from '@/stores/flight'
import SkeletonLoader from './Skeleton.vue'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

const { t } = useI18n()
const flightStore = useFlightStore()

type AirCompany = { Code: string; Value: string }
type Airport = { Code: string; Iata: string; Name: string }

const StoreAirCompany = computed<AirCompany[]>(() => flightStore.AirCompany || [])
const StoreAirport = computed<Airport[]>(() => flightStore.AirPorts || [])
const StoreflightInfos = computed<any[]>(() => flightStore.flightInfos || [])

const rate = parseFloat(sessionStorage.getItem('eur') || '1')

// --- Loading төлөвүүд ---
const initialLoading = computed(() => (StoreflightInfos.value ?? []).length === 0)
const isFiltering = ref(false)
let filterTimer: number | null = null
function startFilterLoading() {
  if (filterTimer) window.clearTimeout(filterTimer)
  isFiltering.value = true
  // богино timeout ашиглаж UI-г амь оруулах
  filterTimer = window.setTimeout(() => { isFiltering.value = false }, 250)
}

// --- Үнийн min-max ---
const minPrice = computed(() => {
  const prices = (StoreflightInfos.value ?? [])
    .map(f => Number(f.AdultPrice || f.TotalPrice || f?.TariffInfo?.AdultPrice || 0))
    .filter(p => p > 0)
  return prices.length ? Math.min(...prices) : 0
})
const maxPrice = computed(() => {
  const prices = (StoreflightInfos.value ?? [])
    .map(f => Number(f.AdultPrice || f.TotalPrice || f?.TariffInfo?.AdultPrice || 0))
    .filter(p => p > 0)
  return prices.length ? Math.max(...prices) : 0
})
const value = ref([Math.floor(minPrice.value * rate), Math.ceil(maxPrice.value * rate)])
watch([minPrice, maxPrice], ([min, max]) => {
  value.value = [Math.floor(min * rate), Math.ceil(max * rate)]
})

// --- Сонголтууд ---
const filters = ref({
  preferredAirlines: [] as string[],
  preferredAirPorts: [] as string[],
  preferredStops: [] as number[],
})
const selectedDepartTimes = ref<string[]>([])
const selectedArrivalTimes = ref<string[]>([])

function resetStops() {
  filters.value.preferredStops = []
}
function resetPrice() {
  value.value = [Math.floor(minPrice.value * rate), Math.ceil(maxPrice.value * rate)]
}
function resetArrDate() {
  selectedArrivalTimes.value = []
}
function resetDepDate() {
  selectedDepartTimes.value = []
}
function resetFilters() {
  filters.value = { preferredAirlines: [], preferredAirPorts: [], preferredStops: [] }
  selectedDepartTimes.value = []
  selectedArrivalTimes.value = []
  resetPrice()
}

// --- Цагийн сонголтууд ---
const departOptions = [
  { value: 'night', label: '00:00 - 06:00', caption: 'Шөнө', range: [0, 360] },
  { value: 'morn', label: '06:00 - 12:00', caption: 'Өглөө', range: [360, 720] },
  { value: 'day', label: '12:00 - 18:00', caption: 'Өдөр', range: [720, 1080] },
  { value: 'eve', label: '18:00 - 00:00', caption: 'Орой', range: [1080, 1440] }
]

const arrivalOptions = [...departOptions]

// --- Utils ---
function getAllSegmentsFromFlight(flight: any) {
  const infos = flight?.Offers?.OfferInfo ?? []
  const segs: any[] = []
  for (const oi of infos) {
    const s = oi?.Segments?.OfferSegment ?? []
    if (Array.isArray(s)) segs.push(...s)
  }
  return segs
}
function getFirstSegment(flight: any) {
  const segs = getAllSegmentsFromFlight(flight)
  return segs[0] ?? null
}
function getLastSegment(flight: any) {
  const segs = getAllSegmentsFromFlight(flight)
  return segs[segs.length - 1] ?? null
}
function timeToMinutes(dateStr: string) {
  const d = dayjs(dateStr, 'DD.MM.YYYY HH:mm')
  return d.isValid() ? d.hour() * 60 + d.minute() : null
}
function getStopsCount(flight: any) {
  const segs = getAllSegmentsFromFlight(flight)
  return segs.length
}
function getPriceInUIRate(flight: any) {
  const p = Number(flight.AdultPrice || flight.TotalPrice || flight?.TariffInfo?.AdultPrice || 0)
  return (isNaN(p) ? 0 : p) * rate
}

// --- 1) Price + Airline + Airport + Time шүүлт (суурь)
const baseFiltered = computed(() => {
  const flights = StoreflightInfos.value || []
  return flights.filter((flight) => {
    // Airline
    if (filters.value.preferredAirlines.length > 0) {
      const segs = getAllSegmentsFromFlight(flight)
      const hit = segs.some(s => filters.value.preferredAirlines.includes(s?.MarketingAirline))
      if (!hit) return false
    }

    // Layover airport (arrival IATA)
    if (filters.value.preferredAirPorts.length > 0) {
      const segs = getAllSegmentsFromFlight(flight)
      const hit = segs.some(s => filters.value.preferredAirPorts.includes(s?.Arrival?.Iata))
      if (!hit) return false
    }

    // Price (UI валют)
    const uiPrice = getPriceInUIRate(flight)
    if (uiPrice < value.value[0] || uiPrice > value.value[1]) return false

    // Time filter
    // Depart
    const departSeg = getFirstSegment(flight)
    const departMin = departSeg ? timeToMinutes(departSeg?.Departure?.Date) : null
    const departOK =
      selectedDepartTimes.value.length === 0 ||
      selectedDepartTimes.value.some(key => {
        const r = departOptions.find(o => o.value === key)?.range
        return r && departMin !== null && departMin >= r[0] && departMin < r[1]
      })
    if (!departOK) return false

    // Arrival
    const arrivalSeg = getLastSegment(flight)
    const arrivalMin = arrivalSeg ? timeToMinutes(arrivalSeg?.Arrival?.Date) : null
    const arrivalOK =
      selectedArrivalTimes.value.length === 0 ||
      selectedArrivalTimes.value.some(key => {
        const r = arrivalOptions.find(o => o.value === key)?.range
        return r && arrivalMin !== null && arrivalMin >= r[0] && arrivalMin < r[1]
      })
    if (!arrivalOK) return false

    return true
  })
})

// --- 2) Stops filter (суурь шүүлтийн ДЭЭР)
const filteredData = computed(() => {
  const src = baseFiltered.value
  if (filters.value.preferredStops.length === 0) return src
  return src.filter(f => filters.value.preferredStops.includes(getStopsCount(f)))
})

// --- Зогсолтын тоолуур (суурь шүүлтээр динамик)
const stopsCounts = computed(() => {
  const src = baseFiltered.value
  let direct = 0, one = 0, twoPlus = 0
  for (const f of src) {
    const n = getStopsCount(f)
    if (n === 1) direct++
    else if (n === 2) one++
    else if (n >= 3) twoPlus++
  }
  return { direct, one, twoPlus }
})

// Store-д дамжуулах (хүсвэл энд sort бас хийж болно)
watch(filteredData, (rows) => {
  flightStore.filterAirline = rows
})

// --- Loading trigger: ямар нэг filter өөрчлөгдөх бүрт богино хугацаанд overlay үзүүлнэ
watch(
  [
    () => filters.value.preferredAirlines.slice(),
    () => filters.value.preferredAirPorts.slice(),
    () => filters.value.preferredStops.slice(),
    () => value.value.slice(),
    () => selectedDepartTimes.value.slice(),
    () => selectedArrivalTimes.value.slice(),
    StoreflightInfos
  ],
  async () => {
    startFilterLoading()
    await nextTick() // UI refresh
  },
  { deep: true }
)

// --- Slider styles
const dotStyle = { backgroundColor: '#5143d9', border: '5px solid #fff', boxShadow: '0px 0px 0px 1px #5143d9' }
const processStyle = { backgroundColor: '#5143d9' }
const railStyle = { backgroundColor: 'rgb(81, 67, 217, 0.1)' }
</script>


<style scoped>
.filter-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, .75);
  z-index: 10;
  border-radius: inherit;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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

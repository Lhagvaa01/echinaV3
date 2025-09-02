<!-- src/views/flights/Details/BookedFlightCard.vue -->
<template>
  <div>
    <!-- Ачаалж байх үе -->
    <div v-if="!ready" class="p-3 text-muted">Уншиж байна…</div>

    <!-- Амжилттай уншсан, offer бэлэн -->
    <FlightOfferCard v-else-if="selectedOffer" :offer="selectedOffer" :index="0" :rate="rate" :currency="currency"
      :adults="adults" :childs="childs" :infants="infants" :searchGuid="SearchGuid" :showOverride="show"
      :hideSummaryColumn="hideSummaryColumn" />

    <!-- Алдаа / хоосон -->
    <div v-else class="px-3 py-2">
      <div class="text-danger fw-semibold">Нислэгийн мэдээлэл олдсонгүй.</div>
      <div v-if="error" class="small text-muted mt-1">Алдаа: {{ error }}</div>

      <!-- DEBUG горим: JSON-оо хармаар байвал true болго -->
      <pre v-if="debug && bookingRaw" class="small mt-2 bg-light p-2 rounded overflow-auto">
{{ JSON.stringify(bookingRaw, null, 2) }}
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFlightStore } from '@/stores/flight'
import FlightOfferCard from '@/components/FlightOfferCard.vue'
import { currency } from '@/helpers/constants' // танай тогтмол

// ====== ТОХИРГОО / ДЭБАГ ======
const debug = false                 // JSON-оо дэлгэцэнд харах бол true
const hideSummaryColumn = true      // Баруун талын үнийн багана нуух бол true

// ====== COMPOSABLES ======
const route = useRoute()
const flightStore = useFlightStore()

// ====== ТӨЛӨВ ======
const ready = ref(false)
const error = ref<string>('')

const bookingRaw = ref<any>(null)   // sessionStorage.BookingInfo-н бүхэл агуулга

// SSR-safe уншилт
onMounted(() => {
  try {
    const raw = window.sessionStorage.getItem('BookingInfo')
    if (!raw) {
      throw new Error('sessionStorage.BookingInfo хоосон байна.')
    }
    bookingRaw.value = JSON.parse(raw)
  } catch (e: any) {
    console.error('[BookedFlightCard] BookingInfo parse error:', e)
    error.value = e?.message ?? 'BookingInfo унших үед алдаа гарлаа.'
  } finally {
    ready.value = true
  }
})

// ====== ДАТА ШИНГЭЭЛТ ======
const aero = computed(() => {
  // 1) бүрэн envelope
  const a1 = bookingRaw.value?.result?.Body?.AeroBookResponse?.AeroBookResult
  if (a1) return a1
  // 2) зөвхөн Body
  const a2 = bookingRaw.value?.Body?.AeroBookResponse?.AeroBookResult
  if (a2) return a2
  // 3) шууд AeroBookResult хэлбэр
  if (bookingRaw.value?.Offers && bookingRaw.value?.TariffInfo) return bookingRaw.value
  return undefined
})

const offerInfoRaw = computed(() => {
  const oi = aero.value?.Offers?.OfferInfo
  return Array.isArray(oi) ? oi[0] : oi
})

// FlightOfferCard-д нийцсэн хэлбэрт нормчлох
const selectedOffer = computed(() => {
  const oi = offerInfoRaw.value
  if (!oi) return null

  const segRaw = oi?.Segments?.OfferSegment
  const segments = Array.isArray(segRaw) ? segRaw : (segRaw ? [segRaw] : [])

  const adultPrice = Number(
    aero.value?.TariffInfo?.AdultPrice ??
    aero.value?.TariffInfo?.AdultBasePrice ??
    aero.value?.FullPrice ?? 0
  )
  const totalPrice = Number(aero.value?.FullPrice ?? adultPrice)

  // FlightOfferCard-д шаардагддаг түлхүүрүүд
  return {
    OfferCode: aero.value?.BookGuid ?? oi?.PNR ?? 'BOOK',
    PNR: oi?.PNR,
    Rph: oi?.Rph,
    AdultPrice: adultPrice,
    TotalPrice: totalPrice,
    ChildPrice: undefined,
    InfantPrice: undefined,
    ValidatingAirline: oi?.ValidatingAirline,
    ValidatingAirlineName: oi?.ValidatingAirlineName,
    Segments: { OfferSegment: segments },
    ResBookDesigQuantity: segments[0]?.ResBookDesigQuantity ?? '',
    MarketingAirline: segments[0]?.MarketingAirline,
    MarketingAirlineName: segments[0]?.MarketingAirlineName,
  }
})

// ====== БУСАД ПРОПС ======
const rate = computed(() => parseFloat(window.sessionStorage.getItem('eur') ?? '1'))
const show = computed(() => Number(window.sessionStorage.getItem('flight') ?? '1'))
const SearchGuid = computed(() => aero.value?.SearchGuid ?? flightStore.SearchGuid)

const adults = computed(() => Number(route.query.adults ?? 1))
const childs = computed(() => Number(route.query.childs ?? 0))
const infants = computed(() => Number(route.query.infants ?? 0))
</script>

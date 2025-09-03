<template>
  <div>
    <!-- Ачаалж байх үе -->
    <div v-if="!ready" class="p-3 text-muted">Уншиж байна…</div>

    <!-- Амжилттай: нэг л нислэгийг FlightOfferCard-аар харуулна -->
    <FlightOfferCard class="mx-3" v-else-if="selectedOffer" :offer="selectedOffer" :index="0" :rate="rate"
      :currency="currency" :adults="adults" :childs="childs" :infants="infants" :searchGuid="SearchGuid"
      :showOverride="show" :hideChooseButton="true" />

    <!-- Алдаа / хоосон -->
    <div v-else class="px-3 py-2">
      <div class="text-danger fw-semibold">Нислэгийн мэдээлэл олдсонгүй.</div>
      <div v-if="error" class="small text-muted mt-1">Алдаа: {{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFlightStore } from '@/stores/flight'
import FlightOfferCard from '@/components/FlightOfferCard.vue'
import { currency } from '@/helpers/constants' // танай тогтмол

const route = useRoute()
const flightStore = useFlightStore()

const ready = ref(false)
const error = ref<string>('')

const bookingRaw = ref<any>(null)

onMounted(() => {
  try {
    const raw = window.sessionStorage.getItem('BookingInfo')
    if (!raw) throw new Error('sessionStorage.BookingInfo хоосон байна.')
    bookingRaw.value = JSON.parse(raw)
  } catch (e: any) {
    console.error('[PaymentDetails] BookingInfo parse error:', e)
    error.value = e?.message ?? 'BookingInfo унших үед алдаа гарлаа.'
  } finally {
    ready.value = true
  }

  // trips session байхгүй үед FlightOfferCard хоосон болдог → 1 гэж тохируулъя
  if (!window.sessionStorage.getItem('trips')) {
    window.sessionStorage.setItem('trips', '1')
  }
})

/** AeroBookResult-ээ олж авах (аль хэлбэрээр хадгалсан ч барина) */
const aero = computed(() => {
  const root = bookingRaw.value
  return root?.result?.Body?.AeroBookResponse?.AeroBookResult
    || root?.Body?.AeroBookResponse?.AeroBookResult
    || (root?.Offers && root?.TariffInfo ? root : undefined)
})

/** OfferInfo (ганц/олон) → ганц объект болгоно */
const offerInfoRaw = computed(() => {
  const oi = aero.value?.Offers?.OfferInfo
  return Array.isArray(oi) ? oi[0] : oi
})

/** FlightOfferCard-д таарах “offer” болгон нормчлох.
 *  FlightOfferCard нь offer.Offers.OfferInfo бүтэц хүлээдэг тул түүнийг бүрдүүлж өгнө.
 */
const selectedOffer = computed(() => {
  const oi = offerInfoRaw.value
  if (!oi) return null

  const segRaw = oi?.Segments?.OfferSegment
  const segments = Array.isArray(segRaw) ? segRaw : (segRaw ? [segRaw] : [])

  const adultPrice = Number(
    aero.value?.TariffInfo?.AdultPrice
    ?? aero.value?.TariffInfo?.AdultBasePrice
    ?? aero.value?.FullPrice
    ?? 0
  )
  const totalPrice = Number(aero.value?.FullPrice ?? adultPrice)

  return {
    OfferCode: aero.value?.BookGuid ?? oi?.PNR ?? 'BOOK',
    PNR: oi?.PNR,
    Rph: oi?.Rph ?? '1',
    AdultPrice: adultPrice,
    TotalPrice: totalPrice,
    ChildPrice: undefined,
    InfantPrice: undefined,
    ValidatingAirline: oi?.ValidatingAirline,
    ValidatingAirlineName: oi?.ValidatingAirlineName,

    // ⬇️ FlightOfferCard ашигладаг хэлбэрээр сегментүүдийг өгнө
    Offers: {
      OfferInfo: [
        {
          Rph: oi?.Rph ?? '1',
          Segments: { OfferSegment: segments }
        }
      ]
    },

    // нэмэлт туслахууд
    ResBookDesigQuantity: segments[0]?.ResBookDesigQuantity ?? '',
    MarketingAirline: segments[0]?.MarketingAirline,
    MarketingAirlineName: segments[0]?.MarketingAirlineName
  }
})

/** Бусад пропсууд */
const rate = computed(() => parseFloat(window.sessionStorage.getItem('eur') ?? '1'))
const show = computed(() => Number(window.sessionStorage.getItem('flight') ?? '1'))
const SearchGuid = computed(() => aero.value?.SearchGuid ?? flightStore.SearchGuid)

const adults = computed(() => Number(route.query.adults ?? 1))
const childs = computed(() => Number(route.query.childs ?? 0))
const infants = computed(() => Number(route.query.infants ?? 0))
</script>

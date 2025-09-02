<!-- SelectedFlightView.vue -->
<template>
  <div>
    <FlightOfferCard v-if="selectedOffer" :offer="selectedOffer" :index="0" :rate="rate" :currency="currency"
      :adults="adults" :childs="childs" :infants="infants" :searchGuid="SearchGuid" :showOverride="show"
      :hideChooseButton="true" />

    <div v-else class="text-center text-muted py-5">
      {{ t('txtNotFind') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import FlightOfferCard from '@/components/FlightOfferCard.vue'
import { useFlightStore } from '@/stores/flight'
import { useOptionStore } from '@/stores/optionStore'
import { currency } from '@/helpers/constants'

const { t } = useI18n()
const route = useRoute()
const flightStore = useFlightStore()
const optionStore = useOptionStore()

/** SSR-safe sessionStorage */
const ss = typeof window !== 'undefined' ? window.sessionStorage : undefined

/** Query утгууд */
const q = <T = string>(v: unknown) => (Array.isArray(v) ? (v[0] as T) : (v as T))
const offerCode = computed(() => q<string | undefined>(route.query.offerCode))
const searchGuidQ = computed(() => q<string | undefined>(route.query.searchGuid))

/** Картын нэмэлт props */
const rate = computed(() => parseFloat(ss?.getItem('eur') ?? '1'))
const show = computed(() => Number(ss?.getItem('flight') ?? '1'))
const toNum = (v: unknown) => Number(Array.isArray(v) ? v[0] : v) || 0
const adults = computed(() => toNum(route.query.adults))
const childs = computed(() => toNum(route.query.childs))
const infants = computed(() => toNum(route.query.infants))

/** SearchGuid: route->store fallback */
const SearchGuid = computed(() => searchGuidQ.value ?? flightStore.SearchGuid)

/** 1) Эрэлтийн өгөгдлөөс сонгосон offerCode-оор ганцыг шүүх */
const searchResults = computed<any[]>(() => {
  const src = flightStore.firstAdultPrice?.length
    ? flightStore.firstAdultPrice
    : (flightStore.flightInfos ?? [])
  return Array.isArray(src) ? src : []
})
const selectedFromSearch = computed<any | null>(() => {
  if (!offerCode.value) return null
  return searchResults.value.find(o => o?.OfferCode === offerCode.value) ?? null
})

/** 2) Олдохгүй бол PreBooking-оос Offer хэлбэрт хөрвүүлж ганцаар нь харуулах */
const prebookRaw = ss?.getItem('PreBooking')
const prebook = computed<any | null>(() =>
  optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult
  ?? (prebookRaw ? JSON.parse(prebookRaw)?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult : null)
)
const selectedFromPrebook = computed<any | null>(() => {
  if (!prebook.value) return null
  const oi = prebook.value?.Offers?.OfferInfo
  const offerInfoArr = Array.isArray(oi) ? oi : oi ? [oi] : []
  return {
    OfferCode: prebook.value?.OfferCode ?? offerCode.value ?? 'PREBOOK',
    AdultPrice: Number(prebook.value?.TariffInfo?.AdultPrice ?? 0),
    ChildPrice: Number(prebook.value?.TariffInfo?.ChildPrice ?? 0),
    InfantPrice: Number(prebook.value?.TariffInfo?.InfantPrice ?? 0),
    TotalPrice: Number(prebook.value?.TariffInfo?.TotalPrice ?? 0),
    Offers: { OfferInfo: offerInfoArr },
  }
})

/** Эцсийн сонголт: зөвхөн НЭГ нислэг */
const selectedOffer = computed<any | null>(() => selectedFromSearch.value ?? selectedFromPrebook.value)
</script>

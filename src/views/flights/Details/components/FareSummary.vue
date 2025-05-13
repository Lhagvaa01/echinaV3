<template>
  <b-col md="8" xl="12">
    <b-card no-body class="bg-light rounded-2">
      <b-card-header class="border-bottom bg-light">
        <b-card-title tag="h5" class="mb-0">{{ t('txtPaymentInfo') }}</b-card-title>
      </b-card-header>

      <b-card-body>
        <ul class="list-group list-group-borderless">
          <!-- Adult price -->
          <li class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center">
            <span class="h6 fw-normal mb-2 mb-md-0">
              Том хүн ({{ travelers.adults }} x
              {{ Math.ceil((parseFloat(getOptionPrice().AdultPrice) * eurToMnt)).toLocaleString() }}₮)
              <b-icon-info-circle class="ms-1" />
            </span>
            <span class="fs-6 text-end text-md-start">
              {{
                Math.ceil((travelers.adults * parseFloat(getOptionPrice().AdultPrice) * eurToMnt)).toLocaleString()
              }}₮
            </span>
          </li>

          <!-- Child price -->
          <li v-if="travelers.childs > 0"
            class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center">
            <span class="h6 fw-normal mb-2 mb-md-0">
              Хүүхэд ({{ travelers.childs }} x
              {{ Math.ceil((parseFloat(getOptionPrice().ChildPrice) * eurToMnt)).toLocaleString() }}₮)
              <b-icon-info-circle class="ms-1" />
            </span>
            <span class="fs-6 text-end text-md-start">
              {{
                Math.ceil((travelers.childs * parseFloat(getOptionPrice().ChildPrice) * eurToMnt)).toLocaleString()
              }}₮
            </span>
          </li>

          <!-- Service fee -->
          <li class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center">
            <span class="h6 fw-normal mb-2 mb-md-0">Үйлчилгээний хөлс</span>
            <span class="fs-6 text-end text-md-start">
              {{ totalPrice.toLocaleString() }}₮
            </span>
          </li>
        </ul>
      </b-card-body>

      <b-card-footer class="border-top bg-light">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span class="h6 fw-normal mb-2 mb-md-0">Нийт Төлбөр:</span>
          <span class="h6 fw-bold mb-0">
            {{
              Math.ceil((
                parseFloat(infos.FullPrice) * eurToMnt + totalPrice
              )).toLocaleString()
            }}₮
          </span>
        </div>
      </b-card-footer>





    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { currency } from '@/helpers/constants'
import { BIconInfoCircle } from 'bootstrap-icons-vue'
import { useOptionStore } from '@/stores/optionStore'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const travelers = ref({ adults: 0, childs: 0 })

const totalPrice = ref(0)
const fee = 7000

onMounted(() => {
  const travelersStr = sessionStorage.getItem("travelers")
  if (travelersStr) {
    try {
      const parsed = JSON.parse(travelersStr)
      travelers.value = parsed
      const adults = parsed.adults || 0
      const childs = parsed.childs || 0

      totalPrice.value = (adults + childs) * fee
    } catch (e) {
      console.error("❌ travelers JSON parse алдаа:", e)
    }
  }
})

const eurToMnt = ref<number | null>(null)
onMounted(async () => {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  const formatDate = (d: Date) => d.toISOString().split('T')[0]

  const startDate = formatDate(yesterday)
  const endDate = formatDate(today)

  try {
    const res = await fetch(`https://www.mongolbank.mn/mn/currency-rates/data?startDate=${startDate}&endDate=${endDate}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    const eur = data?.data?.[0]?.EUR
    eurToMnt.value = eur ? parseFloat(eur.replace(',', '')) : null
    console.log(eurToMnt)
  } catch (error) {
    console.error('❌ Монголбанк ханш татахад алдаа:', error)
  }
})


const optionStore = useOptionStore();

const infos = computed(() => {
  return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult || [];
});


const getOptionPrice = () => {
  return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult?.TariffInfo || [];
};


const getFlightData = () => {
  return infos.value || { Offers: { OfferInfo: [] } };
};

const getAllSegments = () => {
  // console.log(getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [])
  return getFlightData().Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
};
</script>

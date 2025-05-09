<template>
  <b-col md="6" xl="12">
    <b-card no-body class="bg-light rounded-2">
      <b-card-header class="border-bottom bg-light">
        <b-card-title tag="h5" class="mb-0">{{ t('txtPaymentInfo') }}</b-card-title>
      </b-card-header>

      <b-card-body>
        <ul class="list-group list-group-borderless">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-normal mb-0">{{ t('txtAdult') }}
              <a href="#" tabindex="0"
                v-b-popover.focus.bottom="'COVID-19 test required Vaccinated travelers can visit'">
                <BIconInfoCircle />
              </a>
            </span>
            <span class="fs-5">{{ currency }}{{ getOptionPrice().AdultPrice || "" }}</span>
          </li>
          <!-- <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-normal mb-0">Discount</span>
            <span class="fs-6 text-success">+{{ currency }}2,560</span>
          </li> -->
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="h6 fw-normal mb-0">{{ t('txtServiceFee') }}</span>
            <span class="fs-5">{{ currency }}7000</span>
          </li>
        </ul>
      </b-card-body>

      <b-card-footer class="border-top bg-light">
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 fw-normal mb-0">{{ t('txtTotalAmount') }}</span>
          <span class="h5 fw-normal mb-0">{{ currency }}{{ Number(getOptionPrice()?.AdultPrice) + 7000 || "" }}</span>
        </div>
      </b-card-footer>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { currency } from '@/helpers/constants'
import { BIconInfoCircle } from 'bootstrap-icons-vue'
import { useOptionStore } from '@/stores/optionStore'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()


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

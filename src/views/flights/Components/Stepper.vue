<template>
  <!-- <section> -->
  <b-container>
    <div class="bs-stepper stepper-outline">
      <div class="bs-stepper-header d-none d-md-flex" role="tablist">
        <div v-for="(stepLabel, index) in stepLabels" class="d-flex mb-5" :class="{ active: step === index + 1 }">

          <div class="step" :class="{ active: step === index + 1 }">
            <div class="text-center">
              <div class="step-trigger mb-0">
                <!-- <span class="bs-stepper-circle">1</span> -->
                <span class="bs-stepper-circle">
                  {{ step > index + 1 ? '✓' : `${index + 1}` }}
                </span>
              </div>
              <h6 class="bs-stepper-label d-none d-md-block">{{ stepLabel.label }}</h6>
              <span class="bs-stepper-label d-none d-md-block">{{ stepLabel.desc }}</span>
            </div>
          </div>
          <div v-if="index != 3" class="line"></div>

        </div>



      </div>
      <!-- Mobile View -->
      <b-button @click="showModal = !showModal"
        class="d-flex bg-white mt-3 text-primary d-md-none justify-content-between align-items-start px-3 py-2 border rounded">
        <div class="d-flex align-items-center ">
          <div class="me-3 ">
            <StepProgress :step="props.step" :total="stepLabels.length" :index="props.step" />
          </div>
          <div>
            <div class="d-flex justify-content-start fw-bold">{{ stepLabels[props.step - 1].label }}</div>
            <div class="text-start small">{{ stepLabels[props.step - 1].desc }}</div>
          </div>
        </div>
      </b-button>

      <!-- Modal -->
      <b-modal v-model="showModal" title="Алхамууд" hide-footer>
        <div v-for="(stepLabel, index) in stepLabels" :key="index" class="mb-3">
          <div class="d-flex align-items-center">
            <!-- <div class="bs-stepper-circle me-3" :class="{ 'bg-primary text-white': props.step === index + 1 }">
              {{ index + 1 }}
            </div> -->
            <div class="me-3 " :class="{ 'text-white': props.step === index + 1 }">
              <StepProgress :step="index + 1" :total="stepLabels.length" :index="props.step" />
            </div>
            <div>
              <div class="fw-bold" :class="{ 'text-primary': props.step === index + 1 }">{{ stepLabel.label }}
              </div>
              <div class="small" :class="{ 'text-primary': props.step === index + 1 }">{{ stepLabel.desc }}</div>
            </div>
          </div>
        </div>
      </b-modal>

    </div>
  </b-container>
  <!-- </section> -->
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import TourReview from '@/views/tour/Booking/components/TourReview/index.vue'
import TravelerInformation from '@/views/tour/Booking/components/TravelerInformation/index.vue'
import PaymentOption from '@/views/tour/Booking/components/PaymentOption/index.vue'
import PriceSummary from '@/views/tour/Booking/components/PriceSummary.vue'
import BookingSignIn from '@/views/tour/Booking/components/BookingSignIn.vue'

import { string } from 'yup'
import StepProgress from './StepProgress.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const props = defineProps({
  step: {
    type: Number,
    required: true
  },
})

const showModal = ref(false)

const stepLabels = [
  { label: t('txtStep1'), desc: t('txtStep1Des') },
  { label: t('txtStep2'), desc: t('txtStep2Des') },
  { label: t('txtStep3'), desc: t('txtStep3Des') },
  { label: t('txtStep4'), desc: t('txtStep4Des') }
]
</script>

<style lang="css" scoped>
.step.active .bs-stepper-circle {
  background-color: #5143d9;
  color: white;
  border-color: #5143d9;
}
</style>

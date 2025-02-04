<template>
  <section>
    <b-container>
      <div ref="stepperRef" id="stepper" class="bs-stepper stepper-outline">
        <div class="bs-stepper-header" role="tablist">
          <div class="step" data-target="#step-1">
            <div class="text-center">
              <b-button
                variant="link"
                class="step-trigger mb-0"
                role="tab"
                id="steppertrigger1"
                aria-controls="step-1"
              >
                <span class="bs-stepper-circle">1</span>
              </b-button>
              <h6 class="bs-stepper-label d-none d-md-block">Tour Review</h6>
            </div>
          </div>
          <div class="line"></div>

          <div class="step" data-target="#step-2">
            <div class="text-center">
              <b-button
                variant="link"
                class="step-trigger mb-0"
                role="tab"
                id="steppertrigger2"
                aria-controls="step-2"
              >
                <span class="bs-stepper-circle">2</span>
              </b-button>
              <h6 class="bs-stepper-label d-none d-md-block">Traveler Info</h6>
            </div>
          </div>
          <div class="line"></div>

          <div class="step" data-target="#step-3">
            <div class="text-center">
              <b-button
                variant="link"
                class="step-trigger mb-0"
                role="tab"
                id="steppertrigger3"
                aria-controls="step-3"
              >
                <span class="bs-stepper-circle">3</span>
              </b-button>
              <h6 class="bs-stepper-label d-none d-md-block">Make Payment</h6>
            </div>
          </div>
        </div>

        <div class="bs-stepper-content p-0 pt-4">
          <b-row class="g-4">
            <b-col xl="8">
              <div>
                <TourReview :stepper-instance="stepperInstance" />
                <TravelerInformation :stepper-instance="stepperInstance" />
                <PaymentOption :stepper-instance="stepperInstance" />
              </div>
            </b-col>

            <aside class="col-xl-4">
              <div class="vstack gap-4">
                <PriceSummary />
                <BookingSignIn />
              </div>
            </aside>
          </b-row>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import TourReview from '@/views/tour/Booking/components/TourReview/index.vue'
import TravelerInformation from '@/views/tour/Booking/components/TravelerInformation/index.vue'
import PaymentOption from '@/views/tour/Booking/components/PaymentOption/index.vue'
import PriceSummary from '@/views/tour/Booking/components/PriceSummary.vue'
import BookingSignIn from '@/views/tour/Booking/components/BookingSignIn.vue'

import Stepper from 'bs-stepper'
import type { default as StepperType } from 'bs-stepper'

const stepperRef = ref<HTMLElement | null>(null)

let stepperInstance = ref<StepperType>()

onMounted(() => {
  if (stepperRef.value) {
    stepperInstance.value = new Stepper(stepperRef.value, {
      linear: false,
      animation: true
    })
  }
})
</script>

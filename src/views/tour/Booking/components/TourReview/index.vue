<template>
  <div id="step-1" role="tabpanel" class="content fade" aria-labelledby="steppertrigger1">
    <div class="vstack gap-4">
      <h4 class="mb-0">Tour Review</h4>

      <hr class="my-0" />

      <TourCard />

      <TourFlightDetail />

      <HotelDetail />

      <TransferDetail />

      <CancellationBooking />

      <div class="text-end">
        <b-button variant="primary" class="next-btn mb-0" @click="() => stepperInstance?.next()"
          >Next
        </b-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StepPropsType } from '@/views/tour/Booking/type'
import TourCard from '@/views/tour/Booking/components/TourReview/TourCard.vue'
import TourFlightDetail from '@/views/tour/Booking/components/TourReview/TourFlightDetail.vue'
import HotelDetail from '@/views/tour/Booking/components/TourReview/HotelDetail.vue'
import TransferDetail from '@/views/tour/Booking/components/TourReview/TransferDetail.vue'
import CancellationBooking from '@/views/tour/Booking/components/TourReview/CancellationBooking.vue'

defineProps<StepPropsType>()
</script>

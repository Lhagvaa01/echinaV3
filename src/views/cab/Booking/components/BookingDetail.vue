<template>
  <section class="pt-4 pt-md-5">
    <b-container>
      <b-row class="g-4">
        <b-col xl="9" class="mx-auto">
          <div class="vstack gap-4">
            <BookingSummary />

            <BookingPayment />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import BookingSummary from '@/views/cab/Booking/components/BookingSummary.vue'
import BookingPayment from '@/views/cab/Booking/components/BookingPayment.vue'
</script>

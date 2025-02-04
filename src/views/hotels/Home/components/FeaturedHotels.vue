<template>
  <section>
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h2 class="mb-0">Featured Hotels</h2>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col sm="6" xl="3" v-for="(hotel, idx) in featuredHotelsData" :key="idx">
          <HotelCard :hotel="hotel" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import HotelCard from '@/views/hotels/Home/components/HotelCard.vue'
import { featuredHotelsData } from '@/views/hotels/Home/data'
</script>

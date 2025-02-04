<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4">
        <b-col v-for="(hotel, idx) in hotels" :key="idx" md="6" xl="4">
          <HotelGridCard :hotel="hotel" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <Pagination />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import HotelGridCard from '@/views/hotels/Grid/components/HotelGridCard.vue'
import Pagination from '@/views/hotels/Grid/components/Pagination.vue'
import { hotels } from '@/views/hotels/Grid/data'
</script>

<template>
  <b-card no-body class="shadow">
    <b-card-body>
      <div class="bg-light rounded p-3 d-none d-xxl-block">
        <b-row class="row-cols-6 g-4">
          <b-col>
            <h6 class="mb-0">Room Name</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Bed Type</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Room Floor</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Amount</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Rating</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Action</h6>
          </b-col>
        </b-row>
      </div>

      <HotelListCard v-for="(hotel, idx) in hotelList" :key="idx" :hotel="hotel" />
    </b-card-body>

    <b-card-footer class="pt-0">
      <Pagination />
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import HotelListCard from '@/views/admin/bookings/List/components/HotelListCard.vue'
import Pagination from '@/views/admin/bookings/List/components/Pagination.vue'
import { hotelList } from '@/views/admin/bookings/List/data'
</script>

<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-4 mb-sm-5">
        <div class="d-sm-flex justify-content-between align-items-center">
          <h1 class="h3 mb-2 mb-sm-0">Dashboard</h1>
          <div class="d-grid">
            <router-link to="" class="btn btn-primary-soft mb-0 flex-centered gap-1">
              <BIconPlusLg class="fa-fw" />
              New Booking
            </router-link>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="g-4 mb-5">
      <b-col v-for="(item, idx) in statisticData" md="6" xxl="3" :key="idx">
        <StatisticCard :item="item" />
      </b-col>
    </b-row>

    <b-row class="g-4 mb-5">
      <b-col cols="12">
        <div class="d-flex justify-content-between">
          <h4 class="mb-0">Popular Hotels</h4>
          <router-link to="" class="btn btn-primary-soft mb-0"> View All </router-link>
        </div>
      </b-col>

      <b-col v-for="(hotel, idx) in popularHotels" lg="6" :key="idx">
        <HotelCard :hotel="hotel" />
      </b-col>
    </b-row>

    <b-row class="g-4">
      <b-col xxl="8">
        <GuestActivity />
      </b-col>

      <b-col lg="6" xxl="4">
        <RoomAvailability />
      </b-col>

      <b-col lg="6" xxl="4">
        <RoomNotifications />
      </b-col>

      <b-col lg="6" xxl="4">
        <UpcomingArrivals />
      </b-col>

      <b-col lg="6" xxl="4">
        <Reviews />
      </b-col>
    </b-row>
  </AdminLayout>
</template>
<script lang="ts" setup>
import { BIconPlusLg } from 'bootstrap-icons-vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import StatisticCard from '@/views/admin/Dashboard/components/StatisticCard.vue'
import HotelCard from '@/views/admin/Dashboard/components/HotelCard.vue'
import GuestActivity from '@/views/admin/Dashboard/components/GuestActivity.vue'
import RoomAvailability from '@/views/admin/Dashboard/components/RoomAvailability.vue'
import RoomNotifications from '@/views/admin/Dashboard/components/RoomNotifications.vue'
import UpcomingArrivals from '@/views/admin/Dashboard/components/UpcomingArrivals.vue'
import Reviews from '@/views/admin/Dashboard/components/Reviews.vue'

import { popularHotels, statisticData } from '@/views/admin/Dashboard/data'
</script>

<template>
  <b-tabs nav-class="nav nav-tabs nav-bottom-line nav-responsive nav-justified">
    <b-tab>
      <template #title>
        <BIconBriefcaseFill class="fa-fw mb-1" />
        Upcoming Booking
      </template>

      <b-card-body>
        <h6>Completed booking (2)</h6>
        <b-card no-body class="border mb-4" v-for="(item, idx) in upcomingBookingData" :key="idx">
          <BookingCard :booking="item" />
        </b-card>
      </b-card-body>
    </b-tab>

    <b-tab>
      <template #title>
        <BIconXOctagon class="fa-fw mb-1" />
        Canceled Booking
      </template>

      <b-card-body>
        <h6>Cancelled booking (1)</h6>
        <b-card no-body class="border">
          <b-card-header
            class="border-bottom d-md-flex justify-content-md-between align-items-center"
          >
            <div class="d-flex align-items-center">
              <div class="icon-lg bg-light rounded-circle flex-shrink-0">
                <font-awesome-icon :icon="faHotel" />
              </div>
              <div class="ms-2">
                <b-card-title tag="h6" class="mb-0">Courtyard by Marriott New York</b-card-title>
                <ul class="nav nav-divider small">
                  <li class="nav-item">Booking ID: CGDSUAHA12548</li>
                  <li class="nav-item">AC</li>
                </ul>
              </div>
            </div>

            <div class="mt-2 mt-md-0">
              <a href="#" class="btn btn-primary-soft mb-0">Manage Booking</a>
              <p class="text-danger text-md-end mb-0">Booking cancelled</p>
            </div>
          </b-card-header>

          <b-card-body>
            <b-row class="g-3">
              <b-col sm="6" md="4">
                <span>Check in time</span>
                <h6 class="mb-0">Tue 05 Aug 12:00 AM</h6>
              </b-col>

              <b-col sm="6" md="4">
                <span>Check out time</span>
                <h6 class="mb-0">Tue 12 Aug 4:00 PM</h6>
              </b-col>

              <b-col md="4">
                <span>Booked by</span>
                <h6 class="mb-0">Frances Guerrero</h6>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-card-body>
    </b-tab>

    <b-tab>
      <template #title>
        <BIconPatchCheck class="fa-fw mb-1" />
        Completed Booking
      </template>
      <b-card-body>
        <div class="bg-mode shadow p-4 rounded overflow-hidden">
          <b-row class="g-4 align-items-center">
            <b-col md="9">
              <h6>Looks like you have never booked with BOOKING</h6>
              <h4 class="mb-2">When you book your trip will be shown here.</h4>
              <router-link :to="{ name: 'hotels.list' }" class="btn btn-primary-soft mb-0"
                >Start booking now</router-link
              >
            </b-col>
            <b-col md="3" class="text-end">
              <img :src="element17" class="mb-n5" alt="" />
            </b-col>
          </b-row>
        </div>
      </b-card-body>
    </b-tab>
  </b-tabs>
</template>

<script lang="ts" setup>
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { BIconBriefcaseFill, BIconPatchCheck, BIconXOctagon } from 'bootstrap-icons-vue'
import element17 from '@/assets/images/element/17.svg'

import BookingCard from '@/views/user/Bookings/components/BookingCard.vue'
import { upcomingBookingData } from '@/views/user/Bookings/data'
</script>

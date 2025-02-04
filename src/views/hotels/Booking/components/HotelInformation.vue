<template>
  <b-col xl="8">
    <div class="vstack gap-5">
      <b-card no-body class="shadow">
        <b-card-header class="p-4 border-bottom">
          <h3 class="mb-0">
            <font-awesome-icon :icon="faHotel" />
            Hotel Information
          </h3>
        </b-card-header>

        <b-card-body class="p-4">
          <b-card no-body class="mb-4">
            <b-row class="align-items-center">
              <b-col sm="6" md="3">
                <img :src="hotel2" class="card-img" alt="" />
              </b-col>

              <b-col sm="6" md="9">
                <b-card-body class="pt-3 pt-sm-0 p-0">
                  <b-card-title tag="h5"
                    ><a href="#">Pride moon Village Resort & Spa</a></b-card-title
                  >
                  <p class="small mb-2">
                    <BIconGeoAlt class="me-1" />
                    5855 W Century Blvd, Los Angeles - 90045
                  </p>

                  <ul class="list-inline mb-0 gap-1">
                    <li class="list-inline-item me-0 small">
                      <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                    </li>
                    <li class="list-inline-item me-0 small">
                      <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                    </li>
                    <li class="list-inline-item me-0 small">
                      <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                    </li>
                    <li class="list-inline-item me-0 small">
                      <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                    </li>
                    <li class="list-inline-item me-0 small">
                      <font-awesome-icon :icon="faStarHalfAlt" class="text-warning me-1" />
                    </li>
                    <li class="list-inline-item ms-2 h6 small fw-bold mb-0">4.5/5.0</li>
                  </ul>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>

          <b-row class="g-4">
            <b-col lg="4">
              <div class="bg-light py-3 px-4 rounded-3">
                <h6 class="fw-light small mb-1">Check-in</h6>
                <h5 class="mb-1">4 March 2022</h5>
                <small>
                  <BIconAlarm class="mb-1" />
                  12:30 pm
                </small>
              </div>
            </b-col>

            <b-col lg="4">
              <div class="bg-light py-3 px-4 rounded-3">
                <h6 class="fw-light small mb-1">Check out</h6>
                <h5 class="mb-1">8 March 2022</h5>
                <small>
                  <BIconAlarm class="mb-1" />
                  4:30 pm
                </small>
              </div>
            </b-col>

            <b-col lg="4">
              <div class="bg-light py-3 px-4 rounded-3">
                <h6 class="fw-light small mb-1">Rooms & Guests</h6>
                <h5 class="mb-1">2 G - 1 R</h5>
                <small>
                  <BIconBrightnessHigh class="mb-1" />
                  3 Nights - 4 Days
                </small>
              </div>
            </b-col>
          </b-row>

          <b-card no-body class="border mt-4">
            <b-card-header class="border-bottom d-md-flex justify-content-md-between">
              <b-card-title tag="h5" class="mb-0">Deluxe Pool View with Breakfast</b-card-title>
              <a href="#" class="btn btn-link p-0 mb-0">View Cancellation Policy</a>
            </b-card-header>

            <b-card-body>
              <h6>Price Included</h6>
              <ul class="list-group list-group-borderless mb-0">
                <li class="list-group-item h6 fw-light d-flex mb-0">
                  <BIconPatchCheckFill class="text-success me-2" />
                  Free Breakfast and Lunch/Dinner.
                </li>
                <li class="list-group-item h6 fw-light d-flex mb-0">
                  <BIconPatchCheckFill class="text-success me-2" />
                  Great Small Breaks.
                </li>
                <li class="list-group-item h6 fw-light d-flex mb-0">
                  <BIconPatchCheckFill class="text-success me-2" />
                  Free Stay for Kids Below the age of 12 years.
                </li>
                <li class="list-group-item h6 fw-light d-flex mb-0">
                  <BIconPatchCheckFill class="text-success me-2" />
                  On Cancellation, You will not get any refund
                </li>
              </ul>
            </b-card-body>
          </b-card>
        </b-card-body>
      </b-card>

      <GuestDetails />

      <PaymentOptions />
    </div>
  </b-col>
</template>

<script setup lang="ts">
import { faHotel, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import {
  BIconAlarm,
  BIconBrightnessHigh,
  BIconPatchCheckFill,
  BIconGeoAlt
} from 'bootstrap-icons-vue'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import GuestDetails from './GuestDetails.vue'
import PaymentOptions from './PaymentOptions.vue'
</script>

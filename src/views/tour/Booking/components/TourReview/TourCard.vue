<template>
  <b-card no-body class="shadow rounded-2 overflow-hidden">
    <b-row class="g-0">
      <b-col sm="6" md="4">
        <img :src="tour3" class="" alt="" />
      </b-col>

      <b-col sm="6" md="8">
        <b-card-body class="p-3">
          <b-card-title tag="h5" class="mb-1"
            ><a href="#">Beautiful Bali with Malaysia</a></b-card-title
          >
          <ul class="list-inline mb-0 hstack gap-1">
            <li class="list-inline-item me-0 small">
              <font-awesome-icon :icon="faStar" class="text-warning" />
            </li>
            <li class="list-inline-item me-0 small">
              <font-awesome-icon :icon="faStar" class="text-warning" />
            </li>
            <li class="list-inline-item me-0 small">
              <font-awesome-icon :icon="faStar" class="text-warning" />
            </li>
            <li class="list-inline-item me-0 small">
              <font-awesome-icon :icon="faStar" class="text-warning" />
            </li>
            <li class="list-inline-item me-0 small">
              <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
            </li>
          </ul>

          <ul class="nav nav-divider small mb-0 mt-2">
            <li class="nav-item mb-1">
              <font-awesome-icon :icon="faCalendarAlt" class="me-1" />
              April 12-17
            </li>
            <li class="nav-item mb-1">
              <font-awesome-icon :icon="faBed" class="me-1" />
              1 Room
            </li>
            <li class="nav-item mb-1">
              <BIconPeopleFill class="me-1" />
              2 Guests
            </li>
            <li class="nav-item mb-1">
              <BIconGeoAltFill class="me-1" />
              From New York
            </li>
          </ul>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script setup lang="ts">
import { faBed, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { BIconGeoAltFill, BIconPeopleFill } from 'bootstrap-icons-vue'

import tour3 from '@/assets/images/category/tour/4by3/03.jpg'
</script>

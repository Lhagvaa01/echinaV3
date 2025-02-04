<template>
  <CustomStickyElement id="price-overview" data-sticky data-margin-top="100" data-sticky-for="1199">
    <b-card no-body class="card-body border">
      <div class="d-sm-flex justify-content-sm-between align-items-center mb-3">
        <div>
          <span>Price Start at</span>
          <b-card-title class="mb-0">{{ currency }}3,500</b-card-title>
        </div>
        <div>
          <h6 class="fw-normal mb-0">1 room per night</h6>
          <small>+ {{ currency }}285 taxes & fees</small>
        </div>
      </div>

      <ul class="list-inline mb-2">
        <li class="list-inline-item me-1 h6 fw-light mb-0 me-2">
          <BIconArrowRight class="me-1" />
          4.5
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
          <font-awesome-icon :icon="faStar" class="text-warning me-1" />
        </li>
        <li class="list-inline-item me-0 small">
          <font-awesome-icon :icon="faStarHalfAlt" class="text-warning me-1" />
        </li>
      </ul>

      <p class="h6 fw-light mb-4">
        <BIconArrowRight class="me-1" />
        Free breakfast available
      </p>

      <div class="d-grid">
        <a href="#room-options" class="btn btn-lg btn-primary-soft mb-0">View 10 Rooms Options</a>
      </div>
    </b-card>
    <div class="mt-4 d-none d-xl-block" style="padding-bottom: 100px">
      <h4>Today's Best Deal</h4>

      <b-card no-body class="shadow rounded-3 overflow-hidden">
        <b-row class="g-0 align-items-center">
          <b-col sm="6" md="12" lg="6">
            <img :src="offer4" class="card-img rounded-0" alt="" />
          </b-col>

          <b-col sm="6" md="12" lg="6">
            <b-card-body class="p-3">
              <b-card-title tag="h6">
                <router-link :to="{ name: 'offer-detail' }" class="stretched-link"
                  >Travel Plan
                </router-link>
              </b-card-title>
              <p class="mb-0">Get up to {{ currency }}10,000 for lifetime limits</p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </CustomStickyElement>
</template>

<script setup lang="ts">
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import offer4 from '@/assets/images/offer/04.jpg'
import CustomStickyElement from '@/components/CustomStickyElement.vue'
import { currency } from '@/helpers/constants'
</script>

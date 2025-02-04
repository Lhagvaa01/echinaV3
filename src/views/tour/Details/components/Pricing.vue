<template>
  <b-card no-body class="card-body border bg-transparent">
    <div class="hstack gap-2 mb-1">
      <b-card-title tag="h3" class="mb-0">{{ currency }}280</b-card-title>
      <span class="fs-5">/person</span>
    </div>

    <div class="d-flex justify-content-between mb-4">
      <ul class="list-inline mb-0 hstack gap-1">
        <li class="list-inline-item me-1 h6 mb-0">4.5</li>
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
      <a href="#" class="mb-0 m-0 text-reset text-primary-hover">(365 reviews)</a>
    </div>

    <div class="d-grid gap-2">
      <router-link :to="{ name: 'tour.booking' }" class="btn btn-primary">Book Now</router-link>
      <button
        class="btn btn-outline-primary mb-0"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#inquiryForm"
      >
        <BIconEye class="fa-fw me-1 mb-1" />
        Send Inquiry
      </button>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import { currency } from '@/helpers/constants'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { BIconEye } from 'bootstrap-icons-vue'
</script>

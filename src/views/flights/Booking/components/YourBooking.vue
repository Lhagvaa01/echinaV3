<template>
  <b-col md="6" xl="12">
    <b-card no-body class="border">
      <b-card-header class="border-bottom">
        <b-card-title tag="h5" class="mb-0">Your Booking</b-card-title>
      </b-card-header>

      <b-card-body>
        <small>
          <BIconTicket class="me-1" />
          Flight Ticket
        </small>
        <div class="d-flex mt-2">
          <img :src="element9" class="w-40px me-2" alt="" />
          <h6 class="fw-normal mb-0">
            Mumbai
            <BIconArrowRight />
            New York
          </h6>
        </div>
        <ul class="nav nav-divider small text-body mt-1 mb-0">
          <li class="nav-item">25 Jan</li>
          <li class="nav-item">1 Stop</li>
          <li class="nav-item">05h 25m</li>
        </ul>

        <hr />

        <small>
          <BIconPerson class="" />
          Traveler detail
        </small>
        <h6 class="mb-0 fw-normal mt-2">Carolyn Ortiz</h6>
        <ul class="nav nav-divider small text-body mt-1 mb-0">
          <li class="nav-item">Adult</li>
          <li class="nav-item">Female</li>
          <li class="nav-item">Dec-2-1990</li>
        </ul>
      </b-card-body>

      <b-card-footer class="border-top text-center p-3">
        <a href="#" class="btn btn-link mb-0 p-0">Review booking</a>
      </b-card-footer>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { BIconTicket, BIconPerson, BIconArrowRight } from 'bootstrap-icons-vue'
import element9 from '@/assets/images/element/09.svg'
</script>

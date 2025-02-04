<template>
  <b-card no-body class="bg-transparent">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <h3 class="mb-0">Hotel Policies</h3>
    </b-card-header>

    <b-card-body class="pt-4 p-0">
      <ul class="list-group list-group-borderless mb-2">
        <li class="list-group-item d-flex">
          <BIconCheckCircleFill class="me-2" />
          This is a family farmhouse, hence we request you to not indulge.
        </li>
        <li class="list-group-item d-flex">
          <BIconCheckCircleFill class="me-2" />
          Drinking and smoking within controlled limits are permitted at the farmhouse
          <br />
          but please do not create a mess or ruckus at the house.
        </li>
        <li class="list-group-item d-flex">
          <BIconCheckCircleFill class="me-2" />
          Drugs and intoxicating illegal products are banned and not to be brought
          <br />
          to the house or consumed.
        </li>
        <li class="list-group-item d-flex">
          <BIconXCircleFill class="me-2" />
          For any update, the customer shall pay applicable cancellation/modification charges.
        </li>
      </ul>

      <ul class="list-group list-group-borderless mb-2">
        <li class="list-group-item h6 fw-light d-flex mb-0">
          <BIconArrowRight class="me-2" />Check-in: 1:00 pm - 9:00 pm
        </li>
        <li class="list-group-item h6 fw-light d-flex mb-0">
          <BIconArrowRight class="me-2" />Check out: 11:00 am
        </li>
        <li class="list-group-item h6 fw-light d-flex mb-0">
          <BIconArrowRight class="me-2" />Self-check-in with building staff
        </li>
        <li class="list-group-item h6 fw-light d-flex mb-0">
          <BIconArrowRight class="me-2" />No pets
        </li>
        <li class="list-group-item h6 fw-light d-flex mb-0">
          <BIconArrowRight class="me-2" />No parties or events
        </li>
        <li class="list-group-item h6 fw-light d-flex mb-0">
          <BIconArrowRight class="me-2" />Smoking is allowed
        </li>
      </ul>

      <div class="bg-danger bg-opacity-10 rounded-2 p-3 mb-3">
        <p class="mb-0 text-danger">
          During the COVID-19 pandemic, all hosts and guests must review and follow Booking social
          distancing and other COVID-19-related guidelines.
        </p>
      </div>
      <div class="bg-danger bg-opacity-10 rounded-2 p-3">
        <p class="mb-0 text-danger">
          Smoke alarm not reported — The host hasn't reported a smoke alarm on the property. We
          suggest bringing a portable detector for your trip.
        </p>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { BIconCheckCircleFill, BIconXCircleFill, BIconArrowRight } from 'bootstrap-icons-vue'
</script>

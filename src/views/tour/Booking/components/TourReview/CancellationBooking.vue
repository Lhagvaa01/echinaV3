<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <h5 class="mb-0">Cancellation & Date change</h5>
    </b-card-header>

    <b-card-body>
      <ul class="list-group list-group-borderless">
        <li class="list-group-item">
          <span class="h6 fw-normal me-1"> <BIconDot class="mb-1" />10 days: </span>
          <span>100%</span>
        </li>
        <li class="list-group-item">
          <span class="h6 fw-normal me-1"> <BIconDot class="mb-1" />10 to 15 days: </span>
          <span>75% + Non Refundable Component</span>
        </li>
        <li class="list-group-item">
          <span class="h6 fw-normal me-1"> <BIconDot class="mb-1" />15 to 30 days: </span>
          <span>30% + Non Refundable Component</span>
        </li>
        <li class="list-group-item">
          <span class="h6 fw-normal me-1"> <BIconDot class="mb-1" />10Hotel / Air: </span>
          <span>100% in case of non-refundable ticket / Hotel Room</span>
        </li>
        <li class="list-group-item">
          <span class="h6 fw-normal me-1"> <BIconDot class="mb-1" />10Cruise / Visa: </span>
          <span>On Actual</span>
        </li>
      </ul>
      <p class="mt-2">
        All Prices are in Indian Rupees and are subject to change without prior notice.<br />In the
        case FIT flight inclusive package, the full amount of the flight will be payable at the time
        of booking.
      </p>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { BIconDot } from 'bootstrap-icons-vue'
</script>

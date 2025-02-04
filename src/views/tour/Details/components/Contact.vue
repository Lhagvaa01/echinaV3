<template>
  <b-card no-body class="card-body bg-light p-4">
    <b-card-title>Need Help?</b-card-title>

    <ul class="list-group list-group-borderless">
      <li class="list-group-item py-3">
        <a href="#" class="h6 mb-0">
          <BIconTelephoneForward class="fa-fw text-primary fs-5 me-2" />
          <span class="fw-light me-1">Call us on:</span>+31 123 456 789
        </a>
      </li>

      <li class="list-group-item py-0">
        <hr class="my-0" />
      </li>

      <li class="list-group-item py-3">
        <h6 class="mb-0">
          <BIconAlarm class="fa-fw text-primary fs-5 me-2" />
          <span class="h6 fw-light me-1 mb-0">Timing:</span>10AM to 7PM
        </h6>
      </li>

      <li class="list-group-item py-0">
        <hr class="my-0" />
      </li>

      <li class="list-group-item py-3">
        <a href="#" class="h6 mb-0">
          <BIconHeadset class="fa-fw text-primary fs-5 me-2" />
          Let Us Call You
        </a>
      </li>

      <li class="list-group-item py-0">
        <hr class="my-0" />
      </li>

      <li class="list-group-item pt-3 pb-0">
        <router-link :to="{ name: 'pages.contact' }" class="h6 mb-0">
          <BIconCalendarCheck class="fa-fw text-primary fs-5 me-2" />
          Book Appointments
        </router-link>
      </li>
    </ul>
  </b-card>
</template>

<script setup lang="ts">
import {
  BIconAlarm,
  BIconCalendarCheck,
  BIconHeadset,
  BIconTelephoneForward
} from 'bootstrap-icons-vue'
</script>

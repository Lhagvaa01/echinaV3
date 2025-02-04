<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom p-4">
      <h1 class="mb-0 fs-3">Booking summary</h1>
    </b-card-header>
    <b-card-body class="p-4">
      <b-row class="g-md-4">
        <b-col md="3">
          <div class="bg-light rounded-3 px-4 py-5 mb-3 mb-md-0">
            <img :src="sedan" alt="car-Img" />
          </div>
        </b-col>
        <b-col md="9">
          <b-card-title tag="h5" class="mb-2"> Camry, Accord </b-card-title>
          <ul class="nav nav-divider h6 fw-normal mb-2">
            <li class="nav-item">SEDAN</li>
            <li class="nav-item">AC</li>
            <li class="nav-item">2 Seats</li>
          </ul>
          <b-row>
            <b-col md="6">
              <small>Pickup address</small>
              <p class="h6 fw-light mb-md-0">8 Central Ave, Chelsea, Maine, United States</p>
            </b-col>
            <b-col md="6">
              <small>Drop address</small>
              <p class="h6 fw-light mb-0">1846 S Oates St, Dothan, Alaska, United States</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6">
          <ul class="list-group list-group-borderless">
            <li class="list-group-item">
              Journey Date:<span class="h6 fw-normal mb-0 ms-1">25 Nov 2022</span>
            </li>
            <li class="list-group-item">
              Distance:<span class="h6 fw-normal mb-0 ms-1">230 km</span>
            </li>
          </ul>
        </b-col>
        <b-col md="6">
          <ul class="list-group list-group-borderless">
            <li class="list-group-item">
              Passengers:<span class="h6 fw-normal mb-0 ms-1">1</span>
            </li>
            <li class="list-group-item">Luggages:<span class="h6 fw-normal mb-0 ms-1">2</span></li>
          </ul>
        </b-col>
      </b-row>
      <h6 class="mb-0 mt-3">Passenger Detail</h6>
      <b-row>
        <b-col sm="8">
          <ul class="list-group list-group-borderless mb-0">
            <li class="list-group-item">
              Passenger Name:<span class="h6 mb-0 fw-normal ms-1">Billy Vasquez</span>
            </li>
            <li class="list-group-item">
              Passenger Email:<span class="h6 mb-0 fw-normal ms-1">example@gmail.com</span>
            </li>
            <li class="list-group-item">
              Passenger Number:<span class="h6 mb-0 fw-normal ms-1">+222 555 666 85</span>
            </li>
          </ul>
        </b-col>
        <b-col sm="4" class="text-sm-end mt-3 mt-sm-auto">
          <h6 class="mb-1 fw-normal">Total Amount</h6>
          <h2 class="mb-0 text-success">{{ currency }}458</h2>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import sedan from '@/assets/images/category/cab/sedan.svg'
import { currency } from '@/helpers/constants'
</script>

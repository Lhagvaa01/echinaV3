<template>
  <section class="pt-0 pt-xl-5">
    <b-container>
      <b-row class="mb-3 mb-sm-4">
        <b-col cols="12" class="text-center">
          <h2>Why Choose Us</h2>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col sm="6" lg="4">
          <b-card no-body class="shadow p-4 h-100">
            <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle mb-4">
              <BIconLightningFill class="fs-5" />
            </div>
            <h5>Advance Booking</h5>
            <p class="mb-0">
              Happiness prosperous impression had conviction For every delay in they Extremity now.
            </p>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4">
          <b-card no-body class="shadow p-4 h-100">
            <div class="icon-lg bg-success bg-opacity-10 text-success rounded-circle mb-4">
              <font-awesome-icon :icon="faLeaf" class="fa-solid fa-leaf fs-5" />
            </div>
            <h5>Economical Trip</h5>
            <p class="mb-0">
              Extremity now strangers contained breakfast him discourse additions Sincerity.
            </p>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4">
          <b-card no-body class="shadow p-4 h-100">
            <div class="icon-lg bg-warning bg-opacity-15 text-warning rounded-circle mb-4">
              <BIconLifePreserver class="fs-5" />
            </div>
            <h5>Secure and Safer</h5>
            <p class="mb-0">
              Perpetual extremity now strangers contained breakfast him discourse additions.
            </p>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4">
          <b-card no-body class="shadow p-4 h-100">
            <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle mb-4">
              <font-awesome-icon :icon="faCar" class="fs-5" />
            </div>
            <h5>Vehicle Options</h5>
            <p class="mb-0">
              The Prosperous impression had conviction For every delay in they Extremity now.
            </p>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4">
          <b-card no-body class="shadow p-4 h-100">
            <div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle mb-4">
              <font-awesome-icon :icon="faWifi" class="fs-5" />
            </div>
            <h5>Cab Entertainment</h5>
            <p class="mb-0">
              Extremity now strangers contained breakfast him discourse additions Sincerity.
            </p>
          </b-card>
        </b-col>

        <b-col sm="6" lg="4">
          <b-card no-body class="shadow p-4 h-100">
            <div class="icon-lg bg-info bg-opacity-10 text-info rounded-circle mb-4">
              <font-awesome-icon :icon="faWheelchair" class="fs-5" />
            </div>
            <h5>Polite Driver</h5>
            <p class="mb-0">
              Perpetual extremity now strangers contained breakfast him discourse additions.
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { faCar, faLeaf, faWheelchair, faWifi } from '@fortawesome/free-solid-svg-icons'
import { BIconLifePreserver, BIconLightningFill } from 'bootstrap-icons-vue'
</script>

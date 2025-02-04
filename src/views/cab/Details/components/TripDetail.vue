<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom bg-transparent">
      <h4 class="mb-0">Trip Details</h4>
    </b-card-header>
    <b-card-body>
      <b-form class="row g-4">
        <b-col md="6">
          <div class="form-control-bg-light">
            <b-form-group label="Pickup Address">
              <b-form-input
                type="text"
                size="lg"
                placeholder="Enter exact pick up address"
                v-model="pickUpAddress"
              />
              <b-form-text>This will help our cab driver reach you on time.</b-form-text>
            </b-form-group>
          </div>
        </b-col>

        <b-col md="6">
          <div class="form-control-bg-light">
            <b-form-group label="Drop Address">
              <b-form-input
                type="text"
                size="lg"
                placeholder="Enter exact drop address"
                v-model="dropAddress"
              />
            </b-form-group>
          </div>
        </b-col>

        <h5 class="mb-0 mt-4">Traveler Information</h5>

        <b-col md="4">
          <label class="form-label">Gender</label>
          <div>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                :checked="true"
              />
              <label class="btn btn-lg btn-light btn-dark-bg-check mb-0" for="btnradio1"
                >Male</label
              >
              <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
              <label class="btn btn-lg btn-light btn-dark-bg-check mb-0" for="btnradio2"
                >Female</label
              >
            </div>
          </div>
        </b-col>

        <b-col md="8">
          <div class="form-control-bg-light">
            <b-form-group label="Name">
              <b-form-input type="text" size="lg" placeholder="Enter your name" />
            </b-form-group>
          </div>
        </b-col>

        <b-col md="6">
          <div class="form-control-bg-light">
            <b-form-group label="Email id">
              <b-form-input type="email" size="lg" placeholder="Enter your email" />
            </b-form-group>
          </div>
        </b-col>

        <b-col md="6">
          <div class="form-control-bg-light">
            <b-form-group label="Mobile number">
              <b-form-input type="number" size="lg" placeholder="Enter your mobile number" />
            </b-form-group>
          </div>
        </b-col>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const pickUpAddress = ref('36 new resort, New York')
const dropAddress = ref('street profit, New York')
</script>

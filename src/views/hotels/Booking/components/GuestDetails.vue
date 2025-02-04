<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom p-4">
      <b-card-title class="mb-0">
        <BIconPeopleFill class="mb-1" />
        Guest Details
      </b-card-title>
    </b-card-header>

    <b-card-body class="p-4">
      <b-form class="row g-4">
        <b-col cols="12">
          <div class="bg-light rounded-2 px-4 py-3">
            <h6 class="mb-0">Main Guest</h6>
          </div>
        </b-col>

        <b-col md="2">
          <div class="form-size-lg">
            <SelectFormInput
              id="rating"
              label="Title"
              v-model="selectedOption"
              :options="Options"
              :choice-options="{ searchEnabled: true }"
            />
          </div>
        </b-col>

        <b-col md="5">
          <b-form-group label="First Name" label-for="first-name">
            <b-form-input id="first-name" type="text" size="lg" placeholder="Enter your name" />
          </b-form-group>
        </b-col>

        <b-col md="5">
          <b-form-group label="Last Name" label-for="last-name">
            <b-form-input id="last-name" type="text" size="lg" placeholder="Enter your name" />
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <a href="#" class="btn btn-link mb-0 p-0">
            <font-awesome-icon :icon="faPlus" class="me-1" />
            Add New Guest</a
          >
        </b-col>

        <b-col md="6">
          <b-form-group label="Email id" label-for="email">
            <b-form-input id="email" type="text" size="lg" placeholder="Enter your email" />
            <b-form-text>(Booking voucher will be sent to this email ID)</b-form-text>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="Mobile number" label-for="mobile">
            <b-form-input id="mobile" type="tel" size="lg" placeholder="Enter your mobile number" />
          </b-form-group>
        </b-col>
      </b-form>

      <div class="alert alert-info my-4" role="alert">
        <router-link :to="{ name: 'auth.sign-in' }" class="alert-heading h6">Login</router-link>
        to prefill all details and get access to secret deals
      </div>

      <b-card no-body class="border mt-4">
        <b-card-header class="border-bottom">
          <b-card-title tag="h5" class="mb-0">Special request</b-card-title>
        </b-card-header>

        <b-card-body>
          <b-form class="hstack flex-wrap gap-3">
            <b-form-checkbox id="hotelType1">Smoking room</b-form-checkbox>

            <b-form-checkbox id="hotelType2">Late check-in</b-form-checkbox>

            <b-form-checkbox id="hotelType3">Early check-in</b-form-checkbox>

            <b-form-checkbox id="hotelType4">Room on a high floor</b-form-checkbox>

            <b-form-checkbox id="hotelType5">Large bed</b-form-checkbox>

            <b-form-checkbox id="hotelType6">Airport transfer</b-form-checkbox>

            <b-form-checkbox id="hotelType7">Twin beds</b-form-checkbox>
          </b-form>
        </b-card-body>
      </b-card>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { BIconPeopleFill } from 'bootstrap-icons-vue'
import { ref } from 'vue'
import SelectFormInput from '@/components/SelectFormInput.vue'

const selectedOption = ref('title')

const Options = [
  { value: 'title', text: 'Title' },
  { value: 'Mr', text: 'Mr' },
  { value: 'popular', text: 'Mrs' }
]
</script>

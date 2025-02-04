<template>
  <b-card no-body>
    <b-card-header class="border-bottom">
      <h6 class="mb-0">Search your Destination</h6>
    </b-card-header>

    <b-card-body>
      <b-row class="g-3">
        <b-col cols="12">
          <SelectFormInput
            id="destination"
            label="Hotel or Destination"
            v-model="selectedDestination"
            :options="destinationOptions"
            :choice-options="{ searchEnabled: true }"
          />
        </b-col>

        <b-col md="6">
          <CustomFlatpicker
            id="check-in-date"
            label="Check in"
            placeholder="Select date"
            v-model="checkIn"
            :options="{ dateFormat: 'd M Y' }"
          />
        </b-col>

        <b-col md="6">
          <CustomFlatpicker
            id="check-out-date"
            label="Check out"
            placeholder="Select date"
            v-model="checkOut"
            :options="{ dateFormat: 'd M Y' }"
          />
        </b-col>

        <b-col cols="12">
          <GuestAndRoomForm v-model="formValue" label="Guests & rooms" :input-width="310" />
        </b-col>

        <b-col cols="12" class="text-center">
          <a href="#" class="text-primary-hover text-decoration-underline">Have a promo code?</a>
          <button class="btn btn-primary-soft w-100 mt-3 mb-0">Check Availability</button>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'

import GuestAndRoomForm from '@/components/GuestAndRoomForm.vue'
import type { GuestAndRoomFormType } from '@/types'

const formValue = ref<GuestAndRoomFormType>({
  guests: {
    adults: 2,
    rooms: 1,
    children: 0
  }
})

const selectedDestination = ref('select')

const destinationOptions = [
  { value: 'select', text: 'Select location' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]

const checkIn = ref()
const checkOut = ref()
</script>

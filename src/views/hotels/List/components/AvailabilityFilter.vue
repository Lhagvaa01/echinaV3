<template>
  <form class="bg-mode shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4 mb-4">
    <b-row class="g-4 align-items-center">
      <b-col lg="4">
        <div class="form-control-border form-control-transparent form-fs-md d-flex">
          <BIconGeoAlt class="fs-3 me-2 mt-3" />

          <div class="flex-grow-1">
            <label class="form-label">Location</label>
            <SelectFormInput
              id="location"
              v-model="selectedLocation"
              :options="locationOptions"
              :choice-options="{ searchEnabled: true }"
            />
          </div>
        </div>
      </b-col>
      <b-col lg="4">
        <div class="d-flex">
          <BIconCalendar class="me-2" height="43" width="43" style="margin-top: 12" />
          <div class="form-control-border form-control-transparent form-fs-md">
            <CustomFlatpicker
              id="date-input"
              label="Check in - out"
              placeholder="Select date"
              class="flatpickr"
              :options="{ mode: 'range', dateFormat: 'd M', defaultDate: checkInOut }"
            />
          </div>
        </div>
      </b-col>

      <b-col lg="4">
        <div class="form-control-border form-control-transparent form-fs-md d-flex">
          <BIconPerson class="me-2" height="43" width="43" style="margin-top: 12" />

          <div class="w-100">
            <GuestAndRoomForm v-model="formValue" label="Guests & rooms" />
          </div>
        </div>
      </b-col>
    </b-row>

    <div class="btn-position-md-middle">
      <a class="icon-lg btn btn-round btn-primary mb-0" href="#">
        <BIconSearch class="fa-fw" />
      </a>
    </div>
  </form>
</template>

<script setup lang="ts">
import { BIconCalendar, BIconGeoAlt, BIconPerson, BIconSearch } from 'bootstrap-icons-vue'

import { ref } from 'vue'

import SelectFormInput from '@/components/SelectFormInput.vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import GuestAndRoomForm from '@/components/GuestAndRoomForm.vue'

import type { GuestAndRoomFormType } from '@/types'

const selectedLocation = ref('select-location')

const checkInOut = ref([new Date(), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)])

const locationOptions = [
  { value: 'select-location', text: 'Select location' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]

const formValue = ref<GuestAndRoomFormType>({
  guests: {
    adults: 2,
    rooms: 1,
    children: 0
  }
})
</script>

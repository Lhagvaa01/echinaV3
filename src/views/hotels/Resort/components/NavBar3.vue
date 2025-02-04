<template>
  <header class="header-transparent">
    <nav class="navbar navbar-dark navbar-expand-xl">
      <b-container fluid class="px-md-5">
        <LogoBox only-light />

        <!-- Responsive navbar toggler -->
        <button
          class="navbar-toggler ms-auto me-3 p-0"
          type="button"
          v-b-toggle="'navbar-collapse'"
        >
          <span class="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <MobileMenu v-if="isMobileMenu" />
        <AppMenu v-else menu-class="mx-auto" />

        <!-- Book button -->
        <div class="nav flex-row ms-xl-auto">
          <b-button
            size="sm"
            variant="primary"
            class="mb-0"
            @click="showOffcanvas = !showOffcanvas"
          >
            <BIconCalendarWeek class="me-1 mb-1" />
            Book a Stay
          </b-button>
        </div>
      </b-container>
    </nav>
  </header>

  <!-- Offcanvas menu -->
  <b-offcanvas
    placement="end"
    v-model="showOffcanvas"
    class="offcanvas-w-500px"
    title="Book a Room"
    header-class="border-bottom px-3"
    body-class="form-control-bg-light d-flex flex-column px-3"
  >
    <b-form>
      <div class="mb-3">
        <SelectFormInput
          id="rooms"
          label="Room & Suite Type"
          v-model="selectedRoom"
          :options="roomOptions"
          :choice-options="{ searchEnabled: true }"
        />
      </div>

      <div class="mb-3">
        <CustomFlatpicker
          id="check-in-date"
          label="Check in"
          placeholder="Select date"
          v-model="checkIn"
          :options="{ dateFormat: 'd M Y' }"
        />
      </div>

      <div class="mb-3">
        <CustomFlatpicker
          id="check-out-date"
          label="Check out"
          placeholder="Select date"
          v-model="checkOut"
          :options="{ dateFormat: 'd M Y' }"
        />
      </div>

      <div class="mb-3">
        <GuestAndRoomForm v-model="formValue" label="Guests & rooms" />
      </div>

      <div class="text-center">
        <button class="btn btn-primary-soft w-100 mb-0">Check Availability</button>
      </div>
    </b-form>

    <div class="bg-light p-3 rounded mt-auto">
      <h6>Why Book Direct?</h6>
      <ul class="small ps-3">
        <li class="mb-2">10% discount is applied</li>
        <li class="mb-2">15% off on spa treatment</li>
        <li class="mb-2">Best price guaranteed</li>
        <li class="mb-2">Daily complimentary sunrise yoga</li>
        <li class="mb-2">Early check-in and late check-out</li>
      </ul>
    </div>
  </b-offcanvas>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { BIconCalendarWeek } from 'bootstrap-icons-vue'

import AppMenu from '@/components/navbar/AppMenu.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import MobileMenu from '@/components/navbar/mobile-menu/MobileMenu.vue'
import GuestAndRoomForm from '@/components/GuestAndRoomForm.vue'

import type { GuestAndRoomFormType } from '@/types'
import LogoBox from '@/components/LogoBox.vue'

const isMobileMenu = computed(() => {
  return window.innerWidth <= 1200
})

const showOffcanvas = ref(false)

const selectedRoom = ref('select-location')

const roomOptions = [
  { value: 'select-location', text: 'Select location' },
  { value: 'agave-suite', text: 'Agave Suite' },
  { value: 'olive-grove-suite', text: 'Olive Grove Suite' },
  { value: 'palm-suite', text: 'Palm Suite' },
  { value: 'casa-green-suite', text: 'Casa Green Suite' }
]

const checkIn = ref()
const checkOut = ref()

const formValue = ref<GuestAndRoomFormType>({
  guests: {
    adults: 2,
    rooms: 1,
    children: 0
  }
})
</script>

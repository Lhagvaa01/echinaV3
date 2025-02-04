<template>
  <section class="py-3 py-sm-0">
    <b-container>
      <b-button
        variant="primary"
        class="d-sm-none w-100 mb-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasEditsearch"
        aria-controls="offcanvasEditsearch"
      >
        <BIconPencilSquare class="me-2" />
        Edit Search
      </b-button>

      <div
        class="offcanvas-sm offcanvas-top"
        tabindex="-1"
        id="offcanvasEditsearch"
        aria-labelledby="offcanvasEditsearchLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasEditsearchLabel">Edit search</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasEditsearch"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body p-2">
          <div class="bg-light p-4 rounded w-100">
            <b-form class="row g-4">
              <b-col md="6" lg="4">
                <div class="form-size-lg form-fs-md">
                  <SelectFormInput
                    id="location"
                    label="Location"
                    v-model="selectedLocation"
                    :options="locationOptions"
                    :choice-options="{ searchEnabled: true }"
                  />
                </div>
              </b-col>

              <b-col md="6" lg="3">
                <div class="form-fs-md">
                  <CustomFlatpicker
                    id="date-Check-in-out"
                    label="Check in - out"
                    placeholder="Select date"
                    customClass="form-control-lg"
                    :options="{ mode: 'range', minDate: 'today', defaultDate: checkInOut }"
                  />
                </div>
              </b-col>

              <b-col md="6" lg="3">
                <div class="form-fs-md">
                  <div class="w-100">
                    <GuestAndRoomForm
                      v-model="formValue"
                      label="Guests & rooms"
                      input-class="form-control-lg"
                    />
                  </div>
                </div>
              </b-col>

              <b-col md="6" lg="2" class="mt-md-auto">
                <a class="btn btn-lg btn-primary w-100 mb-0" href="#">
                  <BIconSearch class="fa-fw mb-1" />
                  Search
                </a>
              </b-col>
            </b-form>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { BIconPencilSquare, BIconSearch } from 'bootstrap-icons-vue'
import { ref } from 'vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import GuestAndRoomForm from '@/components/GuestAndRoomForm.vue'
import type { GuestAndRoomFormType } from '@/types'

const selectedLocation = ref('select-location')

const locationOptions = [
  { value: 'select-location', text: 'Select location' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]

const checkInOut = ref([new Date(), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)])

const formValue = ref<GuestAndRoomFormType>({
  guests: {
    adults: 2,
    rooms: 1,
    children: 0
  }
})
</script>

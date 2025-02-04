<template>
  <section class="bg-primary">
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="form-control-bg-light bg-mode border p-4 rounded-3">
            <b-row class="g-4">
              <b-col lg="6">
                <div class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <div
                    class="form-check form-check-inline active"
                    id="cab-one-way-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#cab-one-way"
                    role="tab"
                    aria-controls="cab-one-way"
                    aria-selected="true"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadiocab1"
                      value="option1"
                      :checked="show"
                      @click="show = true"
                    />
                    <label class="form-check-label" for="inlineRadiocab1">One Way</label>
                  </div>
                  <div
                    class="form-check form-check-inline"
                    id="cab-round-way-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#cab-round-way"
                    role="tab"
                    aria-controls="cab-round-way"
                    aria-selected="false"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadiocab2"
                      value="option2"
                      :checked="!show"
                      @click="show = false"
                    />
                    <label class="form-check-label" for="inlineRadiocab2">Round Trip</label>
                  </div>
                </div>
              </b-col>
            </b-row>

            <div class="tab-content mt-0" id="pills-tabContent">
              <div
                class="tab-pane fade"
                :class="show && 'show active'"
                id="cab-one-way"
                role="tabpanel"
                aria-labelledby="cab-one-way-tab"
              >
                <form class="row g-4 align-items-center">
                  <b-col xl="10">
                    <b-row class="g-4">
                      <b-col md="6" xl="4">
                        <div class="form-size-lg">
                          <SelectFormInput
                            id="location"
                            label="Pickup"
                            v-model="selectedDestination"
                            :options="destinationOptions"
                            :choice-options="{ searchEnabled: true }"
                          />
                        </div>
                      </b-col>

                      <b-col md="6" xl="4">
                        <div class="form-size-lg">
                          <SelectFormInput
                            id="location2"
                            label="Drop"
                            v-model="selectedDestination2"
                            :options="destinationOptions"
                            :choice-options="{ searchEnabled: true }"
                          />
                        </div>
                      </b-col>

                      <b-col md="6" xl="2">
                        <CustomFlatpicker
                          id="pickupdate"
                          label="Pickup Date"
                          placeholder="Select date"
                          class="form-control-lg"
                          v-model="pickupdate"
                          :options="{ dateFormat: 'd M', defaultDate: 'today' }"
                        />
                      </b-col>

                      <b-col md="6" xl="2">
                        <CustomFlatpicker
                          id="pickuptime"
                          label="Pickup time"
                          placeholder="Select time"
                          class="form-control-lg"
                          v-model="pickuptime"
                          :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                        />
                      </b-col>
                    </b-row>
                  </b-col>

                  <b-col xl="2" class="d-grid mt-xl-auto">
                    <b-button variant="primary" size="lg" class="mb-0" href="#">Update</b-button>
                  </b-col>
                </form>
              </div>

              <div
                class="tab-pane fade"
                :class="!show && 'show active'"
                id="cab-round-way"
                role="tabpanel"
                aria-labelledby="cab-round-way-tab"
              >
                <form class="row g-4 align-items-center">
                  <b-col xl="12">
                    <b-row class="g-4">
                      <b-col md="6" xl="6">
                        <div class="form-size-lg">
                          <SelectFormInput
                            id="location3"
                            label="Pickup"
                            v-model="selectedDestination3"
                            :options="destinationOptions2"
                            :choice-options="{ searchEnabled: true }"
                          />
                        </div>
                      </b-col>

                      <b-col md="6" xl="6">
                        <div class="form-size-lg">
                          <SelectFormInput
                            id="location4"
                            label="Drop"
                            v-model="selectedDestination4"
                            :options="destinationOptions2"
                            :choice-options="{ searchEnabled: true }"
                          />
                        </div>
                      </b-col>

                      <b-col md="6" xl="3">
                        <CustomFlatpicker
                          id="pickupdate1"
                          label="Pickup Date"
                          placeholder="Select date"
                          class="form-control-lg"
                          v-model="pickupdate"
                          :options="{ dateFormat: 'd M' }"
                        />
                      </b-col>

                      <b-col md="6" xl="3">
                        <CustomFlatpicker
                          id="pickuptime1"
                          label="Pickup time"
                          placeholder="Select time"
                          class="form-control-lg"
                          v-model="pickuptime"
                          :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                        />
                      </b-col>

                      <b-col md="6" xl="3">
                        <CustomFlatpicker
                          id="returndate"
                          label="Return Date"
                          placeholder="Select date"
                          class="form-control-lg"
                          v-model="returndate"
                          :options="{ dateFormat: 'd M' }"
                        />
                      </b-col>

                      <b-col md="6" xl="3">
                        <CustomFlatpicker
                          id="returntime"
                          label="Return time"
                          placeholder="Select time"
                          class="form-control-lg"
                          v-model="returntime"
                          :options="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                        />
                      </b-col>
                    </b-row>
                  </b-col>

                  <b-col xl="2">
                    <b-button variant="primary" size="lg" class="w-100 mb-0" href="#"
                      >Update</b-button
                    >
                  </b-col>
                </form>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'

const selectedDestination = ref('select-location')
const selectedDestination2 = ref('select-location')
const selectedDestination3 = ref('select-location')
const selectedDestination4 = ref('select-location')

const destinationOptions = [
  { value: 'select-location', text: 'Select location' },
  { value: 'san-jacinto', text: 'San Jacinto, USA' },
  { value: 'north-dakota', text: 'North Dakota, Canada' },
  { value: 'west-virginia', text: 'West Virginia, Paris' }
]
const destinationOptions2 = [
  { value: 'select-location', text: 'Select location' },
  { value: 'New york', text: 'New york' },
  { value: 'Canada', text: 'Canada' },
  { value: 'Paris', text: 'Paris' }
]

const pickupdate = ref()
const pickuptime = ref()
const returndate = ref()
const returntime = ref()
const show = ref(true)
</script>

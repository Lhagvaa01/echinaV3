<template>
  <div id="step-2" role="tabpanel" class="content fade" aria-labelledby="steppertrigger2">
    <div class="vstack gap-4">
      <h4 class="mb-0">Traveler Detail</h4>

      <hr class="my-0" />

      <div class="alert alert-warning d-flex" role="alert">
        <span class="alert-heading h5 mb-0 me-2">
          <BIconExclamationOctagonFill />
        </span>
        A customer passport is mandatory. The passport must have 2 blank pages and 6-month validity.
      </div>

      <b-card no-body class="border">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Traveler 1</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-4">
            <b-col md="2">
              <div class="form-control-bg-light">
                <SelectFormInput
                  id="title"
                  label="Title"
                  v-model="selectedTitle"
                  :options="titleOptions"
                  :choice-options="{ searchEnabled: false }"
                />
              </div>
            </b-col>

            <b-col md="5">
              <div class="form-control-bg-light">
                <b-form-group label="First name">
                  <b-form-input type="text" />
                </b-form-group>
              </div>
            </b-col>

            <b-col md="5">
              <div class="form-control-bg-light">
                <b-form-group label="Last name">
                  <b-form-input type="text" />
                </b-form-group>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-control-bg-light">
                <CustomFlatpicker
                  id="birthday"
                  label="Date of birth"
                  placeholder="Enter your date of birth"
                  :options="{ dateFormat: 'd M Y', default: 'today' }"
                />
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-control-bg-light">
                <b-form-group label="Passport number">
                  <b-form-input type="text" />
                </b-form-group>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <b-card no-body class="border">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Traveler 2</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-4">
            <b-col md="2">
              <div class="form-control-bg-light">
                <SelectFormInput
                  id="title2"
                  label="Title"
                  v-model="selectedTitle2"
                  :options="titleOptions"
                  :choice-options="{ searchEnabled: false }"
                />
              </div>
            </b-col>

            <b-col md="5">
              <div class="form-control-bg-light">
                <b-form-group label="First name">
                  <b-form-input type="text" />
                </b-form-group>
              </div>
            </b-col>

            <b-col md="5">
              <div class="form-control-bg-light">
                <b-form-group label="Last name">
                  <b-form-input type="text" />
                </b-form-group>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-control-bg-light">
                <label class="form-label">Date of birth</label>
                <CustomFlatpicker
                  id="birthday"
                  label="Date of birth"
                  placeholder="Enter your date of birth"
                  :options="{ dateFormat: 'd M Y', default: 'today' }"
                />
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-control-bg-light">
                <b-form-group label="Passport number">
                  <b-form-input type="text" />
                </b-form-group>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <b-card no-body class="border">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Your booking detail will be sent here</h5>
        </b-card-header>

        <b-card-body>
          <b-row class="g-4">
            <b-col md="6">
              <div class="form-control-bg-light">
                <b-form-group label="Mobile number">
                  <b-form-input type="number" />
                </b-form-group>
              </div>
            </b-col>

            <b-col md="6">
              <div class="form-control-bg-light">
                <b-form-group label="Email id">
                  <b-form-input type="email" />
                </b-form-group>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <div class="hstack gap-2 flex-wrap justify-content-between">
        <b-button variant="secondary" class="prev-btn mb-0" @click="stepperInstance?.previous()"
          >Previous</b-button
        >
        <b-button variant="primary" class="next-btn mb-0">Continue to payment</b-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StepPropsType } from '@/views/tour/Booking/type'

import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'

import { BIconExclamationOctagonFill } from 'bootstrap-icons-vue'
import { ref } from 'vue'

defineProps<StepPropsType>()

const selectedTitle = ref('mr')
const selectedTitle2 = ref('mr')

const titleOptions = [
  { value: 'mr', text: 'Mr' },
  { value: 'mrs', text: 'Mrs' }
]
</script>

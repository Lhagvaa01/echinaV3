<template>
  <b-card no-body class="bg-transparent">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <h4 class="mb-0">Driver and Cab details</h4>
    </b-card-header>
    <b-card-body class="pt-4 p-0">
      <ul>
        <li class="mb-2">
          Cab and driver details will be shared on your registered phone. (22 Jan 2021 at 6:55 pm)
        </li>
        <li class="mb-2">
          Due to traffic or any other unavoidable reason, the pickup may be delayed for 30 minutes.
        </li>
        <li>
          For nighttime driving (between 11:00 pm to 7:00 am) on any of the nights, there will be a
          night driver charge of {{ currency }}100.
        </li>
      </ul>
      <h5>Cab Images</h5>
      <b-alert :model-value="true" variant="warning">
        All pictures shown are for illustration purposes only. The actual product may vary due to
        product enhancement.
      </b-alert>
      <b-row>
        <CabSlider />
      </b-row>
    </b-card-body>
  </b-card>

  <b-card no-body class="bg-transparent">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <h4 class="mb-0">Inclusion &amp; Exclusion</h4>
    </b-card-header>
    <b-card-body class="pt-4 p-0">
      <b-row class="g-3">
        <b-col sm="6">
          <h5>Included in your price</h5>
          <ul class="list-group list-group-borderless mb-0">
            <li class="list-group-item mb-0 pb-0 items-center">
              <font-awesome-icon :icon="faCheck" class="text-success me-1" />
              State tax
            </li>
            <li class="list-group-item mb-0 pb-0 items-center">
              <font-awesome-icon :icon="faCheck" class="text-success me-1" />
              Toll charge
            </li>
            <li class="list-group-item mb-0 pb-0 items-center">
              <font-awesome-icon :icon="faCheck" class="text-success me-1" />
              Driver Allowance
            </li>
            <li class="list-group-item mb-0 pb-0 items-center">
              <font-awesome-icon :icon="faCheck" class="text-success me-1" />
              Only one pickup and drop
            </li>
          </ul>
        </b-col>
        <b-col sm="6">
          <h5>Extra charge</h5>
          <ul class="list-group list-group-borderless mb-0">
            <li class="list-group-item mb-0 pb-0 items-center">
              <BIconXLg class="text-danger me-1" />
              Fare beyond 600kms
            </li>
            <li class="list-group-item mb-0 pb-0 items-center">
              <BIconXLg class="text-danger me-1" />
              Airport entry charge
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
  <b-card no-body class="bg-transparent">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <h4 class="mb-0">Safety Guidelines</h4>
    </b-card-header>
    <b-card-body class="pt-4 p-0">
      <b-list-group class="list-group-borderless mb-0">
        <b-list-group-item class="h6 fw-light mb-0 d-flex align-items-start">
          <div>
            <BIconArrowRight class="me-2 mb-1" />
          </div>
          All passengers coming to the state by road must show a COVID negative report (RT-PCR) not
          more than 72 hours old or a valid vaccination certificate. (Travel period should commence
          after 14 days from the 2nd dose)
        </b-list-group-item>
        <b-list-group-item class="h6 fw-light mb-0 d-flex align-items-start">
          <div>
            <BIconArrowRight class="me-2 mb-1" />
          </div>
          Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing
          breakfast day fulfilled off depending questions.
        </b-list-group-item>
        <b-list-group-item class="h6 fw-light mb-0 d-flex align-items-start">
          <div>
            <BIconArrowRight class="me-2 mb-1" />
          </div>
          Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs
          one yet outweigh.
        </b-list-group-item>
        <b-list-group-item class="h6 fw-light mb-0 d-flex align-items-start">
          <div>
            <BIconArrowRight class="me-2 mb-1" />
          </div>
          Meant balls it if up doubt small purse. Required his you put the outlived answered
          position. A pleasure exertion if believed provided to.
        </b-list-group-item>
        <b-list-group-item class="h6 fw-light mb-0 d-flex align-items-start">
          <div>
            <BIconArrowRight class="me-2 mb-1" />
          </div>
          All led out world this music while asked. Paid mind even sons does he door no. Attended
          overcame repeated it is perceived Marianne in.
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight, BIconXLg } from 'bootstrap-icons-vue'

import { currency } from '@/helpers/constants'
import CabSlider from '@/views/cab/Details/components/CabSlider.vue'
</script>

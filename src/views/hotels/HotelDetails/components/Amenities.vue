<template>
  <b-card no-body class="bg-transparent">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <b-card-title tag="h3" class="mb-0">Amenities</b-card-title>
    </b-card-header>

    <b-card-body class="pt-4 p-0">
      <b-row class="g-4">
        <b-col sm="6">
          <h6>
            <font-awesome-icon :icon="faBiking" class="me-1" />
            Activities
          </h6>
          <ul class="list-group list-group-borderless mt-2 mb-0">
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Swimming pool
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Spa
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Kids' play area
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Gym
            </li>
          </ul>
        </b-col>

        <b-col sm="6">
          <h6><font-awesome-icon :icon="faCreditCard" class="me-1" />Payment Method</h6>
          <ul class="list-group list-group-borderless mt-2 mb-0">
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Credit card (Visa, Master card)
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Cash
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Debit Card
            </li>
          </ul>
        </b-col>

        <b-col sm="6">
          <h6><font-awesome-icon :icon="faConciergeBell" class="me-1" />Services</h6>
          <ul class="list-group list-group-borderless mt-2 mb-0">
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Dry cleaning
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Room Service
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Special service
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Waiting Area
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Secrete smoking area
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Concierge
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Laundry facilities
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Ironing Service
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Lift
            </li>
          </ul>
        </b-col>

        <b-col sm="6">
          <h6><BIconShieldFillCheck class="me-1" />Safety & Security</h6>
          <ul class="list-group list-group-borderless mt-2 mb-4 mb-sm-5">
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Doctor on Call
            </li>
          </ul>

          <h6>
            <font-awesome-icon :icon="faVolumeUp" class="me-1" />
            Staff Language
          </h6>
          <ul class="list-group list-group-borderless mt-2 mb-0">
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              English
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Spanish
            </li>
            <li class="list-group-item pb-0">
              <font-awesome-icon :icon="faCheckCircle" class="text-success me-1" />
              Hindi
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>
<script setup lang="ts">
import {
  faConciergeBell,
  faBiking,
  faCheckCircle,
  faVolumeUp,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons'
import { BIconShieldFillCheck } from 'bootstrap-icons-vue'
</script>

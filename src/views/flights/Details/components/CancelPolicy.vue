<template>
  <b-col md="6" xl="12" :style="{ paddingBottom: '70px' }">
    <b-card class="border p-1">
      <b-card-title tag="h5" text="Cancellation & Date Change Charges" class="mb-3" />

      <h6 class="text-danger">Non Refundable</h6>
      <p class="mb-2">
        The Cancellation penalty on this booking will depend on how close to the departure date you
        cancel your ticket. View fare rules to know more
      </p>
      <div>
        <a
          href="#"
          class="btn btn-link p-0 mb-0 text-decoration-underline"
          @click="showModal = !showModal"
        >
          <BIconEyeFill class="mb-1" />
          View Detail
        </a>
      </div>
    </b-card>
  </b-col>

  <!--  Cancellation & Date Change Charges Modal -->
  <b-modal
    class="fade"
    size="lg"
    v-model="showModal"
    title-tag="h5"
    title="Cancellation & Date Change Charges"
    hide-footer
  >
    <b-tabs
      nav-class="nav nav-pills nav-justified nav-responsive bg-primary bg-opacity-10 rounded p-2 mb-3"
    >
      <b-tab title="Cancellation Charge">
        <b-card no-body class="border">
          <b-card-header class="border-bottom">
            <b-card-title tag="h5" class="mb-0">
              <img :src="element9" class="h-50px" alt="" />
              BOM - CDG
            </b-card-title>
          </b-card-header>

          <b-card-body>
            <div class="table-responsive-lg">
              <table class="table table-bordered rounded caption-bottom overflow-hidden mb-0">
                <caption class="pb-0">
                  *From The Date Of Departure
                </caption>

                <thead class="table-dark border-light">
                  <tr>
                    <th scope="col">Time Frame</th>
                    <th scope="col">Air Free + MMT Free</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr>
                    <td>0 hours to 24 hours</td>
                    <td>Non Refundable</td>
                  </tr>
                  <tr>
                    <td>24 hours to 365 days</td>
                    <td>{{ currency }}16,325 + {{ currency }}250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-body>
        </b-card>
      </b-tab>

      <b-tab title="Date Change Charge">
        <b-card no-body class="border">
          <b-card-header class="border-bottom">
            <b-card-title tag="h5" class="mb-0">
              <img :src="element9" class="h-50px" alt="" />
              JFK - BOM
            </b-card-title>
          </b-card-header>

          <b-card-body>
            <div class="table-responsive-lg">
              <table class="table table-bordered rounded caption-bottom overflow-hidden mb-0">
                <caption class="pb-0">
                  *From The Date Of Departure
                </caption>
                <thead class="table-dark border-light">
                  <tr>
                    <th scope="col">Time Frame</th>
                    <th scope="col">Air Free + MMT Free + Fare Difference</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr>
                    <td>0 hours to 24 hours</td>
                    <td>Non Refundable</td>
                  </tr>
                  <tr>
                    <td>24 hours to 365 days</td>
                    <td>{{ currency }}16,325 + {{ currency }}250 + Fare Difference</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-body>
        </b-card>
      </b-tab>
    </b-tabs>
  </b-modal>
</template>
<script setup lang="ts">
import { BIconEyeFill } from 'bootstrap-icons-vue'
import { ref } from 'vue'
import element9 from '@/assets/images/element/09.svg'
import { currency } from '@/helpers/constants'

const showModal = ref(false)
</script>

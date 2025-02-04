<template>
  <b-col xl="8">
    <b-card no-body class="bg-transparent p-0">
      <b-card-header class="bg-transparent p-0">
        <b-card-title tag="h1" class="fs-2 mb-0">Enter Your Payment Details</b-card-title>
      </b-card-header>

      <b-card-body class="p-0 mt-3">
        <b-alert variant="success" v-model="showAlert">
          Hey' you are saving<strong class="mx-1">{{ currency }}2,560</strong>discount using coupon
          code
        </b-alert>

        <b-form class="bg-light rounded-3 p-4">
          <div class="d-sm-flex justify-content-sm-between align-items-center mb-3">
            <h6 class="mb-2 mb-sm-0">We Accept:</h6>
            <ul class="list-inline mb-0 hstack gap-1 justify-content-end">
              <li class="list-inline-item">
                <a href="#"><img :src="visa" class="h-30px" alt="" /></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><img :src="mastercard" class="h-30px" alt="" /></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><img :src="expresscard" class="h-30px" alt="" /></a>
              </li>
            </ul>
          </div>

          <b-row class="g-3">
            <b-col cols="12">
              <label class="form-label"><span class="h6 fw-normal">Card Number *</span></label>
              <div class="position-relative">
                <b-form-input type="text" maxlength="14" placeholder="XXXX XXXX XXXX XXXX" />
                <img
                  :src="visa"
                  class="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block"
                  alt=""
                />
              </div>
            </b-col>
            <b-col md="6">
              <label class="form-label"><span class="h6 fw-normal">Expiration date *</span></label>
              <div class="input-group">
                <b-form-input type="text" maxlength="2" placeholder="Month" />
                <b-form-input type="text" maxlength="4" placeholder="Year" />
              </div>
            </b-col>
            <b-col md="6">
              <label class="form-label"><span class="h6 fw-normal">CVV / CVC *</span></label>
              <b-form-input type="text" maxlength="3" placeholder="XXX" />
            </b-col>
            <b-col cols="12">
              <label class="form-label"><span class="h6 fw-normal">Name on Card *</span></label>
              <b-form-input
                type="text"
                aria-label="name of card holder"
                placeholder="Enter card holder name"
              />
            </b-col>

            <b-col cols="12">
              <b-button variant="primary" class="w-100 mb-0">Pay Now</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import visa from '@/assets/images/element/visa.svg'
import mastercard from '@/assets/images/element/mastercard.svg'
import expresscard from '@/assets/images/element/expresscard.svg'
import { currency } from '@/helpers/constants'

const showAlert = ref(true)
</script>

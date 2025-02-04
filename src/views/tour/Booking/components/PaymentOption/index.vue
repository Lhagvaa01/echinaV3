<template>
  <div id="step-3" role="tabpanel" class="content fade" aria-labelledby="steppertrigger3">
    <div class="vstack gap-4">
      <h4 class="mb-0">Payment options</h4>

      <hr class="my-0" />

      <b-card no-body class="border">
        <b-card-header class="border-bottom d-sm-flex justify-content-between align-items-center">
          <h5 class="mb-2 mb-sm-0">Credit or Debit Card</h5>
          <ul class="list-inline my-0 hstack gap-1 justify-content-end">
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
        </b-card-header>

        <b-card-body>
          <b-row class="g-4">
            <b-col cols="12">
              <label class="form-label">Card Number</label>
              <div class="position-relative form-control-bg-light">
                <b-form-input type="text" maxlength="14" placeholder="XXXX XXXX XXXX XXXX" />
                <img
                  :src="visa"
                  class="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block"
                  alt=""
                />
              </div>
            </b-col>

            <b-col md="4">
              <label class="form-label">Expiration Month</label>
              <div class="form-control-bg-light">
                <b-form-input type="text" maxlength="2" />
              </div>
            </b-col>

            <b-col md="4">
              <label class="form-label">Expiration Year</label>
              <div class="form-control-bg-light">
                <b-form-input type="text" maxlength="4" />
              </div>
            </b-col>

            <b-col md="4">
              <label class="form-label">CVV / CVC</label>
              <div class="form-control-bg-light">
                <b-form-input type="number" maxlength="3" placeholder="XXX" />
              </div>
            </b-col>

            <b-col cols="12">
              <label class="form-label">Name of the cardholder</label>
              <div class="form-control-bg-light">
                <b-form-input type="text" aria-label="name of the cardholder" />
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <b-card no-body class="border">
        <b-card-header class="border-bottom">
          <h5 class="mb-0">Pay with Paypal</h5>
        </b-card-header>

        <b-card-body class="text-center">
          <img :src="paypal" class="h-70px mb-3" alt="" />
          <p class="mb-3">
            <strong>Tips:</strong> Simply click on the payment button below to proceed to the PayPal
            payment page.
          </p>

          <a href="#" class="btn btn-sm btn-outline-primary mb-0">Pay with Paypal</a>
        </b-card-body>
      </b-card>

      <div class="d-flex justify-content-between">
        <b-button variant="secondary" class="prev-btn mb-0" @click="stepperInstance?.previous()">
          Previous
        </b-button>
        <b-button variant="success" class="next-btn mb-0">Pay now</b-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import visa from '@/assets/images/element/visa.svg'
import paypal from '@/assets/images/element/paypal.svg'
import mastercard from '@/assets/images/element/mastercard.svg'
import expresscard from '@/assets/images/element/expresscard.svg'

import type { StepPropsType } from '@/views/tour/Booking/type'

defineProps<StepPropsType>()
</script>

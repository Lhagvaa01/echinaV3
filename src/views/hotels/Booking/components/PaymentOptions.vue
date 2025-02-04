<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom p-4">
      <b-card-title class="mb-0">
        <BIconWalletFill class="mb-2 me-1" />
        Payment Options
      </b-card-title>
    </b-card-header>

    <b-card-body class="p-4 pb-0">
      <div class="bg-primary bg-opacity-10 rounded-3 mb-4 p-3">
        <div class="d-md-flex justify-content-md-between align-items-center">
          <div class="d-sm-flex align-items-center mb-2 mb-md-0">
            <img :src="element16" class="h-50px" alt="" />
            <div class="ms-sm-3 mt-2 mt-sm-0">
              <b-card-title tag="h5" class="mb-0">Get Additional Discount</b-card-title>
              <p class="mb-0">Login to access saved payments and discounts!</p>
            </div>
          </div>

          <router-link :to="{ name: 'auth.sign-in' }" class="btn btn-primary mb-0"
            >Login now</router-link
          >
        </div>
      </div>
      <b-accordion class="accordion-icon accordion-bg-light">
        <b-accordion-item class="mb-3" headerClass="h6" buttonClass="rounded" visible>
          <template #title>
            <BIconCreditCard class="text-primary me-2" />
            <span class="me-5">Credit or Debit Card</span>
          </template>
          <div class="d-sm-flex justify-content-sm-between my-3">
            <h6 class="mb-2 mb-sm-0">We Accept:</h6>
            <ul class="list-inline my-0 d-flex gap-1">
              <li class="list-inline-item">
                <a href="#">
                  <img :src="visa" class="h-30px" alt="" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <img :src="mastercard" class="h-30px" alt="" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <img :src="expresscard" class="h-30px" alt="" />
                </a>
              </li>
            </ul>
          </div>

          <form class="row g-3">
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
              <b-form-input type="text" maxlength="3" placeholder="xxx" />
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
              <div class="alert alert-success alert-dismissible fade show my-3" role="alert">
                <div class="d-sm-flex align-items-center mb-3">
                  <img :src="element12" class="w-40px me-3 mb-2 mb-sm-0" alt="" />
                  <h5 class="alert-heading mb-0">{{ currency }}50,000 Covid Cover & More</h5>
                </div>

                <p class="mb-2">
                  Aww yeah, you successfully read this important alert message. This example text is
                  going to run a bit longer so that you can see how spacing within an alert works
                  with this kind of content.
                </p>

                <div class="d-sm-flex align-items-center">
                  <a href="#" class="btn btn-sm btn-success mb-2 mb-sm-0 me-3">
                    <font-awesome-icon :icon="faPlus" class="me-2" />
                    Add</a
                  >
                  <h6 class="mb-0">{{ currency }}69 per person</h6>
                </div>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </b-col>

            <b-col cols="12">
              <div class="d-sm-flex justify-content-sm-between align-items-center">
                <h4>{{ currency }}1800 <span class="small fs-6">Due now</span></h4>
                <b-button variant="primary" class="mb-0">Pay Now</b-button>
              </div>
            </b-col>
          </form>
        </b-accordion-item>

        <b-accordion-item class="mb-3" headerClass="h6" buttonClass="rounded">
          <template #title>
            <BIconGlobe2 class="text-primary me-2" />
            <span class="me-5">Pay with Net Banking</span>
          </template>
          <form class="row g-3 mt-1">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <h6 class="mb-0">Popular Bank:</h6>
              </li>
              <li class="list-inline-item">
                <input type="radio" class="btn-check" name="options" id="option1" />
                <label class="btn btn-light btn-primary-soft-check" for="option1">
                  <img :src="element13" class="h-20px me-2" alt="" />Bank of America
                </label>
              </li>
              <li class="list-inline-item">
                <input type="radio" class="btn-check" name="options" id="option2" />
                <label class="btn btn-light btn-primary-soft-check" for="option2">
                  <img :src="element15" class="h-20px me-2" alt="" />Bank of Japan
                </label>
              </li>
              <li class="list-inline-item">
                <input type="radio" class="btn-check" name="options" id="option3" />
                <label class="btn btn-light btn-primary-soft-check" for="option3">
                  <img :src="element14" class="h-20px me-2" alt="" />VIVIV Bank
                </label>
              </li>
            </ul>

            <p class="mb-1">
              In order to complete your transaction, we will transfer you over to Booking secure
              servers.
            </p>
            <p class="my-0">
              Select your bank from the drop-down list and click proceed to continue with your
              payment.
            </p>
            <b-col md="6">
              <SelectFormInput
                id="bank"
                v-model="selectedBankOption"
                :options="bankOptions"
                :choice-options="{ searchEnabled: true }"
              />
            </b-col>

            <div class="d-grid">
              <button class="btn btn-success mb-0">Pay {{ currency }}1800</button>
            </div>
          </form>
        </b-accordion-item>

        <b-accordion-item class="mb-3" headerClass="h6" buttonClass="rounded">
          <template #title>
            <BIconPaypal class="text-primary me-2" />
            <span class="me-5">Pay with Paypal</span>
          </template>
          <b-card no-body class="card-body border align-items-center text-center mt-4">
            <img :src="paypal" class="h-70px mb-3" alt="" />
            <p class="mb-3">
              <strong>Tips:</strong> Simply click on the payment button below to proceed to the
              PayPal payment page.
            </p>
            <a href="#" class="btn btn-sm btn-outline-primary mb-0">Pay with paypal</a>
          </b-card>
        </b-accordion-item>
      </b-accordion>
    </b-card-body>

    <div class="card-footer p-4 pt-0">
      <p class="mb-0">
        By processing, You accept Booking <a href="#">Terms of Services</a> and
        <a href="#">Policy</a>
      </p>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SelectFormInput from '@/components/SelectFormInput.vue'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { BIconWalletFill, BIconCreditCard, BIconGlobe2, BIconPaypal } from 'bootstrap-icons-vue'

import element12 from '@/assets/images/element/12.svg'
import element13 from '@/assets/images/element/13.svg'
import element14 from '@/assets/images/element/14.svg'
import element15 from '@/assets/images/element/15.svg'
import element16 from '@/assets/images/element/16.svg'
import visa from '@/assets/images/element/visa.svg'
import mastercard from '@/assets/images/element/mastercard.svg'
import expresscard from '@/assets/images/element/expresscard.svg'
import paypal from '@/assets/images/element/paypal.svg'
import { currency } from '@/helpers/constants'

const selectedBankOption = ref('choose-one')

const bankOptions = [
  { value: 'choose-one', text: 'Please choose one' },
  { value: 'Bank of America', text: 'Bank of America' },
  { value: 'Bank of India', text: 'Bank of India' },
  { value: 'Bank of London', text: 'Bank of London' }
]
</script>

<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom p-4">
      <h4 class="mb-0">How would you like to pay?</h4>
    </b-card-header>
    <b-card-body class="p-4">
      <div class="d-sm-flex align-items-center mb-3">
        <h6 class="mb-2 mb-sm-0">We Accept:</h6>
        <ul class="list-inline my-0 ms-sm-3 hstack gap-1">
          <li class="list-inline-item">
            <router-link to=""><img :src="visaCard" class="h-30px" alt="" /></router-link>
          </li>
          <li class="list-inline-item">
            <router-link to=""><img :src="mastercard" class="h-30px" alt="" /></router-link>
          </li>
          <li class="list-inline-item">
            <router-link to=""><img :src="expresscard" class="h-30px" alt="" /></router-link>
          </li>
        </ul>
      </div>

      <b-form class="row g-3">
        <b-col cols="12">
          <label class="form-label">Card Number</label>
          <div class="position-relative">
            <b-form-input type="text" maxlength="14" placeholder="XXXX XXXX XXXX XXXX" />
            <img
              :src="visaCard"
              class="w-30px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block"
              alt=""
            />
          </div>
        </b-col>

        <b-col md="6">
          <label class="form-label">Expiration Date</label>
          <div class="input-group">
            <b-form-input type="text" maxlength="2" placeholder="Month" />
            <b-form-input type="text" maxlength="4" placeholder="Year" />
          </div>
        </b-col>

        <b-col md="6">
          <b-form-group label="CVV / CVC">
            <b-form-input type="text" maxlength="3" placeholder="XXXX" />
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-form-group label="Name on Card">
            <b-form-input type="text" placeholder="Enter card holder name" />
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-button variant="primary" class="mb-0">Pay Now</b-button>
        </b-col>
      </b-form>
    </b-card-body>
  </b-card>
</template>
<script lang="ts" setup>
import visaCard from '@/assets/images/element/visa.svg'
import mastercard from '@/assets/images/element/mastercard.svg'
import expresscard from '@/assets/images/element/expresscard.svg'
</script>

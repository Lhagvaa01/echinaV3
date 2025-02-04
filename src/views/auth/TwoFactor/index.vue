<template>
  <AuthLayout>
    <b-col lg="6" class="d-md-flex align-items-center order-2 order-lg-1">
      <div class="p-3 p-lg-5">
        <img :src="forgotPass" alt="" />
      </div>

      <div class="vr opacity-1 d-none d-lg-block"></div>
    </b-col>

    <b-col lg="6" class="col-lg-6 order-1">
      <div class="p-4 p-sm-7">
        <router-link :to="{ name: 'hotels.home' }">
          <img class="h-50px mb-4" :src="logo" alt="logo" />
        </router-link>

        <h1 class="mb-2 h3">Two factor authentication</h1>
        <p class="mb-sm-0">We have to send a code to <b>example@gmail.com</b></p>

        <b-form class="mt-sm-4">
          <p class="mb-1">Enter the code we have sent you:</p>
          <div class="autotab d-flex justify-content-between gap-1 gap-sm-3 mb-2">
            <b-form-input type="text" maxlength="1" class="text-center p-3" />
            <b-form-input type="text" maxlength="1" class="text-center p-3" />
            <b-form-input type="text" maxlength="1" class="text-center p-3" />
            <b-form-input type="text" maxlength="1" class="text-center p-3" />
          </div>

          <div class="d-sm-flex justify-content-between small mb-4">
            <span>Don't get a code?</span>
            <a href="#" class="btn btn-sm btn-link p-0 text-decoration-underline mb-0"
              >Click to resend</a
            >
          </div>

          <div>
            <b-button variant="primary" type="submit" class="w-100 mb-0"
              >Verify and Process
            </b-button>
          </div>

          <div class="text-primary-hover mt-3 text-center">
            Copyrights ©{{ currentYear }} Booking. Build by
            <a :href="developedByLink" class="text-body">{{ developedBy }}</a
            >.
          </div>
        </b-form>
      </div>
    </b-col>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import forgotPass from '@/assets/images/element/forgot-pass.svg'
import logo from '@/assets/images/logo-icon.svg'
import { currentYear, developedBy, developedByLink } from '@/helpers/constants'
</script>

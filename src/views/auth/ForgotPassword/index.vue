<template>
  <AuthLayout>
    <b-col lg="6" class="d-md-flex align-items-center order-2 order-lg-1">
      <div class="p-3 p-lg-5">
        <img :src="forgotPass" alt="" />
      </div>

      <div class="vr opacity-1 d-none d-lg-block"></div>
    </b-col>

    <b-col lg="6" class="order-1">
      <div class="p-4 p-sm-7">
        <router-link :to="{ name: 'hotels.home' }">
          <img class="h-50px mb-4" :src="logo" alt="logo" />
        </router-link>

        <h1 class="mb-2 h3">Forgot password?</h1>
        <p class="mb-sm-0">Enter the email address associated with an account.</p>

        <b-form class="mt-sm-4 text-start">
          <div class="mb-3">
            <b-form-group label="Enter email">
              <b-form-input type="email" autocomplete="" />
            </b-form-group>
          </div>

          <div class="mb-3 text-center">
            <p>
              Back to
              <router-link :to="{ name: 'auth.sign-in' }">Sign in</router-link>
            </p>
          </div>

          <div class="d-grid">
            <b-button variant="primary" type="submit">Reset Password</b-button>
          </div>

          <div class="position-relative my-4">
            <hr />
            <p class="small position-absolute top-50 start-50 translate-middle bg-mode px-2">
              Or sign in with
            </p>
          </div>

          <div class="vstack gap-3">
            <a href="#" class="btn btn-light mb-0">
              <v-icon name="fc-google" class="fa-fw text-google-icon me-1" />
              Sign in with Google
            </a>
            <a href="#" class="btn btn-light mb-0">
              <FontAwesomeIcon :icon="faFacebookF" class="fa-fw text-facebook me-1" />
              Sign in with Facebook</a
            >
          </div>

          <div class="text-primary-hover text-body mt-3 text-center">
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
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { currentYear, developedBy, developedByLink } from '@/helpers/constants'
</script>

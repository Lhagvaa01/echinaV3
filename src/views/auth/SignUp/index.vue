<template>
  <AuthLayout>
    <b-col lg="6" class="d-flex align-items-center order-2 order-lg-1">
      <div class="p-3 p-lg-5">
        <img :src="signin" alt="" />
      </div>
      <div class="vr opacity-1 d-none d-lg-block"></div>
    </b-col>

    <div class="col-lg-6 order-1">
      <div class="p-4 p-sm-6">
        <router-link :to="{ name: 'hotels.home' }">
          <img class="h-50px mb-4" :src="logo" alt="logo" />
        </router-link>

        <h1 class="mb-2 h3">Create new account</h1>
        <p class="mb-0">
          Already a member?
          <router-link :to="{ name: 'auth.sign-in' }"> Log in</router-link>
        </p>

        <b-form class="mt-4 text-start">
          <div class="mb-3">
            <b-form-group label="Enter email">
              <b-form-input v-model="newUserData.email" type="email" autocomplete="" />
            </b-form-group>
          </div>

          <div class="mb-3">
            <PasswordInput
              v-model="newUserData.password"
              id="password"
              place-holder=""
              autocomplete=""
            />
          </div>

          <div class="mb-3">
            <PasswordInput
              v-model="newUserData.confirmPassword"
              id="confirm-password"
              label="Confirm Password"
              place-holder=""
              autocomplete=""
            />
          </div>

          <div class="mb-3">
            <b-form-checkbox>Keep me signed in</b-form-checkbox>
          </div>

          <div>
            <b-button variant="primary" type="submit" class="w-100 mb-0">Sign up</b-button>
          </div>

          <div class="position-relative my-4">
            <hr />
            <p
              class="small position-absolute top-50 start-50 translate-middle bg-mode px-1 px-sm-2"
            >
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
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import signin from '@/assets/images/element/signin.svg'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import logo from '@/assets/images/logo-icon.svg'
import PasswordInput from '@/components/PasswordInput.vue'
import { reactive } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { currentYear, developedBy, developedByLink } from '@/helpers/constants'

const newUserData = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})
</script>

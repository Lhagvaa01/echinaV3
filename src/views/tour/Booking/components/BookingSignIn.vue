<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <b-card-title tag="h5" class="mb-0">Sign In Now To Book An Online</b-card-title>
    </b-card-header>

    <b-card-body>
      <div class="form-control-bg-light">
        <b-form-group label="Email id">
          <b-form-input size="lg" type="email" placeholder="Enter your email" />
        </b-form-group>
      </div>

      <div class="mt-4 form-control-bg-light">
        <b-form-group label="Mobile number">
          <b-form-input size="lg" type="tel" placeholder="Enter your mobile number" />
        </b-form-group>
      </div>

      <div class="mt-4 form-check-light mb-0">
        <b-form-checkbox>I Already Have Booking Account</b-form-checkbox>
      </div>

      <div class="d-grid mt-4">
        <b-button variant="primary" class="next-btn mb-0">Book as Guest</b-button>
      </div>

      <div class="position-relative my-4">
        <hr />
        <p class="small position-absolute top-50 start-50 translate-middle bg-mode text-center">
          Or via social media
        </p>
      </div>

      <div class="d-grid gap-2 d-md-block text-center">
        <b-button size="sm" class="bg-facebook mb-0" type="button">
          <font-awesome-icon :icon="faFacebookF" class="me-1" />
          Facebook
        </b-button>
        <b-button size="sm" class="bg-google mb-0 ms-1" type="button">
          <font-awesome-icon :icon="faGoogle" class="me-1" />
          Google
        </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
</script>

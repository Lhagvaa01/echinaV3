<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <h4 class="card-header-title">Update email</h4>
      <p class="mb-0">
        Your current email address is <span class="text-primary">example@gmail.com</span>
      </p>
    </b-card-header>

    <b-card-body>
      <b-form>
        <label class="form-label">Enter your new email<span class="text-danger">*</span></label>
        <b-form-input type="email" placeholder="Enter your email" />

        <div class="text-end mt-3">
          <a href="#" class="btn btn-primary mb-0">Save Email</a>
        </div>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts"></script>

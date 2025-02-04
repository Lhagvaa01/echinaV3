<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <h4 class="card-header-title">Update Password</h4>
      <p class="mb-0">
        Your current email address is <span class="text-primary">example@gmail.com</span>
      </p>
    </b-card-header>

    <b-form class="card-body">
      <div class="mb-3">
        <PasswordInput
          id="current-password"
          v-model="currentPassword"
          label="Current password"
          placeholder="Enter current password"
          autocomplete=""
        />
      </div>
      <div class="mb-3">
        <PasswordInput
          id="new-password"
          v-model="newPassword"
          label="Enter new password"
          placeholder="Enter new password"
          autocomplete=""
        />
      </div>
      <div class="mb-3">
        <PasswordInput
          id="confirm-password"
          v-model="confirmPassword"
          label="Confirm new password"
          placeholder="Confirm new password"
          autocomplete=""
        />
      </div>

      <div class="text-end">
        <a href="#" class="btn btn-primary mb-0">Change Password</a>
      </div>
    </b-form>
  </b-card>
</template>

<script setup lang="ts">
import PasswordInput from '@/components/PasswordInput.vue'
import { ref } from 'vue'

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
</script>

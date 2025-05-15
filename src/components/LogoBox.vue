<template>
  <router-link :to="{ name: 'flights.home' }" class="navbar-brand">
    <template v-if="!onlyLight">
      <img class="light-mode-item navbar-brand-item" :class="customClass" :src="logoDark" alt="dark" />
      <img class="dark-mode-item navbar-brand-item" :class="customClass" :src="logoLight" alt="Light" />
    </template>

    <!-- <img v-if="onlyLight" class="navbar-brand-item" :src="logoLight" alt="logo" />
    <img v-else class="navbar-brand-item" :src="logoDark" alt="logo" /> -->

  </router-link>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo-light.svg'
import logoLight from '@/assets/images/logo-light.svg'
import logoDark from '@/assets/images/logo.svg'
// ./src/assets/images/logo-light.svg
defineProps({
  customClass: String,
  onlyLight: {
    type: Boolean,
    default: false
  }
})
</script>

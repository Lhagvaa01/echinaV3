<template>
  <router-link :to="{ name: 'flights.home' }" class="navbar-brand">
    <template v-if="!onlyLight">
      <img class="light-mode-item navbar-brand-item" :class="customClass" :src="logo" alt="logo" />
      <img class="dark-mode-item navbar-brand-item" :class="customClass" :src="logoLight" alt="logo" />
    </template>

    <img v-if="onlyLight" class="navbar-brand-item" :src="logoLight" alt="logo" />
  </router-link>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo-light.svg'
import logoLight from '@/assets/images/logo-light.svg'
// ./src/assets/images/logo-light.svg
defineProps({
  customClass: String,
  onlyLight: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <header class="navbar-light header-sticky" :class="{ 'header-sticky-on': isSticky }">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <LogoBox />

        <button
          class="navbar-toggler ms-auto mx-3 me-xl-0 p-0 p-sm-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-b-toggle="'navbar-collapse'"
        >
          <span class="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <MobileMenu v-if="isMobileMenu" start-booking-menu show-extra-pages />
        <AppMenu v-else start-booking-menu show-extra-pages />

        <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
          <CustomDropDown is="li" custom-class="nav-item me-3">
            <button
              class="btn btn-link text-warning p-0 mb-0"
              id="bd-theme"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              type="button"
            >
              <BIconCircleHalf class="fs-5" />
            </button>

            <ul class="dropdown-menu min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
              <template v-for="(mode, idx) in themeModes" :key="idx">
                <li :class="{ 'mb-1': idx != themeModes.length - 1 }">
                  <button
                    type="button"
                    class="dropdown-item d-flex align-items-center"
                    :class="{ active: mode.theme === useLayout.theme }"
                    @click="useLayout.setTheme(mode.theme)"
                  >
                    <component :is="mode.icon" />
                    &nbsp;&nbsp;{{ toSentenceCase(mode.theme) }}
                  </button>
                </li>
              </template>
            </ul>
          </CustomDropDown>

          <CustomDropDown is="li" custom-class="nav-item nav-search me-3">
            <a
              class="nav-link mb-0 p-0"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
              data-bs-display="static"
            >
              <BIconSearch class="fs-5" />
            </a>

            <div
              class="dropdown-menu dropdown-menu-end shadow rounded p-2"
              aria-labelledby="navSearch"
            >
              <b-form class="input-group">
                <b-form-input class="border-primary" type="search" placeholder="Search..." />
                <b-button variant="primary" class="m-0" type="submit">Search</b-button>
              </b-form>
            </div>
          </CustomDropDown>

          <li class="nav-item ms-2 d-none d-sm-block">
            <a href="#" class="btn btn-sm btn-primary-soft mb-0">
              <font-awesome-icon :icon="faRightToBracket" class="me-2" />
              Sign Up
            </a>
          </li>
        </ul>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import AppMenu from '@/components/navbar/AppMenu.vue'
import MobileMenu from '@/components/navbar/mobile-menu/MobileMenu.vue'
import CustomDropDown from '@/components/CustomDropDown.vue'
import LogoBox from '@/components/LogoBox.vue'

import type { LayoutState } from '@/types/layout'
import type { BSIconType } from '@/types'

import { BIconCircleHalf, BIconMoonStars, BIconSearch, BIconSun } from 'bootstrap-icons-vue'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import { toSentenceCase } from '@/helpers/change-casting'
import { useLayoutStore } from '@/stores/layout'

type ThemeModeType = {
  theme: LayoutState['theme']
  icon: BSIconType
}

const themeModes: ThemeModeType[] = [
  {
    icon: BIconSun,
    theme: 'light'
  },
  {
    icon: BIconMoonStars,
    theme: 'dark'
  },
  {
    icon: BIconCircleHalf,
    theme: 'auto'
  }
]

const useLayout = useLayoutStore()

let isSticky = ref<boolean>(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY >= 400
  })
})

const isMobileMenu = computed(() => {
  return window.innerWidth <= 1200
})
</script>

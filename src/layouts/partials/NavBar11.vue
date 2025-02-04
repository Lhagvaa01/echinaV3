<template>
  <header class="navbar-light header-sticky" :class="{ 'header-sticky-on': isSticky }">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <LogoBox />

        <!-- Responsive navbar toggler -->
        <button
          class="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2 mx-3 mt-1"
          type="button"
          v-b-toggle="'navbar-collapse'"
        >
          <span class="navbar-toggler-animation py-1">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span class="d-none d-sm-inline-block small ms-1">Menu</span>
        </button>

        <MobileMenu v-if="isMobileMenu" />
        <AppMenu v-else menu-class="mx-auto" />

        <b-nav class="flex-row align-items-center list-unstyled ms-xl-auto">
          <CustomDropDown custom-class="nav-item me-2">
            <b-button
              variant="link"
              class="text-warning p-0 mb-0"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              data-bs-display="static"
            >
              <BIconCircleHalf class="fs-5" />
            </b-button>

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
                    &nbsp;&nbsp;
                    {{ toSentenceCase(mode.theme) }}
                  </button>
                </li>
              </template>
            </ul>
          </CustomDropDown>

          <CustomDropDown custom-class="nav-item nav-search me-1 me-sm-2">
            <a
              class="nav-link mb-0 py-0"
              role="button"
              href="#"
              id="navSearch"
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
                <b-form-input
                  class="border-primary"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <b-button variant="primary" class="m-0" type="submit">Search</b-button>
              </b-form>
            </div>
          </CustomDropDown>

          <b-nav-item>
            <a href="#" class="btn btn-sm btn-primary mb-0">
              <font-awesome-icon :icon="faRightToBracket" class="me-sm-2" />
              <span class="d-none d-sm-inline">Sign Up</span></a
            >
          </b-nav-item>
        </b-nav>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { BIconSun, BIconMoonStars, BIconCircleHalf, BIconSearch } from 'bootstrap-icons-vue'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import { computed, onMounted, ref } from 'vue'

import LogoBox from '@/components/LogoBox.vue'
import AppMenu from '@/components/navbar/AppMenu.vue'
import CustomDropDown from '@/components/CustomDropDown.vue'
import MobileMenu from '@/components/navbar/mobile-menu/MobileMenu.vue'

import type { ThemeModeType } from '@/types/layout'
import { useLayoutStore } from '@/stores/layout'
import { toSentenceCase } from '@/helpers/change-casting'

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

let isSticky = ref<boolean>(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY >= 400
  })
})

const useLayout = useLayoutStore()

const isMobileMenu = computed(() => {
  return window.innerWidth <= 1200
})
</script>

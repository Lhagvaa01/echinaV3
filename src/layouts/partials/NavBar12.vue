<template>
  <header class="navbar-light header-sticky" :class="{ 'header-sticky-on': isSticky }">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <LogoBox />

        <b-button class="navbar-toggler ms-auto" v-b-toggle="'navbarCollapse'">
          <span class="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </b-button>

        <b-collapse class="navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav navbar-nav-scroll ms-auto">
            <b-nav-item-dropdown no-caret toggle-class="p-0">
              <template v-slot:button-content>
                <a class="nav-link" href="#" id="helpMenu"
                  >Help Center
                  <font-awesome-icon :icon="faChevronDown" size="xs" />
                </a>
              </template>

              <router-link
                class="dropdown-item"
                :class="{ active: currentRouteName === 'pages.help.center' }"
                :to="{ name: 'pages.help.center' }"
                >Help center
              </router-link>

              <router-link
                class="dropdown-item"
                :class="{ active: currentRouteName === 'pages.help.detail' }"
                :to="{ name: 'pages.help.detail' }"
                >Help Detail
              </router-link>
            </b-nav-item-dropdown>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ active: currentRouteName === 'pages.help.privacy-policy' }"
                :to="{ name: 'pages.help.privacy-policy' }"
                >Privacy Policy
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="{ active: currentRouteName === 'pages.help.service' }"
                :to="{ name: 'pages.help.service' }"
                >Terms of Service
              </router-link>
            </li>
          </ul>
        </b-collapse>

        <!-- Profile -->
        <CustomDropDown custom-class="nav-item ms-3">
          <a
            class="avatar avatar-sm p-0"
            href="#"
            role="button"
            data-bs-auto-close="outside"
            data-bs-display="static"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img class="avatar-img rounded-2" :src="avatar1" alt="avatar" />
          </a>

          <ul
            class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
            aria-labelledby="profileDropdown"
          >
            <li class="px-2 pb-2">
              <div class="d-flex align-items-center">
                <div class="avatar me-3">
                  <img class="avatar-img rounded-circle shadow" :src="avatar1" alt="avatar" />
                </div>
                <div>
                  <a class="h6 mt-2 mt-sm-0" href="#">Lori Ferguson</a>
                  <p class="small m-0">example@gmail.com</p>
                </div>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <router-link :to="{ name: 'user.bookings' }" class="dropdown-item">
                <BIconBookmarkCheck class="fa-fw me-2" />
                My Bookings
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'user.wishlist' }" class="dropdown-item">
                <BIconHeart class="fa-fw me-2" />
                My Wishlist
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'user.settings' }" class="dropdown-item">
                <BIconGear class="fa-fw me-2" />
                Settings
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'pages.help.center' }" class="dropdown-item">
                <BIconInfoCircle class="fa-fw me-2" />
                Help Center
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'auth.sign-in' }"
                class="dropdown-item bg-danger-soft-hover"
              >
                <BIconPower class="fa-fw me-2" />
                Sign Out
              </router-link>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <!-- Dark mode options -->
            <li>
              <div
                class="nav-pills-primary-soft theme-icon-active d-flex justify-content-between align-items-center p-2 pb-0"
              >
                <span>Mode:</span>

                <button
                  v-for="mode in themeModes"
                  :key="mode.theme"
                  type="button"
                  class="btn btn-link nav-link text-primary-hover mb-0 p-0"
                  :class="{ active: mode.theme === useLayout.theme }"
                  @click="useLayout.setTheme(mode.theme)"
                  v-b-tooltip.hover
                  :title="mode.theme"
                >
                  <component :is="mode.icon" />
                </button>
              </div>
            </li>
          </ul>
        </CustomDropDown>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  BIconBookmarkCheck,
  BIconCircleHalf,
  BIconGear,
  BIconHeart,
  BIconInfoCircle,
  BIconMoonStars,
  BIconPower,
  BIconSun
} from 'bootstrap-icons-vue'

import avatar1 from '@/assets/images/avatar/01.jpg'

import router from '@/router'

import LogoBox from '@/components/LogoBox.vue'
import CustomDropDown from '@/components/CustomDropDown.vue'

import type { ThemeModeType } from '@/types/layout'
import { useLayoutStore } from '@/stores/layout'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const isSticky = ref<boolean>(false)

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

onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY >= 400
  })
})

const currentRouteName = router.currentRoute.value.name
</script>

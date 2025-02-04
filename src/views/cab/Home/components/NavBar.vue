<template>
  <header class="navbar-light header-sticky" :class="{ 'header-sticky-on': isSticky }">
    <nav class="navbar navbar-expand-xl">
      <b-container>
        <LogoBox />

        <!-- Responsive navbar toggler -->
        <button
          class="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-b-toggle="'navbar-collapse'"
        >
          <span class="navbar-toggler-animation py-1">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span class="d-none d-sm-inline-block small ms-1">Menu</span>
        </button>

        <!-- Responsive category toggler -->
        <button
          class="navbar-toggler ms-sm-auto mx-3 me-md-0 p-0 p-sm-2"
          type="button"
          v-b-toggle="'navbar-category-collapse'"
        >
          <BIconGrid3x3GapFill class="fa-fw" />
          <span class="d-none d-sm-inline-block small">Category</span>
        </button>

        <MobileMenu v-if="isMobileMenu" show-extra-pages />
        <AppMenu v-else show-extra-pages />

        <b-collapse class="navbar-collapse" id="navbar-category-collapse">
          <ul
            class="navbar-nav navbar-nav-scroll nav-pills-primary-soft text-center ms-auto p-2 p-xl-0"
          >
            <li v-for="(item, idx) in bookingHomeMenuItems" :key="idx" class="nav-item">
              <router-link
                :to="{ name: item.link?.name, params: item.link?.params }"
                class="nav-link"
                :class="{ active: currentRouteName === item.link?.name }"
              >
                <component :is="item.icon" class="me-2" />
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </b-collapse>

        <b-nav class="flex-row align-items-center list-unstyled ms-xl-auto">
          <!-- Notification -->
          <CustomDropDown is="li" custom-class="nav-item ms-0 ms-md-3">
            <a
              class="nav-notification btn btn-light p-0 mb-0"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <BIconBell class="fa-fw" />
            </a>
            <span class="notif-badge animation-blink"></span>

            <div
              class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0"
            >
              <b-card class="bg-transparent" body-class="p-0">
                <b-card-header
                  class="bg-transparent d-flex justify-content-between align-items-center border-bottom"
                >
                  <h6 class="m-0">
                    Notifications
                    <span class="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span>
                  </h6>
                  <a class="small" href="#">Clear all</a>
                </b-card-header>

                <b-card-body class="p-0">
                  <ul class="list-group list-group-flush list-unstyled p-2">
                    <li v-for="(item, idx) in notificationData" :key="idx">
                      <a
                        href="#"
                        class="list-group-item list-group-item-action rounded border-0 mb-1 p-3"
                        :class="{ 'notif-unread': idx === 0 }"
                      >
                        <h6 class="mb-2">{{ item.title }}</h6>
                        <p class="mb-0 small">{{ item.content }}</p>
                        <span>{{ item.time }}</span>
                      </a>
                    </li>
                  </ul>
                </b-card-body>

                <b-card-footer class="bg-transparent text-center border-top">
                  <a href="#" class="btn btn-sm btn-link mb-0 p-0">See all incoming activity</a>
                </b-card-footer>
              </b-card>
            </div>
          </CustomDropDown>

          <!-- Profile -->
          <CustomDropDown is="li" custom-class="nav-item ms-3">
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
        </b-nav>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {
  BIconGrid3x3GapFill,
  BIconBell,
  BIconBookmarkCheck,
  BIconHeart,
  BIconGear,
  BIconInfoCircle,
  BIconPower,
  BIconSun,
  BIconMoonStars,
  BIconCircleHalf
} from 'bootstrap-icons-vue'

import avatar1 from '@/assets/images/avatar/01.jpg'
import { computed, onMounted, ref } from 'vue'

import router from '@/router'
import type { BSIconType } from '@/types'
import type { LayoutState } from '@/types/layout'
import { useLayoutStore } from '@/stores/layout'
import { notificationData } from '@/views/hotels/Home/data'
import { bookingHomeMenuItems } from '@/assets/data/menu-items'

import LogoBox from '@/components/LogoBox.vue'
import AppMenu from '@/components/navbar/AppMenu.vue'
import CustomDropDown from '@/components/CustomDropDown.vue'
import MobileMenu from '@/components/navbar/mobile-menu/MobileMenu.vue'

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

let isSticky = ref<boolean>(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY >= 400
  })
})

const useLayout = useLayoutStore()

const currentRouteName = router.currentRoute.value.name

const isMobileMenu = computed(() => {
  return window.innerWidth <= 1200
})
</script>

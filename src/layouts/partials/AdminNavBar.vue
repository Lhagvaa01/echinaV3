<template>
  <nav class="navbar top-bar navbar-light py-0 py-xl-3">
    <b-container fluid class="p-0">
      <div class="d-flex align-items-center w-100">
        <div class="d-flex align-items-center d-xl-none">
          <LogoBox custom-class="h-40px" />
        </div>

        <div class="navbar-expand-xl sidebar-offcanvas-menu">
          <button class="navbar-toggler me-auto p-2" type="button" v-b-toggle.offcanvasSidebar>
            <BIconList class="text-primary fa-fw" />
          </button>
        </div>

        <div class="navbar-expand-lg ms-auto ms-xl-0">
          <button class="navbar-toggler ms-auto p-0" type="button" v-b-toggle.navbarTopContent>
            <BIconSearch />
          </button>

          <b-collapse class="navbar-collapse w-100 z-index-1" id="navbarTopContent">
            <div class="nav my-3 my-xl-0 flex-nowrap align-items-center">
              <div class="nav-item w-100">
                <b-form class="position-relative">
                  <b-form-input
                    class="bg-light pe-5"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y"
                    type="submit"
                  >
                    <font-awesome-icon :icon="faSearch" class="fs-6 text-primary" />
                  </button>
                </b-form>
              </div>
            </div>
          </b-collapse>
        </div>

        <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
          <CustomDropDown is="li" custom-class="nav-item ms-3">
            <button
              class="nav-notification lh-0 btn btn-light p-0 mb-0"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              data-bs-display="static"
            >
              <BIconCircleHalf class="fs-6" />
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
                    &nbsp;&nbsp;
                    {{ toSentenceCase(mode.theme) }}
                  </button>
                </li>
              </template>
            </ul>
          </CustomDropDown>

          <CustomDropDown is="li" custom-class="nav-item ms-3">
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
            </ul>
          </CustomDropDown>
        </ul>
      </div>
    </b-container>
  </nav>
</template>

<script lang="ts" setup>
import avatar1 from '@/assets/images/avatar/01.jpg'

import {
  BIconBookmarkCheck,
  BIconGear,
  BIconList,
  BIconSearch,
  BIconHeart,
  BIconInfoCircle,
  BIconPower,
  BIconBell,
  BIconCircleHalf,
  BIconSun,
  BIconMoonStars
} from 'bootstrap-icons-vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CustomDropDown from '@/components/CustomDropDown.vue'
import { toSentenceCase } from '@/helpers/change-casting'
import type { ThemeModeType } from '@/types/layout'
import { useLayoutStore } from '@/stores/layout'
import LogoBox from '@/components/LogoBox.vue'

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

type NotificationType = {
  title: string
  content?: string
  time: string
}

const notificationData: NotificationType[] = [
  {
    title: 'New! Booking flights from New York ✈️',
    content: 'Find the flexible ticket on flights around the world. Start searching today',
    time: '05 Feb 2024'
  },
  {
    title: 'Sunshine saving are here 🌞 save 30% or more on a stay',
    time: '24 Aug 2024'
  }
]
</script>

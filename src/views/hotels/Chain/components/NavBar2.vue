<template>
  <header class="navbar-light py-3">
    <nav class="navbar navbar-expand-lg">
      <b-container class="d-block">
        <b-row class="align-items-center">
          <b-col cols="4">
            <router-link class="navbar-brand" :to="{ name: 'landing' }">
              <img
                class="light-mode-item navbar-brand-item d-inline h-40px h-md-60px"
                src="@/assets/images/logo-hotel.svg"
                alt="logo"
              />
              <img
                class="dark-mode-item navbar-brand-item d-inline h-40px h-md-60px"
                src="@/assets/images/logo-hotel-light.svg"
                alt="logo"
              />
            </router-link>
          </b-col>

          <b-col cols="8">
            <div class="align-items-center justify-content-end d-none d-lg-flex">
              <ul class="nav border-bottom">
                <b-nav-item-dropdown
                  toggle-class="arrow-none small pb-2"
                  menu-class=" dropdown-animation dropdown-menu-end"
                >
                  <template v-slot:button-content>
                    <BIconGlobe class="fa-fw me-1" />
                    Language
                  </template>

                  <b-dropdown-item v-for="(flag, idx) in flags" :key="idx">
                    <img class="fa-fw me-2" :src="flag.flagImg" alt="" />
                    {{ flag.name }}
                  </b-dropdown-item>
                </b-nav-item-dropdown>

                <li class="nav-item">
                  <router-link :to="{ name: 'user.bookings' }" class="nav-link small pb-2">
                    <BIconBriefcase class="me-1" />
                    My Trip
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'pages.help.center' }" class="nav-link small pb-2">
                    <BIconInfoCircle class="me-1" />
                    Help
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'auth.sign-in' }" class="nav-link small pb-2">
                    <font-awesome-icon :icon="faUser" class="me-1" />
                    Sign In or Login
                  </router-link>
                </li>

                <!-- theme option -->
                <b-nav-item-dropdown menu-class="dropdown-menu-end" toggle-class="arrow-none m-0">
                  <template v-slot:button-content>
                    <button class="btn btn-link text-warning p-0 mb-0" id="bd-theme" type="button">
                      <BIconCircleHalf class="mb-2" />
                    </button>
                  </template>

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
                </b-nav-item-dropdown>
              </ul>
            </div>

            <div class="d-sm-flex align-items-center justify-content-end">
              <!-- Main navbar -->
              <b-collapse class="navbar-collapse" id="navbar-collapse-2">
                <ul class="navbar-nav navbar-nav-scroll ms-auto">
                  <li class="nav-item dropdown dropdown-fullwidth">
                    <a
                      class="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="hotelMenu"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Find a hotel
                      <font-awesome-icon :icon="faChevronDown" size="xs" />
                    </a>
                    <div class="dropdown-menu" aria-labelledby="hotelMenu">
                      <b-container>
                        <b-row class="g-4 justify-content-between p-lg-3">
                          <b-col lg="5">
                            <h6 class="mb-3">
                              <BIconPinMapFill class="text-primary me-2" />
                              Destination
                            </h6>
                            <hr class="my-2" />
                            <b-row v-for="(chunk, idx) in destinationChunks" :key="idx">
                              <b-col lg="6" v-for="(item, idx) in chunk" :key="idx">
                                <ul class="list-unstyled">
                                  <li>
                                    <a class="dropdown-item" href="#">{{ item }}</a>
                                  </li>
                                </ul>
                              </b-col>
                            </b-row>
                          </b-col>

                          <b-col lg="3">
                            <h6 class="mb-3">
                              <BIconListUl class="text-primary me-2" />
                              Hotel type
                            </h6>
                            <hr class="my-2" />
                            <ul class="list-unstyled">
                              <li v-for="(item, idx) in hotelTypes" :key="idx">
                                <a class="dropdown-item" href="#">
                                  {{ item }}
                                </a>
                              </li>
                            </ul>
                          </b-col>

                          <b-col lg="3">
                            <h6 class="mb-3">
                              <BIconGrid3x3Gap class="text-primary me-2" />
                              Category
                            </h6>
                            <hr class="my-2" />
                            <ul class="list-unstyled">
                              <li v-for="(category, idx) in hotelCategories" :key="idx">
                                <a class="dropdown-item" href="#">
                                  <font-awesome-icon :icon="category.icon" class="me-1" />
                                  {{ category.name }}
                                </a>
                              </li>
                            </ul>
                          </b-col>

                          <b-col cols="12">
                            <b-card
                              no-body
                              class="overflow-hidden"
                              :style="{
                                backgroundImage: `url(${bgImg5})`,
                                backgroundPosition: 'center left',
                                backgroundSize: 'cover'
                              }"
                            >
                              <div class="bg-overlay bg-dark opacity-5"></div>
                              <b-card-body
                                class="d-lg-flex justify-content-between align-items-center position-relative z-index-9"
                              >
                                <div class="mb-3 mb-lg-0">
                                  <h5 class="text-white">Enjoy Great Times with us</h5>
                                  <ul class="list-inline">
                                    <li class="list-inline-item text-white me-2">
                                      <BIconPatchCheckFill class="me-1" />
                                      Get 1000 bonus points on every stay
                                    </li>
                                    <li class="list-inline-item text-white me-2">
                                      <BIconPatchCheckFill class="me-1" />
                                      Earn through Dec 15
                                    </li>
                                    <li class="list-inline-item text-white">
                                      <BIconPatchCheckFill class="me-1" />
                                      Redeem for free night and more
                                    </li>
                                  </ul>
                                </div>

                                <a href="#" class="btn btn-white mb-0">Register Now</a>
                              </b-card-body>
                            </b-card>
                          </b-col>
                        </b-row>
                      </b-container>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle arrow-none"
                      href="#"
                      id="pagesFacilities"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hotel Facilities
                      <font-awesome-icon :icon="faChevronDown" size="xs" />
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="pagesFacilities">
                      <li v-for="(item, idx) in hotelFacilities" :key="idx">
                        <a class="dropdown-item" href="#">
                          {{ item }}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </b-collapse>

              <!-- Toggler button and stay button -->
              <div class="d-flex align-items-center justify-content-end">
                <!-- Responsive navbar toggler -->
                <button class="navbar-toggler" type="button" v-b-toggle="'navbar-collapse-2'">
                  <span class="navbar-toggler-animation">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span class="d-none d-sm-inline-block small">Menu</span>
                </button>

                <!-- Booking form -->
                <CustomDropDown custom-class="nav-item form-control-bg-light">
                  <a
                    class="btn btn-sm btn-primary mb-0"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    Book a stay
                    <font-awesome-icon :icon="faAngleDown" />
                  </a>

                  <div
                    class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-sm p-0 mt-2"
                  >
                    <HotelsFilter />
                  </div>
                </CustomDropDown>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import bgImg5 from '@/assets/images/bg/05.jpg'
import frFlag from '@/assets/images/flags/fr.svg'
import grFlag from '@/assets/images/flags/gr.svg'
import spFlag from '@/assets/images/flags/sp.svg'
import ukFlag from '@/assets/images/flags/uk.svg'

import {
  BIconCircleHalf,
  BIconMoonStars,
  BIconSun,
  BIconGlobe,
  BIconBriefcase,
  BIconInfoCircle,
  BIconPinMapFill,
  BIconListUl,
  BIconGrid3x3Gap,
  BIconPatchCheckFill
} from 'bootstrap-icons-vue'
import { faUser, faChevronDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import type { LayoutState } from '@/types/layout'

import { hotelCategories, hotelDestinations, hotelFacilities, hotelTypes } from '../data'

import { toSentenceCase } from '@/helpers/change-casting'
import { splitArray } from '@/helpers/array'
import { useLayoutStore } from '@/stores/layout'

import HotelsFilter from './HotelsFilter.vue'
import type { BSIconType } from '@/types'
import CustomDropDown from '@/components/CustomDropDown.vue'

type flag = {
  flagImg: string
  name: string
}

type ThemeModeType = {
  theme: LayoutState['theme']
  icon: BSIconType
}

const flags: flag[] = [
  {
    flagImg: ukFlag,
    name: 'English'
  },
  {
    flagImg: spFlag,
    name: 'Español'
  },
  {
    flagImg: frFlag,
    name: 'Français'
  },
  {
    flagImg: grFlag,
    name: 'Deutsch'
  }
]

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

const destinationChunks = splitArray(hotelDestinations, 2)

const useLayout = useLayoutStore()
</script>

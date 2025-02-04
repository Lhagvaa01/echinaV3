<template>
  <footer>
    <b-container>
      <div class="bg-light rounded-top p-4 pb-0">
        <b-row class="g-4 justify-content-between">
          <b-col md="5" lg="4">
            <router-link :to="{ name: 'hotels.home' }" class="me-0">
              <img class="light-mode-item h-40px" :src="logo" alt="logo" />
              <img class="dark-mode-item h-40px" :src="logoLight" alt="logo" />
            </router-link>

            <p class="text-reset mt-4 mb-2">Subscribe to Our Newsletter</p>

            <b-form class="bg-body rounded-2 p-2">
              <div class="input-group">
                <b-form-input class="border-0 me-1" type="email" placeholder="Enter your email" />
                <b-button variant="dark" class="rounded-2 mb-0">
                  <BIconSend />
                </b-button>
              </div>
            </b-form>
          </b-col>

          <b-col md="7" lg="4">
            <b-row class="g-4 g-lg-5">
              <b-col cols="6" v-for="(link, idx) in footerLinks.slice(0, 2)" :key="idx">
                <h5 class="mb-2 mb-md-4">{{ link.title }}</h5>
                <ul class="nav flex-column">
                  <li v-for="(item, idx) in link.items" :key="idx" class="nav-item">
                    <router-link :to="{ name: item.link?.name }" class="nav-link pt-0">
                      {{ item.name }}
                    </router-link>
                  </li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <hr class="mt-4 mb-0" />

        <b-container class="py-3 px-0">
          <div
            class="d-md-flex justify-content-between align-items-center text-center text-md-left"
          >
            <div class="text-primary-hover text-body">
              Copyrights ©{{ currentYear }} Booking. build by
              <a :href="developedByLink" class="text-body">{{ developedBy }}</a
              >.
            </div>
            <div class="mt-3 mt-md-0">
              <ul class="nav text-primary-hover justify-content-center justify-content-md-end">
                <li v-for="(app, idx) in apps" :key="idx" class="nav-item">
                  <a class="nav-link text-body" href="#">
                    <font-awesome-icon :icon="app" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </b-container>
      </div>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.svg'
import logoLight from '@/assets/images/logo-light.svg'
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { BIconSend } from 'bootstrap-icons-vue'
import type { FAIconType } from '@/types'

import { footerLinks } from '@/assets/data/footer-items'
import { currentYear, developedBy, developedByLink } from '@/helpers/constants'

const apps: FAIconType[] = [faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub]
</script>

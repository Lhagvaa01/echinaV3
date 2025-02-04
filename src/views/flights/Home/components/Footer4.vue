<template>
  <footer>
    <b-container>
      <div class="bg-dark rounded-top py-5 p-sm-5 mx-0">
        <b-row class="g-4 align-items-center text-center text-lg-start">
          <b-col lg="5">
            <ul
              class="nav list-inline text-primary-hover justify-content-center justify-content-lg-start mb-0"
            >
              <li v-for="(link, idx) in footerLinks" :key="idx" class="list-inline-item">
                <router-link to="" class="nav-link text-body-secondary">{{ link }}</router-link>
              </li>
            </ul>
          </b-col>

          <b-col lg="3" class="text-center">
            <router-link :to="{ name: 'hotels.home' }" class="me-0">
              <img class="h-60px" :src="logoLight" alt="footer logo" />
            </router-link>
            <div class="text-body-secondary text-primary-hover mt-3">
              Copyrights ©{{ currentYear }} Booking. Build by
              <a :href="developedByLink" class="text-body-secondary">{{ developedBy }}</a
              >.
            </div>
          </b-col>

          <b-col lg="4">
            <ul
              class="nav text-primary-hover hstack gap-2 justify-content-center justify-content-lg-end"
            >
              <li v-for="(app, idx) in apps" :key="idx" class="nav-item">
                <a class="nav-link text-body-secondary fs-5" href="#">
                  <font-awesome-icon :icon="app" />
                </a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logoLight from '@/assets/images/logo-light.svg'
import type { FAIconType } from '@/types'
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { currentYear, developedBy, developedByLink } from '@/helpers/constants'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const footerLinks = ['About', 'Policy', 'Terms & Conditions']

const apps: FAIconType[] = [faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub]
</script>

<template>
  <section class="py-0 pt-sm-5">
    <b-container class="position-relative">
      <b-row class="mb-3">
        <b-col cols="12">
          <div class="d-lg-flex justify-content-lg-between mb-1">
            <div class="mb-2 mb-lg-0">
              <h1 class="fs-2">Courtyard by Marriott New York</h1>
              <p class="fw-bold mb-0">
                <BIconGeoAlt class="me-1" />
                5855 W Century Blvd, Los Angeles - 90045
                <a href="#" class="ms-2 text-decoration-underline" @click="showModal = !showModal">
                  <BIconEyeFill class="mb-1" />
                  View On Map
                </a>
              </p>
            </div>

            <ul class="list-inline text-end">
              <li class="list-inline-item">
                <a href="#" class="btn btn-sm btn-light px-2 me-1">
                  <font-awesome-icon :icon="faHeart" />
                </a>
              </li>

              <li class="list-inline-item dropdown">
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="btn btn-sm btn-light px-2"
                  menuClass="dropdown-menu-end w-auto shadow rounded"
                  no-caret
                >
                  <template #button-content>
                    <font-awesome-icon :icon="faShareAlt" class="fa-fw" />
                  </template>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
                    Twitter
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                    Facebook
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faLinkedin" class="me-2" />
                    LinkedIn
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    <font-awesome-icon :icon="faCopy" class="me-2" />
                    Copy link
                  </b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>

      <b-alert
        v-model="showAlert"
        dismissible
        variant="danger"
        class="d-flex justify-content-between align-items-center mb-4 rounded-3 pe-2"
      >
        <div class="d-flex">
          <span class="alert-heading h5 mb-0 me-2">
            <BIconExclamationOctagonFill class="mb-2" />
          </span>
          <span>
            <strong class="alert-heading me-2">Covid Policy:</strong>You may require to present an
            RT-PCR negative test report at the hotel
          </span>
        </div>
      </b-alert>
    </b-container>
  </section>

  <b-modal
    v-model="showModal"
    centered
    body-class="p-0"
    size="lg"
    title="View Our Hotel Location"
    title-tag="h5"
    class="fade"
    id="mapmodal"
  >
    <iframe
      class="w-100"
      height="400"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
      style="border: 0"
      aria-hidden="false"
      tabindex="0"
    ></iframe>

    <template v-slot:footer>
      <b-button variant="primary" size="sm" class="mb-0">
        <BIconPinMap class="fa-fw me-2" />
        View In Google Map
      </b-button>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BIconPinMap } from 'bootstrap-icons-vue'
import { faHeart, faShareAlt, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { BIconEyeFill, BIconExclamationOctagonFill, BIconGeoAlt } from 'bootstrap-icons-vue'

const showAlert = ref(true)

const showModal = ref(false)
</script>

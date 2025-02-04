<template>
  <section class="pt-4">
    <b-container>
      <b-row>
        <b-col md="10" xl="8" class="mx-auto">
          <b-card no-body class="shadow">
            <img :src="gallery4" class="rounded-top" alt="gallery4" />
            <b-card-body class="text-center p-4">
              <b-card-title tag="h1" class="fs-3">🎊 Congratulations! 🎊</b-card-title>
              <p class="lead mb-3">Your trip has been booked</p>
              <h5 class="text-primary mb-4">Beautiful Bali with Malaysia</h5>
              <b-row class="justify-content-between text-start mb-4">
                <b-col lg="5">
                  <ul class="list-group list-group-borderless">
                    <li
                      class="list-group-item d-sm-flex justify-content-between align-items-center"
                    >
                      <span class="mb-0 items-center">
                        <BIconVr class="fa-fw me-2" />
                        Booking ID:
                      </span>
                      <span class="h6 fw-normal mb-0">BS-58678</span>
                    </li>
                    <li
                      class="list-group-item d-sm-flex justify-content-between align-items-center"
                    >
                      <span class="mb-0 items-center">
                        <BIconPerson class="fa-fw me-2" />
                        Booked by:
                      </span>
                      <span class="h6 fw-normal mb-0">Frances Guerrero</span>
                    </li>
                    <li
                      class="list-group-item d-sm-flex justify-content-between align-items-center"
                    >
                      <span class="mb-0 items-center">
                        <BIconWallet2 class="fa-fw me-2" />
                        Payment Method:
                      </span>
                      <span class="h6 fw-normal mb-0">Credit card</span>
                    </li>
                    <li
                      class="list-group-item d-sm-flex justify-content-between align-items-center"
                    >
                      <span class="mb-0 items-center">
                        <BIconCurrencyDollar class="fa-fw me-2" />
                        Total Price:
                      </span>
                      <span class="h6 fw-normal mb-0">{{ currency }}1200</span>
                    </li>
                  </ul>
                </b-col>
                <b-col lg="5">
                  <ul class="list-group list-group-borderless">
                    <li
                      class="list-group-item d-sm-flex justify-content-between align-items-center"
                    >
                      <span class="mb-0 items-center">
                        <BIconCalendar class="fa-fw me-2" />
                        Date:
                      </span>
                      <span class="h6 fw-normal mb-0">29 July 2022</span>
                    </li>
                    <li
                      class="list-group-item d-sm-flex justify-content-between align-items-center"
                    >
                      <span class="mb-0 items-center">
                        <BIconCalendar class="fa-fw me-2" />
                        Tour Date:
                      </span>
                      <span class="h6 fw-normal mb-0">15 Aug 2022</span>
                    </li>
                    <li
                      class="list-group-item d-sm-flex justify-content-between align-items-center"
                    >
                      <span class="mb-0 items-center">
                        <BIconPeople class="fa-fw me-2" />
                        Guests:
                      </span>
                      <span class="h6 fw-normal mb-0">3</span>
                    </li>
                  </ul>
                </b-col>
              </b-row>
              <div class="d-sm-flex justify-content-sm-end d-grid">
                <b-dropdown
                  variant="link"
                  toggle-class="m-0 p-0"
                  class="me-sm-2 mb-2 mb-sm-0"
                  menu-class="min-w-auto shadow rounded"
                  no-caret
                >
                  <template #button-content>
                    <button
                      type="button"
                      class="arrow-none btn btn-light mb-0 w-100 items-center"
                      role="button"
                    >
                      <BIconShare class="me-2" />
                      Share
                    </button>
                  </template>
                  <li>
                    <b-dropdown-item class="items-center">
                      <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
                      Twitter
                    </b-dropdown-item>
                  </li>
                  <li>
                    <b-dropdown-item class="items-center">
                      <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                      Facebook
                    </b-dropdown-item>
                  </li>
                  <li>
                    <b-dropdown-item class="items-center">
                      <font-awesome-icon :icon="faLinkedin" class="me-2" />
                      LinkedIn
                    </b-dropdown-item>
                  </li>
                  <li>
                    <b-dropdown-item class="items-center">
                      <font-awesome-icon :icon="faCopy" class="me-2" />
                      Copy link
                    </b-dropdown-item>
                  </li>
                </b-dropdown>
                <b-button variant="primary" class="mb-0 items-center">
                  <BIconFilePdf class="me-2" />
                  Download PDF
                </b-button>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import gallery4 from '@/assets/images/gallery/04.jpg'
import {
  BIconCalendar,
  BIconCurrencyDollar,
  BIconFilePdf,
  BIconPeople,
  BIconPerson,
  BIconShare,
  BIconVr,
  BIconWallet2
} from 'bootstrap-icons-vue'
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { currency } from '@/helpers/constants'
</script>

<template>
  <div class="py-0 py-lg-7">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12">
          <h2>We always provide the best for our hotel visitors. We are happy to help you.</h2>
          <p class="mb-0">
            We focus a great deal on the understanding of behavioral psychology and influence
            triggers which are crucial for becoming a well-rounded Digital Marketer. We understand
            that theory is important to build a solid foundation, we understand that theory alone
            isn't going to get the job done.
          </p>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col xl="4">
          <b-card
            no-body
            class="bg-primary bg-opacity-10 vstack gap-4 justify-content-center h-100 p-4"
          >
            <div class="d-flex justify-content-between align-items-center">
              <h3 class="purecounter text-primary mb-0">
                <Vue3autocounter ref="counter" :startAmount="0" :endAmount="10" :duration="3" />
              </h3>
              <h6 class="fw-normal mb-0">Total Hotels</h6>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-center me-3">
                <h3 class="purecounter text-primary mb-0">
                  <Vue3autocounter
                    ref="counter"
                    :startAmount="0"
                    :endAmount="200"
                    suffix="+"
                    :duration="3"
                  />
                </h3>
              </div>
              <h6 class="fw-normal mb-0">Total Staff</h6>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-center me-3">
                <h3 class="purecounter text-primary mb-0">
                  <Vue3autocounter
                    ref="counter"
                    :startAmount="0"
                    :endAmount="50"
                    suffix="+"
                    :duration="3"
                  />
                </h3>
              </div>
              <h6 class="fw-normal mb-0">Amazing Services</h6>
            </div>
          </b-card>
        </b-col>
        <b-col md="6" xl="4">
          <b-card no-body class="overflow-hidden">
            <img :src="about7" class="rounded-3" alt="about7" />
            <div class="w-100 h-100">
              <button
                class="btn btn-dark position-absolute top-50 start-50 translate-middle mb-0 items-center"
                v-b-modal.modal1
              >
                <BIconEye class="me-2" />
                View 360
              </button>
            </div>
          </b-card>
          <b-modal title="Hotel 360 View" id="modal1" class="fade" no>
            <div class="p-3 modal-body">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!4v1664190302197!6m8!1m7!1sgWjBbRwH2wMmQTbvyZwkGw!2m2!1d51.49712857925994!2d-0.1593322776188391!3f348.1837813715552!4f17.07463868756892!5f0.8485845663286693"
                width="100%"
                height="400"
                style="border: 0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </b-modal>
        </b-col>
        <b-col md="6" xl="4">
          <ul class="list-group list-group-borderless">
            <li v-for="(feature, idx) in hotelFeatures" class="list-group-item py-3" :key="idx">
              <h6 class="mb-0 fw-normal">
                <component :is="feature.icon" class="fa-fw me-1" :class="feature.variant" />
                {{ feature.name }}
              </h6>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup lang="ts">
import Vue3autocounter from 'vue3-autocounter'

import about7 from '@/assets/images/about/07.jpg'
import { BIconEye } from 'bootstrap-icons-vue'

import { hotelFeatures } from '@/views/hotels/Chain/data'
</script>

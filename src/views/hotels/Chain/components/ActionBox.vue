<template>
  <section class="py-0 py-md-5">
    <b-container>
      <div
        class="position-relative rounded-3 overflow-hidden p-3 p-sm-5"
        :style="{
          backgroundImage: `url(${aboutImg8})`,
          backgroundPosition: 'center left',
          backgroundSize: 'cover'
        }"
      >
        <b-row class="position-relative z-index-9">
          <b-col md="7" xl="5" class="ms-auto">
            <b-card class="p-sm-5" no-body>
              <div class="d-sm-flex justify-content-between align-items-center mb-2">
                <h6 class="text-primary mb-0">Exclusive Offer</h6>
                <ul class="list-inline small mb-0">
                  <li v-for="(val, idx) in new Array(5)" class="list-inline-item me-1" :key="idx">
                    <font-awesome-icon :icon="faStar" class="text-warning" />
                  </li>
                </ul>
              </div>
              <h5>Enjoy Your Dream Vacation In Switzerland</h5>
              <p class="mb-3">
                Book your hotel with us and don't forget to grab an awesome hotel deal to save
                massive on your stay.
              </p>
              <h6 class="fw-normal mb-1">2 Days / 3 Nights</h6>
              <div class="d-flex align-items-center">
                <h5 class="text-success mb-0 me-1">{{ currency }}750</h5>
                <span class="mb-0 me-2">/day</span>
                <span class="text-decoration-line-through">{{ currency }}1000</span>
              </div>
              <button href="" class="btn mb-0 mt-3 btn-primary-soft w-100">Book Now</button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import aboutImg8 from '@/assets/images/about/08.jpg'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { currency } from '@/helpers/constants'
</script>

<template>
  <section class="py-0">
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="bg-light rounded-3 position-relative overflow-hidden p-4 p-xl-5">
            <b-row class="g-4 align-items-center">
              <b-col lg="6">
                <h1 class="mb-3 fs-2">Compare listing and choose the best</h1>
                <p class="mb-3">
                  Expand knowledge by reading book Two before narrow not relied on how except moment
                  myself Dejection assurance.
                </p>
                <button class="btn btn-primary-soft mb-0">
                  <div class="items-center">
                    View all Listing
                    <BIconArrowRight class="fa-fw ms-2" />
                  </div>
                </button>
              </b-col>
              <b-col lg="6">
                <img :src="compare" alt="compare-list" />
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import compare from '@/assets/images/element/compare.svg'
import { BIconArrowRight } from 'bootstrap-icons-vue'
</script>

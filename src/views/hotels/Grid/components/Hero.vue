<template>
  <section class="pt-0">
    <b-container>
      <div
        class="rounded-3 p-3 p-sm-5"
        :style="{
          backgroundImage: `url(${bgImg5})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }"
      >
        <b-row class="my-2 my-xl-5">
          <b-col md="8" class="mx-auto">
            <h1 class="text-center text-white">150 Hotels in New York</h1>
          </b-col>
        </b-row>

        <AvailabilityFilter />
      </div>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bgImg5 from '@/assets/images/bg/05.jpg'
import AvailabilityFilter from './AvailabilityFilter.vue'
</script>

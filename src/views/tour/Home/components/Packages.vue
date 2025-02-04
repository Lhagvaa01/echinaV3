<template>
  <section class="pt-0 pt-md-5">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12" class="text-center">
          <h2 class="mb-0">Our Best Packages</h2>
        </b-col>
      </b-row>
      <b-row class="g-4">
        <b-col sm="6" xl="3" v-for="(item, idx) in packages" :key="idx">
          <PackageCard :package="item" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { packages } from '@/views/tour/Home/data'
import PackageCard from '@/views/tour/Home/components/PackageCard.vue'
</script>

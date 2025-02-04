<template>
  <b-card no-body class="card-img-scale overflow-hidden bg-transparent">
    <div class="card-img-scale-wrapper rounded-3">
      <img :src="package.image" class="card-img" alt="" />
      <div class="card-img-overlay d-flex flex-column z-index-1 p-4">
        <div class="d-flex justify-content-between">
          <span class="badge text-bg-dark">{{ package.category }}</span>
          <span class="badge text-bg-white">
            <font-awesome-icon :icon="faStar" class="text-warning me-1" />
            {{ package.rating }}
          </span>
        </div>
        <div class="w-100 mt-auto">
          <span class="badge text-bg-white fs-6">{{ package.duration }}</span>
        </div>
      </div>
    </div>
    <b-card-body class="px-2">
      <b-card-title tag="h5">
        <router-link :to="{ name: package.link?.name }" class="stretched-link">{{
          package.title
        }}</router-link>
      </b-card-title>
      <div class="hstack gap-2">
        <span class="h5 mb-0 text-success">${{ package.price }}</span>
        <small>Starting price</small>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { faStar } from '@fortawesome/free-solid-svg-icons'
import type { PropType } from 'vue'
import type { PackageType } from '@/views/tour/Home/type'

defineProps({
  package: {
    type: Object as PropType<PackageType>,
    required: true
  }
})
</script>

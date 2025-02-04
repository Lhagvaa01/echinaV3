<template>
  <b-row class="g-2 mt-6">
    <b-col lg="2">
      <h4 class="mb-0">Recent Searches</h4>
    </b-col>

    <b-col lg="10">
      <div class="hstack flex-wrap gap-3">
        <div
          class="alert bg-light fade show small px-3 py-1 mb-0"
          role="alert"
          v-for="(search, index) in recentSearches"
          :key="index"
        >
          <span class="me-1">{{ search }}</span>
          <button
            type="button"
            class="btn-close small p-2 ms-1"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <button type="button" class="btn btn-sm btn-primary-soft mb-0">Clear all</button>
      </div>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { recentSearches } from '@/views/tour/Home/data'
</script>

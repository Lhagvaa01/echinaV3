<template>
  <section class="pt-0">
    <b-container>
      <b-row class="g-4 align-items-center justify-content-between mb-4">
        <b-col cols="12" xl="8">
          <h5 class="mb-0">Showing 1-7 of 32 result</h5>
        </b-col>

        <b-col xl="2">
          <form class="form-control-bg-light">
            <SelectFormInput
              id="filter"
              v-model="selected"
              :options="Options"
              :choice-options="{ searchEnabled: true }"
            />
          </form>
        </b-col>
      </b-row>

      <b-row class="g-4">
        <b-col md="6" xl="4" v-for="(place, idx) in places" :key="idx">
          <PlaceCard :place="place" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <Pagination />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SelectFormInput from '@/components/SelectFormInput.vue'
import PlaceCard from '@/views/tour/Grid/components/PlaceCard.vue'
import Pagination from '@/views/tour/Grid/components/Pagination.vue'

import { places } from '@/views/tour/Grid/data'

const selected = ref('most-viewed')

const Options = [
  { value: 'most-viewed', text: 'Most Viewed' },
  { value: 'Recently search', text: 'Recently search' },
  { value: 'Most popular', text: 'Most popular' },
  { value: 'Top rated', text: 'Top rated' }
]
</script>

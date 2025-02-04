<template>
  <section class="pt-6">
    <b-container class="position-relative">
      <b-row>
        <b-col cols="12">
          <div class="d-sm-flex justify-content-sm-between align-items-center">
            <div class="mb-2 mb-sm-0">
              <h1 class="fs-3 mb-2">5 Cabs Available</h1>

              <ul class="nav nav-divider h6 mb-0">
                <li class="nav-item">One-way trip</li>
                <li class="nav-item">152 kms</li>
                <li class="nav-item">2 Adults</li>
              </ul>
            </div>

            <button @click="toggleOffcanvas" class="btn btn-primary-soft btn-primary-check d-xl-none mb-0" type="button"
              data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
              <font-awesome-icon :icon="faSlidersH" class="me-1" />
              Show filters
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <section class="pt-0">
    <b-container data-sticky-container>
      <b-row>
        <aside class="col-xl-4 col-xxl-3">
          <CustomStickyElement data-sticky data-margin-top="80" data-sticky-for="1199">
            <div class="d-none d-xl-block" :style="{ paddingBottom: '100px' }">
              <CabsListFilter />
            </div>
            <b-offcanvas body-class="p-0 m-0" placement="end" v-model="show" title="Advance Filters" size="xl">
              <div class="flex-column p-3 p-xl-0">
                <CabsListFilter />
              </div>
            </b-offcanvas>
          </CustomStickyElement>
        </aside>

        <b-col xl="8" xxl="9">
          <div class="vstack gap-4">
            <div class="alert alert-warning border-warning rounded-3 mb-0" role="alert">
              <h5>Why book a one-way trip with us?</h5>

              <ul class="list-group list-group-borderless mb-0">
                <li class="list-group-item d-flex text-body mb-0">
                  <font-awesome-icon :icon="faCheck" class="text-warning me-2" />
                  Only one-side fare for your doorstep pickup & drop to destination.
                </li>
                <li class="list-group-item d-flex text-body mb-0">
                  <font-awesome-icon :icon="faCheck" class="text-warning me-2" />
                  No hidden charges - Pay nothing extra than what's mentioned.
                </li>
                <li class="list-group-item d-flex text-body mb-0">
                  <font-awesome-icon :icon="faCheck" class="text-warning me-2" />
                  Experienced & polite drivers with clean & comfortable cabs.
                </li>
              </ul>
            </div>

            <CabCard v-for="(cab, idx) in cabsLists" :key="idx" :cab="cab" />

            <Pagination />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import CabCard from './CabCard.vue'
import { cabsLists } from '../data'
import { faCheck, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

import CabsListFilter from './CabsListFilter.vue'
import Pagination from '@/views/cab/List/components/Pagination.vue'
import CustomStickyElement from '@/components/CustomStickyElement.vue'

const show = ref(false)

const toggleOffcanvas = () => {
  show.value = !show.value
}
</script>

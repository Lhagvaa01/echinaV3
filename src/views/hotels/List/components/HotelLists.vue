<template>
  <section class="pt-0">
    <b-container>
      <b-row class="mb-4">
        <b-col cols="12">
          <b-alert
            v-model="covidAlert"
            dismissible
            variant="danger"
            class="d-flex justify-content-between align-items-center rounded-3 fade show mb-4 mb-0 pe-2"
            role="alert"
          >
            <div class="d-flex">
              <span class="alert-heading h5 mb-0 me-2">
                <BIconExclamationOctagonFill />
              </span>
              <span
                ><strong class="alert-heading me-2">Covid Policy:</strong>You may require to present
                an RT-PCR negative test report at the hotel</span
              >
            </div>
          </b-alert>

          <div class="hstack gap-3 justify-content-between justify-content-md-end">
            <button
              @click="toggleOffcanvas"
              class="btn btn-primary-soft btn-primary-check mb-0 d-xl-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSidebar"
              aria-controls="offcanvasSidebar"
            >
              <font-awesome-icon :icon="faSlidersH" class="me-1"></font-awesome-icon>
              Show filters
            </button>

            <ul class="nav nav-pills nav-pills-dark" id="tour-pills-tab" role="tablist">
              <li class="nav-item">
                <router-link
                  class="nav-link rounded-start rounded-0 mb-0 active"
                  :to="{ name: 'hotels.list' }"
                >
                  <BIconListUl class="fa-fw" />
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  class="nav-link rounded-end rounded-0 mb-0"
                  :to="{ name: 'hotels.grid' }"
                >
                  <BIconGridFill class="fa-fw" />
                </router-link>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <aside class="col-xl-4 col-xxl-3">
          <div class="d-none d-xl-block">
            <HotelListFilter />
            <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
              <b-button variant="link" class="p-0 mb-0">Clear all</b-button>
              <b-button variant="primary" class="mb-0">Filter Result</b-button>
            </div>
          </div>

          <b-offcanvas
            body-class="m-0 p-0"
            v-model="show"
            title="Advance Filters"
            placement="end"
            class="offcanvas-xl"
            tabindex="-1"
            id="offcanvasSidebar"
            aria-labelledby="offcanvasSidebarLabel"
          >
            <div class="flex-column p-3 p-xl-0">
              <HotelListFilter />
            </div>

            <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
              <b-button variant="link" class="p-0 mb-0">Clear all</b-button>
              <b-button variant="primary" class="mb-0">Filter Result</b-button>
            </div>
          </b-offcanvas>
        </aside>

        <b-col xl="8" xxl="9">
          <div class="vstack gap-4">
            <HotelCard v-for="(hotel, idx) in hotels" :key="idx" :hotel="hotel" />
            <Pagination />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { BIconExclamationOctagonFill, BIconGridFill, BIconListUl } from 'bootstrap-icons-vue'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

import { ref } from 'vue'

import Pagination from '@/views/hotels/List/components/Pagination.vue'
import HotelCard from '@/views/hotels/List/components/HotelCard.vue'
import { hotels } from '@/views/hotels/List/data'
import HotelListFilter from '@/views/hotels/List/components/HotelListFilter.vue'

const show = ref(false)
const covidAlert = ref(true)

const toggleOffcanvas = () => {
  show.value = !show.value
}
</script>

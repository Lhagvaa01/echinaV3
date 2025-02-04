<template>
  <AdminLayout>
    <b-row>
      <b-col cols="12" class="mb-5">
        <div class="d-sm-flex justify-content-between align-items-center">
          <h1 class="h3 mb-2 mb-sm-0">Booking</h1>
          <div class="d-grid">
            <router-link to="" class="btn btn-primary-soft mb-0 items-center gap-2">
              <BIconPlusLg />
              Add New Room
            </router-link>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="g-4 mb-5">
      <b-col v-for="(item, idx) in statisticData" md="6" xxl="3" :key="idx">
        <StatisticCard :item="item" />
      </b-col>
    </b-row>

    <b-row class="g-4 justify-content-between align-items-center">
      <b-col lg="5">
        <ul class="nav nav-pills-shadow nav-responsive">
          <li class="nav-item">
            <router-link class="nav-link mb-0 me-sm-2 active" data-bs-toggle="tab" to="#tab-1"
              >All Status</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link mb-0 me-sm-2" data-bs-toggle="tab" to="#tab-2"
              >Available</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link mb-0" data-bs-toggle="tab" to="#tab-3"
              >Sold Out</router-link
            >
          </li>
        </ul>
      </b-col>

      <b-col lg="6" xxl="5">
        <div class="d-sm-flex gap-4 justify-content-between justify-content-lg-end">
          <b-col md="8">
            <b-form class="rounded position-relative">
              <b-form-input
                class="bg-transparent"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                type="submit"
              >
                <font-awesome-icon :icon="faSearch" class="fs-6" />
              </button>
            </b-form>
          </b-col>

          <div class="d-flex justify-content-end mt-2 mt-sm-0">
            <ul class="nav nav-pills nav-pills-dark" id="room-pills-tab" role="tablist">
              <li class="nav-item">
                <button
                  class="nav-link rounded-start rounded-0 active"
                  id="grid-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#grid-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="grid-tab-pane"
                  aria-selected="true"
                >
                  <BIconGridFill class="fa-fw mb-1" />
                </button>
              </li>

              <li class="nav-item">
                <button
                  class="nav-link rounded-end rounded-0"
                  id="list-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#list-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="list-tab-pane"
                  aria-selected="false"
                >
                  <BIconListUl class="fa-fw mb-1" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </b-col>
    </b-row>

    <div class="tab-content mt-5" id="myTabContent">
      <div class="tab-pane fade show active" id="grid-tab-pane">
        <HotelGrid />
      </div>

      <div class="tab-pane fade" id="list-tab-pane">
        <HotelList />
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue'
import StatisticCard from '@/views/admin/bookings/List/components/StatisticCard.vue'
import HotelGrid from '@/views/admin/bookings/List/components/HotelGrid.vue'
import HotelList from '@/views/admin/bookings/List/components/HotelList.vue'

import { BIconPlusLg, BIconGridFill, BIconListUl } from 'bootstrap-icons-vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { statisticData } from '@/views/admin/bookings/List/data'
</script>

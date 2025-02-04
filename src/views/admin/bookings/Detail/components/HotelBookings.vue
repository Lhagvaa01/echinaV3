<template>
  <b-card no-body class="shadow mt-5">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Bookings</h5>
    </b-card-header>
    <b-card-body>
      <b-row class="g-3 align-items-center justify-content-between mb-3">
        <b-col md="8">
          <b-form class="rounded position-relative">
            <b-form-input class="pe-5" type="search" placeholder="Search" aria-label="Search" />
            <button
              class="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y"
              type="submit"
            >
              <font-awesome-icon :icon="faSearch" />
            </button>
          </b-form>
        </b-col>
        <b-col md="3">
          <b-form>
            <SelectFormInput
              id="sort-by"
              v-model="selectedOption"
              :options="sortOptions"
              :choice-options="{ searchEnabled: false }"
            />
          </b-form>
        </b-col>
      </b-row>
      <div class="bg-light rounded p-3 d-none d-lg-block">
        <b-row class="row-cols-7 g-4">
          <b-col>
            <h6 class="mb-0">Booked by</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Check-in</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Check-out</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Guest</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Amount</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Payment</h6>
          </b-col>
          <b-col>
            <h6 class="mb-0">Action</h6>
          </b-col>
        </b-row>
      </div>

      <template v-for="(item, idx) in bookingDetailList" :key="idx">
        <b-row class="row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
          <b-col>
            <small class="d-block d-lg-none">Booked by:</small>
            <div class="d-flex align-items-center">
              <div class="avatar avatar-xs flex-shrink-0">
                <img class="avatar-img rounded-circle" :src="item.image" alt="avatar" />
              </div>
              <div class="ms-2">
                <h6 class="mb-0 fw-light">{{ item.name }}</h6>
              </div>
            </div>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Check-in:</small>
            <h6 class="mb-0 fw-normal">{{ item.checkIn }}</h6>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Check-out:</small>
            <h6 class="mb-0 fw-normal">{{ item.checkOut }}</h6>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Guests:</small>
            <h6 class="mb-0 fw-normal">{{ item.guest }}</h6>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Amount:</small>
            <h6 class="text-success mb-0">{{ currency }}{{ item.amount }}</h6>
          </b-col>
          <b-col>
            <small class="d-block d-lg-none">Payment:</small>
            <div
              class="badge bg-opacity-10"
              :class="
                item.payment == 'half-payment'
                  ? 'bg-info text-info'
                  : item.payment == 'on-property'
                    ? 'text-warning bg-warning'
                    : 'text-success bg-success'
              "
            >
              {{ kebabToTitleCase(item.payment) }}
            </div>
          </b-col>
          <b-col>
            <router-link to="" class="btn btn-sm btn-light mb-0"> View </router-link>
          </b-col>
        </b-row>
        <b-row v-if="idx == 1" class="row-cols-xl-7 align-items-lg-center border-bottom g-4">
          <div class="bg-light px-2 py-4 text-center">
            <h6 class="mb-0">Booking Available (27 Dec to 1 Jan)</h6>
          </div>
        </b-row>
      </template>
    </b-card-body>
    <b-card-footer class="pt-0">
      <Pagination />
    </b-card-footer>
  </b-card>
</template>

<script lang="ts" setup>
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { bookingDetailList } from '../data'
import { currency } from '@/helpers/constants'
import SelectFormInput from '@/components/SelectFormInput.vue'
import { ref } from 'vue'
import Pagination from '@/views/admin/bookings/Detail/components/Pagination.vue'
import { kebabToTitleCase } from '@/helpers/change-casting'

const selectedOption = ref('sort-by')
const sortOptions = [
  { value: 'sort-by', text: 'Sort by' },
  { value: 'free', text: 'Free' },
  { value: 'newest', text: 'Newest' },
  { value: 'oldest', text: 'Oldest' }
]
</script>

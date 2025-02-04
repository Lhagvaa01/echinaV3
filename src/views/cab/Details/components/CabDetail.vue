<template>
  <section class="pt-0">
    <b-container data-sticky-container>
      <b-row class="g-4">
        <b-col xl="8">
          <div class="vstack gap-5">
            <CabCard />

            <TripDetail />

            <DriverAndCabDetails />
          </div>
        </b-col>

        <aside class="col-xl-4">
          <div data-sticky data-margin-top="80" data-sticky-for="1199">
            <b-card no-body class="bg-light p-4">
              <h6 class="text-danger fw-normal">Hurry! Limited cars left</h6>
              <ul class="list-group list-group-borderless mb-0">
                <li class="list-group-item d-flex justify-content-between">
                  <span class="h6 fw-light mb-0">Base Price</span>
                  <span class="h6 fw-light mb-0">{{ currency }}260</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span class="h6 fw-light mb-0">State Tax</span>
                  <span class="h6 fw-light mb-0">{{ currency }}50</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span class="h6 fw-light mb-0">Night Charge</span>
                  <span class="h6 fw-light mb-0">{{ currency }}100</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span class="h6 fw-light mb-0">Convenience Fee</span>
                  <span class="h6 fw-light mb-0">{{ currency }}25</span>
                </li>
                <li class="list-group-item py-0">
                  <hr class="my-0" />
                </li>
                <li class="list-group-item d-flex justify-content-between pb-0">
                  <span class="h5 fw-normal mb-0">Total</span>
                  <span class="h5 fw-normal mb-0">{{ currency }}435</span>
                </li>
              </ul>
              <div class="d-grid mt-4 gap-2">
                <div class="form-check form-check-inline mb-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="discountOptions"
                    id="discount1"
                    defaultValue="option1"
                    defaultChecked
                  />
                  <label class="form-check-label h6 fw-normal mb-0" htmlFor="discount1">
                    Pay {{ currency }}220 now (Half Payment)
                  </label>
                </div>
                <div class="form-check form-check-inline mb-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="discountOptions"
                    id="discount2"
                    defaultValue="option2"
                  />
                  <label class="form-check-label h6 fw-normal mb-0" htmlFor="discount2">
                    Pay {{ currency }}435 now (Full payment)
                  </label>
                </div>
                <router-link :to="{ name: 'cabs.booking' }" class="btn btn-dark mb-0 mt-2">
                  Pay Now
                </router-link>
              </div>
            </b-card>
          </div>
        </aside>
      </b-row>
    </b-container>
  </section>
</template>
<script lang="ts" setup>
import CabCard from '@/views/cab/Details/components/CabCard.vue'
import TripDetail from '@/views/cab/Details/components/TripDetail.vue'
import DriverAndCabDetails from '@/views/cab/Details/components/DriverAndCabDetails.vue'

import { currency } from '@/helpers/constants'
</script>

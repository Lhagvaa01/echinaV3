<template>
  <section class="pt-0">
    <b-container data-sticky-container>
      <b-row class="g-4 g-xl-5">
        <b-col xl="7" class="order-1">
          <div class="vstack gap-5">
            <b-card no-body class="bg-transparent">
              <b-card-header class="border-bottom bg-transparent px-0 pt-0">
                <h3 class="mb-0">About This Hotel</h3>
              </b-card-header>

              <b-card-body class="pt-4 p-0">
                <h5 class="fw-light mb-4">Main Highlights</h5>

                <div class="hstack gap-3 mb-3">
                  <div
                    class="icon-lg bg-light h5 rounded-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Free wifi"
                  >
                    <font-awesome-icon :icon="faWifi" />
                  </div>
                  <div
                    class="icon-lg bg-light h5 rounded-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Swimming Pool"
                  >
                    <font-awesome-icon :icon="faSwimmingPool" />
                  </div>
                  <div
                    class="icon-lg bg-light h5 rounded-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Central AC"
                  >
                    <font-awesome-icon :icon="faSnowflake" />
                  </div>
                  <div
                    class="icon-lg bg-light h5 rounded-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Free Service"
                  >
                    <font-awesome-icon :icon="faConciergeBell" />
                  </div>
                </div>

                <p class="mb-3">
                  Demesne far-hearted suppose venture excited see had has. Dependent on so extremely
                  delivered by. Yet no jokes worse her why.
                  <b>Bed one supposing breakfast day fulfilled off depending questions.</b>
                </p>
                <p class="mb-0">
                  Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly
                  cordial in do. Water timed folly right aware if oh truth. Large above be to means.
                  Dashwood does provide stronger is.
                </p>

                <div class="collapse" id="collapseContent">
                  <p class="my-3">
                    We focus a great deal on the understanding of behavioral psychology and
                    influence triggers which are crucial for becoming a well rounded Digital
                    Marketer. We understand that theory is important to build a solid foundation, we
                    understand that theory alone isn't going to get the job done so that's why this
                    rickets is packed with practical hands-on examples that you can follow step by
                    step.
                  </p>
                  <p class="mb-0">
                    Behavioral psychology and influence triggers which are crucial for becoming a
                    well rounded Digital Marketer. We understand that theory is important to build a
                    solid foundation, we understand that theory alone isn't going to get the job
                    done so that's why this tickets is packed with practical hands-on examples that
                    you can follow step by step.
                  </p>
                </div>
                <a
                  class="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed"
                  data-bs-toggle="collapse"
                  href="#collapseContent"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseContent"
                >
                  See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
                  <font-awesome-icon :icon="faAngleDown" class="ms-2" />
                </a>

                <h5 class="fw-light mb-2">Advantages</h5>
                <ul class="list-group list-group-borderless mb-0">
                  <li
                    class="list-group-item h6 fw-light d-flex mb-0"
                    :key="index"
                    v-for="(advantage, index) in advantages"
                  >
                    <BIconPatchCheckFill class="text-success me-2" />
                    {{ advantage }}
                  </li>
                </ul>
              </b-card-body>
            </b-card>

            <Amenities />

            <RoomOptions />

            <CustomerReview />

            <HotelPolicies />
          </div>
        </b-col>
        <aside class="col-xl-5 order-xl-2">
          <PriceOverview />
        </aside>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import {
  faWifi,
  faSwimmingPool,
  faSnowflake,
  faConciergeBell,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import { BIconPatchCheckFill } from 'bootstrap-icons-vue'

import Amenities from '@/views/hotels/HotelDetails/components/Amenities.vue'
import RoomOptions from '@/views/hotels/HotelDetails/components/RoomOptions.vue'
import CustomerReview from '@/views/hotels/HotelDetails/components/CustomerReview.vue'
import HotelPolicies from '@/views/hotels/HotelDetails/components/HotelPolicies.vue'
import PriceOverview from '@/views/hotels/HotelDetails/components/PriceOverview.vue'

const advantages = [
  'Every hotel staff to have Proper PPT kit for COVID-19',
  'Every staff member wears face masks and gloves at all service times.',
  'Hotel staff ensures to maintain social distancing at all times.',
  'The hotel has In-Room Dining options available'
]
</script>

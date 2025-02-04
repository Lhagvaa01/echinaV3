<template>
  <b-card no-body class="border">
    <b-card-header class="d-flex justify-content-between pb-0">
      <h6 class="fw-normal mb-0"><span class="text-body">Travel Class:</span> Economy</h6>
      <a
        href="#"
        class="btn btn-link text-decoration-underline p-0 mb-0"
        @click="showModal = !showModal"
      >
        <BIconEyeFill class="mb-1" />
        Baggage & Fare Rules
      </a>
    </b-card-header>

    <b-card-body class="p-4">
      <b-row class="g-4">
        <b-col md="3">
          <img :src="element9" class="w-80px mb-3" alt="" />
          <h6 class="fw-normal mb-0">Phillippines Airline</h6>
          <h6 class="fw-normal mb-0">PA - 5620</h6>
        </b-col>

        <b-col sm="4" md="3">
          <h4>BOM</h4>
          <h6>14:50</h6>
          <p class="mb-2">Sun, 29 Jan 2023</p>
          <p class="mb-2">Chhatrapati Shivaji International Airport</p>
          <p class="mb-0">Terminal - 2, Gate - 25</p>
        </b-col>

        <b-col sm="4" md="3" class="text-center my-sm-auto">
          <h5>9hr 50min</h5>
          <div class="position-relative my-4">
            <hr class="bg-primary opacity-5 position-relative" />
            <div
              class="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle"
            >
              <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
            </div>
          </div>
        </b-col>

        <b-col sm="4" md="3">
          <h4>CDG</h4>
          <h6>11:50</h6>
          <p class="mb-2">Sun, 29 Jan 2023</p>
          <p class="mb-2">Ch. De Gaulle, Paris, France</p>
          <p class="mb-0">Terminal - 2E, Gate - 3</p>
        </b-col>
      </b-row>

      <div class="bg-light rounded-2 text-center text-danger p-2 my-4">
        Change of planes: 3h 15m Layover in France
      </div>

      <b-row class="g-4">
        <b-col md="3">
          <img :src="element9" class="w-80px mb-3" alt="" />
          <h6 class="fw-normal mb-0">Phillippines Airline</h6>
          <h6 class="fw-normal mb-0">PA-645</h6>
        </b-col>

        <b-col sm="4" md="3">
          <h4>CDG</h4>
          <h6>2:50</h6>
          <p class="mb-2">Sun, 30 Jan 2023</p>
          <p class="mb-2">Ch. De Gaulle, Paris, France</p>
          <p class="mb-0">Terminal - 2E, Gate - 3</p>
        </b-col>

        <b-col sm="4" md="3" class="text-center my-sm-auto">
          <h5>5hr 50min</h5>
          <div class="position-relative my-4">
            <hr class="bg-primary opacity-5 position-relative" />
            <div
              class="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle"
            >
              <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
            </div>
          </div>
        </b-col>

        <b-col sm="4" md="3">
          <h4>JFK</h4>
          <h6>7:35</h6>
          <p class="mb-2">Sun, 30 Jan 2023</p>
          <p class="mb-2">John F Kennedy Intl-NY</p>
          <p class="mb-0">Terminal - 4, Gate - 08</p>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>

  <!-- Baggage and fare Modal -->
  <b-modal
    size="lg"
    class="fade"
    id="baggageFare"
    v-model="showModal"
    title="Baggage & Fare Rules"
    title-tag="h5"
    hide-footer
  >
    <div class="">
      <b-card no-body class="border">
        <b-card-header class="border-bottom">
          <b-card-title tag="h5" class="mb-0">
            <img :src="element9" class="h-80px" alt="" />
            BOM - CDG
          </b-card-title>
        </b-card-header>

        <b-card-body>
          <div class="table-responsive-lg">
            <table class="table table-bordered rounded caption-bottom overflow-hidden mb-0">
              <thead class="table-dark border-light">
                <tr>
                  <th scope="col">Baggage Type</th>
                  <th scope="col">Check In</th>
                  <th scope="col">Cabin</th>
                </tr>
              </thead>

              <tbody class="border-top-0">
                <tr>
                  <td>Adult</td>
                  <td>2 PC</td>
                  <td>7 Kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card-body>

        <b-card-footer class="d-flex justify-content-between align-items-center pt-0 px-sm-4">
          <span>*1PC = 23KG</span>
          <a href="#" class="btn btn-sm btn-primary-soft mb-0">Add luggage</a>
        </b-card-footer>
      </b-card>

      <div class="mt-4 px-2">
        <span class="badge bg-light text-success mb-2"
          ><i class="bi bi-star-fill me-2"></i>Travel Hack</span
        >
        <h5 class="mb-2">This itinerary includes a self-transfer</h5>
        <p class="mb-0">
          Please note, that it is the sole responsibility of the passenger to ensure his or her
          eligibility to enter the destination or transit countries (as applicable). We accept no
          liability in this regard. Please check the travel rules of all regulatory websites before
          to booking as well as commencing.
        </p>
      </div>
    </div>
  </b-modal>
</template>

<script setup lang="ts">
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { BIconEyeFill } from 'bootstrap-icons-vue'
import element9 from '@/assets/images/element/09.svg'
import { ref } from 'vue'

const showModal = ref(false)
</script>

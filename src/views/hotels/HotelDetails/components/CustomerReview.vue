<template>
  <b-card no-body class="bg-transparent">
    <b-card-header class="border-bottom bg-transparent px-0 pt-0">
      <b-card-title tag="h3" class="mb-0">Customer Review</b-card-title>
    </b-card-header>
    <b-card-body class="pt-4 p-0">
      <b-card no-body class="bg-light p-4 mb-4">
        <b-row class="g-4 align-items-center">
          <b-col md="4">
            <div class="text-center">
              <h2 class="mb-0">4.5</h2>
              <p class="mb-2">Based on 120 Reviews</p>
              <ul class="list-inline mb-0">
                <li class="list-inline-item me-0">
                  <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                </li>
                <li class="list-inline-item me-0">
                  <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                </li>
                <li class="list-inline-item me-0">
                  <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                </li>
                <li class="list-inline-item me-0">
                  <font-awesome-icon :icon="faStar" class="text-warning me-1" />
                </li>
                <li class="list-inline-item me-0">
                  <font-awesome-icon :icon="faStarHalfAlt" class="text-warning me-1" />
                </li>
              </ul>
            </div>
          </b-col>

          <b-col md="8">
            <b-card-body class="p-0">
              <b-row class="gx-3 g-2 align-items-center">
                <b-col cols="9" sm="10">
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 95%"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </b-col>
                <b-col cols="3" sm="2" class="text-end">
                  <span class="h6 fw-light mb-0">85%</span>
                </b-col>

                <b-col cols="9" sm="10">
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 75%"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </b-col>
                <b-col cols="3" sm="2" class="text-end">
                  <span class="h6 fw-light mb-0">75%</span>
                </b-col>

                <b-col cols="9" sm="10">
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 60%"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </b-col>
                <b-col cols="3" sm="2" class="text-end">
                  <span class="h6 fw-light mb-0">60%</span>
                </b-col>

                <b-col cols="9" sm="10">
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 35%"
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </b-col>
                <b-col cols="3" sm="2" class="text-end">
                  <span class="h6 fw-light mb-0">35%</span>
                </b-col>

                <b-col cols="9" sm="10">
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 20%"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </b-col>
                <b-col cols="3" sm="2" class="text-end">
                  <span class="h6 fw-light mb-0">15%</span>
                </b-col>
              </b-row>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <form class="mb-5">
        <div class="form-control-bg-light mb-3">
          <SelectFormInput
            id="review"
            v-model="selectedReview"
            :options="reviewOptions"
            :choice-options="{ searchEnabled: true }"
          />
        </div>
        <div class="form-control-bg-light mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Your review"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-lg btn-primary mb-0">
          Post review
          <BIconArrowRight class="fa-fw ms-2" />
        </button>
      </form>

      <div class="d-md-flex my-4">
        <div class="avatar avatar-lg me-3 flex-shrink-0">
          <img class="avatar-img rounded-circle" src="@/assets/images/avatar/09.jpg" alt="avatar" />
        </div>
        <div>
          <div class="d-flex justify-content-between mt-1 mt-md-0">
            <div>
              <h6 class="me-3 mb-0">Jacqueline Miller</h6>
              <ul class="nav nav-divider small mb-2">
                <li class="nav-item">Stayed 13 Nov 2022</li>
                <li class="nav-item">4 Reviews written</li>
              </ul>
            </div>
            <div class="icon-md rounded text-bg-warning fs-6">4.5</div>
          </div>

          <p class="mb-2">
            Handsome met debating sir dwelling age material. As style lived he worse dried. Offered
            related so visitors we private removed. Moderate do subjects to distance.
          </p>

          <b-row class="g-4">
            <b-col cols="4" sm="3" lg="2">
              <img src="@/assets/images/category/hotel/4by3/07.jpg" class="rounded" alt="" />
            </b-col>
            <b-col cols="4" sm="3" lg="2">
              <img src="@/assets/images/category/hotel/4by3/08.jpg" class="rounded" alt="" />
            </b-col>
            <b-col cols="4" sm="3" lg="2">
              <img src="@/assets/images/category/hotel/4by3/05.jpg" class="rounded" alt="" />
            </b-col>
          </b-row>
        </div>
      </div>

      <div class="my-4 ps-2 ps-md-3">
        <div class="d-md-flex p-3 bg-light rounded-3">
          <img
            class="avatar avatar-sm rounded-circle me-3"
            src="@/assets/images/avatar/02.jpg"
            alt="avatar"
          />
          <div class="mt-2 mt-md-0">
            <h6 class="mb-1">Manager</h6>
            <p class="mb-0">
              But discretion frequently sir she instruments unaffected admiration everything.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="d-md-flex my-4">
        <div class="avatar avatar-lg me-3 flex-shrink-0">
          <img class="avatar-img rounded-circle" src="@/assets/images/avatar/08.jpg" alt="avatar" />
        </div>
        <div>
          <div class="d-flex justify-content-between mt-1 mt-md-0">
            <div>
              <h6 class="me-3 mb-0">Dennis Barrett</h6>
              <ul class="nav nav-divider small mb-2">
                <li class="nav-item">Stayed 02 Nov 2022</li>
                <li class="nav-item">2 Reviews written</li>
              </ul>
            </div>
            <div class="icon-md rounded text-bg-warning fs-6">4.0</div>
          </div>

          <p class="mb-0">
            Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial
            in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does
            provide stronger is.
          </p>
        </div>
      </div>
      <hr />
      <div class="text-center">
        <a href="#" class="btn btn-primary-soft mb-0">Load more</a>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import SelectFormInput from '@/components/SelectFormInput.vue'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight } from 'bootstrap-icons-vue'
import { ref } from 'vue'

const selectedReview = ref('select-location')

const reviewOptions = [
  { value: 'select-location', text: 'Select location' },
  { value: '5', text: '★★★★★ (5/5)' },
  { value: '4', text: '★★★★☆ (4/5)' },
  { value: '3', text: '★★★☆☆ (3/5)' },
  { value: '2', text: '★★☆☆☆ (2/5)' },
  { value: '1', text: '★☆☆☆☆ (1/5)' }
]
</script>

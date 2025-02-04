<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="table-responsive-xl">
            <table class="table table-compare align-middle">
              <thead class="align-top">
                <tr>
                  <th scope="col">
                    <p class="h3">Compare Our Listing</p>
                    <b-button size="lg" variant="primary" class="btn-round mb-0 flex-centered">
                      <font-awesome-icon :icon="faPlus" />
                    </b-button>
                  </th>

                  <th v-for="(item, idx) in compareListings" scope="col" :key="idx">
                    <b-card no-body class="bg-transparent">
                      <img :src="item.image" class="rounded" alt="..." />
                      <b-card-body class="px-0">
                        <span class="h6">
                          <a href="#">{{ item.name }}</a>
                        </span>
                        <div class="d-sm-flex justify-content-between align-items-center mt-2">
                          <span class="h6 text-success mb-0">
                            {{ currency }} {{ item.price }}
                          </span>
                          <b-button size="sm" variant="link" class="mb-0 p-0">
                            View Listing
                            <BIconArrowRight class="ms-2" />
                          </b-button>
                        </div>
                      </b-card-body>
                    </b-card>
                  </th>
                </tr>
              </thead>
              <tbody class="border-top-0">
                <tr>
                  <th scope="row">
                    <span class="h6 mb-0">Rating</span>
                  </th>
                  <td>
                    <ul class="list-inline mb-0">
                      <li
                        v-for="(_val, idx) in new Array(4)"
                        class="list-inline-item me-1 small"
                        :key="idx"
                      >
                        <font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                      <li class="list-inline-item">
                        <font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li
                        v-for="(_val, idx) in new Array(4)"
                        class="list-inline-item me-1 small"
                        :key="idx"
                      >
                        <font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                      <li class="list-inline-item">
                        <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li
                        v-for="(_val, idx) in new Array(5)"
                        class="list-inline-item me-1 small"
                        :key="idx"
                      >
                        <font-awesome-icon :icon="faStar" class="text-warning" />
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span class="h6 mb-0">Floor area</span>
                  </th>
                  <td>1700 sq.ft</td>
                  <td>1500 sq.ft</td>
                  <td>1650 sq.ft</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span class="h6 mb-0">Bedroom</span>
                  </th>
                  <td>3 Bedroom 4 Beds</td>
                  <td>2 Bedroom 3 Beds</td>
                  <td>1 Bedroom 2 Beds</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span class="h6 mb-0">Bathroom</span>
                  </th>
                  <td>2 Showers</td>
                  <td>2 Showers 1 Bathtub</td>
                  <td>1 Shower 1 Bathtub</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span class="h6 mb-0">Swimming Pool</span>
                  </th>
                  <td>
                    <span class="h5 text-success mb-0">
                      <BIconCheckLg />
                    </span>
                  </td>
                  <td>
                    <span class="h5 text-danger mb-0">
                      <BIconXLg />
                    </span>
                  </td>
                  <td>
                    <span class="h5 text-danger mb-0">
                      <BIconXLg />
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span class="h6 mb-0">Air conditioning</span>
                  </th>
                  <td>
                    <span class="h5 text-success mb-0">
                      <BIconCheckLg />
                    </span>
                  </td>
                  <td>
                    <span class="h5 text-success mb-0">
                      <BIconCheckLg />
                    </span>
                  </td>
                  <td>
                    <span class="h5 text-success mb-0">
                      <BIconCheckLg />
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span class="h6 mb-0">Gym</span>
                  </th>
                  <td>
                    <span class="h5 text-danger mb-0">
                      <BIconXLg />
                    </span>
                  </td>
                  <td>
                    <span class="h5 text-danger mb-0">
                      <BIconXLg />
                    </span>
                  </td>
                  <td>
                    <span class="h5 text-success mb-0">
                      <BIconCheckLg />
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span class="h6 mb-0">Internet</span>
                  </th>
                  <td>
                    <span class="h5 text-success mb-0">
                      <BIconCheckLg />
                    </span>
                  </td>
                  <td>
                    <span class="h5 text-success mb-0">
                      <BIconCheckLg />
                    </span>
                  </td>
                  <td>
                    <span class="h5 text-success mb-0">
                      <BIconCheckLg />
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span class="h6 mb-0">Actions</span>
                  </th>
                  <td>
                    <b-button variant="outline-primary" size="sm" class="mb-0"> Remove</b-button>
                  </td>
                  <td>
                    <b-button variant="outline-primary" size="sm" class="mb-0"> Remove</b-button>
                  </td>
                  <td>
                    <b-button variant="outline-primary" size="sm" class="mb-0"> Remove</b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { faPlus, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight, BIconCheckLg, BIconXLg } from 'bootstrap-icons-vue'
import { compareListings } from '@/views/listing-pages/CompareListing/data'
import { currency } from '@/helpers/constants'
</script>

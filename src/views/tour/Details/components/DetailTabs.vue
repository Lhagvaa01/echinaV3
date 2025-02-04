<template>
  <section class="py-0">
    <b-container>
      <b-row>
        <b-col cols="12">
          <ul
            class="nav nav-pills nav-justified nav-responsive bg-primary bg-opacity-10 rounded p-2"
            id="tour-pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link mb-0"
                id="tour-pills-tab-1"
                data-bs-toggle="pill"
                data-bs-target="#tour-pills-tab1"
                type="button"
                role="tab"
                aria-controls="tour-pills-tab1"
                aria-selected="true"
                :class="show === 'overview' && 'active'"
                @click="show = 'overview'"
              >
                Overview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link mb-0"
                id="tour-pills-tab-2"
                data-bs-toggle="pill"
                data-bs-target="#tour-pills-tab2"
                type="button"
                role="tab"
                aria-controls="tour-pills-tab2"
                aria-selected="false"
                :class="show === 'itinerary' && 'active'"
                @click="show = 'itinerary'"
              >
                Itinerary
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link mb-0"
                id="tour-pills-tab-3"
                data-bs-toggle="pill"
                data-bs-target="#tour-pills-tab3"
                type="button"
                role="tab"
                aria-controls="tour-pills-tab3"
                aria-selected="false"
                :class="show === 'inclusions' && 'active'"
                @click="show = 'inclusions'"
              >
                Inclusions & Exclusion
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link mb-0"
                id="tour-pills-tab-4"
                data-bs-toggle="pill"
                data-bs-target="#tour-pills-tab4"
                type="button"
                role="tab"
                aria-controls="tour-pills-tab4"
                aria-selected="false"
                :class="show === 'tour' && 'active'"
                @click="show = 'tour'"
              >
                Tour Policy
              </button>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <section class="pt-4 pt-md-5">
    <b-container>
      <b-row class="g-4 g-md-5">
        <b-col xl="8">
          <div class="tab-content mb-0" id="tour-pills-tabContent">
            <div
              class="tab-pane fade"
              :class="show === 'overview' && 'show active'"
              id="tour-pills-tab1"
              role="tabpanel"
              aria-labelledby="tour-pills-tab-1"
            >
              <b-card no-body class="bg-transparent p-0">
                <b-card-header class="bg-transparent border-bottom p-0 pb-3">
                  <h3 class="mb-0">Overview</h3>
                </b-card-header>

                <b-card-body class="p-0 pt-3">
                  <p class="mb-4">
                    Bali, also known as the land of gods has plenty to offer to travelers from
                    across the globe. As it so contrasted oh estimating instrument. Size like body
                    some one had. Are conduct viewing boy minutes warrant the expense? Tolerably
                    behavior may admit daughters offending her ask own. Praise effect wishes change
                    way and any wanted. Lively use looked latter regard had. Do he it part more last
                    in. We understand that theory is important to build a solid foundation, we
                    understand that theory alone isn’t going to get the job done so that’s why this
                    is packed with practical hands-on examples that you can follow step by step.
                  </p>

                  <h5>Tour Info</h5>
                  <ul class="list-group list-group-borderless mb-4">
                    <li class="list-group-item" v-for="(item, index) in tourInfo" :key="index">
                      <span class="h6 mb-0 me-2">{{ item.title }}:</span>
                      <span class="h6 fw-light mb-0">{{ item.info }}</span>
                    </li>
                  </ul>

                  <h5>Tour Highlights</h5>
                  <ul class="list-group list-group-borderless mb-4">
                    <li
                      class="list-group-item h6 fw-light d-flex mb-0"
                      v-for="(item, index) in highlights"
                      :key="index"
                    >
                      <div>
                        <BIconArrowRight class="me-2 mb-1" />
                      </div>
                      {{ item }}
                    </li>
                  </ul>

                  <h5>More About The Beautiful Bali with Malaysia Tour</h5>
                  <ul class="list-group list-group-borderless mb-0">
                    <li
                      class="list-group-item h6 fw-light d-flex mb-0"
                      v-for="(item, index) in aboutTour"
                      :key="index"
                    >
                      <font-awesome-icon :icon="faCheckCircle" class="text-success me-2" />
                      {{ item }}
                    </li>
                  </ul>
                </b-card-body>
              </b-card>
            </div>

            <div
              class="tab-pane fade"
              :class="show === 'itinerary' && 'show active'"
              id="tour-pills-tab2"
              role="tabpanel"
              aria-labelledby="tour-pills-tab-2"
            >
              <b-card no-body class="bg-transparent p-0">
                <b-card-header class="bg-transparent border-bottom p-0 pb-3">
                  <h3 class="mb-0">Itinerary</h3>
                </b-card-header>

                <b-card-body class="p-0 pt-3">
                  <b-accordion class="accordion-icon accordion-bg-light">
                    <b-accordion-item
                      class="mb-3"
                      headerClass="h6"
                      buttonClass="rounded d-inline-block"
                      bodyClass="mt-3"
                      visible
                    >
                      <template #title>
                        <span class="lead me-1 fw-normal">Day 1:</span>Arrival in Kuta | Get ready
                        for an ideal escape on this tropical island
                      </template>
                      <div class="vstack gap-4">
                        <b-card no-body class="bg-transparent p-0">
                          <b-card-header class="bg-transparent p-0">
                            <span class="text-body"
                              ><font-awesome-icon :icon="faCheckCircle" class="me-2" />Flight
                              details</span
                            >
                            <div
                              class="p-3 bg-light rounded-2 d-sm-flex justify-content-sm-between align-items-center mb-4 mt-2"
                            >
                              <h6 class="mb-0">New York - Malaysia</h6>
                              <h6 class="fw-normal mb-0">
                                <span class="text-body">Date:</span> 4 July 2022
                              </h6>
                            </div>
                          </b-card-header>

                          <b-card-body class="p-0">
                            <b-row class="g-4">
                              <b-col md="3">
                                <img :src="element9" class="w-80px mb-3" alt="" />
                                <h6 class="fw-normal small mb-0">Phillippines Airline</h6>
                              </b-col>

                              <b-col cols="4" md="3">
                                <h5>CDG</h5>
                                <h6 class="mb-0">2:50 pm</h6>
                              </b-col>

                              <b-col cols="4" md="3" class="text-center">
                                <h6>5hr 50min</h6>

                                <div class="position-relative my-4">
                                  <hr class="bg-primary opacity-5 position-relative" />
                                  <div
                                    class="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle"
                                  >
                                    <font-awesome-icon :icon="faPlane" class="fa-fw" />
                                  </div>
                                </div>
                              </b-col>

                              <b-col cols="4" md="3" class="text-end">
                                <h5>JFK</h5>
                                <h6 class="mb-0">7:35 pm</h6>
                              </b-col>
                            </b-row>
                          </b-card-body>
                        </b-card>

                        <hr class="my-0" />

                        <b-card no-body class="bg-transparent p-0">
                          <b-card-header class="bg-transparent p-0">
                            <span class="text-body"
                              ><font-awesome-icon :icon="faCheckCircle" class="me-2" />Transfer from
                              Airport to hotel</span
                            >
                          </b-card-header>

                          <b-card-body class="p-0 mt-2">
                            <b-row class="g-2 g-sm-4 align-items-center">
                              <b-col sm="4" xl="3">
                                <div class="bg-light rounded-3 px-4 py-5">
                                  <img :src="sedan" alt="" />
                                </div>
                              </b-col>

                              <b-col sm="8" xl="9">
                                <b-card-title tag="h5" class="mb-2">Private Transfers</b-card-title>
                                <h6 class="mb-2">Camry, Accord</h6>
                                <ul class="nav nav-divider mb-2">
                                  <li class="nav-item">SEDAN</li>
                                  <li class="nav-item">AC</li>
                                  <li class="nav-item">4 Seats</li>
                                  <li class="nav-item">2 luggage</li>
                                  <li class="nav-item">First Aid</li>
                                </ul>

                                <a href="#" class="btn btn-sm btn-primary-soft mb-0">Change</a>
                                <a href="#" class="btn btn-sm btn-danger-soft mb-0 ms-1">Remove</a>
                              </b-col>
                            </b-row>
                          </b-card-body>
                        </b-card>

                        <hr class="my-0" />

                        <b-card no-body class="bg-transparent p-0">
                          <b-card-header class="bg-transparent p-0">
                            <span class="text-body"
                              ><font-awesome-icon :icon="faCheckCircle" class="me-2" />Check-In to
                              hotel</span
                            >
                          </b-card-header>

                          <b-card-body class="p-0 mt-2">
                            <b-row class="g-2 g-sm-4">
                              <b-col sm="4">
                                <img :src="hotel4" class="card-img" alt="Card image" />
                              </b-col>

                              <b-col sm="8">
                                <div class="d-flex justify-content-between mb-2">
                                  <div class="badge bg-dark">Hotel</div>
                                  <router-link
                                    :to="{ name: 'hotels.list' }"
                                    class="btn btn-sm btn-link p-0 mb-0 text-decoration-underline"
                                    >Change
                                  </router-link>
                                </div>

                                <b-card-title tag="h5" class="mb-1">
                                  <router-link :to="{ name: 'hotels.details' }"
                                    >Courtyard by Marriott New York
                                  </router-link>
                                </b-card-title>
                                <span>2.9km from the airport</span>

                                <ul class="list-group list-group-borderless mb-0 mt-2 small">
                                  <li class="list-group-item d-flex p-0">
                                    <font-awesome-icon :icon="faCalendarAlt" class="me-2" />
                                    Tue, 5 Jul 2022 - Sat 9 Jul 2022
                                  </li>
                                  <li class="list-group-item d-flex text-success p-0">
                                    <BIconPatchCheckFill class="me-2" />
                                    Free Breakfast
                                  </li>
                                </ul>

                                <h6 class="mb-0 fw-light small mt-2">
                                  Room type: Standard room - Holiday selection
                                  <router-link
                                    :to="{ name: 'hotels.details' }"
                                    class="btn btn-sm btn-link p-0 mb-0 text-decoration-underline ms-2"
                                  >
                                    Change room
                                  </router-link>
                                </h6>
                              </b-col>
                            </b-row>
                          </b-card-body>
                        </b-card>

                        <hr class="my-0" />

                        <b-card no-body class="bg-transparent p-0">
                          <b-card-header class="bg-transparent p-0">
                            <span class="text-body"
                              ><font-awesome-icon :icon="faCheckCircle" class="me-2" />Today’s
                              Activity</span
                            >
                          </b-card-header>

                          <b-card-body class="p-0 mt-2">
                            <b-row class="g-2 g-sm-4 align-items-center">
                              <b-col sm="4">
                                <img :src="tour4" class="card-img" alt="" />
                              </b-col>

                              <b-col sm="8">
                                <b-card-title tag="h5" class="mb-0"
                                  >Sightseeing in Bali</b-card-title
                                >
                                <small class="mb-2">
                                  <BIconGeoAlt class="me-1" />
                                  Bali, Malaysia
                                </small>

                                <ul class="list-group list-group-borderless mb-0 mt-2">
                                  <li class="list-group-item d-flex p-0">
                                    <BIconArrowRight class="text-primary me-2 mt-1" />
                                    Tanah Lot Tour
                                  </li>
                                  <li class="list-group-item d-flex p-0">
                                    <BIconArrowRight class="text-primary me-2 mt-1" />
                                    White water rafting
                                  </li>
                                </ul>

                                <div class="hstack gap-3 flex-wrap mt-2">
                                  <p class="mb-0">
                                    Duration:<span class="h6 fw-light mb-0 ms-1">5 hrs</span>
                                  </p>
                                  <p class="mb-0">
                                    Place Covered:<span class="h6 fw-light mb-0 ms-1">2</span>
                                  </p>
                                </div>
                              </b-col>
                            </b-row>
                          </b-card-body>
                        </b-card>

                        <a href="#" class="btn btn-primary mb-0">
                          <font-awesome-icon :icon="faPersonSkating" class="me-1" />
                          Add Activity</a
                        >
                      </div>
                    </b-accordion-item>
                    <b-accordion-item
                      class="mb-3"
                      headerClass="h6"
                      buttonClass="rounded d-inline-block"
                      bodyClass="mt-3"
                    >
                      <template #title>
                        <span class="lead me-1 fw-normal">Day 2:</span>A day filled with adventure |
                        Indulge in Water sports at Tanjung Benoa Nusa Dua
                      </template>
                      <ul>
                        <li class="mb-2" v-for="(item, index) in facility" :key="index">
                          {{ item }}
                        </li>
                      </ul>
                      <b-row class="g-4">
                        <b-col md="4" v-for="(item, index) in roomImages" :key="index">
                          <img :src="item" class="rounded-3" alt="" />
                        </b-col>
                      </b-row>
                    </b-accordion-item>
                    <b-accordion-item
                      class="mb-3"
                      headerClass="h6"
                      buttonClass="rounded d-inline-block"
                      bodyClass="mt-3"
                    >
                      <template #title>
                        <span class="lead me-1 fw-normal">Day 3:</span>Indulge in Water sports at
                        Tanjung Benoa Nusa Dua
                      </template>
                      Post no so what deal evil rent by real in. But her ready least set lived spite
                      solid. September how men saw tolerably two behavior arranging. She offices for
                      highest and replied one venture pasture. Applauded no discovery in newspaper
                      allowance am northward. Frequently partiality possession resolution at or
                      appearance unaffected me. Engaged its was the evident pleased husband. Ye
                      goodness felicity do disposal dwelling no. First am plate jokes to began to
                      cause a scale. Subjects he prospect elegance followed no overcame possible it
                      on. Improved own provided blessing may peculiar domestic. Sight house has sex
                      never. No visited raising gravity outward subject my cottage Mr be. Hold do at
                      tore in park feet near my case. Invitation at understood occasional sentiments
                      insipidity inhabiting in. Off melancholy alteration principles old. Is do
                      speedily kindness properly oh. Respect article painted cottage he is offices
                      parlors.
                    </b-accordion-item>
                    <b-accordion-item
                      class="mb-3"
                      headerClass="h6"
                      buttonClass="rounded d-inline-block"
                      bodyClass="mt-3"
                    >
                      <template #title>
                        <span class="lead me-1 fw-normal">Day 4:</span>Departure, Its Time to say
                        Goodbye
                      </template>
                      <p>
                        What deal evil rent by real in. But her ready least set lived spite solid.
                        September how men saw tolerably two behavior arranging. She offices for
                        highest and replied one venture pasture. Applauded no discovery in newspaper
                        allowance am northward. Frequently partiality possession resolution at or
                        appearance unaffected me. Engaged its was the evident pleased husband. Ye
                        goodness felicity do disposal dwelling no. First am plate jokes to began to
                        cause a scale. Subjects he prospect elegance followed no overcame possible
                        it on. Improved own provided blessing may peculiar domestic. Sight house has
                        sex never. No visited raising gravity outward subject my cottage Mr be.
                      </p>
                      <p class="mb-0">
                        At the moment, we only accept Credit/Debit cards and Paypal payments. Paypal
                        is the easiest way to make payments online. While checking out your order.
                        Be sure to fill in correct details for fast & hassle-free payment
                        processing.
                      </p>
                    </b-accordion-item>
                  </b-accordion>
                </b-card-body>
              </b-card>
            </div>

            <div
              class="tab-pane fade"
              :class="show === 'inclusions' && 'show active'"
              id="tour-pills-tab3"
              role="tabpanel"
              aria-labelledby="tour-pills-tab-3"
            >
              <b-card no-body class="bg-transparent p-0">
                <b-card-header class="bg-transparent border-bottom p-0 pb-3">
                  <h3 class="mb-0">Inclusions & Exclusions</h3>
                </b-card-header>

                <b-card-body class="p-0 pt-3">
                  <h5>Inclusion</h5>
                  <ul class="list-group list-group-borderless mb-3">
                    <li
                      class="list-group-item d-flex mb-0"
                      v-for="(item, index) in inclusionsList"
                      :key="index"
                    >
                      <font-awesome-icon :icon="faCheck" class="text-success me-2" />
                      <span class="h6 fw-normal">{{ item }}</span>
                    </li>
                  </ul>

                  <h5>Exclusion</h5>
                  <ul class="list-group list-group-borderless mb-3">
                    <li
                      class="list-group-item d-flex mb-0"
                      v-for="(item, index) in exclusionList"
                      :key="index"
                    >
                      <font-awesome-icon :icon="faTimes" class="text-danger me-2" />
                      <span class="h6 fw-normal">{{ item }}</span>
                    </li>
                  </ul>
                </b-card-body>
              </b-card>
            </div>

            <div
              class="tab-pane fade"
              :class="show === 'tour' && 'show active'"
              id="tour-pills-tab4"
              role="tabpanel"
              aria-labelledby="tour-pills-tab-4"
            >
              <b-card no-body class="bg-transparent p-0">
                <b-card-header class="bg-transparent border-bottom p-0 pb-3">
                  <h3 class="mb-0">Tour Policy</h3>
                </b-card-header>

                <b-card-body class="p-0 pt-3">
                  <h5>Confirmation Policy:</h5>
                  <p class="mb-2">
                    The customer receives a confirmation voucher via email within 24 hours of
                    successful booking.
                  </p>
                  <p class="mb-2">
                    In case the preferred slots are unavailable, an alternate schedule of the
                    customer’s preference will be arranged and a new confirmation voucher will be
                    sent via email.
                  </p>
                  <p class="mb-0">
                    Alternatively, the customer may choose to cancel their booking before
                    confirmation and a full refund will be processed.
                  </p>

                  <h5 class="mt-4">Cancellation Policy:</h5>
                  <ul class="list-group list-group-borderless">
                    <li
                      class="list-group-item"
                      v-for="(item, index) in cancellationPolicy"
                      :key="index"
                    >
                      <span class="h6 fw-normal me-1 mb-0">
                        <BIconDot class="mb-1" />{{ item.type }}:
                      </span>
                      <span>{{ item.refund }}</span>
                    </li>
                  </ul>

                  <p class="mt-2">
                    All Prices are in Indian Rupees and subject to change without prior notice.<br />In
                    the case FIT flight inclusive package, the full amount of the flight will be
                    payable at the time of booking.
                  </p>

                  <h5 class="mt-4">Refund Policy:</h5>
                  <p class="mb-2">
                    The applicable refund amount will be processed within 10 business days.
                  </p>
                  <p class="mb-0">
                    All applicable refunds will be done in the traveler's Thrillophilia wallet as
                    Thrillcash.
                  </p>
                </b-card-body>
              </b-card>
            </div>
          </div>
        </b-col>

        <aside class="col-xl-4">
          <b-row class="g-4">
            <b-col md="6" xl="12">
              <Pricing />
            </b-col>

            <b-col md="6" xl="12">
              <Contact />
            </b-col>
          </b-row>
        </aside>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import element9 from '@/assets/images/element/09.svg'
import sedan from '@/assets/images/category/cab/sedan.svg'
import hotel4 from '@/assets/images/category/hotel/4by3/04.jpg'
import tour4 from '@/assets/images/category/tour/4by3/04.jpg'

import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import {
  faCheckCircle,
  faPersonSkating,
  faCheck,
  faTimes,
  faPlane
} from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight, BIconPatchCheckFill, BIconGeoAlt, BIconDot } from 'bootstrap-icons-vue'
import {
  aboutTour,
  cancellationPolicy,
  exclusionList,
  facility,
  highlights,
  inclusionsList,
  roomImages,
  tourInfo
} from '@/views/tour/Details/data'

import Pricing from '@/views/tour/Details/components/Pricing.vue'
import Contact from '@/views/tour/Details/components/Contact.vue'

const show = ref('overview')
</script>

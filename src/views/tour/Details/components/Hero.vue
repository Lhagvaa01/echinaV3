<template>
  <section class="pt-4 pt-lg-5">
    <b-container class="position-relative">
      <b-row>
        <b-col cols="12">
          <div class="d-md-flex justify-content-md-between">
            <div>
              <h1 class="fs-2">Beautiful Bali with Malaysia</h1>
              <ul class="nav nav-divider h6 text-body mb-0">
                <li class="nav-item">5 nights - 6 Days</li>
                <li class="nav-item">1 Country - 2 Cities</li>
              </ul>
            </div>

            <ul class="list-inline text-end">
              <li class="list-inline-item">
                <a href="#" class="btn btn-sm btn-light px-2 me-1">
                  <font-awesome-icon :icon="faHeart" class="fa-fw" />
                </a>
              </li>
              <li class="list-inline-item dropdown">
                <a
                  href="#"
                  class="btn btn-sm btn-light px-2"
                  role="button"
                  id="dropdownShare"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <font-awesome-icon :icon="faShareAlt" class="fa-fw" />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded"
                  aria-labelledby="dropdownShare"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
                      Twitter</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                      Facebook</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon :icon="faLinkedin" class="me-2" />
                      LinkedIn</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon :icon="faCopy" class="me-2" />
                      Copy link</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
      <ImageGallerySlider />
    </b-container>
  </section>
</template>

<script setup lang="ts">
import ImageGallerySlider from './ImageGallerySlider.vue'

import { faHeart, faShareAlt, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>

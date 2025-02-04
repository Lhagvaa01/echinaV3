<template>
  <section class="pt-4">
    <b-container class="position-relative">
      <b-row>
        <b-col cols="12">
          <div class="d-flex justify-content-between align-items-lg-center">
            <ul class="nav nav-divider align-items-center mb-0">
              <li class="nav-item h4">Chicago - San Antonio</li>
              <li class="nav-item h5 fw-light">Outstation- Oneway</li>
              <li class="nav-item h5 fw-light">22 Jan 2022 - 07.25 PM</li>
            </ul>
            <b-dropdown
              variant="link"
              toggle-class="m-0 p-0"
              no-caret
              menu-class="dropdown-menu-end w-auto shadow rounded"
              class="ms-3"
            >
              <template #button-content>
                <b-button size="sm" variant="light" class="px-2 mb-0">
                  <font-awesome-icon :icon="faShareAlt" class="fa-fw" />
                </b-button>
              </template>

              <b-dropdown-item href="#">
                <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
                Twitter
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
                Facebook
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <font-awesome-icon :icon="faLinkedin" class="me-2" />
                LinkedIn
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <font-awesome-icon :icon="faCopy" class="me-2" />
                Copy link
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faCopy, faShareAlt } from '@fortawesome/free-solid-svg-icons'
</script>

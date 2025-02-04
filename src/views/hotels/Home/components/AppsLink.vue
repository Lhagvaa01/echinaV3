<template>
  <section class="bg-light">
    <b-container>
      <b-row class="g-4">
        <b-col md="6" xxl="4" v-for="(service, idx) in serviceData" :key="idx">
          <ServiceCard :service="service" />
        </b-col>

        <b-col lg="6" xl="5" xxl="3" class="ms-xxl-auto">
          <h5 class="mb-4">Download app</h5>
          <b-row class="g-3">
            <b-col cols="6" sm="4" md="3" lg="6">
              <router-link to="">
                <img :src="googlePlay" alt="googleImg" />
              </router-link>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="6">
              <router-link to="">
                <img :src="appStore" alt="appStore" />
              </router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import appStore from '@/assets/images/element/app-store.svg'
import googlePlay from '@/assets/images/element/google-play.svg'
import { serviceData } from '@/views/hotels/Home/data'
import ServiceCard from '@/views/hotels/Home/components/ServiceCard.vue'
</script>

<template>
  <PageLayout>
    <section>
      <b-container>
        <b-row class="align-items-center">
          <b-col md="10" class="text-center mx-auto">
            <img :src="errorImg" class="h-lg-500px mb-4" alt="" />
            <h1 class="display-1 text-primary mb-0">404</h1>
            <h2>Уучлаарай</h2>
            <p class="mb-4">Either something went wrong or this page doesn't exist anymore.</p>
            <router-link :to="{ name: 'hotels.home' }" class="btn btn-light mb-0">Take me to Homepage
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/layouts/PageLayout.vue'
import { errorImg } from '@/views/pages/data'
</script>

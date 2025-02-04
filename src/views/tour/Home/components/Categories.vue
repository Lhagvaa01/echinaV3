<template>
  <section class="pt-0 pt-md-5">
    <b-container>
      <b-row class="mb-3 mb-sm-4">
        <b-col cols="12" class="text-center">
          <h2 class="mb-0">Top Categories</h2>
        </b-col>
      </b-row>
      <b-row class="g-4 g-xl-5">
        <b-col sm="6" lg="4" xl="3" v-for="(cate, index) in categories" :key="index">
          <b-row class="g-2 g-md-3 align-items-center position-relative">
            <b-col md="6">
              <img :src="cate.image" class="rounded-3" alt="" />
            </b-col>
            <b-col md="6">
              <div class="p-2 p-md-0">
                <h5 class="mb-1">
                  <a href="#" class="stretched-link">{{ cate.title }}</a>
                </h5>
                <span>{{ cate.placeCount }} Places</span>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { categories } from '@/views/tour/Home/data'
</script>

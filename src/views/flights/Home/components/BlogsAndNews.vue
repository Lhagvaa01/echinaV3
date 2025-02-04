<template>
  <section>
    <b-container>
      <b-row class="mb-3 mb-sm-4">
        <b-col cols="12" class="text-center">
          <h2 class="mb-0">Latest Blogs & News</h2>
        </b-col>
      </b-row>

      <b-row class="g-4 g-xl-5 justify-content-between">
        <b-col md="6">
          <b-card no-body class="bg-transparent">
            <img :src="blog1" class="card-img" alt="" />

            <b-card-body class="px-3">
              <h4>
                <router-link :to="{ name: 'pages.blog.detail' }" class="stretched-link"
                  >10 Ways on How to Improve your Hotel Operations
                </router-link>
              </h4>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col md="6">
          <b-card
            v-for="(blog, idx) in blogs"
            :key="idx"
            no-body
            class="bg-transparent mb-4 mb-md-5"
          >
            <b-row class="align-items-center">
              <b-col sm="4">
                <img :src="blog.image" class="card-img" alt="" />
              </b-col>
              <b-col sm="8">
                <b-card-body class="p-sm-0">
                  <b-card-title tag="h5">
                    <router-link :to="{ name: blog.link?.name }" class="stretched-link">{{
                      blog.title
                    }}</router-link>
                  </b-card-title>
                  <p class="mb-0">{{ blog.author }}</p>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import blog1 from '@/assets/images/blog/01.jpg'
import { blogs } from '@/views/flights/Home/data'
</script>

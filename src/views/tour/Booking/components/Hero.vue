<template>
  <section class="py-0">
    <b-container>
      <b-row class="mt-4 align-items-center">
        <b-col cols="12">
          <b-card no-body class="bg-light overflow-hidden px-sm-5">
            <b-row class="align-items-center g-4">
              <b-col sm="9">
                <b-card-body>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots mb-0">
                      <li class="breadcrumb-item">
                        <router-link to="/">
                          <BIconHouse class="me-1 mb-1" />
                          Home
                        </router-link>
                      </li>
                      <li class="breadcrumb-item">Hotel detail</li>
                      <li class="breadcrumb-item active">Booking</li>
                    </ol>
                  </nav>
                  <h1 class="m-0 h2 card-title">Review your Booking</h1>
                </b-card-body>
              </b-col>
              <b-col sm="3" class="text-end d-none d-sm-block">
                <img :src="element17" class="mb-n4" alt="" />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import { BIconHouse } from 'bootstrap-icons-vue'
import element17 from '@/assets/images/element/17.svg'
</script>

<template>
  <b-col lg="4" xl="3">
    <b-card no-body class="bg-light w-100">
      <div class="position-absolute top-0 end-0 p-3">
        <a href="#" class="text-primary-hover" v-b-tooltip="'Edit profile'">
          <BIconPencilSquare class="mb-1" />
        </a>
      </div>

      <b-card-body class="p-3">
        <div class="text-center mb-3">
          <div class="avatar avatar-xl mb-2">
            <img
              class="avatar-img rounded-circle border border-2 border-white"
              :src="avatar1Img"
              alt=""
            />
          </div>
          <h6 class="mb-0">Jacqueline Miller</h6>
          <a href="#" class="text-reset text-primary-hover small">hello@gmail.com</a>
          <hr />
        </div>

        <ul class="nav nav-pills-primary-soft flex-column" id="nav-sidebar">
          <li v-for="(item, idx) in menuItems" :key="idx" class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: item.link?.name }"
              :class="{ active: currentRouteName === item.link?.name }"
            >
              <component :is="item.icon" class="fa-fw me-1 mb-1" />
              {{ item.label }}
            </router-link>
          </li>

          <li class="nav-item">
            <a class="nav-link text-danger bg-danger-soft-hover" href="#">
              <font-awesome-icon :icon="faSignOutAlt" class="fa-fw me-1" />
              Sign Out</a
            >
          </li>
        </ul>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script setup lang="ts">
import router from '@/router'

import { BIconPencilSquare } from 'bootstrap-icons-vue'
import avatar1Img from '@/assets/images/avatar/01.jpg'

import { getUserMenuItems } from '@/helpers/menu'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const currentRouteName = router.currentRoute.value.name

const menuItems = getUserMenuItems()
</script>

<template>
  <nav class="mt-4 d-flex justify-content-center" aria-label="navigation">
    <ul class="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
      <li class="page-item mb-0">
        <router-link class="page-link" to="#" tabIndex="{-1}">
          <font-awesome-icon :icon="faAngleLeft" />
        </router-link>
      </li>
      <li class="page-item mb-0">
        <router-link class="page-link" to="#"> 1 </router-link>
      </li>
      <li class="page-item mb-0 active">
        <router-link class="page-link" to="#"> 2 </router-link>
      </li>
      <li class="page-item mb-0">
        <router-link class="page-link" to="#"> .. </router-link>
      </li>
      <li class="page-item mb-0">
        <router-link class="page-link" to="#"> 6 </router-link>
      </li>
      <li class="page-item mb-0">
        <router-link class="page-link" to="#">
          <font-awesome-icon :icon="faAngleRight" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
</script>

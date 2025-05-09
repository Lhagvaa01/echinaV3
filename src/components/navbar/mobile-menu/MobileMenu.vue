<template>
  <div>
    <!-- <div>ss</div> -->
    <!-- Toggler for mobile -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible Menu -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="item in menuItems" :key="item.key">
          <router-link :to="item.link" class="nav-link fw-semibold text-dark px-3">
            {{ t(item.label) }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItemWithChildren from '@/components/navbar/mobile-menu/MobileMenuItemWithChildren.vue'
import MenuItem from '@/components/navbar/mobile-menu/MobileMenuItem.vue'
import { getAppMenuItems } from '@/helpers/menu'
import { faAngleDown, faEllipsis, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import {
  BIconCardText,
  BIconCloudDownloadFill,
  BIconLifePreserver,
  BIconPuzzleFill,
  BIconToggleOff
} from 'bootstrap-icons-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { bookingHomeMenuItems } from '@/assets/data/menu-items'
import router from '@/router'
import { buyLink, supportLink } from '@/helpers/constants'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

type AppMenuProps = {
  showExtraPages?: boolean
  startBookingMenu?: boolean
  menuClass?: string
}

defineProps<AppMenuProps>()

const menuItems = getAppMenuItems()

const currentRouteName = router.currentRoute.value.name
</script>
<style scoped>
.nav-link:hover {
  color: #0d6efd;
  text-decoration: underline;
}
</style>

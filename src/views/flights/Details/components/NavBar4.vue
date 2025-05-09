<template>
  <header class="navbar-light header-sticky" :class="{ 'header-sticky-on': isSticky }">
    <nav class="navbar navbar-expand-xl ">
      <b-container>
        <div class="d-flex justify-content-center align-items-center">
          <LogoBox />


          <MobileMenu />
        </div>
        <!-- <AppMenu v-else /> -->

        <div class="d-flex align-items-center gap-3">
          <li class="nav flex-row align-items-center list-unstyled ms-xl-auto dropdown">
            <!-- Current Language Button -->
            <button class="btn btn-link text-warning p-0 mb-0 " id="langSwitcher" data-bs-toggle="dropdown"
              aria-expanded="false" type="button">
              <img :src="getFlagUrl(currentLang.flag)" alt="lang" class="rounded-0"
                style="width: 46px; height: 26px; object-fit: cover" />
            </button>

            <!-- Dropdown menu -->
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="langSwitcher">
              <li v-for="(mode, idx) in langModes" :key="idx" class="dropdown-item d-flex align-items-center"
                @click="changeLang(mode)" :class="{ active: currentLang.theme === mode.theme }"
                style="cursor: pointer;">
                <img :src="getFlagUrl(mode.flag)" alt="lang" class="rounded-0"
                  style="width: 46px; height: 26px; object-fit: cover" />
                <span class="ms-2">{{ toSentenceCase(mode.theme) }}</span>

              </li>
            </ul>
          </li>


          <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
            <CustomDropDown is="li" custom-class="nav-item me-3">
              <button class="btn btn-link text-warning p-0 mb-0" id="bd-theme" aria-expanded="false"
                data-bs-toggle="dropdown" data-bs-display="static" type="button">
                <BIconCircleHalf class="fs-5" />
              </button>

              <ul class="dropdown-menu min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
                <template v-for="(mode, idx) in themeModes" :key="idx">
                  <li :class="{ 'mb-1': idx != themeModes.length - 1 }">
                    <button type="button" class="dropdown-item d-flex align-items-center"
                      :class="{ active: mode.theme === useLayout.theme }" @click="useLayout.setTheme(mode.theme)">
                      <component :is="mode.icon" />
                      &nbsp;&nbsp;{{ toSentenceCase(mode.theme) }}
                    </button>
                  </li>
                </template>
              </ul>
            </CustomDropDown>
          </ul>
        </div>
      </b-container>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import AppMenu from '@/components/navbar/AppMenu.vue'
import MobileMenu from '@/components/navbar/mobile-menu/MobileMenu.vue'
import CustomDropDown from '@/components/CustomDropDown.vue'
import LogoBox from '@/components/LogoBox.vue'

import type { LangState, LayoutState } from '@/types/layout'
import type { BSIconType } from '@/types'

import { BIconCircleHalf, BIconMoonStars, BIconSearch, BIconSun } from 'bootstrap-icons-vue'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

// import { toSentenceCase } from '@/helpers/change-casting'
import { useLayoutStore } from '@/stores/layout'

type ThemeModeType = {
  theme: LayoutState['theme']
  icon: BSIconType
}

const themeModes: ThemeModeType[] = [
  {
    icon: BIconSun,
    theme: 'light'
  },
  {
    icon: BIconMoonStars,
    theme: 'dark'
  },
  {
    icon: BIconCircleHalf,
    theme: 'auto'
  }
]

type LangModeType = {
  theme: LangState['theme']
  icon: BSIconType
  flag: any
}

const langModes: LangModeType[] = [
  {
    icon: BIconSun,
    theme: 'Mongolia',
    flag: 'MN'
  },
  {
    icon: BIconMoonStars,
    theme: 'English',
    flag: 'GB'
  },
  {
    icon: BIconCircleHalf,
    theme: 'China',
    flag: 'CN'
  }
]

const currentLang = ref(langModes[0]) // Default: Mongolia

function changeLang(mode: LangModeType) {
  currentLang.value = mode
  // Та энд хэлний тохиргоог хадгалах/өөрчлөх logic хийж болно (i18n гэх мэт)
}

function toSentenceCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function getFlagUrl(flag) {
  return `https://flagcdn.com/${flag.toLowerCase()}.svg`
}

const useLayout = useLayoutStore()

let isSticky = ref<boolean>(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY >= 400
  })
})

const isMobileMenu = computed(() => {
  return window.innerWidth <= 1200
})
</script>

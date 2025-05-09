<template>
    <header class="navbar-light header-sticky" :class="{ 'header-sticky-on': isSticky }">
        <nav class="navbar navbar-expand-xl ">
            <!-- <b-container :class="`${isMobileMenu ? 'me-0' : 'me-auto'}`"> -->
            <div class="d-flex w-100 justify-content-between justify-content-md-evenly mx-3 mx-md-0 align-items-center">

                <div class="d-flex justify-content-center align-items-center gap-0 gap-md-5">
                    <LogoBox />


                    <MobileMenu />
                </div>
                <!-- <AppMenu v-else /> -->

                <div class="d-flex gap-0 gap-md-5">
                    <div class="d-flex align-items-center gap-3">
                        <li class="nav flex-row align-items-center list-unstyled ms-xl-auto dropdown">
                            <!-- Current Language Button -->
                            <button class="btn btn-link text-warning p-0 mb-0 " id="langSwitcher"
                                data-bs-toggle="dropdown" aria-expanded="false" type="button">
                                <img :src="getFlagUrl(currentLang.flag)" alt="lang" class="rounded-0"
                                    style="width: 46px; height: 26px; object-fit: cover" />
                            </button>

                            <!-- Dropdown menu -->
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="langSwitcher">
                                <li v-for="(mode, idx) in langModes" :key="idx"
                                    class="dropdown-item d-flex align-items-center" @click="changeLang(mode)"
                                    :class="{ active: currentLang.theme === mode.theme }" style="cursor: pointer;">
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
                                                :class="{ active: mode.theme === useLayout.theme }"
                                                @click="useLayout.setTheme(mode.theme)">
                                                <component :is="mode.icon" />
                                                &nbsp;&nbsp;{{ toSentenceCase(mode.theme) }}
                                            </button>
                                        </li>
                                    </template>
                                </ul>
                            </CustomDropDown>
                        </ul>
                    </div>
                    <!-- </b-container> -->

                    <div class="text-black me-3 d-none d-md-block">
                        <div style="font-size: 14px;">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img"
                                class="component-iconify MuiBox-root css-1yn6y6h iconify iconify--fluent" width="1em"
                                height="1em" viewBox="0 0 20 20">
                                <path fill="currentColor"
                                    d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.991 5A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18q.536 0 1.056-.043a2.2 2.2 0 0 1 .005-1.005Q10.546 17 10 17c-1.735 0-3.257-.364-4.327-1.047C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1h9.514a1.95 1.95 0 0 1 .125-.772l.086-.228zm10.575.582l.283-.75c.258-.681 1.062-1.017 1.74-.728l.388.166c.473.202.864.568.947 1.06c.457 2.725-1.908 6.601-4.63 7.59c-.492.178-1.023.04-1.445-.246l-.346-.235a1.184 1.184 0 0 1-.204-1.79l.545-.607a1.07 1.07 0 0 1 1.034-.323l1.225.29q1.457-.91 1.562-2.56l-.878-.859a.94.94 0 0 1-.221-1.008">
                                </path>
                            </svg> ОПЕРАТОР
                        </div>
                        <a href="tel:76105555"
                            style="font-size: 20px; font-weight: bold; color: #00d2ff; text-decoration: none;">
                            7610 5555
                        </a>
                    </div>
                </div>
            </div>
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
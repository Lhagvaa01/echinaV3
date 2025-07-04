<template>
    <header :class="[
        'navbar-light header-sticky',
        isHome ? 'position-absolute bg-transparent w-100' : '',
        isSticky ? 'header-sticky-on' : ''
    ]">
        <nav class="navbar navbar-expand-xl ">
            <!-- <b-container :class="`${isMobileMenu ? 'me-0' : 'me-auto'}`"> -->
            <div
                class="d-flex w-100 justify-content-between justify-content-md-evenly mx-3 mx-md-0 align-items-center ">

                <div class="d-flex justify-content-center align-items-center gap-0 gap-md-5">
                    <LogoBox />


                    <MobileMenu />
                    <!-- {{ t('operator') }} -->
                </div>
                <!-- <AppMenu v-else /> -->

                <div class="d-flex gap-0 gap-md-5">
                    <div class="text-black me-3 d-none d-md-block">
                        <div style="font-size: 14px;">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img"
                                class="component-iconify MuiBox-root css-1yn6y6h iconify iconify--fluent" width="1em"
                                height="1em" viewBox="0 0 20 20">
                                <path fill="currentColor"
                                    d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.991 5A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18q.536 0 1.056-.043a2.2 2.2 0 0 1 .005-1.005Q10.546 17 10 17c-1.735 0-3.257-.364-4.327-1.047C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1h9.514a1.95 1.95 0 0 1 .125-.772l.086-.228zm10.575.582l.283-.75c.258-.681 1.062-1.017 1.74-.728l.388.166c.473.202.864.568.947 1.06c.457 2.725-1.908 6.601-4.63 7.59c-.492.178-1.023.04-1.445-.246l-.346-.235a1.184 1.184 0 0 1-.204-1.79l.545-.607a1.07 1.07 0 0 1 1.034-.323l1.225.29q1.457-.91 1.562-2.56l-.878-.859a.94.94 0 0 1-.221-1.008">
                                </path>
                            </svg> {{ t('txtHeaderOperator') }}
                        </div>
                        <a href="tel:76105555"
                            style="font-size: 20px; font-weight: bold; color: #00d2ff; text-decoration: none;">
                            7610 5555
                        </a>

                    </div>
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
                            <CustomDropDown is="li" custom-class="nav-item ms-3">
                                <a class="avatar avatar-xs p-0" href="#" role="button" data-bs-auto-close="outside"
                                    data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img class="avatar-img rounded-circle" :src="avatar1" alt="avatar" />
                                </a>
                                <!-- <p>{{ userLogin }}</p> -->
                                <ul v-if="userLogin != false"
                                    class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                                    aria-labelledby="profileDropdown">
                                    <li class="px-2 pb-2">
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img class="avatar-img rounded-circle shadow" :src="avatar1"
                                                    alt="avatar" />
                                            </div>
                                            <div>
                                                <a class="h6 mt-2 mt-sm-0" href="#">{{ userLogin?.lastName }}</a>
                                                <p class="small m-0">{{ userLogin?.email }}</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>

                                    <li>
                                        <router-link :to="{ name: 'user.bookings' }" class="dropdown-item">
                                            <BIconBookmarkCheck class="fa-fw me-2" />
                                            Миний захиалга
                                        </router-link>
                                    </li>
                                    <!-- <li>
                                        <router-link :to="{ name: 'user.settings' }" class="dropdown-item">
                                            <BIconGear class="fa-fw me-2" />
                                            Settings
                                        </router-link>
                                    </li> -->
                                    <!-- <li>
                                        <router-link :to="{ name: 'pages.help.center' }" class="dropdown-item">
                                            <BIconInfoCircle class="fa-fw me-2" />
                                            Help Center
                                        </router-link>
                                    </li> -->
                                    <li>
                                        <b-button class="dropdown-item bg-danger-soft-hover" @click="signOut">
                                            <BIconPower class="fa-fw me-2" />
                                            Гарах
                                        </b-button>
                                    </li>

                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>

                                    <!-- Dark mode options -->
                                    <li>
                                        <div
                                            class="nav-pills-primary-soft theme-icon-active d-flex justify-content-between align-items-center p-2 pb-0">
                                            <span>Mode:</span>

                                            <button v-for="mode in themeModes" :key="mode.theme" type="button"
                                                class="btn btn-link nav-link text-primary-hover mb-0 p-0"
                                                :class="{ active: mode.theme === useLayout.theme }"
                                                @click="useLayout.setTheme(mode.theme)" v-b-tooltip.hover
                                                :title="mode.theme">
                                                <component :is="mode.icon" />
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                                <ul v-else class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                                    aria-labelledby="profileDropdown">

                                    <li class="px-2 pb-2">
                                        <div class="d-flex align-items-center">
                                            <div class="avatar me-3">
                                                <img class="avatar-img rounded-circle shadow" :src="avatar1"
                                                    alt="avatar" />
                                            </div>
                                            <div>
                                                <a class="small text-black mt-2 mt-sm-0" href="#">Та нэвтэрч орно уу</a>
                                                <!-- <p class="small m-0">{{ userLogin }}</p> -->
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>


                                    <li>
                                        <router-link :to="{ name: 'auth.sign-in' }" class="nav-link  pb-2">
                                            <font-awesome-icon :icon="faUser" class="me-1" />
                                            Нэвтрэх
                                        </router-link>
                                    </li>

                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>

                                    <!-- Dark mode options -->
                                    <li>
                                        <div
                                            class="nav-pills-primary-soft theme-icon-active d-flex justify-content-between align-items-center p-2 pb-0">
                                            <span>Mode:</span>

                                            <button v-for="mode in themeModes" :key="mode.theme" type="button"
                                                class="btn btn-link nav-link text-primary-hover mb-0 p-0"
                                                :class="{ active: mode.theme === useLayout.theme }"
                                                @click="useLayout.setTheme(mode.theme)" v-b-tooltip.hover
                                                :title="mode.theme">
                                                <component :is="mode.icon" />
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </CustomDropDown>
                            <!-- <li v-else class="nav-item">
                                <router-link :to="{ name: 'auth.sign-in' }" class="nav-link small pb-2">
                                    <font-awesome-icon :icon="faUser" class="me-1" />
                                    Sign In or Login
                                </router-link>
                            </li> -->
                            <!-- <CustomDropDown v-if="userLogin == ''" is="li" custom-class="nav-item me-3">
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
</CustomDropDown> -->
                        </ul>
                    </div>
                    <!-- </b-container> -->


                    <div class="currency-banner">
                        <div class="d-grid text-center">
                            <div class="d-flex justify-content-center align-items-center gap-1">
                                <i class="fas fa-euro-sign icon" title="EUR ханш"></i>
                                <span class="value">
                                    {{ eurRate !== null ? eurRate.toLocaleString() + '₮' : 'Уншиж байна...' }}
                                </span>
                            </div>
                            <span class="date-text">{{ now }}</span>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import {
    BIconBell,
    BIconBookmarkCheck,
    BIconHeart,
    BIconGear,
    BIconInfoCircle,
    BIconPower,
    BIconLightningCharge
} from 'bootstrap-icons-vue'
import AppMenu from '@/components/navbar/AppMenu.vue'
import MobileMenu from '@/components/navbar/mobile-menu/MobileMenu.vue'
import CustomDropDown from '@/components/CustomDropDown.vue'
import LogoBox from '@/components/LogoBox.vue'

import type { LangState, LayoutState } from '@/types/layout'
import type { BSIconType } from '@/types'

import avatar1 from '@/assets/images/avatar/01.jpg'
import { BIconCircleHalf, BIconMoonStars, BIconSearch, BIconSun } from 'bootstrap-icons-vue'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import { faUser, faChevronDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useLayoutStore } from '@/stores/layout'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n()

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
    flag: string
    lang: string
}

const langModes: LangModeType[] = [
    {
        icon: BIconSun,
        theme: 'Mongolia',
        flag: 'MN',
        lang: 'mn'
    },
    {
        icon: BIconMoonStars,
        theme: 'English',
        flag: 'US',
        lang: 'en'
    },
    {
        icon: BIconCircleHalf,
        theme: 'China',
        flag: 'CN',
        lang: 'cn'
    }
]

const currentLang = ref(langModes[0]) // default lang = mn

function changeLang(mode: LangModeType) {
    currentLang.value = mode
    locale.value = mode.lang
    sessionStorage.setItem('lang', mode.lang)
}

function toSentenceCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function getFlagUrl(flag: string) {
    return `https://flagcdn.com/${flag.toLowerCase()}.svg`
}

const useLayout = useLayoutStore()
const isSticky = ref<boolean>(false)
const route = useRoute()
const isHome = computed(() => route.path === '/')


const userLogin = ref(JSON.parse(sessionStorage.getItem('user') || 'false'));

const signOut = () => {
    sessionStorage.removeItem('user');
    window.location.reload();
};

onMounted(() => {
    const savedLang = sessionStorage.getItem('lang')
    if (savedLang) {
        const found = langModes.find(lang => lang.lang === savedLang)
        if (found) {
            currentLang.value = found
            locale.value = savedLang
        }
    }

    window.addEventListener('scroll', () => {
        isSticky.value = window.scrollY >= 400
    })
})

const eurRate = ref<number | null>(null)
const now = ref('')
onMounted(async () => {
    const today = new Date()
    now.value = today.toISOString().split('T')[0]
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    const formatDate = (d: Date) => d.toISOString().split('T')[0]

    const startDate = formatDate(yesterday)
    const endDate = formatDate(today)

    try {
        const res = await fetch(`https://www.mongolbank.mn/mn/currency-rates/data?startDate=${startDate}&endDate=${endDate}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await res.json()
        const eur = data?.data?.[0]?.EUR
        eurRate.value = eur ? parseFloat(eur.replace(',', '')) : null
        sessionStorage.setItem("eur", eurRate.value.toString())
    } catch (error) {
        console.error('❌ Монголбанк ханш татахад алдаа:', error)
    }
})

const isMobileMenu = computed(() => {
    return window.innerWidth <= 1200
})
</script>

<style lang="css" scoped>
.currency-banner {
    display: inline-block;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 13px;
    color: #1f2937;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    max-width: 100%;
}

.icon {
    font-size: 14px;
    color: #2563eb;
}

.value {
    font-weight: 600;
    font-size: 14px;
    color: #111827;
}

.date-text {
    font-size: 12px;
    color: #6b7280;
    margin-top: 2px;
}

@media (max-width: 576px) {
    .currency-banner {
        padding: 4px 8px;
        font-size: 12px;
    }

    .icon {
        font-size: 12px;
    }

    .value {
        font-size: 13px;
    }

    .date-text {
        font-size: 11px;
    }
}
</style>

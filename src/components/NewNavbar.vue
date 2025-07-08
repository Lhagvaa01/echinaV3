<template>
    <div>
        <header class="main_header_arae">
            <!-- Top Bar -->
            <div class="topbar-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <ul class="topbar-list text-white">
                                <li>
                                    <a href="#!"><i class="fab fa-facebook"></i></a>
                                    <a href="#!"><i class="fab fa-twitter-square"></i></a>
                                    <a href="#!"><i class="fab fa-instagram"></i></a>
                                    <a href="#!"><i class="fab fa-linkedin"></i></a>
                                </li>
                                <li><a href="#!"><span>+011 234 567 89</span></a></li>
                                <li><a href="#!"><span>contact@domain.com</span></a></li>
                            </ul>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <ul class="topbar-others-options text-white">
                                <li><router-link :to="{ name: 'auth.sign-in' }">Login</router-link></li>
                                <li><router-link :to="{ name: 'auth.sign-up' }">Sign up</router-link></li>

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
                                            :class="{ active: currentLang.theme === mode.theme }"
                                            style="cursor: pointer;">
                                            <img :src="getFlagUrl(mode.flag)" alt="lang" class="rounded-0"
                                                style="width: 46px; height: 26px; object-fit: cover" />
                                            <span class="ms-2">{{ toSentenceCase(mode.theme) }}</span>

                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button class="btn btn-link text-warning p-0 mb-0" id="bd-theme"
                                        aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static"
                                        type="button">
                                        <BIconCircleHalf class="fs-5" />
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme">
                                        <li v-for="(mode, idx) in themeModes" :key="idx"
                                            class="dropdown-item d-flex align-items-center"
                                            @click="useLayout.setTheme(mode.theme)"
                                            :class="{ active: mode.theme === useLayout.theme }"
                                            style="cursor: pointer;">
                                            <component :is="mode.icon" />
                                            &nbsp;&nbsp;{{ toSentenceCase(mode.theme) }}
                                        </li>
                                    </ul>
                                </li>



                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Navbar Bar -->
            <div class="navbar-area" :class="{ 'is-sticky': isSticky }">
                <div class="main-responsive-nav bg-white ">
                    <div class="container bg-primary">
                        <div class="main-responsive-menu mean-container">
                            <nav class="navbar">
                                <div class="container">
                                    <div class="logo">
                                        <LogoBox />
                                    </div>
                                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbar-content">
                                        <div class="hamburger-toggle">
                                            <div class="hamburger">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="collapse navbar-collapse mean-nav" id="navbar-content">
                                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                                            <li class="nav-item" v-for="item in menuItems" :key="item.key">
                                                <router-link :to="item.link" class="nav-link active">
                                                    {{ t(item.label) }}
                                                </router-link>
                                            </li>
                                            <!-- <li class="nav-item">
                                                <router-link to="/contact" class="dropdown-item">Contact</router-link>
                                            </li> -->
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="main-navbar  text-white">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light ">

                            <LogoBox />

                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item" v-for="item in menuItems" :key="item.key">
                                        <router-link :to="item.link" class="nav-link active">
                                            {{ t(item.label) }}
                                        </router-link>
                                    </li>


                                </ul>
                                <div class="option-item">
                                    <div class="d-flex justify-content-center align-items-center gap-1 text-white">
                                        <i class="fas fa-euro-sign icon" title="EUR ханш"></i>
                                        <span class="value">
                                            {{ eurRate !== null ? eurRate.toLocaleString() + '₮' : 'Уншиж байна...'
                                            }}
                                        </span>
                                    </div>
                                    <span class="date-text text-white">{{ now }}</span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>
        </header>
    </div>
</template>
<script setup lang="ts">
import '@/assets/app.css'
import { ref, onMounted, onUnmounted } from 'vue'
import { getAppMenuItems } from '@/helpers/menu'
import { useI18n } from 'vue-i18n'
import type { LangState, LayoutState } from '@/types/layout'
import type { BSIconType } from '@/types'
import { BIconCircleHalf, BIconMoonStars, BIconSearch, BIconSun } from 'bootstrap-icons-vue'

import LogoBox from '@/components/LogoBox.vue'
import { useLayoutStore } from '@/stores/layout'
const { t, locale } = useI18n()

const useLayout = useLayoutStore()

const menuItems = getAppMenuItems()

const language = ref('English')
const currency = ref('USD')
const isSticky = ref(false)

const handleScroll = () => {
    isSticky.value = window.scrollY >= 200
}

const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.classList.contains('hamburger-toggle')) {
        const firstChild = target.children[0] as HTMLElement
        if (firstChild) {
            firstChild.classList.toggle('active')
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClick)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('click', handleClick)
})

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
</script>

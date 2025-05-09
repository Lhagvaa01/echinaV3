// src/i18n.ts
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import mn from '@/locales/mn.json'
import cn from '@/locales/cn.json'

const messages = { en, mn, cn }
const defaultLang = sessionStorage.getItem('lang') || 'mn'

const i18n = createI18n({
  legacy: false,
  locale: defaultLang,
  fallbackLocale: 'mn',
  messages
})

export default i18n

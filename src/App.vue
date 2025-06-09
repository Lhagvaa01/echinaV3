<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import { onMounted } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import { changeHTMLAttribute } from '@/helpers/layout'
import configureFakeBackend from '@/helpers/fake-backend'

const useLayout = useLayoutStore()

onMounted(() => {
  changeHTMLAttribute('data-bs-theme', useLayout.theme)
})

configureFakeBackend()
</script>
<style>
@font-face {
  font-family: 'Exo 2';
  src: url('/fonts/Exo2-Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Exo 2';
  src: url('/fonts/Exo2-Bold.ttf') format('truetype');
  font-weight: 700;
}

/* ... бусад weights-ийг хүсвэл нэм */
html,
body,
#app {
  font-family: 'Exo 2', Arial, sans-serif;
}
</style>

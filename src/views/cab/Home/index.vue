<template>
  <NavBar />

  <main>
    <Hero />

    <Vehicles />

    <WhyChooseUs />

    <ActionBox />

    <FAQs />

    <Client />
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar from '@/views/cab/Home/components/NavBar.vue'
import Hero from '@/views/cab/Home/components/Hero.vue'
import Vehicles from '@/views/cab/Home/components/Vehicles.vue'
import WhyChooseUs from '@/views/cab/Home/components/WhyChooseUs.vue'
import ActionBox from '@/views/cab/Home/components/ActionBox.vue'
import FAQs from '@/views/cab/Home/components/FAQs.vue'
import Client from '@/views/cab/Home/components/Client.vue'
import Footer from '@/views/cab/Home/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>

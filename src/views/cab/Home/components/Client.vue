<template>
  <section class="pt-0 py-md-5">
    <b-container>
      <b-row class="g-4 align-items-center">
        <b-col v-for="(client, idx) in clients" :key="idx" cols="6" sm="4" lg="3" xl="2">
          <img :src="client" class="grayscale px-3 px-sm-4" alt="clientLogo" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'

const clients = [client1, client2, client3, client4, client5, client6]
</script>

<template>
  <b-Modal
    hideFooter
    size="lg"
    title="Flight Details"
    class="fade"
    id="flightdetail"
    aria-hidden="true"
  >
    <FlightDetailTab />
  </b-Modal>
</template>
<script lang="ts" setup>
import FlightDetailTab from '@/views/flights/List/components/FlightDetailTab.vue'
</script>

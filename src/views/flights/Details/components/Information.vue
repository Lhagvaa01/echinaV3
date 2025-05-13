<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom px-4">
      <b-card-title tag="h3" class="mb-0">Important Information</b-card-title>
    </b-card-header>
    <b-card-body class="py-4">
      <div v-if="!isLoading" v-html="tariffRules" class="tariff-rules-content"></div>
      <div v-else class="text-muted text-center py-4">
        <b-spinner small type="grow" class="me-2" />
        Тарифийн мэдээлэл ачаалж байна...
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  tariffRules: {
    type: String,
    required: true
  }
})

const isLoading = computed(() => !props.tariffRules || props.tariffRules.trim().length === 0)
</script>

<style scoped>
.tariff-rules-content {
  max-height: 400px;
  overflow-y: auto;
  padding: 10px;
}
</style>

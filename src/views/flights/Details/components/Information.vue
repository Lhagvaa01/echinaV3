<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom px-4">
      <b-card-title tag="h3" class="mb-0">Important Information</b-card-title>
    </b-card-header>
    <b-card-body class="py-4">
      <div v-if="!isLoading" v-html="cleanTariffRules" class="tariff-rules-content"></div>
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

const cleanTariffRules = computed(() => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(props.tariffRules, 'text/html')

  const divs = Array.from(doc.querySelectorAll('div.farerules'))

  return divs.map(div => div.outerHTML).join('')
})

const isLoading = computed(() => !props.tariffRules || props.tariffRules.trim().length === 0)
</script>

<style scoped>
.tariff-rules-content {
  max-height: 500px;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: #fdfdfd;
  border-radius: 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  line-height: 1.8;
  color: #212121;
}

.tariff-rules-content h2 {
  font-size: 17px;
  font-weight: 600;
  color: #3949AB;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  border-left: 4px solid #3949AB;
  padding-left: 10px;
}

.tariff-rules-content p {
  margin-bottom: 1rem;
  font-size: 14px;
  color: #444;
}

.tariff-rules-content pre {
  display: none;
  /* бүрэн устгана */
}

.tariff-rules-content h2 {
  text-transform: none;
  /* эсвэл capitalize */
}
</style>

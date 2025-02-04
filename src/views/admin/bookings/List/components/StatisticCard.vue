<template>
  <b-card no-body class="shadow p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="me-2">
        <span>{{ item.title }}</span>
        <h3 class="mb-0 mt-2">{{ item.stat }}</h3>
      </div>
      <div
        :class="`icon-lg rounded-circle flex-shrink-0 bg-${item.variant} bg-opacity-10 text-${item.variant} mb-0 flex-centered`"
      >
        <component :is="item.icon" />
      </div>
    </div>
    <b-progress
      :variant="item.variant"
      :class="`progress-xs mb-2 bg-${item.variant} bg-opacity-10`"
    >
      <b-progress-bar
        :variant="item.variant"
        :class="`bg-${item.variant}`"
        :value="item.progress"
      />
    </b-progress>
    <span>
      <span :class="`text-${item.variant}`">{{ item.text }}</span
      >&nbsp;{{ item.subText }}
    </span>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { StatisticType } from '@/views/admin/bookings/List/types'

defineProps({
  item: {
    type: Object as PropType<StatisticType>,
    required: true
  }
})
</script>

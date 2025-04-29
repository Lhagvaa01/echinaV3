<template>
  <div class="circle-progress">
    <svg viewBox="0 0 36 36" class="circular-chart">
      <path class="bg" d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path class="bar" :stroke-dasharray="`${(step / total) * 100}, 100`" d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831" />
      <!-- <text x="10" y="-14" class="percentage">{{ step < 1 ? '✓' : `${step}/${total}` }}</text> -->
      <text v-if="index > step" x="14" y="-14" class="percentage">
        ✓ </text>
      <text v-else x="10" y="-14" class="percentage">
        {{ `${step}/${total}` }} </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  step: number
  total: number
  index: number
}>()
</script>

<style scoped>
.circle-progress {
  width: 100px;
  height: 100px;
  margin: auto;
}

.circular-chart {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.bg {
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 3.8;
}

.bar {
  fill: none;
  stroke: #5143d9;
  stroke-width: 3.8;
  stroke-linecap: round;
  transition: stroke-dasharray 0.5s ease;
}

.percentage {
  fill: #5143d9;
  font-size: 0.7em;
  transform: rotate(90deg);
  z-index: 2000;
}
</style>
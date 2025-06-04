<template>
  <nav class="d-flex justify-content-center" aria-label="navigation">
    <ul class="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
      <li class="page-item mb-0" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" tabindex="-1" @click.prevent="changePage(currentPage - 1)">
          <font-awesome-icon :icon="faAngleLeft" />
        </a>
      </li>

      <li v-for="page in pagesToShow" :key="page" class="page-item mb-0"
        :class="{ active: currentPage === page, disabled: page === '...' }">
        <a class="page-link" href="#" @click.prevent="typeof page === 'number' && changePage(page)">
          {{ page }}
        </a>
      </li>

      <li class="page-item mb-0" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">
          <font-awesome-icon :icon="faAngleRight" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  currentPage: number,
  totalPages: number
}>()
const emit = defineEmits(['update:currentPage'])

// Хуудасны бүлэг харуулах logic (1 ... 3 4 5 ... 10)
const pagesToShow = computed(() => {
  const pages: (number | string)[] = []
  const { currentPage, totalPages } = props
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    if (currentPage > 3) pages.push(1)
    if (currentPage > 4) pages.push('...')
    let start = Math.max(2, currentPage - 1)
    let end = Math.min(totalPages - 1, currentPage + 1)
    for (let i = start; i <= end; i++) pages.push(i)
    if (currentPage < totalPages - 3) pages.push('...')
    if (currentPage < totalPages - 1) pages.push(totalPages)
  }
  return pages
})

function changePage(page: number) {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return
  emit('update:currentPage', page);

  window.scrollTo({ top: 400, behavior: "smooth" });
}
</script>

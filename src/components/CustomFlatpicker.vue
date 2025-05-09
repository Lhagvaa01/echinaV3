<template>
  <label class="form-label" :class="labelClass" v-if="label">{{ label }}</label>
  <input ref="inputRef" :type="type ?? 'text'" :id="id" :placeholder="placeholder" :value="modelValue"
    :class="customClass" class="form-control" @input="updateValue" v-bind="$attrs" />
</template>

<script setup lang="ts">
import flatpickr from 'flatpickr'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import type { InputType } from 'bootstrap-vue-next'

type FlatPickerProps = {
  label?: string
  type?: InputType
  customClass?: string
  labelClass?: string
  placeholder?: string
  id: string
  modelValue?: string
  options?: object
}

const props = defineProps<FlatPickerProps>()
const emit = defineEmits(['update:modelValue'])

const inputRef = ref<HTMLInputElement | null>(null)
let fpInstance: flatpickr.Instance | null = null

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

// Flatpickr-ийг үүсгэх функц
const initFlatpickr = () => {
  if (inputRef.value) {
    if (fpInstance) {
      fpInstance.destroy()
    }
    fpInstance = flatpickr(inputRef.value, {
      ...props.options,
      defaultDate: props.modelValue,
      onChange: function (selectedDates, dateStr) {
        emit('update:modelValue', dateStr)
      }
    })
  }
}

onMounted(() => {
  initFlatpickr()
})

// props.options болон modelValue өөрчлөгдөхөд дахин инициализ хийдэг
watch(() => props.options, () => {
  initFlatpickr()
}, { deep: true })

watch(() => props.modelValue, (newVal) => {
  if (inputRef.value && inputRef.value.value !== newVal) {
    inputRef.value.value = newVal || ''
  }
})

onBeforeUnmount(() => {
  if (fpInstance) {
    fpInstance.destroy()
  }
})
</script>

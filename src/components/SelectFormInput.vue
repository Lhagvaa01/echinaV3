<template>
  <div>
    <label class="form-label" :class="labelClass" v-if="label">{{ label }}</label>
    <select :id="id" class="js-choice form-select" :class="customClass" :multiple="multiple" :value="modelValue"
      @change="updateValue" v-bind="$attrs">
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref, nextTick, onBeforeUnmount } from 'vue'
import Choices from 'choices.js'

// -----------------
// Props
// -----------------
type SelectFormInput = {
  label?: string
  type?: string
  placeholder?: string
  customClass?: string
  labelClass?: string
  id: string
  multiple?: boolean
  modelValue?: string | string[]
  options?: Array<{ value: string; text: string }>
  choiceOptions?: object
}

const props = defineProps<SelectFormInput>()
const emit = defineEmits(['update:modelValue'])

let choicesInstance: any = null

// -----------------
// Emit selected value
// -----------------
const updateValue = (e: Event) => {
  const target = e.target as HTMLSelectElement
  const value = props.multiple
    ? Array.from(target.selectedOptions).map(opt => opt.value)
    : target.value
  emit('update:modelValue', value)
}

// -----------------
// Init Choices.js
// -----------------
const initChoices = async () => {
  await nextTick();
  const ele = document.getElementById(props.id);

  if (ele) {
    // Хуучин instance устгах, DOM-оос extra elements-ийг арилгах
    if (choicesInstance) {
      choicesInstance.destroy();
      choicesInstance = null;

      // Хэрэв Choices нэмсэн wrapper үлдсэн бол select-ээ дахин replace хийх
      if (ele.parentElement && ele.parentElement.classList.contains('choices')) {
        // .choices wrapper-аас select-ийг гаргаж, wrapper-ийг устгах
        ele.parentElement.replaceWith(ele);
      }
      // Энэ үед select бол жирийн select болж хувирна
    }

    choicesInstance = new Choices(ele, {
      ...props.choiceOptions,
      placeholder: true,
      placeholderValue: props.placeholder || 'Сонгоно уу',
      allowHTML: true,
      shouldSort: false,
    });

    // set initial value
    if (props.modelValue) {
      choicesInstance.setChoiceByValue(props.modelValue);
    }
  }
};

// -----------------
// Watch for changes
// -----------------
watch(
  () => props.options,
  () => {
    initChoices()
  },
  { deep: true, immediate: true }
)

watch(
  () => props.modelValue,
  (val) => {
    if (choicesInstance) {
      choicesInstance.setChoiceByValue(val)
    }
  }
)

// -----------------
// Clean up
// -----------------
onBeforeUnmount(() => {
  if (choicesInstance) choicesInstance.destroy()
})
</script>

<style scoped>
/* Scoped style if needed */
</style>

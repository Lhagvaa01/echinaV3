<template>
  <label class="form-label" :class="labelClass" v-if="label">{{ label }}</label>
  <b-form-select :id="id" :options="options" class="js-choice" :class="customClass" :multiple="multiple"
    @change="updateValue" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Choices from 'choices.js'

type SelectFormInput = {
  label?: string
  type?: string
  placeholder?: string
  customClass?: string
  labelClass?: string
  id: string
  multiple?: boolean
  modelValue?: string
  options?: any
  choiceOptions?: object
}

const props = defineProps<SelectFormInput>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

// onMounted(() => {
//   const ele = document.getElementById(props.id)

//   if (ele) {
//     new Choices(ele, {
//       ...props.choiceOptions,
//       placeholder: true,
//       placeholderValue: 'Type and hit enter',
//       allowHTML: true,
//       shouldSort: false
//     })
//   }
// })

onMounted(() => {
  const ele = document.getElementById(props.id);

  if (ele) {
    new Choices(ele, {
      ...props.choiceOptions,
      placeholder: true,
      placeholderValue: "Type and hit enter",
      allowHTML: true,
      shouldSort: false,
      choices: props.options, // Pass grouped options directly
    });
  }
});
</script>

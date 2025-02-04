<template>
    <label class="form-label" :class="labelClass" v-if="label">{{ label }}</label>
    <select :id="id" class="js-choice" :class="customClass" @change="updateValue">
        <!-- Сонголтууд автоматаар нэмэгдэнэ -->
    </select>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Choices from "choices.js";

// Props-ийн төрлийг тодорхойлох
type AirportsFormInput = {
    label?: string;
    customClass?: string;
    labelClass?: string;
    id: string;
    multiple?: boolean;
    modelValue?: string | string[];
    options?: Array<{ label: string; choices: Array<{ value: string; label: string }> }>;
    choiceOptions?: object;
};

// Props болон Emits тодорхойлох
const props = defineProps<AirportsFormInput>();
const emit = defineEmits(["update:modelValue"]);

// Сонголт өөрчлөгдөх үед утга шинэчлэх функц
const updateValue = (e: Event) => {
    emit("update:modelValue", (e.target as HTMLSelectElement).value);
};

// `options`-ийг энгийн массив болгон хөрвүүлэх функц
const normalizeOptions = (
    groupedOptions: Array<{ label: string; choices: Array<{ value: string; label: string }> }>
) => {
    return groupedOptions.flatMap((group) =>
        group.choices.map((choice) => ({
            value: choice.value,
            label: choice.label,
        }))
    );
};

// Компонент mount үед `Choices.js`-ийг тохируулах
onMounted(() => {
    const ele = document.getElementById(props.id);

    if (ele && !ele.classList.contains('choices__input')) {
        const flatOptions = normalizeOptions(props.options || []);

        new Choices(ele, {
            ...props.choiceOptions,
            placeholder: true,
            placeholderValue: "Select an option",
            allowHTML: true,
            shouldSort: false,
            choices: flatOptions,
        });

        ele.addEventListener("change", (event: Event) => {
            const target = event.target as HTMLSelectElement;
            const selectedValues = Array.from(target.selectedOptions).map((opt) => opt.value);
            emit("update:modelValue", props.multiple ? selectedValues : selectedValues[0]);
        });
    } else {
        console.warn(`Choices.js is already initialized on element with id ${props.id}`);
    }
});

</script>

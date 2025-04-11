<template>
    <label class="form-label" :class="labelClass" v-if="label">{{ label }}</label>
    <select :id="id" class="js-choice form-select" :class="customClass" v-bind:multiple="multiple"
        @change="updateValue"></select>
</template>

<script setup lang="ts">
import { onMounted, watch, onBeforeUnmount, nextTick } from "vue";
import Choices from "choices.js";

// Сонирхсон grouped option төрлийг тодорхойлох
type GroupedOption = {
    label: string;
    choices: Array<{ value: string; label: string }>;
};

type AirportsFormInput = {
    label?: string;
    customClass?: string;
    labelClass?: string;
    id: string;
    multiple?: boolean;
    modelValue?: string | string[];
    options?: GroupedOption[];
    choiceOptions?: object;
};

const props = defineProps<AirportsFormInput>();
const emit = defineEmits(["update:modelValue"]);

let choicesInstance: Choices | null = null;

// `options`-ийг энгийн массив болгон хөрвүүлэх
const normalizeOptions = (grouped: GroupedOption[]) => {
    return grouped.flatMap(group =>
        group.choices.map(choice => ({
            value: choice.value,
            label: choice.label,
        }))
    );
};

// Сонгогдсон утгыг хадгалах
const saveSelectedValue = (value: string | string[]) => {
    if (props.multiple) {
        localStorage.setItem(props.id, JSON.stringify(value));
    } else {
        localStorage.setItem(props.id, value as string);
    }
};

// Хадгалагдсан утга авах
const getSavedValue = (): string | string[] => {
    const saved = localStorage.getItem(props.id);
    return props.multiple ? (saved ? JSON.parse(saved) : []) : saved || "";
};

// Сонголт өөрчлөгдөх үед утга шинэчлэх
const updateValue = (e: Event) => {
    const selectEl = e.target as HTMLSelectElement;
    const selected = Array.from(selectEl.selectedOptions).map(opt => opt.value);
    const value = props.multiple ? selected : selected[0];
    emit("update:modelValue", value);
    saveSelectedValue(value);
};

// `Choices.js`-ийг инициаллах
const initChoices = async () => {
    await nextTick();
    const ele = document.getElementById(props.id) as HTMLSelectElement | null;

    if (!ele) return;

    // Өмнөх instance-г устгах
    if (choicesInstance) {
        choicesInstance.destroy();
        choicesInstance = null;
    }

    const flatOptions = normalizeOptions(props.options || []);

    choicesInstance = new Choices(ele, {
        ...props.choiceOptions,
        placeholder: true,
        placeholderValue: "Select an option",
        allowHTML: true,
        shouldSort: false,
        choices: flatOptions,
    });

    const savedValue = getSavedValue();
    if (savedValue) {
        choicesInstance.setValue(props.multiple ? (savedValue as string[]) : [savedValue as string]);
    }
};

onMounted(() => {
    initChoices(); // Mount-тай дуудах
});

// `options` өөрчлөгдөхөд `Choices.js`-г дахин тохируулах
watch(
    () => props.options,
    () => {
        initChoices();
    },
    { deep: true }
);

// `modelValue` өөрчлөгдөхөд `Choices.js`-д шинэ утга оруулах
watch(
    () => props.modelValue,
    (newVal) => {
        if (choicesInstance && newVal) {
            choicesInstance.setValue(props.multiple ? (newVal as string[]) : [newVal as string]);
        }
    }
);

// Компонент устах үед `Choices.js`-ийг устгах
onBeforeUnmount(() => {
    if (choicesInstance) {
        choicesInstance.destroy();
        choicesInstance = null;
    }
});
</script>

<template>
    <label class="form-label" :class="labelClass" v-if="label">{{ label }}</label>
    <select :id="id" class="js-choice" :class="customClass" @change="updateValue">
        <!-- Сонголтууд автоматаар нэмэгдэнэ -->
    </select>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
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



const saveSelectedValue = (value: string | string[]) => {
    if (props.multiple) {
        localStorage.setItem(props.id, JSON.stringify(value));
    } else {
        localStorage.setItem(props.id, value as string);
    }
};

// Сонгогдсон утгыг авах
const getSavedValue = (): string | string[] => {
    const savedValue = localStorage.getItem(props.id);
    if (props.multiple) {
        return savedValue ? JSON.parse(savedValue) : [];
    } else {
        return savedValue || "";
    }
};

// Сонголт өөрчлөгдөх үед утга шинэчлэх функц
const updateValue = (e: Event) => {
    const value = (e.target as HTMLSelectElement).value;
    emit("update:modelValue", value);
    saveSelectedValue(value);
};

// Компонент mount үед `Choices.js`-ийг тохируулах
onMounted(() => {
    const ele = document.getElementById(props.id);

    if (ele && !ele.classList.contains('choices__input')) {
        const flatOptions = normalizeOptions(props.options || []);

        const choices = new Choices(ele, {
            ...props.choiceOptions,
            placeholder: true,
            placeholderValue: "Select an option",
            allowHTML: true,
            shouldSort: false,
            choices: flatOptions,
        });

        // Хадгалагдсан утгыг авах
        const savedValue = getSavedValue();
        if (savedValue) {
            if (props.multiple) {
                choices.setValue(savedValue as string[]);
            } else {
                choices.setValue([savedValue as string]);
            }
        }

        ele.addEventListener("change", (event: Event) => {
            const target = event.target as HTMLSelectElement;
            const selectedValues = Array.from(target.selectedOptions).map((opt) => opt.value);
            const value = props.multiple ? selectedValues : selectedValues[0];
            emit("update:modelValue", value);
            saveSelectedValue(value);
        });
    } else {
        console.warn(`Choices.js is already initialized on element with id ${props.id}`);
    }
});

// `modelValue` өөрчлөгдөхөд хадгалагдсан утгыг шинэчлэх
watch(() => props.modelValue, (newValue) => {
    saveSelectedValue(newValue || "");
});

</script>

<template>
    <transition name="fade">
        <div v-if="show"
            class="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-4 rounded-lg shadow-md">
            <p class="text-lg">{{ message }}</p>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    message: String,
    duration: { type: Number, default: 3000 },
});

const show = ref(false);

onMounted(() => {
    console.log("sssss")
    show.value = true;
    setTimeout(() => {
        show.value = false;
    }, props.duration);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
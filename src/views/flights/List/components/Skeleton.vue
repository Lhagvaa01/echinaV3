<template>
    <div class="skeleton">
        <div class="skeleton__image"></div>
        <div class="skeleton__content">
            <div class="skeleton__title"></div>
            <div class="skeleton__text"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
// SkeletonLoader логик
// console.log("Loading")
</script>

<style scoped>
.skeleton {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skeleton__image {
    width: 100%;
    height: 150px;
    background: #e0e0e0;
    border-radius: 4px;
    margin-bottom: 1rem;
}

.skeleton__content {
    width: 100%;
}

.skeleton__title {
    width: 60%;
    height: 20px;
    background: #e0e0e0;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.skeleton__text {
    width: 100%;
    height: 16px;
    background: #e0e0e0;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.skeleton__text:last-child {
    margin-bottom: 0;
}

@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }

    100% {
        background-position: 200% 0;
    }
}

.skeleton__image,
.skeleton__title,
.skeleton__text {
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
}
</style>
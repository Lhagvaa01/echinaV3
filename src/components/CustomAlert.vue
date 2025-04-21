<template>
    <div class="custom-alert z-50 top-50" :class="`alert-${severity}`">
        <span class="alert-text">{{ message }}</span>
    </div>
</template>

<script setup>
defineProps({
    severity: {
        type: String,
        default: 'info', // 'success', 'warning', 'error', 'info'
    },
    message: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.custom-alert {
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: white;
    margin: 10px 0;
}

/* Өнгөний төрөл */
.alert-success {
    background-color: #4caf50;
    /* Ногоон */
}

.alert-error {
    background-color: #f44336;
    /* Улаан */
}

.alert-warning {
    background-color: #ff9800;
    /* Шар-улбар */
}

.alert-info {
    background-color: #2196f3;
    /* Цэнхэр */
}

.alert-text {
    margin-left: 8px;
}
</style>
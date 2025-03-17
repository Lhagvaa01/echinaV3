<template>
    <b-col md="6" xl="12" :style="{ paddingBottom: '70px' }">
        <b-card class="border p-1">
            <b-card-title tag="h5" text="TariffRules" class="mb-3" />


        </b-card>
    </b-col>
    <b-modal class="fade" size="lg" v-model="showModal" title-tag="h5" title="TariffRules" hide-footer>
        <div v-html="tariffRules" class="tariff-rules-content"></div>
    </b-modal>

</template>
<script setup lang="ts">
import { BIconEyeFill } from 'bootstrap-icons-vue'
import { ref } from 'vue'
import element9 from '@/assets/images/element/09.svg'
import { currency } from '@/helpers/constants'

const showModal = ref(true)

const props = defineProps({
    tariffRules: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
/* Илүү сайн харагдахаар CSS тохиргоо хийж болно */
.tariff-rules-content {
    max-height: 400px;
    overflow-y: auto;
    padding: 10px;
}
</style>
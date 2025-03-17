<template>
    <b-row class="d-flex my-4">
        <b-col v-for="(offer, Mainindex) in filteredServices" :key="Mainindex" md="5" lg="5">
            <b-card no-body :class="selectedIndex === Mainindex ? 'border border-primary' : 'border'">
                <b-card-header class="d-flex justify-content-between align-items-center border-bottom p-4">
                    <div>
                        <h6 class="mb-0 text-primary ">{{ offer.Name || 'Professional Plan' }}</h6>
                        <div class="hstack gap-2">
                            <span class="h3 plan-price mb-0">{{ currency }}{{ offer.Price || 59 }}</span>
                            <span class="h6 fw-light mb-0">/ per user</span>
                        </div>
                    </div>
                    <!-- <span class="icon-lg bg-primary bg-opacity-10 rounded-circle text-primary">
                        <font-awesome-icon :icon="faRocket" />
                    </span> -->
                </b-card-header>

                <b-card-body class="p-4">
                    <ul class="list-unstyled mb-0">
                        <li v-if="offer.Text">
                            <BIconCheckCircle class="text-success me-1 mb-1" />
                            {{ offer.Text }}
                        </li>
                        <!-- <li v-for="(feature, index) in offer.features" :key="index" class="mb-2">
                            <BIconCheckCircle v-if="feature.available" class="text-success me-1 mb-1" />
                            <BIconXCircle v-else class="text-danger me-1 mb-1" />
                            {{ feature.text }}
                        </li> -->
                    </ul>
                </b-card-body>

                <div class="card-footer p-4 pt-0">
                    <button type="button" class="btn w-100 mb-0"
                        :class="selectedIndex === Mainindex ? 'btn-primary' : 'btn-secondary-soft'"
                        @click="selectCard($event, Mainindex)">
                        Сонгох
                    </button>
                </div>
            </b-card>
        </b-col>
    </b-row>



</template>

<script lang="ts" setup>
import { currency } from '@/helpers/constants'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import {
    BIconCheckCircle,
    BIconLightningChargeFill,
    BIconSendFill,
    BIconXCircle
} from 'bootstrap-icons-vue'
import { ref, computed } from 'vue'
import { useOptionStore } from '@/stores/optionStore'

const selectedIndex = ref<number>(0); // ref нь төрөл зааж болно

const selectCard = (event: { preventDefault: () => void }, index: number) => {
    event.preventDefault(); // Refresh-ийг зогсооно
    selectedIndex.value = index;
};


const optionStore = useOptionStore();
const storedData = sessionStorage.getItem("PreBooking") ? JSON.parse(sessionStorage.getItem("PreBooking") || "") : null;

const infos = computed(() => {
    if (optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult) {
        return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult || [];
    } else {
        return storedData?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult || [];
    }

});

// Services массив байхгүй бол хоосон массив буцаана.
const filteredServices = computed(() => {
    return Array.isArray(infos.value?.Services?.ServiceInfo)
        ? infos.value.Services.ServiceInfo
        : [];
});
</script>
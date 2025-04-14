<template>
    <!-- <div v-if="Array.isArray(StoreflightInfos) && StoreflightInfos[index]"> -->
    <div>

        <div v-if="infos && infos.OfferCode && props.offerCode != infos.OfferCode">
            <SkeletonLoader v-for="n in 3" :key="n" />
        </div>
        <div v-else>
            <!-- {{ infos.FullPrice }} -->
            <!-- <OptionList v-for="(option, idx) in getAllSegments()" :key="idx" :option="option"
                :price="infos.FullPrice" /> -->
            <OptionList :option="infos" :price="infos.FullPrice" />
        </div>
        <!-- <div v-for="(info, idx) in infos" :key="idx">
                {{ info.Segments?.OfferSegment?.FlightNum || 'N/A' }}
            </div> -->

        <!-- <OptionList v-for="(cab, idx) in cabsLists" :key="idx" :cab="cab" /> -->
    </div>
    <!-- </div> -->
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, defineProps } from 'vue'
import OptionList from './OptionList.vue'
import SkeletonLoader from './Skeleton.vue'
import { useOptionStore } from '@/stores/optionStore'

const optionStore = useOptionStore();

const props = defineProps({
    offerCode: { type: String, required: true },
    searchGuid: { type: String, required: true }
})

const loading = ref(true)
// const optionInfos = ref<any>(null)

// Fetch flight options from API
// async function fetchOptions(offerCode: string, searchGuid: string) {
//     try {
//         loading.value = true
//         const response = await fetch(`https://api.airkacc.mn/api/prebooking/mn/?offerCode=${offerCode}&searchGuid=${searchGuid}`)
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

//         const data = await response.json()
//         optionInfos.value = data
//     } catch (error) {
//         console.error('Error fetching options:', error)
//     } finally {
//         loading.value = false
//     }
// }

// Computed properties
const infos = computed(() => {
    return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult || [];
});


const getFlightData = () => {
    return infos.value || { Offers: { OfferInfo: [] } };
};

// const getAllSegments = () => {
//     const data = getFlightData();
//     return data.Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
// };

// const infos = computed(() => optionStore.optionInfos.value?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult?.Offers?.OfferInfo || [])

// onMounted(() => {
//     fetchOptions(props.offerCode, props.searchGuid)
// })
</script>
<template>
  <NavBar4 />

  <main>
    <section>
      <b-container class="position-relative" data-sticky-container>
        <b-row class="g-4">
          <b-col xl="9">
            <div class="vstack gap-4">
              <div class="d-flex align-items-center">
                <h1 class="display-4 mb-0">
                  <font-awesome-icon :icon="faPlane" class="rtl-flip" />
                </h1>
                <div class="ms-3">
                  <ul class="list-inline mb-2">
                    <li class="list-inline-item me-2">
                      <h3 class="mb-0">{{ getAllSegments()[0].Departure?.City }}({{ getAllSegments()[0].Departure?.Iata
                        }})</h3>
                    </li>
                    <li class="list-inline-item me-2">
                      <h3 class="mb-0">
                        <BIconArrowRight class="mb-1 mx-1" />
                      </h3>
                    </li>
                    <li class="list-inline-item me-0">
                      <h3 class="mb-0">{{ getAllSegments()[getAllSegments().length - 1].Arrival?.City }}({{
                        getAllSegments()[getAllSegments().length - 1].Arrival?.Iata
                      }})</h3>
                    </li>
                  </ul>
                  <ul class="nav nav-divider h6 fw-normal text-body mb-0">
                    <li class="nav-item">{{ getFirstDepartureTime() }}</li>
                    <li class="nav-item">{{ getTotalStops() }} Зогсолт</li>
                    <li class="nav-item">{{ getTotalFlightTime() }}</li>
                  </ul>
                </div>
              </div>
              <BaggageFareRules />
              <Information :tariffRules="TariffRules" />
              <TravelerDetails />
              <!-- <div v-if="showTariffRules">
                <TariffRulesModal :tariffRules="TariffRules" />
              </div> -->
            </div>
          </b-col>

          <aside class="col-xl-3">
            <CustomStickyElement data-sticky data-margin-top="80" data-sticky-for="1199">
              <b-row class="g-4">
                <FareSummary />
                <OfferDiscount />
                <CancelPolicy />
              </b-row>
            </CustomStickyElement>
          </aside>
        </b-row>
      </b-container>
    </section>
  </main>

  <Footer />

  <BackToTop />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { BIconArrowRight } from 'bootstrap-icons-vue'

import NavBar4 from '@/views/flights/Details/components/NavBar4.vue'
import BaggageFareRules from '@/views/flights/Details/components/BaggageFareRules.vue'
import Information from '@/views/flights/Details/components/Information.vue'
import TravelerDetails from '@/views/flights/Details/components/TravelerDetails.vue'
import FareSummary from '@/views/flights/Details/components/FareSummary.vue'
import OfferDiscount from '@/views/flights/Details/components/OfferDiscount.vue'
import CancelPolicy from '@/views/flights/Details/components/CancelPolicy.vue'
import TariffRulesModal from './components/TariffRulesModal.vue'
import Footer from '@/views/flights/Details/components/Footer.vue'
import BackToTop from '@/components/BackToTop.vue'
import CustomStickyElement from '@/components/CustomStickyElement.vue'
import ServiceInfo from './components/ServiceInfo.vue'
import { useOptionStore } from '@/stores/optionStore'


const optionStore = useOptionStore();
const storedData = sessionStorage.getItem("PreBooking") ? JSON.parse(sessionStorage.getItem("PreBooking") || "") : null;

const infos = computed(() => {
  if (optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult) {
    return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult || [];
  } else {
    return storedData?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult || [];
  }

});



onMounted(() => {
  window.scrollTo(0, 0); // Хуудсыг дээд талд нь харуулах

  // Хэрэв sessionStorage-д өгөгдөл байгаа бол optionStore-т хадгалах
  if (storedData) {
    optionStore.optionInfos = storedData; // `storedData`-г хадгалах
  } else {
    console.log("No PreBooking data found in sessionStorage");
  }

  // `infos`-ийн OfferCode болон SearchGuid-ийг fetchOptions-оор дамжуулж дуудна
  const offerCode = infos.value.OfferCode;
  const searchGuid = infos.value.SearchGuid;

  // Хэрэв эдгээр утгууд байхгүй бол fetchOptions-ийг дуудахын өмнө шалгана
  if (offerCode && searchGuid) {
    fetchOptions(offerCode, searchGuid);
  } else {
    console.log("Missing OfferCode or SearchGuid");
  }

  // `OfferInfo` байгаа эсэхийг шалгах
  if (infos.value && infos.value.OfferInfo) {
    // OfferInfo-д хандаж болно
    console.log(infos.value.OfferInfo);
  } else {
    console.log("OfferInfo is not available");
  }
});




const getOptionPrice = () => {
  return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult?.TariffInfo || [];
};


const getFlightData = () => {
  return infos.value || { Offers: { OfferInfo: [] } };
};

const getAllSegments = (): any[] => {
  const data = getFlightData();
  const offerInfo = data.Offers?.OfferInfo || [];

  // OfferInfo массив биш бол шууд OfferSegment-ийг буцаах
  if (!Array.isArray(offerInfo)) {
    let segment = offerInfo?.Segments?.OfferSegment;
    if (!Array.isArray(segment)) {
      segment = segment ? [segment] : []

      return segment;
    }
    return segment;
  }

  // OfferInfo массив бол flatMap ашиглан сегментүүдийг цуглуулах
  return offerInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments?.OfferSegment || []);
};



const getTotalStops = () => getAllSegments().length - 1;
const getFirstDepartureTime = () => getAllSegments()[0]?.Departure?.Date?.split(" ")[0] || "N/A";
const getTotalFlightTime = () => {
  const totalMinutes = getAllSegments().reduce(
    (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
    0
  );

  const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
  const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

  return `${hours} цаг ${minutes} мин`; // Цаг, минутын форматаар буцаана
};



// let TariffRules = "";
let TariffRules = ref("")
async function fetchOptions(offerCode: string, searchGuid: string) {

  console.log(`Fetching for: ${offerCode}, ${searchGuid}`);
  if (!offerCode || !searchGuid) return;

  try {
    const response = await fetch(`https://api.airkacc.mn/api/tariffrules/mn/?offerCode=${offerCode}&searchGuid=${searchGuid}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    TariffRules.value = data.result?.Body?.AeroGetRulesResponse?.AeroGetRulesResult?.Rules?.AeroRule?.Text;
    console.log(TariffRules)
  } catch (error) {
    console.error('Error fetching options:', error);
  }
}

// Анхны утга хоосон гэж үзье
const showTariffRules = ref(false)

// TariffRules-д шинэ утга орж ирэхэд нэг удаа modal-ыг харуулах
watch(TariffRules, (newValue) => {
  if (newValue !== "" && !showTariffRules.value) {
    showTariffRules.value = true
  }
})





</script>

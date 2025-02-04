<template>
  <div v-for="(offer, index) in StoreflightInfos" :key="index" class="mb-4">
    <!-- <div
      v-if="offer.Offers && offer.Offers.OfferInfo && offer.Offers.OfferInfo.Segments && offer.Offers.OfferInfo.Segments.OfferSegment"> -->
    <div v-if="offer.Offers && Array.isArray(offer.Offers.OfferInfo)">

      <div v-if="offer.Offers.OfferInfo.length == 1 && offer.Offers.OfferInfo[0].Segments.OfferSegment.length == 1">
        <div v-for="(offInfo, index) in offer.Offers.OfferInfo.slice(0, 1)" :key="index">

          <div v-if="Array.isArray(offInfo.Segments.OfferSegment)">
            <div v-for="(OfferSegment, index) in offInfo.Segments.OfferSegment.slice(0, 1)" :key="index">
              <b-card no-body class="border" :key="index">
                <b-card-header class="d-sm-flex justify-content-sm-between align-items-center">
                  <div class="d-flex align-items-center mb-2 mb-sm-0">
                    <img :src="OfferSegment.MarketingAirline
                      ? 'https://api.echina.mn/assets/d/' + OfferSegment.MarketingAirline + '.png'
                      : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />

                    <h6 class="fw-normal mb-0">
                      {{ StoreAirCompany.find((airline: any) => airline.Code ===
                        OfferSegment.MarketingAirline)?.Value || 'Unknown Airline' }}
                      ({{ OfferSegment.FlightNum || 'SA-1254' }})
                    </h6>
                    <Briefcase v-if="OfferSegment.Baggage" class="mx-2" color="#e68805" />
                    <Luggage v-if="OfferSegment.CabinBaggage" color="#e68805" />
                    <!-- <PlaneTakeoff /> -->
                  </div>
                  <h6 class="fw-bold fs-5 mb-0">Шууд нислэг</h6>
                </b-card-header>

                <b-card-body class="p-4 pb-0">
                  <b-row class="g-4">
                    <b-col sm="4" md="3">
                      <h4> {{ OfferSegment.Departure.Date.split(" ")[1] }}</h4>
                      <!-- <h4> 22</h4> -->
                      <p class="mb-0">{{ OfferSegment.Departure.Iata }}<span
                          v-if="OfferSegment.Departure.Terminal">-Терминал</span> {{
                            OfferSegment.Departure.Terminal || '' }}</p>
                      <p class="mb-0">{{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                        OfferSegment.Departure.Iata).City }}</p>

                    </b-col>

                    <b-col sm="4" md="3" class="my-sm-auto text-center">
                      <h5>{{ convertTimeText(OfferSegment.FlightTime) }}</h5>
                      <div class="position-relative my-4">
                        <hr class="bg-primary opacity-5 position-relative" />
                        <div class="icon-container" style="display: flex; justify-content: space-between; ">
                          <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                            style="transform: translate(0%, -150%);">
                          </div>
                          <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                            style="transform: translate(0%, -150%);">
                          </div>
                        </div>
                        <!-- <div
                    class="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle">
                    <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
                  </div> -->
                      </div>
                    </b-col>

                    <b-col sm="4" md="3">
                      <h4> {{ OfferSegment.Arrival.Date.split(" ")[1] }}</h4>
                      <p class="mb-0">{{ OfferSegment.Arrival.Iata }}<span
                          v-if="OfferSegment.Arrival.Terminal">-Терминал</span> {{
                            OfferSegment.Arrival.Terminal || '' }}</p>
                      <p class="mb-0">{{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                        OfferSegment.Arrival.Iata).City }}</p>
                    </b-col>

                    <b-col md="3" class="text-md-end">
                      <h6 v-if="StoreflightInfos[index].TotalPrice != offer.AdultPrice">{{ currency }}{{
                        offer.AdultPrice
                        }}
                      </h6>
                      <h4 v-else>{{ currency }}{{ offer.AdultPrice }}</h4>
                      <h4 v-if="StoreflightInfos[index].TotalPrice != offer.AdultPrice">{{ currency }}{{
                        StoreflightInfos[index].TotalPrice ||
                        '' }}</h4>
                      <router-link :to="{ name: 'flights.details' }"
                        class="btn btn-dark mb-0 mb-sm-2">Сонгох</router-link>
                    </b-col>
                  </b-row>
                </b-card-body>

                <div v-if="OfferSegment.SelfConnect == true" class="card-footer pt-4">
                  <ul class="list-inline bg-light rounded-2 d-sm-flex text-end justify-content-sm-end mb-0 px-4 py-2">
                    <li v-if="Array.isArray(OfferSegment) && OfferSegment.length > 0"
                      class="list-inline-item text-orange">
                      {{ OfferSegment.length }} Зогсолттой нислэг
                    </li>
                    <li class="list-inline-item text-center">
                      <h6 class="fw-medium mb-0">
                        Ачаагаа өөрөө авч, дахин бүртгүүлэх шаардлагатай <br />
                        (Self-transfer baggage)
                      </h6>
                    </li>
                  </ul>
                </div>


                <div class="card-footer pt-4">
                  <ul
                    class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
                    <li class="list-inline-item text-primary">Боломжит суудал: {{
                      OfferSegment.lenght }}</li>
                    <!-- <li class="list-inline-item text-danger">Non-Refundable</li> -->
                    <h6 class="fw-medium mb-0"><span class="fw-medium">Ангилал:</span> {{
                      OfferSegment.FlightClass }}</h6>
                    <li class="list-inline-item">
                      <router-link :to="'/some-route/' + index" :id="'toggleButton' + index"
                        :aria-controls="'flightDetail' + index" v-b-toggle="'flightDetail' + index"
                        class="btn-more d-flex align-items-center collapsed p-0 mb-0" role="button">
                        Нислэгийн дэлгэрэнгүй
                        <!-- <font-awesome-icon :icon="faPlane" class="ms-2" /> -->
                        <!-- <chevron-down class="ms-1 mb-1" /> -->
                        <ChevronDown />
                      </router-link>
                    </li>
                  </ul>
                  <!-- <b-collapse :id="'flightDetail' + index" class="multi-collapse">
                    <div class="pt-3">
                      <FlightDetailTab :flight="OfferSegment" :index="index" />
                    </div>
                  </b-collapse> -->
                </div>
              </b-card>
            </div>
          </div>
          <div v-else>
            <p>No Array</p>
          </div>
        </div>

      </div>
      <div v-else>
        <p v-for="(offInfo, index) in offer.Offers.OfferInfo.slice(0, 1)" :key="index" class="mb-0">
        <div v-for="(segment, inx) in offInfo.Segments.OfferSegment.slice(0, 1)" :key="inx">
          <b-card no-body class="border" :key="segment.FlightNum">
            <b-card-header class="d-sm-flex justify-content-sm-between align-items-center">
              <div class="d-flex align-items-center mb-2 mb-sm-0">
                <img :src="segment.MarketingAirline
                  ? 'https://api.echina.mn/assets/d/' + segment.MarketingAirline + '.png'
                  : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                <h6 class="fw-normal mb-0">
                  {{ StoreAirCompany.find((airline: any) => airline.Code ===
                    segment.MarketingAirline).Value }}
                  ({{ segment.FlightNum || 'SA-1254' }})
                </h6>
                <!-- Tooltip -->
                <div v-if="isHovered[index + segment.FlightNum]" class="tooltip text-white">
                  <div v-for="segment in offer.Offers.OfferInfo.Segments.OfferSegment.slice(0)" :key="segment.FlightNum"
                    class="d-flex justify-content-sm-start align-items-center">
                    <img :src="segment.MarketingAirline
                      ? 'https://api.echina.mn/assets/d/' + segment.MarketingAirline + '.png'
                      : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                    <h6 class="fw-bold mb-0 text-primary">
                      {{ StoreAirCompany.find((airline: any) => airline.Code ===
                        segment.MarketingAirline).Value }}
                      ({{ segment.FlightNum || 'SA-1254' }})
                    </h6>

                    <Briefcase v-if="segment.Baggage" class="mx-2" color="#5a2dd7" />
                    <Luggage v-if="segment.CabinBaggage" color="#5a2dd7" />

                  </div>
                </div>
              </div>

              <h6 class="fw-bold fs-5 mb-0">Дамжин нислэг</h6>
            </b-card-header>

            <b-card-body class="p-4 pb-0">
              <b-row class="g-4">
                <b-col sm="4" md="3" class="mt-0">
                  <h4> {{ segment.Departure.Date.split(" ")[1] }}</h4>
                  <!-- <h4> 22</h4> -->
                  <p class="fw-bold text-black mb-0">{{ formatDate(segment.Departure.Date) }}</p>
                  <p class="mb-0">{{ segment.Departure.Iata }}<span v-if="segment.Departure.Terminal">-Терминал</span>
                    {{ segment.Departure.Terminal || '' }}</p>
                  <p class="mb-0">{{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                    segment.Departure.Iata).City }}</p>

                </b-col>

                <b-col sm="4" md="3" class="my-sm-auto text-center">
                  <h5 class="mt-3">{{ convertTimeText(segment.FlightTime) }}</h5>
                  <div class="position-relative my-4">
                    <hr class="bg-primary opacity-5 position-relative" />

                    <div class="icon-container" style="display: flex; justify-content: space-evenly; flex-wrap: wrap; ">
                      <template v-for="(segment, idx) in offer.Offers.OfferInfo" :key="'segment-' + idx">
                        <div v-for="(offseg, offsegIdx) in segment.Segments.OfferSegment.slice(0, -1)"
                          :key="'offseg-' + offsegIdx" style="display: flex; align-items: center;">
                          <div class="icon-xs bg-primary text-white rounded-circle position-relative"
                            style="transform: translate(10%, -150%);">
                            <p class="mt-4 text-black fs-6 custom-margin"
                              style="transform: rotate(0deg); display: inline-block;">
                              {{ offseg.Arrival.Iata }}
                            </p>
                          </div>
                        </div>
                      </template>
                      <!-- <div v-for="(segment, idx) in offer.Offers.OfferInfo" :key="'segment-' + idx">
                        <template v-if="segment.Segments?.OfferSegment">
                          <div v-for="(offseg, offsegIdx) in segment.Segments.OfferSegment.slice(
                            0,
                            segment.Segments.OfferSegment.length > 1 ? -1 : undefined
                          )" :key="'offseg-' + offsegIdx + '-' + offseg.FlightNum"
                            class="icon-xs bg-primary text-white rounded-circle position-relative"
                            style="transform: translate(10%, -150%);">
                            <p class="mt-4 text-black fs-6 custom-margin" style="display: inline-block;">
                              {{ offseg.Arrival.Iata }}
                            </p>
                          </div>
                        </template>
                      </div> -->
                    </div>
                    <div class="icon-container" style="display: flex; justify-content: space-between; ">
                      <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                        style="transform: translate(0%, -250%);">
                      </div>
                      <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                        style="transform: translate(0%, -250%);">
                      </div>
                    </div>
                  </div>

                </b-col>

                <b-col sm="4" md="3" class="mt-0">
                  <h4>
                    {{ offer.Offers.OfferInfo[offer.Offers.OfferInfo.length - 1]
                      .Segments.OfferSegment[offer.Offers.OfferInfo[offer.Offers.OfferInfo.length -
                        1].Segments.OfferSegment.length - 1]
                      .Arrival.Date.split(" ")[1] }}
                  </h4>
                  <p class="fw-bold text-black mb-0">{{
                    formatDate(offer.Offers.OfferInfo[offer.Offers.OfferInfo.length - 1]
                      .Segments.OfferSegment[offer.Offers.OfferInfo[offer.Offers.OfferInfo.length -
                        1].Segments.OfferSegment.length - 1]
                      .Arrival.Date) }}</p>

                  <p class="mb-0">{{
                    offer.Offers.OfferInfo[offer.Offers.OfferInfo.length - 1]
                      .Segments.OfferSegment[offer.Offers.OfferInfo[offer.Offers.OfferInfo.length -
                        1].Segments.OfferSegment.length - 1]
                      .Arrival.Iata }}<span v-if="offer.Offers.OfferInfo[offer.Offers.OfferInfo.length - 1]
                      .Segments.OfferSegment[offer.Offers.OfferInfo[offer.Offers.OfferInfo.length -
                        1].Segments.OfferSegment.length - 1]
                      .Arrival.Terminal">-Терминал</span>
                    {{
                      offer.Offers.OfferInfo[offer.Offers.OfferInfo.length - 1]
                        .Segments.OfferSegment[offer.Offers.OfferInfo[offer.Offers.OfferInfo.length -
                          1].Segments.OfferSegment.length - 1]
                        .Arrival.Terminal || '' }}</p>
                  <p class="mb-0">{{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                    offer.Offers.OfferInfo[offer.Offers.OfferInfo.length - 1]
                      .Segments.OfferSegment[offer.Offers.OfferInfo[offer.Offers.OfferInfo.length -
                        1].Segments.OfferSegment.length - 1]
                      .Arrival.Iata).City }}</p>

                </b-col>

                <b-col md="3" class="text-md-end">

                  <h6 v-if="StoreflightInfos[index].TotalPrice != offer.AdultPrice">{{ currency }}{{ offer.AdultPrice }}
                  </h6>
                  <h4 v-else>{{ currency }}{{ offer.AdultPrice }}</h4>
                  <h4 v-if="StoreflightInfos[index].TotalPrice != offer.AdultPrice">{{ currency }}{{
                    StoreflightInfos[index].TotalPrice ||
                    '' }}</h4>
                  <router-link :to="{ name: 'flights.details' }" class="btn btn-dark mb-0 mb-sm-2">Сонгох</router-link>
                </b-col>
              </b-row>
            </b-card-body>


            <div>
              <template v-for="(segment, idx) in offer.Offers.OfferInfo" :key="'segment-' + idx">
                <div v-for="(offseg, offsegIdx) in segment.Segments.OfferSegment" :key="'offseg-' + offsegIdx">
                  <div v-if="offseg.SelfConnect == 'true'" class="card-footer pt-4">
                    <ul class="list-inline bg-light rounded-2 d-sm-flex text-end justify-content-sm-end mb-0 px-4 py-2">
                      <li
                        v-if="Array.isArray(segment.Segments.OfferSegment) && segment.Segments.OfferSegment.length > 0"
                        class="list-inline-item text-orange">
                        {{ segment.Segments.OfferSegment.length }} Зогсолттой нислэг
                      </li>
                      <li class="list-inline-item text-center">
                        <h6 class="fw-medium mb-0">
                          Ачаагаа өөрөө авч, дахин бүртгүүлэх шаардлагатай <br />
                          (Self-transfer baggage)
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </template>
            </div>




            <div class="card-footer pt-4">
              <ul
                class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
                <li class="list-inline-item text-primary">Боломжит суудал: {{ segment.ResBookDesigQuantity }}</li>
                <!-- <li class="list-inline-item text-danger">Non-Refundable</li> -->
                <h6 class="fw-medium mb-0"><span class="fw-medium">Ангилал:</span> {{
                  segment.FlightClass }}</h6>
                <li class="list-inline-item">
                  <router-link :to="'/some-route/' + index + segment.FlightNum"
                    :id="'toggleButton' + index + segment.FlightNum" :aria-controls="'flightDetail' + segment.FlightNum"
                    v-b-toggle="'flightDetail' + index + segment.FlightNum"
                    class="btn-more d-flex align-items-center collapsed p-0 mb-0" role="button">
                    Нислэгийн дэлгэрэнгүй
                    <ChevronDown />
                  </router-link>
                </li>
              </ul>
              <!-- <b-collapse :id="'flightDetail' + index + segment.FlightNum" class="multi-collapse">
                <div class="pt-3">
                  <FlightDetailTab :flight="segment" :index="index" />
                </div>
              </b-collapse> -->
            </div>
          </b-card>
        </div>
        </p>
      </div>
    </div>
    <div v-else>
      <p>No Segment Information</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faAngleDown, faPlane } from '@fortawesome/free-solid-svg-icons'
import FlightDetailTab from '@/views/flights/List/components/FlightDetailTab.vue'
import { currency } from '@/helpers/constants'
import { computed, watch, ref } from 'vue'
import flightLogo from '@/assets/images/element/09.svg'
import { ChevronDown, Briefcase, Luggage } from 'lucide-vue-next';


// import { chevron-down } from 'bootstrap-icons-vue'

// import { PlaneTakeoff } from 'lucide-vue-next';

import { useFlightStore } from '@/stores/flight';
// Props
// Fallback logo

const fallbackLogo = flightLogo

function convertTimeText(input: string): string {
  const [hours, minutes, seconds] = input.split(":").map(Number);
  const hourText = hours ? `${hours} цаг` : "";
  const minuteText = minutes ? `${minutes} мин` : " ";
  return [hourText, minuteText].filter(Boolean).join(" ");
}

function formatDate(input: string): string {
  const [day, month, yearAndTime] = input.split(".");
  const [year, time] = yearAndTime.split(" ");
  return `${year}-${month}-${day}`;
}

const flightStore = useFlightStore();

// Access state
const StoreflightInfos = computed(() => flightStore.flightInfos.FlightData || []);
// console.log(flightStore.flightInfos.FlightData[0].Offers.OfferInfo[0].Segments.OfferSegment[0].AirCraft)
const StoreAirCompany = computed(() => flightStore.AirCompany.CodeValue);
const StoreAirPorts = computed(() => flightStore.AirPorts.AirPortInfo);

// if (flightStore.flightInfos.FlightData.ErrorCode) {
// }

// export default {
//   components: {
//     FlightSegmentCard
//   },
//   props: ['StoreflightInfos', 'fallbackLogo', 'StoreAirCompany', 'StoreAirPorts', 'currency']
// }

// console.log(flightStore.AirCompany.CodeValue)

const isHovered = ref<{ [key: string]: boolean }>({});

function onMouseOver(index: string) {
  isHovered.value[index] = true;
}

function onMouseLeave(index: string) {
  isHovered.value[index] = false;
}

</script>



<style scoped>
.tooltip {
  position: absolute;
  bottom: 110%;
  width: 300px;
  /* Tooltip-ийн байрлал */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(175, 175, 175);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 1;
  z-index: 10;
}

.custom-margin {
  margin-left: -8px;
}
</style>

<!-- 
<script>
import FlightSegmentCard from './FlightSegmentCard.vue';

export default {
  components: {
    FlightSegmentCard
  },
  props: ['StoreflightInfos', 'fallbackLogo', 'StoreAirCompany', 'StoreAirPorts', 'currency']
}
</script> -->

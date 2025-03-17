<template>
  <!-- <div>Нийт нислэгийн тоо: {{ filteredData.length > 0 ? filteredData.length : StoreflightInfos.length }}</div> -->
  <div v-if="(filteredData.length > 0 ? filteredData.length : StoreflightInfos.length) == 0">
    <SkeletonLoader v-for="n in 10" :key="n" />
  </div>

  <div v-else>
    <div v-for="(offer, Mainindex) in filteredData " :key="Mainindex" class="mb-4">
      <!-- {{ StoreflightInfos.length }}
      {{ filteredData.length }} -->
      <!-- <div
        v-if="offer.Offers && offer.Offers.OfferInfo && offer.Offers.OfferInfo.Segments && offer.Offers.OfferInfo.Segments.OfferSegment"> -->
      <div v-if="offer.Offers && Array.isArray(offer.Offers.OfferInfo)">

        <!-- <div v-if="offer.Offers.OfferInfo.length == 1 && offer.Offers.OfferInfo[0].Segments.OfferSegment.length == 1">
          <div v-for="(offInfo, index) in offer.Offers.OfferInfo.slice(0, 1)" :key="index"> -->

        <!-- <div v-if="Array.isArray(offInfo.Segments.OfferSegment)">
              <div v-for="(OfferSegment, index) in offInfo.Segments.OfferSegment.slice(0, 1)" :key="index"> -->

        <div v-if="getAllSegments(Mainindex).length === 1">

          <div v-for="(OfferSegment, index) in getAllSegments(Mainindex)" :key="index">

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
                <h6 class="fw-bold mb-0">Шууд нислэг</h6>
              </b-card-header>

              <b-card-body class="p-4 pb-0">
                <b-row class="g-4">
                  <b-col sm="4" md="3">
                    <h4> {{ OfferSegment.Departure.Date.split(" ")[1] }}</h4>
                    <!-- <h4> 22</h4> -->

                    <p class="fw-bold text-black mb-0">{{ formatDate(OfferSegment.Departure.Date) }}</p>
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
                    <p class="fw-bold text-black mb-0">{{ formatDate(OfferSegment.Arrival.Date) }}</p>
                    <p class="mb-0">{{ OfferSegment.Arrival.Iata }}<span
                        v-if="OfferSegment.Arrival.Terminal">-Терминал</span> {{
                          OfferSegment.Arrival.Terminal || '' }}</p>
                    <p class="mb-0">{{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                      OfferSegment.Arrival.Iata).City }}</p>
                  </b-col>

                  <b-col md="3" class="text-md-end">
                    <h6 v-if="filteredData[Mainindex].TotalPrice != filteredData[Mainindex].AdultPrice"
                      class="d-flex flex-column">
                      Том хүн: {{ currency }}{{ filteredData[Mainindex].AdultPrice }}
                      <span v-if="filteredData[Mainindex].ChildPrice" class="mt-1">
                        Хүүхэд: {{ currency }}{{ filteredData[Mainindex].ChildPrice }}
                      </span>
                    </h6>
                    <h4 v-else>{{ currency }}{{ filteredData[Mainindex].AdultPrice }}</h4>
                    <h4 v-if="filteredData[Mainindex].TotalPrice != filteredData[Mainindex].AdultPrice"
                      class="d-flex align-items-center">
                      <span class="fw-medium fs-5 text-primary">{{ route.query.adults }}</span>
                      <User :size="36" color="#3949AB" class="me-2" />
                      <span class="fw-medium fs-5 text-primary">{{ route.query.childs }}</span>
                      <User color="#3949AB" class="me-2" />
                      {{
                        currency
                      }}{{
                        filteredData[Mainindex].TotalPrice ||
                        '' }}
                    </h4>
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
                    OfferSegment.ResBookDesigQuantity }}</li>
                  <!-- <li class="list-inline-item text-danger">Non-Refundable</li> -->
                  <h6 class="fw-medium mb-0"><span class="fw-medium">Ангилал:</span> {{
                    OfferSegment.FlightClass }}</h6>
                  <li class="list-inline-item">
                    <router-link :to="'/some-route/' + Mainindex" :id="'toggleButton' + Mainindex"
                      :aria-controls="'flightDetail' + Mainindex" v-b-toggle="'flightDetail' + Mainindex"
                      class="btn-more d-flex align-items-center collapsed p-0 mb-0" role="button">
                      Нислэгийн дэлгэрэнгүй
                      <!-- <font-awesome-icon :icon="faPlane" class="ms-2" /> -->
                      <!-- <chevron-down class="ms-1 mb-1" /> -->
                      <ChevronDown />
                    </router-link>
                  </li>
                </ul>
                <b-collapse :id="'flightDetail' + Mainindex" class="multi-collapse">
                  <div class="pt-3">
                    <FlightDetailTab :flight="OfferSegment" :index="Mainindex" />
                  </div>
                </b-collapse>
              </div>
            </b-card>
          </div>
        </div>
        <div v-else>
          <!-- <p v-for="(offInfo, index) in offer.Offers.OfferInfo.slice(0, 1)" :key="index" class="mb-0">
          <div v-for="(segment, inx) in offInfo.Segments.OfferSegment.slice(0, 1)" :key="inx"> -->
          <div v-for="(segment, inx) in getAllSegments(Mainindex).slice(0, 1)" :key="inx">
            <b-card no-body class="border" :key="segment.FlightNum">
              <b-card-header class="d-sm-flex justify-content-sm-between align-items-center">
                <div class="d-flex align-items-center mb-2 mb-sm-0">
                  <img :src="segment.MarketingAirline
                    ? 'https://api.echina.mn/assets/d/' + segment.MarketingAirline + '.png'
                    : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                  <h6 class="fw-normal mb-0">
                    {{ Array.isArray(StoreAirCompany) ? StoreAirCompany.find((airline: any) => airline.Code ===
                      segment.MarketingAirline).Value : StoreAirCompany.Value }}
                    ({{ segment.FlightNum || 'SA-1254' }})
                  </h6>
                  <!-- Tooltip -->
                  <div v-if="isHovered[inx + segment.FlightNum]" class="tooltip text-white">
                    <div v-for="segment in offer.Offers.OfferInfo.Segments.OfferSegment.slice(0)"
                      :key="segment.FlightNum" class="d-flex justify-content-sm-start align-items-center">
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

                <h6 class="fw-bold mb-0">Дамжин нислэг</h6>
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
                    <!-- <h5 class="mt-3">{{ convertTimeText(segment.FlightTime) }}</h5> -->
                    <h5 class="mt-3">{{ getTotalFlightTime(Mainindex) }}</h5>
                    <div class="position-relative my-4">
                      <hr class="bg-primary opacity-5 position-relative" />

                      <div class="icon-container"
                        style="display: flex; justify-content: space-evenly; flex-wrap: wrap; ">
                        <div v-for="(segment, idx) in getStopIatas(Mainindex)" :key="'segment-' + idx">
                          <div class="icon-xs bg-primary text-white rounded-circle position-relative"
                            style="transform: translate(10%, -150%);">
                            <p class="mt-4 text-black fs-6 custom-margin"
                              style="transform: rotate(0deg); display: inline-block;">
                              {{ segment }}
                            </p>
                          </div>
                        </div>
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
                    <h6 v-if="filteredData[Mainindex].TotalPrice != filteredData[Mainindex].AdultPrice"
                      class="d-flex flex-column">
                      Том хүн: {{ currency }}{{ filteredData[Mainindex].AdultPrice }}
                      <span v-if="filteredData[Mainindex].ChildPrice" class="mt-1">
                        Хүүхэд: {{ currency }}{{ filteredData[Mainindex].ChildPrice }}
                      </span>
                    </h6>
                    <h4 v-else>{{ currency }}{{ filteredData[Mainindex].AdultPrice }}</h4>
                    <h4 v-if="filteredData[Mainindex].TotalPrice != filteredData[Mainindex].AdultPrice"
                      class="d-flex align-items-center">
                      <span class="fw-medium fs-5 text-primary">{{ route.query.adults }}</span>
                      <User :size="36" color="#3949AB" class="me-2" />
                      <span class="fw-medium fs-5 text-primary">{{ route.query.childs }}</span>
                      <User color="#3949AB" class="me-2" />
                      {{
                        currency
                      }}{{
                        filteredData[Mainindex].TotalPrice ||
                        '' }}
                    </h4>
                    <!-- <router-link :to="{ name: 'flights.details' }"
                      class="btn btn-dark mb-0 mb-sm-2">Сонгох</router-link> -->

                    <!-- <router-link :to="'/some-route/' + Mainindex + segment.FlightNum"
                      :id="'toggleOption' + Mainindex + segment.FlightNum"
                      :aria-controls="'flightOption' + segment.FlightNum"
                      v-b-toggle="'flightOption' + Mainindex + segment.FlightNum" class="btn btn-dark mb-0 mb-sm-2">
                      Сонгох
                    </router-link> -->
                    <!-- <router-link :to="`/some-route/${Mainindex}${segment.FlightNum}`"
                      :id="`toggleOption${Mainindex}${segment.FlightNum}`"
                      :aria-controls="`flightOption${segment.FlightNum}`"
                      v-b-toggle="`flightOption${Mainindex}${segment.FlightNum}`" class="btn btn-dark mb-0 mb-sm-2"
                      @click="fetchOptions(offer.OfferCode, SearchGuid)">
                      Сонгох
                    </router-link> -->
                    <b-button variant="dark" class="mb-0 mb-sm-2" :id="`toggleOption${Mainindex}${segment.FlightNum}`"
                      :aria-controls="`flightOption${segment.FlightNum}`"
                      v-b-toggle="`flightOption${Mainindex}${segment.FlightNum}`"
                      @click="fetchOptions(offer.OfferCode, SearchGuid)">
                      Сонгох
                    </b-button>
                  </b-col>
                </b-row>
              </b-card-body>


              <div>
                <template v-for=" (segment, idx) in offer.Offers.OfferInfo" :key="'segment-' + idx">
                  <div v-for="(offseg, offsegIdx) in segment.Segments.OfferSegment" :key="'offseg-' + offsegIdx">
                    <div v-if="offseg.SelfConnect == 'true'" class="card-footer pt-4">
                      <ul
                        class="list-inline bg-light rounded-2 d-sm-flex text-end justify-content-sm-end mb-0 px-4 py-2">
                        <li
                          v-if="Array.isArray(segment.Segments.OfferSegment) && segment.Segments.OfferSegment.length > 0"
                          class="list-inline-item text-orange">
                          {{ getTotalStops(Mainindex) }} Зогсолттой нислэг
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

              <!-- <div>
                <div v-for="(offer, index) in offers" :key="index">
                  <h3>Offer {{ index + 1 }}</h3>
                  <p>Total Stops: {{ calculateTotalStops(offer) }}</p>
                  <p>Stop IATA Codes: {{ getStopIATAs(offer).join(', ') }}</p>
                  <p>Total Flight Time: {{ calculateTotalFlightTime(offer) }} hours</p>
                  <p>Layover Times: {{ calculateLayoverTimes(offer).join(', ') }} minutes</p>
                </div>
              </div> -->

              <!-- <div class="card-footer pt-4">
                <h2>✈ Нийтлэг нислэгийн мэдээлэл</h2>
                <p>🔄 Нийт зогсолтын тоо: {{ getTotalStops(Mainindex) }}</p>
                <p>📍 Зогсолтын нисэх буудлууд: {{ getStopIatas(Mainindex).join(', ') }}</p>
                <p>⏳ Нийт нислэгийн хугацаа: {{ getTotalFlightTime(Mainindex) }} цаг</p>
                <p>🛫 Эхлэх нисэх буудал: {{ getFirstDeparture(Mainindex) }} - {{ getFirstDepartureTime(Mainindex) }}</p>
                <p>🛬 Очих нисэх буудал: {{ getLastArrival(Mainindex) }} - {{ getLastArrivalTime(Mainindex) }}</p>
              </div> -->



              <div class="card-footer pt-4">
                <ul
                  class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
                  <li class="list-inline-item text-primary">Боломжит суудал: {{ segment.ResBookDesigQuantity }}</li>
                  <!-- <li class="list-inline-item text-danger">Non-Refundable</li> -->
                  <h6 class="fw-medium mb-0"><span class="fw-medium">Ангилал:</span> {{
                    segment.FlightClass }}</h6>
                  <li class="list-inline-item">
                    <router-link :to="'/some-route/' + Mainindex + segment.FlightNum"
                      :id="'toggleButton' + Mainindex + segment.FlightNum"
                      :aria-controls="'flightDetail' + segment.FlightNum"
                      v-b-toggle="'flightDetail' + Mainindex + segment.FlightNum"
                      class="btn-more d-flex align-items-center collapsed p-0 mb-0" role="button">
                      Нислэгийн дэлгэрэнгүй
                      <ChevronDown />
                    </router-link>
                  </li>
                </ul>
                <b-collapse :id="'flightDetail' + Mainindex + segment.FlightNum" class="multi-collapse">
                  <div class="pt-3">
                    <FlightDetailTab :flight="segment" :index="Mainindex" />
                  </div>
                </b-collapse>
                <!-- <b-collapse :id="'flightOption' + Mainindex + segment.FlightNum" class="multi-collapse">
                  <div class="pt-3">
                    <OptionBooking :offerCode="segment.OfferCode" :searchGuid="SearchGuid" />
                  </div>
                </b-collapse> -->
                <b-collapse :id="`flightOption${Mainindex}${segment.FlightNum}`" class="multi-collapse">
                  <div class="pt-3" v-if="isOptionLoaded">
                    <OptionBooking :offerCode="offer.OfferCode" :searchGuid="SearchGuid" />
                  </div>
                </b-collapse>
              </div>
            </b-card>
          </div>
          <!-- </p> -->
        </div>
      </div>
      <div v-else>
        <p>No Segment Information</p>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { faAngleDown, faPlane } from '@fortawesome/free-solid-svg-icons'
import FlightDetailTab from '@/views/flights/List/components/FlightDetailTab.vue'
import OptionBooking from '@/views/flights/List/components/OptionBooking.vue'
import { currency } from '@/helpers/constants'
import { computed, watch, ref } from 'vue'
import flightLogo from '@/assets/images/element/09.svg'
import { ChevronDown, Briefcase, Luggage, User } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import SkeletonLoader from './Skeleton.vue'
import { useOptionStore } from '@/stores/optionStore'


// import { chevron-down } from 'bootstrap-icons-vue'

// import { PlaneTakeoff } from 'lucide-vue-next';

import { useFlightStore } from '@/stores/flight';
// Props
// Fallback logo

const optionStore = useOptionStore();

const isOptionLoaded = ref(false);

async function fetchOptions(offerCode: string, searchGuid: string) {
  console.log(`Fetching for: ${offerCode}, ${searchGuid}`);
  if (!offerCode || !searchGuid) return;

  try {
    const response = await fetch(`http://api.airkacc.mn/api/prebooking/mn/?offerCode=${offerCode}&searchGuid=${searchGuid}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    optionStore.optionInfos = data;

    isOptionLoaded.value = true; // Show the component after fetching
  } catch (error) {
    console.error('Error fetching options:', error);
  }
}


const route = useRoute();
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


// const filters = ref({
//   StoreflightInfos: [],
// });



// const selectedAirlines = computed(() => filters.value.StoreflightInfos);

// Access state
const StoreflightInfos = computed(() => flightStore.flightInfos ?? []);
// console.log(flightStore.flightInfos.FlightData[0].Offers.OfferInfo[0].Segments.OfferSegment[0].AirCraft)
const StoreAirCompany = computed(() => flightStore.AirCompany);
const StoreAirPorts = computed(() => flightStore.AirPorts);
const SearchGuid = computed(() => flightStore.SearchGuid);
// let filteredData = computed(() => flightStore.firstAdultPrice || []);
const filteredData = computed(() => flightStore.firstAdultPrice.length > 0 ? flightStore.firstAdultPrice : flightStore.flightInfos);


const isHovered = ref<{ [key: string]: boolean }>({});

function onMouseOver(index: string) {
  isHovered.value[index] = true;
}

function onMouseLeave(index: string) {
  isHovered.value[index] = false;
}



const getFlightData = (index: number) => {
  return filteredData.value[index] || { Offers: { OfferInfo: [] } };
};

const getAllSegments = (index: number) => {
  // console.log(index, getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [])
  return getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
};

const getTotalStops = (index: number) => getAllSegments(index).length - 1;
const getStopIatas = (index: number) => getAllSegments(index).slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata);
const getFirstDeparture = (index: number) => getAllSegments(index)[0]?.Departure.Iata || "N/A";
const getFirstDepartureTime = (index: number) => getAllSegments(index)[0]?.Departure.Date || "N/A";
const getLastArrival = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Iata || "N/A";
const getLastArrivalTime = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Date || "N/A";
const getTotalFlightTime = (index: number) => {
  const totalMinutes = getAllSegments(index).reduce(
    (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
    0
  );

  const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
  const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

  return `${hours} цаг ${minutes} мин`; // Цаг, минутын форматаар буцаана
};


watch(filteredData, (newValue, oldValue) => {
  console.log("filteredData өөрчлөгдлөө:", oldValue, "->", newValue);

  console.log("filteredData:", filteredData);
}, { deep: true });

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
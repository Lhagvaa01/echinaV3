<template>
  <b-tabs nav-class="nav nav-pills nav-justified nav-responsive bg-primary bg-opacity-10 rounded p-2 mb-3">
    <b-tab>
      <template #title> Нислэгийн дэлгэрэнгүй </template>
      <div v-if="Array.isArray(StoreflightInfos) && StoreflightInfos[index]">
        <div v-if="Array.isArray(StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment)">

          <b-card no-body class="border">
            <!-- <CabCard v-for="(cab, idx) in cabsLists" :key="idx" :cab="cab" /> -->
            <p v-for="(offer, idx) in StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment" :key="idx"
              class="mb-0">
              <b-card-header>
                <div class="d-sm-flex justify-content-sm-between align-items-center">

                  <div class="d-flex mb-2 mb-sm-0">
                    <img :src="offer && offer.MarketingAirline
                      ? 'https://api.echina.mn/assets/d/' + offer.MarketingAirline + '.png'
                      : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />

                    <h6 class="fw-normal mb-0">
                      {{ StoreAirCompany.find((airline: any) => airline.Code ===
                        offer.MarketingAirline).Value }}
                      ({{ offer.FlightNum || 'SA-1254' }})
                    </h6>
                  </div>
                  <h6 class="fw-normal mb-0"><span class="text-body">Travel Class:</span> Economy</h6>
                </div>
              </b-card-header>

              <b-card-body class="p-4">
                <b-row class="g-4">
                  <b-col sm="4">
                    <h4> {{
                      offer.Departure.Date.split(" ")[1] }}
                    </h4>
                    <p class="fw-bold text-black mb-0">{{
                      formatDate(offer.Departure.Date) }}
                    </p>
                    <p class="mb-0">{{ offer.Departure.Iata
                      }}<span v-if="offer.Departure.Terminal">-Терминал</span> {{
                        offer.Departure.Terminal || '' }}
                    </p>
                    <p class="mb-0">{{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                      offer.Departure.Iata).City }}</p>

                  </b-col>

                  <b-col sm="4" class="my-sm-auto text-center">
                    <h5>{{ convertTimeText(offer.FlightTime)
                      }}
                    </h5>
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
                      <div
                        class="icon-md bg-primary text-white rounded-circle position-absolute top-0 start-50 translate-middle">
                        <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
                      </div>
                    </div>
                  </b-col>

                  <b-col sm="4">
                    <h4> {{ offer.Arrival.Date.split(" ")[1]
                      }}
                    </h4>
                    <p class="fw-bold text-black mb-0">{{
                      formatDate(offer.Arrival.Date) }}</p>
                    <p class="mb-0">{{ offer.Arrival.Iata }}<span v-if="offer.Arrival.Terminal">-Терминал</span> {{
                      offer.Arrival.Terminal || '' }}
                    </p>
                    <p class="mb-0">{{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                      offer.Arrival.Iata).City }}</p>
                  </b-col>
                </b-row>

                <div v-if="StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.length - 1 != idx"
                  class="bg-light text-center fw-normal rounded-2 mt-3 p-2">
                  Нислэг хоорондийн хугацаа: {{
                    timeDifference(offer.Arrival.Date,
                      StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment[idx + 1].Departure.Date) }}
                </div>

                <!-- <div class="bg-light text-center fw-normal rounded-2 mt-3 mb-4 p-2">
                  Change of planes: 3h 15m Layover in France
                </div>

                <b-row class="g-4">
                  <b-col sm="4">
                    <h4>CDG</h4>
                    <h6 class="mb-0">2:50</h6>
                    <p class="mb-0">Ch. De Gaulle, Paris, France</p>
                  </b-col>

                  <b-col sm="4" class="my-sm-auto text-center">
                    <h5>5hr 50min</h5>

                    <div class="position-relative my-4">
                      <hr class="bg-primary opacity-5 position-relative" />
                      <div
                        class="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle">
                        <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip"></font-awesome-icon>
                      </div>
                    </div>
                  </b-col>

                  <b-col sm="4">
                    <h4>JFK</h4>
                    <h6 class="mb-0">7:35</h6>
                    <p class="mb-0">John F Kennedy Intl-NY</p>
                  </b-col>
                </b-row> -->
              </b-card-body>
            </p>
          </b-card>
        </div>

        <div v-else>
          <b-card no-body class="border">
            <!-- <CabCard v-for="(cab, idx) in cabsLists" :key="idx" :cab="cab" /> -->
            <b-card-header>
              <div class="d-sm-flex justify-content-sm-between align-items-center">

                <div class="d-flex mb-2 mb-sm-0">
                  <img :src="StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.MarketingAirline
                    ? 'https://api.echina.mn/assets/d/' + StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.MarketingAirline + '.png'
                    : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />

                  <h6 class="fw-normal mb-0">
                    {{ StoreAirCompany.find((airline: any) => airline.Code ===
                      StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.MarketingAirline).Value }}
                    ({{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.FlightNum || 'SA-1254' }})
                  </h6>
                  <!-- {{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.MarketingAirline }} -->
                  <!-- <img :src="element9" class="w-40px me-2" alt="" /> -->
                  <!-- <h6 class="fw-normal mb-0">Phillippines Airline (PA - 5620ss)</h6> -->
                </div>
                <!-- <h6 class="fw-normal mb-0"><span class="text-body">Travel Class:</span> Economy</h6> -->
                <h6 class="fw-normal mb-0"><span class="fw-body">Ангилал:</span> {{
                  StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.FlightClass }}</h6>
              </div>
            </b-card-header>

            <b-card-body class="p-4">
              <b-row class="g-4">
                <!-- <b-col sm="4">
                  <h4>BOM</h4>
                  <h6 class="mb-0">14:50</h6>
                  <p class="mb-0">Chhatrapati Shivaji International Airport</p>
                </b-col> -->
                <b-col sm="4">
                  <h4> {{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Departure.Date.split(" ")[1] }}
                  </h4>
                  <p class="fw-bold text-black mb-0">{{
                    formatDate(StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Departure.Date) }}</p>
                  <p class="mb-0">{{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Departure.Iata
                    }}<span
                      v-if="StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Departure.Terminal">-Терминал</span>
                    {{
                      StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Departure.Terminal || '' }}
                  </p>
                  <p class="mb-0">{{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                    StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Departure.Iata).City }}</p>

                </b-col>

                <b-col sm="4" class="my-sm-auto text-center">
                  <h5>{{ convertTimeText(StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.FlightTime) }}
                  </h5>
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
                    <div
                      class="icon-md bg-primary text-white rounded-circle position-absolute top-0 start-50 translate-middle">
                      <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
                    </div>
                  </div>
                </b-col>

                <b-col sm="4">
                  <h4> {{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Arrival.Date.split(" ")[1] }}
                  </h4>
                  <p class="fw-bold text-black mb-0">{{
                    formatDate(StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Arrival.Date) }}</p>
                  <p class="mb-0">{{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Arrival.Iata }}<span
                      v-if="StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Arrival.Terminal">-Терминал</span>
                    {{
                      StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Arrival.Terminal || '' }}</p>
                  <p class="mb-0">{{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                    StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Arrival.Iata).City }}</p>
                </b-col>
              </b-row>
              <!-- 
              <div class="bg-light text-center fw-normal rounded-2 mt-3 mb-4 p-2">
                Change of planes: 3h 15m Layover in France
              </div>

              <b-row class="g-4">
                <b-col sm="4">
                  <h4>CDG</h4>
                  <h6 class="mb-0">2:50</h6>
                  <p class="mb-0">Ch. De Gaulle, Paris, France</p>
                </b-col>

                <b-col sm="4" class="my-sm-auto text-center">
                  <h5>5hr 50min</h5>

                  <div class="position-relative my-4">
                    <hr class="bg-primary opacity-5 position-relative" />
                    <div
                      class="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle">
                      <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip"></font-awesome-icon>
                    </div>
                  </div>
                </b-col>

                <b-col sm="4">
                  <h4>JFK</h4>
                  <h6 class="mb-0">7:35</h6>
                  <p class="mb-0">John F Kennedy Intl-NY</p>
                </b-col>
              </b-row> -->
            </b-card-body>
          </b-card>
        </div>
      </div>
    </b-tab>
    <!-- <b-tab>
      <template #title> Fare Detail </template>
      <b-card no-body>
        <div class="table-responsive-lg">
          <table class="table caption-bottom mb-0">
            <caption class="pb-0">
              *From The Date Of Departure
            </caption>
            <thead class="table-dark">
              <tr>
                <th scope="col" class="border-0 rounded-start">Base Fare</th>
                <th scope="col" class="border-0">Taxes and Fees</th>
                <th scope="col" class="border-0 rounded-end">Total Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ currency }}36,500</td>
                <td>{{ currency }}1,050</td>
                <td>
                  <h5 class="mb-0">{{ currency }}37,550</h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-card>
    </b-tab> -->
    <b-tab>
      <template #title> Ачаа тээшний дүрэм </template>
      <div v-if="Array.isArray(StoreflightInfos) && StoreflightInfos[index]">
        <div v-if="Array.isArray(StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment)">
          <b-card no-body class="border">
            <p v-for="(offer, idx) in StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment" :key="idx"
              class="mb-0">
              <b-card-header class="d-flex align-items-center border-bottom">
                <img :src="offer.MarketingAirline
                  ? 'https://api.echina.mn/assets/d/' + offer.MarketingAirline + '.png'
                  : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                <b-card-title tag="h5" class="mb-0">{{
                  offer.Departure.Iata }} -
                  {{ offer.Arrival.Iata }}</b-card-title>
              </b-card-header>

              <b-card-body>
                <div class="table-responsive-lg">
                  <table class="table caption-bottom mb-0">
                    <caption class="pb-0">
                      *1PC = 23KG
                    </caption>
                    <thead class="table-dark">
                      <tr>
                        <th scope="col" class="border-0 rounded-start">Ачаа тээшийн төрөл</th>
                        <th scope="col" class="border-0">Хэмжих нэгж</th>
                        <th scope="col" class="border-0">Тоо/ш : Хэмжээ</th>
                      </tr>
                    </thead>
                    <tbody class="border-top-0" v-if="offer.Baggage || offer.CabinBaggage">
                      <tr v-if="offer.Baggage">
                        <td>Baggage</td>
                        <td>{{ offer.Baggage.BaggageType }}
                        </td>
                        <td>{{ offer.Baggage.Count }}</td>
                      </tr>
                      <tr v-if="offer.CabinBaggage">
                        <td>CabinBaggage</td>
                        <td>
                          {{ offer.CabinBaggage.BaggageType }}
                        </td>
                        <td>
                          {{ offer.CabinBaggage.Count }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-card-body>
            </p>
          </b-card>
        </div>
        <div v-else>
          <b-card no-body class="border">
            <b-card-header class="d-flex align-items-center border-bottom">
              <img :src="StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.MarketingAirline
                ? 'https://api.echina.mn/assets/d/' + StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.MarketingAirline + '.png'
                : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
              <b-card-title tag="h5" class="mb-0">{{
                StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Departure.Iata }} -
                {{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Arrival.Iata }}</b-card-title>
            </b-card-header>

            <b-card-body>
              <div class="table-responsive-lg">
                <table class="table caption-bottom mb-0">
                  <caption class="pb-0">
                    *1PC = 23KG
                  </caption>
                  <thead class="table-dark">
                    <tr>
                      <th scope="col" class="border-0 rounded-start">Ачаа тээшийн төрөл</th>
                      <th scope="col" class="border-0">Хэмжих нэгж</th>
                      <th scope="col" class="border-0">Тоо/ш : Хэмжээ</th>
                    </tr>
                  </thead>
                  <tbody class="border-top-0"
                    v-if="StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Baggage || StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.CabinBaggage">
                    <tr v-if="StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Baggage">
                      <td>Baggage</td>
                      <td>{{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Baggage.BaggageType }}</td>
                      <td>{{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.Baggage.Count }}</td>
                    </tr>
                    <tr v-if="StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.CabinBaggage">
                      <td>CabinBaggage</td>
                      <td>
                        {{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.CabinBaggage.BaggageType }}
                      </td>
                      <td>
                        {{ StoreflightInfos[index].Offers.OfferInfo.Segments.OfferSegment.CabinBaggage.Count }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </b-tab>
    <b-tab>
      <template #title> Cancellation Rules </template>
      <b-card no-body class="border">
        <b-card-header class="d-flex align-items-center border-bottom">
          <img :src="element9" class="h-20px me-1" alt="" />
          <b-card-title tag="h5" class="mb-0">BOM - CDG</b-card-title>
        </b-card-header>

        <b-card-body>
          <div class="table-responsive-lg">
            <table class="table caption-bottom mb-0">
              <caption class="pb-0">
                *From The Date Of Departure
              </caption>
              <thead class="table-dark">
                <tr>
                  <th scope="col" class="border-0 rounded-start">Time Frame</th>
                  <th scope="col" class="border-0 rounded-end">Air Free + MMT Free</th>
                </tr>
              </thead>
              <tbody class="border-top-0">
                <tr>
                  <td>0 hours to 24 hours</td>
                  <td>Non Refundable</td>
                </tr>
                <tr>
                  <td>24 hours to 365 days</td>
                  <td>{{ currency }}16,325 + {{ currency }}250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card-body>
      </b-card>
    </b-tab>
  </b-tabs>
</template>

<script lang="ts" setup>
import element9 from '@/assets/images/element/09.svg'
import { currency } from '@/helpers/constants'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

import CabCard from '../../../cab/List/components/CabCard.vue'
import { cabsLists } from '../../../cab/List/data'
import { computed } from 'vue'
import fallbackLogo from '@/assets/images/element/09.svg'
import { useFlightStore } from '@/stores/flight';

const props = defineProps({
  flight: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const flightStore = useFlightStore();

// Access state
const StoreflightInfos = computed(() => flightStore.flightInfos.FlightData || []);
const StoreAirCompany = computed(() => flightStore.AirCompany.CodeValue);
const StoreAirPorts = computed(() => flightStore.AirPorts.AirPortInfo);


const flight = computed(() => props.flight || [])
const index = computed(() => props.index as number);

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

function timeDifference(start: string, end: string): string {
  // Огнооны форматыг ISO 8601 хэлбэрт хөрвүүлэх
  const startDateFormatted = start.split(' ')[0].split('.').reverse().join('-') + 'T' + start.split(' ')[1] + ':00';
  const endDateFormatted = end.split(' ')[0].split('.').reverse().join('-') + 'T' + end.split(' ')[1] + ':00';

  // start болон end утгуудыг Date объект руу хөрвүүлэх
  const startDate = new Date(startDateFormatted);
  const endDate = new Date(endDateFormatted);

  // Нийт минутын зөрүү
  const diffMinutes = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60));

  // Цаг болон минут болгон хуваах
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  return `${hours} цаг ${minutes} минут`;
}




</script>

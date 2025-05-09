<template>
  <div v-if="(filteredData.length > 0 ? filteredData.length : StoreflightInfos.length) == 0">
    <SkeletonLoader v-for="n in 10" :key="n" />
  </div>
  <div v-else>
    <b-form class="rounded-3 shadow">
      <!-- Popular filters -->
      <!-- <b-card no-body class="card-body rounded-0 rounded-top p-4">
        <h6 class="mb-2">Popular Filters</h6>
        <b-col cols="12">
          <div class="d-flex justify-content-between align-items-center">
            <b-form-checkbox id="popularType1">Refundable Fare</b-form-checkbox>
            <span class="small">(41)</span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <b-form-checkbox id="popularType2">1 Stop</b-form-checkbox>
            <span class="small">(20)</span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <b-form-checkbox id="popularType3">Late Departure</b-form-checkbox>
            <span class="small">(4)</span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <b-form-checkbox id="popularType4">Non-Stop</b-form-checkbox>
            <span class="small">(2)</span>
          </div>
        </b-col>
      </b-card> -->

      <hr class="my-0" />

      <!-- Price -->
      <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Price</h6>
        <div class="position-relative">
          <div class="d-flex justify-content-between">
            <span>{{ currency }} {{ value[0] }}</span>
            <span>{{ currency }} {{ value[1] }}</span>
          </div>
          <VueSlider v-model="value" :min="500" :max="1500" :dotSize="19" :dotStyle="dotStyle"
            :processStyle="processStyle" :railStyle="railStyle" tooltip="none" />
        </div>
      </b-card>

      <hr class="my-0" />

      <!-- Onward stops -->
      <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Onward Stops</h6>
        <ul class="list-inline mb-0 g-3">
          <li class="list-inline-item mb-0">
            <input type="checkbox" class="btn-check" id="btn-check-c1" :value="1" v-model="filters.preferredStops" />
            <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-c1">Шууд нислэг ({{ direct.length
              }})</label>
          </li>
          <li class="list-inline-item mb-0">
            <input type="checkbox" class="btn-check" id="btn-check-c2" :value="2" v-model="filters.preferredStops" />
            <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-c2">1 Зогсолт ({{ OneStop.length
              }})</label>
          </li>
          <li class="list-inline-item mb-0">
            <input type="checkbox" class="btn-check" id="btn-check-c3" :value="3" v-model="filters.preferredStops" />
            <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-c3">2+ Зогсолт ({{ TwoStop.length
              }})</label>
          </li>
        </ul>
      </b-card>

      <hr class="my-0" />

      <!-- Return Stops -->
      <!-- <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Return Stops</h6>
        <ul class="list-inline mb-0 g-3">
          <li class="list-inline-item mb-0">
            <input type="checkbox" class="btn-check" id="btn-check-6" />
            <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-6">Direct</label>
          </li>
          <li class="list-inline-item mb-0">
            <input type="checkbox" class="btn-check" id="btn-check-7" />
            <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-7">1 Stop</label>
          </li>
          <li class="list-inline-item mb-0">
            <input type="checkbox" class="btn-check" id="btn-check-8" />
            <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-8">2+ Stops</label>
          </li>
        </ul>
      </b-card> -->



      <!-- <hr class="my-0" />
      <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Preferred Airline</h6>
        <b-col cols="12">
          <div v-if="Array.isArray(StoreAirCompany)">
            <div v-for="(comp, index) in StoreAirCompany.slice(0, 5)" :key="index" class="form-check">
              <div v-if="comp">
                <input class="form-check-input" type="checkbox" :value="comp.Code" :id="'airlineType' + index"
                  v-model="flightStore.filters.preferredAirline" />
                <label class="form-check-label" :for="'airlineType' + index">
                  <img :src="comp.Code ? 'https://api.echina.mn/assets/d/' + comp.Code + '.png' : element12"
                    alt="Airline logo" class="h-15px fa-fw me-2" />
                  {{ comp.Value }}
                </label>
              </div>
            </div>
          </div>
        </b-col>
      </b-card> -->


      <hr class="my-0" />

      <!-- Preferred Airline -->
      <b-card no-body class="card-body rounded-0 p-4">
        <h6 class="mb-2">Preferred Airline</h6>
        <b-col cols="12">

          <div v-if="Array.isArray(StoreAirCompany)">
            <div v-for="(comp, index) in StoreAirCompany.slice(0, 5)" :key="index" class="form-check">
              <div v-if="comp">
                <!-- <input class="form-check-input" type="checkbox" :value="comp.Code" :id="'airlineType' + index" />
                <label class="form-check-label" for="airlineType1"> -->
                <input class="form-check-input" type="checkbox" :value="comp.Code" :id="'airlineType' + index"
                  v-model="filters.preferredAirlines" />
                <label :for="'airlineType' + index">
                  <img :src="comp.Code
                    ? 'https://api.echina.mn/assets/d/' + comp.Code + '.png'
                    : element12" alt="Airline logo" class="h-15px fa-fw me-2" />{{ comp.Value }}
                  <!-- <img :src="element12" class="h-15px fa-fw me-2" alt="" />{{ comp.Value }} -->
                </label>
              </div>
            </div>
          </div>


          <b-collapse class="multi-collapse" id="airlineCollapse">
            <div v-if="Array.isArray(StoreAirCompany)">
              <div v-for="(comp, index) in StoreAirCompany.slice(5)" :key="'collapsed-' + index" class="form-check">
                <div v-if="comp">
                  <input class="form-check-input" type="checkbox" :value="comp.Code" :id="'airlineType' + index"
                    v-model="filters.preferredAirlines" />
                  <label :for="'airlineType' + index">
                    <img :src="comp.Code
                      ? 'https://api.echina.mn/assets/d/' + comp.Code + '.png'
                      : element12" alt="Airline logo" class="h-15px fa-fw me-2" />{{ comp.Value }}
                  </label>
                </div>
              </div>
            </div>
          </b-collapse>

          <a v-b-toggle.airlineCollapse class="p-0 mb-to mt-2 btn-more d-flex align-items-center collapsed"
            data-bs-toggle="collapse" href="#airlineCollapes" role="button" aria-expanded="false"
            aria-controls="airlineCollapes">
            See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
            <font-awesome-icon :icon="faAngleDown" class="ms-2" />
          </a>
        </b-col>
      </b-card>

      <hr class="my-0" />

      <!-- Layover Airport -->
      <b-card no-body class="card-body rounded-0 rounded-bottom p-0">
        <h6 class="mb-2 p-4">Layover Airport</h6>
        <b-col cols="12">

          <div v-if="Array.isArray(StoreAirport)">
            <div v-for="(comp, index) in StoreAirport.slice(0, 5)" :key="index" class="form-check">
              <div v-if="comp" class=" px-4">
                <input class="form-check-input" type="checkbox" :value="comp.Iata" :id="'airportType' + index"
                  v-model="filters.preferredAirPorts" />
                <div class="d-flex justify-content-between align-items-center">

                  <label :for="'airportType' + index">
                    {{ comp.Name }}
                  </label>

                  {{ comp.Iata }}
                </div>
              </div>
            </div>
          </div>

          <b-collapse class="multi-collapse" id="lauoverCollapse">
            <div v-if="Array.isArray(StoreAirport)">
              <div v-for="(comp, index) in StoreAirport.slice(5)" :key="index" class="form-check">
                <div v-if="comp" class=" px-4">
                  <input class="form-check-input" type="checkbox" :value="comp.Iata" :id="'airportType' + index"
                    v-model="filters.preferredAirPorts" />
                  <div class="d-flex justify-content-between align-items-center">

                    <label :for="'airportType' + index">
                      {{ comp.Name }}
                    </label>

                    {{ comp.Iata }}
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>

          <a class="btn-more d-flex align-items-center collapsed p-4 mb-0 mt-2" v-b-toggle.lauoverCollapse
            href="#lauoverCollapes" role="button" aria-expanded="false" aria-controls="lauoverCollapes">
            See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
            <font-awesome-icon :icon="faAngleDown" class="me-2" />
          </a>
        </b-col>
      </b-card>
    </b-form>

    <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
      <b-button variant="link" class="p-0 mb-0">Clear all</b-button>
      <b-button variant="primary" class="mb-0" @click="applyFilter('223')">Filter Result</b-button>
    </div>
    <!-- <p>Сонгогдсон Airlines: {{ selectedAirlines }}</p>
    <p>Сонгогдсон AirPorts: {{ selectedAirPorts }}</p>
    <p>Сонгогдсон stops: {{ selectedStops }}</p> -->
  </div>
</template>

<script lang="ts" setup>
import element12 from '@/assets/images/element/12.svg'
import element13 from '@/assets/images/element/13.svg'
import element14 from '@/assets/images/element/14.svg'
import element15 from '@/assets/images/element/15.svg'

import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { computed, ref, watch } from 'vue'
import VueSlider from 'vue-3-slider-component'
import { currency } from '@/helpers/constants'
import { useFlightStore } from '@/stores/flight';
import SkeletonLoader from './Skeleton.vue'

const flightStore = useFlightStore();
type AirCompany = {
  Code: string;
  Value: string;
};

type Airport = {
  Code: string;
  Iata: string;
  Name: string;
};

// const StoreAirCompany = computed(() => flightStore.filters.AirCompany.CodeValue || []);
// console.log(StoreAirCompany[1].Value)

const StoreAirCompany = computed<AirCompany[]>(() => flightStore.AirCompany || []);
const StoreAirport = computed<Airport[]>(() => flightStore.AirPorts || []);
const StoreflightInfos = computed(() => flightStore.flightInfos || []);

const filteredData = computed(() => flightStore.firstAdultPrice || []);

const applyFilter = (filter: string) => {

  console.log(filter)
  filterByAirline(filter);
  console.log("Store:", flightStore.filterAirline)
};

const filterByAirline = (airlineCode: string) => {
  const filteredData = StoreflightInfos.value.filter((flight: { Offers: { OfferInfo: any[] } }) =>
    flight.Offers.OfferInfo.some((offer: { Segments: { OfferSegment: any[] } }) =>
      offer.Segments.OfferSegment.some(
        (segment: { MarketingAirline: string }) => segment.MarketingAirline === airlineCode
      )
    )
  );

  flightStore.setAirline(filteredData);  // Store-д хандаж setAirline дуудах
};

const filterByAirPort = (AirPortCode: string) => {
  const filteredData = StoreflightInfos.value.filter((flight: { Offers: { OfferInfo: any[] } }) =>
    flight.Offers.OfferInfo.some((offer: { Segments: { OfferSegment: any[] } }) =>
      offer.Segments.OfferSegment.some(
        (segment: { Arrival: any }) => segment.Arrival.Iata === AirPortCode
      )
    )
  );

  flightStore.setAirline(filteredData);  // Store-д хандаж setAirline дуудах
};


const getFlightData = (index: number) => {
  return StoreflightInfos.value[index] || { Offers: { OfferInfo: [] } };
};

const getAllSegments = (index: number) => {
  return getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
};

const direct = ref<any[]>([]);  // Шууд нислэгийн массив
const OneStop = ref<any[]>([]);  // 1 зогсолттой нислэгийн массив
const TwoStop = ref<any[]>([]);  // Олон зогсолттой нислэгийн массив



StoreflightInfos.value.forEach((flight: any, index: number) => {
  if (flight.Offers) {
    const segments = getAllSegments(index);  // Нислэгийн бүх сегментүүд
    // console.log(index, segments)
    const stops = segments.length;  // Зогсолтын тоо

    if (stops === 1) {
      direct.value.push(flight);  // Шууд нислэгийн сегментүүдийг нэмнэ
    } else if (stops === 2) {
      OneStop.value.push(flight);  // 1 зогсолттой нислэгийн сегментүүдийг нэмнэ
    } else {
      TwoStop.value.push(flight);  // Олон зогсолттой нислэгийн сегментүүдийг нэмнэ
    }
  }
});

const filters = ref({
  preferredAirlines: [],
  preferredAirPorts: [],
  preferredStops: [],
});

const selectedAirlines = computed(() => filters.value.preferredAirlines);
const selectedAirPorts = computed(() => filters.value.preferredAirPorts);
const selectedStops = computed(() => filters.value.preferredStops);

watch(selectedAirlines, (newValue, oldValue) => {
  console.log("filteredData өөрчлөгдлөө:", oldValue, "->", newValue);
  // filteredData = newValue;

  filterByAirline(newValue[0]);

});



watch(selectedStops, (newValue, oldValue) => {
  console.log("selectedStops өөрчлөгдлөө:", oldValue, "->", newValue);
  let flights = ref<any[]>([]);
  if (newValue[0] == 1) {
    flights = direct
  } else if (newValue[0] == 2) {
    flights = OneStop
  } else if (newValue[0] == 3) {
    flights = TwoStop
  } else {
    flights = ref<any[]>([])
  }

  flightStore.setAirline(flights)
  console.log(flightStore.firstAdultPrice);

});

// watch(selectedAirPorts, (newValue, oldValue) => {
//   console.log("filteredData өөрчлөгдлөө:", oldValue, "->", newValue);
//   // filteredData = newValue;

//   // filterByAirline(newValue.preferredAirlines[0]);
//   filterByAirPort(newValue[0]);

// });


watch(
  () => StoreflightInfos.value, // StoreflightInfos өөрчлөгдөхийг хянах
  (newFlights) => {
    if (!Array.isArray(newFlights)) return;

    // Тоолуурын утгыг эхлүүлэх
    direct.value = [];
    OneStop.value = [];
    TwoStop.value = [];

    newFlights.forEach((flight: any, index: number) => {
      if (flight.Offers) {
        const segments = getAllSegments(index);
        const stops = segments.length;  // Зогсолтын тоо

        if (stops === 1) {
          direct.value.push(flight); // Шууд нислэг
        } else if (stops === 2) {
          OneStop.value.push(flight); // 1 зогсолттой нислэг
        } else {
          TwoStop.value.push(flight); // 2+ зогсолттой нислэг
        }
      }
    });

    console.log("🚀 Нислэгийн тоолол шинэчлэгдлээ:", {
      direct: direct.value,
      OneStop: OneStop.value,
      TwoStop: TwoStop.value,
    });
  },
  { deep: true } // Массивын доторх объект өөрчлөгдөхөд ажиллах
);





// `StoreAirCompany` утгыг шалгаж ашиглах
if (StoreAirCompany.value[1]) {
  console.log(StoreAirCompany.value[1].Value);
}
const value = ref([700, 1000])

const dotStyle = {
  backgroundColor: '#5143d9',
  border: '5px solid #fff',
  boxShadow: '0px 0px 0px 1px #5143d9'
}

const processStyle = {
  backgroundColor: '#5143d9'
}

const railStyle = {
  backgroundColor: 'rgb(81, 67, 217, 0.1)'
}
</script>

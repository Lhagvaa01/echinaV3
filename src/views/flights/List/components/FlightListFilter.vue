<template>
  <b-form class="rounded-3 shadow">
    <!-- Popular filters -->
    <b-card no-body class="card-body rounded-0 rounded-top p-4">
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
    </b-card>

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
          <input type="checkbox" class="btn-check" id="btn-check-c1" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-c1">Шууд нислэг ({{ direct
            }})</label>
        </li>
        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-c2" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-c2">1 Зогсолт ({{ OneStop
            }})</label>
        </li>
        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-c3" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-c3">2+ Зогсолт ({{ TwoStop
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

    <hr class="my-0" />

    <!-- Preferred Airline -->
    <b-card no-body class="card-body rounded-0 p-4">
      <h6 class="mb-2">Preferred Airline</h6>
      <b-col cols="12">

        <div v-if="Array.isArray(StoreAirCompany)">
          <div v-for="(comp, index) in StoreAirCompany.slice(0, 5)" :key="index" class="form-check">
            <div v-if="comp">
              <input class="form-check-input" type="checkbox" value="" id="airlineType1" />
              <label class="form-check-label" for="airlineType1">
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
                <input class="form-check-input" type="checkbox" value="" id="airlineType1" />
                <label class="form-check-label" for="airlineType1">
                  <img :src="comp.Code
                    ? 'https://api.echina.mn/assets/d/' + comp.Code + '.png'
                    : element12" alt="Airline logo" class="h-15px fa-fw me-2" />{{ comp.Value }}
                  <!-- <img :src="element12" class="h-15px fa-fw me-2" alt="" />{{ comp.Value }} -->
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
            <div v-if="comp">
              <div class="d-flex justify-content-between align-items-center">
                <b-form-checkbox id="layoverType1">{{ comp.Name }}</b-form-checkbox>
                <span class="small">{{ comp.Iata }}</span>
              </div>
            </div>
          </div>
        </div>

        <b-collapse class="multi-collapse" id="lauoverCollapse">
          <div v-if="Array.isArray(StoreAirport)">
            <div v-for="(comp, index) in StoreAirport.slice(5)" :key="index" class="form-check">
              <div v-if="comp">
                <div class="d-flex justify-content-between align-items-center">
                  <b-form-checkbox id="layoverType1">{{ comp.Name }}</b-form-checkbox>
                  <span class="small">{{ comp.Iata }}</span>
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
    <b-button variant="primary" class="mb-0">Filter Result</b-button>
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

const StoreAirCompany = computed<AirCompany[]>(() => flightStore.AirCompany.CodeValue || []);
const StoreAirport = computed<Airport[]>(() => flightStore.AirPorts.AirPortInfo || []);
const StoreflightInfos = computed(() => flightStore.flightInfos.FlightData || []);


const direct = ref(0);
const OneStop = ref(0);
const TwoStop = ref(0);

StoreflightInfos.value.forEach((flight: any) => {
  if (flight.Offers) {
    if (Array.isArray(flight.Offers.OfferInfo.OfferSegment)) {
      if (flight.Offers.OfferInfo.OfferSegment.length == 2) {
        OneStop.value += 1; // 1 зогсолттой нислэгийн тоог нэмнэ
      } else {
        TwoStop.value += 1; // Шууд нислэгийн тоог нэмнэ
      }
    } else {
      direct.value += 1; // Шууд нислэгийн тоог нэмнэ
    }
  }
});


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


watch(
  StoreflightInfos,
  (newFlights: any[]) => {
    // Тоолуурыг дахин тохируулах
    direct.value = 0;
    OneStop.value = 0;
    TwoStop.value = 0;

    newFlights.forEach((flight: any) => {
      if (flight.Offers && flight.Offers.OfferInfo.OfferSegment) {
        const segments = flight.Offers.OfferInfo.OfferSegment;

        if (Array.isArray(segments)) {
          if (segments.length === 2) {
            OneStop.value += 1; // Шууд нислэгийн тоо нэмэгдэнэ
          } else if (segments.length > 2) {
            TwoStop.value += 1; // 1 зогсолттой нислэгийн тоо нэмэгдэнэ
          }
        } else {
          direct.value += 1;
        }
      }
    });
  },
  { immediate: true } // Анх ачаалахад автоматаар ажиллана
);
</script>

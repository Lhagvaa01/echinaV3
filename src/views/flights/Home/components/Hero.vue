<template>
  <section class="py-0">
    <b-container>
      <div class="rounded-3 p-3 p-sm-5" :style="{
        backgroundImage: `url(${bg01})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }">
        <b-row>
          <b-col md="10" class="mx-auto text-center">
            <h1 class="text-dark display-3 pt-sm-5 my-5">Ready to take off?</h1>
          </b-col>
        </b-row>

        <form class="bg-mode position-relative px-3 px-sm-4 pt-4 mb-4 mb-sm-0">
          <figure class="position-absolute top-0 start-0 h-100 ms-n2 ms-sm-n1">
            <svg class="h-100" viewBox="0 0 12.9 324" style="enable-background: new 0 0 12.9 324">
              <path class="fill-mode"
                d="M9.8,316.4c1.1-26.8,2-53.4,1.9-80.2c-0.1-18.2-0.8-36.4-1.2-54.6c-0.2-8.9-0.2-17.7,0.8-26.6 c0.5-4.5,1.1-9,1.4-13.6c0.1-1.9,0.1-3.7,0.1-5.6c-0.2-0.2-0.6-1.5-0.2-3.1c-0.3-1.8-0.4-3.7-0.4-5.5c-1.2-3-1.8-6.3-1.7-9.6 c0.9-19,0.5-38.1,0.8-57.2c0.3-17.1,0.6-34.2,0.2-51.3c-0.1-0.6-0.1-1.2-0.1-1.7c0-0.8,0-1.6,0-2.4c0-0.5,0-1.1,0-1.6 c0-1.2,0-2.3,0.2-3.5H0v11.8c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V31c3.3,0,6.1,2.7,6.1,6.1S3.3,43.3,0,43.3v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 s-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V324h9.5C9.6,321.4,9.7,318.8,9.8,316.4z" />
            </svg>
          </figure>

          <figure class="position-absolute top-0 end-0 h-100 rotate-180 me-n2 me-sm-n1">
            <svg class="h-100" viewBox="0 0 21 324" style="enable-background: new 0 0 21 324">
              <path class="fill-mode"
                d="M9.8,316.4c1.1-26.8,2-53.4,1.9-80.2c-0.1-18.2-0.8-36.4-1.2-54.6c-0.2-8.9-0.2-17.7,0.8-26.6 c0.5-4.5,1.1-9,1.4-13.6c0.1-1.9,0.1-3.7,0.1-5.6c-0.2-0.2-0.6-1.5-0.2-3.1c-0.3-1.8-0.4-3.7-0.4-5.5c-1.2-3-1.8-6.3-1.7-9.6 c0.9-19,0.5-38.1,0.8-57.2c0.3-17.1,0.6-34.2,0.2-51.3c-0.1-0.6-0.1-1.2-0.1-1.7c0-0.8,0-1.6,0-2.4c0-0.5,0-1.1,0-1.6 c0-1.2,0-2.3,0.2-3.5H0v11.8c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V31c3.3,0,6.1,2.7,6.1,6.1S3.3,43.3,0,43.3v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 s-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9 c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.7,6.1,6.1 c0,3.4-2.8,6.1-6.1,6.1v6.9c3.3,0,6.1,2.8,6.1,6.1c0,3.4-2.8,6.1-6.1,6.1V324h9.5C9.6,321.4,9.7,318.8,9.8,316.4z" />
            </svg>
          </figure>

          <b-row class="g-4 position-relative">
            <b-col lg="6">
              <ul class="nav nav-pills nav-pills-dark" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link rounded-start rounded-0 mb-0" :class="show && 'active'" id="pills-one-way-tab"
                    data-bs-toggle="pill" data-bs-target="#pills-one-way" type="button" role="tab" aria-selected="true"
                    @click="show = 1">
                    One Way
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link rounded-0 mb-0" :class="!show && 'active'" id="pills-round-trip-tab"
                    data-bs-toggle="pill" data-bs-target="#pills-round-trip" type="button" role="tab"
                    aria-selected="false" @click="show = 2">
                    Round Trip
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link rounded-end rounded-0 mb-0" :class="!show && 'active'"
                    id="pills-multi-trip-tab" data-bs-toggle="pill" data-bs-target="#pills-multi-trip" type="button"
                    role="tab" aria-selected="false" @click="show = 3">
                    Multi Trip
                  </button>
                </li>
              </ul>
            </b-col>

            <b-col lg="3" class="ms-auto">
              <div class="form-control-bg-light form-fs-md">
                <SelectFormInput id="class" v-model="selectedClass" :options="classOptions"
                  :choice-options="{ searchEnabled: true }" />
              </div>
            </b-col>

            <!-- <b-col lg="3" class="ms-auto">
              <div class="form-control-bg-light form-fs-md">
                <SelectFormInput id="travelers" v-model="selectedTravelers" :options="travelerOptions"
                  :choice-options="{ searchEnabled: true }" />
              </div>
            </b-col> -->


            <!-- <b-col lg="3" class="ms-auto">
              <div class="form-control-bg-light form-fs-md">
                <CustomTravelers v-model="selectedTravelers" :input-width="200" />
              </div>
            </b-col> -->

            <!-- <b-col lg="3" class="ms-auto">
              <GuestAndRoomForm v-model="formValue" label="Зорчигчийн мэдээлэл" :input-width="310" />
            </b-col> -->


            <div class="tab-content mt-4" id="pills-tabContent">
              <div class="tab-pane fade" :class="show == 1 && 'show active'" id="pills-one-way" role="tabpanel"
                aria-labelledby="pills-one-way-tab">
                <b-row class="g-4">
                  <b-col md="6" lg="4" class="position-relative">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconGeoAlt class="me-2" />
                        Хаанаас
                      </label>
                      <div v-if="destinationOptions.length > 0">
                        <AirportsFormInput id="from" v-model="selectedDestination" :options="destinationOptions"
                          :choice-options="{ searchEnabled: true }" />
                      </div>
                      <div v-else>
                        Loading airports...
                      </div>

                    </div>

                    <div class="btn-flip-icon mt-3 mt-md-0">
                      <button class="btn btn-white shadow btn-round mb-0">
                        <font-awesome-icon :icon="faRightLeft" />
                      </button>
                    </div>
                  </b-col>

                  <b-col md="6" lg="4">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconSend class="me-2" />
                        Хаашаа
                      </label>
                      <div v-if="destinationOptions.length > 0">
                        <AirportsFormInput id="to" v-model="selectedDestination2" :options="destinationOptions"
                          :choice-options="{ searchEnabled: true }" />
                      </div>
                      <div v-else>
                        Loading airports...
                      </div>

                    </div>
                  </b-col>

                  <b-col lg="4">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Хэзээ
                      </label>
                      <CustomFlatpicker id="departureDate" placeholder="Select date" v-model="departureDate"
                        :options="{ dateFormat: 'd.m.Y' }" />
                    </div>
                  </b-col>

                  <b-col cols="12" class="text-end pt-0">
                    <!-- <a class="btn btn-primary mb-n" href='/flights/list/?dpt={{selectedDestination.value}}&arr={{selectedDestination2.value}}&date={{departureDate}}&fclass=Econom&adults=1&childs=0&infants=0'>Find ticket
                      <BIconArrowRight class="ps-3 w-25" />
                    </a> -->
                    <a class="btn btn-primary mb-n" :href="generateTicketUrl">
                      Find ticket
                      <BIconArrowRight class="ps-3 w-25" />
                    </a>
                  </b-col>
                </b-row>
              </div>

              <div class="tab-pane fade" :class="show == 2 && 'show active'" id="pills-round-trip" role="tabpanel"
                aria-labelledby="pills-round-trip-tab">
                <b-row class="g-4">
                  <b-col md="6" xl="3" class="position-relative">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconGeoAlt class="me-2" />
                        From
                      </label>
                      <AirportsFormInput id="from" v-model="selectedDestination3" :options="destinationOptions"
                        :choice-options="{ searchEnabled: true }" />
                    </div>

                    <div class="btn-flip-icon mt-3 mt-md-0">
                      <button class="btn btn-white shadow btn-round mb-0">
                        <font-awesome-icon :icon="faRightLeft" />
                      </button>
                    </div>
                  </b-col>

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconSend class="me-2" />
                        To
                      </label>
                      <SelectFormInput id="to2" v-model="selectedDestination4" :options="destinationOptions"
                        :choice-options="{ searchEnabled: true }" />
                    </div>
                  </b-col>

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Departure
                      </label>
                      <CustomFlatpicker id="departureDay" placeholder="Select date" v-model="departureDate"
                        :options="{ dateFormat: 'd M Y' }" />
                    </div>
                  </b-col>

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Return
                      </label>
                      <CustomFlatpicker id="return" placeholder="Select date" v-model="returnDate"
                        :options="{ dateFormat: 'd M Y' }" />
                    </div>
                  </b-col>

                  <b-col cols="12" class="text-end pt-0">
                    <a class="btn btn-primary mb-n4" href="#">Find ticket
                      <BIconArrowRight class="ps-3 w-25" />
                    </a>
                  </b-col>
                </b-row>
              </div>


              <div class="tab-pane fade" :class="show == 3 && 'show active'" id="pills-multi-trip" role="tabpanel"
                aria-labelledby="pills-multi-trip-tab">
                <b-row class="g-4">
                  <b-col md="6" xl="3" class="position-relative">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconGeoAlt class="me-2" />
                        From
                      </label>
                      <SelectFormInput id="from" v-model="selectedDestination3" :options="destinationOptions"
                        :choice-options="{ searchEnabled: true }" />
                    </div>

                    <div class="btn-flip-icon mt-3 mt-md-0">
                      <button class="btn btn-white shadow btn-round mb-0">
                        <font-awesome-icon :icon="faRightLeft" />
                      </button>
                    </div>
                  </b-col>

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconSend class="me-2" />
                        To
                      </label>
                      <SelectFormInput id="to2" v-model="selectedDestination4" :options="destinationOptions"
                        :choice-options="{ searchEnabled: true }" />
                    </div>
                  </b-col>

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Departure
                      </label>
                      <CustomFlatpicker id="departureDay" placeholder="Select date" v-model="departureDate"
                        :options="{ dateFormat: 'd M Y' }" />
                    </div>
                  </b-col>

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Return
                      </label>
                      <CustomFlatpicker id="return" placeholder="Select date" v-model="returnDate"
                        :options="{ dateFormat: 'd M Y' }" />
                    </div>
                  </b-col>


                </b-row>
                <b-row class="g-2">
                  <div>
                    <p>Нислэг нэмэх</p>
                    <div class="text-end pt-0">
                      <a class="btn btn-primary " href="#">Find ticket
                        <BIconArrowRight class="ps-3 w-25" />
                      </a>
                    </div>
                  </div>
                </b-row>
              </div>
            </div>
          </b-row>
        </form>
      </div>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import bg01 from '@/assets/images/bg/01.jpg'
import SelectFormInput from '@/components/SelectFormInput.vue'
import AirportsFormInput from '@/components/AirportsFormInput.vue'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { BIconGeoAlt, BIconSend, BIconCalendar, BIconArrowRight } from 'bootstrap-icons-vue'

import { computed, ref } from 'vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import { onMounted } from 'vue';

const selectedDestination = ref("UBN"); // Хаанаас
const selectedDestination2 = ref("PEK"); // Хаашаа
const selectedDestination3 = ref('select-location')
const selectedDestination4 = ref('select-location')
const selectedClass = ref('select-class')
const selectedTravelers = ref('select-travelers')
const departureDate = ref("2025-01-25"); // Хэзээ

// const destinationOptions = ref<Array<{ label: string; choices: { value: string; label: string }[] }>>([]);



const classOptions = [
  { value: 'select-class', text: 'Select Class' },
  { value: 'economy', text: 'Economy' },
  { value: 'Premium Economy', text: 'Premium Economy' },
  { value: 'Business', text: 'Business' },
  { value: 'First Class', text: 'First Class' }
]
const travelerOptions = [
  { value: 'select-travelers', text: 'Select Travelers' },
  { value: '1', text: '1' },
  { value: '2', text: '2' },
  { value: '3', text: '3' },
  { value: '4', text: '4' }
]

const show = ref(1)
const returnDate = ref()
const generateTicketUrl = computed(() => {
  return `/flights/list/?dpt=${selectedDestination.value}&arr=${selectedDestination2.value}&date=${departureDate.value}&fclass=Econom&adults=1&childs=0&infants=0`;
});

import { useAirportStore } from '@/stores/airportStore';

const airportStore = useAirportStore();


const destinationOptions = computed(() => {
  return airportStore.destinationOptions || []; // Array буцаана
});


const destinationOptionss = computed(() => {
  return airportStore.destinationOptions[0]?.choices || []; // Array буцаана
});

onMounted(() => {
  airportStore.getAirports(); // Сайт ачаалахад API-гаас өгөгдлийг татаж авах
});
</script>

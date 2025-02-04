<template>
  <section class="pt-0">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-form class="bg-mode border rounded position-relative px-4 pt-4 mb-4 mb-sm-0">
            <b-row class="g-4">
              <b-col lg="6">
                <ul class="nav nav-pills nav-pills-dark" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link rounded-start rounded-0 mb-0" :class="show == 1 && 'active'"
                      id="pills-one-way-tab" data-bs-toggle="pill" data-bs-target="#pills-one-way" type="button"
                      role="tab" aria-selected="true" @click="show = 1">
                      One Way
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link  rounded-0 mb-0" :class="show == 2 && 'active'" id="pills-round-trip-tab"
                      data-bs-toggle="pill" data-bs-target="#pills-round-trip" type="button" role="tab"
                      aria-selected="false" @click="show = 2">
                      Round Trip
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link rounded-end rounded-0 mb-0" :class="show == 3 && 'active'"
                      id="pills-round-trip-tab" data-bs-toggle="pill" data-bs-target="#pills-multi-trip" type="button"
                      role="tab" aria-selected="false" @click="show = 3">
                      Multi trip
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

              <b-col lg="3" class="ms-auto">
                <div class="form-control-bg-light form-fs-md">
                  <!-- <SelectFormInput id="travelers" v-model="selectedTravelers" :options="travelerOptions"
                    :choice-options="{ searchEnabled: true }" /> -->
                  <GuestAndRoomForm v-model="formValue" />
                </div>
              </b-col>
            </b-row>

            <div class="tab-content mt-4" id="pills-tabContent">
              <div class="tab-pane fade" :class="show && 'show active'" id="pills-one-way" role="tabpanel"
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
                    <a class="btn btn-primary mb-n" :href="generateTicketUrl">
                      Find ticket
                      <BIconArrowRight class="ps-3 w-25" />
                    </a>
                  </b-col>
                </b-row>
              </div>

              <div class="tab-pane fade" :class="!show && 'show active'" id="pills-round-trip" role="tabpanel"
                aria-labelledby="pills-round-trip-tab">
                <b-row class="g-4">
                  <b-col md="6" xl="3" class="position-relative">
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

                  <b-col md="6" xl="3">
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

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Хэзээ
                      </label>
                      <CustomFlatpicker id="departureDate" placeholder="Select date" v-model="departureDate"
                        :options="{ dateFormat: 'd.m.Y' }" />
                    </div>
                  </b-col>

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Return
                      </label>
                      <CustomFlatpicker id="returnDate" placeholder="Select date" v-model="returnDate"
                        :options="{ dateFormat: 'd M Y' }" />
                    </div>
                  </b-col>

                  <b-col cols="12" class="text-end pt-0">
                    <a class="btn btn-primary mb-n" :href="generateTicketUrl">
                      Find ticket
                      <BIconArrowRight class="ps-3 w-25" />
                    </a>
                  </b-col>
                </b-row>
              </div>


              <div class="tab-pane fade" :class="!show && 'show active'" id="pills-multi-trip" role="tabpanel"
                aria-labelledby="pills-multi-trip-tab">
                <b-row class="g-4">
                  <b-col md="6" xl="3" class="position-relative">
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

                  <b-col md="6" xl="3">
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

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Хэзээ
                      </label>
                      <CustomFlatpicker id="departureDate" placeholder="Select date" v-model="departureDate"
                        :options="{ dateFormat: 'd.m.Y' }" />
                    </div>
                  </b-col>

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Return
                      </label>
                      <CustomFlatpicker id="returnDate" placeholder="Select date" v-model="returnDate"
                        :options="{ dateFormat: 'd M Y' }" />
                    </div>
                  </b-col>

                  <b-col cols="12" class="text-end pt-0">
                    <a class="btn btn-primary mb-n" :href="generateTicketUrl">
                      Find ticket
                      <BIconArrowRight class="ps-3 w-25" />
                    </a>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import AirportsFormInput from '@/components/AirportsFormInput.vue'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { BIconGeoAlt, BIconSend, BIconCalendar, BIconArrowRight } from 'bootstrap-icons-vue'
import { computed, watch, ref } from 'vue'
import GuestAndRoomForm from '@/components/GuestAndRoomForm.vue'
import type { GuestAndRoomFormType } from '@/types'

const show = ref(1)

import { defineEmits, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const formValue = ref<GuestAndRoomFormType>({
  guests: {
    adults: 1,
    children: 0
  }
})




// const selectedDestination = ref(route.query.dpt || 'UBN')
// const selectedDestination2 = ref(route.query.arr || 'PEK')
const selectedDestination3 = ref('select-location')
const selectedDestination4 = ref('select-location')
const selectedClass = ref('select-class')
const selectedTravelers = ref('select-travelers')


const generateTicketUrl = computed(() => {
  return `/flights/list/?dpt=${selectedDestination.value}&arr=${selectedDestination2.value}&date=${departureDate.value}&fclass=Econom&adults=${formValue.value.guests.adults}&childs=${formValue.value.guests.children}&infants=0`;
});


// const destinationOptions = [
//   { value: 'select-location', text: 'Select location' },
//   { value: 'san-jacinto', text: 'San Jacinto, USA' },
//   { value: 'north-dakota', text: 'North Dakota, Canada' },
//   { value: 'west-virginia', text: 'West Virginia, Paris' }
// ]

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




const returnDate = ref()


// const emit = defineEmits(['search-flights']);

// function searchFlights() {
//   emit('search-flights', {
//     from: "UBN",
//     to: "PEK",
//     date: "25.01.2025",
//     travelers: "1",
//   });
// }

import { useAirportStore } from '@/stores/airportStore';

const airportStore = useAirportStore();


// const destinationOptions = computed(() => {
//   return airportStore.destinationOptions || []; // Array буцаана
// });

const destinationOptions = computed(() => airportStore.destinationOptions || []);


const findOptionValue = (value: string | null): string | undefined => {
  if (!destinationOptions.value.length) {
    console.warn('Destination Options is empty.');
    return undefined;
  }

  for (const region of destinationOptions.value) {
    const found = region.choices.find((choice) => choice.value === value);
    if (found) return found.value; // Зөвхөн value-г буцаана
  }
  return undefined;
};

const emit = defineEmits(['search-flights']);
const route = useRoute();

// Утгуудыг тохируулах
// let selectedDestination = ref(findOptionValue(route.query.dpt as string | null) || "UBN");
// let selectedDestination2 = ref(findOptionValue(route.query.arr as string | null) || "PEK");


const departureDate = ref<string | undefined>(
  Array.isArray(route.query.date)
    ? route.query.date[0] ?? undefined // Хэрэв массив бол эхний элементийг авна
    : route.query.date ?? undefined   // Хэрэв string эсвэл null бол зөв хувиргана
);

function searchFlights() {
  // URL-ээс параметрүүдийг авах
  const from = route.query.dpt || "UBN";
  const to = route.query.arr || "PEK";
  const date = route.query.date || "25.01.2025";
  const travelers = route.query.adults || "1";

  // Эмит функцээр дамжуулах
  emit('search-flights', { from, to, date, travelers });
}
// onMounted(async () => {
//   await airportStore.getAirports();
//   selectedDestination = ref(findOptionValue(route.query.dpt as string | null) || "UBN");
//   selectedDestination2 = ref(findOptionValue(route.query.arr as string | null) || "PEK");
//   console.log(selectedDestination)
// });

const selectedDestination = ref("UBN"
);

const selectedDestination2 = ref("PEK"
);

onMounted(() => {
  airportStore.getAirports(); // Сайт ачаалахад API-гаас өгөгдлийг татаж авах
});


onMounted(() => {
  searchFlights(); // Хуудас ачаалагдахад функцыг ажиллуулна
});

// watch(selectedDestination2, (newValue, oldValue) => {
//   console.log("Selected value changed from:", oldValue, "to:", newValue);
// });

</script>

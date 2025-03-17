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
                        Хаанаас
                      </label>
                      <div v-if="destinationOptionsRound && destinationOptionsRound.length > 0">
                        <AirportsFormInput id="round-from" v-model="selectedDestination3"
                          :options="destinationOptionsRound" :choice-options="{ searchEnabled: true }" />
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
                      <div v-if="destinationOptionsRound && destinationOptionsRound.length > 0">
                        <AirportsFormInput id="round-to" v-model="selectedDestination4"
                          :options="destinationOptionsRound" :choice-options="{ searchEnabled: true }" />
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
                        Явах огноо
                      </label>
                      <CustomFlatpicker id="round-departureDate" placeholder="Select date" v-model="departureDate"
                        :options="{ dateFormat: 'd.m.Y' }" />
                    </div>
                  </b-col>

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Буцах огноо
                      </label>
                      <CustomFlatpicker id="round-returnDate" placeholder="Select date" v-model="returnDate"
                        :options="{ dateFormat: 'd.m.Y' }" />
                    </div>
                  </b-col>

                  <b-col cols="12" class="text-end pt-0">
                    <a class="btn btn-primary mb-n" :href="generateTicketUrlRound">
                      Find ticket
                      <BIconArrowRight class="ps-3 w-25" />
                    </a>
                  </b-col>
                </b-row>
              </div>


              <div class="tab-pane fade" :class="show == 3 && 'show active'" id="pills-multi-trip" role="tabpanel"
                aria-labelledby="pills-multi-trip-tab">
                <b-row class="g-4">
                  <!-- Хайлтын мөрүүд -->
                  <div v-for="(trip, index) in trips" :key="index" class="d-flex justify-content-sm-between">
                    <b-col md="6" xl="3" class="position-relative">
                      <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label class="mb-1">
                          <BIconGeoAlt class="me-2" />
                          Хаанаас
                        </label>
                        <div v-if="destinationOptions.length > 0">
                          <AirportsFormInput :id="`from${index}`" v-model="trip.selectedDestination"
                            :options="destinationOptions" :choice-options="{ searchEnabled: true }" />
                        </div>
                        <div v-else>
                          Loading airports...
                        </div>
                      </div>
                    </b-col>

                    <b-col md="6" xl="3">
                      <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                        <label class="mb-1">
                          <BIconSend class="me-2" />
                          Хаашаа
                        </label>
                        <div v-if="destinationOptions.length > 0">
                          <AirportsFormInput :id="`to${index}`" v-model="trip.selectedDestination2"
                            :options="destinationOptions" :choice-options="{ searchEnabled: true }" />
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
                        <CustomFlatpicker :id="`departureDate${index}`" placeholder="Select date"
                          v-model="trip.departureDate" :options="{ dateFormat: 'd.m.Y' }" />
                      </div>
                    </b-col>

                    <!-- Хэрэглэгч эхний мөр биш бол устгах товч нэмэх -->
                    <b-col md="6" xl="3" v-if="index > 0">
                      <button class="btn btn-danger" @click="removeTrip(index)">
                        Устгах
                      </button>
                    </b-col>
                  </div>

                  <!-- Шинэ мөр нэмэх товч -->
                  <b-col cols="12">
                    <button class="btn btn-secondary" @click="addTrip">
                      Шинэ хайлт нэмэх
                    </button>
                  </b-col>

                  <!-- Хайх товч -->
                  <b-col cols="12" class="text-end pt-0">
                    <a class="btn btn-primary mb-n" :href="generateTicketUrlMulti">
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


const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);

import { defineEmits, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const formValue = ref<GuestAndRoomFormType>({
  guests: {
    adults: Number(route.query.adults) || 1,
    children: Number(route.query.childs) || 0
  }
})




// const selectedDestination = ref(route.query.dpt || 'UBN')
// const selectedDestination2 = ref(route.query.arr || 'PEK')
// const selectedDestination3 = ref('select-location')
// const selectedDestination4 = ref('select-location')
const selectedClass = ref('select-class')
const selectedTravelers = ref('select-travelers')


const generateTicketUrl = computed(() => {
  return `/flights/list/?dpt=${selectedDestination.value}&arr=${selectedDestination2.value}&date=${departureDate.value}&fclass=Econom&adults=${formValue.value.guests.adults}&childs=${formValue.value.guests.children}&infants=0`;
});

const generateTicketUrlRound = computed(() => {
  return `/flights/list/?dpt=${selectedDestination3.value}&arr=${selectedDestination4.value}&date=${departureDate.value}&backDate=${returnDate.value}&fclass=Econom&adults=${formValue.value.guests.adults}&childs=${formValue.value.guests.children}&infants=0`;
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
import { string } from 'yup'

const airportStore = useAirportStore();


// const destinationOptions = computed(() => {
//   return airportStore.destinationOptions || []; // Array буцаана
// });

const destinationOptions = computed(() => airportStore.destinationOptions || []);
const destinationOptionsRound = computed(() => airportStore.destinationOptions || []);


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

// Утгуудыг тохируулах
// let selectedDestination = ref(findOptionValue(route.query.dpt as string | null) || "UBN");
// let selectedDestination2 = ref(findOptionValue(route.query.arr as string | null) || "PEK");


const departureDate = ref<string | undefined>(
  Array.isArray(route.query.date)
    ? route.query.date[0] ?? undefined // Хэрэв массив бол эхний элементийг авна
    : route.query.date ?? undefined   // Хэрэв string эсвэл null бол зөв хувиргана
);

const returnDate = ref<string | undefined>(
  Array.isArray(route.query.backDate)
    ? route.query.backDate[0] ?? undefined // Хэрэв массив бол эхний элементийг авна
    : route.query.backDate ?? undefined   // Хэрэв string эсвэл null бол зөв хувиргана
);

// function searchFlights() {
//   // URL-ээс параметрүүдийг авах
//   const from = route.query.dpt || "UBN";
//   const to = route.query.arr || "PEK";
//   const date = route.query.date || "25.01.2025";
//   const backDate = route.query.backDate || "25.01.2025";
//   // const travelers = route.query.adults || "1" && route.query.adults || '0';
//   // const travelers = [route.query.adults, route.query.childs];
//   const travelers = {
//     adults: route.query.adults ? Number(route.query.adults) : 1, // Default 1 adult
//     childs: route.query.childs ? Number(route.query.childs) : 0  // Default 0 children
//   };

//   // const isRound = show.value == 1 ? 1 : 2;
//   // const isRound = show.value;
//   const isRound = 1;

//   // Эмит функцээр дамжуулах
//   emit('search-flights', { from, to, date, backDate, travelers, isRound });
// }


// onMounted(async () => {
//   await airportStore.getAirports();
//   selectedDestination = ref(findOptionValue(route.query.dpt as string | null) || "UBN");
//   selectedDestination2 = ref(findOptionValue(route.query.arr as string | null) || "PEK");
//   console.log(selectedDestination)
// });

const selectedDestination = ref(sessionStorage.getItem("selectedDestination") || "UBN");
const selectedDestination2 = ref(sessionStorage.getItem("selectedDestination2") || "PEK");

const selectedDestination3 = ref("UBN"
);

const selectedDestination4 = ref("PEK"
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



// Сонгогдсон утгуудыг sessionStorage-д хадгалах
watch(selectedDestination, (newValue) => {
  const dep = destinationOptions.value.filter(option =>
    option.choices.some(choice => choice.value === newValue) // choices массив дотор байгаа эсэхийг шалгах
  );

  console.log(dep);
  sessionStorage.setItem("selectedDestination", JSON.stringify(dep[0])); // JSON.stringify ашиглав
});


watch(selectedDestination2, (newValue) => {
  sessionStorage.setItem("selectedDestination2", newValue);
});


watch(show, (newValue) => {
  sessionStorage.setItem("flight", newValue.toString()); // number → string хөрвүүлж хадгалах
});


// Хайлтын мөрүүд
const trips = ref([
  {
    selectedDestination: '',
    selectedDestination2: '',
    departureDate: '',
  },
]);

// Шинэ мөр нэмэх
const addTrip = () => {
  trips.value.push({
    selectedDestination: '',
    selectedDestination2: '',
    departureDate: '',
  });
  sessionStorage.setItem("trips", trips.value.length.toString());
};

// Мөр устгах
const removeTrip = (index: number) => {
  trips.value.splice(index, 1);
  sessionStorage.setItem("trips", trips.value.length.toString());
};

// URL үүсгэх
const generateTicketUrlMulti = computed(() => {
  if (show.value != 3) {
    sessionStorage.setItem("trips", show.value.toString());
  }
  if (!trips.value.length) return "/flights/list/";

  const baseUrl = "/flights/list/";
  const params = [];

  // 🛫 Анхны чиглэл
  const firstTrip = trips.value[0];
  if (!firstTrip.selectedDestination || !firstTrip.selectedDestination2 || !firstTrip.departureDate) {
    return baseUrl; // Шаардлагатай өгөгдөл байхгүй бол хоосон URL буцаах
  }

  params.push(`dpt=${encodeURIComponent(firstTrip.selectedDestination)}`);
  params.push(`arr=${encodeURIComponent(firstTrip.selectedDestination2)}`);
  params.push(`date=${encodeURIComponent(firstTrip.departureDate)}`);
  params.push(`fclass=Econom`);
  params.push(`adults=${formValue.value.guests.adults || 1}`);
  params.push(`childs=${formValue.value.guests.children || 0}`);
  params.push(`infants=0`);

  // 🔄 Нэмэлт чиглэлүүд
  trips.value.slice(1).forEach((trip, index) => {
    if (trip.selectedDestination && trip.selectedDestination2 && trip.departureDate) {
      params.push(`mdate${index + 1}=${encodeURIComponent(trip.departureDate)}`);
      params.push(`from${index + 1}=${encodeURIComponent(trip.selectedDestination)}`);
      params.push(`to${index + 1}=${encodeURIComponent(trip.selectedDestination2)}`);
    }
  });

  return `${baseUrl}?${params.join("&")}`;
});




function searchFlights() {
  // 🏗 URL-ээс параметр авах, null эсвэл undefined болхоос сэргийлэх
  const getQueryParam = (key: string, defaultValue: string = "") => {
    const value = route.query[key];
    return Array.isArray(value) ? value[0] || defaultValue : value || defaultValue;
  };

  // ✈️ Нислэгийн параметрүүд
  const from = getQueryParam("dpt", "UBN");
  const to = getQueryParam("arr", "PEK");
  const date = getQueryParam("date", "2025-01-25");
  const backDate = getQueryParam("backDate", "");
  const isRound = show.value; // 1: Нэг чиглэл, 2: Хоёр чиглэл, 3: Олон чиглэл

  // 👥 Зорчигчдын тоо
  const travelers = {
    adults: Number(getQueryParam("adults", "1")), // Default: 1 adult
    childs: Number(getQueryParam("childs", "0")), // Default: 0 children
  };

  // 📌 `trips` массив (нэг, хоёр, олон чиглэлт нислэг)
  const trips = [{ from, to, date }];

  if (isRound === 2 && backDate) {
    // 🔄 Хоёр чиглэлт нислэг
    trips.push({ from: to, to: from, date: backDate });
  } else if (isRound === 3) {
    // 🚀 Олон чиглэлт нислэг
    let index = 1;
    while (route.query[`mdate${index}`] && route.query[`from${index}`] && route.query[`to${index}`]) {
      trips.push({
        from: getQueryParam(`from${index}`),
        to: getQueryParam(`to${index}`),
        date: getQueryParam(`mdate${index}`),
      });
      index++;
    }
  }



  // 📢 Эмит функцээр дамжуулах
  emit("search-flights", { trips, travelers, isRound });
}



</script>

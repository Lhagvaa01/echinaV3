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
                      1 Талдаа
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link  rounded-0 mb-0" :class="show == 2 && 'active'" id="pills-round-trip-tab"
                      data-bs-toggle="pill" data-bs-target="#pills-round-trip" type="button" role="tab"
                      aria-selected="false" @click="show = 2">
                      2 Талдаа
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link rounded-end rounded-0 mb-0" :class="show == 3 && 'active'"
                      id="pills-round-trip-tab" data-bs-toggle="pill" data-bs-target="#pills-multi-trip" type="button"
                      role="tab" aria-selected="false" @click="show = 3">
                      Олон хот
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
                  <!-- Хаанаас -->
                  <b-col md="6" lg="4" class="position-relative">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1 d-flex align-items-center">
                        <BIconGeoAlt class="me-2" /> Хаанаас
                      </label>
                      <div v-if="destinationOptions.length > 0">
                        <AirportSelector v-model="selectedDestination" class="w-100" />
                      </div>
                      <div v-else class="text-muted small">Түр хүлээнэ үү...</div>
                    </div>

                    <!-- Flip Icon -->
                    <div class="btn-flip-icon mt-3 mt-md-0">
                      <button class="btn btn-white shadow btn-round mb-0">
                        <font-awesome-icon :icon="faRightLeft" />
                      </button>
                    </div>
                  </b-col>

                  <!-- Хаашаа -->
                  <b-col md="6" lg="4">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1 d-flex align-items-center">
                        <BIconSend class="me-2" /> Хаашаа
                      </label>
                      <div v-if="destinationOptions.length > 0">
                        <AirportSelector v-model="selectedDestination2" class="w-100" />
                      </div>
                      <div v-else class="text-muted small">Түр хүлээнэ үү...</div>
                    </div>
                  </b-col>

                  <!-- Хэзээ -->
                  <b-col lg="4">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1 d-flex align-items-center">
                        <BIconCalendar class="me-2" /> Хэзээ
                      </label>
                      <CustomFlatpicker id="departureDate" placeholder="Select date" v-model="departureDate"
                        :options="{ dateFormat: 'Y.m.d' }" />
                    </div>
                  </b-col>

                  <!-- Нислэг хайх -->
                  <b-col cols="12" class="text-end pt-0">
                    <a class="btn btn-primary mb-n" :href="generateTicketUrl">
                      <div class="d-flex align-items-center justify-content-end">
                        <p class="mb-0">Нислэг хайх</p>
                        <BIconArrowRight class="ps-3" />
                      </div>
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
                      <!-- <div v-if="destinationOptionsRound && destinationOptionsRound.length > 0">
                        <AirportsFormInput id="round-from" v-model="selectedDestination3"
                          :options="destinationOptionsRound" :choice-options="{ searchEnabled: true }" />
                      </div> -->
                      <div v-if="destinationOptionsRound && destinationOptionsRound.length > 0">
                        <AirportSelector v-model="selectedDestination" class="w-100" />
                      </div>
                      <div v-else>
                        Түр хүлээнэ үү...
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
                      <!-- <div v-if="destinationOptionsRound && destinationOptionsRound.length > 0">
                        <AirportsFormInput id="round-to" v-model="selectedDestination4"
                          :options="destinationOptionsRound" :choice-options="{ searchEnabled: true }" />
                      </div> -->
                      <div v-if="destinationOptionsRound && destinationOptionsRound.length > 0">
                        <AirportSelector v-model="selectedDestination2" class="w-100" />
                      </div>
                      <div v-else>
                        Түр хүлээнэ үү...
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
                        :options="{ dateFormat: 'Y.m.d' }" />
                    </div>
                  </b-col>

                  <b-col md="6" xl="3">
                    <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                      <label class="mb-1">
                        <BIconCalendar class="me-2" />
                        Буцах огноо
                      </label>
                      <CustomFlatpicker id="round-returnDate" placeholder="Select date" v-model="returnDate"
                        :options="{ dateFormat: 'Y.m.d', minDate: departureDate }" />
                    </div>
                  </b-col>

                  <b-col cols="12" class="text-end pt-0">
                    <a class="btn btn-primary mb-n" :href="generateTicketUrlRound">
                      <div class="d-flex  align-items-center">
                        <p class="mb-0">Нислэг хайх</p>
                        <BIconArrowRight class="ps-3 w-auto" />
                      </div>
                    </a>
                  </b-col>
                </b-row>
              </div>


              <div class="tab-pane fade" :class="show == 3 && 'show active'" id="pills-multi-trip" role="tabpanel"
                aria-labelledby="pills-multi-trip-tab">
                <b-row class="g-4">
                  <!-- Хайлтын мөрүүд -->
                  <div v-for="(trip, index) in trips" :key="index" class="mb-3">
                    <b-row class="g-4 align-items-end">
                      <!-- Хаанаас -->
                      <b-col md="6" xl="3" class="position-relative">
                        <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                          <label class="mb-1">
                            <BIconGeoAlt class="me-2" /> Хаанаас
                          </label>
                          <div v-if="destinationOptions.length > 0">
                            <AirportSelector v-model="trip.selectedDestination" class="w-100" />
                          </div>
                          <div v-else>Түр хүлээнэ үү...</div>
                        </div>
                      </b-col>

                      <!-- Хаашаа -->
                      <b-col md="6" xl="3">
                        <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                          <label class="mb-1">
                            <BIconSend class="me-2" /> Хаашаа
                          </label>
                          <div v-if="destinationOptions.length > 0">
                            <AirportSelector v-model="trip.selectedDestination2" class="w-100" />
                          </div>
                          <div v-else>Түр хүлээнэ үү...</div>
                        </div>
                      </b-col>

                      <!-- Хэзээ -->
                      <b-col md="6" xl="3">
                        <div class="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
                          <label class="mb-1">
                            <BIconCalendar class="me-2" /> Хэзээ
                          </label>
                          <CustomFlatpicker :id="`departureDate${index}`" placeholder="Select date"
                            v-model="trip.departureDate" :options="{ dateFormat: 'Y.m.d' }" />
                        </div>
                      </b-col>

                      <!-- Устгах товч -->
                      <b-col md="6" xl="3" v-if="index > 0">
                        <button class="btn btn-danger w-100" type="button" @click="removeTrip(index)">
                          Устгах
                        </button>
                      </b-col>
                    </b-row>
                  </div>


                  <!-- Шинэ мөр нэмэх товч -->
                  <!-- <b-col cols="12">
                    <button class="btn btn-secondary" @click="addTrip">
                      Шинэ хайлт нэмэх
                    </button>
                  </b-col> -->
                  <b-col cols="12">
                    <button class="btn btn-secondary" type="button" @click="addTrip">
                      Шинэ хайлт нэмэх
                    </button>
                  </b-col>


                  <!-- Хайх товч -->
                  <b-col cols="12" class="text-end pt-0">
                    <a class="btn btn-primary mb-n" :href="generateTicketUrlMulti">
                      <div class="d-flex  align-items-center">
                        <p class="mb-0">Нислэг хайх</p>
                        <BIconArrowRight class="ps-3 w-auto" />
                      </div>

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

import AirportSelector from '@/components/AirportSelector.vue'


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

  sessionStorage.setItem("trips", show.value.toString());
  return `/flights/list/?dpt=${selectedDestination.value?.airportCode}&arr=${selectedDestination2.value?.airportCode}&date=${formatDateFinish(departureDate.value)}&fclass=Econom&adults=${formValue.value.guests.adults}&childs=${formValue.value.guests.children}&infants=0`;
});

const generateTicketUrlRound = computed(() => {
  sessionStorage.setItem("trips", show.value.toString());
  return `/flights/list/?dpt=${selectedDestination.value?.airportCode}&arr=${selectedDestination2.value?.airportCode}&date=${formatDateFinish(departureDate.value)}&backDate=${formatDateFinish(returnDate.value)}&fclass=Econom&adults=${formValue.value.guests.adults}&childs=${formValue.value.guests.children}&infants=0`;
});

const formatDateFinish = (date: string): string => {
  const [year, month, day] = date.split('.');
  return `${day}.${month}.${year}`;
};


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


function parseDMYStringToDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split('.');
  return new Date(`${year}-${month}-${day}`);
}

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}.${month}.${day}`;
}

const today = new Date();

const departureDate = ref<string>(
  Array.isArray(route.query.date)
    ? formatDate(parseDMYStringToDate(route.query.date[0].toString()))
    : formatDate(parseDMYStringToDate(route.query.date?.toString() ?? formatDate(today)))
);

// Буцах огноо: Эхлэх огнооос 7 хоногийн дараа
const returnDate = ref<string | undefined>(
  Array.isArray(route.query.backDate)
    ? formatDate(parseDMYStringToDate(route.query.backDate[0])) ?? formatDate(new Date(today.setDate(today.getDate() + 7)))  // 7 хоногийн дараа
    : formatDate(parseDMYStringToDate(route.query.backDate)) ?? formatDate(new Date(today.setDate(today.getDate() + 7)))   // 7 хоногийн дараа
);
function addDaysn(date: Date, days: number): Date {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

const returnDates = ref<string>(
  Array.isArray(route.query.backDate)
    ? formatDate(parseDMYStringToDate(route.query.backDate[0]))
    : route.query.backDate
      ? formatDate(parseDMYStringToDate(route.query.backDate.toString()))
      : formatDate(new Date(today.setDate(today.getDate() + 7)))
);

// Огноо дээр өдрүүд нэмэх функц
const convertToISOFormat = (dateStr: string): string => {
  const [day, month, year] = dateStr.split('.'); // Огноог хэсгүүдэд хувааж авах
  return `${year}-${month}-${day}`; // ISO формат руу хөрвүүлэх
};

const addDays = (date: string, days: number): Date => {
  // const isoDate = convertToISOFormat(date);  // `dd.mm.yyyy`-ийг `yyyy-mm-dd` болгон хөрвүүлэх
  const result = new Date(date); // Огноог хуулбарлах
  result.setDate(result.getDate() + days); // Өдрүүдийг нэмэх

  return result;  // Шинэ огноог буцаах
};



// departureDate өөрчлөгдөх үед returnDate-г автоматаар шинэчлэх watch
watch(departureDate, (newDepartureDate) => {
  if (newDepartureDate) {
    const newReturnDate = addDays(newDepartureDate, 7);
    returnDate.value = formatDate(newReturnDate);

  }
});

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

// const selectedDestination = ref(sessionStorage.getItem("selectedDestination") || "UBN");
// const selectedDestination2 = ref(sessionStorage.getItem("selectedDestination2") || "PEK");
interface Destination {
  airportCode: string;
  airportName: string;
}

const selectedDestination = ref<Destination | null>(null);
const selectedDestination2 = ref<Destination | null>(null);
const selectedDestination3 = ref<Destination | null>(null);
const selectedDestination4 = ref<Destination | null>(null);

onMounted(() => {
  const from = sessionStorage.getItem("selectedDestination") || '{"airportName":"Ulaanbaatar","airportCode":"UBN"}';
  const to = sessionStorage.getItem("selectedDestination2") || '{"airportName":"Beijing","airportCode":"PEK"}';

  try {
    selectedDestination.value = from?.startsWith("{")
      ? JSON.parse(from)
      : from || null;

    selectedDestination2.value = to?.startsWith("{")
      ? JSON.parse(to)
      : to || null;
  } catch (e) {
    console.error("Session parse error:", e);
  }

});

watch(selectedDestination, (newVal) => {
  if (newVal) {
    const valueToStore = newVal;
    sessionStorage.setItem("selectedDestination", JSON.stringify(valueToStore));
  }
});

watch(selectedDestination2, (newVal) => {
  // console.log(route.query.date);
  // console.log(newVal)
  if (newVal) {
    const valueToStore =
      newVal;
    sessionStorage.setItem("selectedDestination2", JSON.stringify(valueToStore));
  }
});

watch(selectedDestination3, (newVal) => {
  if (newVal) {
    const valueToStore = newVal;
    sessionStorage.setItem("selectedDestination3", JSON.stringify(valueToStore));
  }
});

watch(selectedDestination4, (newVal) => {
  console.log(newVal)
  if (newVal) {
    const valueToStore =
      newVal;
    sessionStorage.setItem("selectedDestination4", JSON.stringify(valueToStore));
  }
});






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
// watch(selectedDestination, (newValue) => {
//   const dep = destinationOptions.value.filter(option =>
//     option.choices.some(choice => choice.value === newValue) // choices массив дотор байгаа эсэхийг шалгах
//   );

//   console.log(newValue);
//   sessionStorage.setItem("selectedDestination", newValue); // JSON.stringify ашиглав
// });


// watch(selectedDestination2, (newValue) => {
//   sessionStorage.setItem("selectedDestination2", newValue);
// });


watch(show, (newValue) => {
  sessionStorage.setItem("flight", newValue.toString()); // number → string хөрвүүлж хадгалах
});


// Хайлтын мөрүүд
// const trips = ref([
//   {
//     selectedDestination: '',
//     selectedDestination2: '',
//     departureDate: '',
//   },
// ]);
interface Trip {
  selectedDestination: Destination;
  selectedDestination2: Destination;
  departureDate: string;
}

const from = sessionStorage.getItem("selectedDestination");
const to = sessionStorage.getItem("selectedDestination2");
const trips = ref<Trip[]>([
  {
    selectedDestination: from?.startsWith("{")
      ? JSON.parse(from)
      : from || null,
    selectedDestination2: to?.startsWith("{")
      ? JSON.parse(to)
      : to || null,
    departureDate: departureDate.value || "",
  }
]);



// Шинэ мөр нэмэх
const addTrip = () => {
  if (trips.value.length < 3) {
    trips.value.push({
      selectedDestination: { airportCode: '', airportName: '' }, // Empty destination
      selectedDestination2: { airportCode: '', airportName: '' }, // Empty destination
      departureDate: '',
    });
    sessionStorage.setItem("trips", trips.value.length.toString());
  }
};

// Мөр устгах
const removeTrip = (index: number) => {
  trips.value.splice(index, 1);
  sessionStorage.setItem("trips", trips.value.length.toString());
};

// URL үүсгэх
const generateTicketUrlMulti = computed(() => {
  if (show.value != 3) {
    sessionStorage.setItem("tripsValue", show.value.toString());
  }
  if (!trips.value.length) return "/flights/list/";

  const baseUrl = "/flights/list/";
  const params = [];

  // 🛫 Анхны чиглэл
  const firstTrip = trips.value[0];
  if (!firstTrip.selectedDestination || !firstTrip.selectedDestination2 || !firstTrip.departureDate) {
    return baseUrl; // Шаардлагатай өгөгдөл байхгүй бол хоосон URL буцаах
  }
  console.log(firstTrip.selectedDestination)
  params.push(`dpt=${encodeURIComponent(firstTrip.selectedDestination.airportCode)}`);
  params.push(`arr=${encodeURIComponent(firstTrip.selectedDestination2.airportCode)}`);
  params.push(`date=${encodeURIComponent(firstTrip.departureDate)}`);
  params.push(`fclass=Econom`);
  params.push(`adults=${formValue.value.guests.adults || 1}`);
  params.push(`childs=${formValue.value.guests.children || 0}`);
  params.push(`infants=0`);

  // 🔄 Нэмэлт чиглэлүүд
  trips.value.slice(1).forEach((trip, index) => {
    if (trip.selectedDestination && trip.selectedDestination2 && trip.departureDate) {
      params.push(`mdate${index + 1}=${encodeURIComponent(trip.departureDate)}`);
      params.push(`from${index + 1}=${encodeURIComponent(trip.selectedDestination.airportCode)}`);
      params.push(`to${index + 1}=${encodeURIComponent(trip.selectedDestination2.airportCode)}`);
    }
  });

  return `${baseUrl}?${params.join("&")}`;
});


onMounted(() => {
  // Try to load trips from sessionStorage when the page is loaded
  const savedTrips = sessionStorage.getItem("tripsValue");

  if (savedTrips) {
    try {
      const parsedTrips = JSON.parse(savedTrips);

      // Ensure the loaded data is an array of trips, or an empty array if not
      if (Array.isArray(parsedTrips)) {
        trips.value = parsedTrips;
      }
    } catch (e) {
      console.error("Error parsing trips from sessionStorage:", e);
    }
  }
});

// Watch for changes in trips and store it in sessionStorage
watch(trips, (newTrips) => {
  if (newTrips.length > 0) {
    try {
      sessionStorage.setItem("trips", JSON.stringify(newTrips.length));
      sessionStorage.setItem("tripsValue", JSON.stringify(newTrips));
    } catch (e) {
      console.error("Error saving trips to sessionStorage:", e);
    }
  }
}, { deep: true });



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


  sessionStorage.setItem("travelers", JSON.stringify(travelers));

  if (!sessionStorage.getItem("flight")) {
    sessionStorage.setItem("flight", "1");
  }

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

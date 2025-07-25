<template>
  <b-col md="8" xl="12">
    <b-card no-body class="bg-light rounded-2">
      <b-card-header class="border-bottom bg-light">
        <b-card-title tag="h5" class="mb-0">{{ t('txtPaymentInfo') }}</b-card-title>
      </b-card-header>

      <b-card-body>
        <ul class="list-group list-group-borderless">
          <!-- Adult price -->
          <li class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center">
            <span class="h6 fw-normal mb-2 mb-md-0">
              {{ t('txtAdult') }} ({{ travelers.adults }} x
              {{ Math.ceil((parseFloat(getOptionPrice().AdultPrice) * eurToMnt)).toLocaleString() }}₮)
              <b-icon-info-circle class="ms-1" />
            </span>
            <span class="fs-6 text-end text-md-start">
              {{
                Math.ceil((travelers.adults * parseFloat(getOptionPrice().AdultPrice) * eurToMnt)).toLocaleString()
              }}₮
            </span>
          </li>

          <!-- Child price -->
          <li v-if="travelers.childs > 0"
            class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center">
            <span class="h6 fw-normal mb-2 mb-md-0">
              {{ t('txtChild') }} ({{ travelers.childs }} x
              {{ Math.ceil((parseFloat(getOptionPrice().ChildPrice) * eurToMnt)).toLocaleString() }}₮)
              <b-icon-info-circle class="ms-1" />
            </span>
            <span class="fs-6 text-end text-md-start">
              {{
                Math.ceil((travelers.childs * parseFloat(getOptionPrice().ChildPrice) * eurToMnt)).toLocaleString()
              }}₮
            </span>
          </li>


          <!-- Infants price -->
          <li v-if="travelers.infants > 0"
            class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center">
            <span class="h6 fw-normal mb-2 mb-md-0">
              {{ t('txtInfants') }} ({{ travelers.infants }} x
              {{ Math.ceil((parseFloat(getOptionPrice().InfantPrice) * eurToMnt)).toLocaleString() }}₮)
              <b-icon-info-circle class="ms-1" />
            </span>
            <span class="fs-6 text-end text-md-start">
              {{
                Math.ceil((travelers.infants * parseFloat(getOptionPrice().InfantPrice) * eurToMnt)).toLocaleString()
              }}₮
            </span>
          </li>

          <!-- Service fee -->
          <li class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center">
            <span class="h6 fw-normal mb-2 mb-md-0">{{ t('txtServiceFee') }}</span>
            <span class="fs-6 text-end text-md-start">
              {{ totalPrice.toLocaleString() }}₮
            </span>
          </li>
        </ul>
      </b-card-body>

      <b-card-footer class="border-top bg-light">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span class="h6 fw-normal mb-2 mb-md-0">{{ t('txtTotalAmount') }}:</span>
          <span class="h6 fw-bold mb-0">
            {{
              Math.ceil((
                parseFloat(infos.FullPrice) * eurToMnt + totalPrice
              )).toLocaleString()
            }}₮
          </span>
        </div>
      </b-card-footer>

      <b-card-footer>
        <div class="d-grid mt-4">
          <!-- Төлбөр төлөх товч -->
          <a href="#" class="btn btn-primary-soft mb-0" :class="{ 'disabled-link': !isFormValid }"
            @click.prevent="openModal">
            {{ t('txtPay') }}
          </a>
        </div>
      </b-card-footer>
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h3 class="modal-title">{{ t('txtTravelerInfoCheck') }}</h3>

          <!-- Анхааруулга -->
          <div class="alert-warning">
            <span class="warning-icon">⚠️</span>
            <strong>{{ t('txtWarning') }}</strong>
          </div>

          <!-- Зорчигчийн мэдээлэл -->
          <div class="passenger-info">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>{{ t('txtPassportNum') }}</th>
                  <th>{{ t('txtSureName') }}</th>
                  <th>{{ t('txtName') }}</th>
                  <th>{{ t('txtBirthDate') }}</th>
                  <th>{{ t('txtPassportDate') }}</th>
                  <th>{{ t('txtGender') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(traveler, index) in travelerStore.travelers" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ traveler.document }}</td>
                  <td>{{ traveler.surname }}</td>
                  <td>{{ traveler.name }}</td>
                  <td>{{ formatBirthDay(traveler.birthDay) }}</td>
                  <td>{{ formatBirthDay(traveler.DocumentExDate) }}</td>
                  <td>{{ traveler.gender }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Үйлчилгээний нөхцөл -->
          <div class="mt-2 terms-container" @scroll="checkScroll" ref="termsContainer">
            <p v-html="warningMessage"></p>
            <h5>
              <input type="checkbox" v-model="agreed" :disabled="!scrolledToBottom" />
              {{ t('txtCheckPrivacy') }}
            </h5>
          </div>

          <!-- Үйлдлийн хэсэг -->
          <div class="modal-actions">
            <div class="button-group">
              <h6 class="instruction-text">{{ t('txtContinueBTN') }}</h6>
              <button @click="closeModal" class="btn btn-secondary">{{ t('txtClose') }}</button>
              <button @click="confirmAndPay" class="btn btn-primary-soft" :disabled="!agreed">
                {{ t('txtContinue') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isLoading" class="alert-loading">
        <div class="bg-white p-6 rounded-lg shadow-lg text-center rounded-5">
          <div class="loader mb-4"></div>
          <p class="text-lg font-semibold">{{ t('txtWaiting') }}</p>
        </div>
      </div>

      <transition name="fade">
        <div v-if="errorMessage.text" class="alert-wrapper">
          <CustomAlert :severity="errorMessage.status" :message="errorMessage.text" />
        </div>
      </transition>



    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { currency } from '@/helpers/constants'
import { BIconInfoCircle } from 'bootstrap-icons-vue'
import { useOptionStore } from '@/stores/optionStore'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import { useTravelerStore } from '@/stores/travelerStore'

const travelerStore = useTravelerStore()

const { t, locale } = useI18n()

const travelers = ref({ adults: 0, childs: 0, infants: 0 })

const totalPrice = ref(0)
const fee = 7000

onMounted(() => {
  const travelersStr = sessionStorage.getItem("travelers")
  if (travelersStr) {
    try {
      const parsed = JSON.parse(travelersStr)
      travelers.value = parsed
      const adults = parsed.adults || 0
      const childs = parsed.childs || 0
      const infants = parsed.infants || 0

      totalPrice.value = (adults + childs + infants) * fee
    } catch (e) {
      console.error("❌ travelers JSON parse алдаа:", e)
    }
  }
})

const eurToMnt = ref<number | null>(null)
onMounted(async () => {
  travelerStore.reset()
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  const formatDate = (d: Date) => d.toISOString().split('T')[0]

  const startDate = formatDate(yesterday)
  const endDate = formatDate(today)

  try {
    const res = await fetch(`https://www.mongolbank.mn/mn/currency-rates/data?startDate=${startDate}&endDate=${endDate}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    const eur = data?.data?.[0]?.EUR
    eurToMnt.value = eur ? parseFloat(eur.replace(',', '')) : null
    console.log(eurToMnt)
  } catch (error) {
    console.error('❌ Монголбанк ханш татахад алдаа:', error)
  }
})

const isPassportValid = (passportNumber: string) => {
  const pass_regex = /^[A-Za-z0-9]{8,9}$/;
  return pass_regex.test(passportNumber);
};

// 🔹 Нэр шалгах (хоосон эсэх)
const isNameValid = (firstName: string, lastName: string) => {
  const nameRegex = /^[А-ЯӨҮЁЭа-яөүёэA-Za-z]+$/;
  return (
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    nameRegex.test(firstName) &&
    nameRegex.test(lastName)
  );
};

// 🔹 Хүйс шалгах (сонгогдсон эсэх)
const isGenderValid = (gender: string) => {
  const invalidValues = ["", "gender", null, undefined];

  return !invalidValues.includes(gender)
};

// 🔹 Харьяалал шалгах (сонгогдсон эсэх)
const isNationalityValid = (nationality: string) => {
  const invalidValues = ["", "select-nationality", null, undefined];
  return !invalidValues.includes(nationality)
};

// 🔹 Төрсөн огноо болон паспортын дуусах хугацаа шалгах
const isDateValid = (date: { day: string; month: string; year: string }) => {
  const invalidValues = ["", "date", "month", "year", null, undefined];
  return !invalidValues.includes(date.day) &&
    !invalidValues.includes(date.month) &&
    !invalidValues.includes(date.year);
};

const isPhoneNumberValid = computed(() => {
  const phoneRegex = /^[0-9]{8}$/;
  return phoneRegex.test(travelerStore.phoneNumber);
});


const isEmailValid = computed(() => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(travelerStore.email);
});

const isFormValid = computed(() => {
  if (travelerStore.travelers.length > 0) {
    console.log(true)
    return travelerStore.travelers.every(traveler =>
      isNameValid(traveler.name, traveler.surname) &&
      isPassportValid(traveler.document) &&
      isDateValid(traveler.birthDay) &&
      isDateValid(traveler.DocumentExDate) &&
      isGenderValid(traveler.gender) &&
      isNationalityValid(traveler.birthISO) &&
      isPhoneNumberValid.value &&
      isEmailValid.value
    );
  } else {
    console.log(false)
    return false
  }

});

let travelersNew = ref([
  {
    id: 1,
    ageType: '',
    birthDay: { day: "", month: "", year: "" },
    birthISO: '',
    document: '',
    gender: '',
    name: '',
    surname: '',
    DocumentExDate: { day: "", month: "", year: "" }
  }
]);

function formatDate(input: string): string {
  const [day, month, yearAndTime] = input.split(".");
  const [year, time] = yearAndTime.split(" ");
  return `${year}-${month}-${day}`;
}

function getAgeCategory(dateOfBirth: { day: string; month: string; year: string; }) {
  let age = 0;
  // Төрсөн өдрийг dayjs-д хөрвүүлэх
  const birthDate = dayjs(`${dateOfBirth.year}-${dateOfBirth.month}-${dateOfBirth.day}`, 'YYYY-MM-DD');

  // Try parsing the departure date with multiple formats
  const departureDateString = formatDate(getAllSegments()[0].Departure.Date);

  // First, try the expected format
  let departureDate = dayjs(departureDateString, 'YYYY-MM-DD');



  // Calculate age only if both dates are valid
  if (birthDate.isValid() && departureDate.isValid()) {
    age = departureDate.diff(birthDate, 'year');
  } else {
    console.log("Cannot calculate age due to invalid dates");
  }
  // Насны ангилалыг тодорхойлно
  if (age < 0) {
    return 'Error: Invalid birthdate';
  } else if (age <= 2) {
    return 'Infant'; // 0-2 нас
  } else if (age <= 12) {
    return 'Child'; // 3-12 нас
  } else if (age <= 120) {
    return 'Adult'; // 13-120 нас
  } else {
    return 'Error: Age exceeds 120'; // 120 наснаас дээш
  }
}
const errorMessage = ref({ status: '', text: '' });
const isLoading = ref(false);
// Popup харуулах эсэх
const showModal = ref(false);
const agreed = ref(false);

const scrolledToBottom = ref(false);
const termsContainer = ref(null);

const checkScroll = () => {
  if (!termsContainer.value) return;
  const { scrollTop, scrollHeight, clientHeight } = termsContainer.value;
  scrolledToBottom.value = scrollTop + clientHeight >= scrollHeight - 10;
};

const warningMessage = ref(''); // Initialize with an empty string or your default value


const openModal = () => {
  travelerStore.travelers.forEach(traveler => {
    traveler.ageType = getAgeCategory(traveler.birthDay).toString();
  });
  // 🧠 Session-аас зорчигчдын тоог авах
  const stored = sessionStorage.getItem("travelers");
  if (!stored) return;

  try {
    const parsed = JSON.parse(stored);
    const expectedAdults = parsed.adults || 0;
    const expectedChildren = parsed.childs || 0;
    const expectedInfants = parsed.infants || 0;

    // 👤 actual зорчигчдын тоо
    const actualAdults = travelerStore.travelers.filter(t => t.ageType === 'Adult').length;
    const actualChildren = travelerStore.travelers.filter(t => t.ageType === 'Child').length;
    const actualInfants = travelerStore.travelers.filter(t => t.ageType === 'Infant').length;
    console.log(travelerStore.travelers)
    // ❗ Шалгах
    if (actualAdults !== expectedAdults || actualChildren !== expectedChildren || actualInfants !== expectedInfants) {
      // alert(`Зорчигчдын төрөл зөрж байна!\nТом хүн: ${expectedAdults}, Хүүхэд: ${expectedChildren}`);
      errorMessage.value.text = `Зорчигчдын төрөл зөрж байна!\nТом хүн: ${expectedAdults}, Хүүхэд: ${expectedChildren}, Нярай: ${expectedInfants}`;
      errorMessage.value.status = "error";
      setTimeout(() => {
        errorMessage.value.text = '';
        errorMessage.value.status = '';
      }, 2000);
      return;
    }

    // ✅ Хэрвээ зөв байвал modal нээнэ
    showModal.value = true;
    fetch('https://api.airkacc.mn/api/ref/conditionMore/mn/airkacc/')
      .then(response => response.json())
      .then(data => {
        warningMessage.value = data.result.description;
      })
      .catch(error => {
        console.error('API Error:', error);
      });

  } catch (e) {
    console.error("Session parse error:", e);
  }
};


const closeModal = () => {
  showModal.value = false;
};

const show = ref(false);

const monthNameToNumber = (month: string) => {
  const months: Record<string, string> = {
    jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
    jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12"
  };
  return months[month.toLowerCase()] || month; // Хэрэв сарын нэр байхгүй бол өөрчлөхгүй
};

const formatBirthDay = (birthDay: { month: any; day: any; year: any; }) => {
  const monthNumber = monthNameToNumber(birthDay.month); // Сарны нэрийг тоо руу хөрвүүлнэ
  return `${birthDay.day}.${monthNumber}.${birthDay.year}`;
};



const prepareDataForApi = (travelers: any[]) => {
  return travelers.map((traveler: { [x: string]: any; birthDay?: any; id?: any; }) => {
    const { id, DocumentExDate, ...rest } = traveler; // id болон DocumentExDate-г хасах
    return {
      ...rest,
      birthDay: formatBirthDay(traveler.birthDay),
      expireDate: formatBirthDay(traveler.DocumentExDate)  // birthDay-г форматлаж өгч байна
    };
  });
};

const confirmAndPay = async () => {
  showModal.value = false;
  isLoading.value = true; // ⬅ Түр хүлээж байна гэдгийг эхлүүлнэ

  const storedTravelerNew = sessionStorage.getItem("TravelerNew");
  if (storedTravelerNew) {
    try {
      travelerStore.travelers = JSON.parse(storedTravelerNew);
    } catch (e) {
      console.error("TravelerNew parse алдаа:", e);
    }
  }


  travelerStore.travelers.forEach(traveler => {
    traveler.ageType = getAgeCategory(traveler.birthDay).toString();
  });

  const formattedTravelers = prepareDataForApi(travelerStore.travelers);

  const payload = {
    offerCode: infos.value?.OfferCode,
    searchGuid: infos.value?.SearchGuid,
    clientRef: '976' + travelerStore.phoneNumber,
    email: travelerStore.email,
    phone: '976' + travelerStore.phoneNumber,
    passengers: formattedTravelers
  };

  try {
    const response = await fetch('https://api.airkacc.mn/api/booking/mn/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json();
      if (data.status === 'SUCCESS' && data.result?.Body?.AeroBookResponse?.AeroBookResult) {
        var orderInfo = data.result.Body.AeroBookResponse.AeroBookResult;
        // const oid = orderInfo.value.oid;
        errorMessage.value.text = "Ажилттай захиалга үүслээ";
        errorMessage.value.status = "success";
        setTimeout(() => {
          errorMessage.value.text = '';
          errorMessage.value.status = '';
        }, 2000);
        sessionStorage.setItem("BookingInfo", JSON.stringify(data));
        window.location.href = `/flights/booking/`;

      } else {
        sessionStorage.setItem("BookingInfo", JSON.stringify(data));
        errorMessage.value.text = `Алдаа: ${data.message}`;
        errorMessage.value.status = "error";
        setTimeout(() => {
          errorMessage.value.text = '';
          errorMessage.value.status = '';
        }, 2000);
      }
    } else {
      errorMessage.value.text = `Алдаа: ${response.statusText}`;
      errorMessage.value.status = "error";
      setTimeout(() => {
        errorMessage.value.text = '';
        errorMessage.value.status = '';
      }, 2000);
      console.error('Алдаа гарлаа:', response.statusText);
    }
  } catch (error) {
    errorMessage.value.text = `Алдаа: ${error}`;
    errorMessage.value.status = "error";
    setTimeout(() => {
      errorMessage.value.text = '';
      errorMessage.value.status = '';
    }, 2000);
    console.error('Алдаа:', error);
  } finally {
    isLoading.value = false; // ⬅ Дуусахаар loading болиулна
  }
};


const optionStore = useOptionStore();

const infos = computed(() => {
  return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult || [];
});


const getOptionPrice = () => {
  return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult?.TariffInfo || [];
};


const getFlightData = () => {
  return infos.value || { Offers: { OfferInfo: [] } };
};

const getAllSegments = () => {
  // console.log(getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [])
  return getFlightData().Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
};
</script>
<style lang="css" scoped>
/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 10px;
}

/* Modal content */
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Анхааруулга */
.alert-warning {
  background: #fff3cd;
  padding: 10px;
  border-left: 5px solid #ffc107;
  margin-bottom: 15px;
}

/* Зорчигчийн мэдээлэл */
.passenger-info {
  overflow-x: auto;
  margin-bottom: 15px;
}

.passenger-info table {
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
}

.passenger-info th,
.passenger-info td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 14px;
}

/* Үйлчилгээний нөхцөл */
.terms-container {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: #f9f9f9;
}

/* Modal actions */
.modal-actions {
  margin-top: 10px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.alert-loading {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
  width: 100vw;
  /* Default: mobile 100% дэлгэц */
  z-index: 9999;
}

/* Desktop (768px-с дээш дэлгэц) үед */
@media (min-width: 768px) {
  .alert-loading {
    width: 30vw;
  }
}

/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}


.btn {
  padding: 10px 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;
}

.btn-secondary {
  background: #ccc;
  color: #333;
}

.btn-primary-soft {
  background: #007bff;
  color: white;
}

.btn-primary-soft:disabled {
  background: #aaa;
  cursor: not-allowed;
}

.disabled-link {
  pointer-events: none;
  opacity: 0.5;
}
</style>

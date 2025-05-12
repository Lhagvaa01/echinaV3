<template>
  <form class="card border">
    <b-card-header class="border-bottom px-4">
      <b-card-title tag="h3" class="mb-0">{{ t('txtTravelerInfo') }}</b-card-title>
    </b-card-header>

    <b-card-body class="py-4">
      <div class="bg-danger bg-opacity-10 rounded-2 p-3 mb-3">
        <p class="h6 fw-light small mb-0">
          <span class="badge bg-danger me-2">New</span>Please make sure you enter the Name as per
          your passport
        </p>
      </div>

      <div class="text-end mb-3">
        <a href="#" class="btn btn-primary-soft mb-0" @click.prevent="addTraveler">{{ t('txtAddTraveler') }}</a>
      </div>

      <b-accordion class="accordion-icon accordion-bg-light">
        <b-accordion-item v-for="(traveler, index) in travelers" :key="traveler.id" :header-tag="'h6'"
          header-class="font-base" button-class="fw-bold"
          :title="`${traveler.ageType == 'Adult' ? 'Том хүн' : traveler.ageType == 'Child' ? 'Хүүхэд' : ''} ${index + 1}`"
          body-class="mt-3" class="mb-3" :visible="index === 0">
          <b-row class="g-4">

            <b-col md="3">
              <b-form-group :label="t('txtPassportNum')">
                <b-form-input id="passwordNum" name="passwordNum" type="text" autocomplete="name"
                  :placeholder="t('txtPassportNum')" v-model="traveler.document"
                  :state="isPassportValid(traveler.document)"
                  @keydown.enter="autoFillTravelerByPassport(traveler.document, traveler)"
                  @blur="autoFillTravelerByPassport(traveler.document, traveler)" />
                <b-form-invalid-feedback v-if="!isPassportValid(traveler.document)">
                  Пасспортын дугаар буруу байна.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <!-- <b-col md="9">
              <label class="form-label">Бүтэн нэр</label>
              <div class="input-group">
                <b-form-input type="text" placeholder="Эцэг(Эх)-ийн нэр" v-model="traveler.lastName" />
                <b-form-input type="text" placeholder="Өөрийн нэр" v-model="traveler.firstName" />
              </div>
            </b-col> -->
            <b-col md="9">
              <b-form-group :label="t('txtFullName')">
                <div class="input-group">
                  <b-form-input id="txtSureName" name="txtSureName" type="text" autocomplete="name"
                    :placeholder="t('txtSureName')" v-model="traveler.surname"
                    :state="isNameValid(traveler.name, traveler.surname) ? true : false" />
                  <b-form-input id="txtName" name="txtName" type="text" autocomplete="name" :placeholder="t('txtName')"
                    v-model="traveler.name" :state="isNameValid(traveler.name, traveler.surname) ? true : false" />
                </div>
                <div class="invalid-feedback d-block text-danger" v-if="!isNameValid(traveler.name, traveler.name)">
                  Нэрийн бүх талбарыг бөглөнө үү. Зөвхөн үсэг бичнэ!
                </div>
              </b-form-group>

            </b-col>

            <b-col md="6">
              <SelectFormInput id="nationality" :label="t('txtBirthIso')" v-model="traveler.birthISO"
                :options="nationalityOptions" :choice-options="{ searchEnabled: false }"
                :state="isNationalityValid(traveler.birthISO)" />
              <!-- <b-form-invalid-feedback v-if="!isNationalityValid(traveler.nationality)">
                Харьяаллаа сонгоно уу.
              </b-form-invalid-feedback> -->
              <div class="invalid-feedback d-block text-danger" v-if="!isNationalityValid(traveler.birthISO)">
                Харьяаллаа сонгоно уу.
              </div>
            </b-col>

            <!-- <b-col md="6">
              <label class="form-label">Төрсөн өдөр, сар, он/Date of birth</label>
              <b-row class="g-0">
                <b-col cols="4">
                  <div class="choice-radius-end">
                    <SelectFormInput id="date" v-model="traveler.dateOfBirth" :options="dateOptions"
                      :choice-options="{ searchEnabled: false }" custom-class="z-index-9 rounded-start" />
                  </div>
                </b-col>
                <b-col cols="4">
                  <div class="choice-radius-0">
                    <SelectFormInput id="month" v-model="traveler.dateOfBirth" :options="monthOptions"
                      :choice-options="{ searchEnabled: false }"
                      custom-class="choice-radius-0 z-index-9 border-0 bg-light" />
                  </div>
                </b-col>
                <b-col cols="4">
                  <div class="choice-radius-start">
                    <SelectFormInput id="year" v-model="traveler.dateOfBirth" :options="yearOptions"
                      :choice-options="{ searchEnabled: false }" custom-class="z-index-9 border-0 bg-light" />
                  </div>
                </b-col>
              </b-row>
            </b-col> -->
            <!-- Төрсөн огноо -->
            <b-col md="6">
              <label class="form-label">{{ t('txtBirthDate') }}</label>
              <b-row class="g-0">
                <b-col cols="4">
                  <SelectFormInput id="date" v-model="traveler.birthDay.day" :options="dateOptions" />
                </b-col>
                <b-col cols="4">
                  <SelectFormInput id="month" v-model="traveler.birthDay.month" :options="monthOptions" />
                </b-col>
                <b-col cols="4">
                  <SelectFormInput id="year" v-model="traveler.birthDay.year" :options="yearOptions" />
                </b-col>
              </b-row>
              <!-- <b-form-invalid-feedback v-if="!isDateValid(traveler.dateOfBirth)">
                Бүрэн бөглөнө үү.
              </b-form-invalid-feedback> -->
              <div class="invalid-feedback d-block text-danger" v-if="!isDateValid(traveler.birthDay)">
                Төрсөн он, сар, өдөр бүрэн бөглөнө үү.
              </div>
            </b-col>


            <!-- <b-col md="6">
              <SelectFormInput id="gender" label="Хүйс" v-model="traveler.gender" :options="titleOptions"
                :choice-options="{ searchEnabled: false }" />
            </b-col> -->
            <!-- Хүйс -->
            <b-col md="6">
              <SelectFormInput id="gender" :label="t('txtGender')" v-model="traveler.gender" :options="titleOptions"
                :choice-options="{ searchEnabled: false }" :state="isGenderValid(traveler.gender)" />
              <!-- <b-form-invalid-feedback v-if="!isGenderValid(traveler.gender)">
                Хүйсээ сонгоно уу.
              </b-form-invalid-feedback> -->
              <div class="invalid-feedback d-block text-danger" v-if="!isGenderValid(traveler.gender)">
                Хүйсээ сонгоно уу.
              </div>
            </b-col>


            <!-- <b-col md="6">
              <label class="form-label">Пасспортын дуусах хугацаа</label>
              <b-row class="g-0">
                <b-col cols="4">
                  <div class="choice-radius-end">
                    <SelectFormInput id="Pdate" v-model="traveler.DocumentExDate" :options="dateOptions"
                      :choice-options="{ searchEnabled: false }" custom-class="z-index-9 rounded-start" />
                  </div>
                </b-col>
                <b-col cols="4">
                  <div class="choice-radius-0">
                    <SelectFormInput id="Pmonth" v-model="traveler.DocumentExDate" :options="monthOptions"
                      :choice-options="{ searchEnabled: false }"
                      custom-class="choice-radius-0 z-index-9 border-0 bg-light" />
                  </div>
                </b-col>
                <b-col cols="4">
                  <div class="choice-radius-start">
                    <SelectFormInput id="Pyear" v-model="traveler.DocumentExDate" :options="yearOptions"
                      :choice-options="{ searchEnabled: false }" custom-class="z-index-9 border-0 bg-light" />
                  </div>
                </b-col>
              </b-row>
            </b-col> -->
            <!-- Паспортын хугацаа -->
            <b-col md="6">
              <label class="form-label">{{ t('txtPassportDate') }}</label>
              <b-row class="g-0">
                <b-col cols="4">
                  <SelectFormInput id="Pdate" v-model="traveler.DocumentExDate.day" :options="dateOptions" />
                </b-col>
                <b-col cols="4">
                  <SelectFormInput id="Pmonth" v-model="traveler.DocumentExDate.month" :options="monthOptions" />
                </b-col>
                <b-col cols="4">
                  <SelectFormInput id="Pyear" v-model="traveler.DocumentExDate.year" :options="yearOptions" />
                </b-col>
              </b-row>
              <!-- <b-form-invalid-feedback v-if="!isDateValid(traveler.DocumentExDate)">
                Бүрэн бөглөнө үү.
              </b-form-invalid-feedback> -->
              <div class="invalid-feedback d-block text-danger" v-if="!isDateValid(traveler.DocumentExDate)">
                Пасспортын дуусах он, сар, өдөр бүрэн бөглөнө үү.
              </div>
            </b-col>
          </b-row>
        </b-accordion-item>
      </b-accordion>


      <ServiceInfo />

      <h5 class="mt-4">{{ t('txtBookingSend') }}</h5>
      <b-row class="g-3 g-md-4">
        <b-col md="6">
          <b-form-group :label="t('txtPhoneNum')">
            <b-form-input v-model="BookingInfo.phoneNumber.value" id="phone" name="phone" type="tel" autocomplete="tel"
              :placeholder="t('txtPhoneNumDes')" :state="isPhoneNumberValid" />
            <div class="invalid-feedback d-block text-danger" v-if="!isPhoneNumberValid">
              {{ t('txtPhoneNumWar') }}
            </div>
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group :label="t('txtEmailAdd')">
            <b-form-input v-model="BookingInfo.email.value" id="mail" name="mail" type="email" autocomplete="email"
              :placeholder="t('txtEmailAddDes')" :state="isEmailValid" />
            <div class="invalid-feedback d-block text-danger" v-if="!isEmailValid">
              {{ t('txtEmailAddDWar') }}
            </div>
          </b-form-group>
        </b-col>
      </b-row>


      <!-- <div class="d-grid mt-4">
        <a href="#" class="btn btn-primary-soft mb-0" :class="{ 'disabled-link': !isFormValid }"
          @click.prevent="pay">Төлбөр төлөх</a>
      </div> -->

      <div class="d-grid mt-4">
        <!-- Төлбөр төлөх товч -->
        <a href="#" class="btn btn-primary-soft mb-0" :class="{ 'disabled-link': !isFormValid }"
          @click.prevent="openModal">
          {{ t('txtPay') }}
        </a>
      </div>

      <!-- Баталгаажуулах Modal -->


      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h3 class="modal-title">Мэдээлэл баталгаажуулах</h3>

          <!-- Анхааруулга -->
          <div class="alert-warning">
            <span class="warning-icon">⚠️</span>
            <strong>Анхааруулга</strong>
          </div>

          <!-- Зорчигчийн мэдээлэл -->
          <div class="passenger-info">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Паспорт</th>
                  <th>Овог</th>
                  <th>Нэр</th>
                  <th>Төрсөн өдөр</th>
                  <th>Хүчинтэй хугацаа</th>
                  <th>Хүйс</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(traveler, index) in travelers" :key="index">
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
              Би үйлчилгээний нөхцөлийг уншиж танилцлаа.
            </h5>
          </div>

          <!-- Үйлдлийн хэсэг -->
          <div class="modal-actions">
            <div class="button-group">
              <h6 class="instruction-text">Үргэлжлүүлэхийн тул үйлчилгээний нөхцөлийг уншиж танилцаад доош гүйлгээд
                "зөвшөөрөх" товчийг дарна уу</h6>
              <button @click="closeModal" class="btn btn-secondary">Хаах</button>
              <button @click="confirmAndPay" class="btn btn-primary-soft" :disabled="!agreed">
                Үргэлжлүүлэх
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isLoading" class="alert-loading">
        <div class="bg-white p-6 rounded-lg shadow-lg text-center rounded-5">
          <div class="loader mb-4"></div>
          <p class="text-lg font-semibold">Түр хүлээнэ үү...</p>
        </div>
      </div>
    </b-card-body>
    <!-- Toast/Error Popup -->
    <!-- <ErrorToast v-if="errorMessage" :message="errorMessage" /> -->
    <!-- <div v-if="errorMessage"
      class="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-black px-6 py-4 rounded-lg shadow-md">
      <p class="text-lg"> {{ errorMessage }} </p>
    </div> -->

    <transition name="fade">
      <div v-if="errorMessage.text" class="alert-wrapper">
        <CustomAlert :severity="errorMessage.status" :message="errorMessage.text" />
      </div>
    </transition>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import CustomFlatpicker from '@/components/CustomFlatpicker.vue';
import SelectFormInput from '@/components/SelectFormInput.vue';
import ServiceInfo from './ServiceInfo.vue';
import dayjs from 'dayjs';
// import  ErrorToast  from '@/components/ErrorToastAlert.vue';
import { useOptionStore } from '@/stores/optionStore';
import CustomAlert from '../../../../components/CustomAlert.vue';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const optionStore = useOptionStore();
const storedData = sessionStorage.getItem("PreBooking") ? JSON.parse(sessionStorage.getItem("PreBooking") || "") : null;



const infos = computed(() => {
  if (optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult) {
    return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult || [];
  } else {
    return storedData?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult || [];
  }

});



const getFlightData = () => {
  return infos.value || { Offers: { OfferInfo: [] } };
};

const getAllSegments = (): any[] => {
  const data = getFlightData();
  const offerInfo = data.Offers?.OfferInfo || [];

  // OfferInfo массив биш бол шууд OfferSegment-ийг буцаах
  if (!Array.isArray(offerInfo)) {
    let segment = offerInfo?.Segments?.OfferSegment;
    if (!Array.isArray(segment)) {
      segment = segment ? [segment] : []

      return segment;
    }
    return segment;
  }

  // OfferInfo массив бол flatMap ашиглан сегментүүдийг цуглуулах
  return offerInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments?.OfferSegment || []);
};

const travelers = ref([
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

const BookingInfo = {
  phoneNumber: ref(''),
  email: ref(''),
};

// const addTraveler = () => {
//   const newTraveler = {
//     id: travelers.value.length + 1,
//     ageType: '',
//     birthDay: { day: "", month: "", year: "" },
//     birthISO: '',
//     document: '',
//     gender: '',
//     name: '',
//     surname: '',
//     DocumentExDate: { day: "", month: "", year: "" }
//   };
//   travelers.value.push(newTraveler);
// };


const addTraveler = () => {
  const stored = sessionStorage.getItem("travelers");
  if (!stored) return;

  try {
    const parsed = JSON.parse(stored);
    const totalAllowed = (parsed.adults || 0) + (parsed.childs || 0);

    if (travelers.value.length >= totalAllowed) {
      // alert("Нийт зорчигчдын тоо аль хэдийн хүрсэн байна.");
      errorMessage.value.text = "Нийт зорчигчдын тоо аль хэдийн хүрсэн байна.";
      errorMessage.value.status = "error";
      setTimeout(() => {
        errorMessage.value.text = '';
        errorMessage.value.status = '';
      }, 2000);
      return;
    }

    const newTraveler = {
      id: travelers.value.length + 1,
      ageType: '',
      birthDay: { day: "", month: "", year: "" },
      birthISO: '',
      document: '',
      gender: '',
      name: '',
      surname: '',
      DocumentExDate: { day: "", month: "", year: "" }
    };

    travelers.value.push(newTraveler);
  } catch (e) {
    console.error("Session parse error:", e);
  }
};



const monthNameToNumber = (month: string) => {
  const months: Record<string, string> = {
    jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
    jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12"
  };
  return months[month.toLowerCase()] || month; // Хэрэв сарын нэр байхгүй бол өөрчлөхгүй
};

// birthDay-г "2.2.2002" гэсэн текст форматад хөрвүүлэх функц
const formatBirthDay = (birthDay: { month: any; day: any; year: any; }) => {
  const monthNumber = monthNameToNumber(birthDay.month); // Сарны нэрийг тоо руу хөрвүүлнэ
  return `${birthDay.day}.${monthNumber}.${birthDay.year}`;
};

// API руу илгээх өгөгдлийг бэлтгэх (id болон DocumentExDate-г хасах)
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

// Modal нээх функц
const openModal = () => {
  travelers.value.forEach(traveler => {
    traveler.ageType = getAgeCategory(traveler.birthDay).toString();
  });
  // 🧠 Session-аас зорчигчдын тоог авах
  const stored = sessionStorage.getItem("travelers");
  if (!stored) return;

  try {
    const parsed = JSON.parse(stored);
    const expectedAdults = parsed.adults || 0;
    const expectedChildren = parsed.childs || 0;

    // 👤 actual зорчигчдын тоо
    const actualAdults = travelers.value.filter(t => t.ageType === 'Adult').length;
    const actualChildren = travelers.value.filter(t => t.ageType === 'Child').length;
    console.log(travelers)
    // ❗ Шалгах
    if (actualAdults !== expectedAdults || actualChildren !== expectedChildren) {
      // alert(`Зорчигчдын төрөл зөрж байна!\nТом хүн: ${expectedAdults}, Хүүхэд: ${expectedChildren}`);
      errorMessage.value.text = `Зорчигчдын төрөл зөрж байна!\nТом хүн: ${expectedAdults}, Хүүхэд: ${expectedChildren}`;
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



// Modal хаах функц
const closeModal = () => {
  showModal.value = false;
};

const show = ref(false);

const errorMessage = ref({ status: '', text: '' });
const isLoading = ref(false);

const confirmAndPay = async () => {
  showModal.value = false;
  isLoading.value = true; // ⬅ Түр хүлээж байна гэдгийг эхлүүлнэ

  travelers.value.forEach(traveler => {
    traveler.ageType = getAgeCategory(traveler.birthDay).toString();
  });

  const formattedTravelers = prepareDataForApi(travelers.value);

  const payload = {
    offerCode: infos.value?.OfferCode,
    searchGuid: infos.value?.SearchGuid,
    clientRef: '976' + BookingInfo.phoneNumber.value,
    email: BookingInfo.email.value,
    phone: '976' + BookingInfo.phoneNumber.value,
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




onMounted(() => {
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, 3000);
});


const autoFillTravelerByPassport = async (passportNumber: any, traveler: { name: any; surname: any; birthISO: any; birthDay: { day: any; month: any; year: any; }; DocumentExDate: { day: any; month: any; year: any; }; gender: any; }) => {

  try {
    const res = await fetch(`https://api.airkacc.mn/api/passAutoComplete/${passportNumber}/`);
    const data = await res.json();

    if (data.status === "SUCCESS") {
      const result = data.result;
      const [year, month, day] = result.birthDay.split("-");
      const [yearEx, monthEx, dayEx] = result.expireDate.split("-");
      traveler.name = result.name;
      traveler.surname = result.surname;
      traveler.birthISO = result.birthISO;
      traveler.birthDay.day = day;
      traveler.birthDay.month = month;
      traveler.birthDay.year = year;
      traveler.DocumentExDate.day = dayEx;
      traveler.DocumentExDate.month = monthEx;
      traveler.DocumentExDate.year = yearEx;
      traveler.gender = result.sex;

      travelers.value.forEach(traveler => {
        traveler.ageType = getAgeCategory(traveler.birthDay).toString();
      });
    }
  } catch (err) {
    console.error("Алдаа гарлаа:", err);
  }
};


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
  return phoneRegex.test(BookingInfo.phoneNumber.value);
});


const isEmailValid = computed(() => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(BookingInfo.email.value);
});

// Насны ангилал шалгах функц
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

function formatDate(input: string): string {
  const [day, month, yearAndTime] = input.split(".");
  const [year, time] = yearAndTime.split(" ");
  return `${year}-${month}-${day}`;
}

const isFormValid = computed(() => {
  return travelers.value.every(traveler =>
    isNameValid(traveler.name, traveler.surname) &&
    isPassportValid(traveler.document) &&
    isDateValid(traveler.birthDay) &&
    isDateValid(traveler.DocumentExDate) &&
    isGenderValid(traveler.gender) &&
    isNationalityValid(traveler.birthISO) &&
    isPhoneNumberValid.value &&
    isEmailValid.value
  );
});


// const titleOptions = [
//   { value: 'Gender', text: 'Хүйс' },
//   { value: 'Male', text: 'Эр' },
//   { value: 'Female', text: 'Эм' }
// ];

const titleOptions = [
  { value: 'Gender', text: 'Хүйс' },
  ...['Male', 'Female'].map(g => ({
    value: g,
    text: g === 'Male' ? 'Эр' : 'Эм'
  }))
];

// const dateOptions = [
//   { value: 'date', text: 'Өдөр' },
//   { value: '01', text: '1' },
//   { value: '02', text: '2' },
//   { value: '03', text: '3' },
//   { value: '04', text: '4' },
//   { value: '05', text: '5' },
//   { value: '06', text: '6' },
//   { value: '07', text: '7' },
//   { value: '08', text: '8' },
//   { value: '09', text: '9' },
//   { value: '10', text: '10' },
//   { value: '11', text: '11' },
//   { value: '12', text: '12' },
//   { value: '13', text: '13' },
//   { value: '14', text: '14' },
//   { value: '15', text: '15' },
//   { value: '16', text: '16' },
//   { value: '17', text: '17' },
//   { value: '18', text: '18' },
//   { value: '19', text: '19' },
//   { value: '20', text: '20' },
//   { value: '21', text: '21' },
//   { value: '22', text: '22' },
//   { value: '23', text: '23' },
//   { value: '24', text: '24' },
//   { value: '25', text: '25' },
//   { value: '26', text: '26' },
//   { value: '27', text: '27' },
//   { value: '28', text: '28' },
//   { value: '29', text: '29' },
//   { value: '30', text: '30' },
//   { value: '31', text: '31' }
// ];

const dateOptions = [
  { value: 'date', text: 'Өдөр' },
  ...Array.from({ length: 31 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return { value: num, text: String(i + 1) };
  })
];


// const monthOptions = [
//   { value: 'month', text: 'Сар' },
//   { value: '01', text: 'Jan' },
//   { value: '02', text: 'Feb' },
//   { value: '03', text: 'Mar' },
//   { value: '04', text: 'Apr' },
//   { value: '05', text: 'May' },
//   { value: '06', text: 'Jun' },
//   { value: '07', text: 'Jul' },
//   { value: '08', text: 'Aug' },
//   { value: '09', text: 'Sep' },
//   { value: '10', text: 'Oct' },
//   { value: '11', text: 'Nov' },
//   { value: '12', text: 'Dec' }
// ];


const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const monthOptions = [
  { value: 'month', text: 'Сар' },
  ...monthNames.map((name, i) => {
    const value = String(i + 1).padStart(2, '0');
    return { value, text: name };
  })
];


// const yearOptions = [
//   { value: 'year', text: 'Жил' },
//   { value: '2000', text: '2000' },
//   { value: '2001', text: '2001' },
//   { value: '2002', text: '2002' },
//   { value: '2003', text: '2003' },
//   { value: '2004', text: '2004' },
//   { value: '2005', text: '2005' },
//   { value: '2006', text: '2006' },
//   { value: '2007', text: '2007' },
//   { value: '2008', text: '2008' },
//   { value: '2009', text: '2009' },
//   { value: '2010', text: '2010' },
//   { value: '2011', text: '2011' },
//   { value: '2012', text: '2012' },
//   { value: '2013', text: '2013' },
//   { value: '2014', text: '2014' },
//   { value: '2015', text: '2015' },
//   { value: '2016', text: '2016' },
//   { value: '2017', text: '2017' },
//   { value: '2018', text: '2018' },
//   { value: '2019', text: '2019' },
//   { value: '2020', text: '2020' }
// ];


const currentYear = new Date().getFullYear();

const yearOptions = [
  { value: 'year', text: 'Жил' },
  ...Array.from({ length: currentYear - 1500 + 1 }, (_, i) => {
    const year = 1950 + i;
    return { value: String(year), text: String(year) };
  })
];


// const nationalityOptions = [
//   { value: 'select-nationality', text: 'Харьяалал' },
//   { value: 'RUS', text: 'Russian' }
// ];

const nationalityList = [
  { value: 'RUS', text: 'Russian' },
  { value: 'MNG', text: 'Mongolian' },
  { value: 'CHN', text: 'Chinese' },
  { value: 'JPN', text: 'Japanese' }
  // хүсвэл API-гаас авдаг болгож болно
];

const nationalityOptions = [
  { value: 'select-nationality', text: 'Харьяалал' },
  ...nationalityList
];



</script>


<style lang="css" scoped>
.disabled-link {
  pointer-events: none;
  opacity: 0.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
  z-index: 1000;
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

.instruction-text {
  flex: 1 1 100%;
  font-size: 14px;
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

@media screen and (max-width: 480px) {
  .modal-content {
    padding: 15px;
  }

  .passenger-info th,
  .passenger-info td {
    font-size: 12px;
    padding: 6px;
  }

  .terms-container {
    font-size: 12px;
  }

  .btn {
    font-size: 12px;
    padding: 8px 12px;
  }

  .instruction-text {
    font-size: 12px;
  }
}

.scrollable-warning-message {
  max-height: 200px;
  /* Set the maximum height for the container */
  overflow-y: auto;
  /* Enable vertical scrolling */
  padding: 10px;
  /* Optional: Adjust padding */
  border: 1px solid #ccc;
  /* Optional: Add border */
  background-color: #f9f9f9;
  /* Optional: Add a background color */
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

.alert-wrapper {
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
  width: 100vw;
  /* Default: mobile 100% дэлгэц */
  z-index: 9999;
}

/* Desktop (768px-с дээш дэлгэц) үед */
@media (min-width: 768px) {
  .alert-wrapper {
    width: 30vw;
  }
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
</style>
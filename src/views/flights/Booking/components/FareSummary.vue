<template>
  <b-col md="6" xl="12">
    <b-card no-body class="bg-light rounded-2">
      <b-card-header class="border-bottom bg-light">
        <b-card-title tag="h5" class="mb-0">Төлбөрийн мэдээлэл</b-card-title>
      </b-card-header>

      <b-card-body>
        <ul class="list-group list-group-borderless">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center ">
              <span class="h6 fw-bold mb-0 me-2">Нийт Дүн</span>
            </div>
            <b-button size="md" variant="link" class="p-0 m-0"
              @click="copyText((Number(getOptionPrice()?.AdultPrice) + 7000).toString())">
              <span class="h6 fw-normal text-primary mb-0 me-2">{{ currency }}{{ Number(getOptionPrice()?.AdultPrice) +
                7000 || "" }}</span>
              <i class="fas fa-copy"></i>
            </b-button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <!-- <span class="h6 fw-normal mb-0">Гүйлгээний утга</span>
            <span class="h5 fw-normal mb-0">{{ transactionCode }}</span> -->

            <div class="d-flex align-items-center ">
              <span class="h6 fw-bold mb-0 me-2">Гүйлгээний утга</span>
            </div>
            <b-button size="md" variant="link" class="p-0 m-0" @click="copyText(transactionCode.toString())">
              <span class="h6 fw-normal text-primary mb-0 me-2">{{ transactionCode }}</span>
              <i class="fas fa-copy"></i>
            </b-button>
          </li>

          <div>

            <div class="row g-3">
              <!-- Банк бүрийг card болгож харуулна -->
              <div v-for="(bank, index) in bankInfo" :key="index" class="col-6">
                <div class="card shadow-sm rounded-2 p-2 d-flex flex-row align-items-center justify-content-between"
                  :class="{ 'border-primary border-2': selectedBank === index }" style="cursor: pointer;"
                  @click="selectBank(index)">
                  <div class="d-flex align-items-center">
                    <div class="bg-light rounded-2 d-flex justify-content-center align-items-center me-1"
                      style="width: 50px; height: 50px;">
                      <!-- <i class="fas fa-university text-primary fs-4"></i> -->
                      <img :src="`/bankIcon/${bank.bic}.png`" alt="Bank Logo"
                        style="width: 30px; height: 30px; object-fit: contain;">
                    </div>
                    <div>
                      <div class="fw-light text-black fs-6">{{ bank.bank }}</div>
                    </div>
                  </div>
                  <i class="fas fa-chevron-right text-muted"></i>
                </div>
              </div>

            </div>

            <!-- Хэрвээ банк сонгосон бол дэлгэрэнгүй мэдээлэл харуулах -->
            <ul v-if="bankInfo && bankInfo[selectedBank] && selectedBank !== null" class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <span class="h6 fw-bold mb-0 me-2">Банк</span>
                </div>
                <b-button size="md" variant="link" class="p-0 m-0" @click="copyText(bankInfo[selectedBank].bank)">
                  <span class="h6 fw-normal text-primary mb-0 me-2">{{ bankInfo[selectedBank].bank }}</span>
                  <i class="fas fa-copy"></i>
                </b-button>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <span class="h6 fw-bold mb-0 me-2">Данс</span>
                </div>
                <b-button size="md" variant="link" class="p-0 m-0" @click="copyText(bankInfo[selectedBank].acc_number)">
                  <span class="h6 fw-normal text-primary mb-0 me-2">{{ bankInfo[selectedBank].acc_number }}</span>
                  <i class="fas fa-copy"></i>
                </b-button>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <span class="h6 fw-bold mb-0 me-2">IBAN</span>
                </div>

                <b-button v-if="bankInfo[selectedBank].bic == 'khanbank'" size="md" variant="link" class="p-0 m-0"
                  @click="copyText('MN68000500' + bankInfo[selectedBank].acc_number.toString())">
                  <span class="h6 fw-normal text-primary mb-0 me-2">MN68000500{{ bankInfo[selectedBank].acc_number
                    }}</span>
                  <i class="fas fa-copy"></i>
                </b-button>
                <b-button v-else size="md" variant="link" class="p-0 m-0"
                  @click="copyText('MN44001500' + bankInfo[selectedBank].acc_number.toString())">
                  <span class="h6 fw-normal text-primary mb-0 me-2">MN44001500{{ bankInfo[selectedBank].acc_number
                    }}</span>
                  <i class="fas fa-copy"></i>
                </b-button>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <span class="h6 fw-bold mb-0 me-2">Данс эзэмшигч</span>
                </div>
                <b-button size="md" variant="link" class="p-0 m-0"
                  @click="copyText(bankInfo[selectedBank].acc_holder_name)">
                  <span class="h6 fw-normal text-primary mb-0 me-2">{{ bankInfo[selectedBank].acc_holder_name }}</span>
                  <i class="fas fa-copy"></i>
                </b-button>
              </li>
            </ul>

          </div>
        </ul>
      </b-card-body>

      <b-card-footer class="border-top bg-light">
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 fw-normal mb-0">Нийт дүн</span>
          <span class="h5 fw-normal mb-0 text-primary">{{ currency }}{{ Number(getOptionPrice()?.AdultPrice) + 7000 ||
            "" }}</span>
        </div>
      </b-card-footer>

      <b-card-footer class="border-top bg-light">
        <div class="d-flex justify-content-center align-items-center text-center">
          <span class="footer-text">
            ХЭРЭВ ТА ТӨЛБӨРӨӨ ТӨЛСӨН БОЛ ТАНЫ УТАС БОЛОН ИМЭЙЛ-Д БИЛЕТ ЗАХИАЛГА НЬ
            АМЖИЛТТАЙ БАТАЛГААЖСАН МЭДЭЭ ИРСЭНЭЭР ТАНЫ ЗАХИАЛГА АМЖИЛТТАЙ ДУУСНА.
            ХЭРЭВ ТИЙМ МЭДЭЭ ХҮЛЭЭЖ АВААГҮЙ БОЛ ХОЛБОО БАРИХ ХЭСГЭЭР БИДЭНТЭЙ ХОЛБОГДОНО УУ.
          </span>
        </div>
      </b-card-footer>
    </b-card>
  </b-col>
  <!-- {{ errorMessage }} -->
  <transition name="fade">
    <div v-if="errorMessage" class="alert-wrapper">
      <CustomAlert severity="info" :message="errorMessage" />
    </div>
  </transition>

</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { currency } from '@/helpers/constants'
import { BIconInfoCircle } from 'bootstrap-icons-vue'
import { useOptionStore } from '@/stores/optionStore'
import { useToast } from 'bootstrap-vue-next'
import { BToast } from 'bootstrap-vue-next'
import CustomAlert from '../../../../components/CustomAlert.vue';
// import Alert from '@mui/material/Alert';


const bvToast = useToast();

const errorMessage = ref('');

const optionStore = useOptionStore();

const storedData = sessionStorage.getItem("BookingInfo") ? JSON.parse(sessionStorage.getItem("BookingInfo") || "") : null;

const infos = computed(() => {
  console.log(storedData?.result?.Body?.AeroBookResponse?.AeroBookResult)
  if (optionStore.optionInfos?.result?.Body?.AeroBookResponse?.AeroBookResult) {
    return optionStore.optionInfos?.result?.Body?.AeroBookResponse?.AeroBookResult || [];
  } else {
    return storedData?.result?.Body?.AeroBookResponse?.AeroBookResult || [];
  }

});

const transactionCode = computed(() => {
  return storedData?.result?.transactionCode || [];

});


const getOptionPrice = () => {
  return storedData?.result?.Body?.AeroBookResponse?.AeroBookResult?.TariffInfo || [];
};


const getFlightData = () => {
  return infos.value || { Offers: { OfferInfo: [] } };
};

const getAllSegments = () => {
  // console.log(getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [])
  return getFlightData().Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
};



const selectedBank = ref(0); // Сонгосон банкны индекс хадгална

function selectBank(index) {
  console.log(index)
  selectedBank.value = index;
}

const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    errorMessage.value = "Амжилттай хуулагдлаа! " + text
    setTimeout(() => {
      errorMessage.value = '';
    }, 2000);
  } catch (err) {
    console.error('Хуулахад алдаа гарлаа:', err);
  }
};



const orderId = ref('');
const bankInfo = ref([]);
const loading = ref(false);
const error = ref(null);


async function fetchbankInfo() {

  loading.value = true;
  error.value = null;
  bankInfo.value = null;


  try {
    const response = await fetch(`https://api.airkacc.mn/api/res/getAccountInfo/mn/`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log(data)
    if (data.status === 'SUCCESS' && data.result) {
      bankInfo.value = data.result;
    } else {
      error.value = 'Банкны мэдээлэл олдсонгүй';
    }

  } catch (err) {
    console.error('Алдаа дэлгэрэнгүй:', err); // >>> Энийг нэмээрэй!
    if (err.response) {
      error.value = `Серверээс буцсан алдаа: ${err.response.status} - ${err.response.statusText}`;
    } else {
      error.value = 'Алдаа гарлаа. Та дахин оролдоно уу.';
    }
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchbankInfo();
});

</script>


<style scoped>
.terms-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.b-button {
  padding: 0.25rem;
}

.b-button i {
  color: #6c757d;
  transition: color 0.3s;
}

.b-button:hover i {
  color: #000;
}

.footer-text {
  font-size: 14px;
  /* Жижиг font */
  font-weight: 400;
  /* Light */
  color: #555;
  /* Сааралдуу зөөлөн өнгө */
  line-height: 1.6;
  max-width: 800px;
  /* Дээд талын өргөн */
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

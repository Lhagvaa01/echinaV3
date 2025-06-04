<template>
  <b-col md="6" xl="12">
    <b-card no-body class="bg-light rounded-2">
      <b-card-header class="border-bottom bg-light">
        <b-card-title tag="h5" class="mb-0">{{ t('txtPaymentInfo') }}</b-card-title>
        <!-- <p>{{ remainingTime }}</p> -->
      </b-card-header>

      <b-card-header class="d-flex justify-content-between align-items-center border-bottom bg-light">
        <b-card-title tag="h6" class=" d-flex align-items-center  mb-0">{{ t('txtPaymentTime') }}: </b-card-title>
        <div class="fw-bold text-danger align-items-center h5 mb-0" v-if="remainingTime">
          {{ remainingTime }}
        </div>
        <div v-else>
          {{ t('txtTimeEnd') }}
        </div>
      </b-card-header>
      <b-modal v-model="showTimeoutModal" centered hide-header hide-footer :no-close-on-backdrop="true"
        :no-close-on-esc="true">
        <div class="text-center p-4">
          <i class="fas fa-exclamation-circle text-danger" style="font-size: 48px;"></i>
          <h4 class="text-danger mt-3">{{ t('txtWarning') }}</h4>
          <p class="mt-2 mb-1">{{ t('txtTimeEndText') }}</p>
          <p>{{ t('txtOtherFlight') }}</p>
          <b-button variant="danger" class="mt-3 px-4" @click="redirectToSearch">{{ t('txtBack') }}</b-button>
        </div>
      </b-modal>
      <!-- <div class="text-center mt-4">
        <h2 class="text-lg font-semibold">Төлбөрийн мэдээлэл</h2>
        <hr class="my-2 border-dashed border-gray-400" />
        <div v-if="remainingTime">
          Remaining time: {{ remainingTime }}
        </div>
        <div v-else>
          Цаг дууссан
        </div>
      </div> -->

      <b-card-body>
        <ul class="list-group list-group-borderless">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center ">
              <span class="h6 fw-bold mb-0 me-2">{{ t('txtTotalAmount') }}</span>
            </div>
            <b-button size="md" variant="link" class="p-0 m-0" @click="copyText(Math.ceil((Number(infos.FullPrice) *
              parseFloat(rate) + totalFee)).toLocaleString().toString())">
              <span class="h6 fw-normal text-primary mb-0 me-2">{{ Math.ceil((Number(infos.FullPrice) *
                parseFloat(rate) + totalFee)).toLocaleString() || "" }}{{ currency }}</span>
              <i class="fas fa-copy"></i>
            </b-button>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <!-- <span class="h6 fw-normal mb-0">Гүйлгээний утга</span>
            <span class="h5 fw-normal mb-0">{{ transactionCode }}</span> -->

            <div class="d-flex align-items-center ">
              <span class="h6 fw-bold mb-0 me-2">{{ t('txtTransaction') }}</span>
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
                  <span class="h6 fw-bold mb-0 me-2">{{ t('txtBank') }}</span>
                </div>
                <b-button size="md" variant="link" class="p-0 m-0" @click="copyText(bankInfo[selectedBank].bank)">
                  <span class="h6 fw-normal text-primary mb-0 me-2">{{ bankInfo[selectedBank].bank }}</span>
                  <i class="fas fa-copy"></i>
                </b-button>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <span class="h6 fw-bold mb-0 me-2">{{ t('txtBankNumber') }}</span>
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
                  <span class="h6 fw-bold mb-0 me-2">{{ t('txtBankAccount') }}</span>
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
          <span class="h5 fw-normal mb-0">{{ t('txtTotalAmount') }}</span>
          <span class="h6 fw-normal text-primary mb-0 me-2">{{ Math.ceil((Number(infos.FullPrice) *
            parseFloat(rate) + totalFee)).toLocaleString() || "" }}{{ currency }}</span>
        </div>
      </b-card-footer>

      <button @click="confirmAndPay" class="btn btn-primary-soft m-3">
        {{ t('txtPaymentCheck') }}
      </button>

      <!-- <b-alert show>
        {{ errorMessage.text }}
      </b-alert> -->

      <b-card-footer class="border-top bg-light">
        <div class="d-flex justify-content-center align-items-center text-center">
          <span class="footer-text">
            {{ t('txtPaymentText') }}
          </span>
        </div>
      </b-card-footer>
    </b-card>
  </b-col>
  <!-- {{ errorMessage }} -->
  <transition name="fade">
    <div v-if="errorMessage.text" class="alert-wrapper">
      <CustomAlert severity="info" :message="errorMessage.text" />
    </div>
  </transition>

</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { currency } from '@/helpers/constants'
import { BIconInfoCircle } from 'bootstrap-icons-vue'
import { useOptionStore } from '@/stores/optionStore'
import { useToast } from 'bootstrap-vue-next'
import { BToast } from 'bootstrap-vue-next'
import CustomAlert from '../../../../components/CustomAlert.vue';
import { useRouter } from 'vue-router';

import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
// import Alert from '@mui/material/Alert';

const rate = sessionStorage.getItem('eur')

const totalFee = ref(0)
const fee = 7000

onMounted(() => {
  const travelersStr = sessionStorage.getItem("travelers")
  if (travelersStr) {
    try {
      const parsed = JSON.parse(travelersStr)
      const adults = parsed.adults || 0
      const childs = parsed.childs || 0
      const infants = parsed.infants || 0

      totalFee.value = (adults + childs + infants) * fee
    } catch (e) {
      console.error("❌ travelers JSON parse алдаа:", e)
    }
  }
})

const bvToast = useToast();

// const errorMessage = ref('');

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

const oid = computed(() => {
  if (optionStore.optionInfos?.result) {
    return optionStore.optionInfos?.result?.oid || [];
  } else {
    return storedData?.result?.oid || [];
  }

});

const errorMessage = ref({ status: '', text: '' });
const isLoading = ref(false);
const showModal = ref(false);


const polling = ref(false);
let pollInterval = null;

const startPaymentPolling = () => {
  if (polling.value) return;
  polling.value = true;
  pollInterval = setInterval(async () => {
    try {
      const response = await fetch('https://api.airkacc.mn/api/checkPayment/mn/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oid: oid.value,
          amount: Math.ceil(Number(infos.value.FullPrice) * parseFloat(rate) + totalFee.value)
        })
      });
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        clearInterval(pollInterval);
        errorMessage.value.text = data.message;
        errorMessage.value.status = data.status;
        setTimeout(() => {
          errorMessage.value.text = '';
          errorMessage.value.status = '';
        }, 2000);
        polling.value = false;
        setTimeout(() => {
          window.location.href = `/flights/booking/confirm/${oid.value}/`;
        }, 2000);
      }
    } catch (err) {
      console.error("Polling error:", err);
    }
  }, 5000);
};

const stopPolling = () => {
  clearInterval(pollInterval);
  polling.value = false;
};

onMounted(() => {
  startPaymentPolling();
});

onUnmounted(() => {
  stopPolling();
});

const confirmAndPay = async () => {
  showModal.value = false;
  isLoading.value = true; // ⬅ Түр хүлээж байна гэдгийг эхлүүлнэ

  console.log(infos.value)
  const body = {
    oid: oid.value,
    amount: Math.ceil(Number(infos.value.FullPrice) * parseFloat(rate) + totalFee.value)
  };


  try {
    const response = await fetch('https://api.airkacc.mn/api/checkPayment/mn/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        // var orderInfo = data.result.Body.AeroBookResponse.AeroBookResult;
        // const oid = orderInfo.value.oid;
        errorMessage.value.text = data.message;
        errorMessage.value.status = data.status;
        setTimeout(() => {
          errorMessage.value.text = '';
          errorMessage.value.status = '';
        }, 2000);
        // sessionStorage.setItem("BookingInfo", JSON.stringify(data));
        window.location.href = `/flights/booking/confirm/${oid.value}/`;

      } else {
        console.log(data.message)
        errorMessage.value.text = `Анхааруулга: ${data.message}`;
        errorMessage.value.status = "error";
        setTimeout(() => {
          errorMessage.value.text = '';
          errorMessage.value.status = '';
        }, 2000);

        window.location.href = `/flights/booking/confirm/${oid.value}/`;
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




const router = useRouter();
const remainingTime = ref('');
const showTimeoutModal = ref(false);
let intervalId: number | undefined;

function updateRemainingTime() {
  if (!infos.value?.ConfirmableToUtc) return;

  const [datePart, timePart] = infos.value.ConfirmableToUtc.split(" ");
  const [day, month, year] = datePart.split(".");
  const targetUTC = new Date(`${year}-${month}-${day}T${timePart}Z`);

  const now = new Date();
  const nowUTC = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  const ulaanbaatarTime = new Date(nowUTC.getTime() + 8 * 60 * 60000);

  const diff = targetUTC.getTime() - ulaanbaatarTime.getTime();

  if (diff > 0) {
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    remainingTime.value = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } else {
    remainingTime.value = '';
    showTimeoutModal.value = true; // 💡 Popup нээх
    clearInterval(intervalId);
  }
}

function redirectToSearch() {
  router.push('/');
}

onMounted(() => {
  updateRemainingTime();
  intervalId = window.setInterval(updateRemainingTime, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
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
    errorMessage.value.text = "Амжилттай хуулагдлаа! " + text
    setTimeout(() => {
      errorMessage.value.text = '';
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

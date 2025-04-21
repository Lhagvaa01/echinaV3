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

          <!-- Банк -->
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center ">
              <span class="h6 fw-bold mb-0 me-2">Банк</span>
            </div>
            <b-button size="md" variant="link" class="p-0 m-0" @click="copyText('Голомт банк')">
              <span class="h6 fw-normal text-primary mb-0 me-2">Голомт банк</span>
              <i class="fas fa-copy"></i>
            </b-button>
          </li>

          <!-- Данс -->
          <li class="list-group-item d-flex justify-content-between align-items-center">

            <div class="d-flex align-items-center ">
              <span class="h6 fw-bold mb-0 me-2">Данс</span>
            </div>
            <b-button size="md" variant="link" class="p-0 m-0" @click="copyText('12345678')">
              <span class="h6 fw-normal text-primary mb-0 me-2">12345678</span>
              <i class="fas fa-copy"></i>
            </b-button>
          </li>

          <!-- IBAN -->
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center ">
              <span class="h6 fw-bold mb-0 me-2">IBAN</span>
            </div>
            <b-button size="md" variant="link" class="p-0 m-0" @click="copyText('MN8200400012345678')">
              <span class="h6 fw-normal text-primary mb-0 me-2">MN8200400012345678</span>
              <i class="fas fa-copy"></i>
            </b-button>
          </li>

          <!-- Данс эзэмшигч -->
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center ">
              <span class="h6 fw-bold mb-0 me-2">Данс эзэмшигч</span>
            </div>
            <b-button size="md" variant="link" class="p-0 m-0" @click="copyText('Айр касс ХХК')">
              <span class="h6 fw-normal text-primary mb-0 me-2">Айр касс ХХК</span>
              <i class="fas fa-copy"></i>
            </b-button>
          </li>
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
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { currency } from '@/helpers/constants'
import { BIconInfoCircle } from 'bootstrap-icons-vue'
import { useOptionStore } from '@/stores/optionStore'
import { useToast } from 'bootstrap-vue-next'
import { BToast } from 'bootstrap-vue-next'

const bvToast = useToast();



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

const toast = useToast();

const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.show({
      component: BToast,
      props: {
        title: 'Амжилттай',
        body: 'Амжилттай хуулагдлаа!',
        variant: 'success',
        // autoHide: true,
        // delay: 2000,
      },
    });
  } catch (err) {
    console.error('Хуулахад алдаа гарлаа:', err);
  }
};

</script>


<style scoped>
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
</style>

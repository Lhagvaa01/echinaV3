<template>
    <div class="container mt-5">
        <h2 class="mb-4">✈️ Захиалгын мэдээлэл шалгах</h2>

        <div class="mb-3">
            <input v-model="orderId" type="text" class="form-control" placeholder="Захиалгын дугаар оруулна уу..." />
        </div>

        <button class="btn btn-primary" @click="fetchOrderInfo">Хайх</button>

        <div v-if="loading" class="mt-4">
            Түр хүлээнэ үү...
        </div>

        <div v-if="error" class="alert alert-danger mt-4">
            {{ error }}
        </div>

        <div v-if="orderInfo" class="mt-6 p-6 bg-white rounded-2xl shadow-lg space-y-4">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Захиалгын мэдээлэл</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                    <p><strong>Захиалгын дугаар:</strong> {{ orderInfo.orderNo }}</p>
                    <p><strong>Order OID:</strong> {{ orderInfo.oid }}</p>
                    <p><strong>Статус:</strong> {{ orderInfo.status }}</p>
                </div>

                <div>
                    <p><strong>Утас:</strong> {{ orderInfo.phone }}</p>
                    <p><strong>И-мэйл:</strong> {{ orderInfo.email }}</p>
                    <p v-if="orderInfo.PaymentUrl"><strong>Төлбөрийн холбоос:</strong> <a :href="orderInfo.PaymentUrl"
                            class="text-blue-600 underline" target="_blank">Энд дарна уу</a></p>
                </div>

                <div class="col-span-2">
                    <p><strong>Төлбөрийн мэдээлэл:</strong></p>
                    <p>- Үндсэн үнэ: {{ orderInfo.TariffInfo.AdultBasePrice }} {{ orderInfo.Currency }}</p>
                    <p>- Нийт үнэ: {{ orderInfo.TariffInfo.AdultPrice }} {{ orderInfo.Currency }}</p>
                </div>

                <div class="col-span-2">
                    <p><strong>Search Guid:</strong> {{ orderInfo.SearchGuid }}</p>
                </div>

                <div class="col-span-2">
                    <p class="text-lg font-semibold text-gray-800 mt-4 mb-2">Хүн зорчигчийн мэдээлэл</p>
                    <p><strong>Нэр:</strong> {{ orderInfo.PaxList.PaxData.Name }} {{ orderInfo.PaxList.PaxData.Surname
                    }}</p>
                    <p><strong>Нас:</strong> {{ orderInfo.PaxList.PaxData.Age }}</p>
                    <p><strong>Хүйс:</strong> {{ orderInfo.PaxList.PaxData.GenderType }}</p>
                </div>

                <div class="col-span-2">
                    <p class="text-lg font-semibold text-gray-800 mt-4 mb-2">Нислэгийн мэдээлэл</p>
                    <p><strong>Нислэгийн дугаар:</strong> {{ orderInfo.Offers.OfferInfo.Segments.OfferSegment.FlightNum
                    }}</p>
                    <p><strong>Явах хот:</strong> {{ orderInfo.Offers.OfferInfo.Segments.OfferSegment.Departure.City }}
                    </p>
                    <p><strong>Очих хот:</strong> {{ orderInfo.Offers.OfferInfo.Segments.OfferSegment.Arrival.City }}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const orderId = ref('');
const orderInfo = ref(null);
const loading = ref(false);
const error = ref(null);

async function fetchOrderInfo() {
    if (!orderId.value) {
        error.value = 'Захиалгын дугаар оруулна уу.';
        return;
    }

    loading.value = true;
    error.value = null;
    orderInfo.value = null;


    try {
        const response = await fetch(`https://api.airkacc.mn/api/orderinfo/${orderId.value}/mn/`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log(data)
        if (data.status === 'SUCCESS' && data.result?.Body?.AeroBookResponse?.AeroBookResult) {
            orderInfo.value = data.result?.Body?.AeroBookResponse?.AeroBookResult;
        } else {
            error.value = 'Захиалгын дугаар олдсонгүй.';
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


    // try {
    //     const response = await axios.get(`https://api.airkacc.mn/api/orderinfo/${orderId.value}/mn/`);
    //     console.log('API хариу:', response.data); // >>> Энийг нэмээрэй!

    //     if (response.data.status === 'SUCCESS' && response.data.result?.Body?.AeroBookResponse?.AeroBookResult) {
    //         orderInfo.value = response.data.result.Body.AeroBookResponse.AeroBookResult;
    //     } else {
    //         error.value = 'Захиалгын дугаар олдсонгүй.';
    //     }

    // } catch (err) {
    //     console.error('Алдаа дэлгэрэнгүй:', err); // >>> Энийг нэмээрэй!
    //     if (err.response) {
    //         error.value = `Серверээс буцсан алдаа: ${err.response.status} - ${err.response.statusText}`;
    //     } else {
    //         error.value = 'Алдаа гарлаа. Та дахин оролдоно уу.';
    //     }
    // } finally {
    //     loading.value = false;
    // }
};

</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>
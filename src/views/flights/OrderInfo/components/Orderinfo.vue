<template>
    <div>
        <div class="ticket-check">
            <div class="overlay">
                <div class="content">
                    <h1 class="title">Тасалбар шалгах</h1>
                    <p class="subtitle">
                        Доорх формд өөрийн билетийн дугаарыг оруулснаар таны билет амжилттай захиалагдсан эсэхийг
                        баталгаажуулж шалгаж болно.
                    </p>

                    <div class="search-box">
                        <input v-model="orderId" type="text" placeholder="Захиаллын дугаар (Booking ref)"
                            class="input" />
                        <button @click="fetchOrderInfo" class="search-button bg-primary">Тасалбар Шалгах</button>
                    </div>

                    <div v-if="loading" class="loading-text">Түр хүлээнэ үү...</div>
                    <div v-if="error" class="error-text">{{ error }}</div>
                </div>
            </div>
        </div>
        <!-- <b-container>
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
                        <p v-if="orderInfo.PaymentUrl"><strong>Төлбөрийн холбоос:</strong> <a
                                :href="orderInfo.PaymentUrl" class="text-blue-600 underline" target="_blank">Энд дарна
                                уу</a></p>
                    </div>

                    <div class="col-span-2">
                        <p><strong>Төлбөрийн мэдээлэл:</strong></p>
                        <p>- Үндсэн үнэ: {{ orderInfo.TariffInfo.AdultBasePrice }} {{ orderInfo.Currency }}</p>
                        <p>- Нийт үнэ: {{ orderInfo.TariffInfo.AdultPrice }} {{ orderInfo.Currency }}</p>
                    </div>

                    <div class="col-span-2">
                        <p><strong>Search Guid:</strong> {{ orderInfo.SearchGuid }}</p>
                    </div>

                    <div v-if="Array.isArray(orderInfo.PaxList.PaxData)" class="col-span-2"
                        v-for="data in orderInfo.PaxList.PaxData" key="info">
                        <p class="text-lg font-semibold text-gray-800 mt-4 mb-2">Зорчигчийн мэдээлэл</p>
                        <p><strong>Нэр:</strong> {{ data.Name }} {{
                            data.Surname
                        }}</p>
                        <p><strong>Нас:</strong> {{ data.Age }}</p>
                        <p><strong>Хүйс:</strong> {{ data.GenderType }}</p>
                    </div>
                    <div v-else class="col-span-2">
                        <p class="text-lg font-semibold text-gray-800 mt-4 mb-2">Зорчигчийн мэдээлэл</p>
                        <p><strong>Нэр:</strong> {{ orderInfo.PaxList.PaxData.Name }} {{
                            orderInfo.PaxList.PaxData.Surname
                        }}</p>
                        <p><strong>Нас:</strong> {{ orderInfo.PaxList.PaxData.Age }}</p>
                        <p><strong>Хүйс:</strong> {{ orderInfo.PaxList.PaxData.GenderType }}</p>
                    </div>

                    <div v-if="Array.isArray(orderInfo.Offers.OfferInfo)" class="col-span-2"
                        v-for="info in orderInfo.Offers.OfferInfo" key="info">
                        <p class="text-lg font-semibold text-gray-800 mt-4 mb-2">Нислэгийн мэдээлэл</p>
                        <p><strong>Нислэгийн дугаар:</strong> {{
                            info.Segments.OfferSegment.FlightNum
                        }}</p>
                        <p><strong>Явах хот:</strong> {{ info.Segments.OfferSegment.Departure.City
                            }}
                        </p>
                        <p><strong>Очих хот:</strong> {{ info.Segments.OfferSegment.Arrival.City
                            }}
                        </p>
                    </div>
                    <div v-else class="col-span-2">
                        <p class="text-lg font-semibold text-gray-800 mt-4 mb-2">Нислэгийн мэдээлэл</p>
                        <p><strong>Нислэгийн дугаар:</strong> {{
                            orderInfo.Offers.OfferInfo.Segments.OfferSegment.FlightNum
                        }}</p>
                        <p><strong>Явах хот:</strong> {{ orderInfo.Offers.OfferInfo.Segments.OfferSegment.Departure.City
                            }}
                        </p>
                        <p><strong>Очих хот:</strong> {{ orderInfo.Offers.OfferInfo.Segments.OfferSegment.Arrival.City
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </b-container> -->
        <b-container>
            <div v-if="orderInfo" class="order-detail-container">
                <!-- Header section -->
                <div class="order-header">
                    <h2 class="order-title">Захиалгын дэлгэрэнгүй</h2>
                    <div class="order-status" :class="getStatusClass(orderInfo.status)">
                        {{ orderInfo.status }}
                    </div>
                </div>

                <!-- Main order info -->
                <div class="order-card">
                    <div class="order-info-grid">
                        <!-- Basic info column -->
                        <div class="info-column">
                            <div class="info-item">
                                <span class="info-label">Захиалгын дугаар:</span>
                                <span class="info-value">{{ orderInfo.orderNo }}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Order OID:</span>
                                <span class="info-value">{{ orderInfo.oid }}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Холбоо барих:</span>
                                <span class="info-value">{{ orderInfo.phone }} | {{ orderInfo.email }}</span>
                            </div>
                            <div v-if="orderInfo.PaymentUrl" class="info-item">
                                <span class="info-label">Төлбөрийн холбоос:</span>
                                <a :href="orderInfo.PaymentUrl" class="payment-link" target="_blank">
                                    <!-- <b-icon icon="box-arrow-up-right" class="mr-1"></b-icon> -->
                                    Төлбөр төлөх
                                </a>
                            </div>
                        </div>

                        <!-- Price info column -->
                        <div class="info-column price-column">
                            <div class="price-item">
                                <span class="price-label">Үндсэн үнэ:</span>
                                <span class="price-value">{{ orderInfo.TariffInfo.AdultBasePrice }} {{
                                    orderInfo.Currency }}</span>
                            </div>
                            <div class="price-item total-price">
                                <span class="price-label">Нийт төлбөр:</span>
                                <span class="price-value">{{ orderInfo.TariffInfo.AdultPrice }} {{ orderInfo.Currency
                                    }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Passenger section -->
                <div class="section-container">
                    <h3 class="section-title">
                        <!-- <b-icon icon="person-fill" class="section-icon"></b-icon> -->
                        Зорчигчийн мэдээлэл
                    </h3>

                    <div v-if="Array.isArray(orderInfo.PaxList.PaxData)" class="passenger-grid">
                        <div v-for="(data, index) in orderInfo.PaxList.PaxData" :key="index" class="passenger-card">
                            <div class="passenger-header">
                                <span class="passenger-number">Зорчигч #{{ index + 1 }}</span>
                                <span class="passenger-type" :class="getPassengerTypeClass(data.Age)">{{
                                    getPassengerType(data.Age) }}</span>
                            </div>
                            <div class="passenger-info">
                                <div class="info-row">
                                    <span>Нэр:</span>
                                    <strong>{{ data.Surname }} {{ data.Name }}</strong>
                                </div>
                                <div class="info-row">
                                    <span>Хүйс:</span>
                                    <strong>{{ data.GenderType === 'Male' ? 'Эрэгтэй' : 'Эмэгтэй' }}</strong>
                                </div>
                                <div class="info-row">
                                    <span>Нас:</span>
                                    <strong>{{ data.Age }}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="passenger-card single-passenger">
                        <div class="passenger-header">
                            <span class="passenger-type" :class="getPassengerTypeClass(orderInfo.PaxList.PaxData.Age)">
                                {{ getPassengerType(orderInfo.PaxList.PaxData.Age) }}
                            </span>
                        </div>
                        <div class="passenger-info">
                            <div class="info-row">
                                <span>Нэр:</span>
                                <strong>{{ orderInfo.PaxList.PaxData.Surname }} {{ orderInfo.PaxList.PaxData.Name
                                    }}</strong>
                            </div>
                            <div class="info-row">
                                <span>Хүйс:</span>
                                <strong>{{ orderInfo.PaxList.PaxData.GenderType === 'Male' ? 'Эрэгтэй' : 'Эмэгтэй'
                                    }}</strong>
                            </div>
                            <div class="info-row">
                                <span>Нас:</span>
                                <strong>{{ orderInfo.PaxList.PaxData.Age }}</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Flight information section -->
                <div class="flight-details-container">
                    <h3 class="section-title">
                        <!-- <b-icon icon="airplane" class="section-icon"></b-icon> -->
                        Нислэгийн мэдээлэл
                    </h3>

                    <div class="flight-journey">
                        <!-- Онгоцны PNR мэдээлэл -->
                        <div class="pnr-info">
                            <span class="pnr-label">PNR дугаар:</span>
                            <span class="pnr-value">{{ orderInfo.Offers.OfferInfo.PNR }}</span>
                        </div>

                        <!-- Нислэгийн timeline -->

                        <div v-for="(segment, inx) in getAllSegments().slice(0, 1)" :key="inx">
                            <b-card no-body class="border" :key="segment.FlightNum">
                                <b-card-header class="d-sm-flex justify-content-sm-between align-items-center">
                                    <div class="d-flex align-items-center mb-2 mb-sm-0">
                                        <img :src="segment.MarketingAirline
                                            ? 'https://api.echina.mn/assets/d/' + segment.MarketingAirline + '.png'
                                            : fallbackLogo" alt="Airline logo" class="me-2"
                                            style="width: 30px; height: auto;" />
                                        <h6 class="fw-normal mb-0">
                                            <!-- {{Array.isArray(StoreAirCompany) && segment.MarketingAirline ? StoreAirCompany?.find((airline: any) =>
                                        airline.Code ===
                                        segment.MarketingAirline)?.Value : "No Air Company"}} -->
                                            {{ segment.MarketingAirlineName }} ({{ segment.FlightNum || 'SA-1254' }})
                                            <!-- ({{ segment.FlightNum || 'SA-1254' }}) -->
                                            <!-- <span v-if="getAllSegments().length > 1" class="text-warning ">+{{ getAllSegments().length - 1
                                        }}Airline</span> -->

                                        </h6>
                                        <p v-if="(getAllSegments().length - 1) >= 1" class="ms-2 text-warning"
                                            @mouseover="onMouseOver(inx + segment.FlightNum)"
                                            @mouseleave="onMouseLeave(inx + segment.FlightNum)">
                                            +{{ getAllSegments().length - 1 }} Airlines
                                        </p>
                                        <!-- Tooltip -->
                                        <div v-if="isHovered[inx + segment.FlightNum]" class="tooltip text-white">
                                            ss
                                            <!-- <div v-for="segments in getAllSegments()" :key="segments.FlightNum"
                                        class="d-flex justify-content-sm-start align-items-center">
                                        <img :src="segments.MarketingAirline
                                          ? 'https://api.echina.mn/assets/d/' + segments.MarketingAirline + '.png'
                                          : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                                        <h6 class="fw-bold mb-0 text-primary">
                                          {{ StoreAirCompany.find((airline: any) => airline.Code ===
                                            segments.MarketingAirline).Value }}
                                          ({{ segments.FlightNum || 'SA-1254' }})
                                        </h6>
                      
                                        <Briefcase v-if="segments.Baggage" class="mx-2" color="#5a2dd7" />
                                        <Luggage v-if="segments.CabinBaggage" color="#5a2dd7" />
                      
                                      </div> -->
                                        </div>
                                    </div>

                                    <h6 class="fw-bold mb-0">Дамжин нислэг</h6>
                                </b-card-header>

                                <b-card-body class="p-4 pb-0">
                                    <b-row class="g-3">
                                        <b-col sm="5" md="4" class="mt-0">
                                            <h4> {{ segment.Departure.Date.split(" ")[1] }}</h4>
                                            <!-- <h4> 22</h4> -->
                                            <p class="fw-bold text-black mb-0">{{ formatDate(segment.Departure.Date) }}
                                            </p>
                                            <p class="mb-0">{{ segment.Departure.Iata }}<span
                                                    v-if="segment.Departure.Terminal">-Терминал</span>
                                                {{ segment.Departure.Terminal || '' }}</p>
                                            <!-- <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                                          segment.Departure.Iata).City}}</p> -->
                                            <p class="mb-0">{{ segment.Departure.City }}</p>

                                        </b-col>

                                        <b-col sm="5" md="4" class="my-sm-auto text-center">
                                            <!-- <h5 class="mt-3">{{ convertTimeText(segment.FlightTime) }}</h5> -->
                                            <h5 class="mt-3">{{ getTotalFlightTime() }}</h5>
                                            <div class="position-relative my-4">
                                                <hr class="bg-primary opacity-5 position-relative" />

                                                <div class="icon-container"
                                                    style="display: flex; justify-content: space-evenly; flex-wrap: wrap; ">
                                                    <div v-for="(segment, idx) in getStopIatas()"
                                                        :key="'segment-' + idx">
                                                        <div class="icon-xs bg-primary text-white rounded-circle position-relative"
                                                            style="transform: translate(10%, -150%);">
                                                            <p class="mt-4 text-black fs-6 custom-margin"
                                                                style="transform: rotate(0deg); display: inline-block;">
                                                                {{ segment }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="icon-container"
                                                    style="display: flex; justify-content: space-between; ">
                                                    <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                                                        style="transform: translate(0%, -250%);">
                                                    </div>
                                                    <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                                                        style="transform: translate(0%, -250%);">
                                                    </div>
                                                </div>
                                            </div>

                                        </b-col>

                                        <b-col sm="5" md="4" class="mt-0">
                                            <h4>
                                                {{ getAllSegments()[getAllSegments().length -
                                                    1].Arrival.Date.split(" ")[1] }}
                                            </h4>
                                            <p class="fw-bold text-black mb-0">{{
                                                formatDate(getAllSegments()[getAllSegments().length -
                                                    1].Arrival.Date) }}</p>

                                            <p class="mb-0">{{ getAllSegments()[getAllSegments().length -
                                                1].Arrival.Iata }}<span
                                                    v-if="getAllSegments()[getAllSegments().length - 1].Arrival.Terminal">-Терминал</span>
                                                {{ getAllSegments()[getAllSegments().length - 1].Arrival.Terminal || ''
                                                }}</p>
                                            <!-- <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                                        getAllSegments()[getAllSegments().length - 1].Arrival.Iata).City}}</p> -->
                                            <p class="mb-0">{{ segment.Arrival.City }}</p>

                                        </b-col>


                                    </b-row>
                                </b-card-body>


                                <div>
                                    <template v-for="(segment, idx) in getAllSegments()" :key="'segment-' + idx">
                                        <!-- <div v-for="(offseg, offsegIdx) in segment.Segments.OfferSegment" :key="'offseg-' + offsegIdx"> -->
                                        <div v-if="segment.SelfConnect == 'true'" class="card-footer pt-4">
                                            <ul
                                                class="list-inline bg-light rounded-2 d-sm-flex text-end justify-content-sm-end mb-0 px-4 py-2">
                                                <li v-if="getAllSegments().length > 0"
                                                    class="list-inline-item text-orange">
                                                    {{ getTotalStops() }} Зогсолттой нислэг
                                                </li>
                                                <li class="list-inline-item text-center">
                                                    <h6 class="fw-medium mb-0">
                                                        Ачаагаа өөрөө авч, дахин бүртгүүлэх шаардлагатай <br />
                                                        (Self-transfer baggage)
                                                    </h6>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- </div> -->
                                    </template>
                                </div>



                                <div class="card-footer pt-4">
                                    <ul
                                        class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
                                        <li class="list-inline-item text-primary">Боломжит суудал: {{
                                            segment.ResBookDesigQuantity }}</li>
                                        <!-- <li class="list-inline-item text-danger">Non-Refundable</li> -->
                                        <h6 class="fw-medium mb-0"><span class="fw-medium">Ангилал:</span> {{
                                            segment.FlightClass }}</h6>
                                        <li class="list-inline-item">
                                            <router-link :to="'/some-route/' + inx + segment.FlightNum"
                                                :id="'toggleButton' + inx + segment.FlightNum"
                                                :aria-controls="'flightDetail' + segment.FlightNum"
                                                v-b-toggle="'flightDetail' + inx + segment.FlightNum"
                                                class="btn-more d-flex align-items-center collapsed p-0 mb-0"
                                                role="button">
                                                Нислэгийн дэлгэрэнгүй
                                                <ChevronDown />
                                            </router-link>
                                        </li>
                                    </ul>
                                    <b-collapse :id="'flightDetail' + inx + segment.FlightNum" class="multi-collapse">
                                        <div class="pt-3">
                                            <!-- <OptionDetailTab :flight="getAllSegments()" :index="inx" /> -->
                                        </div>
                                    </b-collapse>

                                    <!-- <b-collapse :id="`flightOption${Mainindex}${segment.FlightNum}`" class="multi-collapse">
                                    <div class="pt-3" v-if="isOptionLoaded">
                                      <OptionBooking :offerCode="offer.OfferCode" :searchGuid="SearchGuid" />
                                    </div>
                                  </b-collapse> -->
                                </div>
                            </b-card>
                        </div>
                    </div>
                </div>

            </div>
        </b-container>
        <div class="contact">
            <h2>Холбогдох</h2>
            <p>Бид танд хэрхэн тусалж болох талаар ярилцахдаа баяртай байх болно.</p>
            <div class="contact-info">
                <div><strong>Цахим шуудан:</strong> contact@airkacc.mn</div>
                <div><strong>Утас:</strong> +976 99999999 / +976 98989898</div>
                <div><strong>Хаяг:</strong> Ulaanbaatar
                    15141
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import flightLogo from '@/assets/images/element/09.svg'

const fallbackLogo = flightLogo


const orderId = ref('');
const orderInfo = ref(null);
const flightData = ref(null);
const loading = ref(false);
const error = ref(null);


const isHovered = ref<{ [key: string]: boolean }>({});

function onMouseOver(index: string) {
    isHovered.value[index] = true;
}

function onMouseLeave(index: string) {
    isHovered.value[index] = false;
}

function formatDate(input: string): string {
    const [day, month, yearAndTime] = input.split(".");
    const [year, time] = yearAndTime.split(" ");
    return `${year}-${month}-${day}`;
}

const getTotalFlightTime = () => {
    const totalMinutes = getAllSegments().reduce(
        (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
        0
    );

    const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
    const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

    return `${hours} цаг ${minutes} мин`; // Цаг, минутын форматаар буцаана
};

const getTotalStops = () => getAllSegments().length - 1;
const getStopIatas = () => getAllSegments().slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata);




function getStatusClass(status) {
    switch (status.toLowerCase()) {
        case 'pending': return 'status-pending';
        case 'confirmed': return 'status-confirmed';
        case 'cancelled': return 'status-cancelled';
        default: return '';
    }
};
function getPassengerType(age) {
    if (age >= 12) return 'Том хүн';
    if (age >= 2) return 'Хүүхэд';
    return 'Нярай';
};
function getPassengerTypeClass(age) {
    if (age >= 12) return 'type-adult';
    if (age >= 2) return 'type-child';
    return 'type-infant';
};


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

};

const getFlightData = () => {
    return orderInfo.value || { Offers: { OfferInfo: [] } };
};

const getAllSegments = (): any[] => {
    // const ai = StoreAirCompany.value?.find((airline: any) => airline.Code === "KE").Value
    // console.log(ai)
    const data = getFlightData();
    // console.log(data)
    const offerInfo = data.Offers.OfferInfo;

    // OfferInfo массив биш бол шууд OfferSegment-ийг буцаах
    if (!Array.isArray(offerInfo)) {
        let segment = offerInfo?.Segments?.OfferSegment;
        if (!Array.isArray(segment)) {
            segment = segment ? [segment] : []
            // console.log(segment)

            return segment;
        }
        // console.log(StoreAirCompany.value?.find((airline: any) => airline.Code ===
        //   segment[0].MarketingAirline).Value)
        return segment;
    }

    // OfferInfo массив бол flatMap ашиглан сегментүүдийг цуглуулах
    return offerInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments?.OfferSegment || []);
};

</script>

<style scoped>
.ticket-check {
    background-image: url('https://echina.mn/assets/ticket_check.jpg');
    /* Оруулсан background зурагны зам */
    background-size: cover;
    background-position: center;

    height: 40vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.7);
    /* Хар тунгалаг давхарга */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content {
    text-align: center;
    color: white;
    max-width: 600px;
    padding: 20px;
}

.title {
    color: white;
    font-size: 48px;
    font-weight: bold;
}

.subtitle {
    font-size: 18px;
    margin-bottom: 30px;
}

.search-box {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.input {
    padding: 12px 20px;
    border-radius: 6px;
    border: none;
    min-width: 300px;
}

.search-button {
    padding: 12px 20px;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.loading-text {
    margin-top: 10px;
    color: #ffc107;
}

.error-text {
    margin-top: 10px;
    color: #f44336;
}

.contact {
    background: white;
    padding: 40px 20px;
    text-align: center;
}

.contact-info {
    margin-top: 20px;
    line-height: 1.8;
}



.order-detail-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

.order-title {
    font-size: 24px;
    font-weight: 600;
    color: #2d3748;
    margin: 0;
}

.order-status {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
}

.status-pending {
    background-color: #fff3cd;
    color: #856404;
}

.status-confirmed {
    background-color: #d4edda;
    color: #155724;
}

.status-cancelled {
    background-color: #f8d7da;
    color: #721c24;
}

.order-card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding: 20px;
    margin-bottom: 25px;
}

.order-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.info-column {
    display: flex;
    flex-direction: column;
}

.price-column {
    align-items: flex-end;
}

.info-item,
.price-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
}

.info-label,
.price-label {
    font-weight: 500;
    color: #4a5568;
    min-width: 140px;
}

.info-value {
    font-weight: 600;
    color: #2d3748;
}

.price-value {
    font-weight: 600;
    color: #2d3748;
}

.total-price .price-value {
    font-size: 18px;
    color: #2b6cb0;
}

.payment-link {
    color: #3182ce;
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
}

.payment-link:hover {
    text-decoration: underline;
}

.section-container {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding: 20px;
    margin-bottom: 25px;
}

.section-title {
    font-size: 18px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.section-icon {
    margin-right: 10px;
    color: #4a5568;
}

.passenger-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 15px;
}

.passenger-card {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 15px;
    background-color: #f8fafc;
}

.single-passenger {
    max-width: 400px;
}

.passenger-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2e8f0;
}

.passenger-number {
    font-size: 14px;
    color: #4a5568;
}

.passenger-type {
    font-size: 12px;
    padding: 3px 8px;
    border-radius: 12px;
    font-weight: 500;
}

.type-adult {
    background-color: #bee3f8;
    color: #2b6cb0;
}

.type-child {
    background-color: #feebc8;
    color: #b7791f;
}

.type-infant {
    background-color: #fed7d7;
    color: #c53030;
}

.passenger-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.info-row {
    display: flex;
    justify-content: space-between;
}

.info-row span {
    color: #718096;
    font-size: 14px;
}

.info-row strong {
    color: #2d3748;
    font-weight: 500;
}

.flight-timeline {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.flight-segment {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 15px;
    background-color: #f8fafc;
}

.single-flight {
    max-width: 500px;
}

.segment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2e8f0;
}

.segment-number {
    font-size: 14px;
    color: #4a5568;
}

.flight-number {
    font-weight: 600;
    color: #2b6cb0;
}

.airport-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.departure,
.arrival {
    flex: 1;
}

.city {
    font-weight: 600;
    color: #2d3748;
    display: block;
    margin-bottom: 4px;
}

.airport {
    font-size: 13px;
    color: #718096;
    display: block;
}

.flight-duration {
    padding: 0 20px;
    display: flex;
    align-items: center;
}

.flight-arrow {
    color: #718096;
}

.action-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .order-info-grid {
        grid-template-columns: 1fr;
    }

    .price-column {
        align-items: flex-start;
    }

    .passenger-grid {
        grid-template-columns: 1fr;
    }

    .passenger-info {
        grid-template-columns: 1fr;
    }
}




.flight-details-container {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding: 20px;
    margin-bottom: 25px;
}

.section-title {
    font-size: 18px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.section-icon {
    margin-right: 10px;
    color: #4a5568;
}

.pnr-info {
    background-color: #f0f4f8;
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 20px;
    display: inline-block;
}

.pnr-label {
    font-weight: 500;
    color: #4a5568;
    margin-right: 8px;
}

.pnr-value {
    font-weight: 600;
    color: #2b6cb0;
}

.flight-timeline {
    position: relative;
    padding-left: 30px;
}

.flight-segment {
    position: relative;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background-color: #f8fafc;
}

.flight-segment:last-child {
    margin-bottom: 0;
}

.segment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
}

.flight-number {
    font-weight: 600;
    color: #2d3748;
    display: flex;
    align-items: center;
}

.airline-logo {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.airline-om {
    background-image: url('https://www.miat.com/themes/miat/assets/images/logo.png');
}

.airline-cx {
    background-image: url('https://www.cathaypacific.com/content/dam/focal-point/cx/logo.svg');
}

.aircraft-info,
.flight-class {
    font-size: 14px;
    color: #4a5568;
    display: flex;
    align-items: center;
}

.segment-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.departure-info,
.arrival-info {
    flex: 1;
}

.time {
    font-size: 20px;
    font-weight: 600;
    color: #2d3748;
}

.date {
    font-size: 14px;
    color: #718096;
    margin: 4px 0;
}

.airport {
    font-size: 16px;
    margin-bottom: 4px;
}

.terminal {
    font-size: 13px;
    color: #718096;
}

.flight-duration {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    position: relative;
}

.duration {
    font-size: 14px;
    color: #4a5568;
    white-space: nowrap;
}

.stops {
    position: relative;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stop-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #a0aec0;
    margin-top: 5px;
}

.stop-line {
    width: 2px;
    height: 100%;
    background-color: #cbd5e0;
}

.segment-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 15px;
    border-top: 1px dashed #e2e8f0;
    font-size: 14px;
}

.baggage-info {
    color: #4a5568;
    display: flex;
    align-items: center;
}

.operating-airline {
    color: #718096;
    display: flex;
    align-items: center;
}

.segment-type {
    position: absolute;
    top: -10px;
    right: 15px;
    background-color: #4299e1;
    color: white;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 12px;
    display: flex;
    align-items: center;
}

@media (max-width: 768px) {
    .segment-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .segment-body {
        flex-direction: column;
        align-items: flex-start;
    }

    .departure-info,
    .arrival-info {
        width: 100%;
        margin-bottom: 15px;
    }

    .flight-duration {
        flex-direction: row;
        width: 100%;
        padding: 10px 0;
        justify-content: space-between;
    }

    .stops {
        flex-direction: row;
        height: auto;
        width: 100%;
        justify-content: center;
        margin: 10px 0;
    }

    .stop-dot {
        margin: 0 5px;
    }

    .stop-line {
        width: 100%;
        height: 2px;
    }
}
</style>
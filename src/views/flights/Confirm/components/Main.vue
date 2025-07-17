<template>
    <div>
        <!-- <div class="ticket-check">
            <div class="overlay">

            </div>
        </div> -->
        <b-container>
            <b-row>
                <b-col v-if="orderInfo" md="10" xl="12" class="mx-auto print-page  pt-5">
                    <b-card no-body class="shadow">
                        <img :src="gallery4" class="rounded-top" alt="gallery4" />
                        <b-card-body class="text-center p-4">
                            <b-card-title tag="h1" class="fs-3">{{ t(getStatusClass(orderInfo?.status))
                                }}</b-card-title>
                            <p class="lead mb-3">Itinerary</p>
                            <h5 class="text-primary mb-4">Airkacc.mn | {{ t('txtFlightBooking') }}</h5>
                            <b-row class="justify-content-between text-start mb-4">
                                <b-col lg="5">
                                    <ul class="list-group list-group-borderless">
                                        <li
                                            class="list-group-item d-sm-flex justify-content-between align-items-center">
                                            <span class="mb-0 items-center">
                                                <BIconVr class="fa-fw me-2" />
                                                {{ t('txtBookingMail') }}:
                                            </span>
                                            <span class="h6 fw-normal mb-0">{{ orderInfo?.email }}</span>
                                        </li>
                                        <li
                                            class="list-group-item d-sm-flex justify-content-between align-items-center">
                                            <span class="mb-0 items-center">
                                                <BIconPerson class="fa-fw me-2" />
                                                {{ t('txtBookingPhone') }}:
                                            </span>
                                            <span class="h6 fw-normal mb-0">{{ orderInfo?.phone }}</span>
                                        </li>
                                        <li
                                            class="list-group-item d-sm-flex justify-content-between align-items-center">
                                            <span class="mb-0 items-center">
                                                <BIconWallet2 class="fa-fw me-2" />
                                                {{ t('txtPaidAmount') }}:
                                            </span>
                                            <span class="h6 fw-normal mb-0">{{ Math.ceil((Number(orderInfo?.FullPrice) *
                                                parseFloat(rate))).toLocaleString() }}{{ currency
                                                }}</span>
                                        </li>
                                        <!-- <li
                                            class="list-group-item d-sm-flex justify-content-between align-items-center">
                                            <span class="mb-0 items-center">
                                                <BIconCurrencyDollar class="fa-fw me-2" />
                                                Total Price:
                                            </span>
                                            <span class="h6 fw-normal mb-0">{{ currency }}1200</span>
                                        </li> -->
                                    </ul>
                                </b-col>
                                <b-col lg="5">
                                    <ul class="list-group list-group-borderless">
                                        <li
                                            class="list-group-item d-sm-flex justify-content-between align-items-center">
                                            <span class="mb-0 items-center">
                                                <BIconCalendar class="fa-fw me-2" />
                                                {{ t('txtCreatedDate') }}:
                                            </span>
                                            <span class="h6 fw-normal mb-0">{{
                                                formatDateFinish(orderInfo?.ConfirmableToUtc.split(" ")[0]) }}</span>
                                        </li>
                                        <li
                                            class="list-group-item d-sm-flex justify-content-between align-items-center">
                                            <span class="mb-0 items-center">
                                                <BIconCalendar class="fa-fw me-2" />
                                                {{ t('txtInfoOrderNo') }}:
                                            </span>
                                            <span class="h6 fw-normal mb-0">{{ orderInfo?.orderNo }}</span>
                                        </li>
                                        <li
                                            class="list-group-item d-sm-flex justify-content-between align-items-center">
                                            <span class="mb-0 items-center">
                                                <BIconCalendar class="fa-fw me-2" />
                                                Oid:
                                            </span>
                                            <span class="h6 fw-normal mb-0">{{ orderInfo?.oid }}</span>
                                        </li>
                                        <li
                                            class="list-group-item d-sm-flex justify-content-between align-items-center">
                                            <span class="mb-0 items-center">
                                                <BIconPeople class="fa-fw me-2" />
                                                {{ t('txtTravelerQty') }}:
                                            </span>
                                            <span class="h6 fw-normal mb-0">{{ Array.isArray(orderInfo?.PaxList.PaxData)
                                                ?
                                                orderInfo?.PaxList.PaxData.length : orderInfo?.PaxList.length || 1
                                            }}</span>
                                        </li>
                                    </ul>
                                </b-col>
                            </b-row>
                            <!-- <div class="d-sm-flex justify-content-sm-end d-grid">
                                <b-dropdown variant="link" toggle-class="m-0 p-0" class="me-sm-2 mb-2 mb-sm-0"
                                    menu-class="min-w-auto shadow rounded" no-caret>
                                    <template #button-content>
                                        <button type="button" class="arrow-none btn btn-light mb-0 w-100 items-center"
                                            role="button">
                                            <BIconShare class="me-2" />
                                            Share
                                        </button>
                                    </template>
<li>
    <b-dropdown-item class="items-center">
        <font-awesome-icon :icon="faTwitterSquare" class="me-2" />
        Twitter
    </b-dropdown-item>
</li>
<li>
    <b-dropdown-item class="items-center">
        <font-awesome-icon :icon="faFacebookSquare" class="me-2" />
        Facebook
    </b-dropdown-item>
</li>
<li>
    <b-dropdown-item class="items-center">
        <font-awesome-icon :icon="faLinkedin" class="me-2" />
        LinkedIn
    </b-dropdown-item>
</li>
<li>
    <b-dropdown-item class="items-center">
        <font-awesome-icon :icon="faCopy" class="me-2" />
        Copy link
    </b-dropdown-item>
</li>
</b-dropdown>
<b-button variant="primary" class="mb-0 items-center">
    <BIconFilePdf class="me-2" />
    Download PDF
</b-button>
</div> -->
                            <div class="passenger-container">
                                <h2 class="title">{{ t('txtTravelerInfo') }}</h2>

                                <div v-if="Array.isArray(orderInfo?.PaxList.PaxData)">

                                    <div class="passenger-info">
                                        <table class="passenger-table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>{{ t('txtPassportNum') }}</th>
                                                    <th>{{ t('txtSureName') }}</th>
                                                    <th>{{ t('txtName') }}</th>
                                                    <th>{{ t('txtBirthDate') }}</th>
                                                    <th>{{ t('txtGender') }}</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr v-for="(traveler, index) in orderInfo.PaxList.PaxData" :key="index">
                                                    <td>{{ index + 1 }}</td>
                                                    <td>{{ traveler.Document || '-' }}</td>
                                                    <td>{{ traveler.Surname || '-' }}</td>
                                                    <td>{{ traveler.Name || '-' }}</td>
                                                    <td>{{ formatDateFinish(traveler.BirthDay) || '-' }}</td>
                                                    <td>{{ traveler.GenderType || '-' }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div v-else class="passenger-info">
                                    <table class="passenger-table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>{{ t('txtPassportNum') }}</th>
                                                <th>{{ t('txtSureName') }}</th>
                                                <th>{{ t('txtName') }}</th>
                                                <th>{{ t('txtBirthDate') }}</th>
                                                <th>{{ t('txtGender') }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>{{ 1 }}</td>
                                                <td>{{ orderInfo.PaxList.PaxData.Document || '-' }}</td>
                                                <td>{{ orderInfo.PaxList.PaxData.Surname || '-' }}</td>
                                                <td>{{ orderInfo.PaxList.PaxData.Name || '-' }}</td>
                                                <td>{{ formatDateFinish(orderInfo.PaxList.PaxData.BirthDay) || '-' }}
                                                </td>
                                                <td>{{ orderInfo.PaxList.PaxData.GenderType || '-' }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>

                            <div class="flight-details-container">
                                <h3 class="section-title">
                                    <!-- <b-icon icon="airplane" class="section-icon"></b-icon> -->
                                    {{ t('txtFlightInfo') }}
                                </h3>

                                <div class="text-start">
                                    <!-- Онгоцны PNR мэдээлэл -->
                                    <div class="d-flex mb-2">
                                        <span class="pnr-label">{{ t('txtPNR') }}:</span>
                                        <span class="pnr-value">{{ orderInfo.Offers.OfferInfo.PNR }}</span>
                                    </div>

                                    <!-- Нислэгийн timeline -->

                                    <div v-for="(segment, inx) in getAllSegments().slice(0, 1)" :key="inx">
                                        <b-card no-body class="border" :key="segment.FlightNum">


                                            <div class="d-flex justify-content-between align-items-center px-3  ">


                                                <h6 class="m-3 mb-0 fw-bold d-flex align-items-center text-primary"
                                                    style="font-size: smaller;">
                                                    <img :src="PlaneUp" alt="Plane Down" class="me-2"
                                                        style="width: 32px; height: 32px;" />

                                                    {{ (show == 2 && moreFlights(segment, inx).length - 1
                                                        ===
                                                        0) ?
                                                        t('txtToFlight')
                                                        :
                                                        t('txtFromFlight') }}
                                                </h6>
                                                <h6 class="fw-bold mb-0 text-primary" style="font-size: smaller;">{{
                                                    moreFlights(segment, inx)[0].length >
                                                        1 ?
                                                        t('txtTransit') :
                                                        t('txtDirect') }}</h6>

                                            </div>
                                            <div class="border-1 border-bottom border-primary ms-4"
                                                style="width: 70px;"></div>
                                            <b-card-header
                                                class="d-flex justify-content-between align-items-center py-0 ps-4 mt-2">

                                                <div class="d-flex align-items-center mb-2 mb-sm-0 "
                                                    style="font-size: smaller;">
                                                    <img :src="segment?.MarketingAirline
                                                        ? 'https://api.echina.mn/assets/d/' + segment?.MarketingAirline + '.png'
                                                        : fallbackLogo" alt="Airline logo" class="me-2"
                                                        style="width: 30px; height: auto;" />
                                                    <h6 class="fw-normal mb-0" style="font-size: smaller;">
                                                        {{ segment?.MarketingAirlineName ||
                                                            'No Air Companies Available'
                                                        }}
                                                        ({{ segment?.FlightNum || 'SA-1254' }})
                                                    </h6>

                                                    <p v-if="moreFlights(segment, inx)[0].length > 1"
                                                        class="ms-2 text-warning"
                                                        @mouseover="onMouseOver(getFlightKey(inx))"
                                                        @mouseleave="onMouseLeave(getFlightKey(inx))">
                                                        +{{ moreFlights(segment, inx)[0].length - 1 }} {{
                                                            t('txtTotalAirline') }}
                                                    </p>
                                                    <!-- Tooltip -->
                                                    <div v-if="isHovered[getFlightKey(inx)]"
                                                        class="bg-white border rounded shadow position-absolute p-3 start-50 "
                                                        style="z-index: 1000; min-width: 260px;">
                                                        <div v-for="flight in moreFlights(segment, inx)[0]"
                                                            :key="segment.FlightNum"
                                                            class="d-flex align-items-start mb-2">
                                                            <img :src="flight.MarketingAirline
                                                                ? 'https://api.echina.mn/assets/d/' + flight.MarketingAirline + '.png'
                                                                : fallbackLogo" alt="Airline logo" class="me-2"
                                                                style="width: 32px; height: auto; border-radius: 4px;" />
                                                            <div class="d-flex gap-2">
                                                                <div class="fw-semibold text-dark"
                                                                    style="font-size: 14px;">
                                                                    {{
                                                                        flight.MarketingAirlineName || 'Unknown Airline'
                                                                    }}
                                                                    <span class="text-muted">({{
                                                                        flight.FlightNum
                                                                        ||
                                                                        'SA-1254'
                                                                    }})</span>
                                                                </div>
                                                                <div class="d-flex align-items-center mt-1">
                                                                    <Briefcase v-if="flight.Baggage" class="me-2"
                                                                        color="#5a2dd7" :size="16" />
                                                                    <Luggage v-if="flight.CabinBaggage" color="#5a2dd7"
                                                                        :size="16" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 class="mt-0  fw-light mb-0 pb-0 text-muted"
                                                        style="font-size: smaller;">Нийт: {{
                                                            getTotalFlightTime2(segment, inx, 0)
                                                        }}
                                                    </h5>
                                                </div>


                                            </b-card-header>

                                            <b-card-body class="p-4 pb-0">
                                                <b-row class="g-3">
                                                    <b-col cols="3" sm="4" md="3" class="mt-0 text-start ">
                                                        <p class="mb-0" style="font-size: medium;">{{
                                                            moreFlights(segment, inx)[0][0]?.Departure.Iata
                                                            }}</p>
                                                        <p class="mb-0 text-truncate"
                                                            style="font-size: smaller; max-width: 120px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
                                                            :title="moreFlights(segment, inx)[0][0]?.Departure.City">
                                                            {{ moreFlights(segment, inx)[0][0]?.Departure.City
                                                            }}
                                                        </p>

                                                        <h4 class="fw-bold fs-4 mb-0">
                                                            {{
                                                                moreFlights(segment, inx)[0][0]
                                                                    ?.Departure.Date.split(" ")[1]
                                                            }}
                                                        </h4>


                                                        <p class="mb-0" style="font-size: x-small;">
                                                            {{
                                                                formatDate(moreFlights(segment, inx)[0][0]?.Departure.Date)
                                                            }}</p>

                                                        <!-- <p class="mb-0" style="font-size: smaller;">
                  {{StoreAirCompany.find((AirCompany: any) =>
                    AirCompany.Code
                    ===
                    moreFlights(segment, inx)[0][0]?.Departure.Iata).City}}</p> -->


                                                    </b-col>

                                                    <b-col cols="5" sm="4" md="6" class=" text-center mt-3">
                                                        <div class="position-relative " style="height: 80px;">
                                                            <!-- Шугам -->
                                                            <hr class="position-absolute top-50 start-0 end-0 m-0"
                                                                style="height: 1px; background-color: #ccc;" />

                                                            <!-- Голын цэгүүд болон шошго -->
                                                            <div v-for="(stop, index) in getStopIatas(segment, inx, 0)"
                                                                :key="index" class="position-absolute text-center "
                                                                :style="getDotPositionStyle(index, getStopIatas(segment, inx, 0).length)">
                                                                <div style="font-size: small; font-weight: bold;">
                                                                    {{ stop }}
                                                                </div>
                                                                <!-- <div style="font-size: small; color: gray;">
                                                                    (.City || ''}})
                                                                </div> -->
                                                                <div class="rounded-circle bg-primary mx-auto"
                                                                    style="width: 8px; height: 8px; top: 50%; left: 0; transform: translateY(120%);">
                                                                </div>
                                                            </div>

                                                            <!-- Зүүн ба баруун саарал цэг -->
                                                            <div class="rounded-circle bg-secondary position-absolute"
                                                                style="width: 8px; height: 8px; top: 50%; left: 0; transform: translateY(-50%);">
                                                            </div>
                                                            <div class="rounded-circle bg-secondary position-absolute"
                                                                style="width: 8px; height: 8px; top: 50%; right: 0; transform: translateY(-50%);">
                                                            </div>
                                                        </div>


                                                    </b-col>

                                                    <b-col cols="3" sm="4" md="3" class="mt-0  text-end mt-0 ">
                                                        <p class="mb-0" style="font-size: medium;">{{
                                                            moreFlights(segment, inx)[0][moreFlights(segment,
                                                                inx)[0].length - 1].Arrival.Iata }}
                                                        </p>
                                                        <p class="mb-0" style="font-size: smaller;">
                                                            {{ moreFlights(segment, inx)[0][moreFlights(segment,
                                                                inx)[0].length - 1].Arrival.City ||
                                                                "" }}
                                                        </p>
                                                        <h4 class=" fs-4 mb-0">
                                                            {{ moreFlights(segment, inx)[0][moreFlights(segment,
                                                                inx)[0].length -
                                                                1].Arrival.Date.split(" ")[1] }}
                                                        </h4>

                                                        <p class="mb-0" style="font-size: x-small;">
                                                            {{
                                                                formatDate(moreFlights(segment, inx)[0][moreFlights(segment,
                                                                    inx)[0].length -
                                                                    1].Arrival.Date) }}</p>



                                                    </b-col>


                                                </b-row>
                                            </b-card-body>

                                            <b-row v-for="(offseg, offsegIdx) in segment" :key="'offseg-' + offsegIdx"
                                                class="align-items-start mx-2">
                                                <!-- Зүүн талын блок -->
                                                <b-col cols="3" sm="2" md="4" v-if="offseg.SelfConnect === 'true'"
                                                    class="d-flex pe-1">
                                                    <div
                                                        style="width: 100%; height: 55px; background-color: #eee9ff; border-radius: 10px;">
                                                    </div>
                                                </b-col>

                                                <!-- Баруун талын анхааруулга -->
                                                <b-col cols="9" sm="10" md="8" class="mb-2 ps-1"
                                                    v-if="offseg.SelfConnect === 'true'">
                                                    <div
                                                        style="background-color: #ffe6e6; border-radius: 10px; padding: 8px 12px;">
                                                        <p class="mb-0 text-danger"
                                                            style="font-size: small; white-space: pre-line;">
                                                            {{ getTotalStops2(segment, inx, 0) }} {{
                                                                t('txtFlightStop') }}
                                                            {{ t('txtSelfTBag') }}
                                                            (Self-transfer baggage)
                                                        </p>
                                                    </div>
                                                </b-col>
                                            </b-row>





                                            <div class="card-footer pt-4">
                                                <ul
                                                    class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
                                                    <li class="list-inline-item text-primary"
                                                        style="font-size: smaller;">{{ t('txtAvailableSeat')
                                                        }}: {{
                                                            segment.ResBookDesigQuantity }}
                                                    </li>
                                                    <!-- <li class="list-inline-item text-danger">Non-Refundable</li> -->
                                                    <h6 class="d-flex align-items-center fw-medium mb-0"
                                                        style="font-size: smaller;"><span class="fw-medium">{{
                                                            t('txtClass') }}:</span>
                                                        {{
                                                            segment.FlightClass }}</h6>
                                                    <li class="list-inline-item" style="font-size: smaller;">
                                                        <a :to="'/some-route/' + inx + segment.FlightNum"
                                                            :id="'toggleButton' + inx + segment.FlightNum"
                                                            :aria-controls="'flightDetail' + segment.FlightNum"
                                                            v-b-toggle="'flightDetail' + inx + segment.FlightNum"
                                                            class="btn-more d-flex align-items-center collapsed p-0 mb-0"
                                                            role="button">
                                                            {{ t('txtFlightDetail') }}
                                                            <ChevronDown />
                                                        </a>
                                                    </li>
                                                </ul>
                                                <b-collapse :id="'flightDetail' + inx + segment.FlightNum"
                                                    class="multi-collapse" style="font-size: smaller;">
                                                    <div class="pt-3">
                                                        <FlightDetailTab :flight="OfferInfo" :index="1" :airports=[] />
                                                    </div>
                                                </b-collapse>
                                            </div>
                                        </b-card>
                                    </div>
                                </div>
                            </div>


                        </b-card-body>
                    </b-card>
                </b-col>
                <b-card class="justify-content-center align-items-center">
                    <b-card-body>
                        <b-button variant="success" class="mb-3 no-print " @click="printAsPDF">
                            📄 {{ t('txtPDFSave') }}
                        </b-button>
                    </b-card-body>
                </b-card>
            </b-row>
        </b-container>

        <div class="contact">
            <h2>{{ t('txtInfoContact') }}</h2>
            <p>{{ t('txtInfoContactText') }}</p>
            <div class="contact-info">
                <div><strong>{{ t('txtInfoMail') }}:</strong> contact@airkacc.mn</div>
                <div><strong>{{ t('txtInfoPhone') }}:</strong> +976 99999999 / +976 98989898</div>
                <div><strong>{{ t('txtInfoAddress') }}:</strong> Ulaanbaatar
                    15141
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

import flightLogo from '@/assets/images/element/09.svg'
import { useRoute } from 'vue-router';
import html2pdf from 'html2pdf.js';

import PlaneUp from '@/assets/images/Icon/planeup.svg';
import FlightDetailTab from '../../List/components/FlightDetailTab.vue'
import { ChevronDown, Briefcase, Luggage, User } from 'lucide-vue-next';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import gallery4 from '@/assets/images/gallery/04.jpg'
import {
    BIconCalendar,
    BIconCurrencyDollar,
    BIconFilePdf,
    BIconPeople,
    BIconPerson,
    BIconShare,
    BIconVr,
    BIconWallet2
} from 'bootstrap-icons-vue'
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { currency } from '@/helpers/constants'
import { useI18n } from 'vue-i18n'
import Orderinfo from '../../OrderInfo/components/Orderinfo.vue';
import { array } from 'yup';

const { t, locale } = useI18n()

const route = useRoute();
const orderOID = computed(() => route.params.oid);

const fallbackLogo = flightLogo


const rate = sessionStorage.getItem('eur')

const formatDateFinish = (date: string): string => {
    const [year, month, day] = date.split('.');
    return `${day}.${month}.${year}`;
};

const orderId = ref('');
const orderInfo = ref(null);
const flightData = ref(null);
const loading = ref(false);
const error = ref(null);


const isHovered = ref<{ [key: string]: boolean }>({});


function getFlightKey(index: number) {
    return `${index}`;
}

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

    return `${hours} ${t('txtHour')} ${minutes} ${t('txtMin')}`; // Цаг, минутын форматаар буцаана
};

const getTotalStops = () => getAllSegments().length - 1;

const getTotalStops2 = (offer, index: number, findex: number) => {
    return moreFlights(offer, index)[findex].length - 1

};
const getStopIatas = (offer, index: number, findex: number) => {
    return moreFlights(offer, index)[findex].slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata)

}

function getDotPositionStyle(index, total) {
    const percent = ((index + 1) / (total + 1)) * 100;
    return {
        left: `${percent}%`,
        transform: 'translate(-50%, -20%)',
        top: '0',
        bottom: '20px'
    };
}
// const StoreAirPorts = computed(() => flightStore.AirPorts);

function getStatusClass(status) {
    switch (status.toLowerCase()) {
        case 'confirm': return 'txtConfirmed';
        case 'nonconfirm': return 'txtNotConfirmed';
        case 'cancelled': return 'ЦУЦЛАГДСАН';
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

onMounted(() => {
    fetchOrderInfo();
});


async function fetchOrderInfo() {
    // if (!orderId.value) {
    //     error.value = 'Захиалгын дугаар оруулна уу.';
    //     return;
    // }

    loading.value = true;
    error.value = null;
    orderInfo.value = null;
    console.log(orderOID)

    try {
        const response = await fetch(`https://api.airkacc.mn/api/orderinfo/${orderOID.value}/mn/`);
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

const getFlightData2 = () => {
    return orderInfo.value?.Offers?.OfferInfo || [];
};


const FlightData = computed(() => getFlightData());
const OfferInfo = computed(() => FlightData.value?.Offers?.OfferInfo ?? []); // шууд массив болго!

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);
// console.log('OfferInfo:', OfferInfo.value);

// Хэрвээ OfferInfo нь нэг ширхэг объект байвал массив болгож ав:
const OfferInfoArr = computed(() => {
    const oi = FlightData.value?.Offers?.OfferInfo;
    return Array.isArray(oi) ? oi : oi ? [oi] : [];
});

// Ашиглахдаа:
function getSegmentsByRph(rph) {
    if (!Array.isArray(OfferInfoArr.value)) return [];

    const segmentsFlat = OfferInfoArr.value.flatMap((offer) => offer.Segments?.OfferSegment || []);
    // console.log('Segments Flat:', segmentsFlat);

    if (show.value <= 2) {
        if (segmentsFlat.filter((seg) => seg.Rph === rph).length === 0) {
            return OfferInfoArr.value
                .filter((offer) => offer.Rph === rph)
                .flatMap((offer) => offer.Segments?.OfferSegment || []);
        } else {
            return segmentsFlat.filter((seg) => seg.Rph === rph);
        }
    } else {
        return segmentsFlat;
    }
}


const getTotalFlightTime2 = (offer, index: number, findex: number) => {
    const totalMinutes = moreFlights(offer, index)[findex].reduce(
        (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
        0
    );

    const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
    const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

    return `${hours} ${t('txtHour')} ${minutes} ${t('txtMin')}`; // Цаг, минутын форматаар буцаана

};

const goSegments = computed(() => getSegmentsByRph("1"));
const returnSegments = computed(() => getSegmentsByRph("2"));

const trips = parseInt(sessionStorage.getItem("trips") || "0", 10);
const moreFlightsCache = ref({});
const moreFlights = (offer, index) => {
    const key = offer.OfferCode || index;
    if (!moreFlightsCache.value[key]) {
        // ... бодоод хадгална (чиний кодоос шууд хуул)
        let data = getFlightData2();

        if (!Array.isArray(data)) {
            data = [data]
        }

        console.log('data:', data);
        let filter = [];
        const tripCount = trips.toString();
        for (let i = 1; i <= trips; i++) {
            let currentFilter = [];
            if (data.some((o) => o.Rph === tripCount)) {
                currentFilter = data.filter((o) => o.Rph === i.toString()).flatMap((o) => o.Segments.OfferSegment);
            } else {
                currentFilter = data.flatMap((o) => o.Segments?.OfferSegment || []).filter((s) => s.Rph === i.toString());
            }
            filter.push(currentFilter);
        }
        moreFlightsCache.value[key] = filter;
    }
    return moreFlightsCache.value[key];
};

function printPage() {
    window.print();
}


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


function printAsPDF() {
    const element = document.querySelector('.print-page');
    if (!element) return;

    const options = {
        filename: `airkacc_order_${orderInfo.value?.orderNo || 'export'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}

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
    z-index: 0;
}



.order-detail-container {
    max-width: 900px;
    background: #b1b1c1;
    border: #a0aec0;
    margin: 10px auto 50px;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 1%;
    z-index: 500;
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

@media print {
    body * {
        visibility: hidden;
    }

    .order-detail-container,
    .order-detail-container * {
        visibility: visible;
    }

    .order-detail-container {
        position: absolute;
        left: 0;
        top: -200;
        width: 100%;
        margin: 0px auto 50px !important;
    }


    .btn,
    .navbar,
    .no-print {
        display: none !important;
    }
}


/*Traveler>*/
.passenger-container {
    margin-bottom: 20px;
    background: #f9fafb;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: start;
    color: #333;
}

.passenger-info {
    overflow-x: auto;
}

.passenger-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
}

.passenger-table th,
.passenger-table td {
    padding: 12px 16px;
    border: 1px solid #ddd;
    text-align: center;
}

.passenger-table th {
    background-color: #f1f5f9;
    font-weight: 600;
}

.passenger-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.passenger-table tr:hover {
    background-color: #f1f5f9;
}
</style>
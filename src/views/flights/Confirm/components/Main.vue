<template>
    <div>
        <b-container>
            <b-row>
                <b-col v-if="orderInfo" md="10" xl="12" class="mx-auto print-page pt-5">
                    <b-card no-body class="shadow">
                        <img :src="gallery4" class="rounded-top" alt="gallery4" />
                        <b-card-body class="text-center p-4">
                            <b-card-title tag="h1" class="fs-3">{{ t(getStatusClass(orderInfo?.status))
                                }}</b-card-title>
                            <p class="lead mb-3">Itinerary</p>
                            <h5 class="text-primary mb-4">Airkacc.mn | {{ t('txtFlightBooking') }}</h5>

                            <!-- Дээд хэсэг: захиалгын мэдээлэл -->
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
                                            <span class="h6 fw-normal mb-0">
                                                {{ Math.ceil((Number(orderInfo?.FullPrice) * parseFloat(rate ||
                                                '1'))).toLocaleString() }}{{ currency }}
                                            </span>
                                        </li>
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
                                                formatDateFinish(orderInfo?.ConfirmableToUtc.split(' ')[0]) }}</span>
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
                                            <span class="h6 fw-normal mb-0">
                                                {{ paxCountTotal }}
                                            </span>
                                        </li>
                                    </ul>
                                </b-col>
                            </b-row>

                            <!-- Зорчигчдын хүснэгт -->
                            <div class="passenger-container">
                                <h2 class="title">{{ t('txtTravelerInfo') }}</h2>

                                <div v-if="Array.isArray(orderInfo?.PaxList?.PaxData)" class="passenger-info">
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
                                            <tr v-for="(traveler, i) in orderInfo.PaxList.PaxData" :key="i">
                                                <td>{{ i + 1 }}</td>
                                                <td>{{ traveler.Document || '-' }}</td>
                                                <td>{{ traveler.Surname || '-' }}</td>
                                                <td>{{ traveler.Name || '-' }}</td>
                                                <td>{{ formatDateFinish(traveler.BirthDay) || '-' }}</td>
                                                <td>{{ traveler.GenderType || '-' }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                                                <td>1</td>
                                                <td>{{ orderInfo?.PaxList?.PaxData?.Document || '-' }}</td>
                                                <td>{{ orderInfo?.PaxList?.PaxData?.Surname || '-' }}</td>
                                                <td>{{ orderInfo?.PaxList?.PaxData?.Name || '-' }}</td>
                                                <td>{{ formatDateFinish(orderInfo?.PaxList?.PaxData?.BirthDay) || '-' }}
                                                </td>
                                                <td>{{ orderInfo?.PaxList?.PaxData?.GenderType || '-' }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Нислэгийн мэдээлэл -->
                            <div class="flight-details-container">
                                <h3 class="section-title">{{ t('txtFlightInfo') }}</h3>

                                <div class="text-start mb-3" v-if="orderInfo?.Offers?.OfferInfo">
                                    <div class="d-flex mb-2">
                                        <span class="pnr-label">{{ t('txtPNR') }}:</span>
                                        <span class="pnr-value">
                                            {{ firstPNR || '-' }}
                                        </span>
                                    </div>
                                </div>

                                <!-- ✨ ЭНД FlightOfferCard-аа шууд ашиглаж байна -->
                                <FlightOfferCard v-if="selectedOffer" :offer="selectedOffer" :index="0"
                                    :rate="Number(rate || 1)" :currency="currency" :adults="adults" :childs="childs"
                                    :infants="infants" :searchGuid="SearchGuid" :showOverride="show"
                                    :hideSummaryColumn="true" :hideChooseButton="true" />

                                <div v-else class="text-muted small px-2">
                                    {{ t('txtNoFlightInfo') || 'Нислэгийн мэдээлэл олдсонгүй.' }}
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-card class="justify-content-center align-items-center">
                    <b-card-body>
                        <b-button variant="success" class="mb-3 no-print" @click="printAsPDF">
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
                <div><strong>{{ t('txtInfoAddress') }}:</strong> Ulaanbaatar 15141</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import html2pdf from 'html2pdf.js'
import gallery4 from '@/assets/images/gallery/04.jpg'
import { useI18n } from 'vue-i18n'
import {
    BIconCalendar,
    BIconPeople,
    BIconPerson,
    BIconVr,
    BIconWallet2
} from 'bootstrap-icons-vue'
import FlightOfferCard from '@/components/FlightOfferCard.vue'
import { currency } from '@/helpers/constants'

// i18n
const { t } = useI18n()

// route
const route = useRoute()
const orderOID = computed(() => route.params.oid as string)

// state
const orderInfo = ref<any>(null)
const loading = ref(false)
const error = ref<string | null>(null)

// session defaults
const rate = sessionStorage.getItem('eur') || '1'
const show = ref<number>(Number(sessionStorage.getItem('flight')) || 1)

// ====== Fetch order info ======
onMounted(fetchOrderInfo)

async function fetchOrderInfo() {
    loading.value = true
    error.value = null
    orderInfo.value = null

    try {
        const res = await fetch(`https://api.airkacc.mn/api/orderinfo/${orderOID.value}/mn/`)
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
        const data = await res.json()
        const aero = data?.result?.Body?.AeroBookResponse?.AeroBookResult
        if (data?.status === 'SUCCESS' && aero) {
            orderInfo.value = aero
        } else {
            error.value = 'Захиалгын дугаар олдсонгүй.'
        }
    } catch (e: any) {
        console.error('fetchOrderInfo error:', e)
        error.value = e?.message || 'Алдаа гарлаа.'
    } finally {
        loading.value = false
    }
}

// ====== Helpers ======
function formatDateFinish(date?: string): string {
    if (!date) return ''
    const [day, month, year] = date.split('.')
    const names: Record<string, string> = {
        '01': 'JAN', '02': 'FEB', '03': 'MAR', '04': 'APR', '05': 'MAY', '06': 'JUN',
        '07': 'JUL', '08': 'AUG', '09': 'SEP', '10': 'OCT', '11': 'NOV', '12': 'DEC',
    }
    return `${day} ${names[month?.padStart(2, '0')] || month} ${year}`
}

function getStatusClass(status = '') {
    switch (status.toLowerCase()) {
        case 'confirm': return 'txtConfirmed'
        case 'nonconfirm': return 'txtNotConfirmed'
        case 'cancelled': return 'ЦУЦЛАГДСАН'
        default: return ''
    }
}

// ====== FlightOfferCard-д хэрэгтэй өгөгдлүүд ======
const firstPNR = computed(() => {
    const oi = orderInfo.value?.Offers?.OfferInfo
    return Array.isArray(oi) ? oi[0]?.PNR : oi?.PNR
})

const SearchGuid = computed(() => orderInfo.value?.SearchGuid || '')

/** Pax тооцоолол */
const paxList = computed(() => {
    const p = orderInfo.value?.PaxList?.PaxData
    return Array.isArray(p) ? p : p ? [p] : []
})
const adults = computed(() => paxList.value.filter(p => (p?.AgeType || '').toLowerCase() === 'adult').length || 1)
const childs = computed(() => paxList.value.filter(p => (p?.AgeType || '').toLowerCase() === 'child').length || 0)
const infants = computed(() => paxList.value.filter(p => (p?.AgeType || '').toLowerCase() === 'infant').length || 0)
const paxCountTotal = computed(() => paxList.value.length || 1)

/** FlightOfferCard-д нийцүүлж normalize хийх */
const selectedOffer = computed(() => {
    const a = orderInfo.value
    if (!a?.Offers?.OfferInfo) return null

    const oiRaw = a.Offers.OfferInfo
    const oi = Array.isArray(oiRaw) ? oiRaw[0] : oiRaw
    if (!oi) return null

    const segRaw = oi?.Segments?.OfferSegment
    const segments = Array.isArray(segRaw) ? segRaw : (segRaw ? [segRaw] : [])

    const adultPrice = Number(
        a?.TariffInfo?.AdultPrice ??
        a?.TariffInfo?.AdultBasePrice ??
        a?.FullPrice ?? 0
    )
    const totalPrice = Number(a?.FullPrice ?? adultPrice)

    // Хамгийн нийцтэй хэлбэрээр буцаана (Offers + Segments хоёуланг нь өгнө)
    return {
        OfferCode: a?.BookGuid ?? oi?.PNR ?? 'BOOK',
        PNR: oi?.PNR,
        Rph: oi?.Rph,
        AdultPrice: adultPrice,
        TotalPrice: totalPrice,
        ChildPrice: undefined,
        InfantPrice: undefined,
        ValidatingAirline: oi?.ValidatingAirline,
        ValidatingAirlineName: oi?.ValidatingAirlineName,

        // FlightOfferCard доторх map-уудтай нийцүүлэх
        Segments: { OfferSegment: segments },
        Offers: { OfferInfo: [{ ...oi, Segments: { OfferSegment: segments } }] },
    }
})

// ====== Actions ======
function printAsPDF() {
    const el = document.querySelector('.print-page')
    if (!el) return
    const options = {
        filename: `airkacc_order_${orderInfo.value?.orderNo || 'export'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }
    html2pdf().set(options).from(el as HTMLElement).save()
}
</script>

<style scoped>
/* ТАНЫ одоогийн style-уудыг үлдээв — өөрчлөх шаардлагагүй */
.ticket-check {
    background-image: url('https://echina.mn/assets/ticket_check.jpg');
    background-size: cover;
    background-position: center;
    height: 40vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0
}

.order-detail-container {
    max-width: 900px;
    background: #b1b1c1;
    border: #a0aec0;
    margin: 10px auto 50px;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 1%;
    z-index: 500
}

.content {
    text-align: center;
    color: white;
    max-width: 600px;
    padding: 20px
}

.title {
    color: white;
    font-size: 48px;
    font-weight: bold
}

.subtitle {
    font-size: 18px;
    margin-bottom: 30px
}

.search-box {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px
}

.input {
    padding: 12px 20px;
    border-radius: 6px;
    border: none;
    min-width: 300px
}

.search-button {
    padding: 12px 20px;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer
}

.loading-text {
    margin-top: 10px;
    color: #ffc107
}

.error-text {
    margin-top: 10px;
    color: #f44336
}

.contact {
    background: white;
    padding: 40px 20px;
    text-align: center
}

.contact-info {
    margin-top: 20px;
    line-height: 1.8
}

.order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px
}

.order-title {
    font-size: 24px;
    font-weight: 600;
    color: #2d3748;
    margin: 0
}

.order-status {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize
}

.status-pending {
    background-color: #fff3cd;
    color: #856404
}

.status-confirmed {
    background-color: #d4edda;
    color: #155724
}

.status-cancelled {
    background-color: #f8d7da;
    color: #721c24
}

.order-card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding: 20px;
    margin-bottom: 25px
}

.order-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px
}

.info-column {
    display: flex;
    flex-direction: column
}

.price-column {
    align-items: flex-end
}

.info-item,
.price-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center
}

.info-label,
.price-label {
    font-weight: 500;
    color: #4a5568;
    min-width: 140px
}

.info-value {
    font-weight: 600;
    color: #2d3748
}

.price-value {
    font-weight: 600;
    color: #2d3748
}

.total-price .price-value {
    font-size: 18px;
    color: #2b6cb0
}

.payment-link {
    color: #3182ce;
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center
}

.payment-link:hover {
    text-decoration: underline
}

.section-container {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    padding: 20px;
    margin-bottom: 25px
}

.section-title {
    font-size: 18px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 20px;
    display: flex;
    align-items: center
}

.section-icon {
    margin-right: 10px;
    color: #4a5568
}

.passenger-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 15px
}

.passenger-card {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 15px;
    background-color: #f8fafc
}

.single-passenger {
    max-width: 400px
}

.passenger-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2e8f0
}

.passenger-number {
    font-size: 14px;
    color: #4a5568
}

.passenger-type {
    font-size: 12px;
    padding: 3px 8px;
    border-radius: 12px;
    font-weight: 500
}

.type-adult {
    background-color: #bee3f8;
    color: #2b6cb0
}

.type-child {
    background-color: #feebc8;
    color: #b7791f
}

.type-infant {
    background-color: #fed7d7;
    color: #c53030
}

.passenger-info {
    grid-template-columns: 1fr 1fr;
    gap: 10px
}

.info-row {
    display: flex;
    justify-content: space-between
}

.info-row span {
    color: #718096;
    font-size: 14px
}

.info-row strong {
    color: #2d3748;
    font-weight: 500
}

.flight-details-container {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 25px
}

.pnr-info {
    background-color: #f0f4f8;
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 20px;
    display: inline-block
}

.pnr-label {
    font-weight: 500;
    color: #4a5568;
    margin-right: 8px
}

.pnr-value {
    font-weight: 600;
    color: #2b6cb0
}

@media (max-width:768px) {
    .order-info-grid {
        grid-template-columns: 1fr
    }

    .price-column {
        align-items: flex-start
    }

    .passenger-grid {
        grid-template-columns: 1fr
    }

    .passenger-info {
        grid-template-columns: 1fr
    }
}

@media print {
    body * {
        visibility: hidden
    }

    .order-detail-container,
    .order-detail-container * {
        visibility: visible
    }

    .order-detail-container {
        position: absolute;
        left: 0;
        top: -200;
        width: 100%;
        margin: 0 auto 50px !important
    }

    .btn,
    .navbar,
    .no-print {
        display: none !important
    }
}

/* Traveler table */
.passenger-container {
    margin-bottom: 20px;
    background: #f9fafb;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .1)
}

.title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: start;
    color: #333
}

.passenger-table {
    width: 100%;
    border-collapse: collapse;
    background: #fff
}

.passenger-table th,
.passenger-table td {
    padding: 12px 16px;
    border: 1px solid #ddd;
    text-align: center
}

.passenger-table th {
    background-color: #f1f5f9;
    font-weight: 600
}

.passenger-table tr:nth-child(even) {
    background-color: #f9f9f9
}

.passenger-table tr:hover {
    background-color: #f1f5f9
}
</style>

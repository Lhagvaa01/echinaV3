<template>
    <div>
        <div v-for="(segments, inx) in getAllSegments(offer).slice(0, 1)" :key="inx">
            <b-card no-body class="border border-1 border-primary" :key="segments.FlightNum">
                <div>
                    <div v-for="(flight, findex) in moreFlights(offer, index)" :key="findex">
                        <div v-if="flight.length > 0">
                            <b-row class="pe-1 pe-sm-3">
                                <!-- Зүүн: үндсэн мэдээлэл -->
                                <b-col cols="12" md="9" xl="9" xxl="9"
                                    class="d-flex flex-column pe-md-0 mb-3 mb-md-0 justify-content-between">
                                    <div class="d-flex justify-content-end">
                                        <div class="w-100">
                                            <div class="d-flex justify-content-between align-items-center px-3">
                                                <h6 class="m-3 mb-0 fw-bold d-flex align-items-center text-primary"
                                                    style="font-size: smaller;">
                                                    <img :src="PlaneUp" alt="Plane Up" class="me-2"
                                                        style="width:32px;height:32px" />
                                                    {{
                                                        (show == 2 && moreFlights(offer, index).length - 1 === findex)
                                                            ? t('txtToFlight')
                                                            : t('txtFromFlight')
                                                    }}
                                                </h6>
                                                <h6 class="fw-bold mb-0 text-primary" style="font-size: smaller;">
                                                    {{ flight.length > 1 ? t('txtTransit') : t('txtDirect') }}
                                                </h6>
                                            </div>

                                            <div class="border-1 border-bottom border-primary ms-4" style="width:70px;">
                                            </div>

                                            <b-card-header
                                                class="d-flex justify-content-between align-items-center py-0 ps-4 mt-2">
                                                <div class="d-flex align-items-center mb-2 mb-sm-0"
                                                    style="font-size: smaller;">
                                                    <img :src="flight[0]?.MarketingAirline
                                                        ? 'https://api.echina.mn/assets/d/' + flight[0]?.MarketingAirline + '.png'
                                                        : fallbackLogo" alt="Airline logo" class="me-2"
                                                        style="width:30px;height:auto" />
                                                    <h6 class="fw-normal mb-0" style="font-size: smaller;">
                                                        {{
                                                            AirCompanies.length > 0
                                                                ? (AirCompanies.find((airline: any) => airline.Code ===
                                                                    flight[0]?.MarketingAirline)?.Value
                                                                    || 'Airline Not Found')
                                                                : 'No Air Companies Available'
                                                        }}
                                                        ({{ flight[0]?.FlightNum || 'SA-1254' }})
                                                    </h6>

                                                    <p v-if="flight.length > 1" class="ms-2 text-warning"
                                                        @mouseover="onMouseOver(getFlightKey(index))"
                                                        @mouseleave="onMouseLeave(getFlightKey(index))">
                                                        +{{ flight.length - 1 }} {{ t('txtTotalAirline') }}
                                                    </p>

                                                    <!-- Tooltip -->
                                                    <div v-if="isHovered[getFlightKey(index)]"
                                                        class="bg-white border rounded shadow position-absolute p-3 start-50"
                                                        style="z-index:1000;min-width:260px;">
                                                        <div v-for="segment in flight" :key="segment.FlightNum"
                                                            class="d-flex align-items-start mb-2">
                                                            <img :src="segment.MarketingAirline
                                                                ? 'https://api.echina.mn/assets/d/' + segment.MarketingAirline + '.png'
                                                                : fallbackLogo" alt="Airline logo" class="me-2"
                                                                style="width:32px;height:auto;border-radius:4px" />
                                                            <div class="d-flex gap-2">
                                                                <div class="fw-semibold text-dark"
                                                                    style="font-size:14px;">
                                                                    {{
                                                                        AirCompanies.find((airline: any) => airline.Code ===
                                                                            segment.MarketingAirline)?.Value
                                                                        || 'Unknown Airline'
                                                                    }}
                                                                    <span class="text-muted">({{ segment.FlightNum ||
                                                                        'SA-1254' }})</span>
                                                                </div>
                                                                <div class="d-flex align-items-center mt-1">
                                                                    <Briefcase v-if="segment.Baggage" class="me-2"
                                                                        color="#5a2dd7" :size="16" />
                                                                    <Luggage v-if="segment.CabinBaggage" color="#5a2dd7"
                                                                        :size="16" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h5 class="mt-0 fw-light mb-0 pb-0 text-muted"
                                                        style="font-size: smaller;">
                                                        Нийт: {{ getTotalFlightTime(offer, index, findex) }}
                                                    </h5>
                                                </div>
                                            </b-card-header>

                                            <b-card-body class="p-4 pb-0">
                                                <b-row
                                                    class="g-4 justify-content-between align-content-end align-items-end"
                                                    style="height:100px;">
                                                    <!-- Departure -->
                                                    <b-col cols="3" sm="4" md="3" class="mt-0 text-start">
                                                        <p class="mb-0" style="font-size:medium">{{
                                                            flight[0]?.Departure.Iata }}</p>
                                                        <p class="mb-0 text-truncate"
                                                            style="font-size:smaller;max-width:120px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"
                                                            :title="getAirport(flight[0]?.Departure.Iata)?.City || ''">
                                                            {{ getAirport(flight[0]?.Departure.Iata)?.City || '' }}
                                                        </p>
                                                        <h4 class="fw-bold fs-4 mb-0">{{
                                                            flight[0]?.Departure.Date.split(' ')[1] }}</h4>
                                                        <p class="mb-0" style="font-size:x-small">{{
                                                            formatDate(flight[0]?.Departure.Date) }}</p>
                                                    </b-col>

                                                    <!-- Timeline -->
                                                    <b-col cols="5" sm="4" md="6" class="text-center mt-3">
                                                        <div class="position-relative" style="height:80px;">
                                                            <hr class="position-absolute top-50 start-0 end-0 m-0"
                                                                style="height:1px;background-color:#ccc;" />
                                                            <div v-for="(stop, i) in getStopIatas(offer, index, findex)"
                                                                :key="i" class="position-absolute text-center"
                                                                :style="getDotPositionStyle(i, getStopIatas(offer, index, findex).length)">
                                                                <div style="font-size:small;font-weight:bold;">{{ stop
                                                                }}</div>
                                                                <div style="font-size:small;color:gray;">({{
                                                                    getAirport(stop)?.City || '' }})</div>
                                                                <div class="rounded-circle bg-primary mx-auto"
                                                                    style="width:8px;height:8px;top:50%;left:0;transform:translateY(120%);">
                                                                </div>
                                                            </div>
                                                            <div class="rounded-circle bg-secondary position-absolute"
                                                                style="width:8px;height:8px;top:50%;left:0;transform:translateY(-50%);">
                                                            </div>
                                                            <div class="rounded-circle bg-secondary position-absolute"
                                                                style="width:8px;height:8px;top:50%;right:0;transform:translateY(-50%);">
                                                            </div>
                                                        </div>
                                                    </b-col>

                                                    <!-- Arrival -->
                                                    <b-col cols="3" sm="4" md="3" class="mt-0 text-end">
                                                        <p class="mb-0" style="font-size:medium">{{ flight[flight.length
                                                            - 1].Arrival.Iata }}</p>
                                                        <p class="mb-0" style="font-size:smaller">
                                                            {{ getAirport(flight[flight.length - 1]?.Arrival.Iata)?.City
                                                                || '' }}
                                                        </p>
                                                        <h4 class="fs-4 mb-0">{{ flight[flight.length -
                                                            1].Arrival.Date.split(' ')[1] }}</h4>
                                                        <p class="mb-0" style="font-size:x-small">{{
                                                            formatDate(flight[flight.length - 1].Arrival.Date) }}</p>
                                                    </b-col>
                                                </b-row>

                                                <b-row>
                                                    <b-col>
                                                        <p class="d-grid" style="font-size:small">
                                                            <span>
                                                                {{ getAirport(flight[flight.length -
                                                                    1]?.Departure.Iata)?.City || '' }}
                                                                {{ getAirport(flight[flight.length -
                                                                    1]?.Departure.Iata)?.Name || '' }}
                                                            </span>
                                                            <span v-if="flight[0]?.Departure.Terminal">Терминал: {{
                                                                flight[0]?.Departure.Terminal }}</span>
                                                        </p>
                                                    </b-col>
                                                    <b-col class="text-end">
                                                        <p class="d-grid" style="font-size:small">
                                                            <span>
                                                                {{ getAirport(flight[flight.length -
                                                                    1]?.Arrival.Iata)?.City || '' }}
                                                                {{ getAirport(flight[flight.length -
                                                                    1]?.Arrival.Iata)?.Name || '' }}
                                                            </span>
                                                            <span v-if="flight[0]?.Arrival.Terminal">Терминал: {{
                                                                flight[0]?.Arrival.Terminal }}</span>
                                                        </p>
                                                    </b-col>
                                                </b-row>
                                            </b-card-body>

                                            <!-- self-transfer анхааруулга -->
                                            <b-row v-for="(offseg, offsegIdx) in flight" :key="'offseg-' + offsegIdx"
                                                class="align-items-start mx-2">
                                                <b-col cols="3" sm="2" md="4" v-if="offseg.SelfConnect === 'true'"
                                                    class="d-flex pe-1">
                                                    <div
                                                        style="width:100%;height:55px;background-color:#eee9ff;border-radius:10px;">
                                                    </div>
                                                </b-col>
                                                <b-col cols="9" sm="10" md="8" class="mb-2 ps-1"
                                                    v-if="offseg.SelfConnect === 'true'">
                                                    <div
                                                        style="background-color:#ffe6e6;border-radius:10px;padding:8px 12px;">
                                                        <p class="mb-0 text-danger"
                                                            style="font-size:small;white-space:pre-line;">
                                                            {{ getTotalStops(offer, index, findex) }} {{
                                                                t('txtFlightStop') }} {{ t('txtSelfTBag') }} (Self-transfer
                                                            baggage)
                                                        </p>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>

                                        <div>
                                            <div class="vertical-divider h-100"></div>
                                        </div>
                                    </div>

                                    <div v-if="moreFlights(offer, index).length == findex + 1"
                                        class="d-flex justify-content-end ms-0 ps-0">
                                        <div class="d-flex ps-4 w-100 border-top border-primary justify-content-between border-2 bg-primary bg-opacity-10"
                                            style="height:42px;border-bottom-left-radius:1rem;">
                                            <div class="d-none d-md-flex gap-4">
                                                <div v-if="offer.ChildPrice"
                                                    class="d-flex text-center border border-primary rounded my-2 px-3 justify-content-center small">
                                                    <span class="text-black">
                                                        🧑 {{ adults }}
                                                        <span class="text-primary">: {{
                                                            adultPriceConverted.toLocaleString() }}{{ currency }}</span>
                                                    </span>
                                                </div>
                                                <div v-if="offer.ChildPrice"
                                                    class="d-flex text-center border border-primary rounded m-2 px-3 justify-content-center small">
                                                    <span class="text-black">🧒 {{ childs }}
                                                        <span class="text-primary">: {{
                                                            childPriceConverted.toLocaleString() }}{{ currency }}</span>
                                                    </span>
                                                </div>
                                                <div v-if="offer.InfantPrice"
                                                    class="d-flex text-center border border-primary rounded m-2 px-3 justify-content-center small">
                                                    <span class="text-black">👶 {{ infants }}
                                                        <span class="text-primary">: {{
                                                            infantPriceConverted.toLocaleString() }}{{ currency
                                                            }}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="text-center py-2 me-3">
                                                <span class="text-primary small">
                                                    {{ t('txtAvailableSeat') }}: {{ segments.ResBookDesigQuantity }}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="vertical-divider h-100"></div>
                                        </div>
                                    </div>

                                    <div v-if="findex !== moreFlights(offer, index).length - 1 && show !== 1"
                                        class="border-bottom"></div>
                                </b-col>

                                <!-- Баруун: үнэ/сонгох -->
                                <b-col cols="12" md="3" xl="3" xxl="3"
                                    class="d-flex flex-column px-0 justify-content-between bg-primary bg-opacity-10"
                                    :style="show == 1
                                        ? 'border-bottom-right-radius:1rem;border-top-right-radius:1rem;'
                                        : (moreFlights(offer, index).length === findex + 1
                                            ? 'border-bottom-right-radius:1rem;'
                                            : 'border-top-right-radius:1rem;')">
                                    <div class="d-none d-md-grid">
                                        <div v-if="moreFlights(offer, index).length > 0 && (findex == 0)"
                                            class="d-flex rounded-top mt-2 ms-md-2 gap-2 justify-content-start">
                                            <div v-if="segments.Baggage"
                                                class="text-center p-0 border rounded-2 border-primary"
                                                style="width:34px;">
                                                <i class="fas fa-suitcase-rolling text-primary"></i>
                                            </div>
                                            <div v-if="segments.CabinBaggage"
                                                class="text-center p-0 border rounded-2 border-primary"
                                                style="width:34px;">
                                                <i class="fas fa-suitcase text-primary"></i>
                                            </div>
                                        </div>
                                        <div v-if="moreFlights(offer, index).length > 0 && (findex == 0)"
                                            class="d-flex gap-2 mt-2 ms-2">
                                            <div class="border border-primary rounded-2 px-1">👤 {{ adults }}</div>
                                            <div v-if="childs > 0" class="border border-primary rounded-2 px-1">🧒 {{
                                                childs }}</div>
                                            <div v-if="infants > 0" class="border border-primary rounded-2 px-1">👶 {{
                                                infants }}</div>
                                        </div>
                                    </div>

                                    <b-row v-if="moreFlights(offer, index).length == findex + 1"
                                        class="justify-content-end align-content-end h-100 mx-0 rounded-0">
                                        <b-col v-if="!hideSummaryColumn"
                                            class="d-flex d-md-block px-4 justify-content-between align-items-end text-md-end py-3">
                                            <div>
                                                <div class="d-md-none">
                                                    <div class="d-flex rounded-top mt-2 ms-md-2 gap-2">
                                                        <div v-if="segments.Baggage"
                                                            class="text-center p-0 border rounded-2 border-primary"
                                                            style="width:34px;">
                                                            <i class="fas fa-suitcase-rolling text-primary"></i>
                                                        </div>
                                                        <div v-if="segments.CabinBaggage"
                                                            class="text-center p-0 border rounded-2 border-primary"
                                                            style="width:34px;">
                                                            <i class="fas fa-suitcase text-primary"></i>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex gap-2 mt-2">
                                                        <div class="border border-primary rounded-2 px-1">👤 {{ adults
                                                        }}</div>
                                                        <div v-if="childs > 0"
                                                            class="border border-primary rounded-2 px-1">🧒 {{ childs }}
                                                        </div>
                                                        <div v-if="infants > 0"
                                                            class="border border-primary rounded-2 px-1">👶 {{ infants
                                                            }}</div>
                                                    </div>
                                                </div>

                                                <div class="fw-bold mb-1 text-black">
                                                    {{ adultPriceConverted.toLocaleString() }}{{ currency }}
                                                </div>
                                                <div v-if="totalPassengers > 1" class="fw-light mb-1 small text-black">
                                                    Нийт: {{ totalConverted.toLocaleString() }}{{ currency }}
                                                </div>
                                                <div class="text-danger mb-2">{{ segments.FlightClass }}</div>
                                            </div>

                                            <b-button v-if="!hideChooseButton" block variant="outline-primary"
                                                class="h-sm-25 mb-0 mb-sm-2" :id="'flightOption' + index + findex"
                                                v-b-toggle="'flightOption' + index + findex"
                                                @click="showDetailO(`${index}-${findex}`, offer.OfferCode, searchGuid)">
                                                {{ t('txtChoose') }}
                                            </b-button>
                                        </b-col>
                                    </b-row>

                                    <!-- Доор: дэлгэрэнгүй -->
                                    <b-row v-if="moreFlights(offer, index).length == findex + 1"
                                        class="border-2 border-top border-primary justify-content-center mx-3 mx-md-0"
                                        style="height:42px;">
                                        <b-col class="text-center py-2">
                                            <li class="list-inline-item" style="font-size: smaller;">
                                                <a href="#" :id="'toggleButton' + index + findex"
                                                    class="btn-more d-flex align-items-center collapsed p-0 mb-0 justify-content-center"
                                                    role="button" @click.prevent="showDetail(`${index}-${findex}`)">
                                                    Дэлгэрэнгүй
                                                    <ChevronDown />
                                                </a>
                                            </li>
                                        </b-col>
                                    </b-row>
                                </b-col>

                                <!-- Collapses -->
                                <b-col cols="12" class="ps-3 ms-2 border-1 border-primary">
                                    <b-collapse :id="'flightDetail' + index + findex"
                                        v-model="detailsShown[`${index}-${findex}`]" class="multi-collapse">
                                        <div v-if="detailsShown[`${index}-${findex}`]" class="pt-3">
                                            <FlightDetailTab :flight="offer" :index="2" :airports="StoreAirPorts" />
                                        </div>
                                    </b-collapse>

                                    <b-collapse :id="'flightOption' + index + findex"
                                        v-model="detailsShowO[`${index}-${findex}`]" class="multi-collapse">
                                        <div v-if="detailsShowO[`${index}-${findex}`]" class="pt-3">
                                            <OptionBooking :offerCode="offer.OfferCode" :searchGuid="searchGuid" />
                                        </div>
                                    </b-collapse>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronDown, Briefcase, Luggage } from 'lucide-vue-next'
import FlightDetailTab from '@/views/flights/List/components/FlightDetailTab.vue'
import OptionBooking from '@/views/flights/List/components/OptionBooking.vue'
import { useFlightStore } from '@/stores/flight'
import { useOptionStore } from '@/stores/optionStore'
import PlaneUp from '@/assets/images/Icon/planeup.svg'
import flightLogo from '@/assets/images/element/09.svg'

/** Props */
const props = defineProps<{
    offer: any
    index: number
    rate: number | string
    currency: string
    adults: number
    childs: number
    infants: number
    searchGuid: string
    showOverride?: number
    hideSummaryColumn?: boolean
    hideChooseButton?: boolean
}>()

const { t } = useI18n()
const flightStore = useFlightStore()
const optionStore = useOptionStore()

const fallbackLogo = flightLogo
const rateNum = computed(() => parseFloat(String(props.rate || 1)) || 1)
const totalPassengers = computed(() => (props.adults || 0) + (props.childs || 0) + (props.infants || 0))
const show = computed(() => props.showOverride ?? Number(sessionStorage.getItem('flight') || 1))

/** Stores */
const AirCompanies = computed(() =>
    Array.isArray(flightStore.AirCompany) ? flightStore.AirCompany : []
)
const StoreAirPorts = computed(() =>
    Array.isArray(flightStore.AirPorts) ? flightStore.AirPorts : []
)

/** Airport helpers (null-safe, хурдан) */
const airportsByIata = computed<Record<string, any>>(() => {
    const m: Record<string, any> = {}
    for (const a of StoreAirPorts.value) if (a?.Iata) m[a.Iata] = a
    return m
})
function getAirport(iata?: string) {
    return iata ? airportsByIata.value[iata] : undefined
}

/** Tooltip */
const isHovered = ref<{ [k: string]: boolean }>({})
function getFlightKey(index: number) { return `${index}` }
function onMouseOver(key: string) { isHovered.value[key] = true }
function onMouseLeave(key: string) { isHovered.value[key] = false }

/** Utils */
function formatDate(input: string): string {
    if (!input) return ''
    const [d, m, yTime] = input.split('.')
    const [y] = (yTime || '').split(' ')
    return `${y}-${m}-${d}`
}
function getDotPositionStyle(index: number, total: number) {
    const percent = ((index + 1) / (total + 1)) * 100
    return { left: `${percent}%`, transform: 'translate(-50%, -20%)', top: '0', bottom: '20px' }
}

/** Segment helpers (энэ offer-д хамааруулж) */
const allSegmentsCache = ref<Record<string, any[]>>({})
function getAllSegments(offer: any) {
    const key = offer?.OfferCode ?? 'k'
    if (!allSegmentsCache.value[key]) {
        if (offer?.Offers?.OfferInfo) {
            const oi = Array.isArray(offer.Offers.OfferInfo) ? offer.Offers.OfferInfo : [offer.Offers.OfferInfo]
            allSegmentsCache.value[key] = oi.flatMap(o => o?.Segments?.OfferSegment || [])
        } else if (offer?.Segments?.OfferSegment) {
            const seg = Array.isArray(offer.Segments.OfferSegment) ? offer.Segments.OfferSegment : [offer.Segments.OfferSegment]
            allSegmentsCache.value[key] = seg
        } else {
            allSegmentsCache.value[key] = []
        }
    }
    return allSegmentsCache.value[key]
}

const moreFlightsCache = ref<Record<string, any[][]>>({})
function moreFlights(offer: any, _index: number) {
    const key = offer?.OfferCode ?? _index
    if (!moreFlightsCache.value[key]) {
        const tripsCount = Math.max(parseInt(sessionStorage.getItem('trips') || '1', 10), 1)

        if (offer?.Offers?.OfferInfo) {
            const data = Array.isArray(offer.Offers.OfferInfo) ? offer.Offers.OfferInfo : [offer.Offers.OfferInfo]
            const result: any[][] = []
            const tripCountStr = String(tripsCount)

            for (let i = 1; i <= tripsCount; i++) {
                const iStr = String(i)
                const hasRphOnOffer = data.some(o => o.Rph === tripCountStr)
                const current = hasRphOnOffer
                    ? data.filter(o => o.Rph === iStr).flatMap(o => o.Segments?.OfferSegment || [])
                    : data.flatMap(o => o.Segments?.OfferSegment || []).filter(s => s.Rph === iStr)
                result.push(current)
            }
            moreFlightsCache.value[key] = result
        } else if (offer?.Segments?.OfferSegment) {
            const segs = Array.isArray(offer.Segments.OfferSegment) ? offer.Segments.OfferSegment : [offer.Segments.OfferSegment]
            moreFlightsCache.value[key] = [segs]
        } else {
            moreFlightsCache.value[key] = [[]]
        }
    }
    return moreFlightsCache.value[key]
}

function getTotalStops(offer: any, idx: number, findex: number) {
    return moreFlights(offer, idx)[findex].length - 1
}
function getStopIatas(offer: any, idx: number, findex: number) {
    return moreFlights(offer, idx)[findex].slice(0, -1).map((seg: any) => seg.Arrival.Iata)
}
function getTotalFlightTime(offer: any, idx: number, findex: number) {
    const total = moreFlights(offer, idx)[findex].reduce((sum: number, seg: any) => sum + parseInt(seg.FlightMinutes, 10), 0)
    const h = Math.floor(total / 60), m = total % 60
    return `${h} ${t('txtHour')} ${m} ${t('txtMin')}`
}

/** Prices (use props.offer fields) */
const adultPriceConverted = computed(() =>
    Math.ceil((parseFloat(props.offer?.AdultPrice ?? 0) || 0) * rateNum.value)
)
const childPriceConverted = computed(() =>
    Math.ceil((parseFloat(props.offer?.ChildPrice ?? 0) || 0) * rateNum.value)
)
const infantPriceConverted = computed(() =>
    Math.ceil((parseFloat(props.offer?.InfantPrice ?? 0) || 0) * rateNum.value)
)
const totalConverted = computed(() =>
    Math.ceil((parseFloat(props.offer?.TotalPrice ?? 0) || 0) * rateNum.value)
)

/** Collapses */
const detailsShown = ref<Record<string, boolean>>({})
function showDetail(key: string) { detailsShown.value[key] = !detailsShown.value[key] }

const detailsShowO = ref<Record<string, boolean>>({})
async function fetchOptions(offerCode: string, searchGuid: string) {
    if (!offerCode || !searchGuid) return
    const res = await fetch(`https://api.airkacc.mn/api/prebooking/mn/?offerCode=${offerCode}&searchGuid=${searchGuid}`)
    if (res.ok) {
        const data = await res.json()
        optionStore.optionInfos = data
        sessionStorage.setItem('PreBooking', JSON.stringify(data))
    }
}
function showDetailO(key: string, code: string, guid: string) {
    fetchOptions(code, guid)
    detailsShowO.value[key] = !detailsShowO.value[key]
}
</script>

<style scoped>
.vertical-divider {
    border-left: 1px dashed #ccc;
    width: 100%;
    margin: 0;
}

@media (max-width:768px) {
    .vertical-divider {
        display: none !important;
    }
}
</style>

<template>
    <div class="flight-checker">
        <!-- Hero Section -->
        <div class="hero-section">
            <div class="overlay">
                <div class="hero-content">
                    <h1 class="hero-title text-white">{{ t('txtFlightInfo') }}</h1>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-container">
            <!-- Search Card -->
            <div class="search-card">
                <div class="tab-group">
                    <button :class="{ 'active-tab': activeTab === 'flight' }" @click="activeTab = 'flight'"
                        class="tab-button">
                        <i class="fas fa-plane tab-icon"></i>
                        {{ t('txtStatusTab1') }}
                    </button>
                    <button :class="{ 'active-tab': activeTab === 'route' }" @click="activeTab = 'route'"
                        class="tab-button">
                        <i class="fas fa-route tab-icon"></i>
                        {{ t('txtStatusTab2') }}
                    </button>
                </div>
                <div v-if="activeTab === 'flight'">
                    <div class="search-form">
                        <div class="input-group">
                            <label for="flightNumber" class="input-label">
                                <i class="fas fa-ticket-alt input-icon"></i>
                                {{ t('txtStatusNumber') }}
                            </label>
                            <input id="flightNumber" v-model="flightNumber" type="text" placeholder="KE657"
                                class="text-input">
                        </div>

                        <div class="input-group h-100">
                            <label for="departureDate" class="input-label">
                                <i class="far fa-calendar-alt input-icon"></i>
                                {{ t('txtStatusDate') }}
                            </label>
                            <CustomFlatpicker id="departureDate" v-model="departureDate"
                                v-bind:placeholder="t('txtStatusCheckDate')" :options="{ dateFormat: 'Y-m-d' }"
                                class="w-100" />
                        </div>

                        <button @click="fetchOrderInfo" class="search-button">
                            <i class="fas fa-search button-icon"></i>
                            {{ t('txtStatusCheck') }}
                        </button>
                    </div>
                </div>
                <div v-if="activeTab === 'route'" class="search-form">
                    <div class="input-group">
                        <label class="input-label">
                            <i class="fas fa-plane-departure input-icon"></i>
                            {{ t('txtStatusDepAirport') }}
                        </label>
                        <div v-if="destinationOptions.length > 0">
                            <AirportSelector v-model="selectedDestination" class="w-100" />
                        </div>
                        <div v-else class="text-muted small">{{ t('txtWaiting') }}</div>
                        <!-- <input v-model="departureAirport" type="text" placeholder="PEK" class="text-input"> -->
                    </div>

                    <div class="input-group">
                        <label class="input-label">
                            <i class="fas fa-plane-arrival input-icon"></i>
                            {{ t('txtStatusArrAirport') }}
                        </label>
                        <div v-if="destinationOptions.length > 0">
                            <AirportSelector v-model="selectedDestination2" class="w-100" />
                        </div>
                        <div v-else class="text-muted small">{{ t('txtWaiting') }}</div>
                        <!-- <input v-model="arrivalAirport" type="text" placeholder="HET" class="text-input"> -->
                    </div>

                    <div class="input-group h-100">
                        <label for="departureDate" class="input-label">
                            <i class="far fa-calendar-alt input-icon"></i>
                            {{ t('txtStatusDate') }}
                        </label>
                        <CustomFlatpicker id="departureDate" v-model="departureDate" placeholder="Өдрөө сонгоно уу"
                            :options="{ dateFormat: 'Y-m-d' }" class="w-100" />
                    </div>


                    <button @click="fetchRouteFlights" class="search-button">
                        <i class="fas fa-search button-icon"></i>
                        {{ t('txtStatusCheck') }}
                    </button>
                </div>
            </div>

            <!-- Loading/Error States -->
            <div v-if="loading" class="status-card loading">
                <i class="fas fa-spinner fa-spin status-icon"></i>
                <p class="status-text">{{ t('txtWaiting') }}</p>
            </div>

            <div v-else-if="error" class="status-card error">
                <i class="fas fa-exclamation-circle status-icon"></i>
                <p class="status-text">{{ error }}</p>
            </div>

            <div v-else-if="!flightInfos" class="status-card info">
                <i class="fas fa-info-circle status-icon"></i>
                <p class="status-text">{{ t('txtStatusSearchInfo') }}</p>
            </div>

            <!-- Flight Details -->
            <div v-else class="flight-details-card">
                <!-- Flight Header -->
                <div v-for="(flight, index) in flightInfos" :key="index" class="mb-5">
                    <div class="flight-header">
                        <div>
                            <h2 class="flight-title">
                                <i class="fas fa-plane-departure header-icon"></i>
                                {{ flight.FlightNo }} - {{ flight.FlightCompany }}
                            </h2>
                            <p class="flight-subtitle">
                                {{ flight.FlightDepAirport }} ({{ flight.FlightDepcode }})
                                <i class="fas fa-arrow-right mx-2"></i>
                                {{ flight.FlightArrAirport }} ({{ flight.FlightArrcode }})
                            </p>
                        </div>
                        <div class="aircraft-info">
                            <span class="aircraft-type">{{ flight.ftype }} ({{ flight.generic }})</span>
                            <span class="flight-status" :class="flightStatusClass(flight)">
                                {{ flightStatusText(flight) }}
                            </span>
                        </div>
                    </div>

                    <div class="divider"></div>



                    <div class="flight-summary">
                        <div class="route">
                            <div class="airport">
                                <div class="d-flex justify-content-center align-items-center gap-2 ">
                                    <i class="fas fa-plane timeline-icon departure"></i>
                                    <h3 class="city">{{ flight.FlightDep }}</h3>
                                </div>
                                <strong>Scheduled:</strong> {{ formatTime(flight.FlightDeptimePlanDate)
                                }}
                                <p class="terminal">Terminal: {{ flight.FlightHTerminal }}</p>
                                <!-- <p class="time">{{ formatTime(flight.FlightDeptimePlanDate) }}</p> -->
                                <p v-if="flight.FlightDeptimeDate" class="actual-time">
                                    Actual: {{ formatTime(flight.FlightDeptimeDate) }}
                                    <span v-if="flight.FlightOutgateTime">(Gate out: {{
                                        formatTime(flight.FlightOutgateTime) }})</span>
                                </p>
                            </div>

                            <div class="flight-info">
                                <div class="duration">
                                    <i class="fas fa-clock"></i>
                                    {{ Math.floor(flight.FlightDuration / 60) }}h {{ flight.FlightDuration % 60
                                    }}m
                                </div>
                                <div class="flight-path">
                                    <div class="path-line"></div>
                                    <i class="fas fa-plane path-plane"></i>
                                </div>
                                <div class="distance">
                                    <i class="fas fa-map-marked-alt"></i>
                                    {{ flight.distance }} km
                                </div>
                            </div>

                            <div class="airport arrival">
                                <div class="d-flex justify-content-center align-items-center gap-2">
                                    <i class="fas fa-plane-arrival timeline-icon arrival"></i>
                                    <h3 class="city">{{ flight.FlightArr }}</h3>
                                </div>
                                <!-- <div class="timeline-time"> -->
                                <strong>Scheduled:</strong> {{ formatTime(flight.FlightArrtimePlanDate) }}
                                <!-- </div> -->

                                <p class="terminal">Terminal: {{ flight.FlightTerminal }}</p>
                                <!-- <p class="time">{{ formatTime(flight.FlightArrtimePlanDate) }}</p> -->
                                <p v-if="flight.FlightArrtimeDate" class="actual-time">
                                    Actual: {{ formatTime(flight.FlightArrtimeDate) }}
                                </p>
                                <p v-else class="estimated-time" v-if="flight.FlightArrtimeReadyDate">
                                    Estimated: {{ formatTime(flight.FlightArrtimeReadyDate) }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="divider"></div>

                    <!-- Flight Details Grid -->
                    <div class="details-grid">
                        <div class="detail-item">
                            <span class="detail-label">
                                <i class="fas fa-door-open detail-icon"></i>
                                Check-in: {{ flight.CheckinTable }}
                            </span>
                            <span class="detail-value">
                                CheckDoor: {{ flight.CheckInTable }}
                                <span v-if="flight.CheckDoor">({{ flight.CheckDoor }})</span>
                                <br>
                                <small>Closes at {{ formatTime(flight.LastCheckinTime) }}</small>
                            </span>
                        </div>

                        <div class="detail-item">
                            <span class="detail-label">
                                <i class="fas fa-door-closed detail-icon"></i>
                                Boarding:
                            </span>
                            <span class="detail-value">
                                Gate {{ flight.BoardGate }}
                                <span v-if="flight.bridge">(Bridge {{ flight.bridge }})</span>
                            </span>
                        </div>

                        <div class="detail-item">
                            <span class="detail-label">
                                <i class="fas fa-suitcase detail-icon"></i>
                                Baggage:
                            </span>
                            <span class="detail-value">
                                Claim {{ flight.BaggageID }}
                                <span v-if="flight.arr_bridge">(Bridge {{ flight.arr_bridge }})</span>
                            </span>
                        </div>

                        <div class="detail-item">
                            <span class="detail-label">
                                <i class="fas fa-percentage detail-icon"></i>
                                On-time:
                            </span>
                            <span class="detail-value">
                                {{ flight.OntimeRate }} (Departure)
                                <br>
                                {{ flight.ArrOntimeRate }} (Arrival)
                            </span>
                        </div>
                    </div>

                    <!-- Weather Section -->
                    <div class="weather-section">
                        <div class="weather-card departure">
                            <h3 class="weather-title">
                                <i class="fas fa-cloud-sun weather-icon"></i>
                                Departure Weather
                            </h3>
                            <div class="weather-details">
                                <div v-for="(item, index) in getDepartureWeather(flight)" :key="index"
                                    class="weather-item">
                                    <span class="weather-label">{{ weatherLabels[index] }}:</span>
                                    <span class="weather-value">{{ item }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="weather-card arrival">
                            <h3 class="weather-title">
                                <i class="fas fa-cloud-rain weather-icon"></i>
                                Arrival Weather
                            </h3>
                            <div class="weather-details">
                                <div v-for="(item, index) in getArrivalWeather(flight)" :key="index"
                                    class="weather-item">
                                    <span class="weather-label">{{ weatherLabels[index] }}:</span>
                                    <span class="weather-value">{{ item }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="weather-section">
                        <div class="map-coordinates">
                            <!-- Departure Airport -->
                            <div class="map-section">
                                <div class="map-label">
                                    <i class="fas fa-map-marker-alt map-icon departure"></i>
                                    <span class="map-title">{{ t('txtStatusDepAirport') }}</span>
                                </div>
                                <a :href="`https://www.google.com/maps?q=${flight.DepAirportLat},${flight.DepAirportLon}`"
                                    target="_blank" class="map-link">
                                    {{ flight.DepAirportLat }}, {{ flight.DepAirportLon }}
                                </a>
                            </div>

                            <!-- Departure Terminal -->
                            <div class="map-section">
                                <div class="map-label">
                                    <i class="fas fa-door-open map-icon departure"></i>
                                    <span class="map-title">{{ t('txtStatusDepTerAirport') }}</span>
                                </div>
                                <a :href="`https://www.google.com/maps?q=${flight.DepTerminalLat},${flight.DepTerminalLon}`"
                                    target="_blank" class="map-link">
                                    {{ flight.DepTerminalLat }}, {{ flight.DepTerminalLon }}
                                </a>
                            </div>


                        </div>

                        <div class="map-coordinates">
                            <!-- Arrival Airport -->
                            <div class="map-section">
                                <div class="map-label">
                                    <i class="fas fa-map-marker-alt map-icon arrival"></i>
                                    <span class="map-title">{{ t('txtStatusArrAirport') }}</span>
                                </div>
                                <a :href="`https://www.google.com/maps?q=${flight.ArrAirportLat},${flight.ArrAirportLon}`"
                                    target="_blank" class="map-link">
                                    {{ flight.ArrAirportLat }}, {{ flight.ArrAirportLon }}
                                </a>
                            </div>

                            <!-- Arrival Terminal -->
                            <div class="map-section">
                                <div class="map-label">
                                    <i class="fas fa-door-closed map-icon arrival"></i>
                                    <span class="map-title">{{ t('txtStatusArrTerAirport') }}</span>
                                </div>
                                <a :href="`https://www.google.com/maps?q=${flight.ArrTerminalLat},${flight.ArrTerminalLon}`"
                                    target="_blank" class="map-link">
                                    {{ flight.ArrTerminalLat }}, {{ flight.ArrTerminalLon }}
                                </a>
                            </div>
                        </div>
                    </div>


                    <!-- Additional Information -->
                    <div class="additional-info">
                        <div class="info-item">
                            <i class="fas fa-phone-alt info-icon"></i>
                            Airline Contact: {{ flight.airlinetel }}
                        </div>
                        <div class="info-item">
                            <i class="fas fa-utensils info-icon"></i>
                            Meal Service: {{ flight.Food || 'Not specified' }}
                        </div>
                        <div class="info-item">
                            <i class="fas fa-info-circle info-icon"></i>
                            Flight Status: {{ flight.FlightState }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAirportStore } from '@/stores/airportStore';
import { useI18n } from 'vue-i18n'

import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import AirportSelector from '@/components/AirportSelector.vue'

const { t, locale } = useI18n()

const airportStore = useAirportStore();

interface Destination {
    airportCode: string;
    airportName: string;
}
const selectedDestination = ref<Destination | null>(null);
const selectedDestination2 = ref<Destination | null>(null);


const destinationOptions = computed(() => airportStore.destinationOptions || []);
const destinationOptionsRound = computed(() => airportStore.destinationOptions || []);

const activeTab = ref('flight')
const flightNumber = ref('')
const selectedDate = ref(new Date().toISOString().split('T')[0])
const flightInfos = ref([])
const loading = ref(false)
const error = ref(null)

const weatherLabels = ['Тэнгэрийн байдал', 'Алсын хараа', 'Салхи', 'Салхины чиглэл', 'Температур (°C)']


const today = new Date();

const departureDate = ref<string | undefined>(
    formatDate(today)
);

function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 0-с эхэлдэг учир 1 нэмнэ
    const year = date.getFullYear();
    // return `${day}.${month}.${year}`;
    return `${year}.${month}.${day}`;
}


function getDepartureWeather(info) {
    return info.DepWeather ? info.DepWeather.split('|') : []
}

function getArrivalWeather(info) {
    return info.ArrWeather ? info.ArrWeather.split('|') : []
}

function flightStatusText(info) {
    if (!info) return ''
    switch (info.FlightState) {
        case 'departure': return 'Departed'
        default: return info.FlightState
    }
}

function flightStatusClass(info) {
    if (!info) return ''
    switch (info.FlightState) {
        case 'departure': return 'status-departed'
        default: return 'status-scheduled'
    }
}

const formatTime = (datetime) => {
    if (!datetime) return '-'
    const date = new Date(datetime)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

async function fetchOrderInfo() {
    if (!flightNumber.value) {
        error.value = 'Нислэгийн дугаар оруулна уу / Please enter flight number'
        return
    }

    loading.value = true
    error.value = null
    flightInfos.value = []

    try {
        const response = await fetch(
            `https://invoice.kacc.mn/api/searchFlight/?date=${departureDate.value}&fnum=${flightNumber.value}`
        )

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

        const data = await response.json()
        console.log(data)

        if (data.statusCode === "200") {
            flightInfos.value = Array.isArray(data.dtl) ? data.dtl : [data.dtl]
        } else {
            error.value = 'Нислэгийн мэдээлэл олдсонгүй / Flight not found'
        }
    } catch (err) {
        console.error('Error:', err)
        error.value = 'Алдаа гарлаа. Та дахин оролдоно уу. / Error occurred. Please try again.'
    } finally {
        loading.value = false
    }
}


const departureAirport = ref('')
const arrivalAirport = ref('')

const fetchRouteFlights = async () => {
    if (!selectedDestination.value || !selectedDestination2.value) {
        error.value = 'Буцах болон явах буудлыг оруулна уу / Please enter both airports'
        return
    }

    loading.value = true
    error.value = null
    flightInfos.value = []

    try {
        const response = await fetch(
            `https://invoice.kacc.mn/api/searchFlight/?date=${departureDate.value}&dep=${selectedDestination.value.airportCode}&arr=${selectedDestination2.value.airportCode}`
        )

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

        const data = await response.json()
        console.log(data)

        if (data.statusCode === "200" && data.dtl.length > 0) {
            flightInfos.value = data.dtl
            // Хэрэв хүсвэл data.dtl бүх нислэгийг list хэлбэрээр харуулж болно
        } else {
            error.value = 'Чиглэлийн нислэг олдсонгүй / No flights found for this route'
        }
    } catch (err) {
        console.error('Error:', err)
        error.value = 'Алдаа гарлаа. Та дахин оролдоно уу / Error occurred. Please try again.'
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
/* Base Styles */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

:root {
    --primary-light: #3b82f6;
    --secondary: #f59e0b;
    --gray-dark: #64748b;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.map-coordinates {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 25px;
    padding: 20px;
    background-color: #f8fafc;
    border-radius: 8px;
    border-left: 4px solid #2563eb;
}

.map-section {
    display: flex;
    gap: 6px;
}

.map-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 600;
    color: #1e293b;
}

.map-title {
    font-weight: 500;
}

.map-icon {
    font-size: 16px;
}

.map-icon.departure {
    color: #ef4444;
}

.map-icon.arrival {
    color: #10b981;
}

.map-link {
    font-size: 14px;
    color: #2563eb;
    text-decoration: underline;
    word-break: break-word;
}

.map-link:hover {
    color: #1d4ed8;
}


body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    color: #1e293b;
    background-color: #f5f7fa;
}

/* Utility Classes */
.mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

/* Hero Section */
.hero-section {
    height: 300px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    position: relative;
}

.flight-checker {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content {
    text-align: center;
    color: white;
    padding: 0 20px;
    max-width: 800px;
}

.hero-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Main Container */
.main-container {
    flex: 1;
    width: 100%;
    max-width: 1200px;
    margin: -100px auto 50px;
    padding: 0 20px;
    z-index: 10;
}

/* Search Card */
.search-card {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    padding: 30px;
    margin-bottom: 30px;
}

.tab-group {
    display: flex;
    margin-bottom: 25px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #e2e8f0;
}

.tab-button {
    flex: 1;
    padding: 12px 20px;
    border: none;
    background-color: transparent;
    color: #1e293b;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.tab-button:hover {
    background-color: rgba(255, 255, 255, 0.5);
}

.tab-button.active-tab {
    background-color: #2563eb;
    color: white;
}

.tab-icon {
    font-size: 14px;
}

.search-form {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 15px;
}

.input-group {
    display: flex;
    flex-direction: column;
}

.input-label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 6px;
}

.input-icon {
    font-size: 14px;
    color: #94a3b8;
}

.text-input,
.date-input {
    padding: 12px 15px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.3s;
    flex: 1;
}

.text-input:focus,
.date-input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.search-button {
    padding: 12px 25px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s;
    align-self: flex-end;
    height: 48px;
}

.search-button:hover {
    background-color: #1d4ed8;
    transform: translateY(-1px);
}

.button-icon {
    font-size: 14px;
}

/* Status Cards */
.status-card {
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.status-icon {
    font-size: 40px;
    margin-bottom: 10px;
}

.status-text {
    font-size: 18px;
    font-weight: 500;
}

.loading {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
}

.error {
    background-color: rgba(239, 68, 68, 0.1);
    color: #ef4444;
}

.info {
    background-color: rgba(100, 116, 139, 0.1);
    color: #1e293b;
}

/* Flight Details Card */
.flight-details-card {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    padding: 30px;
    margin-bottom: 30px;
}

.flight-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;
}

.flight-title {
    font-size: 24px;
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 10px;
}

.flight-subtitle {
    font-size: 16px;
    color: #64748b;
    margin-top: 5px;
}

.header-icon {
    color: #2563eb;
}

.aircraft-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
}

.aircraft-type {
    font-size: 14px;
    color: #64748b;
    background-color: #e2e8f0;
    padding: 4px 8px;
    border-radius: 4px;
}

.flight-status {
    font-size: 14px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
}

.status-scheduled {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.status-departed {
    background-color: rgba(239, 68, 68, 0.1);
    color: #ef4444;
}

.divider {
    height: 1px;
    background-color: #e2e8f0;
    margin: 25px 0;
}

/* Flight Timeline */
.flight-timeline {
    position: relative;
    padding: 20px 0;
}

.timeline-item {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.timeline-time {
    width: 150px;
    font-size: 14px;
    color: #64748b;
}

.timeline-content {
    flex: 1;
    display: flex;
    gap: 15px;
}

.timeline-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.timeline-icon.departure {
    background-color: rgba(239, 68, 68, 0.1);
    color: #ef4444;
}

.timeline-icon.arrival {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.timeline-details {
    flex: 1;
}

.timeline-details h3 {
    font-size: 18px;
    margin-bottom: 5px;
}

.terminal,
.actual-time,
.estimated-time {
    font-size: 14px;
    color: #64748b;
}

.actual-time {
    color: #ef4444;
}

.estimated-time {
    color: #f59e0b;
}

.timeline-connector {
    position: relative;
    padding-left: 170px;
    margin-bottom: 30px;
}

.timeline-connector::before {
    content: '';
    position: absolute;
    left: 190px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #e2e8f0;
}

.flight-duration {
    background-color: #e2e8f0;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

/* Details Grid */
.details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 25px;
}

.detail-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px;
    background-color: #f8fafc;
    border-radius: 8px;
    border-left: 3px solid #2563eb;
}

.detail-label {
    font-size: 14px;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 8px;
}

.detail-icon {
    font-size: 14px;
    color: #2563eb;
}

.detail-value {
    font-size: 16px;
    font-weight: 500;
    color: #1e293b;
}

.detail-value small {
    font-size: 12px;
    color: #94a3b8;
}

/* Weather Section */
.weather-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 25px;
}

.weather-card {
    padding: 20px;
    border-radius: 8px;
    background-color: #f8fafc;
}

.weather-card.departure {
    border-left: 3px solid #ef4444;
}

.weather-card.arrival {
    border-left: 3px solid #10b981;
}

.weather-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.weather-icon {
    font-size: 18px;
}

.weather-card.departure .weather-icon {
    color: #ef4444;
}

.weather-card.arrival .weather-icon {
    color: #10b981;
}

.weather-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.weather-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.weather-label {
    font-size: 12px;
    color: #64748b;
}

.weather-value {
    font-size: 14px;
    font-weight: 500;
}

/* Additional Info */
.additional-info {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px;
    background-color: #f8fafc;
    border-radius: 8px;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #64748b;
}

.info-icon {
    color: #2563eb;
}

/* Responsive Styles */
@media (max-width: 992px) {
    .search-form {
        grid-template-columns: 1fr;
    }

    .flight-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .aircraft-info {
        align-items: flex-start;
    }

    .timeline-item {
        flex-direction: column;
        gap: 10px;
    }

    .timeline-time {
        width: 100%;
    }

    .timeline-connector {
        padding-left: 20px;
    }

    .timeline-connector::before {
        left: 40px;
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }

    .tab-group {
        flex-direction: column;
    }

    .weather-details {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 576px) {
    .hero-section {
        height: 250px;
    }

    .search-card,
    .flight-details-card {
        padding: 20px;
    }

    .details-grid {
        grid-template-columns: 1fr;
    }

    .weather-section {
        grid-template-columns: 1fr;
    }
}

/* Flight Summary */
.flight-summary {
    margin-bottom: 20px;
}

.route {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.airport {
    text-align: center;
    flex: 1;
}

.city {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
}

.time {
    font-size: 18px;
    font-weight: 500;
    color: #1e293b;
}

.actual-time {
    font-size: 14px;
    color: #94a3b8;
    margin-top: 3px;
}



.flight-info {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.duration,
.distance {
    font-size: 14px;
    color: #94a3b8;
    display: flex;
    align-items: center;
    gap: 5px;
}

.flight-path {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #e2e8f0;
    margin: 15px 0;
}

.path-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2563eb;
}

.path-plane {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #2563eb;
    background-color: white;
    padding: 5px;
    border-radius: 50%;
    font-size: 14px;
}
</style>
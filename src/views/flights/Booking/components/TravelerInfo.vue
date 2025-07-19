<template>
    <!-- <b-col xl="8"> -->
    <div>
        <div class="passenger-container">
            <h2 class="title">{{ t('txtTravelerInfo') }}</h2>
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
                            <!-- <th>Ticked number</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(traveler, index) in travelers" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ traveler.Document || '-' }}</td>
                            <td>{{ traveler.Surname || '-' }}</td>
                            <td>{{ traveler.Name || '-' }}</td>
                            <td>{{ formatDateFinish(traveler.BirthDay) || '-' }}</td>
                            <td>{{ traveler.GenderType || '-' }}</td>
                            <!-- <td>{{ traveler. || '-' }}</td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- </b-col> -->
</template>

<script setup lang="ts">
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { BIconEyeFill } from 'bootstrap-icons-vue'
import element9 from '@/assets/images/element/09.svg'
import { ref, computed } from 'vue'
import { useOptionStore } from '@/stores/optionStore'
import { useFlightStore } from '@/stores/flight';
import flightLogo from '@/assets/images/element/09.svg'

import OptionDetailTab from '@/views/flights/Details/components/OptionDetailTab.vue'
import { ChevronDown, Briefcase, Luggage, User } from 'lucide-vue-next';
import { isArray } from 'util'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const flightStore = useFlightStore();
const fallbackLogo = flightLogo
const optionStore = useOptionStore();

const isHovered = ref<{ [key: string]: boolean }>({});

function onMouseOver(index: string) {
    isHovered.value[index] = true;
}

function onMouseLeave(index: string) {
    isHovered.value[index] = false;
}

const formatDateFinish = (date: string): string => {
    const [day, month, year] = date.split('.');

    const monthNames: { [key: string]: string } = {
        '01': 'JAN',
        '02': 'FEB',
        '03': 'MAR',
        '04': 'APR',
        '05': 'MAY',
        '06': 'JUN',
        '07': 'JUL',
        '08': 'AUG',
        '09': 'SEP',
        '10': 'OCT',
        '11': 'NOV',
        '12': 'DEC',
    };

    const paddedMonth = month.padStart(2, '0'); // '3' → '03'
    const monthStr = monthNames[paddedMonth] || month;

    return `${day} ${monthStr} ${year}`;
};

const storedData = sessionStorage.getItem("BookingInfo") ? JSON.parse(sessionStorage.getItem("BookingInfo") || "") : null;

const infos = computed(() => {
    // console.log(storedData?.result?.Body?.AeroBookResponse?.AeroBookResult)
    if (optionStore.optionInfos?.result?.Body?.AeroBookResponse?.AeroBookResult) {
        return optionStore.optionInfos?.result?.Body?.AeroBookResponse?.AeroBookResult || [];
    } else {
        return storedData?.result?.Body?.AeroBookResponse?.AeroBookResult || [];
    }

});

const travelers = computed(() => {
    const paxData = storedData?.result?.Body?.AeroBookResponse?.AeroBookResult?.PaxList?.PaxData;
    console.log(typeof paxData)
    if (typeof paxData === 'object' && paxData !== null && !Array.isArray(paxData)) {
        return paxData.toList || [paxData];
    } else {
        return paxData;
    }
});

const monthNameToNumber = (month: string) => {
    const months: Record<string, string> = {
        jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
        jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12"
    };
    return months[month.toLowerCase()] || month; // Хэрэв сарын нэр байхгүй бол өөрчлөхгүй
};

const formatBirthDay = (birthDay: { month: any; day: any; year: any; }) => {
    const monthNumber = monthNameToNumber(birthDay.month); // Сарны нэрийг тоо руу хөрвүүлнэ
    return `${birthDay.day}.${monthNumber}.${birthDay.year}`;
};

const StoreAirCompany = computed(() => flightStore.AirCompany);
const StoreAirPorts = computed(() => flightStore.AirPorts);


const getOptionPrice = () => {
    return optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult?.TariffInfo || [];
};


const getFlightData = () => {
    return infos.value || { Offers: { OfferInfo: [] } };
};

const getAllSegments = (): any[] => {
    // const ai = StoreAirCompany.value?.find((airline: any) => airline.Code === "KE").Value
    // console.log(ai)
    const data = getFlightData();
    console.log(data)
    const offerInfo = data.Offers.OfferInfo;

    // OfferInfo массив биш бол шууд OfferSegment-ийг буцаах
    if (!Array.isArray(offerInfo)) {
        let segment = offerInfo?.Segments?.OfferSegment;
        if (!Array.isArray(segment)) {
            segment = segment ? [segment] : []
            console.log(segment)

            return segment;
        }
        console.log(StoreAirCompany.value?.find((airline: any) => airline.Code ===
            segment[0].MarketingAirline).Value)
        return segment;
    }

    // OfferInfo массив бол flatMap ашиглан сегментүүдийг цуглуулах
    return offerInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments?.OfferSegment || []);
};

function formatDate(input: string): string {
    const [day, month, yearAndTime] = input.split(".");
    const [year, time] = yearAndTime.split(" ");
    return `${year}-${month}-${day}`;
}

function convertTimeText(input: string): string {
    const [hours, minutes, seconds] = input.split(":").map(Number);
    const hourText = hours ? `${hours} цаг` : "";
    const minuteText = minutes ? `${minutes} мин` : " ";
    return [hourText, minuteText].filter(Boolean).join(" ");
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


// Нислэгийн нэрийг олох функц
const getAirlineName = (code: any) => {
    if (!Array.isArray(StoreAirCompany.value)) {
        console.error('StoreAirCompany is not an array');
        return "No Air Company";
    }

    if (!code) {
        return "No Air Company";
    }

    const foundAirline = StoreAirCompany.value.find((airline) => airline.Code === code);
    return foundAirline ? foundAirline.Value : "No Air Company";
};


const getAllSegmentsDates = () => {
    const data = getFlightData();
    const offerInfo = data.Offers.OfferInfo;

    // OfferInfo массив биш бол шууд OfferSegment-ийг буцаах
    if (!Array.isArray(offerInfo)) {
        return offerInfo?.Segments?.OfferSegment.sort((a: { Departure: { Date: string | number | Date } }, b: { Departure: { Date: string | number | Date } }) => {
            // Convert both dates to Date objects, ensuring they're valid.
            const departureA = new Date(a.Departure.Date);
            const departureB = new Date(b.Departure.Date);

            // Ensure the dates are valid before comparing them
            if (isNaN(departureA.getTime()) || isNaN(departureB.getTime())) {
                return 0; // or handle as needed if one of the dates is invalid
            }

            return departureA.getTime() - departureB.getTime(); // Subtracting as timestamps
        }) || [];
    }

    return offerInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment).sort((a: { Departure: { Date: string | number | Date } }, b: { Departure: { Date: string | number | Date } }) => {
        // Convert both dates to Date objects, ensuring they're valid.
        const departureA = new Date(a.Departure.Date);
        const departureB = new Date(b.Departure.Date);

        // Ensure the dates are valid before comparing them
        if (isNaN(departureA.getTime()) || isNaN(departureB.getTime())) {
            return 0; // or handle as needed if one of the dates is invalid
        }

        return departureA.getTime() - departureB.getTime(); // Subtracting as timestamps
    }) || [];
};

function timeDifference(start: string, end: string): string {
    // Огнооны форматыг ISO 8601 хэлбэрт хөрвүүлэх
    const startDateFormatted = start.split(' ')[0].split('.').reverse().join('-') + 'T' + start.split(' ')[1] + ':00';
    const endDateFormatted = end.split(' ')[0].split('.').reverse().join('-') + 'T' + end.split(' ')[1] + ':00';

    // start болон end утгуудыг Date объект руу хөрвүүлэх
    const startDate = new Date(startDateFormatted);
    const endDate = new Date(endDateFormatted);

    // Нийт минутын зөрүү
    const diffMinutes = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60));

    // Цаг болон минут болгон хуваах
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    return `${hours} цаг ${minutes} минут`;
}

const showModal = ref(false)
</script>

<style lang="css" scoped>
.passenger-container {
    margin: 20px;
    padding: 20px;
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
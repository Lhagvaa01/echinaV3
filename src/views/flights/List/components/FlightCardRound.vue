<template>
    <!-- <div>Нийт нислэгийн тоо: {{ filteredData.length > 0 ? filteredData.length : StoreflightInfos.length }}</div> -->
    <!-- <div v-if="(filteredData.length > 0 ? filteredData.length : StoreflightInfos.length) == 0"> -->
    <div v-if="(paginatedFlights.length) == 0">

        <div class="no-results-card">
            <div class="no-results-icon">
                <i class="fas fa-search"></i>
            </div>
            <p class="no-results-title">{{ t('txtNotFind') }}</p>
            <p class="no-results-subtitle">
                {{ t('txtNotFindText') }}
            </p>
        </div>
    </div>





    <div v-else>
        <!-- <div v-for="(offer, Mainindex) in paginatedFlights" :key="Mainindex" class="mb-4">
            {{ offer }}
        </div> -->
        <b-row class="mb-3 align-items-center">
            <b-col>
                {{ t('txtTotalFlight') }}: {{ filteredData.length }} {{ t('txtTotalFlightDes') }}
            </b-col>
            <b-col>
                <div class="dropdown w-100">
                    <button
                        class="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between"
                        type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="d-flex align-items-center">
                            <span class="fw-light text-primary">{{ selectedSortLabel }}</span>
                        </div>
                    </button>

                    <ul class="dropdown-menu w-100" aria-labelledby="sortDropdown">
                        <li><a class="dropdown-item" href="#" @click.prevent="setSortOrder('asc')">{{ t('txtPriceASC')
                        }}</a></li>
                        <li><a class="dropdown-item" href="#" @click.prevent="setSortOrder('desc')">{{ t('txtPriceDESC')
                        }}</a>
                        </li>
                    </ul>
                </div>
            </b-col>
            <!-- <b-col>
                <div class="dropdown w-100">
                    <button
                        class="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between"
                        type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="d-flex align-items-center">
                            <span class="fw-light text-primary">Хугацаагаар эрэмбэлэх</span>
                        </div>
                    </button>

                    <ul class="dropdown-menu w-100" aria-labelledby="sortDropdown">
                        <li><a class="dropdown-item" href="#">Богино хугацаа</a></li>
                        <li><a class="dropdown-item" href="#">Урт хугацаа</a></li>
                    </ul>
                </div>
            </b-col>
            <b-col>
                <div class="dropdown w-100">
                    <button
                        class="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between"
                        type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="d-flex align-items-center">
                            <span class="fw-light text-primary">Огноогоор эрэмбэлэх</span>
                        </div>
                    </button>

                    <ul class="dropdown-menu w-100" aria-labelledby="sortDropdown">
                        <li><a class="dropdown-item" href="#">Хамгийн эрт</a></li>
                        <li><a class="dropdown-item" href="#">Хамгийн орой</a></li>
                    </ul>
                </div>
            </b-col> -->
        </b-row>
        <div v-for="(offer, Mainindex) in paginatedFlights" :key="Mainindex" class="mb-4 ">
            <div>
                <div v-for="(segments, inx) in getAllSegments(offer).slice(0, 1)" :key="inx">
                    <b-card no-body class="border border-1 border-primary" :key="segments.FlightNum">

                        <div>
                            <!-- <p>{{ moreFlights(Mainindex).length }}</p> -->
                            <div v-for="(flight, findex) in moreFlights(offer, Mainindex)" :key="findex">
                                <!-- <span>{{ flight }}</span> -->
                                <div v-if="flight.length > 0">
                                    <b-row class="pe-1 pe-sm-3">
                                        <!-- Main (info) column -->
                                        <b-col cols="12" md="10" xl="9" xxl="10"
                                            class="d-flex flex-column pe-md-0 mb-3 mb-md-0 justify-content-between">
                                            <!-- Үндсэн контент -->
                                            <!-- <b-row> -->
                                            <div class="d-flex justify-content-end">
                                                <div class="w-100">
                                                    <div class="d-flex justify-content-between align-items-center px-3">
                                                        <h6 class="m-3 mb-0 fw-bold d-flex align-items-center"
                                                            style="font-size: smaller;">
                                                            <PlaneTakeoff color="#009dff" :size="32" class="me-3" />
                                                            {{ (show == 2 && moreFlights(offer, Mainindex).length - 1
                                                                ===
                                                                findex) ?
                                                                t('txtToFlight')
                                                                :
                                                                t('txtFromFlight') }}
                                                        </h6>
                                                        <h6 class="fw-bold mb-0" style="font-size: smaller;">{{
                                                            flight.length >
                                                                1 ?
                                                                t('txtTransit') :
                                                                t('txtDirect') }}</h6>
                                                    </div>
                                                    <b-card-header
                                                        class="d-flex justify-content-between align-items-center py-0 ps-4">

                                                        <div class="d-flex align-items-center mb-2 mb-sm-0 "
                                                            style="font-size: smaller;">
                                                            <img :src="flight[0]?.MarketingAirline
                                                                ? 'https://api.echina.mn/assets/d/' + flight[0]?.MarketingAirline + '.png'
                                                                : fallbackLogo" alt="Airline logo" class="me-2"
                                                                style="width: 30px; height: auto;" />
                                                            <h6 class="fw-normal mb-0" style="font-size: smaller;">
                                                                {{Array.isArray(StoreAirCompany) &&
                                                                    StoreAirCompany.length > 0
                                                                    ? StoreAirCompany.find((airline: any) =>
                                                                        airline.Code === flight[0]?.MarketingAirline)?.Value ||
                                                                    'Airline Not Found' : 'No Air Companies Available'
                                                                }}
                                                                ({{ flight[0]?.FlightNum || 'SA-1254' }})
                                                            </h6>

                                                            <p v-if="flight.length > 1" class="ms-2 text-warning"
                                                                @mouseover="onMouseOver(getFlightKey(Mainindex))"
                                                                @mouseleave="onMouseLeave(getFlightKey(Mainindex))">
                                                                +{{ flight.length - 1 }} {{ t('txtTotalAirline') }}
                                                            </p>
                                                            <!-- Tooltip -->
                                                            <div v-if="isHovered[getFlightKey(Mainindex)]"
                                                                class="bg-white border rounded shadow position-absolute p-3 start-50 "
                                                                style="z-index: 1000; min-width: 260px;">
                                                                <div v-for="segment in flight" :key="segment.FlightNum"
                                                                    class="d-flex align-items-start mb-2">
                                                                    <img :src="segment.MarketingAirline
                                                                        ? 'https://api.echina.mn/assets/d/' + segment.MarketingAirline + '.png'
                                                                        : fallbackLogo" alt="Airline logo" class="me-2"
                                                                        style="width: 32px; height: auto; border-radius: 4px;" />
                                                                    <div class="d-flex gap-2">
                                                                        <div class="fw-semibold text-dark"
                                                                            style="font-size: 14px;">
                                                                            {{
                                                                                StoreAirCompany.find((airline: any) =>
                                                                                    airline.Code
                                                                                    ===
                                                                                    segment.MarketingAirline)
                                                                                    ?.Value || 'Unknown Airline'
                                                                            }}
                                                                            <span class="text-muted">({{
                                                                                segment.FlightNum
                                                                                ||
                                                                                'SA-1254'
                                                                            }})</span>
                                                                        </div>
                                                                        <div class="d-flex align-items-center mt-1">
                                                                            <Briefcase v-if="segment.Baggage"
                                                                                class="me-2" color="#5a2dd7"
                                                                                :size="16" />
                                                                            <Luggage v-if="segment.CabinBaggage"
                                                                                color="#5a2dd7" :size="16" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h5 class="mt-0  fw-light mb-0 pb-0 text-muted"
                                                                style="font-size: smaller;">Нийт: {{
                                                                    getTotalFlightTime(offer, Mainindex, findex)
                                                                }}
                                                            </h5>
                                                        </div>


                                                    </b-card-header>
                                                    <b-card-body class="p-4 pb-0">
                                                        <b-row
                                                            class="g-4 justify-content-between align-content-center align-items-center">
                                                            <b-col cols="3" sm="4" md="3" class="mt-0 text-start ">
                                                                <p class="mb-0" style="font-size: medium;">{{
                                                                    flight[0]?.Departure.Iata
                                                                    }}</p>
                                                                <p class="mb-0 text-truncate"
                                                                    style="font-size: smaller; max-width: 120px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
                                                                    :title="StoreAirPorts.find((AirPorts: any) => AirPorts.Iata === flight[0]?.Departure.Iata)?.City">
                                                                    {{StoreAirPorts.find((AirPorts: any) =>
                                                                        AirPorts.Iata === flight[0]?.Departure.Iata)?.City
                                                                    }}
                                                                </p>

                                                                <h4 class="fw-bold fs-5 mb-0"> {{
                                                                    flight[0]?.Departure.Date.split(" ")[1] }}
                                                                </h4>


                                                                <p class="mb-0" style="font-size: x-small;">
                                                                    {{
                                                                        formatDate(flight[0]?.Departure.Date) }}</p>
                                                                <p style="font-size: x-small;">
                                                                    <span v-if="flight[0]?.Departure.Terminal">Терминал:
                                                                    </span>
                                                                    {{ flight[0]?.Departure.Terminal || '' }}
                                                                </p>
                                                                <!-- <p class="mb-0" style="font-size: smaller;">
                                                                    {{StoreAirCompany.find((AirCompany: any) =>
                                                                        AirCompany.Code
                                                                        ===
                                                                        flight[0]?.Departure.Iata).City}}</p> -->


                                                            </b-col>

                                                            <b-col cols="5" sm="4" md="6" class=" text-center mt-3">
                                                                <!-- <h5 class="mt-0  fw-light mb-0 pb-0"
                                                                    style="font-size: smaller;">{{
                                                                        getTotalFlightTime(Mainindex, findex)
                                                                    }}
                                                                </h5> -->
                                                                <div class="position-relative my-4"
                                                                    style="height: 80px;">
                                                                    <!-- Шугам -->
                                                                    <hr class="position-absolute top-50 start-0 end-0 m-0"
                                                                        style="height: 1px; background-color: #ccc;" />

                                                                    <!-- Голын цэгүүд болон шошго -->
                                                                    <div v-for="(stop, index) in getStopIatas(offer, Mainindex, findex)"
                                                                        :key="index"
                                                                        class="position-absolute text-center "
                                                                        :style="getDotPositionStyle(index, getStopIatas(offer, Mainindex, findex).length)">
                                                                        <div
                                                                            style="font-size: small; font-weight: bold;">
                                                                            {{ stop }}
                                                                        </div>
                                                                        <div style="font-size: small; color: gray;">
                                                                            ({{StoreAirPorts.find((a) => a.Iata ===
                                                                                stop)?.City || ''}})
                                                                        </div>
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

                                                            <b-col cols="3" sm="4" md="3"
                                                                class="mt-0  text-start mt-0 ">
                                                                <p class="mb-0" style="font-size: medium;">{{
                                                                    flight[flight.length -
                                                                        1].Arrival.Iata }}</p>
                                                                <p class="mb-0" style="font-size: smaller;">
                                                                    {{StoreAirPorts.find((AirPorts: any) =>
                                                                        AirPorts.Iata
                                                                        ===
                                                                        flight[flight.length -
                                                                            1].Arrival.Iata).City}}</p>
                                                                <h4 class=" fs-5 mb-0">
                                                                    {{ flight[flight.length -
                                                                        1].Arrival.Date.split(" ")[1] }}
                                                                </h4>



                                                                <p class="mb-0" style="font-size: x-small;">
                                                                    {{
                                                                        formatDate(flight[flight.length -
                                                                            1].Arrival.Date) }}</p>


                                                                <p style="font-size: small;">
                                                                    <span v-if="flight[0]?.Arrival.Terminal">Терминал:
                                                                    </span>
                                                                    {{ flight[0]?.Arrival.Terminal || '' }}
                                                                </p>

                                                            </b-col>

                                                        </b-row>

                                                    </b-card-body>
                                                    <b-row v-for="(offseg, offsegIdx) in flight"
                                                        :key="'offseg-' + offsegIdx" class="align-items-start mx-2">
                                                        <!-- Зүүн талын блок -->
                                                        <b-col cols="3" sm="2" md="4"
                                                            v-if="offseg.SelfConnect === 'true'" class="d-flex pe-1">
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
                                                                    {{ getTotalStops(offer, Mainindex, findex) }} {{
                                                                        t('txtFlightStop') }}
                                                                    {{ t('txtSelfTBag') }}<br />
                                                                    (Self-transfer baggage)
                                                                </p>
                                                            </div>
                                                        </b-col>
                                                    </b-row>


                                                </div>

                                                <div>

                                                    <div class="vertical-divider h-100">
                                                    </div>
                                                </div>
                                                <!-- {{ moreFlights(Mainindex).length }} {{ findex + 1 }} -->
                                            </div>
                                            <div v-if="moreFlights(offer, Mainindex).length == findex + 1"
                                                class="d-flex justify-content-end ms-0 ps-0">
                                                <div class="d-flex ps-4 w-100 border-top border-primary justify-content-between border-2 bg-primary bg-opacity-10 "
                                                    style="height: 42px; border-bottom-left-radius: 1rem;">
                                                    <div class="d-none d-md-flex gap-4 gap-sm-0 ">
                                                        <div
                                                            class=" d-flex text-center border border-primary rounded m-2 px-3 justify-content-center small">
                                                            <span class="text-black"><svg stroke="currentColor"
                                                                    fill="currentColor" stroke-width="0"
                                                                    viewBox="0 0 320 512"
                                                                    class="text-black h-4 w-4 text-[#F8C5B3]"
                                                                    height="15px" width="15px"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z">
                                                                    </path>
                                                                </svg>{{ Number(route.query.adults) }}<span
                                                                    class="text-primary">: {{
                                                                        Math.ceil((paginatedFlights[Mainindex].AdultPrice *
                                                                            parseFloat(rate))).toLocaleString() }}{{ currency
                                                                    }}</span>
                                                            </span>
                                                        </div>
                                                        <div v-if="paginatedFlights[Mainindex].ChildPrice"
                                                            class=" d-flex text-center border border-primary rounded m-2 px-3 justify-content-center small">
                                                            <span class="text-black"><svg stroke="currentColor"
                                                                    fill="currentColor" stroke-width="0"
                                                                    viewBox="0 0 320 512"
                                                                    class="text-black h-4 w-4 text-[#F8C5B3]"
                                                                    height="15px" width="15px"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M256 64A64 64 0 1 0 128 64a64 64 0 1 0 128 0zM152.9 169.3c-23.7-8.4-44.5-24.3-58.8-45.8L74.6 94.2C64.8 79.5 45 75.6 30.2 85.4s-18.7 29.7-8.9 44.4L40.9 159c18.1 27.1 42.8 48.4 71.1 62.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V384h32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V221.6c29.1-14.2 54.4-36.2 72.7-64.2l18.2-27.9c9.6-14.8 5.4-34.6-9.4-44.3s-34.6-5.5-44.3 9.4L291 122.4c-21.8 33.4-58.9 53.6-98.8 53.6c-12.6 0-24.9-2-36.6-5.8c-.9-.3-1.8-.7-2.7-.9z">
                                                                    </path>
                                                                </svg>{{ Number(route.query.childs) }}<span
                                                                    class="text-primary">: {{
                                                                        Math.ceil((paginatedFlights[Mainindex].ChildPrice *
                                                                            parseFloat(rate))).toLocaleString() }}{{ currency
                                                                    }}</span>
                                                            </span>
                                                        </div>
                                                        <div v-if="paginatedFlights[Mainindex].InfantPrice"
                                                            class=" d-flex text-center border border-primary rounded m-2 px-3 justify-content-center small">
                                                            <span class="text-black"><svg stroke="currentColor"
                                                                    fill="currentColor" stroke-width="0"
                                                                    viewBox="0 0 320 512"
                                                                    class="text-black h-4 w-4 text-[#F8C5B3]"
                                                                    height="15px" width="15px"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z">
                                                                    </path>
                                                                </svg>{{ Number(route.query.infants) }}<span
                                                                    class="text-primary">: {{
                                                                        Math.ceil((paginatedFlights[Mainindex].InfantPrice *
                                                                            parseFloat(rate))).toLocaleString() }}{{ currency
                                                                    }}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="text-center py-2 me-3">
                                                        <span class="text-primary small">{{
                                                            t('txtAvailableSeat') }}: {{
                                                                segments.ResBookDesigQuantity
                                                            }}</span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div class="vertical-divider h-100">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- </b-row> -->


                                        </b-col>

                                        <!-- Баруун багана (үнэ, товч, дэлгэрэнгүй) -->
                                        <b-col cols="12" md="2" xl="3" xxl="2"
                                            class="d-flex flex-column px-0 justify-content-between bg-primary bg-opacity-10"
                                            :style="show == 1 ? 'border-bottom-right-radius: 1rem; border-top-right-radius: 1rem;' : moreFlights(offer, Mainindex).length === findex + 1
                                                ? 'border-bottom-right-radius: 1rem;'
                                                : 'border-top-right-radius: 1rem;'">
                                            <!-- Дээшээ: Icons -->

                                            <div class="d-none d-md-grid">
                                                <div v-if="moreFlights(offer, Mainindex).length > 0 &&
                                                    (
                                                        (findex == 0)
                                                    )"
                                                    class="d-flex rounded-top mt-2 mt-md-2 ms-md-2 gap-2 justify-content-start align-content-center ">
                                                    <!-- <div class="d-flex align-items-center mt-1">
                                                    <Briefcase v-if="segments.Baggage" class="me-2" color="#5a2dd7"
                                                        :size="16" />
                                                    <Luggage v-if="segments.CabinBaggage" color="#5a2dd7" :size="16" />
                                                </div> -->
                                                    <div v-if="segments.Baggage"
                                                        class="text-center p-0 border rounded-2  border-primary"
                                                        style="width: 34px;">
                                                        <i class="fas fa-suitcase-rolling text-primary"></i>
                                                        <!-- <span class="text-primary ms-1"></span> -->
                                                    </div>
                                                    <div v-if="segments.CabinBaggage"
                                                        class="text-center p-0 border rounded-2  border-primary"
                                                        style="width: 34px;">
                                                        <i class="fas fa-suitcase text-primary"></i>
                                                        <!-- <span class="text-primary ms-1"></span> -->
                                                    </div>
                                                </div>
                                                <div v-if="moreFlights(offer, Mainindex).length > 0 &&
                                                    (
                                                        (findex == 0)
                                                    )" class="d-flex gap-2 align-content-center mt-2 ms-2 ">
                                                    <div class="border border-primary rounded-2 px-1">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                            viewBox="0 0 320 512"
                                                            class="text-black h-4 w-4 text-[#F8C5B3]" height="15px"
                                                            width="15px" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z">
                                                            </path>
                                                        </svg>
                                                        {{ Number(route.query.adults) }}
                                                    </div>
                                                    <div v-if="Number(route.query.childs) > 0"
                                                        class="border border-primary rounded-2 px-1">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                            viewBox="0 0 320 512"
                                                            class="text-black h-4 w-4 text-[#F8C5B3]" height="15px"
                                                            width="15px" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M256 64A64 64 0 1 0 128 64a64 64 0 1 0 128 0zM152.9 169.3c-23.7-8.4-44.5-24.3-58.8-45.8L74.6 94.2C64.8 79.5 45 75.6 30.2 85.4s-18.7 29.7-8.9 44.4L40.9 159c18.1 27.1 42.8 48.4 71.1 62.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V384h32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V221.6c29.1-14.2 54.4-36.2 72.7-64.2l18.2-27.9c9.6-14.8 5.4-34.6-9.4-44.3s-34.6-5.5-44.3 9.4L291 122.4c-21.8 33.4-58.9 53.6-98.8 53.6c-12.6 0-24.9-2-36.6-5.8c-.9-.3-1.8-.7-2.7-.9z">
                                                            </path>
                                                        </svg>
                                                        {{ Number(route.query.childs) }}
                                                    </div>
                                                    <div v-if="Number(route.query.infants) > 0"
                                                        class="border border-primary rounded-2 px-1">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                            viewBox="0 0 320 512"
                                                            class="text-black h-4 w-4 text-[#F8C5B3]" height="15px"
                                                            width="15px" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z">
                                                            </path>
                                                        </svg>
                                                        {{ Number(route.query.infants) }}
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Гол: Үнэ, Сонгох -->
                                            <b-row v-if="moreFlights(offer, Mainindex).length == findex + 1"
                                                class="justify-content-end align-content-end h-100 mx-0 rounded-0 ">
                                                <b-col
                                                    class="d-flex d-md-block px-4 justify-content-between align-content-end align-items-end align-content-sm-center  text-md-end py-3">
                                                    <div>
                                                        <div class="d-md-none">
                                                            <div
                                                                class="d-flex rounded-top mt-2 mt-md-2 ms-md-2 gap-2 justify-content-start align-content-center ">

                                                                <div v-if="segments.Baggage"
                                                                    class="text-center p-0 border rounded-2  border-primary"
                                                                    style="width: 34px;">
                                                                    <i class="fas fa-suitcase-rolling text-primary"></i>
                                                                    <!-- <span class="text-primary ms-1"></span> -->
                                                                </div>
                                                                <div v-if="segments.CabinBaggage"
                                                                    class="text-center p-0 border rounded-2  border-primary"
                                                                    style="width: 34px;">
                                                                    <i class="fas fa-suitcase text-primary"></i>
                                                                    <!-- <span class="text-primary ms-1"></span> -->
                                                                </div>
                                                            </div>
                                                            <div class="d-flex gap-2 align-content-center mt-2 ">
                                                                <div class="border border-primary rounded-2 px-1">
                                                                    <svg stroke="currentColor" fill="currentColor"
                                                                        stroke-width="0" viewBox="0 0 320 512"
                                                                        class="text-black h-4 w-4 text-[#F8C5B3]"
                                                                        height="15px" width="15px"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z">
                                                                        </path>
                                                                    </svg>
                                                                    {{ Number(route.query.adults) }}
                                                                </div>
                                                                <div v-if="Number(route.query.childs) > 0"
                                                                    class="border border-primary rounded-2 px-1">
                                                                    <svg stroke="currentColor" fill="currentColor"
                                                                        stroke-width="0" viewBox="0 0 320 512"
                                                                        class="text-black h-4 w-4 text-[#F8C5B3]"
                                                                        height="15px" width="15px"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M256 64A64 64 0 1 0 128 64a64 64 0 1 0 128 0zM152.9 169.3c-23.7-8.4-44.5-24.3-58.8-45.8L74.6 94.2C64.8 79.5 45 75.6 30.2 85.4s-18.7 29.7-8.9 44.4L40.9 159c18.1 27.1 42.8 48.4 71.1 62.4V480c0 17.7 14.3 32 32 32s32-14.3 32-32V384h32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V221.6c29.1-14.2 54.4-36.2 72.7-64.2l18.2-27.9c9.6-14.8 5.4-34.6-9.4-44.3s-34.6-5.5-44.3 9.4L291 122.4c-21.8 33.4-58.9 53.6-98.8 53.6c-12.6 0-24.9-2-36.6-5.8c-.9-.3-1.8-.7-2.7-.9z">
                                                                        </path>
                                                                    </svg>
                                                                    {{ Number(route.query.childs) }}
                                                                </div>
                                                                <div v-if="Number(route.query.infants) > 0"
                                                                    class="border border-primary rounded-2 px-1">
                                                                    <svg stroke="currentColor" fill="currentColor"
                                                                        stroke-width="0" viewBox="0 0 320 512"
                                                                        class="text-black h-4 w-4 text-[#F8C5B3]"
                                                                        height="15px" width="15px"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z">
                                                                        </path>
                                                                    </svg>
                                                                    {{ Number(route.query.infants) }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="fw-bold mb-1 align-content-end align-content-sm-center text-black">
                                                            {{ Math.ceil(paginatedFlights[Mainindex].AdultPrice *
                                                                parseFloat(rate)).toLocaleString() }}{{ currency }}
                                                        </div>
                                                        <div
                                                            class="fw-light mb-1 align-content-end align-content-sm-center small text-black">
                                                            Нийт: {{ Math.ceil(paginatedFlights[Mainindex].TotalPrice *
                                                                parseFloat(rate)).toLocaleString() }}{{ currency }}
                                                        </div>
                                                        <div
                                                            class="text-danger mb-2 align-content-end align-content-sm-center ">
                                                            {{
                                                                segments.FlightClass
                                                            }}</div>
                                                    </div>
                                                    <b-button block variant="outline-primary"
                                                        class="h-sm-25 mb-0 mb-sm-2 "
                                                        :id="`toggleOption${Mainindex}${segments.FlightNum}`"
                                                        :aria-controls="`flightOption${segments.FlightNum}`"
                                                        v-b-toggle="`flightOption${Mainindex}${segments.FlightNum}`"
                                                        @click="fetchOptions(offer.OfferCode, SearchGuid)">
                                                        {{ t('txtChoose') }}
                                                    </b-button>
                                                </b-col>
                                            </b-row>
                                            <!-- Доор: Дэлгэрэнгүй (always at bottom) -->
                                            <b-row v-if="moreFlights(offer, Mainindex).length == findex + 1"
                                                class="border-2 border-top   border-primary justify-content-center mx-3 mx-md-0 "
                                                style="height: 42px; ">
                                                <b-col class="text-center py-2">
                                                    <li class="list-inline-item" style="font-size: smaller;">
                                                        <!-- <a :to="'/some-route/' + Mainindex + findex"
                                                            :id="'toggleButton' + Mainindex + findex"
                                                            :aria-controls="'flightDetail' + findex"
                                                            v-b-toggle="'flightDetail' + Mainindex + findex"
                                                            class="btn-more d-flex align-items-center collapsed p-0 mb-0 justify-content-center"
                                                            role="button">
                                                            Дэлгэрэнгүй
                                                            <ChevronDown />
                                                        </a> -->
                                                        <a href="#" :id="'toggleButton' + Mainindex + findex"
                                                            class="btn-more d-flex align-items-center collapsed p-0 mb-0 justify-content-center"
                                                            role="button"
                                                            @click.prevent="showDetail(`${Mainindex}-${findex}`)">
                                                            Дэлгэрэнгүй
                                                            <ChevronDown />
                                                        </a>
                                                    </li>
                                                </b-col>
                                            </b-row>
                                        </b-col>

                                        <!-- Details collapse -->
                                        <b-col cols="12" class="ps-3 ms-2 border-1 border-primary">
                                            <!-- <b-collapse :id="'flightDetail' + Mainindex + findex"
                                                class="multi-collapse ">
                                                <div class="pt-3">
                                                    <FlightDetailTab :flight="offer" :index="Mainindex"
                                                        :airports="StoreAirPorts" />
                                                </div>
                                            </b-collapse> -->
                                            <b-collapse :id="'flightDetail' + Mainindex + findex"
                                                v-model="detailsShown[`${Mainindex}-${findex}`]" class="multi-collapse">
                                                <div v-if="detailsShown[`${Mainindex}-${findex}`]" class="pt-3">
                                                    <FlightDetailTab :flight="offer" :index="2"
                                                        :airports="StoreAirPorts" />
                                                </div>
                                            </b-collapse>
                                            <b-collapse :id="'flightDetail' + Mainindex + findex"
                                                class="multi-collapse">
                                                <div class="pt-3" v-if="isOptionLoaded">
                                                    <OptionBooking :offerCode="offer.OfferCode"
                                                        :searchGuid="SearchGuid" />
                                                </div>
                                            </b-collapse>
                                        </b-col>
                                    </b-row>

                                </div>
                            </div>
                        </div>







                        <!-- <div class="card-footer pt-0" style="font-size: smaller;">
                            <ul
                                class="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
                                <li class="d-flex align-items-center list-inline-item text-primary"
                                    style="font-size: smaller;">{{
                                        t('txtAvailableSeat') }}: {{
                                        segments.ResBookDesigQuantity
                                    }}</li>
                                <h6 class="d-flex fw-medium mb-0 align-items-center" style="font-size: smaller;"><span
                                        class="fw-medium">{{
                                            t('txtClass') }}:</span> {{
                                            segments.FlightClass }}</h6>
                                <li class="list-inline-item" style="font-size: smaller;">
                                    <a :to="'/some-route/' + Mainindex + segments.FlightNum"
                                        :id="'toggleButton' + Mainindex + segments.FlightNum"
                                        :aria-controls="'flightDetail' + segments.FlightNum"
                                        v-b-toggle="'flightDetail' + Mainindex + segments.FlightNum"
                                        class="btn-more d-flex align-items-center collapsed p-0 mb-0" role="button">
                                        {{ t('txtFlightDetail') }}
                                        <ChevronDown />
                                    </a>
                                </li>
                            </ul>
                            <b-collapse :id="'flightDetail' + Mainindex + segments.FlightNum" class="multi-collapse">
                                <div class="pt-3">
                                    <FlightDetailTab :flight="segments" :index="Mainindex" />
                                </div>
                            </b-collapse>
                            <b-collapse :id="`flightOption${Mainindex}${segments.FlightNum}`" class="multi-collapse">
                                <div class="pt-3" v-if="isOptionLoaded">
                                    <OptionBooking :offerCode="offer.OfferCode" :searchGuid="SearchGuid" />
                                </div>
                            </b-collapse>
                        </div> -->


                    </b-card>
                </div>
            </div>

        </div>
        <!-- Хуудаслалтын товчнууд -->
        <!-- <div class="d-flex justify-content-center mt-4">
            <b-button @click="prevPage" :disabled="currentPage === 1">Өмнөх</b-button>
            <span class="mx-3">Хуудас {{ currentPage }} / {{ totalPages }}</span>
            <b-button @click="nextPage" :disabled="currentPage === totalPages">Дараагийн</b-button>
        </div> -->
        <Pagination :currentPage="currentPage" :totalPages="totalPages"
            @update:currentPage="page => currentPage = page" />
    </div>

</template>

<script lang="ts" setup>
import { faAngleDown, faPlane } from '@fortawesome/free-solid-svg-icons'
import FlightDetailTab from '@/views/flights/List/components/FlightDetailTab.vue'
import OptionBooking from '@/views/flights/List/components/OptionBooking.vue'
import { currency } from '@/helpers/constants'
import { computed, watch, ref } from 'vue'
import { useRouter } from 'vue-router';
import flightLogo from '@/assets/images/element/09.svg'
import { ChevronDown, Briefcase, Luggage, User } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import SkeletonLoader from './Skeleton.vue'
import { useOptionStore } from '@/stores/optionStore'
import { useI18n } from 'vue-i18n'
import Pagination from '@/views/flights/List/components/Pagination.vue'

const { t, locale } = useI18n()


// import { chevron-down } from 'bootstrap-icons-vue'

import { PlaneTakeoff } from 'lucide-vue-next';

import { useFlightStore } from '@/stores/flight';
import { string } from 'yup'
// Props
// Fallback logo

function getDotPositionStyle(index, total) {
    const percent = ((index + 1) / (total + 1)) * 100;
    return {
        left: `${percent}%`,
        transform: 'translate(-50%, -20%)',
        top: '0',
        bottom: '20px'
    };
}

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);
const rate = sessionStorage.getItem('eur') || '1'
// const trips = ref<number>(Number(sessionStorage.getItem("trips")) || 1);
// const tripcount = sessionStorage.getItem("trips")?.length || 0;
const trips = parseInt(sessionStorage.getItem("trips") || "0", 10);
const optionStore = useOptionStore();

const isOptionLoaded = ref(false);
const router = useRouter();
async function fetchOptions(offerCode: string, searchGuid: string) {

    console.log(`Fetching for: ${offerCode}, ${searchGuid}`);
    if (!offerCode || !searchGuid) return;

    try {
        const response = await fetch(`https://api.airkacc.mn/api/prebooking/mn/?offerCode=${offerCode}&searchGuid=${searchGuid}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        optionStore.optionInfos = data;
        sessionStorage.setItem("PreBooking", JSON.stringify(data));
        isOptionLoaded.value = true; // Show the component after fetching
        if (!optionStore.optionInfos?.result?.Body?.AeroPrebookResponse?.AeroPrebookResult?.Tariffs) {
            // Redirect to /flights/detail if Tariffs is missing
            sessionStorage.removeItem("Option")
            router.push({ path: '/flights/detail' });

        }
    } catch (error) {
        console.error('Error fetching options:', error);
    }
}



const route = useRoute();
const fallbackLogo = flightLogo


function formatDate(input: string): string {
    const [day, month, yearAndTime] = input.split(".");
    const [year, time] = yearAndTime.split(" ");
    return `${year}-${month}-${day}`;
}

const flightStore = useFlightStore();


const detailsShown = ref({});

function showDetail(key) {
    detailsShown.value[key] = !detailsShown.value[key];
}

// const filters = ref({
//   StoreflightInfos: [],
// });



// const selectedAirlines = computed(() => filters.value.StoreflightInfos);

// Access state
const StoreflightInfos = computed(() => flightStore.flightInfos ?? []);
// console.log(flightStore.flightInfos.FlightData[0].Offers.OfferInfo[0].Segments.OfferSegment[0].AirCraft)
const StoreAirCompany = computed(() => flightStore.AirCompany);
const StoreAirPorts = computed(() => flightStore.AirPorts);
const SearchGuid = computed(() => flightStore.SearchGuid);
// let filteredData = computed(() => flightStore.firstAdultPrice || []);
// const filteredData = computed(() => flightStore.firstAdultPrice.length > 0 ? flightStore.firstAdultPrice : flightStore.flightInfos);

const sortOrder = ref(null)

const setSortOrder = (order) => {
    sortOrder.value = order
}

const selectedSortLabel = computed(() => {
    if (sortOrder.value === 'asc') return t('txtPriceASC')
    if (sortOrder.value === 'desc') return t('txtPriceDESC')
    return t('txtPriceSort')
})

const filteredData = computed(() => {
    const source = flightStore.firstAdultPrice.length > 0
        ? flightStore.firstAdultPrice
        : StoreflightInfos.value

    // console.log(source)
    if (!sortOrder.value) return source

    return [...source].sort((a, b) => {
        const priceA = a.AdultPrice || 0
        const priceB = b.AdultPrice || 0
        return sortOrder.value === 'asc' ? priceA - priceB : priceB - priceA
    })
})





const isHovered = ref<{ [key: string]: boolean }>({});

function getFlightKey(index: number) {
    return `${index}`;
}

function onMouseOver(key: string) {
    isHovered.value[key] = true;
}

function onMouseLeave(key: string) {
    isHovered.value[key] = false;
}


// const getFlightData = (index: number) => {
//     return filteredData.value[index]?.Offers?.OfferInfo || [];
// };

const getFlightData = (index: number) => {
    return paginatedFlights.value[index]?.Offers?.OfferInfo || [];
};




let test = 1;

// const moreFlights = (index: number) => {
//     const data = getFlightData(index);
//     let filter: any[][] = [];  

//     const tripCount = trips.toString();
//     for (let i = 1; i <= trips; i++) {
//         let currentFilter: any[] = [];

//         if (data.some((offer: { Rph: string }) => offer.Rph === tripCount)) {
//             currentFilter = data
//                 .filter((offer: { Rph: string }) => offer.Rph === i.toString())
//                 .flatMap((offer: { Segments: { OfferSegment: any[] } }) => offer.Segments.OfferSegment);
//         } else {
//             currentFilter = data
//                 .flatMap((offer: { Segments?: { OfferSegment?: any[] } }) => offer.Segments?.OfferSegment || [])
//                 .filter((segment: { Rph: string }) => segment.Rph === i.toString());
//         }

//         filter.push(currentFilter);
//     }

//     if (test == 1) {
//         test = test + 1;
//     }

//     return filter;
// };
const moreFlightsCache = ref({});
const moreFlights = (offer, index) => {
    const key = offer.OfferCode || index;
    if (!moreFlightsCache.value[key]) {
        // ... бодоод хадгална (чиний кодоос шууд хуул)
        const data = getFlightData(index);
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

// watch(currentPage, () => {
//   moreFlightsCache.value = {};
// });


const getFlightData2 = (index: number) => {
    // return filteredData.value[index] || { Offers: { OfferInfo: [] } };
    return paginatedFlights.value[index] || { Offers: { OfferInfo: [] } };
};


// const getAllSegments = (index: number) => {
//    return getFlightData2(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
// };

// const getAllSegments = (offer: any) => {
//     const offerData = offer || { Offers: { OfferInfo: [] } }
//     return offerData.Offers.OfferInfo.flatMap((offer: { Segments?: { OfferSegment?: any } }) => offer.Segments?.OfferSegment) || [];
// };

const allSegmentsCache = ref({});

const getAllSegments = (offer) => {
    if (!offer?.OfferCode) return [];
    if (!allSegmentsCache.value[offer.OfferCode]) {
        allSegmentsCache.value[offer.OfferCode] =
            offer.Offers.OfferInfo?.flatMap(o => o.Segments?.OfferSegment || []) || [];
    }
    return allSegmentsCache.value[offer.OfferCode];
};

const getTotalStops = (offer, index: number, findex: number) => {
    return moreFlights(offer, index)[findex].length - 1
    // if (i === 1) {
    //     return departureFlights(index).length - 1
    // } else {
    //     return returnFlights(index).length - 1
    // }

};
const getStopIatas = (offer, index: number, findex: number) => {
    return moreFlights(offer, index)[findex].slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata)
    // if (i === 1) {
    //     return departureFlights(index).slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata)
    // } else {
    //     return returnFlights(index).slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata)
    // };
}

// const getFirstDeparture = (index: number) => getAllSegments(index)[0]?.Departure.Iata || "N/A";
// const getFirstDepartureTime = (index: number) => getAllSegments(index)[0]?.Departure.Date || "N/A";
// const getLastArrival = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Iata || "N/A";
// const getLastArrivalTime = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Date || "N/A";
const getTotalFlightTime = (offer, index: number, findex: number) => {
    const totalMinutes = moreFlights(offer, index)[findex].reduce(
        (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
        0
    );

    const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
    const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

    return `${hours} ${t('txtHour')} ${minutes} ${t('txtMin')}`; // Цаг, минутын форматаар буцаана
    // if (i === 1) {
    //     const totalMinutes = moreFlights(index)[findex].reduce(
    //         (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
    //         0
    //     );

    //     const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
    //     const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

    //     return `${hours} цаг ${minutes} мин`; // Цаг, минутын форматаар буцаана
    // } else {
    //     const totalMinutes = returnFlights(index).reduce(
    //         (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
    //         0
    //     );

    //     const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
    //     const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

    //     return `${hours} цаг ${minutes} мин`; // Цаг, минутын форматаар буцаана
    // }

};


watch(filteredData, (newValue, oldValue) => {
    // console.log("filteredData өөрчлөгдлөө:", oldValue, "->", newValue);

    // console.log("filteredData:", filteredData);
}, { deep: true });


// Хуудаслалтын хувьсагч
const currentPage = ref(1); // Одоогийн хуудас
const itemsPerPage = 20; // Нэг хуудсанд харагдах нислэгийн тоо

// Хуудаслалтын өгөгдөл
const paginatedFlights = computed(() => {
    let start = (currentPage.value - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    if (filteredData.value.length <= itemsPerPage) {
        return filteredData.value;
    }
    // console.log(filteredData.value.slice(start, end))
    return filteredData.value.slice(start, end);
});

// Нийт хуудасны тоо
const totalPages = computed(() => {
    return Math.ceil(filteredData.value.length / itemsPerPage);
});

// Өмнөх хуудас руу шилжих
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        window.scrollTo({ top: 400, behavior: "smooth" }); // Дээгүүр нь гүйлгэх
    }
};

// Дараагийн хуудас руу шилжих
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        window.scrollTo({ top: 400, behavior: "smooth" }); // Дээгүүр нь гүйлгэх
    }
};



watch([paginatedFlights, currentPage], () => {
    moreFlightsCache.value = {};
    allSegmentsCache.value = {};
}, { immediate: true });

</script>



<style scoped>
.tooltip {
    position: absolute;
    bottom: 110%;
    width: 300px;
    /* Tooltip-ийн байрлал */
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(175, 175, 175);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 1;
    z-index: 10;
}


.custom-margin {
    margin-left: -8px;
}

.no-results-card {
    text-align: center;
    padding: 40px 20px;
    background-color: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    margin: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.no-results-icon {
    font-size: 36px;
    color: #94a3b8;
    margin-bottom: 12px;
}

.no-results-title {
    font-size: 20px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 8px;
}

.no-results-subtitle {
    font-size: 14px;
    color: #64748b;
    max-width: 500px;
    margin: 0 auto;
}

.vertical-divider {
    border-left: 1px dashed #ccc;
    width: 100%;
    /* эсвэл 100% гэж болно */
    margin: 0 0px;
}

@media (max-width: 768px) {
    .vertical-divider {
        display: none !important;
        /* mobile дээр divider алга болго */
    }
}
</style>
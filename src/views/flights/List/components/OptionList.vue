<template>
    <b-card no-body class="p-4 mb-2">
        <div v-if="option.Tariffs">
            <div v-for="(optionData, index) in option.Tariffs.ServiceInfo " :key="index"
                class="p-3 mb-4 border rounded-2">
                <b-card-body class="p-0">
                    <b-row class="g-2 g-sm-4 ">
                        <b-col md="3" xl="3">
                            <!-- <div class="bg-light rounded-3 px-4 py-5">
                                <img :src="cab.image" alt="cab-Img" />
                            </div> -->
                            <img :src="optionData && optionData.AirCompany
                                ? 'https://api.echina.mn/assets/d/' + optionData.AirCompany + '.png'
                                : fallbackLogo" alt="Airline logo" class="bg-light rounded-3 px-4 py-5" />
                        </b-col>
                        <b-col sm="6" md="4" xl="6">
                            <b-card-title class="mb-2">
                                <!-- <router-link :to="{ name: option.AirCraft }" class="stretched-link">
                                    {{ option.AirCraft }}
                                </router-link> -->
                                <div class="text-primary mb-2">{{ optionData.Name }}</div>
                                <!-- <div class="list-inline-item h6 fw-normal me-1 mb-0">
                                    {{ optionData.Text }}
                                </div> -->
                                <div class="list-inline-item h6 fw-normal me-1 mb-0">
                                    <div v-for="(line, index) in optionData.Text.split('\r\n')" :key="index">
                                        <span v-if="line.startsWith('+')" style="color: green;">✔ {{ line.slice(1)
                                            }}</span>
                                        <span v-else-if="line.startsWith('!')">⚠ {{ line.slice(1)
                                            }}</span>
                                        <span v-else>{{ line }}</span>
                                    </div>
                                </div>
                            </b-card-title>
                            <!-- <ul class="nav nav-divider h6 fw-normal mb-2">
                                <li v-for="(feature, idx) in cab.keyFeatures" :key="idx" class="nav-item">
                                    {{ feature }}
                                </li>
                            </ul>
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item h6 fw-normal me-1 mb-0">{{ cab.rating }}</li>
        
                                <li v-for="(_star, idx) in new Array(Math.floor(cab.rating))" :key="idx"
                                    class="list-inline-item me-1">
                                    <font-awesome-icon :icon="faStarFill" class="text-warning" />
                                </li>
                                <li v-if="!Number.isInteger(cab.rating)" class="list-inline-item me-1">
                                    <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                                </li>
                                <template v-if="cab.rating < 5">
                                    <li v-for="(_val, idx) in new Array(5 - Math.ceil(cab.rating))" :key="idx"
                                        class="list-inline-item me-0">
                                        <font-awesome-icon :icon="faStar"></font-awesome-icon>
                                    </li>
                                </template>
</ul> -->
                        </b-col>
                        <b-col sm="6" md="4" xl="3" class="text-sm-end">
                            <!-- <p class="text-danger mb-0">{{ price }}</p> -->
                            <ul class="list-inline mb-1">
                                <!-- <li class="list-inline-item text-decoration-line-through me-2">
                                    {{ currency }}
                                    {{ price }}
                                </li> -->
                                <li class="list-inline-item h5 mb-0">
                                    {{ currency }}
                                    {{ Number(option.FullPrice) + Number(optionData.Price) }}
                                </li>
                            </ul>
                            <!-- <b-button variant="dark" class="mb-0" @click=""> Book Now </b-button> -->
                            <b-button variant="dark" class="mb-0" :to="{ path: '/flights/detail' }">
                                Book Now
                            </b-button>


                        </b-col>
                    </b-row>
                </b-card-body>
            </div>
        </div>
        <div v-else>
            <b-card-body class="p-0">
                <b-row class="g-2 g-sm-4 mb-4">
                    <b-col md="4" xl="3">
                        <!-- <div class="bg-light rounded-3 px-4 py-5">
                            <img :src="cab.image" alt="cab-Img" />
                        </div> -->
                        <img :src="option && option.MarketingAirline
                            ? 'https://api.echina.mn/assets/d/' + option.MarketingAirline + '.png'
                            : fallbackLogo" alt="Airline logo" class="bg-light rounded-3 px-4 py-5" />
                    </b-col>
                    <b-col sm="6" md="4" xl="6">
                        <b-card-title class="mb-2">
                            <!-- <router-link :to="{ name: option.AirCraft }" class="stretched-link">
                                {{ option.AirCraft }}
                            </router-link> -->
                            <!-- <div class="stretched-link">{{ option.AirCraft }}</div> -->
                            <div v-if="option.Tariffs">
                                <span>{{ option.Tariffs.ServiceInfo[0].Text }}</span>
                            </div>
                        </b-card-title>
                        <!-- <ul class="nav nav-divider h6 fw-normal mb-2">
                            <li v-for="(feature, idx) in cab.keyFeatures" :key="idx" class="nav-item">
                                {{ feature }}
                            </li>
                        </ul>
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item h6 fw-normal me-1 mb-0">{{ cab.rating }}</li>
    
                            <li v-for="(_star, idx) in new Array(Math.floor(cab.rating))" :key="idx"
                                class="list-inline-item me-1">
                                <font-awesome-icon :icon="faStarFill" class="text-warning" />
                            </li>
                            <li v-if="!Number.isInteger(cab.rating)" class="list-inline-item me-1">
                                <font-awesome-icon :icon="faStarHalfAlt" class="text-warning" />
                            </li>
                            <template v-if="cab.rating < 5">
                                <li v-for="(_val, idx) in new Array(5 - Math.ceil(cab.rating))" :key="idx"
                                    class="list-inline-item me-0">
                                    <font-awesome-icon :icon="faStar"></font-awesome-icon>
                                </li>
                            </template>
    </ul> -->
                    </b-col>
                    <b-col sm="6" md="4" xl="3" class="text-sm-end">
                        <!-- <p class="text-danger mb-0">{{ price }}</p> -->
                        <ul class="list-inline mb-1">
                            <!-- <li class="list-inline-item text-decoration-line-through me-2">
                                {{ currency }}
                                {{ price }}
                            </li> -->
                            <li class="list-inline-item h5 mb-0">
                                {{ currency }}
                                {{ price }}
                            </li>
                        </ul>
                        <!-- <b-button variant="dark" class="mb-0" @click=""> Book Now </b-button> -->
                        <b-button variant="dark" class="mb-0" :to="{ path: '/flights/detail' }">
                            Book Now
                        </b-button>


                    </b-col>
                </b-row>
            </b-card-body>
        </div>

        <!-- <b-card-footer class="border-top p-0 pt-3">
            <b-row>
                <b-col md="6">
                    <ul class="list-group list-group-borderless mb-0">
                        <li v-for="(feature, idx) in cab.features" :key="idx" class="list-group-item d-flex pb-0 mb-0">
                            <span class="h6 fw-normal mb-0">
                                <BIconCheckCircle class="me-2" />
                                {{ feature }}
                            </span>
                        </li>
                    </ul>
                </b-col>
                <b-col md="6">
                    <ul class="list-group list-group-borderless mb-0">
                        <li v-for="(note, idx) in cab.notes" :key="idx"
                            class="list-group-item d-flex h6 fw-light text-success pb-0 mb-0">
                            {{ note }}
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-card-footer> -->
    </b-card>
</template>

<script setup lang="ts">
import { faStarHalfAlt, faStar as faStarFill } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { BIconCheckCircle } from 'bootstrap-icons-vue'
import { currency } from '@/helpers/constants'

import fallbackLogo from '@/assets/images/element/09.svg'
import type { PropType } from 'vue'
import type { CabListType } from '@/views/cab/List/type'

defineProps({
    option: {
        type: Object,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})
</script>
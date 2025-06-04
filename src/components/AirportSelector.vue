<template>
    <div class="dropdown-wrapper">
        <div class="dropdown">
            <div class="dropdown-header">
                <input type="text" v-model="searchQuery" @focus="isOpen = true" @input="handleSearch"
                    placeholder="Сонгоно уу..." class="form-control search-input" />
                <span class="arrow" @click="toggleDropdown">{{ isOpen ? "▲" : "▼" }}</span>
            </div>

            <div v-if="isOpen" class="dropdown-body p-0 border-0 shadow bg-white text-black" style="min-width: 800px;">
                <div v-if="isLoading" class="text-center py-3">Уншиж байна...</div>

                <!-- SEARCH RESULTS -->
                <!-- <div v-else-if="searchResults.length" class="px-3 pt-3">
                    <div v-for="item in searchResults" :key="item.cityCode + item.countryCode" class="mb-2">
                        <div class="fw-bold text-info">{{ item.countryName }} - {{ item.cityName }}</div>
                        <div v-for="airport in item.airport" :key="airport.airportCode"
                            class="list-group-item list-group-item-action d-flex align-items-center bg-white text-black px-2 py-1 border-0"
                            @click.stop="selectSearchedAirport(item, airport)" style="font-size: 15px;">
                            <img :src="`https://flagcdn.com/${item.countryCode.toLowerCase()}.svg`" alt="flag"
                                width="18" class="me-2" />
                            {{ airport.airportName }} ({{ airport.airportCode }})
                        </div>
                    </div>
                </div> -->
                <div v-else-if="groupedSearchResults.length" class="px-3 pt-3">
                    <div v-for="item in groupedSearchResults" :key="item.cityCode + item.countryCode"
                        class="mb-4 pb-2 border-bottom border-dark-subtle">
                        <!-- City Title -->
                        <!-- <div class="fw-bold text-black small" style="font-size: 18px;">
                            {{ item.cityName }} <span class="fw-normal text-secondary">/ All airports</span>
                        </div> -->
                        <!-- Country info -->
                        <div class="text-black" style="font-size:13px; margin-left:1px;">
                            {{ item.cityName }}, {{ item.countryName?.toUpperCase() }}, {{
                                item.countryCode?.toUpperCase() }}
                        </div>
                        <!-- Each Airport -->
                        <div v-for="airport in item.airport" :key="airport.airportCode"
                            class="d-flex align-items-start gap-2 ps-3 mt-1" style="cursor: pointer;"
                            @click.stop="selectSearchedAirport(item, airport)">
                            <!-- ↳ Arrow -->
                            <div class="text-secondary" style="font-size: 18px; margin-top: 2px;">↳</div>
                            <div>
                                <span class="fw-bold text-primary gap-2" style=" font-size: 18px;">
                                    {{ airport.airportCode }}
                                </span>
                                <span class="fw-medium text-black" style="font-size:15px; margin-left:4px;">
                                    {{ airport.airportName }}
                                </span>
                                <span v-if="airport.description" class="text-secondary ms-1" style="font-size:13px;">
                                    , {{ airport.description }}
                                </span>
                                <span v-if="airport.type" class="text-secondary ms-1" style="font-size:13px;">
                                    ({{ airport.type }})
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- MULTI-COLUMN DROPDOWN -->
                <div v-else>

                    <div class="airport-selector-list px-1 px-md-2">
                        <div class="row g-2">
                            <div v-for="continent in airportData" :key="continent.name" class="col-12 col-sm-6  ">
                                <!-- CONTINENT HEADER -->
                                <div
                                    class="continent-title px-2 py-1 mb-2 bg-dark text-light fw-bold rounded-top small text-uppercase">
                                    {{ continent.name }}
                                </div>
                                <!-- CITY LIST -->
                                <div class="d-flex flex-wrap gap-1 px-1 pb-2">
                                    <div v-for="city in continent.cities" :key="city.airport_iata"
                                        class="d-flex align-items-center gap-1 city-item px-2 py-1 rounded"
                                        style="min-width: 120px; font-size: 15px; cursor:pointer;"
                                        @click="selectCity(city)">
                                        <img :src="`https://flagcdn.com/${city.country_code?.toLowerCase()}.svg`"
                                            alt="flag" style="width: 18px; height: 13px; border-radius: 2px;" />
                                        <span class="fw-medium">{{ city.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <!-- /multi-column -->
            </div>
        </div>
    </div>
</template>

<script>
let debounceTimeout;

export default {
    name: "AirportSelector",
    props: {
        modelValue: {
            type: Object,
            default: null,
        },
    },
    emits: ["update:modelValue"],
    data() {
        return {
            isOpen: false,
            selectedCity: null,
            airportData: [],
            searchQuery: "",
            searchResults: [],
            isLoading: false,
        };
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(newVal) {
                if (newVal && typeof newVal === "object") {
                    this.selectedCity = newVal;
                    this.searchQuery = `${newVal.airportName} (${newVal.airportCode})`;
                }
            },
        },
    },
    methods: {
        chunkArray(arr, size) {
            const res = [];
            for (let i = 0; i < arr.length; i += size) {
                res.push(arr.slice(i, i + size));
            }
            return res;
        },
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectCity(city) {
            const selected = {
                airportName: city.name,
                airportCode: city.airport_iata,
            };
            this.selectedCity = selected;
            this.searchQuery = `${selected.airportName} (${selected.airportCode})`;
            this.isOpen = false;
            this.$emit("update:modelValue", selected);
            // console.log("Selected city:", selected);
        },
        selectSearchedAirport(item, airport) {
            const selected = {
                airportName: airport.airportName,
                airportCode: airport.airportCode,
            };
            this.selectedCity = selected;
            this.searchQuery = `${selected.airportName} (${selected.airportCode})`;
            this.isOpen = false;
            this.$emit("update:modelValue", selected);
            // console.log("Selected searched airport:", selected);
        },
        async fetchPopularAirports() {
            try {
                const response = await fetch("https://api.echina.mn/api/getPopularAirports/en/");
                const data = await response.json();
                if (data.status === "SUCCESS") {
                    this.airportData = data.result;
                }
            } catch (error) {
                console.error("Airport fetch error:", error);
            }
        },
        async handleSearch() {
            clearTimeout(debounceTimeout);

            if (this.searchQuery.length < 2) {
                this.searchResults = [];
                return;
            }

            this.isLoading = true;

            debounceTimeout = setTimeout(async () => {
                try {
                    const response = await fetch(
                        `https://api.echina.mn/api/getAirports/mn/?search=${this.searchQuery}&atype=int`
                    );
                    const data = await response.json();
                    if (data.status === "SUCCESS") {
                        this.searchResults = data.result;
                    }
                } catch (error) {
                    console.error("Search error:", error);
                } finally {
                    this.isLoading = false;
                }
            }, 400);
        },
    },
    computed: {
        groupedSearchResults() {
            // 1. Group-лэлт хийх объект
            const groupMap = {};
            (this.searchResults || []).forEach(item => {
                // Групплэх түлхүүр (cityCode + countryCode)
                const key = `${item.cityCode}-${item.countryCode}`;
                if (!groupMap[key]) {
                    // Эхнийх бол үүсгэнэ
                    groupMap[key] = {
                        cityCode: item.cityCode,
                        cityName: item.cityName,
                        countryCode: item.countryCode,
                        countryName: item.countryName,
                        airport: []
                    };
                }
                // Бүх airport-ыг нэг массивт цуглуулна
                groupMap[key].airport = groupMap[key].airport.concat(item.airport || []);
            });
            // Object → Array
            return Object.values(groupMap);
        }
    },
    mounted() {
        this.fetchPopularAirports();
    },
};
</script>

<style scoped>
.dropdown-wrapper {
    width: 300px;
}

.dropdown {
    border: 1px solid #ccc;
    border-radius: 6px;
    background: #fff;
    position: relative;
}

.dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search-input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 14px;
}

.dropdown-body {
    border-radius: 0 0 12px 12px;
    max-width: 1100px;
    box-shadow: 0 16px 40px #000a;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-height: 450px;
    overflow-y: auto;
    z-index: 100;
}

.list-group-item:hover,
.list-group-item:focus {
    background: #294b65 !important;
    color: #fff !important;
}

.arrow {
    padding: 10px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .dropdown-body {
        min-width: 100% !important;
        max-width: 100vw !important;
        left: 0 !important;
        right: 0 !important;
        border-radius: 0 0 12px 12px;
    }

    .col-md-auto,
    .col-12 {
        min-width: 100% !important;
        border-right: none !important;
        border-bottom: 1px solid #444 !important;
        padding-left: 12px !important;
        padding-right: 12px !important;
    }

    .list-group-item {
        font-size: 15px;
    }
}


.airport-selector-list {
    background: #ffffff;
    border-radius: 16px;
    padding-bottom: 16px;
}

.continent-title {
    color: #e0e7ef !important;
    border-bottom: 1px solid #253247;
    letter-spacing: 1px;
}

.city-item {
    background: transparent;
    color: #000000;
    font-size: 16px;
    transition: background 0.15s;
}

.city-item:hover {
    background: #294b65;
}

@media (max-width: 600px) {
    .city-item {
        min-width: 120px;
        font-size: 15px;
    }
}
</style>

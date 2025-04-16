<template>
    <div class="dropdown-wrapper">
        <!-- <label>Хаанаас</label> -->
        <div class="dropdown">
            <div class="dropdown-header">
                <input type="text" v-model="searchQuery" @focus="isOpen = true" @input="handleSearch"
                    placeholder="Сонгоно уу..." class="search-input" />
                <span class="arrow" @click="toggleDropdown">{{ isOpen ? "▲" : "▼" }}</span>
            </div>

            <div v-if="isOpen" class="dropdown-body">
                <div v-if="isLoading">Уншиж байна...</div>

                <div v-if="searchResults.length">
                    <div v-for="item in searchResults" :key="item.cityCode + item.countryCode"
                        class="continent-section">
                        <p class="continent-name">{{ item.countryName }} - {{ item.cityName }}</p>
                        <div v-for="airport in item.airport" :key="airport.airportCode" class="dropdown-item"
                            @click.stop="selectSearchedAirport(item, airport)">
                            <img :src="`https://flagcdn.com/${item.countryCode.toLowerCase()}.svg`" alt="flag"
                                width="20" style="margin-right: 8px; vertical-align: middle" />
                            {{ airport.airportName }} ({{ airport.airportCode }})
                        </div>
                    </div>
                </div>

                <div v-else>
                    <div v-for="continent in airportData" :key="continent.name" class="continent-section">
                        <p class="continent-name">{{ continent.name }}</p>
                        <div v-for="city in continent.cities" :key="city.name" class="dropdown-item"
                            @click.stop="selectCity(city)">
                            <img :src="`https://flagcdn.com/${city.country_code.toLowerCase()}.svg`" alt="flag"
                                width="20" style="margin-right: 8px; vertical-align: middle" />
                            {{ city.name }}
                        </div>
                    </div>
                </div>
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
            console.log("Selected city:", selected);
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
            console.log("Selected searched airport:", selected);
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
    mounted() {
        this.fetchPopularAirports();
    },
};
</script>



<style scoped>
.airport-selector {
    width: 100%;
}

.airport-selector .choices__inner,
.airport-selector .choices__input {
    width: 100%;
    box-sizing: border-box;
}


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
    max-height: 350px;
    overflow-y: auto;
    border-top: 1px solid #ddd;
    position: absolute;
    background: #fff;
    width: 100%;
    z-index: 10;
    padding: 8px;
}

.continent-section {
    margin-bottom: 10px;
}

.continent-name {
    font-weight: bold;
    font-size: 14px;
    color: #444;
    margin-bottom: 4px;
}

.dropdown-item {
    padding: 6px 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
}

.dropdown-item:hover {
    background: #f0f0f0;
}

.arrow {
    padding: 10px;
    cursor: pointer;
}
</style>
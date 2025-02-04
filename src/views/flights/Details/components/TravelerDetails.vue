<template>
  <form class="card border">
    <b-card-header class="border-bottom px-4">
      <b-card-title tag="h3" class="mb-0">Traveler Details</b-card-title>
    </b-card-header>

    <b-card-body class="py-4">
      <div class="bg-danger bg-opacity-10 rounded-2 p-3 mb-3">
        <p class="h6 fw-light small mb-0">
          <span class="badge bg-danger me-2">New</span>Please make sure you enter the Name as per
          your passport
        </p>
      </div>

      <div class="text-end mb-3">
        <a href="#" class="btn btn-primary-soft mb-0">Add New Adult</a>
      </div>

      <b-accordion class="accordion-icon accordion-bg-light">
        <b-accordion-item
          header-tag="h6"
          header-class="font-base"
          button-class="fw-bold"
          title="Adult 1"
          body-class="mt-3"
          class="mb-3"
          visible
        >
          <b-row class="g-4">
            <b-col md="3">
              <SelectFormInput
                id="title"
                label="Title"
                v-model="selectedTitle"
                :options="titleOptions"
                :choice-options="{ searchEnabled: false }"
              />
            </b-col>

            <b-col md="9">
              <label class="form-label">Full name</label>
              <div class="input-group">
                <b-form-input type="text" placeholder="First name" />
                <b-form-input type="text" placeholder="Last name" />
              </div>
            </b-col>

            <b-col md="6">
              <label class="form-label">Date Of Birth</label>
              <b-row class="g-0">
                <b-col cols="4">
                  <div class="choice-radius-end">
                    <SelectFormInput
                      id="date"
                      v-model="selectedDate"
                      :options="dateOptions"
                      :choice-options="{ searchEnabled: false }"
                      custom-class="z-index-9 rounded-start"
                    />
                  </div>
                </b-col>
                <b-col cols="4">
                  <div class="choice-radius-0">
                    <SelectFormInput
                      id="month"
                      v-model="selectedMonth"
                      :options="monthOptions"
                      :choice-options="{ searchEnabled: false }"
                      custom-class="choice-radius-0 z-index-9 border-0 bg-light"
                    />
                  </div>
                </b-col>
                <b-col cols="4">
                  <div class="choice-radius-start">
                    <SelectFormInput
                      id="year"
                      v-model="selectedYear"
                      :options="yearOptions"
                      :choice-options="{ searchEnabled: false }"
                      custom-class="z-index-9 border-0 bg-light"
                    />
                  </div>
                </b-col>
              </b-row>
            </b-col>

            <b-col md="6">
              <SelectFormInput
                id="nationality"
                label="Nationality"
                v-model="selectedNationality"
                :options="nationalityOptions"
                :choice-options="{ searchEnabled: false }"
              />
            </b-col>

            <b-col md="6">
              <b-form-group label="Passport Number">
                <b-form-input type="text" placeholder="Enter passport number" />
              </b-form-group>
            </b-col>

            <b-col md="6">
              <SelectFormInput
                id="country"
                label="Passport Issuing Country"
                v-model="selectedCountry"
                :options="countryOptions"
                :choice-options="{ searchEnabled: false }"
              />
            </b-col>

            <b-col md="6">
              <CustomFlatpicker
                id="passportExpiry"
                label="Passport Expiry"
                placeholder="Enter passport date"
                v-model="date"
                :options="{ dateFormat: 'd M Y' }"
              />
            </b-col>
          </b-row>
        </b-accordion-item>
        <b-accordion-item
          header-tag="h6"
          header-class="font-base"
          button-class="fw-bold"
          title="Adult 2"
          body-class="mt-3"
        >
          What deal evil rent by real in. But her ready least set lived spite solid. September how
          men saw tolerably two behavior arranging. She offices for highest and replied one venture
          pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality
          possession resolution at or appearance unaffected me. Engaged its was the evident pleased
          husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to
          cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved
          own provided blessing may peculiar domestic. Sight house has sex never. No visited raising
          gravity outward subject my cottage Mr be.
        </b-accordion-item>
      </b-accordion>
      <h5 class="mt-4">Booking detail will be sent to</h5>
      <b-row class="g-3 g-md-4">
        <b-col md="6">
          <b-form-group label="Mobile Number">
            <b-form-input type="text" placeholder="Enter your mobile number" />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group label="Email Address">
            <b-form-input type="email" placeholder="Enter your email address" />
          </b-form-group>
        </b-col>
      </b-row>

      <div class="d-grid mt-4">
        <router-link :to="{ name: 'flights.booking' }" class="btn btn-primary mb-0"
          >Proceed To Payment</router-link
        >
      </div>
    </b-card-body>
  </form>
</template>
<script setup lang="ts">
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import { ref } from 'vue'
import SelectFormInput from '@/components/SelectFormInput.vue'

const date = ref()

const selectedTitle = ref('mr')

const titleOptions = [
  { value: 'mr', text: 'Mr' },
  { value: 'mrs', text: 'Mrs' }
]

const selectedDate = ref('date')

const dateOptions = [
  { value: 'date', text: 'Date' },
  { value: '1', text: '1' },
  { value: '2', text: '2' },
  { value: '3', text: '3' },
  { value: '4', text: '4' },
  { value: '5', text: '5' },
  { value: '6', text: '6' },
  { value: '7', text: '7' },
  { value: '8', text: '8' },
  { value: '9', text: '9' },
  { value: '10', text: '10' },
  { value: '11', text: '11' },
  { value: '12', text: '12' },
  { value: '13', text: '13' },
  { value: '14', text: '14' },
  { value: '15', text: '15' },
  { value: '16', text: '16' },
  { value: '17', text: '17' },
  { value: '18', text: '18' },
  { value: '19', text: '19' },
  { value: '20', text: '20' },
  { value: '21', text: '21' },
  { value: '22', text: '22' },
  { value: '23', text: '23' },
  { value: '24', text: '24' },
  { value: '25', text: '25' },
  { value: '26', text: '26' },
  { value: '27', text: '27' },
  { value: '28', text: '28' },
  { value: '29', text: '29' },
  { value: '30', text: '30' },
  { value: '31', text: '31' }
]

const selectedMonth = ref('month')

const monthOptions = [
  { value: 'month', text: 'Month' },
  { value: 'jan', text: 'Jan' },
  { value: 'feb', text: 'Feb' },
  { value: 'mar', text: 'Mar' },
  { value: 'apr', text: 'Apr' },
  { value: 'may', text: 'May' },
  { value: 'jun', text: 'Jun' },
  { value: 'jul', text: 'Jul' },
  { value: 'aug', text: 'Aug' },
  { value: 'sep', text: 'Sep' },
  { value: 'oct', text: 'Oct' },
  { value: 'nov', text: 'Nov' },
  { value: 'dec', text: 'Dec' }
]

const selectedYear = ref('year')

const yearOptions = [
  { value: 'year', text: 'Year' },
  { value: '2000', text: '2000' },
  { value: '2001', text: '2001' },
  { value: '2002', text: '2002' },
  { value: '2003', text: '2003' },
  { value: '2004', text: '2004' },
  { value: '2005', text: '2005' },
  { value: '2006', text: '2006' },
  { value: '2007', text: '2007' },
  { value: '2008', text: '2008' },
  { value: '2009', text: '2009' },
  { value: '2010', text: '2010' },
  { value: '2011', text: '2011' },
  { value: '2012', text: '2012' },
  { value: '2013', text: '2013' },
  { value: '2014', text: '2014' },
  { value: '2015', text: '2015' },
  { value: '2016', text: '2016' },
  { value: '2017', text: '2017' },
  { value: '2018', text: '2018' },
  { value: '2019', text: '2019' },
  { value: '2020', text: '2020' }
]

const selectedNationality = ref('select-nationality')

const nationalityOptions = [
  { value: 'select-nationality', text: 'Select Nationality' },
  { value: 'indian', text: 'Indian' },
  { value: 'mali', text: 'Mali' },
  { value: 'japan', text: 'Japan' },
  { value: 'jordan', text: 'Jordan' }
]

const selectedCountry = ref('select-country')

const countryOptions = [
  { value: 'select-country', text: 'Select Country' },
  { value: 'indian', text: 'Indian' },
  { value: 'mali', text: 'Mali' },
  { value: 'japan', text: 'Japan' },
  { value: 'jordan', text: 'Jordan' }
]
</script>

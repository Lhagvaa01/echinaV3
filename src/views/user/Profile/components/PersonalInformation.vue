<template>
  <b-card no-body class="border">
    <b-card-header class="border-bottom">
      <h4 class="card-header-title">Personal Information</h4>
    </b-card-header>

    <b-card-body>
      <b-form class="row g-3">
        <b-col cols="12">
          <label class="form-label"
            >Upload your profile photo<span class="text-danger">*</span></label
          >
          <div class="d-flex align-items-center">
            <label class="position-relative me-4" for="uploadfile-1" title="Replace this pic">
              <span class="avatar avatar-xl">
                <img
                  id="uploadfile-1-preview"
                  class="avatar-img rounded-circle border border-white border-3 shadow"
                  :src="avatar1Img"
                  alt=""
                />
              </span>
            </label>
            <label class="btn btn-sm btn-primary-soft mb-0" for="uploadfile-1">Change</label>
            <b-form-file id="uploadfile-1" class="form-control d-none" type="file" />
          </div>
        </b-col>

        <b-col md="6">
          <label class="form-label">Full Name<span class="text-danger">*</span></label>
          <b-form-input
            type="text"
            v-model="personalInformation.fullName"
            placeholder="Enter your full name"
          />
        </b-col>

        <b-col md="6">
          <label class="form-label">Email address<span class="text-danger">*</span></label>
          <b-form-input
            type="email"
            v-model="personalInformation.email"
            placeholder="Enter your email id"
          />
        </b-col>

        <b-col md="6">
          <label class="form-label">Mobile number<span class="text-danger">*</span></label>
          <b-form-input
            type="text"
            v-model="personalInformation.mobile"
            placeholder="Enter your mobile number"
          />
        </b-col>

        <b-col md="6">
          <label class="form-label">Nationality<span class="text-danger">*</span></label>
          <SelectFormInput
            id="nationality"
            v-model="personalInformation.nationality"
            :options="options"
          />
        </b-col>

        <b-col md="6">
          <label class="form-label">Date of Birth<span class="text-danger">*</span></label>
          <CustomFlatpicker
            id="birthday"
            placeholder="Enter date of birth"
            v-model="personalInformation.dob"
            :options="{ dateFormat: 'd M Y' }"
          />
        </b-col>

        <b-col md="6">
          <label class="form-label">Select Gender<span class="text-danger">*</span></label>
          <div class="d-flex gap-4">
            <div class="radio-bg-light">
              <b-form-radio
                v-model="personalInformation.gender"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="male"
              >
                Male
              </b-form-radio>
            </div>
            <div class="radio-bg-light">
              <b-form-radio
                v-model="personalInformation.gender"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="female"
              >
                Female
              </b-form-radio>
            </div>
            <div class="radio-bg-light">
              <b-form-radio
                v-model="personalInformation.gender"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                value="other"
              >
                Others
              </b-form-radio>
            </div>
          </div>
        </b-col>

        <b-col cols="12">
          <b-form-group label="Address">
            <b-form-textarea
              rows="3"
              v-model="personalInformation.address"
              spellcheck="false"
            ></b-form-textarea>
          </b-form-group>
        </b-col>

        <b-col cols="12" class="text-end">
          <a href="#" class="btn btn-primary mb-0">Save Changes</a>
        </b-col>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import avatar1Img from '@/assets/images/avatar/01.jpg'

import { reactive } from 'vue'

import CustomFlatpicker from '@/components/CustomFlatpicker.vue'
import SelectFormInput from '@/components/SelectFormInput.vue'

const options = [
  { value: null, text: 'Select your country' },
  { value: 'usa', text: 'USA' },
  { value: 'paris', text: 'Paris' },
  { value: 'india', text: 'India' },
  { value: 'uk', text: 'UK' }
]

const personalInformation = reactive({
  fullName: 'Jacqueline Miller',
  email: 'hello@gmail.com',
  mobile: 222555666,
  nationality: 'paris',
  dob: '29 Aug 1996',
  gender: 'male',
  address: '2119 N Division Ave, New Hampshire, York, United States'
})
</script>

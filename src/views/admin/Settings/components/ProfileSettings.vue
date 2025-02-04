<template>
  <b-card no-body class="shadow">
    <b-card-header class="border-bottom">
      <h5 class="card-header-title">Profile Settings</h5>
    </b-card-header>
    <b-card-body>
      <div class="mb-3">
        <b-form-group label="Name">
          <b-form-input v-model="userData.name" type="text" placeholder="Name" />
        </b-form-group>
      </div>
      <div class="mb-3">
        <label class="form-label">Profile picture</label>
        <div class="d-flex align-items-center">
          <label class="position-relative me-4" for="uploadfile-1" title="Replace this pic">
            <span class="avatar avatar-xl">
              <img
                id="uploadfile-1-preview"
                class="avatar-img rounded-circle border border-white border-3 shadow"
                :src="logoIcon"
                alt=""
              />
            </span>
          </label>
          <label class="btn btn-sm btn-primary-soft mb-0" for="uploadfile-1">Change</label>
          <b-form-file id="uploadfile-1" class="d-none" />
        </div>
      </div>
      <div class="mb-3">
        <b-form-group label="Email id">
          <b-form-input v-model="userData.email" type="email" placeholder="Enter your email id" />
        </b-form-group>
      </div>
      <div class="mb-3">
        <b-form-group label="Mobile number">
          <b-form-input
            v-model="userData.mobile"
            type="tel"
            placeholder="Enter your mobile number"
          />
        </b-form-group>
      </div>
      <div class="mb-3">
        <b-form-group label="Location">
          <b-form-input v-model="userData.location" type="text" placeholder="Enter your location" />
        </b-form-group>
      </div>
      <div>
        <CustomFlatpicker
          id="birthday"
          label="Birthday"
          placeholder="Enter your birth-date"
          v-model="userData.dob"
          :options="{ dateFormat: 'd M Y' }"
        />
      </div>
      <div class="d-flex justify-content-end mt-4">
        <a href="#" class="btn text-secondary border-0 me-2">Discard</a>
        <a href="#" class="btn btn-primary">Save change</a>
      </div>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import logoIcon from '@/assets/images/logo-icon.svg'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'

const userData = reactive({
  name: 'Jacqueline Miller',
  avatar: logoIcon,
  email: 'hello@gmail.com',
  mobile: 222555666,
  location: 'New Hampshire',
  dob: '29 Aug 1994'
})
</script>

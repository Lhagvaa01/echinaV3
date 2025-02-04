<template>
  <UserLayout>
    <b-card no-body class="border">
      <b-card-header class="border-bottom">
        <h4 class="card-header-title">Travelers Detail</h4>
      </b-card-header>

      <b-card-body class="vstack gap-4">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center p-0">
            <div class="d-flex align-items-center">
              <div class="avatar avatar-sm">
                <img class="avatar-img rounded-circle" :src="avatar9Img" alt="avatar" />
              </div>
              <div class="ms-2">
                <h6 class="mb-0">Lori Stevens</h6>
              </div>
            </div>

            <a href="#" class="btn btn-sm btn-link p-0 mb-0">Remove</a>
          </b-card-header>

          <form class="card-body p-0 pt-3">
            <div class="mb-3">
              <label class="form-label">Full name</label>
              <div class="input-group">
                <b-form-input v-model="traveler1.firstName" type="text" placeholder="First name" />
                <b-form-input v-model="traveler1.lastName" type="text" placeholder="Last name" />
              </div>
            </div>

            <div>
              <CustomFlatpicker
                id="birthday"
                label="Date of Birth"
                placeholder="Enter your birth"
                v-model="traveler1.dob"
                :options="{ dateFormat: 'd M Y' }"
              />
            </div>
          </form>
        </b-card>

        <hr />

        <b-card no-body>
          <b-card-header class="d-flex justify-content-between align-items-center p-0">
            <div class="d-flex align-items-center">
              <div class="avatar avatar-sm">
                <img class="avatar-img rounded-circle" :src="avatar1Img" alt="avatar" />
              </div>
              <div class="ms-2">
                <h6 class="mb-0">Jacqueline Miller</h6>
              </div>
            </div>

            <a href="#" class="btn btn-sm btn-link p-0 mb-0">Remove</a>
          </b-card-header>

          <form class="card-body p-0 pt-3">
            <div class="mb-3">
              <label class="form-label">Full name</label>
              <div class="input-group">
                <b-form-input v-model="traveler2.firstName" type="text" placeholder="First name" />
                <b-form-input v-model="traveler2.lastName" type="text" placeholder="Last name" />
              </div>
            </div>

            <div class="">
              <CustomFlatpicker
                id="birthdate"
                label="Date of Birth"
                placeholder="Enter your birth"
                v-model="traveler2.dob"
                :options="{ dateFormat: 'd M Y', defaultDate: '15 May 1994' }"
              />
            </div>
          </form>
        </b-card>

        <div class="text-end">
          <b-button variant="primary" class="mb-0" v-b-modal.inquiryForm>
            <BIconPlusLg class="mb-1" />
            Add New Traveler
          </b-button>
        </div>
      </b-card-body>
    </b-card>
    <b-modal
      id="inquiryForm"
      aria-hidden="true"
      header-class="h5"
      hide-footer
      title=" Add New Traveler"
    >
      <template #modal-header>
        <b-button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></b-button>
      </template>

      <b-form>
        <div class="mb-3">
          <label class="form-label">Full Name</label>
          <b-input-group>
            <b-form-input type="text" placeholder="First name" />
            <b-form-input type="text" placeholder="Last name" />
          </b-input-group>
          <small
            >Enter this person's name exactly as it's written on their official travel
            document</small
          >
        </div>
        <div class="mb-3">
          <CustomFlatpicker
            id="dateOfBirth"
            label="Date of Birth"
            placeholder="Enter your birth"
            v-model="birthDate"
            :options="{ dateFormat: 'd M y' }"
          />
          <small
            >It's important to enter a correct date of birth because these details can be used for
            booking or ticketing purposes</small
          >
        </div>

        <div class="text-end">
          <b-button size="sm" variant="dark" class="mb-0">Add Traveler</b-button>
        </div>
      </b-form>
    </b-modal>
  </UserLayout>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import avatar9Img from '@/assets/images/avatar/09.jpg'
import avatar1Img from '@/assets/images/avatar/01.jpg'
import { BIconPlusLg } from 'bootstrap-icons-vue'

import UserLayout from '@/layouts/UserLayout.vue'
import CustomFlatpicker from '@/components/CustomFlatpicker.vue'

const birthDate = ref()
const birthDate1 = ref()

const traveler1 = reactive({
  firstName: 'Lori',
  lastName: 'Stevens',
  dob: '29 Aug 1996'
})

const traveler2 = reactive({
  firstName: 'Jacqueline',
  lastName: 'Miller',
  dob: '15 May 1994'
})
</script>

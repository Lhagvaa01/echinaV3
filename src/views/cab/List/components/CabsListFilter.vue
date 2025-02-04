<template>
  <form class="rounded-3 shadow">
    <b-card no-body class="rounded-0 rounded-top p-4">
      <h6 class="mb-2">Passenger capacity</h6>

      <b-form-checkbox>4 passenger seats</b-form-checkbox>

      <b-form-checkbox>6 passenger seats</b-form-checkbox>
    </b-card>
    <hr class="my-0" />
    <b-card no-body class="rounded-0 p-4">
      <h6 class="mb-2">Price</h6>
      <div class="position-relative">
        <div class="noui-wrapper mb-2">
          <div class="d-flex justify-content-between">
            <input type="text" class="text-body input-with-range-min" :value="value[0]" readOnly />
            <input type="text" class="text-body input-with-range-max" :value="value[1]" readOnly />
          </div>

          <VueSlider
            v-model="value"
            :min="500"
            :max="2000"
            :dotSize="19"
            :dotStyle="dotStyle"
            :processStyle="processStyle"
            :railStyle="railStyle"
            tooltip="none"
          />
        </div>
      </div>
    </b-card>
    <hr class="my-0" />
    <b-card no-body class="rounded-0 rounded-bottom p-4">
      <h6 class="mb-2">Car model</h6>
      <div v-for="(model, idx) in carModels" :key="idx">
        <b-form-checkbox :id="`layoverType${idx}`"> {{ model }} or similar</b-form-checkbox>
      </div>
    </b-card>
  </form>

  <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
    <b-button variant="link" class="p-0 mb-0">Clear all</b-button>
    <b-button variant="primary" class="mb-0">Filter Result</b-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VueSlider from 'vue-3-slider-component'

const carModels = ['WagonR', 'Indica', 'Dzire', 'Etios', 'Xcent', 'Innova', 'Innova Crysta']

const value = ref([700, 1500])

const dotStyle = {
  backgroundColor: '#5143d9',
  border: '5px solid #fff',
  boxShadow: '0px 0px 0px 1px #5143d9'
}

const processStyle = {
  backgroundColor: '#5143d9'
}

const railStyle = {
  backgroundColor: 'rgb(81, 67, 217, 0.1)'
}
</script>

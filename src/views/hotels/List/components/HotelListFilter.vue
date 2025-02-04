<template>
  <form class="rounded-3 shadow">
    <b-card no-body class="rounded-0 rounded-top p-4">
      <h6 class="mb-2">Hotel Type</h6>

      <b-col cols="12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="hotelType1" />
          <label class="form-check-label" for="hotelType1">All</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="hotelType2" />
          <label class="form-check-label" for="hotelType2">Hotel</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="hotelType3" />
          <label class="form-check-label" for="hotelType3">Apartment</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="hotelType4" />
          <label class="form-check-label" for="hotelType4">Resort</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="hotelType5" />
          <label class="form-check-label" for="hotelType5">Villa</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="hotelType6" />
          <label class="form-check-label" for="hotelType6">Lodge</label>
        </div>

        <b-collapse class="multi-collapse" id="hotelType">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="hotelType7" />
            <label class="form-check-label" for="hotelType7">Guest House</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="hotelType10" />
            <label class="form-check-label" for="hotelType10">Cottage</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="hotelType8" />
            <label class="form-check-label" for="hotelType8">Beach Hut</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="hotelType9" />
            <label class="form-check-label" for="hotelType9">Farm house</label>
          </div>
        </b-collapse>

        <a
          v-b-toggle.hotelType
          class="p-0 mb-0 mt-2 btn-more d-flex align-items-center"
          data-bs-toggle="collapse"
          href="#hotelType"
          role="button"
          aria-expanded="false"
          aria-controls="hotelType"
        >
          See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
          <font-awesome-icon :icon="faAngleDown" class="ms-2" />
        </a>
      </b-col>
    </b-card>

    <hr class="my-0" />

    <b-card no-body class="rounded-0 p-4">
      <h6 class="mb-2">Price range</h6>

      <b-col cols="12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="priceRange1" />
          <label class="form-check-label" for="priceRange1">Up to {{ currency }}500</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="priceRange2" />
          <label class="form-check-label" for="priceRange2"
            >{{ currency }}500 - {{ currency }}1000</label
          >
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="priceRange3" />
          <label class="form-check-label" for="priceRange3"
            >{{ currency }}1000 - {{ currency }}1500</label
          >
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="priceRange4" />
          <label class="form-check-label" for="priceRange4"
            >{{ currency }}1500 - {{ currency }}2000</label
          >
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="priceRange5" />
          <label class="form-check-label" for="priceRange5">{{ currency }}2000+</label>
        </div>
      </b-col>
    </b-card>

    <hr class="my-0" />

    <b-card no-body class="rounded-0 p-4">
      <h6 class="mb-2">Popular Type</h6>

      <b-col cols="12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="popolarType1" />
          <label class="form-check-label" for="popolarType1">Free Breakfast Included</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="popolarType2" />
          <label class="form-check-label" for="popolarType2">Pay At Hotel Available</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="popolarType3" />
          <label class="form-check-label" for="popolarType3">Free Cancellation Available</label>
        </div>
      </b-col>
    </b-card>

    <hr class="my-0" />

    <b-card no-body class="rounded-0 p-4">
      <h6 class="mb-2">Customer Rating</h6>

      <ul class="list-inline mb-0 g-3">
        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-c1" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-c1">3+</label>
        </li>

        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-c2" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-c2">3.5+</label>
        </li>

        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-c3" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-c3">4+</label>
        </li>

        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-c4" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-c4">4.5+</label>
        </li>
      </ul>
    </b-card>

    <hr class="my-0" />

    <b-card no-body class="rounded-0 p-4">
      <h6 class="mb-2">Rating Star</h6>

      <ul class="list-inline mb-0 g-3">
        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-6" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-6"
            >1
            <BIconStarFill class="mb-1" />
          </label>
        </li>

        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-7" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-7"
            >2
            <BIconStarFill class="mb-1" />
          </label>
        </li>

        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-8" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-8"
            >3
            <BIconStarFill class="mb-1" />
          </label>
        </li>

        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-15" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-15"
            >4
            <BIconStarFill class="mb-1" />
          </label>
        </li>

        <li class="list-inline-item mb-0">
          <input type="checkbox" class="btn-check" id="btn-check-16" />
          <label class="btn btn-sm btn-light btn-primary-soft-check" for="btn-check-16"
            >5
            <BIconStarFill class="mb-1" />
          </label>
        </li>
      </ul>
    </b-card>

    <hr class="my-0" />

    <b-card no-body class="rounded-0 rounded-bottom p-4">
      <h6 class="mb-2">Amenities</h6>

      <b-col cols="12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="amenitiesType1" />
          <label class="form-check-label" for="amenitiesType1">All</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="amenitiesType2" />
          <label class="form-check-label" for="amenitiesType2">Air Conditioning</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="amenitiesType3" />
          <label class="form-check-label" for="amenitiesType3">Bar</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="amenitiesType4" />
          <label class="form-check-label" for="amenitiesType4">Bonfire</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="amenitiesType5" />
          <label class="form-check-label" for="amenitiesType5">Business Services</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="amenitiesType6" />
          <label class="form-check-label" for="amenitiesType6">Caretaker</label>
        </div>

        <b-collapse class="multi-collapse" id="amenitiesCollapes">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="amenitiesType7" />
            <label class="form-check-label" for="amenitiesType7">Dining</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="amenitiesType8" />
            <label class="form-check-label" for="amenitiesType8">Free Internet</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="amenitiesType9" />
            <label class="form-check-label" for="amenitiesType9">Hair nets</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="amenitiesType10" />
            <label class="form-check-label" for="amenitiesType10">Masks</label>
          </div>
        </b-collapse>

        <a
          v-b-toggle.amenitiesCollapes
          class="p-0 mb-0 mt-2 btn-more d-flex align-items-center collapsed"
          data-bs-toggle="collapse"
          href="#amenitiesCollapes"
          role="button"
          aria-expanded="false"
          aria-controls="amenitiesCollapes"
        >
          See
          <span class="see-more ms-1"
            >more
            <font-awesome-icon :icon="faAngleDown" class="fa-solid fa-angle-down ms-2" /></span
          ><span class="see-less ms-1"
            >less <font-awesome-icon :icon="faAngleUp" class="ms-2"
          /></span>
        </a>
      </b-col>
    </b-card>
  </form>
</template>

<script setup lang="ts">
import { currency } from '@/helpers/constants'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { BIconStarFill } from 'bootstrap-icons-vue'
</script>

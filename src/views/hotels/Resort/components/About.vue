z
<template>
  <section class="pt-5 pt-md-8 pb-0">
    <b-container class="z-index-9">
      <b-row>
        <b-col lg="10" class="m-auto text-center">
          <h2>Here is a tribute to good life!</h2>
          <p class="lead">
            Size-like body someone had. Are conduct viewing boy minutes warrant the expense?
            Tolerably behavior may admit daughters offending her ask own. Praise effects wish change
            way and any wanted. Lively use looked latter regard had. Do he it part more last in. We
            understand that theory is important to build a solid foundation, we understand that
            theory alone isn't going to get the job done so that's why this is packed with practical
            hands-on examples that you can follow step by step.
          </p>

          <ul class="list-inline hstack gap-4 flex-wrap justify-content-center mt-4">
            <li class="list-inline-item">
              <h5 class="mb-0 fw-normal">
                <BIconStar class="fa-fw text-warning mb-1" />
                Have High Rating
              </h5>
            </li>
            <li class="list-inline-item">
              <h5 class="mb-0 fw-normal">
                <BIconPinMap class="fa-fw text-primary mb-1" />
                Best Locations
              </h5>
            </li>
            <li class="list-inline-item">
              <h5 class="mb-0 fw-normal">
                <BIconXOctagon class="fa-fw text-danger mb-1" />
                Free Cancellation
              </h5>
            </li>
            <li class="list-inline-item">
              <h5 class="mb-0 fw-normal">
                <BIconWallet class="fa-fw text-success mb-1" />
                Payment Options
              </h5>
            </li>
          </ul>

          <div class="d-sm-flex justify-content-center align-items-center mt-4">
            <div class="d-flex justify-content-center align-items-center text-start me-0 me-sm-4">
              <h3 class="me-2 mb-0">4.5</h3>
              <div>
                <ul class="list-inline mb-0">
                  <li
                    v-for="(_val, idx) in new Array(4)"
                    :key="idx"
                    class="list-inline-item me-1 small"
                  >
                    <font-awesome-icon :icon="faStar" class="text-warning"></font-awesome-icon>
                  </li>
                  <li class="list-inline-item me-0 small">
                    <font-awesome-icon
                      :icon="faStarHalfAlt"
                      class="text-warning"
                    ></font-awesome-icon>
                  </li>
                </ul>
                <p class="mb-0 small">Clients Love Us!</p>
              </div>
            </div>

            <div>
              <b-button size="lg" variant="dark" class="mb-0">Explore now</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { BIconPinMap, BIconStar, BIconWallet, BIconXOctagon } from 'bootstrap-icons-vue'
</script>

<template>
  <section class="pt-0 pt-lg-5">
    <b-container>
      <b-row>
        <b-col lg="10" xl="8" class="mx-auto">
          <h2 class="mb-4 text-center">Frequently Asked Questions</h2>
          <b-accordion class="accordion-icon accordion-bg-light" id="accordionFaq">
            <b-accordion-item
              v-for="(item, idx) in faqContents"
              :key="idx"
              :title="item.title"
              button-class="accordion-button fw-bold rounded collapsed pe-5"
              headerTag="h6"
              header-class="accordion-header font-base"
              class="mb-3"
              body-class="mt-3 pb-0"
              :visible="!idx"
            >
              {{ item.description }}
            </b-accordion-item>
          </b-accordion>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { faqContents } from '@/views/cab/Home/data'
</script>

<template>
  <footer class="bg-dark pt-5">
    <b-container>
      <b-row class="g-4">
        <b-col lg="3">
          <router-link :to="{ name: 'flights.home' }">
            <img class="h-40px" :src="logoLight" alt="logo" />
          </router-link>
          <p class="my-3 text-body-secondary">
            БНХАУ-ын дотоодын бүх Авиа компаниудыг холбосон захиалгын сүлжээнд нэгдсэн учраас та өөрийн хүссэн
            мэдээлэлээ эх үүсвэрээс нь түргэн шуурхай авах боломжтой. Та өөрөө онлайнаар нислэгээ харах, ажлаа төлөвлөх,
            аялалын төсөв зохиох, тийзээ худалдан авах зэрэг боломжтой болсоноор өөрийн үнэт цаг хугацаа хэмнэнэ.
          </p>
          <!-- <p class="mb-2">
            <a href="#" class="text-body-secondary text-primary-hover">
              <BIconTelephone class="me-1 mb-1" />
              +1234 568 963
            </a>
          </p>
          <p class="mb-0">
            <a href="#" class="text-body-secondary text-primary-hover">
              <BIconEnvelope class="me-1 mb-1" />
              example@gmail.com
            </a>
          </p> -->
        </b-col>

        <b-col lg="8" class="ms-auto">
          <b-row class="g-2">
            <b-col v-for="(item, idx) in footerLinks" :key="idx" cols="6" md="4">
              <div v-if="item.title === 'Аялалын зөвлөгөө'">
                <h5 class="text-white mb-2 fs-6">{{ item.title }}</h5>
                <ul class="nav flex-column text-primary-hover">
                  <li v-for="(child, cIdx) in item.items" :key="cIdx" class="nav-item">
                    <div class="d-flex align-items-center mb-2">
                      <!-- Зураг оруулах зөвхөн Аялалын зөвлөгөөний items дээр -->
                      <img v-if="child.image" :src="child.image" alt="Image" class="me-3"
                        style="width: 50px; height: 50px;" />
                      <div>
                        <router-link v-if="child.link" class="d-flex nav-link text-body-secondary fs-6"
                          :to="child.link">
                          <font-awesome-icon v-if="child.icon" :icon="child.icon" class="me-2" />
                          {{ child.name }}
                        </router-link>

                        <div v-else class="d-flex nav-link text-body-secondary fs-6">
                          <font-awesome-icon v-if="child.icon" :icon="child.icon" class="me-2" />
                          {{ child.name }}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div v-else>
                <h5 class="text-white mb-2 mb-md-4 fs-6">{{ item.title }}</h5>
                <ul class="nav flex-column text-primary-hover">
                  <li v-for="(child, cIdx) in item.items" :key="cIdx" class="nav-item">
                    <router-link v-if="child.link" class="d-flex nav-link text-body-secondary small" :to="child.link">
                      <font-awesome-icon v-if="child.icon" :icon="child.icon" class="me-2" />
                      {{ child.name }}
                    </router-link>

                    <div v-else class="d-flex nav-link text-body-secondary small">
                      <font-awesome-icon v-if="child.icon" :icon="child.icon" class="me-2" />
                      {{ child.name }}
                    </div>
                  </li>
                </ul>
              </div>

            </b-col>
          </b-row>
        </b-col>



      </b-row>
      <!-- 
      <b-row class="mt-5">
        <h5 class="mb-2 text-white">Top Links</h5>
        <ul class="list-inline text-primary-hover lh-lg">
          <li v-for="(item, idx) in topLinks" :key="idx" class="list-inline-item">
            <router-link :to="{ name: item.link?.name, params: item.link?.params }" class="text-body-secondary">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </b-row>

      <b-row class="g-4 justify-content-between mt-0 mt-md-2">
        <b-col sm="7" md="6" lg="4">
          <h5 class="text-white mb-2">Payment & Security</h5>
          <ul class="list-inline mb-0 mt-3 hstack gap-1 justify-content-start">
            <li class="list-inline-item">
              <a href="#"><img :src="paypal" class="h-30px" alt="" /></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><img :src="visa" class="h-30px" alt="" /></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><img :src="mastercard" class="h-30px" alt="" /></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><img :src="expresscard" class="h-30px" alt="" /></a>
            </li>
          </ul>
        </b-col>

        <b-col sm="5" md="6" lg="3" class="text-sm-end">
          <h5 class="text-white mb-2">Follow us on</h5>
          <ul class="list-inline mb-0 mt-3 hstack gap-1 justify-content-end">
            <li class="list-inline-item">
              <a class="btn btn-sm px-2 bg-facebook mb-0" href="#">
                <font-awesome-icon :icon="faFacebook" class="fab fa-fw" />
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-sm shadow px-2 bg-instagram mb-0" href="#">
                <font-awesome-icon :icon="faInstagram" class="fab fa-fw" />
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-sm shadow px-2 bg-twitter mb-0" href="#">
                <font-awesome-icon :icon="faTwitter" class="fab fa-fw" />
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-sm shadow px-2 bg-linkedin mb-0" href="#">
                <font-awesome-icon :icon="faLinkedinIn" class="fab fa-fw" />
              </a>
            </li>
          </ul>
        </b-col>
      </b-row> -->

      <hr class="mt-4 mb-0" />

      <b-row>
        <b-container>
          <div class="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
            <div class="text-body-secondary text-primary-hover">
              Copyrights ©{{ currentYear }} www.airkacc.mn
              <!-- <a :href="developedByLink" class="text-body-secondary">{{ developedBy }}</a>. -->
            </div>
            <div class="nav mt-2 mt-lg-0">
              <ul class="list-inline text-primary-hover mx-auto mb-0">
                <li class="list-inline-item me-0">
                  <a class="nav-link text-body-secondary py-1" href="#">Privacy policy</a>
                </li>
                <li class="list-inline-item me-0">
                  <a class="nav-link text-body-secondary py-1" href="#">Terms and conditions</a>
                </li>
                <li class="list-inline-item me-0">
                  <a class="nav-link text-body-secondary py-1 pe-0" href="#">Refund policy</a>
                </li>
              </ul>
            </div>
          </div>
        </b-container>
      </b-row>
    </b-container>
  </footer>
</template>

<script setup lang="ts">
import logoLight from '@/assets/images/logo-light.svg'
import paypal from '@/assets/images/element/paypal.svg'
import visa from '@/assets/images/element/visa.svg'
import mastercard from '@/assets/images/element/mastercard.svg'
import expresscard from '@/assets/images/element/expresscard.svg'

import { BIconTelephone, BIconEnvelope } from 'bootstrap-icons-vue'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

import { footerLinks, topLinks } from '@/assets/data/footer-items'
import { currentYear, developedBy, developedByLink } from '@/helpers/constants'
</script>

<template>
  <div v-if="Array.isArray(StoreflightInfos) && StoreflightInfos[index]">
    <b-tabs nav-class="nav nav-pills nav-justified nav-responsive bg-primary bg-opacity-10 rounded p-2 mb-3">
      <b-tab>
        <template #title> {{ t('txtFlightDetail') }} </template>
        <div v-if="Array.isArray(StoreflightInfos[index].Offers.OfferInfo)">
          <div v-if="getAllSegments(index).length === 1">

            <div v-for="(offerSegment, segidx) in getAllSegments(index)" :key="segidx">



              <b-card-header>
                <div class="d-sm-flex justify-content-sm-between align-items-center">

                  <div class="d-flex mb-2 mb-sm-0">
                    <img :src="offerSegment && offerSegment.MarketingAirline
                      ? 'https://api.echina.mn/assets/d/' + offerSegment.MarketingAirline + '.png'
                      : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />

                    <h6 class="fw-normal mb-0">
                      {{Array.isArray(StoreAirCompany.value) ? StoreAirCompany?.find((airline: any) => airline.Code ===
                        offerSegment.MarketingAirline)?.Value || offerSegment.MarketingAirlineName :
                        offerSegment.MarketingAirlineName || null}}
                      ({{ offerSegment.FlightNum || 'SA-1254' }})
                    </h6>
                  </div>
                  <h6 class="fw-normal mb-0"><span class="text-body">{{ t('txtClass') }}:</span> {{
                    offerSegment.FlightClass
                    }}
                  </h6>
                </div>
              </b-card-header>

              <b-card-body class="p-4">
                <b-row class="g-4">
                  <b-col sm="4">
                    <h4> {{
                      offerSegment.Departure.Date.split(" ")[1] }}
                    </h4>
                    <p class="fw-bold text-black mb-0">{{
                      formatDate(offerSegment.Departure.Date) }}
                    </p>
                    <p class="mb-0">{{ offerSegment.Departure.Iata
                    }}<span v-if="offerSegment.Departure.Terminal">-Терминал</span> {{
                        offerSegment.Departure.Terminal || '' }}
                    </p>
                    <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                      offerSegment.Departure.Iata)?.City || offerSegment.Departure.City}}</p>

                  </b-col>

                  <b-col sm="4" class="my-sm-auto text-center">
                    <h5>{{ convertTimeText(offerSegment.FlightTime)
                    }}
                    </h5>
                    <div class="position-relative my-4">
                      <hr class="bg-primary opacity-5 position-relative" />
                      <div class="icon-container" style="display: flex; justify-content: space-between; ">
                        <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                          style="transform: translate(0%, -150%);">
                        </div>
                        <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                          style="transform: translate(0%, -150%);">
                        </div>
                      </div>
                      <div
                        class="icon-md bg-primary text-white rounded-circle position-absolute top-0 start-50 translate-middle">
                        <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
                      </div>
                    </div>
                  </b-col>

                  <b-col sm="4">
                    <h4> {{ offerSegment.Arrival.Date.split(" ")[1]
                    }}
                    </h4>
                    <p class="fw-bold text-black mb-0">{{
                      formatDate(offerSegment.Arrival.Date) }}</p>
                    <p class="mb-0">{{ offerSegment.Arrival.Iata }}<span
                        v-if="offerSegment.Arrival.Terminal">-Терминал</span>
                      {{
                        offerSegment.Arrival.Terminal || '' }}
                    </p>
                    <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                      offerSegment.Arrival.Iata)?.City || offerSegment.Arrival.City}}</p>
                  </b-col>
                </b-row>

                <div v-if="offerSegment.Baggage" class="card-footer d-flex justify-content-end align-items-end w-100">
                  <div class="d-flex mx-2 me-5">
                    <Briefcase class="mx-2" color="#3949AB" />
                    Гар тээш: ({{ offerSegment.Baggage.Count }})-{{ offerSegment.Baggage.BaggageType }}
                  </div>
                  <div v-if="offerSegment.CabinBaggage">
                    <div class="d-flex">
                      <Luggage class="mx-2" color="#3949AB" />
                      Тээш: ({{ offerSegment.Baggage.Count }})-{{ offerSegment.Baggage.BaggageType }}
                    </div>
                  </div>
                </div>

              </b-card-body>

            </div>
          </div>
          <div v-else-if="getAllSegmentss(index).return?.length > 0">

            <div class="m-3 fw-bold d-flex align-items-center">
              <PlaneTakeoff color="#009dff" :size="32" class="me-3" />
              {{ t('txtFromFlight') }}
            </div>
            <div v-for="(offerSegment, segidxs) in getAllSegmentss(index).go" :key="'go-' + segidxs">

              <div class="d-grid">
                <div class="d-flex ">
                  <div class="d-flex p-2 align-items-center fw-medium">
                    <div class="fs-5 text-black">{{ segidxs + 1 }}</div>
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- Зураас -->
                      <div style=" width: 2px; height: 210px; background-color: #3949AB;"></div>


                      <!-- Дунд Repeat дүрс -->
                      <div v-if="getAllSegmentss(index).go.length - 1 != segidxs">
                        <div v-if="segidxs < getAllSegmentsDates(index).length - 1"
                          class="mt-4 bg-light rounded-circle p-3">
                          <Repeat :size="36" color="#3949AB" />
                        </div>
                        <div v-else style="width: 67px;"></div>
                      </div>
                      <div v-else style="width: 67px;"></div>

                    </div>
                  </div>



                  <div class="w-100">
                    <b-card-header>
                      <div class="d-sm-flex justify-content-sm-between align-items-center">

                        <div class="d-flex mb-2 mb-sm-0">
                          <img :src="offerSegment && offerSegment.MarketingAirline
                            ? 'https://api.echina.mn/assets/d/' + offerSegment.MarketingAirline + '.png'
                            : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />

                          <h6 class="fw-normal mb-0">
                            {{Array.isArray(StoreAirCompany) ? StoreAirCompany.find((airline: any) => airline.Code ===
                              offerSegment.MarketingAirline)?.Value || offerSegment.MarketingAirlineName :
                              offerSegment.MarketingAirlineName || null}}
                            ({{ offerSegment.FlightNum || 'SA-1254' }})
                          </h6>
                        </div>
                        <h6 class="fw-normal mb-0"><span class="text-body">{{ t('txtClass') }}:</span> {{
                          offerSegment.FlightClass
                        }}
                        </h6>
                      </div>
                    </b-card-header>

                    <b-card-body class="p-4 pb-3">
                      <b-row class="g-4">
                        <b-col sm="4">
                          <h4> {{
                            offerSegment.Departure.Date.split(" ")[1] }}
                          </h4>
                          <p class="fw-bold text-black mb-0">{{
                            formatDate(offerSegment.Departure.Date) }}
                          </p>
                          <p class="mb-0">{{ offerSegment.Departure.Iata
                            }}<span v-if="offerSegment.Departure.Terminal">-Терминал</span> {{
                              offerSegment.Departure.Terminal || '' }}
                          </p>
                          <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                            offerSegment.Departure.Iata).City}}</p>

                        </b-col>

                        <b-col sm="4" class="my-sm-auto text-center">
                          <h5>{{ convertTimeText(offerSegment.FlightTime)
                            }}
                          </h5>
                          <div class="position-relative my-4">
                            <hr class="bg-primary opacity-5 position-relative" />
                            <div class="icon-container" style="display: flex; justify-content: space-between; ">
                              <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                                style="transform: translate(0%, -150%);">
                              </div>
                              <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                                style="transform: translate(0%, -150%);">
                              </div>
                            </div>
                            <div
                              class="icon-md bg-primary text-white rounded-circle position-absolute top-0 start-50 translate-middle">
                              <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
                            </div>
                          </div>
                        </b-col>

                        <b-col sm="4">
                          <h4> {{ offerSegment.Arrival.Date.split(" ")[1]
                            }}
                          </h4>
                          <p class="fw-bold text-black mb-0">{{
                            formatDate(offerSegment.Arrival.Date) }}</p>
                          <p class="mb-0">{{ offerSegment.Arrival.Iata }}<span
                              v-if="offerSegment.Arrival.Terminal">-Терминал</span>
                            {{
                              offerSegment.Arrival.Terminal || '' }}
                          </p>
                          <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                            offerSegment.Arrival.Iata).City}}</p>
                        </b-col>
                      </b-row>



                      <div v-if="offerSegment.Baggage" class="d-flex justify-content-end align-items-end w-100 mt-3">
                        <div class="d-flex mx-2 me-5">
                          <Briefcase class="mx-2" color="#3949AB" />
                          Гар тээш: ({{ offerSegment.Baggage.Count }})-{{ offerSegment.Baggage.BaggageType }}
                        </div>
                        <div v-if="offerSegment.CabinBaggage">
                          <div class="d-flex">
                            <Luggage class="mx-2" color="#3949AB" />
                            Тээш: ({{ offerSegment.Baggage.Count }})-{{ offerSegment.Baggage.BaggageType }}
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                    <div v-if="getAllSegmentss(index).go.length - 1 != segidxs">
                      <div v-if="segidxs < getAllSegmentsDates(index).length - 1"
                        class="card-footer pt-0 pb-4 d-flex align-items-center mw-100">
                        <div class="d-flex flex-row bg-light rounded-2 w-100 justify-content-between">
                          <div class="text-start fw-normal rounded-2 p-2 text-orange">


                            <div>
                              {{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                                offerSegment.Arrival.Iata).City}}
                              дээр
                              {{ timeDifference(offerSegment.Arrival.Date, getAllSegmentss(index).go[segidxs +
                                1].Departure.Date)
                              }}
                              хүлээнэ
                            </div>

                          </div>

                          <!-- Ачаа өөрөө авах шаардлагатай бол нэмэлт анхааруулга -->
                          <div v-if="offerSegment.SelfConnect == 'true'"
                            class=" fw-normal  mt-1 p-2 d-flex text-center align-items-center">
                            <TriangleAlert :size="24" />
                            <h6 class="fw-light mb-0">
                              {{ t('txtSelfTBag') }} <br />
                              <span class="fst-normal">(Self-transfer baggage)</span>
                            </h6>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div v-else class="d-flex flex-row bg-light rounded-2 w-100 justify-content-between">
                      <div v-if="offerSegment.SelfConnect == 'true'"
                        class=" fw-normal  mt-1 p-2 d-flex text-center align-items-center justify-content-sm-end">
                        <TriangleAlert :size="24" />
                        <h6 class="fw-light mb-0">
                          {{ t('txtSelfTBag') }} <br />
                          <span class="fst-normal">(Self-transfer baggage)</span>
                        </h6>
                      </div>
                      <!-- <button v-on:click="getAllSegmentss(index)">{{ test(index)[test(index).length - 1].Rph
                        }}</button> -->
                    </div>


                  </div>

                  <!-- <div v-if="segidxs < getAllSegmentsDates(index).length - 1" class="card-footer">
                    <Repeat color="#3949AB" />
                    <div class="bg-light text-start fw-normal rounded-2 mt-3 p-2 text-orange ">
                      {{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                        offerSegment.Arrival.Iata).City }} дээр {{
                        timeDifference(offerSegment.Arrival.Date, getAllSegmentsDates(index)[segidxs +
                          1].Departure.Date)
                      }} хүлээнэ
                      <h6 v-if="offerSegment.SelfConnect == 'true'" class="fw-medium mb-0">
                        Ачаагаа өөрөө авч, дахин бүртгүүлэх шаардлагатай <br />
                        (Self-transfer baggage)
                      </h6>
                    </div>
                  </div> -->



                </div>
              </div>
            </div>
            <div class="m-3 fw-bold d-flex align-items-center">
              <PlaneTakeoff color="#009dff" :size="32" class="me-3" />
              {{ t('txtToFlight') }}
            </div>
            <div v-for="(offerSegment, segidxs) in getAllSegmentss(index).return" :key="'ret-' + segidxs">

              <div class="d-grid">
                <div class="d-flex ">
                  <div class="d-flex p-2 align-items-center fw-medium">
                    <div class="fs-5 text-black">{{ segidxs + 1 }}</div>
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- Зураас -->
                      <div style=" width: 2px; height: 210px; background-color: #3949AB;"></div>


                      <!-- Дунд Repeat дүрс -->
                      <div v-if="getAllSegmentss(index).return.length - 1 != segidxs">
                        <div v-if="segidxs < getAllSegmentsDates(index).length - 1"
                          class="mt-4 bg-light rounded-circle p-3">
                          <Repeat :size="36" color="#3949AB" />
                        </div>
                        <div v-else style="width: 67px;"></div>
                      </div>
                      <div v-else style="width: 67px;"></div>

                    </div>
                  </div>



                  <div class="w-100">
                    <b-card-header>
                      <div class="d-sm-flex justify-content-sm-between align-items-center">

                        <div class="d-flex mb-2 mb-sm-0">
                          <img :src="offerSegment && offerSegment.MarketingAirline
                            ? 'https://api.echina.mn/assets/d/' + offerSegment.MarketingAirline + '.png'
                            : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />

                          <h6 class="fw-normal mb-0">
                            {{Array.isArray(StoreAirCompany) ? StoreAirCompany.find((airline: any) => airline.Code ===
                              offerSegment.MarketingAirline).Value : StoreAirCompany.Value}}
                            ({{ offerSegment.FlightNum || 'SA-1254' }})
                          </h6>
                        </div>
                        <h6 class="fw-normal mb-0"><span class="text-body">{{ t('txtClass') }}:</span> {{
                          offerSegment.FlightClass
                        }}
                        </h6>
                      </div>
                    </b-card-header>

                    <b-card-body class="p-4 pb-3">
                      <b-row class="g-4">
                        <b-col sm="4">
                          <h4> {{
                            offerSegment.Departure.Date.split(" ")[1] }}
                          </h4>
                          <p class="fw-bold text-black mb-0">{{
                            formatDate(offerSegment.Departure.Date) }}
                          </p>
                          <p class="mb-0">{{ offerSegment.Departure.Iata
                            }}<span v-if="offerSegment.Departure.Terminal">-Терминал</span> {{
                              offerSegment.Departure.Terminal || '' }}
                          </p>
                          <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                            offerSegment.Departure.Iata).City}}</p>

                        </b-col>

                        <b-col sm="4" class="my-sm-auto text-center">
                          <h5>{{ convertTimeText(offerSegment.FlightTime)
                            }}
                          </h5>
                          <div class="position-relative my-4">
                            <hr class="bg-primary opacity-5 position-relative" />
                            <div class="icon-container" style="display: flex; justify-content: space-between; ">
                              <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                                style="transform: translate(0%, -150%);">
                              </div>
                              <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                                style="transform: translate(0%, -150%);">
                              </div>
                            </div>
                            <div
                              class="icon-md bg-primary text-white rounded-circle position-absolute top-0 start-50 translate-middle">
                              <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
                            </div>
                          </div>
                        </b-col>

                        <b-col sm="4">
                          <h4> {{ offerSegment.Arrival.Date.split(" ")[1]
                            }}
                          </h4>
                          <p class="fw-bold text-black mb-0">{{
                            formatDate(offerSegment.Arrival.Date) }}</p>
                          <p class="mb-0">{{ offerSegment.Arrival.Iata }}<span
                              v-if="offerSegment.Arrival.Terminal">-Терминал</span>
                            {{
                              offerSegment.Arrival.Terminal || '' }}
                          </p>
                          <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                            offerSegment.Arrival.Iata).City}}</p>
                        </b-col>
                      </b-row>



                      <div v-if="offerSegment.Baggage" class="d-flex justify-content-end align-items-end w-100 mt-3">
                        <div class="d-flex mx-2 me-5">
                          <Briefcase class="mx-2" color="#3949AB" />
                          Гар тээш: ({{ offerSegment.Baggage.Count }})-{{ offerSegment.Baggage.BaggageType }}
                        </div>
                        <div v-if="offerSegment.CabinBaggage">
                          <div class="d-flex">
                            <Luggage class="mx-2" color="#3949AB" />
                            Тээш: ({{ offerSegment.Baggage.Count }})-{{ offerSegment.Baggage.BaggageType }}
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                    <div v-if="getAllSegmentss(index).return.length - 1 != segidxs">
                      <div v-if="segidxs < getAllSegmentsDates(index).length - 1"
                        class="card-footer pt-0 pb-4 d-flex align-items-center mw-100">
                        <div class="d-flex flex-row bg-light rounded-2 w-100 justify-content-between">
                          <div class="text-start fw-normal rounded-2 p-2 text-orange">


                            <div>
                              {{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                                offerSegment.Arrival.Iata).City}}
                              дээр
                              {{ timeDifference(offerSegment.Arrival.Date, getAllSegmentss(index).return[segidxs +
                                1].Departure.Date)
                              }}
                              хүлээнэ
                            </div>

                          </div>

                          <!-- Ачаа өөрөө авах шаардлагатай бол нэмэлт анхааруулга -->
                          <div v-if="offerSegment.SelfConnect == 'true'"
                            class=" fw-normal  mt-1 p-2 d-flex text-center align-items-center">
                            <TriangleAlert :size="24" />
                            <h6 class="fw-light mb-0">
                              {{ t('txtSelfTBag') }} <br />
                              <span class="fst-normal">(Self-transfer baggage)</span>
                            </h6>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div v-else class="d-flex flex-row bg-light rounded-2 w-100 justify-content-between">
                      <div v-if="offerSegment.SelfConnect == 'true'"
                        class=" fw-normal  mt-1 p-2 d-flex text-center align-items-center justify-content-sm-end">
                        <TriangleAlert :size="24" />
                        <h6 class="fw-light mb-0">
                          {{ t('txtSelfTBag') }} <br />
                          <span class="fst-normal">(Self-transfer baggage)</span>
                        </h6>
                      </div>
                      <!-- <button v-on:click="getAllSegmentss(index)">{{ test(index)[test(index).length - 1].Rph
                        }}</button> -->
                    </div>


                  </div>

                  <!-- <div v-if="segidxs < getAllSegmentsDates(index).length - 1" class="card-footer">
                    <Repeat color="#3949AB" />
                    <div class="bg-light text-start fw-normal rounded-2 mt-3 p-2 text-orange ">
                      {{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                        offerSegment.Arrival.Iata).City }} дээр {{
                        timeDifference(offerSegment.Arrival.Date, getAllSegmentsDates(index)[segidxs +
                          1].Departure.Date)
                      }} хүлээнэ
                      <h6 v-if="offerSegment.SelfConnect == 'true'" class="fw-medium mb-0">
                        Ачаагаа өөрөө авч, дахин бүртгүүлэх шаардлагатай <br />
                        (Self-transfer baggage)
                      </h6>
                    </div>
                  </div> -->



                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <!-- <button v-on:click="getAllSegmentss(index)">{{ test(index)[test(index).length - 1].Rph
              }}</button> -->
            <div v-if="show == 1" class="m-3 fw-bold d-flex align-items-center">
              <PlaneTakeoff color="#009dff" :size="32" class="me-3" />
              {{ t('txtFromFlight') }}
            </div>
            <div v-for="(offerSegment, segidxs) in getAllSegmentss(index).go" :key="'go-' + segidxs">
              <div v-if="show == 3" class="m-3 fw-bold d-flex align-items-center">
                <PlaneTakeoff color="#009dff" :size="32" class="me-3" />
                {{ t('txtFromFlight') }}
              </div>
              <div class="d-grid">
                <div class="d-flex ">
                  <div class="d-flex p-2 align-items-center fw-medium">
                    <div class="fs-5 text-black">{{ segidxs + 1 }}</div>
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- Зураас -->
                      <div style=" width: 2px; height: 210px; background-color: #3949AB;"></div>


                      <!-- Дунд Repeat дүрс -->
                      <div v-if="getAllSegmentss(index).go.length - 1 != segidxs">
                        <div v-if="segidxs < getAllSegmentsDates(index).length - 1"
                          class="mt-4 bg-light rounded-circle p-3">
                          <Repeat :size="36" color="#3949AB" />
                        </div>
                        <div v-else style="width: 67px;"></div>
                      </div>
                      <div v-else style="width: 67px;"></div>

                    </div>
                  </div>



                  <div class="w-100">
                    <b-card-header>
                      <div class="d-sm-flex justify-content-sm-between align-items-center">

                        <div class="d-flex mb-2 mb-sm-0">
                          <img :src="offerSegment && offerSegment.MarketingAirline
                            ? 'https://api.echina.mn/assets/d/' + offerSegment.MarketingAirline + '.png'
                            : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />

                          <h6 class="fw-normal mb-0">
                            {{Array.isArray(StoreAirCompany) ? StoreAirCompany.find((airline: any) => airline.Code ===
                              offerSegment.MarketingAirline)?.Value || offerSegment.MarketingAirlineName :
                              StoreAirCompany?.Value}}
                            ({{ offerSegment.FlightNum || 'SA-1254' }})
                          </h6>
                        </div>
                        <h6 class="fw-normal mb-0"><span class="text-body">{{ t('txtClass') }}:</span> {{
                          offerSegment.FlightClass
                        }}
                        </h6>
                      </div>
                    </b-card-header>

                    <b-card-body class="p-4 pb-3">
                      <b-row class="g-4">
                        <b-col sm="4">
                          <h4> {{
                            offerSegment.Departure.Date.split(" ")[1] }}
                          </h4>
                          <p class="fw-bold text-black mb-0">{{
                            formatDate(offerSegment.Departure.Date) }}
                          </p>
                          <p class="mb-0">{{ offerSegment.Departure.Iata
                            }}<span v-if="offerSegment.Departure.Terminal">-Терминал</span> {{
                              offerSegment.Departure.Terminal || '' }}
                          </p>
                          <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                            offerSegment.Departure.Iata)?.City || offerSegment.Departure.City}}</p>

                        </b-col>

                        <b-col sm="4" class="my-sm-auto text-center">
                          <h5>{{ convertTimeText(offerSegment.FlightTime)
                            }}
                          </h5>
                          <div class="position-relative my-4">
                            <hr class="bg-primary opacity-5 position-relative" />
                            <div class="icon-container" style="display: flex; justify-content: space-between; ">
                              <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                                style="transform: translate(0%, -150%);">
                              </div>
                              <div class="icon-xs bg-secondary text-white rounded-circle position-relative"
                                style="transform: translate(0%, -150%);">
                              </div>
                            </div>
                            <div
                              class="icon-md bg-primary text-white rounded-circle position-absolute top-0 start-50 translate-middle">
                              <font-awesome-icon :icon="faPlane" class="fa-fw rtl-flip" />
                            </div>
                          </div>
                        </b-col>

                        <b-col sm="4">
                          <h4> {{ offerSegment.Arrival.Date.split(" ")[1]
                            }}
                          </h4>
                          <p class="fw-bold text-black mb-0">{{
                            formatDate(offerSegment.Arrival.Date) }}</p>
                          <p class="mb-0">{{ offerSegment.Arrival.Iata }}<span
                              v-if="offerSegment.Arrival.Terminal">-Терминал</span>
                            {{
                              offerSegment.Arrival.Terminal || '' }}
                          </p>
                          <p class="mb-0">{{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                            offerSegment.Arrival.Iata)?.City || offerSegment.Arrival.City}}</p>
                        </b-col>
                      </b-row>



                      <div v-if="offerSegment.Baggage" class="d-flex justify-content-end align-items-end w-100 mt-3">
                        <div class="d-flex mx-2 me-5">
                          <Briefcase class="mx-2" color="#3949AB" />
                          Гар тээш: ({{ offerSegment.Baggage.Count }})-{{ offerSegment.Baggage.BaggageType }}
                        </div>
                        <div v-if="offerSegment.CabinBaggage">
                          <div class="d-flex">
                            <Luggage class="mx-2" color="#3949AB" />
                            Тээш: ({{ offerSegment.Baggage.Count }})-{{ offerSegment.Baggage.BaggageType }}
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                    <div v-if="getAllSegmentss(index).go.length - 1 != segidxs">
                      <div v-if="segidxs < getAllSegmentsDates(index).length - 1"
                        class="card-footer pt-0 pb-4 d-flex align-items-center mw-100">
                        <div class="d-flex flex-row bg-light rounded-2 w-100 justify-content-between">
                          <div class="text-start fw-normal rounded-2 p-2 text-orange">


                            <div>
                              {{StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                                offerSegment.Arrival.Iata)?.City || offerSegment.Arrival.City}}
                              дээр
                              {{ timeDifference(offerSegment.Arrival.Date, getAllSegmentsDates(index)[segidxs +
                                1].Departure.Date)
                              }}
                              хүлээнэ
                            </div>

                          </div>

                          <!-- Ачаа өөрөө авах шаардлагатай бол нэмэлт анхааруулга -->
                          <div v-if="offerSegment.SelfConnect == 'true'"
                            class=" fw-normal  mt-1 p-2 d-flex text-center align-items-center">
                            <TriangleAlert :size="24" />
                            <h6 class="fw-light mb-0">
                              {{ t('txtSelfTBag') }} <br />
                              <span class="fst-normal">(Self-transfer baggage)</span>
                            </h6>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div v-else class="d-flex flex-row bg-light rounded-2 w-100 justify-content-between">
                      <div v-if="offerSegment.SelfConnect == 'true'"
                        class=" fw-normal  mt-1 p-2 d-flex text-center align-items-center justify-content-sm-end">
                        <TriangleAlert :size="24" />
                        <h6 class="fw-light mb-0">
                          {{ t('txtSelfTBag') }} <br />
                          <span class="fst-normal">(Self-transfer baggage)</span>
                        </h6>
                      </div>
                      <!-- <button v-on:click="getAllSegmentss(index)">{{ test(index)[test(index).length - 1].Rph
                        }}</button> -->
                    </div>


                  </div>

                  <!-- <div v-if="segidxs < getAllSegmentsDates(index).length - 1" class="card-footer">
                    <Repeat color="#3949AB" />
                    <div class="bg-light text-start fw-normal rounded-2 mt-3 p-2 text-orange ">
                      {{ StoreAirPorts.find((AirPorts: any) => AirPorts.Iata ===
                        offerSegment.Arrival.Iata).City }} дээр {{
                        timeDifference(offerSegment.Arrival.Date, getAllSegmentsDates(index)[segidxs +
                          1].Departure.Date)
                      }} хүлээнэ
                      <h6 v-if="offerSegment.SelfConnect == 'true'" class="fw-medium mb-0">
                        Ачаагаа өөрөө авч, дахин бүртгүүлэх шаардлагатай <br />
                        (Self-transfer baggage)
                      </h6>
                    </div>
                  </div> -->



                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>{{ StoreflightInfos[index].Offers.OfferInfo }} + {{ getAllSegments(index) }}</div>

      </b-tab>
      <b-tab>
        <template #title> {{ t('txtBagRule') }} </template>
        <div v-if="Array.isArray(StoreflightInfos) && StoreflightInfos[index]">



          <div v-if="Array.isArray(StoreflightInfos[index].Offers.OfferInfo)">
            <div v-for="(offer, idx) in StoreflightInfos[index].Offers.OfferInfo" :key="idx">
              <div v-if="Array.isArray(offer.Segments.OfferSegment)">
                <div
                  v-if="StoreflightInfos[index].Offers.OfferInfo.length === 1 && StoreflightInfos[index].Offers.OfferInfo[0].Segments.OfferSegment.length === 1"
                  v-for="(offerSegment, segidx) in offer.Segments.OfferSegment" :key="segidx">

                  <b-card no-body class="border mb-3">
                    <b-card-header class="d-flex align-items-center border-bottom">
                      <img :src="offerSegment.MarketingAirline
                        ? 'https://api.echina.mn/assets/d/' + offerSegment.MarketingAirline + '.png'
                        : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                      <b-card-title tag="h5" class="mb-0">{{
                        offerSegment.Departure.Iata }} -
                        {{ offerSegment.Arrival.Iata }}</b-card-title>
                    </b-card-header>

                    <b-card-body>
                      <div class="table-responsive-lg">
                        <table class="table caption-bottom mb-0">
                          <caption class="pb-0">
                            *1PC = 23KG
                          </caption>
                          <thead class="table-dark">
                            <tr>
                              <th scope="col" class="border-0 rounded-start">Ачаа тээшийн төрөл</th>
                              <th scope="col" class="border-0">Хэмжих нэгж</th>
                              <th scope="col" class="border-0">Тоо/ш : Хэмжээ</th>
                            </tr>
                          </thead>
                          <tbody class="border-top-0" v-if="offerSegment.Baggage || offerSegment.CabinBaggage">
                            <tr v-if="offerSegment.Baggage">
                              <td>Baggage</td>
                              <td>{{ offerSegment.Baggage.BaggageType }}</td>
                              <td>{{ offerSegment.Baggage.Count }}</td>
                            </tr>
                            <tr v-if="offerSegment.CabinBaggage">
                              <td>CabinBaggage</td>
                              <td>
                                {{ offerSegment.CabinBaggage.BaggageType }}
                              </td>
                              <td>
                                {{ offerSegment.CabinBaggage.Count }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div v-else v-for="(offerSegment, segidxs) in offer.Segments.OfferSegment" :key="segidxs">
                  <b-card no-body class="border mb-3">
                    <b-card-header class="d-flex align-items-center border-bottom">
                      <img :src="offerSegment.MarketingAirline
                        ? 'https://api.echina.mn/assets/d/' + offerSegment.MarketingAirline + '.png'
                        : fallbackLogo" alt="Airline logo" class="me-2" style="width: 30px; height: auto;" />
                      <b-card-title tag="h5" class="mb-0">{{
                        offerSegment.Departure.Iata }} -
                        {{ offerSegment.Arrival.Iata }}</b-card-title>
                    </b-card-header>

                    <b-card-body>
                      <div class="table-responsive-lg">
                        <table class="table caption-bottom mb-0">
                          <caption class="pb-0">
                            *1PC = 23KG
                          </caption>
                          <thead class="table-dark">
                            <tr>
                              <th scope="col" class="border-0 rounded-start">Ачаа тээшийн төрөл</th>
                              <th scope="col" class="border-0">Хэмжих нэгж</th>
                              <th scope="col" class="border-0">Тоо/ш : Хэмжээ</th>
                            </tr>
                          </thead>
                          <tbody class="border-top-0" v-if="offerSegment.Baggage || offerSegment.CabinBaggage">
                            <tr v-if="offerSegment.Baggage">
                              <td>Baggage</td>
                              <td>{{ offerSegment.Baggage.BaggageType }}</td>
                              <td>{{ offerSegment.Baggage.Count }}</td>
                            </tr>
                            <tr v-if="offerSegment.CabinBaggage">
                              <td>CabinBaggage</td>
                              <td>
                                {{ offerSegment.CabinBaggage.BaggageType }}
                              </td>
                              <td>
                                {{ offerSegment.CabinBaggage.Count }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab>
        <template #title> {{ t('txtCancelationRule') }} </template>
        <b-card no-body class="border">
          <b-card-header class="d-flex align-items-center border-bottom">
            <img :src="element9" class="h-20px me-1" alt="" />
            <b-card-title tag="h5" class="mb-0">BOM - CDG</b-card-title>
          </b-card-header>

          <b-card-body>
            <div class="table-responsive-lg">
              <table class="table caption-bottom mb-0">
                <caption class="pb-0">
                  *From The Date Of Departure
                </caption>
                <thead class="table-dark">
                  <tr>
                    <th scope="col" class="border-0 rounded-start">Time Frame</th>
                    <th scope="col" class="border-0 rounded-end">Air Free + MMT Free</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr>
                    <td>0 hours to 24 hours</td>
                    <td>Non Refundable</td>
                  </tr>
                  <tr>
                    <td>24 hours to 365 days</td>
                    <td>{{ currency }}16,325 + {{ currency }}250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-body>
        </b-card>
      </b-tab>
    </b-tabs>
  </div>
  <div v-else>{{ StoreflightInfos }}</div>
</template>

<script lang="ts" setup>
import element9 from '@/assets/images/element/09.svg'
import { currency } from '@/helpers/constants'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { Repeat, Briefcase, Luggage, TriangleAlert } from 'lucide-vue-next';
import CabCard from '../../../cab/List/components/CabCard.vue'
import { cabsLists } from '../../../cab/List/data'
import { computed, ref, watchEffect } from 'vue'
import fallbackLogo from '@/assets/images/element/09.svg'
import { useFlightStore } from '@/stores/flight';

import { PlaneTakeoff } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const props = defineProps({
  flight: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const flightStore = useFlightStore();

const show = ref<number>(Number(sessionStorage.getItem("flight")) || 1);
const trips = parseInt(sessionStorage.getItem("trips") || "0", 10);

// Access state
const StoreflightInfos = computed(() => flightStore.flightInfos || flight.value);
const StoreAirCompany = computed(() => flightStore.AirCompany || []);
const StoreAirPorts = computed(() => flightStore.AirPorts || []);

const flights = computed(() => {
  const flightArray = Array.isArray(props.flight) ? props.flight : [props.flight];

  return flightArray.map((flight) => {
    const offerInfoArray = Array.isArray(flight.Offers?.OfferInfo)
      ? flight.Offers.OfferInfo
      : [flight.Offers?.OfferInfo];

    return {
      ...flight,
      Offers: {
        ...flight.Offers,
        OfferInfo: offerInfoArray
      }
    };
  });
});



watchEffect(() => {
  if (flightStore.flightInfos.length == 0) {
    console.log(props.flight)
    flightStore.flightInfos = flights; // props.flight-оос өгөгдөл оноож байна
  } else {
    console.log(props.flight)
  }
});



const getFlightData = (index: number) => {
  return StoreflightInfos.value[index] || { Offers: { OfferInfo: [] } };
};

const test = (index: number) => {
  // console.log(getFlightData(index).Offers.OfferInfo.flatMap((Rph: any) => Rph) || [])
  return getFlightData(index).Offers.OfferInfo.flatMap((Rph: any) => Rph) || []
}

// const getAllSegments = (index: number) => {
//   console.log(getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [])
//   return getFlightData(index).Offers.OfferInfo.flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment) || [];
// };
const getAllSegments = (index: number) => {
  const data = getFlightData(index);
  const offerInfos = Array.isArray(data.Offers?.OfferInfo)
    ? data.Offers.OfferInfo
    : [data.Offers?.OfferInfo];

  const segments = offerInfos.flatMap((offer) => offer.Segments?.OfferSegment || []);
  console.log(segments);
  return segments;
};


const getAllSegmentss = (index: number) => {
  const offers = getFlightData(index).Offers.OfferInfo
  // console.log(offers)
  if (show.value == 3) {
    const retValue = {
      go: offers.flatMap((offer: any) =>
        offer.Segments.OfferSegment
      ) || [], return: []
    }
    return retValue
  }

  if (offers.length > 1) {
    // Хоёр OfferInfo-ийн сегментүүдийг нэгтгэж буцаана
    const goSegments = offers
      .filter((offer: any) => offer.Rph === "1")
      .flatMap((offer: any) => offer.Segments?.OfferSegment || [])

    const returnSegments = offers
      .filter((offer: any) => offer.Rph === "2")
      .flatMap((offer: any) => offer.Segments?.OfferSegment || [])



    const retValue = {
      go: goSegments, return: returnSegments
    }

    return retValue
  }
  const retValue = {
    go: offers.flatMap((offer: any) =>
      offer.Segments.OfferSegment.filter((seg: any) => seg.Rph === "1")
    ) || [], return: offers.flatMap((offer: any) =>
      offer.Segments.OfferSegment.filter((seg: any) => seg.Rph === "2")
    ) || []
  }
  // Нэг сегменттэй байвал шууд буцаана
  return retValue
}

const moreFlights = (index: number) => {
  const data = getFlightData(index);
  let filter: any[][] = [];  // Array of arrays to store segments for each i value

  const tripCount = trips.toString();


  // Iterate through Rph values starting from 1, ending at `trips.value`
  for (let i = 1; i <= trips; i++) {
    let currentFilter: any[] = [];

    if (data.some((offer: { Rph: string }) => offer.Rph === tripCount)) {
      currentFilter = data
        .filter((offer: { Rph: string }) => offer.Rph === i.toString())
        .flatMap((offer: { Segments: { OfferSegment: any[] } }) => offer.Segments.OfferSegment);
    } else {
      currentFilter = data
        .flatMap((offer: { Segments?: { OfferSegment?: any[] } }) => offer.Segments?.OfferSegment || [])
        .filter((segment: { Rph: string }) => segment.Rph === i.toString());
    }

    // Store the current filter array for each i value
    filter.push(currentFilter);
  }



  return filter;
};

const isFirstSegmentWithRph = (rph: number, index: number, currentIndex: number) => {
  const segments = getAllSegments(index);

  // Find all segments with matching Rph
  const matchingSegments = segments.filter((seg: { Rph: number; }) => seg.Rph === rph);

  // If no matching segments found
  if (matchingSegments.length === 0) {
    return false;
  }

  // Get the first matching segment's index in the original array
  const firstMatchIndex = segments.findIndex((seg: { Rph: number; }) => seg.Rph === rph);

  // console.log(firstMatchIndex === currentIndex)

  // // Check if current segment is the first one with this Rph
  return firstMatchIndex === currentIndex;
};

const getTotalStops = (index: number) => getAllSegments(index).length - 1;
const getStopIatas = (index: number) => getAllSegments(index).slice(0, -1).map((seg: { Arrival: { Iata: any } }) => seg.Arrival.Iata);
const getFirstDeparture = (index: number) => getAllSegments(index)[0]?.Departure.Iata || "N/A";
const getFirstDepartureTime = (index: number) => getAllSegments(index)[0]?.Departure.Date || "N/A";
const getLastArrival = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Iata || "N/A";
const getLastArrivalTime = (index: number) => getAllSegments(index).slice(-1)[0]?.Arrival.Date || "N/A";
const getTotalFlightTime = (index: number) => {
  const totalMinutes = getAllSegments(index).reduce(
    (sum: number, seg: { FlightMinutes: string }) => sum + parseInt(seg.FlightMinutes, 10),
    0
  );

  const hours = Math.floor(totalMinutes / 60); // Бүтэн цагийг олно
  const minutes = totalMinutes % 60; // Үлдсэн минутыг олно

  return `${hours} ${t('txtHour')} ${minutes} ${t('txtMin')}`; // Цаг, минутын форматаар буцаана
};

const getLayoverTime = (arrival: string, nextDeparture: string) => {
  if (!arrival || !nextDeparture) return '';

  const arrivalTime = new Date(arrival).getTime();
  const nextDepartureTime = new Date(nextDeparture).getTime();

  const layoverMinutes = Math.floor((nextDepartureTime - arrivalTime) / (1000 * 60)); // Минут хөрвүүлэлт

  if (layoverMinutes <= 0) return ''; // Сөрөг утгаас сэргийлэх

  const hours = Math.floor(layoverMinutes / 60);
  const minutes = layoverMinutes % 60;

  return `${hours} цаг ${minutes} мин`;
};



const getAllSegmentsDates = (index: number) => {
  return getFlightData(index).Offers.OfferInfo
    .flatMap((offer: { Segments: { OfferSegment: any } }) => offer.Segments.OfferSegment)
    .sort((a: { Departure: { Date: string | number | Date } }, b: { Departure: { Date: string | number | Date } }) => {
      // Convert both dates to Date objects, ensuring they're valid.
      const departureA = new Date(a.Departure.Date);
      const departureB = new Date(b.Departure.Date);

      // Ensure the dates are valid before comparing them
      if (isNaN(departureA.getTime()) || isNaN(departureB.getTime())) {
        return 0; // or handle as needed if one of the dates is invalid
      }

      return departureA.getTime() - departureB.getTime(); // Subtracting as timestamps
    }) || [];
};






const flight = computed(() => props.flight || [])
const index = computed(() => props.index as number);

function convertTimeText(input: string): string {
  const [hours, minutes, seconds] = input.split(":").map(Number);
  const hourText = hours ? `${hours} цаг` : "";
  const minuteText = minutes ? `${minutes} мин` : " ";
  return [hourText, minuteText].filter(Boolean).join(" ");
}

function formatDate(input: string): string {
  const [day, month, yearAndTime] = input.split(".");
  const [year, time] = yearAndTime.split(" ");
  return `${year}-${month}-${day}`;
}

function timeDifference(start: string, end: string): string {
  // Огнооны форматыг ISO 8601 хэлбэрт хөрвүүлэх
  const startDateFormatted = start.split(' ')[0].split('.').reverse().join('-') + 'T' + start.split(' ')[1] + ':00';
  const endDateFormatted = end.split(' ')[0].split('.').reverse().join('-') + 'T' + end.split(' ')[1] + ':00';

  // start болон end утгуудыг Date объект руу хөрвүүлэх
  const startDate = new Date(startDateFormatted);
  const endDate = new Date(endDateFormatted);

  // Нийт минутын зөрүү
  const diffMinutes = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60));

  // Цаг болон минут болгон хуваах
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  return `${hours} цаг ${minutes} минут`;
}




</script>

<style>
.flight-counter {
  width: 30px;
  height: 30px;
  background-color: #ff6f00;
  /* Улбар шар өнгө */
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 15px;
}


.bg-light {
  background-color: #f8f9fa;
}

.warning-icon {
  width: 18px;
  height: 18px;
}
</style>

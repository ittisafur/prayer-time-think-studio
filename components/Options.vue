<template>
  <div>
    <div class="container settings-form-container">
      <form class="p-4 settingsForm" id="form-location">
        <div class="mb-4 d-flex justify-content-between align-items-center">
          <div class="formheader">Settings</div>
          <img
            alt="close"
            class="menuClosebtn lazy"
            src="/static/live125/images/blank.gif"
            data-src="/static/live125/themes/theme20/images/header-icons/menuclosebtn.png"
            id="settingsclose"
            data-toggle="modal"
            data-target="#preferences-callout"
          />
        </div>
        <div class="mt-4 mb-2 form-row">
          <div class="col-lg-12">
            <div class="formsubheading">
              PRAYER CALCULATION
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="mb-3 col-lg-12">
            <label for="preferenceCalculationMethod">
              Calculation Method&nbsp;
              <span
                data-toggle="tooltip"
                data-placement="right"
                title="By choosing a different Calculation Method, prayer times for Fajr and Isha will be impacted. Choose the Calculation Method relevant to your location."
              >
                <span class="glyphter icon-info"></span>
              </span>
            </label>
            <select
              class="form-control"
              name="preferenceCalculationMethod"
              @change="handleChangeMethod"
              v-model="method"
            >
              <option value="15">
                Algerian Ministry of Religious Affairs and Wakfs
              </option>
              <option value="16">
                Diyanet İşleri Başkanlığı, Turkey
              </option>
              <option value="2">
                Egyptian General Authority of Survey
              </option>
              <option value="5">
                Islamic Society of North America
              </option>
              <option value="13">
                JAKIM
              </option>
              <option value="9">
                Majlis Ugama Islam Singapura
              </option>
              <option value="1">
                Muslim World League
              </option>
              <option value="18">
                Shia Ithna-Ashari, Leva Institute, Qum (Jafri)
              </option>
              <option value="11">
                Sihat/Kemenag
              </option>
              <option value="14">
                Spiritual Administration of Muslims of Russia
              </option>
              <option value="12">
                Tunisian Ministry of Religious Affairs
              </option>
              <option value="4">
                Umm Al-Qura
              </option>
              <option value="8">
                Union des Organisations Islamiques de France
              </option>
              <option value="3" selected>
                University Of Islamic Sciences, Karachi (Default)
              </option>

              <option value="6">
                Custom - Fajar and isha Angle
              </option>
              <option value="7">
                Custom - Fajr Angle and Isha time adjustment
              </option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="mb-3 col-lg-6 col-12">
            <label for="time-zone-1"
              >Fajr angle&nbsp;
              <span
                data-toggle="tooltip"
                data-placement="right"
                title="Fajr angle is derived from your selection of calculation method. Select 'custom' in calculation method to adjust Fajr angle."
              >
                <span class="glyphter icon-info"></span>
              </span>
            </label>
            <select
              class="form-control a-fajr"
              name=""
              id="time-zone-1"
              disabled="true"
            >
              <option>10</option>
              <option>10.5</option>
              <option>11.0</option>
              <option>11.5</option>
              <option>12.0</option>
              <option>12.5</option>
              <option>13.0</option>
              <option>13.5</option>
              <option>14.0</option>
              <option>14.5</option>
              <option>15.0</option>
              <option>15.5</option>
              <option>16.0</option>
              <option>16.5</option>
              <option>17.0</option>
              <option>17.5</option>
              <option selected>18.0</option>
              <option>18.5</option>
              <option>19.0</option>
              <option>19.5</option>
              <option>20.0</option>
              <option>20.5</option>
              <option>21.0</option>
              <option>21.5</option>
              <option>22.0</option>
              <option>22.5</option>
              <option>23.0</option>
              <option>23.5</option>
              <option>24.0</option>
              <option>24.5</option>
            </select>
          </div>
          <div
            class="mb-3 col-lg-6 col-12"
            id="isha-angle-or-isha-time-adjustment"
          >
            <label for="time-zone-2"
              ><span id="label-isha-angle-or-time">Isha angle</span>&nbsp;
              <span
                id="isha-field-tooltip"
                data-toggle="tooltip"
                data-placement="right"
                title="Isha angle is derived from your selection of calculation method. Select 'custom' in calculation method to adjust Isha angle."
              >
                <span class="glyphter icon-info"></span
              ></span>
            </label>
            <select
              class="form-control a-isha"
              name=""
              id="time-zone-2"
              disabled="true"
            >
              <option>10</option>
              <option>10.5</option>
              <option>11.0</option>
              <option>11.5</option>
              <option>12.0</option>
              <option>12.5</option>
              <option>13.0</option>
              <option>13.5</option>
              <option>14.0</option>
              <option>14.5</option>
              <option>15.0</option>
              <option>15.5</option>
              <option>16.0</option>
              <option>16.5</option>
              <option>17.0</option>
              <option>17.5</option>
              <option selected>18.0</option>
              <option>18.5</option>
              <option>19.0</option>
              <option>19.5</option>
              <option>20.0</option>
              <option>20.5</option>
              <option>21.0</option>
              <option>21.5</option>
              <option>22.0</option>
              <option>22.5</option>
              <option>23.0</option>
              <option>23.5</option>
              <option>24.0</option>
              <option>24.5</option>
            </select>
          </div>
        </div>

        <div class="form-row ">
          <div class="mb-3 col-12 col-lg-6">
            <label for="dhuhar-time-after-zawal"
              >Dhuhr time after Zawal&nbsp;
              <span
                data-toggle="tooltip"
                data-placement="left"
                title="Enter the number of minutes after zawal time when you wish to offer Dhuhr prayer."
              >
                <span class="glyphter icon-info"></span>
              </span>
            </label>
            <select class="form-control" name="" id="dhuhar-time-after-zawal">
              {
              <option selected value="1">1&#32;minute&#32;(Default)</option>
              <option value="2">2&#32;minutes&#32;</option>
              <option value="3">3&#32;minutes&#32;</option>
              <option value="4">4&#32;minutes&#32;</option>
              <option value="5">5&#32;minutes&#32;</option>
              <option value="6">6&#32;minutes&#32;</option>
              <option value="7">7&#32;minutes&#32;</option>
              <option value="8">8&#32;minutes&#32;</option>
              <option value="9">9&#32;minutes&#32;</option>
              <option value="10">10&#32;minutes&#32;</option>
              <option value="11">11&#32;minutes&#32;</option>
              <option value="12">12&#32;minutes&#32;</option>
              <option value="13">13&#32;minutes&#32;</option>
              <option value="14">14&#32;minutes&#32;</option>
              <option value="15">15&#32;minutes&#32;</option>
              <option value="16">16&#32;minutes&#32;</option>
              <option value="17">17&#32;minutes&#32;</option>
              <option value="18">18&#32;minutes&#32;</option>
              <option value="19">19&#32;minutes&#32;</option>
              <option value="20">20&#32;minutes&#32;</option>
              <option value="21">21&#32;minutes&#32;</option>
              <option value="22">22&#32;minutes&#32;</option>
              <option value="23">23&#32;minutes&#32;</option>
              <option value="24">24&#32;minutes&#32;</option>
              <option value="25">25&#32;minutes&#32;</option>
              <option value="26">26&#32;minutes&#32;</option>
              <option value="27">27&#32;minutes&#32;</option>
              <option value="28">28&#32;minutes&#32;</option>
              <option value="29">29&#32;minutes&#32;</option>
              <option value="30">30&#32;minutes&#32;</option>
              <option value="31">31&#32;minutes&#32;</option>
              <option value="32">32&#32;minutes&#32;</option>
              <option value="33">33&#32;minutes&#32;</option>
              <option value="34">34&#32;minutes&#32;</option>
              <option value="35">35&#32;minutes&#32;</option>
              <option value="36">36&#32;minutes&#32;</option>
              <option value="37">37&#32;minutes&#32;</option>
              <option value="38">38&#32;minutes&#32;</option>
              <option value="39">39&#32;minutes&#32;</option>
              <option value="40">40&#32;minutes&#32;</option>
              <option value="41">41&#32;minutes&#32;</option>
              <option value="42">42&#32;minutes&#32;</option>
              <option value="43">43&#32;minutes&#32;</option>
              <option value="44">44&#32;minutes&#32;</option>
              <option value="45">45&#32;minutes&#32;</option>
              <option value="46">46&#32;minutes&#32;</option>
              <option value="47">47&#32;minutes&#32;</option>
              <option value="48">48&#32;minutes&#32;</option>
              <option value="49">49&#32;minutes&#32;</option>
              <option value="50">50&#32;minutes&#32;</option>
              <option value="51">51&#32;minutes&#32;</option>
              <option value="52">52&#32;minutes&#32;</option>
              <option value="53">53&#32;minutes&#32;</option>
              <option value="54">54&#32;minutes&#32;</option>
              <option value="55">55&#32;minutes&#32;</option>
              <option value="56">56&#32;minutes&#32;</option>
              <option value="57">57&#32;minutes&#32;</option>
              <option value="58">58&#32;minutes&#32;</option>
              <option value="59">59&#32;minutes&#32;</option>
              <option value="60">60&#32;minutes&#32;</option>
            </select>
          </div>
          <div class="mb-3 col-12 col-lg-6">
            <label for="maghrib-time-after-sunset"
              >Maghrib time after Sunset&nbsp;
              <span
                data-toggle="tooltip"
                data-placement="left"
                title="Enter the number of minutes after sunset when you wish to offer Maghrib."
              >
                <span class="glyphter icon-info"></span>
              </span>
            </label>
            <select class="form-control" name="" id="maghrib-time-after-sunset">
              <option selected value="1">1&#32;minute&#32;(Default)</option>
              <option value="2">2&#32;minutes&#32;</option>
              <option value="3">3&#32;minutes&#32;</option>
              <option value="4">4&#32;minutes&#32;</option>
              <option value="5">5&#32;minutes&#32;</option>
              <option value="6">6&#32;minutes&#32;</option>
              <option value="7">7&#32;minutes&#32;</option>
              <option value="8">8&#32;minutes&#32;</option>
              <option value="9">9&#32;minutes&#32;</option>
              <option value="10">10&#32;minutes&#32;</option>
              <option value="11">11&#32;minutes&#32;</option>
              <option value="12">12&#32;minutes&#32;</option>
              <option value="13">13&#32;minutes&#32;</option>
              <option value="14">14&#32;minutes&#32;</option>
              <option value="15">15&#32;minutes&#32;</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="mb-3 col-12 col-lg-6">
            <label for="preferenceJuristicMethod"
              >Juristic settings&nbsp;
              <span
                data-toggle="tooltip"
                data-placement="left"
                title="Changing the Juristic settings will have an impact on Asr prayer time. Choose the Juristic Method relevant to your location."
              >
                <span class="glyphter icon-info"></span>
              </span>
            </label>
            <select
              class="form-control"
              name="preferenceJuristicMethod"
              id="preferenceJuristicMethod"
            >
              <option value="1" selected>Hanbali, Maliki, Shafi</option>
              <option value="2">Hanafi</option>
            </select>
          </div>
          <div class="mb-3 col-12 col-lg-6">
            <label for="preferenceHijriAdjustement"
              >Hijri Date Adjustment&nbsp;
              <span
                data-toggle="tooltip"
                data-placement="left"
                title="Our calendar depends on Mecca's Hijri date. If the calendar you are viewing is leading or lagging the Hijri date in your region, choose the relevant settings to adjust it."
              >
                <span class="glyphter icon-info"></span>
              </span>
            </label>
            <select
              class="form-control"
              name=""
              id="preferenceHijriAdjustement"
            >
              <option>+2</option>
              <option>+1</option>
              <option selected>0</option>
              <option>-1</option>
              <option>-2</option>
            </select>
          </div>
        </div>

        <div class="mb-2 d-flex justify-content-between align-items-center">
          <div class="formsubheading">LOCATION</div>
          <div>
            <label class="mx-2">Auto location</label>
            <label class="switch">
              <input
                class="primary"
                id="auto-location"
                type="checkbox"
                name="auto-location"
                checked
              />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="form-row data-toggle-form">
          <div class="mb-3 col-lg-12">
            <label for="user-manual-location">Current location</label>
            <input
              type="text"
              disabled="true"
              class="form-control"
              id="user-manual-location"
              placeholder="Current location"
              value="Abaipur, BD"
            />
            <div
              class="form-error-preferences validate-current-location d-none validation-error"
            >
              Please enter current location name
            </div>
          </div>
        </div>
        <div class="form-row data-toggle-form">
          <div class="mb-3 col-lg-6 col-12">
            <label for="user-manual-latitude"
              >Latitude&nbsp;
              <span
                data-toggle="tooltip"
                data-placement="right"
                title="If you know the latitude of your current location, please enter to get accurate prayer times."
              >
                <span class="glyphter icon-info"></span>
              </span>
            </label>
            <input
              type="number"
              disabled="true"
              class="form-control"
              id="user-manual-latitude"
              placeholder="74.0956"
              value="23.6"
              pattern="[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)"
              required="required"
            />
            <div
              class="form-error-preferences validate-lat d-none validation-error"
            >
              Please enter correct latitude longitude values
            </div>
          </div>

          <div class="mb-3 col-lg-6 col-12">
            <label for="user-manual-longitude"
              >Longitude&nbsp;
              <span
                data-toggle="tooltip"
                data-placement="right"
                title="If you know the longitude of your current location, please enter to get accurate prayer times."
              >
                <span class="glyphter icon-info"></span>
              </span>
            </label>
            <input
              type="number"
              disabled="true"
              class="form-control"
              id="user-manual-longitude"
              placeholder="32.0956"
              name="Longitute"
              value="89.333336"
            />
            <div
              class="form-error-preferences validate-long d-none validation-error"
            >
              Please enter correct latitude longitude values
            </div>
          </div>

          <div class="mb-3 col-12">
            <label for="user-manual-time-zone"
              >Time zone&nbsp;
              <span
                data-toggle="tooltip"
                data-placement="right"
                title="Please select your time zone from the options given below."
              >
                <span class="glyphter icon-info"></span>
              </span>
            </label>

            <select
              class="form-control selectpicker"
              name=""
              id="user-manual-time-zone"
              disabled
            >
              <option>Asia/Dhaka</option>
            </select>

            <div
              class="form-error-preferences validate-time-zone d-none validation-error"
            >
              Please select time zone
            </div>
          </div>
        </div>

        <div
          id="daylight-adjustment-fields"
          class="form-row data-toggle-form d-none"
        >
          <div class="mb-3 col-12">
            <label for="dayLightAdjustment"
              >Daylight adjustment&nbsp;
              <span
                data-toggle="tooltip"
                data-placement="right"
                title="IslamicFinder is detecting daylight saving automatically according to your current location. If you still face any difference in prayer times then you can adjust it accordingly."
              >
                <span class="glyphter icon-info"></span>
              </span>
            </label>
            <select
              class="form-control"
              name="daylight-adjust"
              id="daylight-adjust"
              disabled="true"
            >
              <option value="-2">-2</option>
              <option value="-1">-1</option>
              <option value="0" selected>0</option>
              <option value="1">+1</option>
              <option value="2">+2</option>
            </select>
          </div>
          <div class="mb-3 col-lg-6 col-12">
            <label for="daylight-start">Starting Date</label>
            <div class="input-group">
              <input
                class="form-control"
                readonly
                autocomplete="off"
                name="daylight-start"
                id="daylight-start"
                placeholder="Choose Date"
                value=""
              />
              <a class="input-group-append">
                <em
                  class="Glyphter icon-islamic-calendar input-group-text"
                ></em>
              </a>
            </div>
            <div
              class="form-error-preferences validate-day-light-savings-start-date d-none validation-error"
            >
              Please select daylight savings start date
            </div>
          </div>

          <div class="mb-3 col-lg-6 col-12">
            <label for="daylight-end">Ending Date</label>
            <div class="input-group">
              <input
                class="form-control"
                readonly
                autocomplete="off"
                name="daylight-end"
                id="daylight-end"
                placeholder="Choose Date"
                value=""
              />
              <a class="input-group-append">
                <em
                  class="Glyphter icon-islamic-calendar input-group-text"
                ></em>
              </a>
            </div>
            <div
              class="form-error-preferences validate-day-light-savings-end-date d-none validation-error"
            >
              Please select daylight savings end date
            </div>
          </div>
        </div>
      </form>
      <div class="stg-footer">
        <div
          class="col-12 d-flex justify-content-md-center justify-content-around"
        >
          <button
            type="button"
            class="btn button-black reset-btn"
            id="reset-preferences"
          >
            Reset
          </button>
          <button
            type="button"
            class="btn button-dark save-preferences save-btn"
          >
            Save & Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

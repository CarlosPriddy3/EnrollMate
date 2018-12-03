<template>
  <div class="Mat" id="mat">
    <button
      type="button"
      class="btn"
    @click="showModal">
    Math
  </button>
    <modal v-show="isModalVisible" @close="closeModal">
    <h3 slot="header"> Math </h3>
    <p slot="body">
    <v-expansion-panel expand>
    <v-expansion-panel-content :class="course.CURRENT_ENRL/course.MAX_ENRL >= .85 ? 'red lighten-4' : 'grey lighten-3'" v-for="course in matClasses" :key="course.id">
      <div slot="header"><i class="fas fa-fire" v-if="course.CURRENT_ENRL/course.MAX_ENRL >= .85" style="color: #FF5722;"></i>  {{ course.CRS_NUMB + " - " + course.TITLE + ", " + course.FIRST_NAME + " " + course.INSTRUCTOR + " (" + course.CURRENT_ENRL + "/" + course.MAX_ENRL + ")"}}
      </div>
      <v-card-text class="grey lighten-5">
        <h2>{{course.TITLE}}</h2>
        <table>
          <tr>
            <th>CRN</th>
            <th>Current Enrollment / Class Capacity</th>
            <th>Instructor</th>
          </tr>
          <tr>
            <td>{{course.CRN}}</td>
            <td>{{course.CURRENT_ENRL}} / {{course.MAX_ENRL}}</td>
            <td>{{course.FIRST_NAME}} {{course.MI}} {{course.INSTRUCTOR}}</td>
          </tr>
          <tr>
            <th>Credit Hours</th>
            <th>Day/Time</th>
            <th>Building + Room</th>
          </tr>
          <tr>
            <td>{{course.CREDIT_HRS}}</td>
            <td>{{course.DAYS}}  {{course.START_TIME}}-{{course.END_TIME}}</td>
            <td>{{course.BLDG}} {{course.ROOM}}</td>
          </tr>
        </table>
        <figure>
          <svg class="chart" width="450" height="500">
            <g transform="scale(1, -1) translate(1, -450)">
              <rect width="50" :height="randomValues[Object.values(course)[22]][0] * 4" fill="royalblue"></rect>
              <text y="280" x="30" dy=".35em" fill="black" font="10px sans-serif" text-anchor="end" transform="scale(1, -1) translate(1, -300)">{{randomValues[course[".key"]][0]}}</text>
              <text y="307" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">Spring</text>
              <text y="320" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">2017</text>
            </g>
            <g transform="scale(1, -1) translate(61, -450)">
              <rect width="50" :height="randomValues[Object.values(course)[22]][1] * 4" fill="royalblue"></rect>
              <text y="280" x="30" dy=".35em" fill="black" font="10px sans-serif" text-anchor="end" transform="scale(1, -1) translate(1, -300)">{{randomValues[course[".key"]][1]}}</text>
              <text y="307" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">Summer</text>
              <text y="320" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">2017</text>
            </g>
            <g transform="scale(1, -1) translate(121, -450)">
              <rect width="50" :height="randomValues[Object.values(course)[22]][2] * 4" fill="royalblue"></rect>
              <text y="280" x="30" dy=".35em" fill="black" font="10px sans-serif" text-anchor="end" transform="scale(1, -1) translate(1, -300)">{{randomValues[course[".key"]][2]}}</text>
              <text y="307" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">Fall</text>
              <text y="320" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">2017</text>
            </g>
            <g transform="scale(1, -1) translate(181, -450)">
              <rect width="50" :height="randomValues[Object.values(course)[22]][3] * 4" fill="royalblue"></rect>
              <text y="280" x="30" dy=".35em" fill="black" font="10px sans-serif" text-anchor="end" transform="scale(1, -1) translate(1, -300)">{{randomValues[course[".key"]][3]}}</text>
              <text y="307" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">Spring</text>
              <text y="320" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">2018</text>
            </g>
            <g transform="scale(1, -1) translate(241, -450)">
              <rect width="50" :height="randomValues[Object.values(course)[22]][4] * 4" fill="royalblue"></rect>
              <text y="280" x="30" dy=".35em" fill="black" font="10px sans-serif" text-anchor="end" transform="scale(1, -1) translate(1, -300)">{{randomValues[course[".key"]][4]}}</text>
              <text y="307" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">Summer</text>
              <text y="320" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">2018</text>
            </g>
            <g transform="scale(1, -1) translate(301, -450)">
              <rect width="50" :height="course.CURRENT_ENRL * 4" fill="gold"></rect>
              <rect width="50" :height="course.MAX_ENRL * 4"
                    style="stroke: #ff0000;
                              stroke-width: 1;
                              fill: none;
                              ">
              </rect>
              <text y="280" x="30" dy=".35em" fill="black" font="10px sans-serif" text-anchor="end" transform="scale(1, -1) translate(1, -300)">{{course.CURRENT_ENRL}}</text>
              <text y="307" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">Fall</text>
              <text y="320" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">2018</text>
            </g>
            <g transform="scale(1, -1) translate(361, -450)">
              <rect width="50" :height="course.CURRENT_WAITLIST * 4" fill="green"></rect>
              <rect width="50" :height="course.WAIT_LIST_CAPACITY * 4"
                    style="stroke: #ff0000;
                              stroke-width: 1;
                              fill: none;
                              ">
              </rect>
              <text y="280" x="30" dy=".35em" fill="black" font="10px sans-serif" text-anchor="end" transform="scale(1, -1) translate(1, -300)">{{course.CURRENT_WAITLIST}}</text>
              <text y="307" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">Current</text>
              <text y="320" x="-2" dy=".35em" fill="black" font="10px sans-serif" transform="scale(1, -1) translate(1, -300)">WaitList</text>
            </g>
          </svg>
          <figcaption>Enrollment By Semester</figcaption>
        </figure>
        <figure>
          <svg height="250" width="800">
            <g class="grid x-grid" id="xGrid">
              <line x1="100" y1="0" x2="100" y2="175" style="stroke:rgb(0,0,0);stroke-width:2" />
            </g>
            <g class="grid y-grid" id="yGrid">
              <line x1="100" y1="175" x2="800" y2="175" style="stroke:rgb(0,0,0);stroke-width:2" />
            </g>
            <g class="labels x-labels">
              <text x="146" y="200">SPR 2017</text>
              <text x="229" y="200">SMR 2017</text>
              <text x="312" y="200">FALL 2017</text>
              <text x="395" y="200">SPR 2018</text>
              <text x="478" y="200">SMR 2018</text>
              <text x="561" y="200">FALL 2018</text>
              <text x="300" y="240" class="label-title">Semester</text>
            </g>
            <g class="labels y-labels">
              <text x="80" y="50">{{Math.round(course.CURRENT_ENRL * 1.25)}}</text>
              <text x="80" y="100">{{course.CURRENT_ENRL}}</text>
              <text x="80" y="150">{{Math.round(course.CURRENT_ENRL * 3 / 4)}}</text>
              <text x="05" y="100" class="label-title">Enrollment</text>
            </g>
            <g class="data" data-setname="Our first data set">
              <circle cx="166" :cy="200 - convertToRange(randomValues[Object.values(course)[22]][0], course.CURRENT_ENRL, course)" data-value="7.2" r="4"></circle>
              <circle cx="249" :cy="200 - convertToRange(randomValues[Object.values(course)[22]][1], course.CURRENT_ENRL, course)" data-value="8.1" r="4"></circle>
              <circle cx="332" :cy="200 - convertToRange(randomValues[Object.values(course)[22]][2], course.CURRENT_ENRL, course)" data-value="7.7" r="4"></circle>
              <circle cx="415" :cy="200 - convertToRange(randomValues[Object.values(course)[22]][3], course.CURRENT_ENRL, course)" data-value="6.8" r="4"></circle>
              <circle cx="498" :cy="200 - convertToRange(randomValues[Object.values(course)[22]][4], course.CURRENT_ENRL, course)" data-value="6.7" r="4"></circle>
              <circle cx="581" :cy="200 - convertToRange(course.CURRENT_ENRL, course.CURRENT_ENRL, course)" data-value="6.7" r="4"></circle>
            </g>
            <!--<svg height="210" width="500">
              <line x1="0" y1="0" x2="500" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
            </svg>-->
          </svg>
        </figure>
      </v-card-text>
    </v-expansion-panel-content>
    </v-expansion-panel>
    </p>
    </modal>
  </div>
</template>
<script>
import modal from './Modal'
export default {
        name: 'mat',
        props: ['matClasses', 'randomValues', 'convertToRange'],
        components: {
          modal,
        },
        data() {
            return {
                isModalVisible: false,
            }
        },
        methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },
}
</script>

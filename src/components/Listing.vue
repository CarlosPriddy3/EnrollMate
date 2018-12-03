<template>

	<div class="root">
    <!-- <div class="search">
      <v-text-field v-model="search" solo label="Search College..." append-icon="search"></v-text-field>
    </div> -->

    <div class="filtering">
         <Filtering @clicked="onClickChild"></Filtering>
    </div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
		<div class="listing" style="overflow-y: scroll;">
    <div>
      Filters to be applied are: {{ selectedFilters }}
    </div>
      <div class="arthistory">
        <ArtHistory :arthistClasses="filterList(filteredList, 'SUBJ', 'ARH')" :randomValues="randomValues" :convertToRange="convertToRange"></ArtHistory>
      </div>
      <div class="accounting">
        <Accounting :accountingClasses="filterList(filteredList, 'SUBJ', 'ACC')" :randomValues="randomValues" :convertToRange="convertToRange"></Accounting>
      </div>

      <div class="artstudio">
        <ArtStudio :artstudClasses="filterList(filteredList, 'SUBJ', 'ARS')" :randomValues="randomValues" :convertToRange="convertToRange"></ArtStudio>
      </div>
      <div class="astronomy">
        <Astronomy :astClasses="filterList(filteredList, 'SUBJ', 'AST')" :randomValues="randomValues" :convertToRange="convertToRange"></Astronomy>
      </div>
	    <v-expansion-panel expand>
	      <v-expansion-panel-content v-for="subject in subjects">

            <div slot="header">{{subject.classname}}</div>
            <!-- filterList(filteredList, 'SUBJ', subject.id).length > 0 -->
            <v-expansion-panel-content :class="course.CURRENT_ENRL/course.MAX_ENRL >= .85 ? 'red lighten-4' : 'grey lighten-3'" v-for="course in filterList(filteredList, 'SUBJ', subject.id)" :key="course.id">
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
	      </v-expansion-panel-content>
	    </v-expansion-panel>
	  </div>
	</div>

</template>

<script src="https://d3js.org/d3.v4.min.js"></script>
<script>
  import { EventBus } from './event-bus.js';
  import Firebase from 'firebase'
  import Filtering from './Filtering'
  import Accounting from './Accounting'
  import ArtHistory from './ArtHistory'
  import ArtStudio from './ArtStudio'
  import Astronomy from './Astronomy'
  let config = {
        apiKey: "AIzaSyD9Vy8LSVUVYJ1xQpsVjJeZUsoLbcax3TQ",
        authDomain: "testdatabase-575ac.firebaseapp.com",
        databaseURL: "https://testdatabase-575ac.firebaseio.com",
        projectId: "testdatabase-575ac",
        storageBucket: "testdatabase-575ac.appspot.com",
        messagingSenderId: "383806830533"
      };

  let firebaseApp = Firebase.initializeApp(config)
  let db = firebaseApp.database()
  import HashSet from 'hashset'
  export default {
    firebase: {
      filteredList: {
      source: db.ref('/')
      },
      dbRef: db.ref('/')
    },
    components: {
      'Filtering': Filtering,
      'Accounting': Accounting,
      'ArtHistory': ArtHistory,
      'ArtStudio': ArtStudio,
      'Astronomy': Astronomy,
    },
    data () {
      return {
        filteredList: {},
        search: '',
        instructor: '',
        selectedFilters: [],
        subjects: [
        {id: 'ACC', classname: 'Accounting'},
        {id: 'ARH', classname: 'Art History'}, {id: 'ARS', classname: 'Art Studio'},
        {id: 'AST', classname: 'Astronomy'}, {id: 'ATS', classname: 'Atmospheric Science'},
        {id: 'BLS', classname: 'Business Legal Studies'}, {id: 'BSE', classname: 'Biotechnology Science and Engineering'},
        {id: 'BUS', classname: 'Business'}, {id: 'BYS', classname: 'Biological Sciences'},
        {id: 'CE', classname: 'Civil Engineering'}, {id: 'CH', classname: 'Chemistry'},
        {id: 'CHE', classname: 'Chemical Engineering'}, {id: 'CM', classname: 'Communication Arts'},
        {id: 'CPE', classname: 'Computer Engineering'}, {id: 'CS', classname: 'Computer Science'},
        {id: 'ECN', classname: 'Economics'}, {id: 'ED', classname: 'Education'},
        {id: 'EDC', classname: 'Education Collaborative'}, {id: 'EE', classname: 'Electrical Engineering'},
        {id: 'EH', classname: 'English'}, {id: 'EHL', classname: 'English Linguistics'},
        {id: 'EM', classname: 'Engineering Management'}, {id: 'ENG', classname: 'Engineering'},
        {id: 'ESS', classname: 'Earth System Science'}, {id: 'FIN', classname: 'Finance'},
        {id: 'FYE', classname: 'First Year Experience'}, {id: 'GS', classname: 'Global Studies'},
        {id: 'GY', classname: 'Geography'}, {id: 'HON', classname: 'Honors'},
        {id: 'HPE', classname: 'Health and Physical Education'}, {id: 'HY', classname: 'History'},
        {id: 'ILC', classname: 'Intensive Language and Culture'}, {id: 'IS', classname: 'Information Systems'},
        {id: 'ISE', classname: 'Industrial & Systems Engineering '}, {id: 'KIN', classname: 'Kinesiology'},
        {id: 'LLP', classname: 'Listeners License Program'}, {id: 'MA', classname: 'Math'},
        {id: 'MAE', classname: 'Mechanical & Aerospace Engineering'}, {id: 'MGT', classname: 'Management'},
        {id: 'MIL', classname: 'Military Science'}, {id: 'MKT', classname: 'Marketing'},
        {id: 'MSC', classname: 'Art History'}, {id: 'MTS', classname: 'Materials Science'},
        {id: 'MU', classname: 'Music'}, {id: 'MUA', classname: 'Music Applied'},
        {id: 'MUJ', classname: 'Music Jazz'}, {id: 'MUX', classname: 'Music Ensembles'},
        {id: 'NUR', classname: 'Nursing'}, {id: 'OCS', classname: 'Office Career Services'},
        {id: 'OPE', classname: 'Optical Engineering'}, {id: 'PH', classname: 'Physics'},
        {id: 'PHL', classname: 'Philosophy '}, {id: 'PRO', classname: 'Professional Studies'},
        {id: 'PSC', classname: 'Political Science'}, {id: 'PY', classname: 'Psychology'},
        {id: 'SOC', classname: 'Sociology'}, {id: 'SPA', classname: 'Space Science'},
        {id: 'ST', classname: 'Statistics'}, {id: 'TH', classname: 'Theatre'},
        {id: 'VS', classname: 'Visiting Student'}, {id: 'WGS', classname: 'Womens and Gender Studies'},
        {id: 'WLC', classname: 'World Languages and Cultures '}
        ]
      }
    },

    mounted() {
      EventBus.$on('filtersSelected', allFilters => {
        Listing.filterBySearch()
      });
    },

    computed: {
        // List of classes - Default 0 filters
        /*filteredList: {
          get: function() {
            return this.dbRef
          },
          set: function (newVal) {
          this.filteredList = newVal;
          }
        },*/
        randomValues: function() {
                    var randomValues = {};
                    var dbRef = this.dbRef.slice();
                    for (var item in dbRef) {
                      //console.log(item);
                      randomValues[item] = new Array(
                      Math.round(((dbRef[item].CURRENT_ENRL) * (Math.random() * (1.2 - .8) + .8))),
                      Math.round(((dbRef[item].CURRENT_ENRL) * (Math.random() * (1.2 - .8) + .8))),
                      Math.round(((dbRef[item].CURRENT_ENRL) * (Math.random() * (1.2 - .8) + .8))),
                      Math.round(((dbRef[item].CURRENT_ENRL) * (Math.random() * (1.2 - .8) + .8))),
                      Math.round(((dbRef[item].CURRENT_ENRL) * (Math.random() * (1.2 - .8) + .8))));
                    }
                    //console.log(randomValues)
                    return randomValues;

                }
        // List of Alphabetically Sorted professors
        /*professorList: function() {
            var profSet = new HashSet();
            var dbRef = this.dbRef.slice();
            for (var key in Object.keys(dbRef)) {
              console.log(dbRef[key].INSTRUCTOR);
              profSet.add("" + dbRef[key].INSTRUCTOR + ", " + dbRef[key].FIRST_NAME);
            }
            return profSet.toArray().sort();
        }*/
    },
    methods: {
        //Filters the filteredList by given searchterms in the following format:
      	//ObjectLiteral format: {DAYS: {filter0: "MWF", filter1: "TR"}, INSTRUCTOR: {filter0: "Waddell, Emmanuel"} }
      	filterBySearch: function(searchTerms) {
      	  //For each search term, filter our list
      	  var filters = Object.keys(searchTerms);
      	  var tempList = this.filteredList.slice()
      	  for (var idx in filters) {
      	      var key = filters[idx]
      	      if (key != 0 && searchTerms[key] != "") {
      	          tempList = this.filterList(tempList.slice(), key, searchTerms[key]) //key should be 'MWF'
      	      }

      	  }
      	  console.log(tempList);
      	  this.filteredList = tempList;
      	  console.log(this.filteredList);
      	},
      	//Takes any list and any HEADER in the CSV file as a filterType and filters by value
      	filterList: function(listToFilter, filterByType, filterByVal) {
          var newList = []
          console.log(filterByVal + " FILTERING BY ")
          for (var key in Object.keys(listToFilter)) {
            if (listToFilter[key][filterByType].toLowerCase().match(filterByVal.toLowerCase())) {
              newList.push(listToFilter[key])
            }
          }
          /*
          console.log("LIST FOR " + filterByVal)
          console.log(newList)*/
          return newList
      	},
      	onClickChild (value) {
      	  this.filteredList = this.dbRef.slice()
      	  var newList = []
      	  for (var filter in Object.values(value)) {
            if (value != "") {
              newList.push(value);
            }
      	  }
      	  this.selectedFilters = newList;
          this.filterBySearch(value);
      	},

      	createRandomNumber: function(value) {
      	  //console.log("IN CREATE RANDOM NUMBER");
      	  this.randomNumber = Math.round(((value) * (Math.random() * (1.2 - .8) + .8)) * 4);
      	  //console.log(this.randomNumber);
      	},

      	getRandomNumber: function() {
      	  //console.log("IN GET RANDOM NUMBER");
      	  //console.log(this.randomNumber);
      	  return this.randomNumber;
      	},

      	convertToRange: function(oldVal, curEnroll, course) {
      	var newRange = 100
      	var oldMin = Math.round(curEnroll * .75)
      	var oldMax = Math.round(curEnroll * 1.25)
      	var oldRange = oldMax - oldMin
      	if (oldRange == 0 || curEnroll == 0) {
      	  oldRange = 1
      	}
      	var newVal =  (Math.round((((oldVal - oldMin) * newRange) / oldRange)) + 50)
      	if (curEnroll == 51) {
      	  console.log(newVal + course.TITLE)
      	}
      	return newVal
      	}
    }
  };

</script>

<style>
  .listing {
		margin:75px;
		margin-bottom: -75px;
		text-align: center;
		max-width: 95%;
		height: 825px;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	}
  td, th {
      padding-right: 10px;
  }
  td {
    padding-bottom: 15px;
  }
</style>

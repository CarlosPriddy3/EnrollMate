<template>
	<div class="root">
    <!-- <div class="search">
      <v-text-field v-model="search" solo label="Search College..." append-icon="search"></v-text-field>
    </div> -->

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
		<div class="listing" style="overflow-y: scroll;">
    <div>
      Filters to be applied are: {{ selectedFilters }}
    </div>
	    <v-expansion-panel expand>
	      <v-expansion-panel-content v-for="subject in subjects">
	      	<div slot="header">{{ subject.classname }}</div>
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
              </v-card-text>
	      	</v-expansion-panel-content>
	      </v-expansion-panel-content>
	    </v-expansion-panel>
	  </div>
	</div>
</template>

<script>
  import { EventBus } from './event-bus.js';
  import Firebase from 'firebase'
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
              dbRef: db.ref('/')
    },
    data () {
      return {
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
        this.selectedFilters = allFilters;
      });
    },

    computed: {
        // List of classes - Default 0 filters
        filteredList: function() {
            return this.dbRef
        },
        // List of Alphabetically Sorted professors
        professorList: function() {
            var profSet = new HashSet();
            var dbRef = this.dbRef.slice();
            for (var key in Object.keys(dbRef)) {
              console.log(dbRef[key].INSTRUCTOR);
              profSet.add("" + dbRef[key].INSTRUCTOR + ", " + dbRef[key].FIRST_NAME);
            }
            return profSet.toArray().sort();
        }
    },
    methods: {
        //Filters the filteredList by given searchterms in the following format:
      	//ObjectLiteral format: {DAYS: {filter0: "MWF", filter1: "TR"}, INSTRUCTOR: {filter0: "Waddell, Emmanuel"} }
      	filterBySearch: function(searchTerms) {
      	  //For each search term, filter our list
      	  filteredList = this.dbRef.slice()
      	  for (var key in Object.keys(searchTerms)) {
      	      filteredList = filterList(filteredList.slice(), key, searchTerms[key]) //key should be 'MWF'
      	  }
      	},
      	//Takes any list and any HEADER in the CSV file as a filterType and filters by value
      	filterList: function(listToFilter, filterByType, filterByVal) {
          var newList = []
          for (var key in Object.keys(listToFilter)) {
            if (listToFilter[key][filterByType].toLowerCase().match(filterByVal.toLowerCase())) {
              newList.push(listToFilter[key])
            }
          }
          return newList
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

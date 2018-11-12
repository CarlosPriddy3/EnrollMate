<template>
	<div class="root" id="course_listing">
    <!-- <div class="search">
      <v-text-field v-model="search" solo label="Search College..." append-icon="search"></v-text-field>
    </div> -->

    <div class="filter_panel" id="filtering">
      <div class="dropdown">
        <select v-model="college" id="colleges">
          <option disabled value="">Colleges</option>
          <option>Arts, Humanities, and Social Sciences</option>
          <option>Business</option>
          <option>Education</option>
          <option>Engineering</option>
          <option>Nursing</option>
          <option>Professional and Continuing Studies</option>
          <option>Science</option>
          <option>Graduate School</option>
          <option>Honors</option>
        </select>
        <br>
        <span class="results"><b>Selected College: {{ college }}</b></span>
      </div>
      <div class="dropdown">
        <select v-model="credit_hours" id="credit_hours">
          <option disabled value="">Credit Hours</option>
          <option>1 Credit Hour</option>
          <option>2 Credit Hours</option>
          <option>3 Credit Hours</option>
          <option>4 Credit Hours</option>
        </select>
        <br>
        <span class="results"><b>Selected Credit Hours: {{ credit_hours }}</b></span>
      </div>
      <div class="checkboxes" id="days">
        <input type="checkbox" id="monday" value="M" v-model="checkedDays">
        <label for="monday">M </label>
        <input type="checkbox" id="tuesday" value="T" v-model="checkedDays">
        <label for="tuesday">T </label>
        <input type="checkbox" id="wednesday" value="W" v-model="checkedDays">
        <label for="wednesday">W </label>
        <input type="checkbox" id="thursday" value="R" v-model="checkedDays">
        <label for="thursday">R </label>
        <input type="checkbox" id="friday" value="F" v-model="checkedDays">
        <label for="friday">F </label>
        <br>
        <span class="results"><b>Checked days: {{ checkedDays }}</b></span>
      </div>
      <div class="search_bar" id="search_course">
        <input v-model="searchResult" placeholder="Search for a course...">
      </div>
      <div class="submit" id="submit_button">
        <button class="submit_botton" v-on:click="filterList()">See Results</button>
      </div>
            
    </div>

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
    name: 'course_listing',
    firebase: {
              dbRef: db.ref('/')
    },
    data () {
      return {
        search: '',
        instructor: '',
        college: '',
        credit_hours: '',
        checkedDays: [],
        days: '',
        searchResult: '',
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
        },
        listOfFilters: function() {
          var i;
          var j;
          for (i = 0; i < this.checkedDays.length; i++) {
            this.days += this.checkedDays[i];
          }
          this.selectedFilters.push(this.college);
          this.selectedFilters.push(this.credit_hours);
          this.selectedFilters.push(this.days);
          this.selectedFilters.push(this.searchResult);
          return selectedFilters;
        }
    },
    methods: {
        
        //Filters the filteredList by given searchterms in the following format:
      	//ObjectLiteral format: {DAYS: {filter0: "MWF", filter1: "TR"}, INSTRUCTOR: {filter0: "Waddell, Emmanuel"} }
      	filterBySearch: function() {
      	  //For each search term, filter our list
      	  filteredList = this.dbRef.slice()
          var ind; 
      	  for (ind = 0; i < selectedFilters.length; ind++) {
      	      filteredList = filterList(filteredList.slice(), selectedFilters); //key should be 'MWF'
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
  .filter_panel{
    margin:75px;
    margin-bottom: 25px;
    text-align: left;
    max-width: 95%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    font-size: 14px;
    padding: 16px 8px 8px 16px;
    background: #fff;
    overflow: hidden;
    position: relative;
  }

  .filter_panel .dropdown{
    width: 100%;
    background-position: 80% relative;
    padding: 8px 8px 8px 8px;
    font-size:15px;
    margin-bottom: 16px;
  }

  .filter_panel .dropdown select{
    background: transparent;
    line-height: 1;
    border: 0;
    padding: 0;
    border-radius: 0;
    width: 48%;
    position: relative;
    z-index: 10;
    font-size: 1em;
  }

  .filter_panel .checkboxes{    
    padding: 8px 8px 8px 8px;
    font-size: 16px;
    margin-bottom: 16px;
  }

  .filter_panel .results{
    font-size: 14px;
    margin-bottom: 6px;
  }

  .filter_panel .p{
    font-size: 14px;
    margin-bottom: 6px;
  }

  .search_bar {
    margin-top: 20px;
    padding: 8px 8px 8px 8px;
    font-size: 16px;
  }

  .submit {
    margin-top: 25px;
    margin-bottom: 15px;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    text-align: center;
  }
    
  .submit .submit_button {
    border-radius: 2px;
    border-color: black;
  }
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

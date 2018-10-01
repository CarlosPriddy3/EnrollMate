<template>
  <div>
  <span v-html="printLog(subjects)"></span>
  	<!-- <Search></Search> -->
    <Listing></Listing>
  </div>
</template>

<script>
	import Listing from './Listing'
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

	export default {
  		name: 'Home',
  		components: {
  			'Listing': Listing
  		},
  		data () {
                return {
                  search: '',
                  instructor: '',
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
              firebase: {
                    dbRef: db.ref('/')
              },
              computed: {
                  subArrs: {
                      get: function() {return [
                          function() {return this.accRef},
                          function() {return this.maRef}
                      ]}
                  },
                	filteredSubjects: function() {
                      return this.subjects.filter((college) => {
                          return college.id.toLowerCase().match(this.search.toLowerCase())
                      })
                  },


              },


              methods: {
                	subjRefer: function(subj) {
                 		return this.dbRef.filter((singleClass) => {
                    		return singleClass.SUBJ === subj
                 		})
                	},
                	instrRefer: function(instructor) {
                  	return this.dbRef.filter((singleClass) => {
                    		return singleClass.SUBJ === subj
                		})
                	},
                	printLog: function() {return console.log(this.subjects)},
              }
	}
</script>

<style>
	h1, p {
		margin: 30px;
	}
</style>

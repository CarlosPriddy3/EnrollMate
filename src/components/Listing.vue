<template>
	<div class="root">
    <div class="search">
      <v-text-field v-model="search" solo label="Search College..." append-icon="search"></v-text-field>
    </div>
		<div class="listing" style="overflow-y: scroll;">
	    <v-expansion-panel expand>
	      <v-expansion-panel-content v-for="(subject, index) in subjects" :key="subject.id">
	      	<div slot="header">{{ subject.classname }}</div>
	      	<v-expansion-panel-content class="grey lighten-3" v-for="course in accRef" :key="course.id">
	      		<div slot="header">{{ course.CRS_NUMB + " " + course.TITLE + " Instructor: " + course.FIRST_NAME
	      		           + " " + course.INSTRUCTOR + " " + course.CURRENT_ENRL + "/" + course.MAX_ENRL }}</div>
	      	</v-expansion-panel-content>
	      </v-expansion-panel-content>
	    </v-expansion-panel>
	  </div>
	</div>
</template>

<script>
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
	/*export default {
			name: 'Listing',
      data: function() {
            return {
                  colleges: [
          						{   id: 'ACC - Accounting',
          							  classes: function() {
          							      return db.ref('/').orderByChild('COLLEGE').equalTo('SC')
          						    }
          						}
          				]
          	}
      }
  }*/
  export default {
    data () {
      return {
        instructor: '',
        subjects: [{ id: 'ACC', classname: 'Accounting'},
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
          accRef: db.ref('/').orderByChild('SUBJ').equalTo('ACC'),
          //arhRef: db.ref('/').orderByChild('SUBJ').equalTo('ARH'),
          //arsRef: db.ref('/').orderByChild('SUBJ').equalTo('ARS'),
          //astRef: db.ref('/').orderByChild('SUBJ').equalTo('AST'),
          // atsRef: db.ref('/').orderByChild('SUBJ').equalTo('ATS'),
          // blsRef: db.ref('/').orderByChild('SUBJ').equalTo('BLS'),
          // bseRef: db.ref('/').orderByChild('SUBJ').equalTo('BSE'),
          // busRef: db.ref('/').orderByChild('SUBJ').equalTo('BUS'),
          // bysRef: db.ref('/').orderByChild('SUBJ').equalTo('BYS'),
          // ceRef: db.ref('/').orderByChild('SUBJ').equalTo('CE'),
          // chRef: db.ref('/').orderByChild('SUBJ').equalTo('CH'),
          // cheRef: db.ref('/').orderByChild('SUBJ').equalTo('CHE'),
          // cmRef: db.ref('/').orderByChild('SUBJ').equalTo('CM'),
          // cpeRef: db.ref('/').orderByChild('SUBJ').equalTo('CPE'),
          // csRef: db.ref('/').orderByChild('SUBJ').equalTo('CS'),
          // ecnRef: db.ref('/').orderByChild('SUBJ').equalTo('ECN'),
          // edRef: db.ref('/').orderByChild('SUBJ').equalTo('ED'),
          // edcRef: db.ref('/').orderByChild('SUBJ').equalTo('EDC'),
          // eeRef: db.ref('/').orderByChild('SUBJ').equalTo('EE'),
          // ehRef: db.ref('/').orderByChild('SUBJ').equalTo('EH'),
          // ehlRef: db.ref('/').orderByChild('SUBJ').equalTo('EHL'),
          // emRef: db.ref('/').orderByChild('SUBJ').equalTo('EM'),
          // engRef: db.ref('/').orderByChild('SUBJ').equalTo('ENG'),
          // essRef: db.ref('/').orderByChild('SUBJ').equalTo('ESS'),
          finRef: db.ref('/').orderByChild('SUBJ').equalTo('FIN'),
          // fyeRef: db.ref('/').orderByChild('SUBJ').equalTo('FYE'),
          // gsRef: db.ref('/').orderByChild('SUBJ').equalTo('GS'),
          // gyRef: db.ref('/').orderByChild('SUBJ').equalTo('GY'),
          // honRef: db.ref('/').orderByChild('SUBJ').equalTo('HON'),
          // hpeRef: db.ref('/').orderByChild('SUBJ').equalTo('HPE'),
          // hyRef: db.ref('/').orderByChild('SUBJ').equalTo('HY'),
          // ilcRef: db.ref('/').orderByChild('SUBJ').equalTo('ILC'),
          // isRef: db.ref('/').orderByChild('SUBJ').equalTo('IS'),
          // iseRef: db.ref('/').orderByChild('SUBJ').equalTo('ISE'),
          // kinRef: db.ref('/').orderByChild('SUBJ').equalTo('KIN'),
          // llpRef: db.ref('/').orderByChild('SUBJ').equalTo('LLP'),
          maRef: db.ref('/').orderByChild('SUBJ').equalTo('MA'),
          // maeRef: db.ref('/').orderByChild('SUBJ').equalTo('MAE'),
          // mgtRef: db.ref('/').orderByChild('SUBJ').equalTo('MGT'),
          // milRef: db.ref('/').orderByChild('SUBJ').equalTo('MIL'),
          // mktRef: db.ref('/').orderByChild('SUBJ').equalTo('MKT'),
          // mscRef: db.ref('/').orderByChild('SUBJ').equalTo('MSC'),
          // mtsRef: db.ref('/').orderByChild('SUBJ').equalTo('MTS'),
          // muRef: db.ref('/').orderByChild('SUBJ').equalTo('MU'),
          // muaRef: db.ref('/').orderByChild('SUBJ').equalTo('MUA'),
          // mujRef: db.ref('/').orderByChild('SUBJ').equalTo('MUJ'),
          // muxRef: db.ref('/').orderByChild('SUBJ').equalTo('MUX'),
          // nurRef: db.ref('/').orderByChild('SUBJ').equalTo('NUR'),
          // ocsRef: db.ref('/').orderByChild('SUBJ').equalTo('OCS'),
          // opeRef: db.ref('/').orderByChild('SUBJ').equalTo('OPE'),
          // optRef: db.ref('/').orderByChild('SUBJ').equalTo('OPT'),
          // oseRef: db.ref('/').orderByChild('SUBJ').equalTo('OSE'),
          // phRef: db.ref('/').orderByChild('SUBJ').equalTo('PH'),
          // phlRef: db.ref('/').orderByChild('SUBJ').equalTo('PHL'),
          // proRef: db.ref('/').orderByChild('SUBJ').equalTo('PRO'),
          // pscRef: db.ref('/').orderByChild('SUBJ').equalTo('PSC'),
          // pyRef: db.ref('/').orderByChild('SUBJ').equalTo('PY'),
          // socRef: db.ref('/').orderByChild('SUBJ').equalTo('SOC'),
          spaRef: db.ref('/').orderByChild('SUBJ').equalTo('SPA'),
          // stRef: db.ref('/').orderByChild('SUBJ').equalTo('ST'),
          // thRef: db.ref('/').orderByChild('SUBJ').equalTo('TH'),
          // vsRef: db.ref('/').orderByChild('SUBJ').equalTo('VS'),
          // wgsRef: db.ref('/').orderByChild('SUBJ').equalTo('WGS'),
          // wlcRef: db.ref('/').orderByChild('SUBJ').equalTo('WLC')



        }/*,
    computed: {
          subArrs: [
          {accRef},
          {maRef}
          ]
    }*/
  }
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
	.search {
      margin-left: 75px;
      margin-bottom: -75px;
      margin-top: 25px;
      width:500px;
    }
</style>

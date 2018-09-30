<template>
	<div class="root">
		<div class="listing" style="overflow-y: scroll;">
	    <v-expansion-panel expand>
	      <v-expansion-panel-content v-for="(subject, index) in subjects" :key="subject.id">
	      	<div slot="header">{{ subject.id }}</div>
	      	<v-expansion-panel-content class="grey lighten-3" v-for="course in accRef" :key="course.id">
	      		<div slot="header">{{ course.SUBJ + " Instructor: " + course.FIRST_NAME
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
        subjects: [{ id: 'ACC', name: 'accounting'}, {id: 'MATH', name: 'math'}]
      }
    },
    firebase: {
          accRef: db.ref('/').orderByChild('SUBJ').equalTo('ACC'),
          maRef: db.ref('/').orderByChild('SUBJ').equalTo('MA')
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

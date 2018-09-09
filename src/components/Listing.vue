<template>
	<div class="root">
		<div class="search">
	 		<v-text-field v-model="search" solo label="Search College..." append-icon="search"></v-text-field>
  	</div>
		<div class="listing" style="overflow-y: scroll;">
	    <v-expansion-panel expand>
	      <v-expansion-panel-content v-for="college in filteredColleges">
	      	<div slot="header">{{ college.id }}</div>
	      	<v-expansion-panel-content class="grey lighten-1" v-for="course in college.classes">
	      		<div slot="header">{{ course.name }}</div>
	      		<v-card>
	          	<v-card-text class="grey lighten-3">90702  210 01     ACCOUNTING FOR BUSINESS           4.0   53   53        0    0 MW      01:00PM 02:00PM BAB   121        Bryson Roscoe    </v-card-text>                                                  
     					<v-card-text class="grey lighten-3">90702  210 01     ACCOUNTING FOR BUSINESS           4.0   53   53        0    0 MW      11:20AM 12:40PM BAB   121        Bryson Roscoe    </v-card-text>                                                         
     					<v-card-text class="grey lighten-3">90703  210 02     ACCOUNTING FOR BUSINESS           4.0   53   53        0    0 TR      11:20AM 12:40PM BAB   123        Zhang Jing     </v-card-text>                                                           
     					<v-card-text class="grey lighten-3">90703  210 02     ACCOUNTING FOR BUSINESS           4.0   53   53        0    0 TR      01:00PM 02:00PM BAB   123        Zhang Jing    </v-card-text>                                                            
     					<v-card-text class="grey lighten-3">90704  210 03     ACCOUNTING FOR BUSINESS           4.0   53   50        3    0 MW      11:20AM 12:20PM BAB   123        Hoskins John   </v-card-text>                                                           
     					<v-card-text class="grey lighten-3">90704  210 03     ACCOUNTING FOR BUSINESS           4.0   53   50        3    0 MW      09:40AM 11:00AM BAB   123        Hoskins John</v-card-text>
	        	</v-card>
	      	</v-expansion-panel-content>
	      </v-expansion-panel-content>
	    </v-expansion-panel>
	  </div>
	</div>
</template>

<script>
	export default {
		name: 'Listing',
		data: function() {
			return {
					search: '',
					colleges: [
						{ id: 'ACC - Accounting',
							classes: [
								{ name: 'ACC 210 - ACCOUNTING FOR BUSINESS'},
								{ name: 'ACC 211 - PRINC OF FINANCIAL ACCOUNTING'},
								{ name: 'ACC 212 - MANAGEMENT ACCOUNTING'},
								{ name: 'ACC 307 - ACCOUNTING INFORMATION SYS'},
								{ name: 'ACC 310 - INTERM FINANCIAL ACCT I'},
								{ name: 'ACC 310L - LABORATORY'},
								{ name: 'ACC 311 - INTERM FINANCIAL ACCT II'},
								{ name: 'ACC 313 - INDIVIDUAL/SMALL BUS INCOME TA'},
								{ name: 'ACC 413 - CORP/PARTNERSHIP/ESTATE TAXES'},
								{ name: 'ACC 415 - ADV FINANCIAL ACCOUNTING'},
								{ name: 'ACC 417 - ACC ST/LOCAL GOV & NON-PROFITS'},
								{ name: 'ACC 420 - STATE AND LOCAL TAXATION'},
								{ name: 'ACC 431 - PRINCIPLES OF AUDITING'},
								{ name: 'ACC 432 - ADVANCED AUDITING'},
								{ name: 'ACC 433 - FORENSIC ACCOUNTING'},
								{ name: 'ACC 440 - BASIC GOV CONTRACT ACCTG'},
								{ name: 'ACC 441 - ADVANCED GOV CONTRACT ACCTG'},
								{ name: 'ACC 470 - SEMINAR/CONTEMP ACCTG ISSUES'},
								{ name: 'ACC 480 - PROFESSIONAL CERTIFICATION'},
								{ name: 'ACC 490 - SPECIAL PROJECTS'},
								{ name: 'ACC 495 - INTERNSHIP IN ACCOUNTING'}
							]
						},
						{ id: 'AMS - Ancient & Medieval Studies' },
						{ id: 'ARH - Art History' },
						{ id: 'ARS - Art Studio' },
						{ id: 'AST - Astronomy' },
						{ id: 'ATS - Atmospheric Science' },
						{ id: 'BLS - Business Legal Studies' },
						{ id: 'BSE - Biotechnology Science & engine' },
						{ id: 'BUS - Business' },
						{ id: 'BYS - Biological Sciences' },
						{ id: 'CE - Civil Engineering' },
						{ id: 'CH - Chemistry' },
						{ id: 'CHE - Chemical Engineering' },
						{ id: 'CM - Communication Arts' },
						{ id: 'CPE - Computer Engineering' },
						{ id: 'CS - Computer Science' },
						{ id: 'ECH - Early Child & Early Special Ed' },
						{ id: 'ECN - Economics' },
						{ id: 'ED - Education' },
						{ id: 'EDC - Education Collaborative' },
						{ id: 'EE - Electrical Engineering' },
						{ id: 'EH - English' },
						{ id: 'EHL - English Linguistics & TESOL' },
						{ id: 'ENG - Engineering' },
						{ id: 'ESS - Earth System Science' },
						{ id: 'FIN - Finance' },
						{ id: 'FYE - First Year Experience' },
						{ id: 'GS - Global Studies' },
						{ id: 'GY - Geography' },
						{ id: 'HON - Honors College' },
						{ id: 'HPE - Health & Physical Education' },
						{ id: 'HY - History' },
						{ id: 'ILC - Intensive Language & Culture' },
						{ id: 'IS - Information Systems' },
						{ id: 'ISE - Industrial & Systems Engineering' },
						{ id: 'KIN - Kinesiology' },
						{ id: 'LIB - ' },
						{ id: 'MA - Mathematics' },
						{ id: 'MAE - Mechanical & Aerospace Engineering' },
						{ id: 'MGT - Management' },
						{ id: 'MIL - Military Science' },
						{ id: 'MKT - Marketing' },
						{ id: 'MOD - Modeling & Simulation' },
						{ id: 'MSC - Management Science' },
						{ id: 'MTS - Materials Science' },
						{ id: 'MU - Music' },
						{ id: 'MUA - Music Applied' },
						{ id: 'MUE - Music Education' },
						{ id: 'MUJ  - Music Jazz' },
						{ id: 'MUX - Music Ensembles' },
						{ id: 'NUR - Nursing' },
						{ id: 'OCS - Office Career Services' },
						{ id: 'OPE - Optical Engineering' },
						{ id: 'OPT - Optics' },
						{ id: 'OSE - Optical Science Engineering' },
						{ id: 'PH - Physics' },
						{ id: 'PHL - Philosophy' },
						{ id: 'PRO - Professional Studies' },
						{ id: 'PSC - Political Science' },
						{ id: 'PY - Psychology' },
						{ id: 'SCI - Science' },
						{ id: 'SOC - Sociology' },
						{ id: 'SPA - Space Science' },
						{ id: 'ST - Statistics' },
						{ id: 'TH - Theatre' },
						{ id: 'VS - Visiting Student' },
						{ id: 'WGS - Women&#39;s & Gender Studies' },
						{ id: 'WLC - World Languages and Cultures' }
					]
				}
			},
			computed: {
				filteredColleges: function() {
					return this.colleges.filter((college) => {
						return college.id.toLowerCase().match(this.search.toLowerCase())
					})
				}
			}
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
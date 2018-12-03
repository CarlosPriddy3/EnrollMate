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
      <div class="accounting">
        <Accounting :accountingClasses="filterList(filteredList, 'SUBJ', 'ACC')" :randomValues="randomValues" :convertToRange="convertToRange"></Accounting>
      </div>
      <div class="arthistory">
        <ArtHistory :arthistClasses="filterList(filteredList, 'SUBJ', 'ARH')" :randomValues="randomValues" :convertToRange="convertToRange"></ArtHistory>
      </div>
      <div class="atsScience">
        <ArtStudio :artstudClasses="filterList(filteredList, 'SUBJ', 'ARS')" :randomValues="randomValues" :convertToRange="convertToRange"></ArtStudio>
      </div>
      <div class="astronomy">
        <Astronomy :astClasses="filterList(filteredList, 'SUBJ', 'AST')" :randomValues="randomValues" :convertToRange="convertToRange"></Astronomy>
      </div>
      <div class="atsscience">
        <AtsSci :atssciClasses="filterList(filteredList, 'SUBJ', 'ATS')" :randomValues="randomValues" :convertToRange="convertToRange"></AtsSci>
      </div>
      <div class="busleg">
        <BusLeg :buglegClasses="filterList(filteredList, 'SUBJ', 'BLS')" :randomValues="randomValues" :convertToRange="convertToRange"></BusLeg>
      </div>
      <div class="bioscieng">
        <BioSciEng :biosciengClasses="filterList(filteredList, 'SUBJ', 'BSE')" :randomValues="randomValues" :convertToRange="convertToRange"></BioSciEng>
      </div>
      <div class="business">
        <Business :busClasses="filterList(filteredList, 'SUBJ', 'BUS')" :randomValues="randomValues" :convertToRange="convertToRange"></Business>
      </div>
      <div class="biosci">
        <BioSci :biosciClasses="filterList(filteredList, 'SUBJ', 'BYS')" :randomValues="randomValues" :convertToRange="convertToRange"></BioSci>
      </div>
      <div class="civeng">
        <CivEng :civengClasses="filterList(filteredList, 'SUBJ', 'CE')" :randomValues="randomValues" :convertToRange="convertToRange"></CivEng>
      </div>
      <div class="chem">
        <Chem :chemClasses="filterList(filteredList, 'SUBJ', 'CH')" :randomValues="randomValues" :convertToRange="convertToRange"></Chem>
      </div>
      <div class="chemeng">
        <ChemEng :chemengClasses="filterList(filteredList, 'SUBJ', 'CHE')" :randomValues="randomValues" :convertToRange="convertToRange"></ChemEng>
      </div>
      <div class="commarts">
        <CommArts :commartsClasses="filterList(filteredList, 'SUBJ', 'CM')" :randomValues="randomValues" :convertToRange="convertToRange"></CommArts>
      </div>
      <div class="compeng">
        <CompEng :compengClasses="filterList(filteredList, 'SUBJ', 'CPE')" :randomValues="randomValues" :convertToRange="convertToRange"></CompEng>
      </div>
      <div class="compsci">
        <CompSci :compsciClasses="filterList(filteredList, 'SUBJ', 'CS')" :randomValues="randomValues" :convertToRange="convertToRange"></CompSci>
      </div>
      <div class="econ">
        <Econ :econClasses="filterList(filteredList, 'SUBJ', 'ECN')" :randomValues="randomValues" :convertToRange="convertToRange"></Econ>
      </div>
      <div class="educ">
        <Educ :educClasses="filterList(filteredList, 'SUBJ', 'ED')" :randomValues="randomValues" :convertToRange="convertToRange"></Educ>
      </div>
      <div class="educollab">
        <EduCollab :educollabClasses="filterList(filteredList, 'SUBJ', 'EDC')" :randomValues="randomValues" :convertToRange="convertToRange"></EduCollab>
      </div>
      <div class="eleceng">
        <ElecEng :elecengClasses="filterList(filteredList, 'SUBJ', 'EE')" :randomValues="randomValues" :convertToRange="convertToRange"></ElecEng>
      </div>
      <div class="engl">
        <Engl :englClasses="filterList(filteredList, 'SUBJ', 'EH')" :randomValues="randomValues" :convertToRange="convertToRange"></Engl>
      </div>
      <div class="engling">
        <EngLing :englingClasses="filterList(filteredList, 'SUBJ', 'EHL')" :randomValues="randomValues" :convertToRange="convertToRange"></EngLing>
      </div>
      <div class="engmgmt">
        <EngMgmt :engmgmtClasses="filterList(filteredList, 'SUBJ', 'EM')" :randomValues="randomValues" :convertToRange="convertToRange"></EngMgmt>
      </div>
      <div class="engineer">
        <Engineer :engineerClasses="filterList(filteredList, 'SUBJ', 'ENG')" :randomValues="randomValues" :convertToRange="convertToRange"></Engineer>
      </div>
      <div class="earthsys">
        <EarthSys :earthsysClasses="filterList(filteredList, 'SUBJ', 'ESS')" :randomValues="randomValues" :convertToRange="convertToRange"></EarthSys>
      </div>
      <div class="finance">
        <Finance :financeClasses="filterList(filteredList, 'SUBJ', 'FIN')" :randomValues="randomValues" :convertToRange="convertToRange"></Finance>
      </div>
      <div class="firstyear">
        <FirstYear :firstyearClasses="filterList(filteredList, 'SUBJ', 'FYE')" :randomValues="randomValues" :convertToRange="convertToRange"></FirstYear>
      </div>
      <div class="globstud">
        <GlobStud :globstudClasses="filterList(filteredList, 'SUBJ', 'GS')" :randomValues="randomValues" :convertToRange="convertToRange"></GlobStud>
      </div>
      <div class="geog">
        <Geog :geogClasses="filterList(filteredList, 'SUBJ', 'GY')" :randomValues="randomValues" :convertToRange="convertToRange"></Geog>
      </div>
      <div class="honors">
        <Honors :honorsClasses="filterList(filteredList, 'SUBJ', 'HON')" :randomValues="randomValues" :convertToRange="convertToRange"></Honors>
      </div>
      <div class="health">
        <Health :healthClasses="filterList(filteredList, 'SUBJ', 'HPE')" :randomValues="randomValues" :convertToRange="convertToRange"></Health>
      </div>
      <div class="hist">
        <Hist :histClasses="filterList(filteredList, 'SUBJ', 'HY')" :randomValues="randomValues" :convertToRange="convertToRange"></Hist>
      </div>
      <div class="intlang">
        <IntLang :inglangClasses="filterList(filteredList, 'SUBJ', 'ILC')" :randomValues="randomValues" :convertToRange="convertToRange"></IntLang>
      </div>
      <div class="infosys">
        <InfoSys :infoSysClasses="filterList(filteredList, 'SUBJ', 'IS')" :randomValues="randomValues" :convertToRange="convertToRange"></InfoSys>
      </div>
      <div class="indsyseng">
        <IndSysEng :indsysengClasses="filterList(filteredList, 'SUBJ', 'ISE')" :randomValues="randomValues" :convertToRange="convertToRange"></IndSysEng>
      </div>
      <div class="kines">
        <Kines :kinesClasses="filterList(filteredList, 'SUBJ', 'KIN')" :randomValues="randomValues" :convertToRange="convertToRange"></Kines>
      </div>
      <div class="listlic">
        <ListLic :listlicClasses="filterList(filteredList, 'SUBJ', 'LLP')" :randomValues="randomValues" :convertToRange="convertToRange"></ListLic>
      </div>
      <div class="mat">
        <Mat :matClasses="filterList(filteredList, 'SUBJ', 'MA')" :randomValues="randomValues" :convertToRange="convertToRange"></Mat>
      </div>
      <div class="mechaero">
        <MechAero :mechaeroClasses="filterList(filteredList, 'SUBJ', 'MAE')" :randomValues="randomValues" :convertToRange="convertToRange"></MechAero>
      </div>
      <div class="mgmt">
        <Mgmt :mgmtClasses="filterList(filteredList, 'SUBJ', 'MGT')" :randomValues="randomValues" :convertToRange="convertToRange"></Mgmt>
      </div>
      <div class="milsci">
        <MilSci :milsciClasses="filterList(filteredList, 'SUBJ', 'MIL')" :randomValues="randomValues" :convertToRange="convertToRange"></MilSci>
      </div>
      <div class="market">
        <Market :marketClasses="filterList(filteredList, 'SUBJ', 'MKT')" :randomValues="randomValues" :convertToRange="convertToRange"></Market>
      </div>
      <div class="mgmtsci">
        <MgmtSci :mgmtsciClasses="filterList(filteredList, 'SUBJ', 'MSC')" :randomValues="randomValues" :convertToRange="convertToRange"></MgmtSci>
      </div>
      <div class="matsci">
        <MatSci :matsciClasses="filterList(filteredList, 'SUBJ', 'MTS')" :randomValues="randomValues" :convertToRange="convertToRange"></MatSci>
      </div>
      <div class="music">
        <Music :musicClasses="filterList(filteredList, 'SUBJ', 'MU')" :randomValues="randomValues" :convertToRange="convertToRange"></Music>
      </div>
      <div class="musappl">
        <MusAppl :musapplClasses="filterList(filteredList, 'SUBJ', 'MUA')" :randomValues="randomValues" :convertToRange="convertToRange"></MusAppl>
      </div>
      <div class="jazz">
        <Jazz :jazzClasses="filterList(filteredList, 'SUBJ', 'MUJ')" :randomValues="randomValues" :convertToRange="convertToRange"></Jazz>
      </div>
      <div class="ensemble">
        <Ensemble :ensembleClasses="filterList(filteredList, 'SUBJ', 'MUX')" :randomValues="randomValues" :convertToRange="convertToRange"></Ensemble>
      </div>
      <div class="nursing">
        <Nursing :nursingClasses="filterList(filteredList, 'SUBJ', 'NUR')" :randomValues="randomValues" :convertToRange="convertToRange"></Nursing>
      </div>
      <div class="offcar">
        <OffCar :offcarClasses="filterList(filteredList, 'SUBJ', 'OCS')" :randomValues="randomValues" :convertToRange="convertToRange"></OffCar>
      </div>
      <div class="opteng">
        <OptEng :optengClasses="filterList(filteredList, 'SUBJ', 'OPE')" :randomValues="randomValues" :convertToRange="convertToRange"></OptEng>
      </div>
      <div class="phys">
        <Phys :physClasses="filterList(filteredList, 'SUBJ', 'PH')" :randomValues="randomValues" :convertToRange="convertToRange"></Phys>
      </div>
      <div class="phil">
        <Phil :philClasses="filterList(filteredList, 'SUBJ', 'PHL')" :randomValues="randomValues" :convertToRange="convertToRange"></Phil>
      </div>
      <div class="profstud">
        <ProfStud :profstudClasses="filterList(filteredList, 'SUBJ', 'PRO')" :randomValues="randomValues" :convertToRange="convertToRange"></ProfStud>
      </div>
      <div class="polsci">
        <PolSci :polsciClasses="filterList(filteredList, 'SUBJ', 'PSC')" :randomValues="randomValues" :convertToRange="convertToRange"></PolSci>
      </div>
      <div class="psy">
        <Psy :psyClasses="filterList(filteredList, 'SUBJ', 'PY')" :randomValues="randomValues" :convertToRange="convertToRange"></Psy>
      </div>
      <div class="soc">
        <Soc :socClasses="filterList(filteredList, 'SUBJ', 'SOC')" :randomValues="randomValues" :convertToRange="convertToRange"></Soc>
      </div>
      <div class="spasci">
        <SpaSci :spasciClasses="filterList(filteredList, 'SUBJ', 'SPA')" :randomValues="randomValues" :convertToRange="convertToRange"></SpaSci>
      </div>
      <div class="stats">
        <Stats :statsClasses="filterList(filteredList, 'SUBJ', 'ST')" :randomValues="randomValues" :convertToRange="convertToRange"></Stats>
      </div>
      <div class="theatre">
        <Theatre :theatreClasses="filterList(filteredList, 'SUBJ', 'TH')" :randomValues="randomValues" :convertToRange="convertToRange"></Theatre>
      </div>
      <div class="visit">
        <Visit :visitClasses="filterList(filteredList, 'SUBJ', 'VS')" :randomValues="randomValues" :convertToRange="convertToRange"></Visit>
      </div>
      <div class="womengender">
        <WomenGender :womengenderClasses="filterList(filteredList, 'SUBJ', 'WGS')" :randomValues="randomValues" :convertToRange="convertToRange"></WomenGender>
      </div>
      <div class="worldlang">
        <WorldLang :worldlangClasses="filterList(filteredList, 'SUBJ', 'WLC')" :randomValues="randomValues" :convertToRange="convertToRange"></WorldLang>
      </div>
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
  import AtsSci from './AtsSci'
  import BusLeg from './BusLeg'
  import BioSciEng from './BioSciEng'
  import Business from './Business'
  import BioSci from './BioSci'
  import CivEng from './CivEng'
  import Chem from './Chem'
  import ChemEng from './ChemEng'
  import CommArts from './CommArts'
  import CompEng from './CompEng'
  import CompSci from './CompSci'
  import Econ from './Econ'
  import Educ from './Educ'
  import EduCollab from './EduCollab'
  import ElecEng from './ElecEng'
  import Engl from './Engl'
  import EngLing from './EngLing'
  import EngMgmt from './EngMgmt'
  import Engineer from './Engineer'
  import EarthSys from './EarthSys'
  import Finance from './Finance'
  import FirstYear from './FirstYear'
  import GlobStud from './GlobStud'
  import Geog from './Geog'
  import Honors from './Honors'
  import Health from './Health'
  import Hist from './Hist'
  import IntLang from './IntLang'
  import InfoSys from './InfoSys'
  import IndSysEng from './IndSysEng'
  import Kines from './Kines'
  import ListLic from './ListLic'
  import Mat from './Mat'
  import MechAero from './MechAero'
  import Mgmt from './Mgmt'
  import MilSci from './MilSci'
  import Market from './Market'
  import MgmtSci from './MgmtSci'
  import MatSci from './MatSci'
  import Music from './Music'
  import MusAppl from './MusAppl'
  import Jazz from './Jazz'
  import Ensemble from './Ensemble'
  import Nursing from './Nursing'
  import OffCar from './OffCar'
  import OptEng from './OptEng'
  import Phys from './Phys'
  import Phil from './Phil'
  import ProfStud from './ProfStud'
  import PolSci from './PolSci'
  import Psy from './Psy'
  import Soc from './Soc'
  import SpaSci from './SpaSci'
  import Stats from './Stats'
  import Theatre from './Theatre'
  import Visit from './Visit'
  import WomenGender from './WomenGender'
  import WorldLang from './WorldLang'

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
     'AtsSci': AtsSci,
     'BusLeg': BusLeg,
     'BioSciEng': BioSciEng,
     'Business': Business,
     'BioSci': BioSci,
     'CivEng': CivEng,
     'Chem': Chem,
     'ChemEng': ChemEng,
     'CommArts': CommArts,
     'CompEng': CompEng,
     'CompSci': CompSci,
     'Econ': Econ,
     'Educ': Educ,
     'EduCollab': EduCollab,
     'ElecEng': ElecEng,
     'Engl': Engl,
     'EngLing': EngLing,
     'EngMgmt': EngMgmt,
     'Engineer': Engineer,
     'EarthSys': EarthSys,
     'Finance': Finance,
     'FirstYear': FirstYear,
     'GlobStud': GlobStud,
     'Geog': Geog,
     'Honors': Honors,
     'Health': Health,
     'Hist': Hist,
     'IntLang': IntLang,
     'InfoSys': InfoSys,
     'IndSysEng': IndSysEng,
     'Kines': Kines,
     'ListLic': ListLic,
     'Mat': Mat,
     'MechAero': MechAero,
     'Mgmt': Mgmt,
     'MilSci': MilSci,
     'Market': Market,
     'MgmtSci': MgmtSci,
     'MatSci': MatSci,
     'Music': Music,
     'MusAppl': MusAppl,
     'Jazz': Jazz,
     'Ensemble': Ensemble,
     'Nursing': Nursing,
     'OffCar': OffCar,
     'OptEng': OptEng,
     'Phys': Phys,
     'Phil': Phil,
     'ProfStud': ProfStud,
     'PolSci': PolSci,
     'Psy': Psy,
     'Soc': Soc,
     'SpaSci': SpaSci,
     'Stats': Stats,
     'Theatre': Theatre,
     'Visit': Visit,
     'WomenGender': WomenGender,
     'WorldLang': WorldLang,
    },
    data () {
      return {
        filteredList: {},
        search: '',
        instructor: '',
        selectedFilters: [],
        subjects: [
        {id: 'ACC', classname: 'Accounting'},
        {id: 'ARH', classname: 'Art History'},
        {id: 'ARS', classname: 'Art Studio'},
        {id: 'AST', classname: 'Astronomy'},
        {id: 'ATS', classname: 'Atmospheric Science'},
        {id: 'BLS', classname: 'Business Legal Studies'},
        {id: 'BSE', classname: 'Biotechnology Science and Engineering'},
        {id: 'BUS', classname: 'Business'},
        {id: 'BYS', classname: 'Biological Sciences'},
        {id: 'CE', classname: 'Civil Engineering'},
        {id: 'CH', classname: 'Chemistry'},
        {id: 'CHE', classname: 'Chemical Engineering'},
        {id: 'CM', classname: 'Communication Arts'},
        {id: 'CPE', classname: 'Computer Engineering'},
        {id: 'CS', classname: 'Computer Science'},
        {id: 'ECN', classname: 'Economics'},
        {id: 'ED', classname: 'Education'},
        {id: 'EDC', classname: 'Education Collaborative'},
        {id: 'EE', classname: 'Electrical Engineering'},
        {id: 'EH', classname: 'English'},
        {id: 'EHL', classname: 'English Linguistics'},
        {id: 'EM', classname: 'Engineering Management'},
        {id: 'ENG', classname: 'Engineering'},
        {id: 'ESS', classname: 'Earth System Science'},
        {id: 'FIN', classname: 'Finance'},
        {id: 'FYE', classname: 'First Year Experience'},
        {id: 'GS', classname: 'Global Studies'},
        {id: 'GY', classname: 'Geography'},
        {id: 'HON', classname: 'Honors'},
        {id: 'HPE', classname: 'Health and Physical Education'},
        {id: 'HY', classname: 'History'},
        {id: 'ILC', classname: 'Intensive Language and Culture'},
        {id: 'IS', classname: 'Information Systems'},
        {id: 'ISE', classname: 'Industrial & Systems Engineering '},
        {id: 'KIN', classname: 'Kinesiology'},
        {id: 'LLP', classname: 'Listeners License Program'},
        {id: 'MA', classname: 'Math'},
        {id: 'MAE', classname: 'Mechanical & Aerospace Engineering'},
        {id: 'MGT', classname: 'Management'},
        {id: 'MIL', classname: 'Military Science'},
        {id: 'MKT', classname: 'Marketing'},
        {id: 'MSC', classname: 'Art History'},
        {id: 'MTS', classname: 'Materials Science'},
        {id: 'MU', classname: 'Music'},
        {id: 'MUA', classname: 'Music Applied'},
        {id: 'MUJ', classname: 'Music Jazz'},
        {id: 'MUX', classname: 'Music Ensembles'},
        {id: 'NUR', classname: 'Nursing'},
        {id: 'OCS', classname: 'Office Career Services'},
        {id: 'OPE', classname: 'Optical Engineering'},
        {id: 'PH', classname: 'Physics'},
        {id: 'PHL', classname: 'Philosophy '},
        {id: 'PRO', classname: 'Professional Studies'},
        {id: 'PSC', classname: 'Political Science'},
        {id: 'PY', classname: 'Psychology'},
        {id: 'SOC', classname: 'Sociology'},
        {id: 'SPA', classname: 'Space Science'},
        {id: 'ST', classname: 'Statistics'},
        {id: 'TH', classname: 'Theatre'},
        {id: 'VS', classname: 'Visiting Student'},
        {id: 'WGS', classname: 'Womens and Gender Studies'},
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
              //console.log(dbRef[key].INSTRUCTOR);
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
      	  //console.log(tempList);
      	  this.filteredList = tempList;
      	  //console.log(this.filteredList);
      	},
      	//Takes any list and any HEADER in the CSV file as a filterType and filters by value
      	filterList: function(listToFilter, filterByType, filterByVal) {
          var newList = []
          //console.log(filterByVal + " FILTERING BY ")
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
      	  //console.log(newVal + course.TITLE)
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

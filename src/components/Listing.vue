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
        <Accounting v-if="accList.length > 0" :accountingClasses="accList" :randomValues="randomValues" :convertToRange="convertToRange"></Accounting>
      </div>
      <div class="arthistory">
        <ArtHistory v-if="arthistList.length > 0" :arthistClasses="arthistList" :randomValues="randomValues" :convertToRange="convertToRange"></ArtHistory>
      </div>
      <div class="artstud">
        <ArtStudio v-if="artstudList.length > 0" :artstudClasses="artstudList" :randomValues="randomValues" :convertToRange="convertToRange"></ArtStudio>
      </div>
      <div class="astronomy">
        <Astronomy v-if="astronomyList.length > 0" :astClasses="astronomyList" :randomValues="randomValues" :convertToRange="convertToRange"></Astronomy>
      </div>
      <div class="atsscience">
        <AtsSci v-if="atsscienceList.length > 0" :atssciClasses="atsscienceList" :randomValues="randomValues" :convertToRange="convertToRange"></AtsSci>
      </div>
      <div class="busleg">
        <BusLeg v-if="buslegList.length > 0" :buslegClasses="buslegList" :randomValues="randomValues" :convertToRange="convertToRange"></BusLeg>
      </div>
      <div class="bioscieng">
        <BioSciEng v-if="biosciengList.length > 0" :biosciengClasses="biosciengList" :randomValues="randomValues" :convertToRange="convertToRange"></BioSciEng>
      </div>
      <div class="business">
        <Business v-if="businessList.length > 0" :businessClasses="businessList" :randomValues="randomValues" :convertToRange="convertToRange"></Business>
      </div>
      <div class="biosci">
        <BioSci v-if="biosciList.length > 0" :biosciClasses="biosciList" :randomValues="randomValues" :convertToRange="convertToRange"></BioSci>
      </div>
      <div class="civeng">
        <CivEng v-if="civengList.length > 0" :civengClasses="civengList" :randomValues="randomValues" :convertToRange="convertToRange"></CivEng>
      </div>
      <div class="chem">
        <Chem v-if="chemList.length > 0" :chemClasses="chemList" :randomValues="randomValues" :convertToRange="convertToRange"></Chem>
      </div>
      <div class="chemeng">
        <ChemEng v-if="chemengList.length > 0" :chemengClasses="chemengList" :randomValues="randomValues" :convertToRange="convertToRange"></ChemEng>
      </div>
      <div class="commarts">
        <CommArts v-if="commartsList.length > 0" :commartsClasses="commartsList" :randomValues="randomValues" :convertToRange="convertToRange"></CommArts>
      </div>
      <div class="compeng">
        <CompEng v-if="compengList.length > 0" :compengClasses="compengList" :randomValues="randomValues" :convertToRange="convertToRange"></CompEng>
      </div>
      <div class="compsci">
        <CompSci v-if="compsciList.length > 0" :compsciClasses="compsciList" :randomValues="randomValues" :convertToRange="convertToRange"></CompSci>
      </div>
      <div class="econ">
        <Econ v-if="econList.length > 0" :econClasses="econList" :randomValues="randomValues" :convertToRange="convertToRange"></Econ>
      </div>
      <div class="educ">
        <Educ v-if="educList.length > 0" :educClasses="educList" :randomValues="randomValues" :convertToRange="convertToRange"></Educ>
      </div>
      <div class="educollab">
        <EduCollab v-if="educollabList.length > 0" :educollabClasses="educollabList" :randomValues="randomValues" :convertToRange="convertToRange"></EduCollab>
      </div>
      <div class="eleceng">
        <ElecEng v-if="elecengList.length > 0" :elecengClasses="elecengList" :randomValues="randomValues" :convertToRange="convertToRange"></ElecEng>
      </div>
      <div class="engl">
        <Engl v-if="englList.length > 0" :englClasses="englList" :randomValues="randomValues" :convertToRange="convertToRange"></Engl>
      </div>
      <div class="engling">
        <EngLing v-if="englingList.length > 0" :englingClasses="englingList" :randomValues="randomValues" :convertToRange="convertToRange"></EngLing>
      </div>
      <div class="engmgmt">
        <EngMgmt v-if="engmgmtList.length > 0" :engmgmtClasses="engmgmtList" :randomValues="randomValues" :convertToRange="convertToRange"></EngMgmt>
      </div>
      <div class="engineer">
        <Engineer v-if="engineerList.length > 0" :engineerClasses="engineerList" :randomValues="randomValues" :convertToRange="convertToRange"></Engineer>
      </div>
      <div class="earthsys">
        <EarthSys v-if="earthsysList.length > 0" :earthsysClasses="earthsysList" :randomValues="randomValues" :convertToRange="convertToRange"></EarthSys>
      </div>
      <div class="finance">
        <Finance v-if="financeList.length > 0" :financeClasses="financeList" :randomValues="randomValues" :convertToRange="convertToRange"></Finance>
      </div>
      <div class="firstyear">
        <FirstYear v-if="firstyearList.length > 0" :firstyearClasses="firstyearList" :randomValues="randomValues" :convertToRange="convertToRange"></FirstYear>
      </div>
      <div class="globstud">
        <GlobStud v-if="globstudList.length > 0" :globstudClasses="globstudList" :randomValues="randomValues" :convertToRange="convertToRange"></GlobStud>
      </div>
      <div class="geog">
        <Geog v-if="geogList.length > 0" :geogClasses="geogList" :randomValues="randomValues" :convertToRange="convertToRange"></Geog>
      </div>
      <div class="honors">
        <Honors v-if="honorsList.length > 0" :honorsClasses="honorsList" :randomValues="randomValues" :convertToRange="convertToRange"></Honors>
      </div>
      <div class="health">
        <Health v-if="healthList.length > 0" :healthClasses="healthList" :randomValues="randomValues" :convertToRange="convertToRange"></Health>
      </div>
      <div class="hist">
        <Hist v-if="histList.length > 0" :histClasses="histList" :randomValues="randomValues" :convertToRange="convertToRange"></Hist>
      </div>
      <div class="intlang">
        <IntLang v-if="intlangList.length > 0" :inglangClasses="intlangList" :randomValues="randomValues" :convertToRange="convertToRange"></IntLang>
      </div>
      <div class="infosys">
        <InfoSys v-if="infosysList.length > 0" :infoSysClasses="infosysList" :randomValues="randomValues" :convertToRange="convertToRange"></InfoSys>
      </div>
      <div class="indsyseng">
        <IndSysEng v-if="indsysengList.length > 0" :indsysengClasses="indsysengList" :randomValues="randomValues" :convertToRange="convertToRange"></IndSysEng>
      </div>
      <div class="kines">
        <Kines v-if="kinesList.length > 0" :kinesClasses="kinesList" :randomValues="randomValues" :convertToRange="convertToRange"></Kines>
      </div>
      <div class="listlic">
        <ListLic v-if="listlicList.length > 0" :listlicClasses="listlicList" :randomValues="randomValues" :convertToRange="convertToRange"></ListLic>
      </div>
      <div class="mat">
        <Mat v-if="matList.length > 0" :matClasses="matList" :randomValues="randomValues" :convertToRange="convertToRange"></Mat>
      </div>
      <div class="mechaero">
        <MechAero v-if="mechaeroList.length > 0" :mechaeroClasses="mechaeroList" :randomValues="randomValues" :convertToRange="convertToRange"></MechAero>
      </div>
      <div class="mgmt">
        <Mgmt v-if="mgmtList.length > 0" :mgmtClasses="mgmtList" :randomValues="randomValues" :convertToRange="convertToRange"></Mgmt>
      </div>
      <div class="milsci">
        <MilSci v-if="milsciList.length > 0" :milsciClasses="milsciList" :randomValues="randomValues" :convertToRange="convertToRange"></MilSci>
      </div>
      <div class="market">
        <Market v-if="marketList.length > 0" :marketClasses="marketList" :randomValues="randomValues" :convertToRange="convertToRange"></Market>
      </div>
      <div class="mgmtsci">
        <MgmtSci v-if="mgmtsciList.length > 0" :mgmtsciClasses="mgmtsciList" :randomValues="randomValues" :convertToRange="convertToRange"></MgmtSci>
      </div>
      <div class="matsci">
        <MatSci v-if="matsciList.length > 0" :matsciClasses="matsciList" :randomValues="randomValues" :convertToRange="convertToRange"></MatSci>
      </div>
      <div class="music">
        <Music v-if="musicList.length > 0" :musicClasses="musicList" :randomValues="randomValues" :convertToRange="convertToRange"></Music>
      </div>
      <div class="musappl">
        <MusAppl v-if="musapplList.length > 0" :musapplClasses="musapplList" :randomValues="randomValues" :convertToRange="convertToRange"></MusAppl>
      </div>
      <div class="jazz">
        <Jazz v-if="jazzList.length > 0" :jazzClasses="jazzList" :randomValues="randomValues" :convertToRange="convertToRange"></Jazz>
      </div>
      <div class="ensemble">
        <Ensemble v-if="ensembleList.length > 0" :ensembleClasses="ensembleList" :randomValues="randomValues" :convertToRange="convertToRange"></Ensemble>
      </div>
      <div class="nursing">
        <Nursing v-if="nursingList.length > 0" :nursingClasses="nursingList" :randomValues="randomValues" :convertToRange="convertToRange"></Nursing>
      </div>
      <div class="offcar">
        <OffCar v-if="offcarList.length > 0" :offcarClasses="offcarList" :randomValues="randomValues" :convertToRange="convertToRange"></OffCar>
      </div>
      <div class="opteng">
        <OptEng v-if="optengList.length > 0" :optengClasses="optengList" :randomValues="randomValues" :convertToRange="convertToRange"></OptEng>
      </div>
      <div class="phys">
        <Phys v-if="physList.length > 0" :physClasses="physList" :randomValues="randomValues" :convertToRange="convertToRange"></Phys>
      </div>
      <div class="phil">
        <Phil v-if="philList.length > 0" :philClasses="philList" :randomValues="randomValues" :convertToRange="convertToRange"></Phil>
      </div>
      <div class="profstud">
        <ProfStud v-if="profstudList.length > 0" :profstudClasses="profstudList" :randomValues="randomValues" :convertToRange="convertToRange"></ProfStud>
      </div>
      <div class="polsci">
        <PolSci v-if="polsciList.length > 0" :polsciClasses="polsciList" :randomValues="randomValues" :convertToRange="convertToRange"></PolSci>
      </div>
      <div class="psy">
        <Psy v-if="psyList.length > 0" :psyClasses="psyList" :randomValues="randomValues" :convertToRange="convertToRange"></Psy>
      </div>
      <div class="soc">
        <Soc v-if="socList.length > 0" :socClasses="socList" :randomValues="randomValues" :convertToRange="convertToRange"></Soc>
      </div>
      <div class="spasci">
        <SpaSci v-if="spasciList.length > 0" :spasciClasses="spasciList" :randomValues="randomValues" :convertToRange="convertToRange"></SpaSci>
      </div>
      <div class="stats">
        <Stats v-if="statsList.length > 0" :statsClasses="statsList" :randomValues="randomValues" :convertToRange="convertToRange"></Stats>
      </div>
      <div class="theatre">
        <Theatre v-if="theatreList.length > 0" :theatreClasses="theatreList" :randomValues="randomValues" :convertToRange="convertToRange"></Theatre>
      </div>
      <div class="visit">
        <Visit v-if="visitList.length > 0" :visitClasses="visitList" :randomValues="randomValues" :convertToRange="convertToRange"></Visit>
      </div>
      <div class="womengender">
        <WomenGender v-if="womengenderList.length > 0" :womengenderClasses="womengenderList" :randomValues="randomValues" :convertToRange="convertToRange"></WomenGender>
      </div>
      <div class="worldlang">
        <WorldLang v-if="worldlangList.length > 0" :worldlangClasses="worldlangList" :randomValues="randomValues" :convertToRange="convertToRange"></WorldLang>
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
        accList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ACC');
        },
        arthistList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ARH');
        },
        artstudList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ARS');
        },
        astronomyList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'AST');
        },
        atsscienceList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ATS');
        },
        buslegList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'BLS');
        },
        biosciengList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'BSE');
        },
        businessList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'BUS');
        },
        biosciList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'BYS');
        },
        civengList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'CE');
        },
        chemList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'CH');
        },
        chemengList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'CHE');
        },
        commartsList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'CM');
        },
        compengList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'CPE');
        },
        compsciList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'CS');
        },
        econList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ECN');
        },
        educList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ED');
        },
        educollabList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'EDC');
        },
        elecengList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'EE');
        },
        englList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'EH');
        },
        englingList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'EHL');
        },
        engmgmtList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'EM');
        },
        engineerList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ENG');
        },
        earthsysList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ESS');
        },
        financeList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'FIN');
        },
        firstyearList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'FYE');
        },
        globstudList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'GS');
        },
        geogList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'GY');
        },
        honorsList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'HON');
        },
        healthList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'HPE');
        },
        histList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'HY');
        },
        intlangList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ILC');
        },
        infosysList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'IS');
        },
        indsysengList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ISE');
        },
        kinesList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'KIN');
        },
        listlicList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'LLP');
        },
        matList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MA');
        },
        mechaeroList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MAE');
        },
        mgmtList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MGT');
        },
        milsciList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MIL');
        },
        marketList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MKT');
        },
        mgmtsciList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MSC');
        },
        matsciList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MTS');
        },
        musicList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MU');
        },
        musapplList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MUA');
        },
        jazzList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MUJ');
        },
        ensembleList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'MUX');
        },
        nursingList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'NUR');
        },
        offcarList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'OCS');
        },
        optengList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'OPE');
        },
        physList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'PH');
        },
        philList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'PHL');
        },
        profstudList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'PRO');
        },
        polsciList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'PSC');
        },
        psyList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'PY');
        },
        socList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'SOC');
        },
        spasciList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'SPA');
        },
        statsList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'ST');
        },
        theatreList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'TH');
        },
        visitList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'VS');
        },
        womengenderList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'WGS');
        },
        worldlangList: function() {
          return this.filterList(this.filteredList, 'SUBJ', 'WLC');
        },

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
        console.log(value)
      	  this.filteredList = this.dbRef.slice()
      	  var newList = []
      	  for (var object in value) {
            if (value[object] != "") {
              newList.push(object + ": " + value[object]);
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

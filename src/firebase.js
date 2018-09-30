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
    export default {
        /* name: 'Listing',
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
            } */
            name: 'Listing',
                data: function() {
                        return {
                        colleges: [
                                { id: 'ACC - Accounting',
                                    classes: function() {return {name: 'blah'}/*db.orderByChild("COLLEGE").equalTo("SC")*/}
                                }
                                /*{ id: 'AMS - Ancient & Medieval Studies' },
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
                                { id: 'WLC - World Languages and Cultures' }*/
                              ]
                        }
                }/*,
                computed: {
                        filteredColleges: function() {
                            return this.colleges.filter((college) => {
                                return college.id.toLowerCase().match(this.search.toLowerCase())
                            })
                        }
                    }*/
        }
</script>


export default {
    data () {
      return {
        instructor: '',
        colleges: [{ id: 'ACC', name: 'accounting'}, {id: 'MATH', name: 'math'}]
      }
    },
    firebase: {
          accountingList: db.ref('/').orderByChild('SUBJ').equalTo('ACC'),
          mathList: db.ref('/').orderByChild('SUBJ').equalTo('MA')
        }
    /*computed: {
          accountingTitles: function() {
          return
          }
    }*/
  }
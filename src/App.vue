<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/Nav'


  export default {
    name: 'app',
    components: {
      'Nav': Nav
    }
  }
  /*
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
  let db = firebaseApp.database()*/

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>

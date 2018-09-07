<template>
  <div id="app">
    <Nav></Nav>
    <!-- <Search></Search> -->
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  import Search from './components/Search'
  export default {
    name: 'app',
    components: {
      'Nav': Nav,
      'Search': Search
    }
  }
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
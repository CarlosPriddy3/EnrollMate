<template>
<!--   <div>
    <nav>
      <router-link v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div> -->
  <b-navbar toggleable="md" type="dark" variant="primary">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/"><router-link to="/" style="color: white;">EnrollMate</router-link></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="ml-auto">
      <b-nav-item><router-link to="/" style="color: white;">Home</router-link></b-nav-item>
      <b-nav-item><router-link to="/about" style="color: white;">About</router-link></b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
	export default {
  	name: 'Navigation',
  	data() {
    	return {
      	links: [
        	{
          	id: 0,
          	text: 'Home',
          	page:'/'
        	},
        	{
          	id: 1,
          	text: 'About',
          	page:'/About'
        	}
        ]
    	}
  	}
	}
</script>

<style>
	.router-link {
		color: white;
	}
</style>
<template>
  <div>
  	<!-- <Search></Search> -->
    <Filtering></Filtering>
    <Listing></Listing>
  </div>
</template>

<script>
  import Filtering from './Filtering'
	import Listing from './Listing'
	export default {
  		name: 'Home',
  		components: {
  			'Listing': Listing,
        'Filtering': Filtering
  		}
	}
</script>

<style>
	h1, p {
		margin: 30px;
	}
</style>
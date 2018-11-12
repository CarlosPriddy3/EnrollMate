<template>
  <div>
    <Listing></Listing>
  </div>
</template>

<script>
	import Listing from './Listing'
	export default {
  		name: 'Home',
  		components: {
  			'Listing': Listing,
  		}
	}
</script>

<style>
	h1, p {
		margin: 30px;
	}
</style>
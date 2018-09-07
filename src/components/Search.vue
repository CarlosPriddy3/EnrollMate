<template>
	<b-container>
  <b-row>
    <b-col lg="6">
      <b-input-group>
        <b-input-group-prepend is-text>
            <input type="checkbox" aria-label="Checkbox for following text input">
        </b-input-group-prepend>
        <b-form-input type="text" aria-label="Text input with checkbox" />
      </b-input-group>
    </b-col>

    <b-col lg="6">
      <b-input-group>
        <b-input-group-prepend is-text>
            <input type="radio" aria-label="Radio for following text input">
        </b-input-group-prepend>
        <b-form-input type="text" aria-label="Text input with radio button" />
      </b-input-group>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
	export default {
  	name: 'Search' //this is the name of the component
	}
</script>

<style>
		b-container {
			margin:15;
		}
</style>
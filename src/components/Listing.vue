<template>
	<div class="listing" style="overflow-y: scroll;">
    <!-- <div class="text-xs-center mb-3">{{ panel }}</div> -->
    <v-expansion-panel v-model="panel" expand>
    	<v-expansion-panel-content>
    		<div slot="header">ACC - Accounting</div>
    	</v-expansion-panel-content>
      <v-expansion-panel-content v-for="(item, i) in 15" :key="i">
        <div slot="header">College</div>
        <v-card>
          <v-expansion-panel-content class="grey lighten-1" v-for="(item, i) in 5" :key="i">
        		<div slot="header">Class</div>
        		<v-card>
          		<v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        		</v-card>
      		</v-expansion-panel-content>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
	export default {
		name: 'Listing'
	}
</script>

<style>
	.listing {
		margin:100px;
		text-align: center;
		max-width: 90%;
		height: 750px;
		border: 1px solid #757575;
	}
</style>
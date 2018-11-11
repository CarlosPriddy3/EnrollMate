<template>
    <div class="filter_panel" id="filtering">
        <div class="dropdown">
            <select v-model="college" id="colleges">
                <option disabled value="">Colleges</option>
                <option>Arts, Humanities, and Social Sciences</option>
                <option>Business</option>
                <option>Education</option>
                <option>Engineering</option>
                <option>Nursing</option>
                <option>Professional and Continuing Studies</option>
                <option>Science</option>
                <option>Graduate School</option>
                <option>Honors</option>
            </select>
            <br>
            <span class="results"><b>Selected College: {{ college }}</b></span>
        </div>
        <div class="dropdown">
            <select v-model="credit_hours" id="credit_hours">
                <option disabled value="">Credit Hours</option>
                <option>1 Credit Hour</option>
                <option>2 Credit Hours</option>
                <option>3 Credit Hours</option>
                <option>4 Credit Hours</option>
            </select>
            <br>
            <span class="results"><b>Selected Credit Hours: {{ credit_hours }}</b></span>
        </div>
        <div class="checkboxes" id="days">
            <input type="checkbox" id="monday" value="M" v-model="checkedDays">
            <label for="monday">M </label>
            <input type="checkbox" id="tuesday" value="T" v-model="checkedDays">
            <label for="tuesday">T </label>
            <input type="checkbox" id="wednesday" value="W" v-model="checkedDays">
            <label for="wednesday">W </label>
            <input type="checkbox" id="thursday" value="R" v-model="checkedDays">
            <label for="thursday">R </label>
            <input type="checkbox" id="friday" value="F" v-model="checkedDays">
            <label for="friday">F </label>
            <br>
            <span class="results"><b>Checked days: {{ checkedDays }}</b></span>
        </div>
        <div class="search_bar" id="search_course">
            <input v-model="searchResult" placeholder="Search for a course...">
        </div>
        <div class="submit" id="submit_button">
            <button class="submit_botton" v-on:click="emitGlobalClickEvent()">See Results</button>
        </div>
            
        </div>
    </div>
</template>

<script>

    import { EventBus } from './event-bus.js';

    export default {
        name: 'filtering',
        data() {
            return {
                college: '',
                credit_hours: '',
                checkedDays: [],
                days: "",
                searchResult: '',
                allFilters: []
            }
        },
        methods: {
            emitGlobalClickEvent() {
                var i;
                var j;
                for (i = 0; i < this.checkedDays.length; i++) {
                    this.days += this.checkedDays[i];
                }
                this.allFilters.push(this.college);
                this.allFilters.push(this.credit_hours);
                this.allFilters.push(this.days);
                this.allFilters.push(this.searchResult);

                EventBus.$emit('filters', this.allFilters)
            }
        }
    }

</script>

<style>
  .filter_panel{
    margin:75px;
    margin-bottom: 25px;
    text-align: left;
    max-width: 95%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    font-size: 14px;
    padding: 16px 8px 8px 16px;
    background: #fff;
    overflow: hidden;
    position: relative;
  }

  .filter_panel .dropdown{
    width: 100%;
    background-position: 80% relative;
    padding: 8px 8px 8px 8px;
    font-size:15px;
    margin-bottom: 16px;
  }

  .filter_panel .dropdown select{
    background: transparent;
    line-height: 1;
    border: 0;
    padding: 0;
    border-radius: 0;
    width: 48%;
    position: relative;
    z-index: 10;
    font-size: 1em;
  }

  .filter_panel .checkboxes{    
    padding: 8px 8px 8px 8px;
    font-size: 16px;
    margin-bottom: 16px;
  }

  .filter_panel .results{
    font-size: 14px;
    margin-bottom: 6px;
  }

  .filter_panel .p{
    font-size: 14px;
    margin-bottom: 6px;
  }

  .search_bar {
    margin-top: 20px;
    padding: 8px 8px 8px 8px;
    font-size: 16px;
  }

  .submit {
    margin-top: 25px;
    margin-bottom: 15px;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    text-align: center;
  }
    
  .submit .submit_button {
    border-radius: 2px;
    border-color: black;
  }
</style>
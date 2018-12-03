<template>

    <div class="filter_panel" id="filtering">
       <div class="dropdown" style="width:180px">
            <select v-model="college" id="colleges" style="width:160px"> 
                <option disabled value="">Colleges</option>
                <option value="AHSS">Arts, Humanities, and Social Sciences</option>
                <option value="BA">Business</option>
                <option value="ED">Education</option>
                <option value="EG">Engineering</option>
                <option value="NU">Nursing</option>
                <option value="PC">Professional and Continuing Studies</option>
                <option value="SC">Science</option>
                <option value="GC">Graduate School</option>
                <option value="HN">Honors</option>
            </select>
            <br>
<!--             <span class="results"><b>Selected College: {{ college }}</b></span> -->
        </div>
        <div class="dropdown" style="width:180px">
            <select v-model="credit_hours" id="credit_hours" style="width:160px">
                <option disabled value="">Credit Hours</option>
                <option value="1">1 Credit Hour</option>
                <option value="2">2 Credit Hours</option>
                <option value="3">3 Credit Hours</option>
                <option value="4">4 Credit Hours</option>
            </select>
            <br>
<!--             <span class="results"><b>Selected Credit Hours: {{ credit_hours }}</b></span> -->
        </div>
        <div class="checkboxes" id="days" style="width:200px">
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
<!--             <span class="results"><b>Checked days: {{ checkedDays }}</b></span> -->
        </div>
        <div class="search_bar" id="search_course" style="width:240px">
            <input v-model="searchResult" placeholder="Search for a course...">
        </div>
        <div class="submit" id="submit_button" style="width:200px">
            <button class="submit_botton" v-on:click="emitGlobalClickEvent()">See Results</button>
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
                allFilters: {},
                items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
                checkbox: true
            }
        },
        methods: {
            emitGlobalClickEvent() {
                console.log('this method was called');
                this.allFilters = {};
                var i;
                var j;
                this.days = [];
                for (i = 0; i < this.checkedDays.length; i++) {
                    this.days += this.checkedDays[i];
                }
                this.allFilters['COLLEGE'] = this.college;
                this.allFilters['CREDIT_HOURS'] = this.credit_hours;
                this.allFilters['DAYS'] = this.days;
                this.allFilters['TITLE'] = this.searchResult;
                var keys = Object.keys(this.allFilters);
                for (var key in keys) {
                    console.log(keys[key]);
                }
                this.$emit('clicked', this.allFilters);
            }
        }
    }

</script>

<style>
  .filter_panel{
    margin:75px;
    margin-bottom: 25px;
    text-align: center;
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
    border: 1px solid #ccc;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    text-align: center;
    left: 50%;
    transform: translate(-50%, 0%);

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
    padding: 8px 8px 8px 8px;
    background:url('arrow-down.png') no-repeat;
    background-position:95% center;
    background-size: 12%;
  }

  .filter_panel .checkboxes{
    padding: 12px 8px 8px 8px;
    font-size: 16px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  .filter_panel .results{
    font-size: 14px;
    margin-bottom: 6px;
    padding-left: 2px;
  }

/*  .filter_panel .p{
    font-size: 14px;
    margin-bottom: 6px;
  }*/

  .search_bar {
    margin-top: 20px;
    padding: 8px 10px 8px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    text-align: left;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
    background:url('search.png') no-repeat;
    background-position:95% center;
    background-size: 8%;   
  }

  .submit {
    margin-top: 75px;
    margin-bottom: 15px;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  .submit .submit_button {
    border-radius: 2px;
    border-color: black;
  }
</style>
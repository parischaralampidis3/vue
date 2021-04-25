<template>
  <div class="home">
    <WeatherInput v-bind:weatherData="weatherData"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherInput from "../components/WeatherInput";

export default {
  name: "home",
  components: {
    WeatherInput
  },
  data(){
    return{

           weatherData:[
       {  city:"Athens", description:"cloudy", temprature: "20" },
       {  city:"London", description:"rainy", temprature: "10" },
       {  city:"San Francisco", description:"sunny", temprature: "30" }
      ]
     
    }
  }
};
</script>

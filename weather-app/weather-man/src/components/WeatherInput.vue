<template>
  <div>
    <h3>{{ msg }}</h3>
    <br /><br />

    <button v-on:click="getWeatherData">Get weather data</button>
    <div v-for="weatherData in weatherDataList" :key="weatherData.id">
      <div id="weather-stats">
        <div>
          <span>{{ weatherData.time }}</span>
        </div>
        <div>
          <span class="location">{{ weatherData.location }}</span>
        </div>
        <div>
          <span>{{ weatherData.temp }}</span>
        </div>
      </div>
    </div>

    <!-- <ul>
      <li v-for="(data, x) in weatherData" :key="x">
      <h3> {{data.city}}</h3>
      <p>{{data.description}}</p>
      <p>{{data.temprature}}</p>
      </li>
    </ul>
    -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "WeatherInput",

  data() {
    return {
      msg: "Welcome at Weather-man app",
      weatherDataList: [],
    };
  },
  methods: {
    async getWeatherData() {
      const data = await axios
        .get("weather.json")
        .then((response) => (this.weatherDataList = response.data));
      return data;
    },
  },
  props: ["weatherData"],
};
</script>

<style scoped>
#weather-data {
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-left: 20px;
  border-bottom: 2px solid #ccc;
  padding: 20px;
}

.weather-stats {
  flex-grow: 8;
  text-align: left;
  padding-left: 20px;
}

.weather-stats .location {
  font-size: 30px;
}

.weather-temp {
  flex-grow: 1;
  font-size: 35px;
}

img {
  width: 70px;
}

button {
  padding: 10px;
  background-color: #1aa832;
  color: white;
  border: 1px solid #ccc;
}
a {
  color: #42b983;
}
</style>

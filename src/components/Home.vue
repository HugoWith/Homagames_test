<template>
  <div class="hydrane">
    <h1>Hydrane AngularJS Frontend Dev CS</h1>
    <button>Go</button>

    <select v-model="selectedContinent" name="continent">
      <option
        v-for="(item, index) in Continents"
        :key="index"
        :value="item.continentName"
      >
        {{ item.continentName }}</option
      >
    </select>

    <select v-model="selectedMetric" name="metrics">
      <option
        v-for="(item, index) in Continents"
        :key="index"
        :value="item.countryCode"
      >
        {{ item.countryCode }}</option
      >
      <option
        v-for="(item, index) in Continents"
        :key="index"
        :value="item.areaInSqKm"
      >
        {{ item.areaInSqKm }}</option
      >
      <option
        v-for="(item, index) in Continents"
        :key="index"
        :value="item.population"
      >
        {{ item.population }}</option
      >
    </select>
    <select name="maxChartValue" id="">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      ContinentsFiltered: [],
      Continents: [],
      selectedContinent: "",
      selectedMetric: ""
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get(
        "http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane"
      )
      .then(response => {
        this.data = response;
        let geoNameArray = response.data.geonames;
        geoNameArray.forEach(element => {
          // console.log(element.continentName);
          this.Continents.push(element);
        });
        // console.log(response.data.geonames);
        // console.log(this.Continents);
      });
  },
  methods: {
    filterContinents() {
      let filterContinents = this.Continents;
      let filteredContinent = filterContinents.filter(
        (v, i, a) => a.indexOf(v) === i
      );
      this.ContinentsFiltered = filteredContinent;
      console.log(this.ContinentsFiltered);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

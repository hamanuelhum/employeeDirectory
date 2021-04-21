<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Looking for an employee's direct reports?
    <form>
      <input v-model="value" type="text" placeholder="Enter 'tso Id' here" />
      <button @click.prevent="submit" type="button">Enter</button>
    </form>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="(name, key) in results" :key="name">{{ key }}:{{ name }}</li>
    </ul>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "InitialSearch",
  props: {
    msg: String
  },
  data() {
    return {
      loading: false,
      results: null,
      error: "",
      value: null
    };
  },
  methods: {
    fetchDirectory(tsoId){
      this.loading = true;
      axios.get(`https://employee-search-api.apps.cf.humana.local/employees?tsoid=${tsoId}`)
    .then((response) => {response.json()})
    .then((res) => {
      console.log(res.json())
      // HELP: When you want to avoid CORS, run this command /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir="/tmp/chrome_dev_session" --disable-web-security

      // res[0].directReports.forEach((employee) => {
      //  this.results = employee.name
      //  console.log(employee)
      // //  console.log("recursive methoddddd", this.fetchDirectory(employee.tsoId))
      // });
    })
    .catch((e) => {
      this.loading = false;
      console.warn(e,`no direct reports for ${tsoId}`);
      this.error = e;
    });
    },
    submit() {
      // console.log(this.value);
      this.fetchDirectory(this.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

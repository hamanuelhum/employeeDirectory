<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/Humana.svg">
    <InitialSearch msg="Welcome to the Direct Reports Directory"/>
  </div>
</template>

<script>
import InitialSearch from './components/InitialSearch.vue'

export default {
  name: 'App',
  components: {
    InitialSearch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

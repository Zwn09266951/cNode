<template>
  <div id="app">
    <mune></mune>
    <list></list>
  </div>
</template>

<script>
import list from './components/list'
import mune from './components/nav'

import './assets/css/reset.css'

export default {
  name: 'app',
  components: {
    list,
    mune
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

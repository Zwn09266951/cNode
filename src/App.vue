<template>
  <div id="app">
    <mune></mune>
    <classifyTab></classifyTab>
    <list :page="page"></list>
    <a class="button" @click="previous" >上一页</a><span>{{page}}</span><a class="button" @click="next" >下一页</a>
  </div>
</template>

<script>
import list from './components/list'
import mune from './components/nav'
import classifyTab from './components/classifyTab'

import './assets/css/reset.css'

export default {
  name: 'app',
  data () {
    return {
      page: 1
    }
  },
  components: {
    list,
    mune,
    classifyTab
  },
  methods: {
    next () {
      console.log(this.page ++)
    },
    previous () {
      if (this.page !== 1) {
        this.page --
      } else {
        window.alert('已经是第一页了！')
      }
    }
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

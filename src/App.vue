<template>
  <div id="app">
    <mune></mune>
    <classifyTab></classifyTab>
    <router-view></router-view>
    <!-- <list :page="page"></list>
    <a class="button" @click="home" >首页</a>
    <a class="button" @click="previous" >上一页</a><span>{{page}}</span><a class="button" @click="next" >下一页</a>
    <input type="text"@keyup.enter="jump" name="name" v-model="page1" style="width:50px;text-align:center;">
    <a class="button" @click="jump">跳转</a> -->
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
    jump () {
      // var enterNumber = Number(document.getElementById('jumpNumber').value)
      // console.log(111)
      // if (enterNumber !== 0) {
      //   this.page = enterNumber
      //   document.getElementById('jumpNumber').value = ''
      //   console.log(enterNumber)
      // }
      this.page = this.page1
      this.page1 = ''
    },
    home () {
      this.page = 1
    },
    next () {
      this.page ++
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

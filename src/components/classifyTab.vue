<template lang="html">
  <div class="classifyTab" id="classifyTab">
    <router-link :class="{ 'is-active': active === 'all' }" :to="{ path: '/', query: { tab: 'all' } }" >全部</router-link>
    <router-link :class="{ 'is-active': active === 'good' }" :to="{ path: '/', query: { tab: 'good'} }" >精华</router-link>
    <router-link :class="{ 'is-active': active === 'share' }" :to="{ path: '/', query: { tab: 'share'} }" >分享</router-link>
    <router-link :class="{ 'is-active': active === 'ask' }" :to="{ path: '/', query: { tab: 'ask'} }" >问答</router-link>
    <router-link :class="{ 'is-active': active === 'job' }" :to="{ path: '/', query: { tab: 'job'} }" >招聘</router-link>
  </div>
</template>

<script>
// import list from './list'
export default {
  data () {
    return {
      active: 'all'
    }
  },

  watch: {
    $route () {
      if (this.$route.query.tab) {
        this.active = this.$route.query.tab
      }
    }
  }
}
</script>

<style lang="css">
.classifyTab {
  margin: 10px;
}
.classifyTab a {
  padding: 2px 5px;
  display: inline-block;
  color:#80bd01;
  border-radius: 5px;
}
.is-active {
  color: #fff!important;
  background: #80bd01;
}
</style>

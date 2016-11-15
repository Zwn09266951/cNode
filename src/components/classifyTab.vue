<template lang="html">
  <div class="classifyTab" id="classifyTab">
    <router-link class="" :to="{ path: 'all' }" >全部</router-link>
    <router-link class="" :to="{ path: 'good' }" >精华</router-link>
    <router-link class="" :to="{ path: 'share' }" >分享</router-link>
    <router-link class="" :to="{ path: 'ask' }" >问答</router-link>
    <router-link class="" :to="{ path: 'job' }" >招聘</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>

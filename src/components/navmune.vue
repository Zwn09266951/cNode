<template>
  <div class="rt " id="navmune">
    <ul>
      <router-link :to="{path:'/Register'}">注册</router-link>
      <router-link :to="{path:'/LogIn'}">登陆</router-link>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'navmune',
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

<style>
#navmune ul li {
  float: left;
  padding: 0 5px;
}

#navmune ul li a {
  color: #999;
  font-size: 14px;
}

#navmune ul li a:hover {
  color: #fff;
}
</style>

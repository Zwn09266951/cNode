<template>
  <div class="rt " id="navmune">
    <ul>
      <li><a href="">首页</a></li>
      <li><a href="">新手入门</a></li>
      <li><a href="">API</a></li>
      <li><a href="">关于</a></li>
      <li><a href="">注册</a></li>
      <li><a href="">登陆</a></li>
    </ul>
  </div>
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

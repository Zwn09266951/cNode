<template>
  <div class="mune" id="mune">
    <div class="search lf">
      <span class="lf">
        <img src="../assets/img/cnodejs_light.svg" alt="" width="120" height="30"/>
      </span>
      <span class="lf">
        <form class="searchbar lf" action="index.html" method="post">
          <input type="text" name="name" value="">
        </form>
      </span>
    </div>
    <navmune></navmune>
  </div>

</template>

<script>
 import navmune from './navmune'
 export default {
   name: 'mune',
   data () {
     return {
       msg: 'ddd'
     }
   },
   computed: {},
   ready () {},
   attached () {},
   methods: {},
   components: {
     navmune
   }
 }
</script>

<style>
.mune {
  width: 100%;
  background-color: #222;
  overflow: hidden;
  height: 40px;
  line-height: 40px;

}
.lf {
  float: left;
}

.rt {
  float: right;
}
.searchbar {
  overflow: hidden;

}
.searchbar input{
  height:22px;
  background:url(../assets/img/searchImg.png) no-repeat #888;
  background-position:3% 50% ;
  margin:0px;
  padding:0px;
  vertical-align:middle;
  border-radius: 25px;
  padding:2px 2px 2px 30px;
  outline: none;
  border: none;

}
</style>

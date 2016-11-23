<template lang="html">
  <div class="">
  <ul>
    <li>
      <div class="contentbox" v-html="content">
      </div>
    </li>
  </ul>
  </div>

</template>

<script>
import { _get } from '../api/news'
// import list from '.list'
export default {
  data () {
    return {
      content: ''
    }
  },
  watch: {
    // $route (val) {
    //   this.getcontent()
    // }
  },
  created () {
    this.getcontent()
  },
  methods: {
    getcontent () {
      let url = 'https://cnodejs.org/api/v1/'
      return _get(url + 'topic/' + this.$route.params.id).then((json) => {
        this.content = json.data.content
      })
    }
  }
}
</script>

<style lang="css">
.contentbox {
  background: #f1f1f1;
  margin: 10px 0;
  width: 100%;
}
.contentbox img {
  width: 100%;
}
</style>

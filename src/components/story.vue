<template>

</template>

<script>
import news from '../api/news'

export default {
  data () {
    return {
      lists: []
    }
  },
  computed: {},
  ready () {},
  attached () {},
  created () {
    this.getaritcle().then((json) => {
      this.lists = json
      console.log(this.list)
    })
  },
  methods: {
    getaritcle () {
      return news.getArticleInf()
    }
  },
  components: {
  }
}
</script>

<style>

</style>

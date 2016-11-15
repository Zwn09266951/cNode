<template>
  <div class="share">
    <ol>
      <li v-for="item in list.data">
        <div class="newsbox">
          <span class="userImg" title="用户头像"><img :src="item.author.avatar_url" alt="" width="30" height="30"/></span>
          <span class="reply" title="回复">{{item.reply_count}}</span>/<span class="clicks" title="点击数">{{item.visit_count}}</span>
          <span v-if="item.top" class="top">置顶</span>
          <span v-if="item.good" class="essence">精华</span>
          <span class="title" title="文章标题">{{item.title}}</span>
          <span class="latest_reply_time rt" title="最新回复时间" style="line-height: 30px;">
             <i v-if="item.day > 0">{{item.day}}天</i>
             <i v-if="item.hour > 0">{{item.hour}}小时</i>
             <i v-if="item.min > 0">{{item.min}}分</i>
             <i v-if="item.afterMin > 0">{{item.afterMin}}秒</i>
             <i>前</i>
          </span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import { _get } from '../api/news'

// let page = null
let url = 'https://cnodejs.org/api/v1/'
export default {
  data () {
    return {
      list: [],
      limit: 10
    }
  },
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  watch: {
    page (val) {
      this.getinf()
    }
  },
  created () {
    this.getinf()
  },
  methods: {
    getinf () {
      return _get(url + 'topics?mdrender=true' + '&&page=' + this.page + '&&limit=' + this.limit).then((json) => {
        this.list = json
        let nowdata = new Date()
        this.list.data.forEach((item, index) => {
          let str = item.last_reply_at
          let strTime = (str.substring(0, 10) + ' ' + str.substring(11, 19)).replace(/-/g, '/')
          let oldtime = new Date(strTime)
          let overtime = (nowdata.getTime() - oldtime.getTime()) / 1000
          let day = parseInt(overtime / (24 * 60 * 60))
          let afterDay = overtime - day * 24 * 60 * 60
          let hour = parseInt(afterDay / (60 * 60))
          let afterHour = overtime - day * 24 * 60 * 60 - hour * 60 * 60
          let min = parseInt(afterHour / 60)
          let afterMin = parseInt(overtime - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60)
          item.last_reply_at = day + '天' + hour + '小时前'
          item.day = day
          item.hour = hour
          item.min = min
          item.afterMin = afterMin
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  overflow: hidden;
  padding: 10px 0;
}
.top,.essence {
  color: #fff;
  background: #80bd01;
  border-radius: 3px;
  padding: 0 2px;
}
.reply {
  color: red;

}
.clicks {
  color: #999;
}

.newsbox {
  padding: 5px 10px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  width: 100%;
}

ul li span {
  display: inline-block;
  margin:0 5px;

}
a {
  color: #42b983;
}
</style>

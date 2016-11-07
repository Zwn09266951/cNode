<template>
  <div class="list">
    <ul>
      <li v-for="item in list.data">
        <div class="newsbox">
          <span class="userImg" title="用户头像"><img :src="item.author.avatar_url" alt="" width="30" height="30"/></span>
          <span class="reply" title="回复">{{item.reply_count}}</span>/<span class="clicks" title="点击数">{{item.visit_count}}</span>
          <span v-if="item.top" class="top">置顶</span>
          <span v-if="item.good" class="essence">精华</span>
          <span class="title" title="文章标题">{{item.title}}</span>
          <span class="latest_reply_time rt" title="最新回复时间" style="line-height: 30px;">
             <!-- {{item.last_reply_at}} -->
             <i v-if="item.day > 0">{{item.day}}天</i><i>{{item.hour}}</i><i>前</i>    
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import news from '../api/news'

export default {
  // name: 'list',
  data () {
    return {
      list: []
    }
  },
  watch: {
  },
  created () {
    this.getHot().then((json) => {
      this.list = json
      let nowdata = new Date()
      this.list.data.forEach((item, index) => {
        var str = item.last_reply_at
        var strTime = (str.substring(0, 10) + ' ' + str.substring(11, 19)).replace(/-/g, '/')
        // console.log(strTime[0])
        // strTime = strTime.replace(/-/g, '/')
        var oldtime = new Date(strTime)
        var overtime = (nowdata.getTime() - oldtime.getTime()) / 1000
        // console.log(overtime)
        var day = parseInt(overtime / (24 * 60 * 60))
        // 计算整数天数
        var afterDay = overtime - day * 24 * 60 * 60
        // 取得算出天数后剩余的秒数
        var hour = parseInt(afterDay / (60 * 60))
        // 计算整数小时数
        // var afterHour = overtime - day * 24 * 60 * 60 - hour * 60 * 60
        // 取得算出小时数后剩余的秒数
        // var min = parseInt(afterHour / 60)
        // 计算整数分
        // var afterMin = overtime - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60
        // 取得算出分后剩余的秒数
        // console.log([day, hour].join(':'))
        item.last_reply_at = day + '天' + hour + '小时前'
        item.day = day
        item.hour = hour + '小时'
      })
    })
  },
  methods: {
    getHot () {
      return news.getcNode()
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

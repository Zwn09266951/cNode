import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import story from './components/story'
import news from './api/news'
Vue.use(VueRouter)

const ask = {
  template: `
  <ol>
    <li v-if="item.tab == 'ask'" v-for="item in list.data">
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
  </ol>`,
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

      this.list.data.forEach((item, index) => {
        let nowdata = new Date()
        var str = item.last_reply_at
        var strTime = (str.substring(0, 10) + ' ' + str.substring(11, 19)).replace(/-/g, '/')
        var oldtime = new Date(strTime)
        var overtime = (nowdata.getTime() - oldtime.getTime()) / 1000
        // console.log(overtime)
        var day = parseInt(overtime / (24 * 60 * 60))
        // 计算整数天数
        var afterDay = overtime - day * 24 * 60 * 60
        // 取得算出天数后剩余的秒数
        var hour = parseInt(afterDay / (60 * 60))
        // 计算整数小时数
        var afterHour = overtime - day * 24 * 60 * 60 - hour * 60 * 60
        // 取得算出小时数后剩余的秒数
        var min = parseInt(afterHour / 60)
        // 计算整数分
        var afterMin = overtime - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60
        // 取得算出分后剩余的秒数
        // console.log([day, hour].join(':'))
        // item.last_reply_at = day + '天' + hour + '小时前'
        item.day = day
        item.hour = hour
        item.Min = min
        item.afterMin = afterMin
      })
    })
  },
  methods: {
    getHot () {
      return news.getcNode()
    }
  }
}

import list from './components/list'

const routes = [
  { name: 'share', path: '/share/:id', component: list },
  { path: '/good/', component: ask }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

/* eslint-disable */
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  render: h => h(App)
}).$mount('#app')
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

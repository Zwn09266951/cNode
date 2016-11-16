import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import list from './components/list'

// const foo = { template:}

const routes = [
  { path: '/', component: list, name: 'home' }
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

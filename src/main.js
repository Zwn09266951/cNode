import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import list from './components/list'
import login from './components/login'
import register from './components/register'
import content from './components/content'

const routes = [
  {
    name: 'home',
    path: '/',
    component: list
  },
  {name: 'login', path: '/login', component: login},
  {name: 'register', path: '/register', component: register},
  {name: 'content', path: '/content/:id', component: content}
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

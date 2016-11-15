import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const _get = function (url) {
  return Vue.http.get(url).then((res) => {
    return res.body
  }, (res) => {
    console.log(res.error)
  })
}

export { _get }

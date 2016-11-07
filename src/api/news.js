import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill()
// import Promise from 'es6-promise'

// const url = 'https://cnodejs.org/api/v1/topics'

const _get = function (url) {
  return fetch(url)
  .then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server')
    } else {
      return response.json()
    }
  })
  // .then((stories) => {
  //   let str = this
  //   // // return str.stories
  //   console.log(stories)
  // })
}

export default {
  getcNode () {
    return _get('https://cnodejs.org/api/v1/topics')
  },
  getGroup () {
    return _get('http://192.168.1.92:8986/app/circle/indexList')
  }
}

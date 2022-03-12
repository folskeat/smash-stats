import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stats from '../chardata/stats.js'
import alts from '../chardata/alts.js'

let data = {
  stat: stats,
  alt: alts,
  dummy: false,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

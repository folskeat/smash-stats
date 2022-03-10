import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stats from '../chardata/stats.js'

let data = {
  stat: stats,
  dummy: false,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

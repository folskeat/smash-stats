import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeightView from '../views/WeightView.vue'
import WalkView from '../views/WalkView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/weight',
    name: 'weight',
    component: WeightView
  },
  {
    path: '/walk',
    name: 'walk',
    component: WalkView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeightView from '../views/WeightView.vue'
import WalkView from '../views/WalkView.vue'
import RunView from '../views/RunView.vue'
import DashView from '../views/DashView.vue'

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
  },
  {
    path: '/run',
    name: 'run',
    component: RunView
  },
  {
    path: '/dash',
    name: 'dash',
    component: DashView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

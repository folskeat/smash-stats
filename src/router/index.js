import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeightView from '../views/WeightView.vue'
import WalkView from '../views/WalkView.vue'
import RunView from '../views/RunView.vue'
import DashView from '../views/DashView.vue'
import AirMoveView from '../views/AirMoveView.vue'
import AirAccView from '../views/AirAccView.vue'
import FallView from '../views/FallView.vue'
import FastFallView from '../views/FastFallView.vue'
import GravityView from '../views/GravityView.vue'
import FullHopView from '../views/FullHopView.vue'
import ShortHopView from '../views/ShortHopView.vue'
import DoubleJumpView from '../views/DoubleJumpView.vue'

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
  },
  {
    path: '/airmove',
    name: 'airmove',
    component: AirMoveView
  },
  {
    path: '/airacc',
    name: 'airacc',
    component: AirAccView
  },
  {
    path: '/fall',
    name: 'fall',
    component: FallView
  },
  {
    path: '/fastfall',
    name: 'fastfall',
    component: FastFallView
  },
  {
    path: '/gravity',
    name: 'gravity',
    component: GravityView
  },
  {
    path: '/fullhop',
    name: 'fullhop',
    component: FullHopView
  },
  {
    path: '/shorthop',
    name: 'shorthop',
    component: ShortHopView
  },
  {
    path: '/doublejump',
    name: 'doublejump',
    component: DoubleJumpView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

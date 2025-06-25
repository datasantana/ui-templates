import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Map from '../views/MapView.vue'
import Charts from '../views/ChartsView.vue'
import Scene from '../views/SceneView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // Add more routes here
  { path: '/about', name: 'About', component: About },
  { path: '/map', name: 'Map', component: Map },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/scene', name: 'Scene', component: Scene },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
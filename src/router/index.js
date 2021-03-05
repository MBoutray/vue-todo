import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import QuiSommesNous from '../views/QuiSommesNous.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/qui-sommes-nous',
        name: 'Qui sommes-nous',
        component: QuiSommesNous
      },
    ]
  },
  {
    path: '/a-propos',
    name: 'A propos',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

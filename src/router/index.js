import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import DetailSurah from '../components/DetailSurah.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailSurah
    }
  ]
})

export default router

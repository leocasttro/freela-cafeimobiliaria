import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '@/views/HomeView.vue'
import DetailsView from '@/views/DetailsView.vue'
import BuyView from '@/views/BuyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/venda',
      name: 'venda',
      component: BuyView
    },
    {
      path: '/imovel/:id',
      name: 'imovel',
      component: DetailsView // substitua pelo componente correto
    }
  ]
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Routes from './routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: Routes.HomePage,
    name: 'home',
    component: () => import('../views/HomeView/HomeView.vue')
  },
  {
    path: Routes.RacePage,
    name: 'RacePage',
    component: () => import('../views/RacePage/RacePage.vue')
  },
  {
    path: Routes.ClassPage,
    name: 'ClassPage',
    component: () => import('../views/ClassPage/ClassPage.vue')
  },
  {
    path: Routes.ClassPage,
    name: 'ClassPage',
    component: () => import('../views/ClassPage/ClassPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router

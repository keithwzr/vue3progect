import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/manager/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', redirect:'/manager/home',},
    { path: '/404', component: () => import('@/views/404.vue')},
    { path: '/:pathMatch(.*)', redirect: '/404', hidden: true },
    {path:'/manager',component: () =>import('../views/Manager.vue'), children:[
        {path:'home', meta: {name: '首页'}, component: () =>import('../views/manager/Home.vue')},
      ]}

  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect:'/manager',},
    { path: '/404', component: () => import('@/views/404.vue')},
    { path: '/:pathMatch(.*)', redirect: '/404', hidden: true },
    { path: '/login',component: () => import('@/views/Login.vue')},
    { path: '/register',component: () => import('@/views/Register.vue')},
    { path:'/manager',component: () =>import('../views/Manager.vue'), children:[
        {path:'home', meta: {name: '系统首页'}, component: () =>import('../views/manager/Home.vue')},
      ]}

  ],
})

export default router

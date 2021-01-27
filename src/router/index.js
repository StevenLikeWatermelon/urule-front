import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/components/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/urule',
    component: Layout,
    meta: { title: 'urule-Vue', icon: 'attr' },
    children: [
      {
        path: 'type',
        component: () => import('@/views/attr/index'),
        meta: { title: 'Vue版本urule决策集', icon: 'attr' }
      },
    ]
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue')
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

export default router

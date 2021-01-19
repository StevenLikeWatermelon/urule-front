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
    path: '/data',
    component: Layout,
    meta: { title: '基础数据管理', icon: 'attr' },
    children: [
      {
        path: 'type',
        component: () => import('@/views/dataManage/index'),
        meta: { title: '类型管理', icon: 'attr' }
      },
      {
        path: 'typeAdd',
        name: 'typeAdd',
        hidden: true,
        component: () => import('@/views/dataManage/add'),
        meta: { title: '新增or修改', icon: 'attr' }
      },
      {
        path: 'methods',
        component: () => import('@/views/attr/index'),
        meta: { title: '方法管理', icon: 'attr' }
      },
      {
        path: 'parameter',
        component: () => import('@/views/attr/index'),
        meta: { title: '规则参数整理', icon: 'attr' }
      }
    ]
  },
  // {
  //   path: '/type',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'type',
  //       name: 'type',
  //       component: () => import('@/views/type/index'),
  //       meta: { title: '扩展类型管理', icon: 'type' }
  //     }
  //   ]
  // },
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

import Vue from 'vue'
import App from './App.vue'
import XlViews from 'xl-views'
import 'xl-views/dist/xl-views.css'

import 'xl-utils/src/css/reset.css'

import '@/styles/index.scss' // global css

import router from './router'
import store from './store'

import './icons' // 自动渲染svg

Vue.use(XlViews)

Vue.config.productionTip = false

window.App = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

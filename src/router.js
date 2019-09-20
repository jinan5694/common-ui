import Vue from 'vue'
import VueRouter from 'vue-router'

import Play from './views/Play.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/play', component: Play }
  ]
})

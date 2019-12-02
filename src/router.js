import Vue from 'vue'
import VueRouter from 'vue-router'

import Play from './views/Play.vue'
import Demo from './views/Demo.vue'
import Table from './views/Table.vue'
import Test from './views/test.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/play', component: Play },
    { path: '/demo', component: Demo },
    { path: '/table', component: Table },
    { path: '/test', component: Test }
  ]
})

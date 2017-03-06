import Vue from 'vue'
import Router from 'vue-router'
import routes from './index'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: routes
})
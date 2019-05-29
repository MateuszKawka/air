import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/air',
      name: 'countries',
      component: () => import(/* webpackChunkName: "countries" */ './views/Countries.vue')
    },
    {
      path: '/cities',
      name: 'cities',
      component: () => import(/* webpackChunkName: "cities" */ './views/Cities.vue')
    },
    {
      path: '/locations',
      name: 'locations',
      component: () => import(/* webpackChunkName: "locations" */ './views/Locations.vue')
    }
  ]
})


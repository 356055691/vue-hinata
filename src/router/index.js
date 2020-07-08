import Vue from 'vue'
import Router from 'vue-router'
import Hinata from '@/hinata'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hinata',
      name: 'Hinata',
      component: Hinata
    }
  ]
})

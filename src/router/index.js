import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/hinata.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hinata',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

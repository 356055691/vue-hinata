import Vue from 'vue'
import App from './App.vue'
import VueHinata from './index'

Vue.use(VueHinata);

new Vue({
  el: '#app',
  render: h => h(App)
})

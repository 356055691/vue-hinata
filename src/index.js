import VueHinata from './vueHinata.vue';

VueHinata.install = function(Vue) {
  Vue.component('VueHinata', VueHinata);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueHinata);
}

export default VueHinata;

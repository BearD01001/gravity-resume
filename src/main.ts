// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import container from './container.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#gravity-resume',
  components: { container },
  template: '<container/>',
})

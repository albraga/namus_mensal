import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
import store from './store.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'
import jQuery from 'jquery'

global.$ = jQuery

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
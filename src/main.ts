import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// import JsEncrypt from 'jsencrypt';
import md5 from 'js-md5';

const Jsencrypt = require('jsencrypt');
Vue.prototype.$jsencrypt = Jsencrypt;
Vue.prototype.$md5 = md5;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

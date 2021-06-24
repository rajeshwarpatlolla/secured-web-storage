import Vue from 'vue';
import SecuredWebStorage from 'secured-web-storage';

import App from './App.vue';

var store = new SecuredWebStorage({ name: 'test', type: 'localStorage', secretKey: 'test', secure: true });
Vue.prototype.store = store;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

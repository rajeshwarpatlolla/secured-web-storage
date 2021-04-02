import Vue from 'vue';
import SecureStorageWeb from 'secure-storage-web';

import App from './App.vue';

var store = new SecureStorageWeb({ name: 'test', type: 'localStorage', secretKey: 'test', secure: true });
Vue.prototype.store = store;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

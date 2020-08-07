import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import echarts from 'echarts';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/scss/index.scss';

Vue.prototype.$echarts = echarts;
Vue.config.devtools = true;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);
Vue.use(VueAxios, axios);

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

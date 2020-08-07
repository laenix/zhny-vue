import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './module/user';
import devModule from './module/dev';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
    devModule,
  },
});

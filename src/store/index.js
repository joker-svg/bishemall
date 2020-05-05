import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import user from './modules/user'
import address from './modules/address'
import product from './modules/product'
import goods from "./modules/goods";
import orderCart from "./modules/orderCart";
import payCart from "./modules/payCart";

Vue.use(Vuex);
const vuexPersisted= new createPersistedState({
  key: 'store',                //定义KEY名
  storage: window.localStorage,        //定义信息存储模式：window.localStorage（默认）、sessionStorage、cookie
});

export default new Vuex.Store({
  plugins: [vuexPersisted],
  state: {

  },
  getters:{

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    user,
    address,
    product,
    goods,
    orderCart,
    payCart
  }
})

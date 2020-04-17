import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

const vuexPersisted= new createPersistedState({
    key: 'store',                //定义KEY名
    storage: window.localStorage,        //定义信息存储模式：window.localStorage（默认）、sessionStorage、cookie
});

export default new Vuex.Store({
    state: {
        userInfo:{
            token:"",
            user:{}
        },
    },
    mutations: {
        //设置用户的数据的
        setUserInfo(state,data) {
            state.userInfo.user = data.result;
            state.userInfo.token = data.token;
            //console.log(data);
        }
    },
    actions: {

    },
    modules: {

    }
})
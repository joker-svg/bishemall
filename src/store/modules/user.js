import Vue from 'vue'
import Vuex from 'vuex'

import PersistedState from "vuex-persistedstate"
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo:{
            token:"",
            user:{}
        },
    },

    mutations: {
        setUserInfo(state,data) {
            state.userInfo.user = data.result;
            state.userInfo.token = data.token;
        },
        clearUserInfo(state,data){
            state.userInfo = {
                token:"",
                user:{}
            }
        }
    },

    //存放公共异步方法
    actions: {
        login({commit},data){
            //调用登录接口
            axios({
                url:"/api/user/isUser",
                method:"POST",
                data: data
            }).then(res => {
                //调用store的方法，把用户数据传过去
                commit('setUserInfo',res.data);

                //调用外部的成功的一个回调函数
                Promise.resolve();
            })
        }
    },

    modules: {

    },
    plugins: [PersistedState({
        storage: window.localStorage,
        key:"store",
        reducer(val) {
            return {
                userInfo:val.userInfo
            }
        }
    })]
})
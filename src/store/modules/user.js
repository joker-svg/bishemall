import Vue from 'vue'
import Vuex from 'vuex'

import PersistedState from "vuex-persistedstate"

Vue.use(Vuex);

// const vuexPersisted= new createPersistedState({
//     key: 'store',                //定义KEY名
//     storage: window.localStorage,        //定义信息存储模式：window.localStorage（默认）、sessionStorage、cookie
// });

export default new Vuex.Store({
    state: {
        userInfo:{
            token:"",
            user:{}
        },
    },
    mutations: {
        //vue项目先在后端启动，调用window下api会报错，需要使用第三方插件
        //把store保存到本地，该插件会自动判断当前环境是服务器还是浏览器
        //设置用户的数据的
        setUserInfo(state,data) {
            state.userInfo.user = data.result;
            state.userInfo.token = data.token;
            //localStorage.setItem('token',JSON.stringify(data.token));
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

    },
    modules: {

    },
    plugins: [PersistedState({
        storage: window.sessionStorage,
        reducer(val) {
            return {
                userInfo:val.userInfo
            }
        }
    })]
})
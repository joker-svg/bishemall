import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        goodslist:[],
    },

    mutations: {
        setList(state,data) {
            state.goodslist = data;
        }
    },

    //存放公共异步方法
    actions: {
        //获取特惠特价商品
        getDiscount({commit},data){
            //调用接口
            axios({
                url:"/api/goods/selectDiscountGoods",
                method:"POST",
                data: data
            }).then(res => {
                commit('setList',res.data);
                //console.log(this.state.goodslist);
                Promise.resolve();
            })
        },

    },

    modules: {

    }
})
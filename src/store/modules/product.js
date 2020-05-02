// import Vue from 'vue'
// import Vuex from 'vuex'
//
import axios from 'axios'
//
// Vue.use(Vuex);

//export default new Vuex.Store({
export default {
    state: {
        product:{
            productInfo:null,
            proImg:null,
            proSpec:null,
            proColor:null
        },
        img_master:''
    },

    mutations: {
        setProduct(state,data) {
            //state.goodslist = data;
            state.product.productInfo = data.productInfo;
            state.product.proImg = data.proImg;
            state.product.proSpec = data.proSpec;
            state.product.proColor = data.proColor;

            for(var i = 0;i<state.product.proImg.length;i++){
                if(state.product.proImg[i].is_master){
                    state.img_master = state.product.proImg[i].pic_url;
                }
            }
        }
    },

    //存放公共异步方法
    actions: {
        //获取特惠特价商品
        getProduct({commit},data){
            //调用接口
            axios({
                url:"/api/goods/selectProduct",
                method:"POST",
                data: data
            }).then(res => {
                commit('setProduct',res.data);
                Promise.resolve();
            })
        },

    }
}
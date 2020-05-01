import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        address_sheng:[{id:'',name:'',level:'',upid:''}],
        address_city:[{id:'',name:'',level:'',upid:''}],
        address_xian:[{id:'',name:'',level:'',upid:''}],
        address_zhen:[{}],
        product:{
            productInfo:[{}],
            proImg:[{}],
            proSpec:[{}],
            proColor:[{}]
        },
        img_master:''
    },

    mutations: {
        setAddressSheng(state,data) {
            state.address_sheng = data;
        },
        setAddressCity(state,data) {
            state.address_city = data;
        },
        setAddressXian(state,data) {
            state.address_xian = data;
        },
        setAddressZhen(state,data) {
            if(data.length === 0){
                state.address_zhen = {};
                //console.log(state.address_zhen);
            }else{
                state.address_zhen = data;
            }

        },

        clearAddressZhen(state,data) {
            state.address_zhen = [{id:'0',name:'0',level:'0',upid:'0'}];
        },
        //获取商品
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
        getSheng({commit},data){
            //调用省份接口
            axios({
                url:"/api/address/selectAddress",
                method:"POST",
                data: data
            }).then(res => {
                commit('setAddressSheng',res.data);
                Promise.resolve();
            })
        },
        getCity({commit},data){
            //调用城市接口
            axios({
                url:"/api/address/Address",
                method:"POST",
                data: data
            }).then(res => {
                commit('setAddressCity',res.data);
                Promise.resolve();
            })
        },
        getXian({commit},data){
            //调用县区接口
            axios({
                url:"/api/address/Address",
                method:"POST",
                data: data
            }).then(res => {
                commit('setAddressXian',res.data);
                Promise.resolve();
            })
        },
        getZhen({commit},data){
            //调用乡镇接口
            axios({
                url:"/api/address/Address",
                method:"POST",
                data: data
            }).then(res => {
                //console.log(res.data.length);
                commit('setAddressZhen',res.data);
                Promise.resolve();
            })
        },
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
    },

    modules: {

    }
})
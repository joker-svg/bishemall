import axios from 'axios'

export default {
    state: {
        address_sheng:[{id:'',name:'',level:'',upid:''}],
        address_city:[{id:'',name:'',level:'',upid:''}],
        address_xian:[{id:'',name:'',level:'',upid:''}],
        address_zhen:[{}],
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

        // //加入购物车
        // addOrder({commit},data){
        //     //调用接口
        //     axios({
        //         url:"/api/order/insertOrder",
        //         method:"POST",
        //         data: data
        //     }).then(res => {
        //         Promise.resolve();
        //     })
        // },
    }
}
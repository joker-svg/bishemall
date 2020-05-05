import axios from 'axios'

export default {
    state:{
        itemNum:[],
        listCart:[],
        totalPrice:0,
        sumPrice:0
    },
    getters:{

    },
    mutations:{

        setlistCart(state,data){
            state.listCart = data;
            //console.log(state.listCart);
            let listCart = state.listCart;
            let price = 0;
            listCart.forEach((item,index) => {
                price += item.order_count * item.order_price;
            });
            state.totalPrice = price.toFixed(2);
        },
        setToatalPrice(state){
            let listCart = state.listCart;
            let price = 0;
            listCart.forEach((item,index) => {
                price += item.order_count * item.order_price;
            });
            state.totalPrice = price.toFixed(2);
        },
        clearList(state){
            state.itemNum = [];
            state.listCart = [];
            state.totalPrice = 0;
            state.sumPrice = 0;
        }

    },
    actions:{
        //加入购物车
        addOrder({commit},data){
            //调用接口
            axios({
                url:"/api/order/insertOrder",
                method:"POST",
                data: data
            }).then(res => {
                Promise.resolve();
            })
        },

        //查询购物车商品
        selectCart({commit},data){
            //调用接口
            axios({
                url:"/api/order/selectCart",
                method:"POST",
                data: data
            }).then(res => {
                //console.log(res.data);
                commit('setlistCart',res.data);
            })
        },

        //删除购物车商品
        deleteCart({commit},data){
            //调用接口
            axios({
                url:"/api/order/deleteCart",
                method:"POST",
                data: data
            }).then(res => {

            })
        },

        //删除购物车全部商品
        deleteAllCart({commit},data){
            //调用接口
            axios({
                url:"/api/order/deleteAllCart",
                method:"POST",
                data: data
            }).then(res => {

            })
        },

        //计算总价
        totalPrice({commit}){
            commit('setToatalPrice');
        }
    }
}
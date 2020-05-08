import axios from "axios";

export default {
    state:{
        newCartList:[],
        totalPrice:0,
        orderPay:{
            insertId:0,
            affectedRows:0
        }
    },
    getters:{},
    mutations:{
        setNewCart(state,data){
            state.newCartList = data;
        },
        clearCart(state,data){
            state.newCartList = [];
            state.totalPrice = 0;
            state.orderPay = {
                insertId:0,
                affectedRows:0
            }
        },
        setOrderPay(state,data){
            state.orderPay.affectedRows = parseInt(data.affectedRows);
            state.orderPay.insertId = parseInt(data.insertId);
            //console.log(state.orderPay,state.insertId);
        }
    },
    actions:{
        //生成订单
        addPayCart({commit},data){
            //调用接口
            axios({
                url:"/api/pay/insertOrderCart",
                method:"POST",
                data: data
            }).then(res => {
                //console.log('订单返回数据',res.data);
                commit('setOrderPay',res.data);
                console.log(res.data.affectedRows);
                console.log(res.data.insertId);
                Promise.resolve();
            })
        },
        //更新订单
        updatePayCart({commit},data){
            //调用接口
            axios({
                url:"/api/pay/updateOrderCart",
                method:"POST",
                data: data
            }).then(res => {
                //console.log('更新成功');
                commit('clearCart');
                Promise.resolve();
            })
        },
        //删除订单
        deleteCart({commit},data){
            //调用接口
            axios({
                url:"/api/pay/deleteCart",
                method:"POST",
                data: data
            }).then(res => {
                //Promise.resolve();
            });
        },
        //订单保存
        saveCart({commit},data){
            commit('setNewCart',data);
        }
    }
}
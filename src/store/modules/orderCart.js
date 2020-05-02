import axios from 'axios'

export default {
    state:{

    },
    getters:{

    },
    mutations:{

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
    }
}
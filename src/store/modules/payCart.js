import axios from "axios";

export default {
    state:{

    },
    getters:{},
    mutations:{

    },
    actions:{
        //生成订单
        addPayCart({commit},data){
            //调用接口
            axios({
                url:"/api/pay/insertOrder",
                method:"POST",
                data: data
            }).then(res => {
                Promise.resolve();
            })
        }
    }
}
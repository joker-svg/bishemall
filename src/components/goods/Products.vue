<template>
    <div>
            <RightMenu></RightMenu>
            <Top></Top>
            <Search></Search>

        <!--主体部分-->
        <div class="product-box" style="float: left">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{itemName}}</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="box" v-if="productsList.length>0">

                <div class="intro-good" style="float: left" v-for="(item,index) in productsList"
                     :key="index"
                     @click="itemClick(item.product_id)"
                     :class="{'g0':index===0,'g1':index > 0,'g2':index%3===0,'g3':index%3===1,'g4':index%3===2}">
                    <img :src="item.pic_url" alt="">
                    <p class="intro-p1 p4">{{item.product_name}}</p>
                    <p class="intro-p2 p4">{{item.product_descript}}</p>
                    <p class="intro-p3">￥{{item.spec_price}}</p>
                    <p class="intro-p4">￥{{item.spec_dis_price}}</p>
                    <div class="s-save">
                        <i class="el-icon-star-off"></i>
                        <p @click.stop="itemShou">收藏</p>
                    </div>
                </div>

            </div>
            <div v-else> <h3 style="margin-top: 50px">暂无相关商品 </h3></div>

        </div>

        <div style="float: left">
            <Bottom></Bottom>
        </div>
    </div>
</template>

<script>
    import Top from "../index/Top";
    import Search from "../index/Search";
    import RightMenu from "../index/RightMenu";
    import Bottom from "../Bottom";
    export default {
        components:{
            Top,
            RightMenu,
            Bottom,
            Search
        },
        data(){
            return{
                productsList:[],
                itemName:'全部',
                flag:''
            }
        },
        methods:{
            getProducts:function () {
                if(this.flag === 'shouji'){
                    this.itemName = "手机"
                }else if(this.flag === 'discount'){
                    this.itemName = "优惠";
                    this.productsList = this.$store.state.goods.goodslist;
                    // this.$axios({
                    //     url:"/api/goods/selectDiscountGoods",
                    //     method:"POST",
                    //     data: {product_id:5}
                    // }).then(res => {
                    //     this.productsList = res.data;
                    // })
                }else if(this.flag === 'computer'){
                    this.itemName = "电脑"
                }
            },
            itemShou:function () {
                console.log("加入收藏");
            }
        },
        created() {
            this.flag = this.$route.params.name;
            this.getProducts();
        }
    }
</script>

<style scoped lang="less">
    @theme-color:#FF6700;
    *{
        margin: 0;
        padding: 0;
    }

    .product-box{
        margin-left: 140px;
        margin-right: 190px;
        height: 1200px;
        width: 80%;
        //border: 0.5px solid;
        //float: left;
    }

    .box-1{
        width: 100%;
        height: 100%;
        float: left;
    }

    .box{
        height: 350px;
        //border: 0.5px solid red;
        position: absolute;
    }
    .g0{
        margin-left: 0;
    }
    .g1{
        margin-left: 22px;
    }
    .g2{
        border-top: 1px solid #E53935;
    }
    .g3{
        border-top: 1px solid #2196F3;
    }
    .g4{
        border-top: 1px solid @theme-color;
    }

    .intro-good{
        width:222.5px;
        height: 320px;
        float: left;
        margin-top: 20px;
        background-color: white;
        cursor: pointer;

        img{
            width: 200px;
            height: 200px;
            margin-left: 11px;
            margin-top: 5px;
        }
        .p4{
            text-align: center;
            margin-left: 11px;
            margin-right: 11px;
            margin-top: 3px;
        }

        .intro-p1{
            font-size: 14px;
            color: #333333;
        }
        .intro-p2{
            font-size: 13px;
            color: #99a9bf;
        }
        .intro-p3{
            color: @theme-color;
            margin-left: 21px;
            margin-top: 25px;
            width: 50px;
            float: left;
        }
        .intro-p4{
            color: grey;
            margin-left: 5px;
            margin-top: 28px;
            width: 20px;
            float: left;
            text-decoration: line-through;
            font-size: 14px;
        }

        //收藏
        .s-save{
            float: left;
            border: 0.5px solid #e2e2e2;
            border-radius: 10px;
            width: 70px;
            height: 20px;
            margin-top: 25px;
            margin-left: 35px;
            color: grey;

            .el-icon-star-off{
                margin-left: 8px;
                line-height: 20px;
                float: left;
            }
            p{
                font-size: 12px;
                padding-left: 28px;
                line-height: 20px;
                //border: 0.5px solid;
            }
        }
        .s-save:hover{
            color: @theme-color;
        }
    }
    .intro-good:hover{
        box-shadow: 2px 2px 0 rgba(0,0,0,0.2),0 0 6px rgba(0, 0, 0, 0.4);
    }
</style>
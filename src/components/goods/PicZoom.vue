<template>
    <div class="productLeft">
        <!-- 左侧中图  -->
        <div class="mdImg">
            <img :src="qall" alt="">
        </div>
        <!-- 遮罩层  -->
        <div v-show="isShow"
             class="marks"
             :style="{top:top+'px',left:left+'px'}">
        </div>
        <!-- 遮罩层 玻璃板 superMarks -->
        <div v-if="isPC==false"
             @touchstart.prevent="enter"
             @touchend.prevent="leave"
             @touchmove.prevent="marks"
             @click.prevent="sub()"
             class="superMarks" >
        </div>

        <div v-if="isPC==true"
             @mouseenter="enter"
             @mouseleave="leave"
             @mousemove="marks"
             @click.prevent="sub()"
             class="superMarks" >

        </div>

        <div v-show="isShow" class="lgImg">
            <img :src="qallBig"
                 alt=""
                 :style="{top:topLgImg+'px',left:leftLgImg+'px'}"
            >
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isPC:true,
                // 大图片
                qall: require("../../assets/img/intro01.jpg"),
                qallBig: require("../../assets/img/intro01.jpg"),
                isShow:false,   //控制遮罩层marks和大图片是否显示"
                left:0,       //marks左移位置
                top:0,         //marks下移位置
                leftLgImg:0,       //大图lgImg移动的位置
                topLgImg:0         //大图lgImg移动的位置
            }

        },
        methods:{
            //鼠标进入和离开
            enter(){
                this.isShow=true;
            },
            leave(){
                this.isShow=false;
            },
            //遮罩层放大镜
            marks(e){
                var marksWidth=200;//marks的宽
                var marksHeight=200;//marks的高
                if(this.isPC){
                    //PC端
                    this.left=e.offsetX-marksWidth/2;
                    this.top=e.offsetY-marksHeight/2;

                    if(this.left<0){
                        this.left=0;
                    }else if(this.left>278){
                        this.left=278;
                    }
                    if(this.top<0){
                        this.top=0;
                    }else if(this.top>278){
                        this.top=278;
                    }

                    //大d图片除以小的图片的宽高
                    this.leftLgImg=-this.left*2;
                    this.topLgImg=-this.top*2;
                }
            }

        },
        mounted(){
            if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,)) {
                this.isPC = false;

            } else {
                console.log('PC端')

            }

        }
    }
</script>

<style scoped lang="less">
    /* 左侧大小图样式 160*91  320*181*/
    .productLeft{

        width:160px;
        position: relative;

    }
    /* 左侧中图 */
    .mdImg,.mdImg>img{
        width:478px;
        height:478px;
        //margin-left: 15px;
    }
    /*遮罩层superMarks */
    .superMarks{
        width:478px;
        height:478px;
        background-color:rgba(220, 220, 220, 0);
        position:absolute;
        top:0;
        left:0;

    }
    /* 遮罩层 */
    .marks{
        width:200px;
        height:200px;
        position:absolute;
        background-color:rgba(220, 220, 220, 0.5);
        cursor: pointer;
        /*top:0px;  //内联设置了动态的top，left
        left:0px;*/
    }

    /* 左侧隐藏大图 */
    .lgImg{
        width:478px;
        height:478px;
        overflow: hidden;
        position:absolute;
        top:0px;
        left:500px;
        border:2px solid #aaa;
        background-color:#fff;
        z-index: 999;
    }
    .lgImg img{
        width:956px;
        height:956px;
        position:absolute;
        /*top:100px;
        left:100px;*/
    }
</style>
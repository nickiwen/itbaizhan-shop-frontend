<template>
    <div id="box">
        <TopNav/>
        <div class="main">
            <div class="success_left">
                <div class="success_left_center">
                    <h2>购买成功</h2>
                    <h2>我们尽快为您处理</h2>
                </div>
                <div class="success_left_center">
                    <p id="number">订单号：</p>
                    <p >{{ order }}</p>
                    <p id="number">在线支付：</p>
                    <p >123</p>
                    <p id="number">已优惠：</p>
                    <p >123</p>
                    <a href="#">查看订单详情</a>|
                    <a href="#">继续逛逛</a>
                    <hr>
                </div>
                <div class="success_left_center">
                    <p class="none">重要提示：京东平台及销售商不会以订单异常、系统升级为由，要求您点击任何连接进行退款</p>
                </div>
            </div>
            <div class="success_right">
                <div  class="success_right_center">
                    <div class="success_left_center_img">
                        <img src="../../../assets/success/1.png" alt="">
                    </div>
                    <div class="success_left_center_img" id="image">
                        <img src="../../../assets/success/2.png" alt="">
                    </div>
                </div>
                <div class="success_right_center_down">
                    <div class="success_right_center_dowen_img">
                        <img src="../../../assets/success/3.png" alt="">
                    </div>
                    <div class="success_right_center_dowen_img">
                        <img src="../../../assets/success/4.png" alt="">
                    </div>
                    <div class="success_right_center_dowen_img">
                        <img src="../../../assets/success/5.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import TopNav from '../../../components/TopNav'

export default {
    name:"ShopSuccess",
    data(){
        return{

        }
    },
    props:["order"],
    components:{
        TopNav
    }
}
</script>
<style scoped>
#box{
    background-color: #AEBEBB;
}
.main{
    width: 1120px;
    height: 599px;
    margin: 0 auto;
}
.success_left{
    float: left;
    width: 40%;
    margin-top: 18px;
    margin-right: 20px;
    background-color: #ffff;
}
.success_right{
    float: right;
    margin-top: 18px;
    width: 55%;
    /* height: 200px; */
    background-color:#DDDDDD;
}
.success_left_center{
    padding: 10px 20px;
}

h2{
    padding: 5px 0;
    color:#42C090
}
.success_left_center p{
    /* float: left; */
    font-size: 12px;
    color:#666;
    padding-top: 10px;
    padding-bottom: 36px;
}
.success_left_center>a{
    padding: 30px 0;
    padding-right: 10px;;
    font-size: 12px;
    color:#75A3D1;
}
.none{
    padding-top: 0;
}
#number{
    float: left;
}
.success_left_center_img{
    padding-right:10px;
    float: left;
    width: 295px;
    height:295px ;
}
.success_left_center_img>img{
    width: 295px;
    height:295px ;
}
#image{
    padding-right: 0;
    padding-left: 16px;
}
.success_right_center_down{
    display: flex;
    width: 100%;
    height: 128px;
    padding-top: 10px;
    padding-right: 5px;
    /* background-color: #42C090; */
}
.success_right_center_dowen_img{
    flex: 3;
    height: 128px;
    width: 200px;
    border:1px solid #fff;
    /* background-color: #42C090; */

}
.success_right_center_dowen_img>img{
    height: 100%;
    width: 100%;

}
</style>

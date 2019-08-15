<template>
    <div>
        <TopNav/>
        <div class="search">
            <div class="logo">
                <h1 style="color:red;">百战购物商城</h1>
                <!-- <span class="car">购物车</span> -->
            </div>
            <div class="input">
                <input type="text">
                <button>搜索</button>
            </div>
        </div>
        <!-- 导航条 -->
        <div class="shopCarNav">
            <div class="shopCarNavConter">
                <div class="shop">全部商品|</div>
                <div class="fashion">易购时尚|</div>
                <div class="beauty">美妆馆|</div>
                <div class="mark">超市|</div>
                <div >生鲜|</div>
                <div>海屯全国|</div>
                <div>闪购|</div>
                <div>拍卖|</div>
                <div>金融|</div>
            </div>            
        </div>
        <div class="main">
            <!-- 加入成功 -->
            <div class="success_wrap">
                <div class="success_wrap_conter">
                    <!-- 加入购物车成功 -->
                    <div class="success_wrap_conter_left">
                        <div class="success_top">
                            <div class="succ_icon"></div>
                            <div class="succ_text">加入购物车成功</div>
                        </div>
                        <div class="success_down">
                            <div class="success_down_left">
                                <div class="success_down_left_img">
                                    <img src="../../../assets/img/shopcar/2.jpg" alt="">
                                </div>
                            </div>
                            <div class="success_down_right">
                                <div class="success_down_right_up">
                                    <span>Redmi K20Pro 骁龙855 索尼4800万超广角三摄  AMOLED弹出式全面屏 8GB+128GB 碳纤黑 游戏智能手机 小米 红米</span>
                                </div>
                                <div class="success_down_right_down">
                                    <span class="txt">颜色：碳纤黑</span>
                                    <span class="txt">尺码：8GB+128GB</span>
                                    <span class="txt">/  数量：1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="success_wrap_conter_right">
                        <p class="success_wrap_conter_right_text">查看商品详情</p>
                        <button @click="goCartShop" class="btn">去购物车</button>
                    </div>
                </div>
            </div>
            <!-- 推荐列表 -->
            <div class="desc">
                <div class="similar">
                    <div class="desc_title">
                        <h3>购买了该商品的用户还购买了</h3>
                    </div>
                    <div class="desc_list">
                        <ul>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item" id="item_none">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item" id="item_none2">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 推荐列表 -->
            <div class="desc">
                <div class="similar">
                    <div class="desc_title">
                        <h3>您可能还需要</h3>
                    </div>
                    <div class="desc_list">
                        <ul>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item" id="item_none">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item" id="item_none2">
                                    <div class="image">
                                        <img src="../../../assets/img/shopcar/3.jpg" alt="">
                                    </div>
                                    <div class="item_desc">
                                        <div class="item_desc_name">华为荣耀9XPro手机 幻影紫 全网通8G+128G</div>
                                        <div class="item_desc_price">
                                            ￥2199.80
                                            <span class="send">赠品</span>
                                        </div>
                                        <div class="item_desc_shopcar">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import TopNav from '../../../components/TopNav'

export default {
    name:"ShopCar",
    methods: {
        goCartShop(){
            this.$router.push({
                path:"/shopcar"
            });
        }
    },
    components:{
        TopNav
    }

}
</script>
<style scoped>
.search{
    margin: 0 auto;
    height: 50px;
    width: 1120px;
}
.logo{
    float: left;
    width: 276px;
    height: 50px;
    margin: 15px 0 22px;
}
.car{
    display: block;
    position: absolute;
    width: 100px;
    height: 40px;
    line-height: 99em;
    top: 0;
    right: 0;
}
.input{
    float: left;
    width: 584px;
    margin: 27px 30px 0 105px;
}
.input>input{
float: left;
    width: 494px;
    height: 24px;
    line-height: 24px;
    color: #999;
    padding: 4px;
    margin-bottom: 4px;
    border-width: 2px 0 2px 2px;
    border-color: #f30213;
    border-style: solid;
    outline: 0;
    font-size: 12px;
}
.input>button{
    float: left;
    width: 80px;
    height: 36px;
    font-family: tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    background: #f30213;
    border: none;
    border-radius: 0;
    line-height: 1;
    color: #fff;
    font-size: 16px;
}
.shopCarNav{
    margin-top: 24px;
    height: 33px;
    border-bottom: 2px solid #f30213;
}
.shopCarNavConter{
    position: relative;
    z-index: 9;
    width: 1210px;
}
.shopCarNavConter>div{
    float: left;
}
.success_wrap{
    height: 145px;
    background: #f5f5f5;
    margin-bottom: 20px;
}
.success_wrap_conter,.desc{
        width: 1210px;
        margin: 0 auto;
}
.success_wrap_conter_left{
    float: left;
}  
.success_wrap_conter_right{
    padding-top: 92px;
    float: right;
    overflow: hidden;
}
.success_top{
    position: relative;
    padding-left: 35px;
    margin: 20px 0;
}
.succ_icon{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 25px;
    height: 25px;
    border:2px solid #71b247;
    border-radius: 30px;
    overflow: hidden;
} 
.succ_text{
    font-size: 18px;
    line-height: 25px;
    font-weight: 400;
    color: #71b247;
}
li{
    float: left;
}
#item_none{
    margin-right: 0;
}

.success_down_left{
    float: left;
    width: 60px;
    margin-right: 10px;
    border: 1px solid #e8e8e8;
}
.success_down_left_img{
    width: 60px;
    height: 60px;
    background-color: green;
}
.success_down_right{
    float: left;
    width: 520px;
    margin: 0;
}
.success_down_right_up{
    width: 100%;
    line-height: 28px;
    overflow: hidden;
    font-size: 14px;
    margin: 0;
    padding: 0;
    border: 0;
    white-space:nowrap;
    text-overflow:ellipsis;
    vertical-align: baseline;
    word-wrap: break-word;
}

.txt{
    /* float: left; */
    max-width: 135px;
    margin-right: 5px;
    padding-top: 5px;
    overflow: hidden;
    font-size: 12px;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    display: inline-block;
    color: #aaa;
}
.success_wrap_conter_right_text{
    float: left;
    padding: 0 30px;
    margin-right: 10px;
    background: #fff;
    color: #E2231A;
    border: 1px solid #fff;
    height: 34px;
    line-height: 36px;
    font-size: 16px;
    vertical-align: middle;
}
.btn{
    float: left;
    position: relative;
    width: 196px;
    background: #E2231A;
    border: 1px solid #E2231A;
    color: #fff;
    height: 34px;
    line-height: 30px;
    font-size: 16px;
    vertical-align: middle;
}
.similar{
    overflow: hidden;
    height: 330px;
    position: relative;
}
.desc_title{
    margin-bottom: 10px;
}
h3{
    font-size: 14px;
    color: #666;

}
.desc_list{
    height: 290px;
    width: 1210px;
    padding-left:40px; 
}
.item{
    width: 270px;
    margin: 0 40px 0 0;
    background: #fff;
}
li{
    margin-bottom: 40px;
}
.image{
    float: left;
    width: 98px;
    height: 98px;;
    background-color: green;
    margin-right: 10px;
    float: left;
    border: 1px solid #eee;
}
.image>img{
    background-color: green;
    width: 98px;
    height: 98px;
}
.item_desc{
    font-size: 12px;
}
.item_desc_name{
    height: 36px;
    width: 160px;
    float: left;
    line-height: 18px;
    overflow: hidden;
    margin-bottom: 4px;
}
#item_none2{
    margin-right: 0;
}
.item_desc_price{
    width: 160px;
    height: 19px;
    color:red;
    overflow: hidden;
    text-align: left;
    margin-bottom: 11px;
}
.send{
    color: #fff;
    background: #e4393c;
    padding: 0 2px;
    margin-right: 2px;
    font-size: 12px;
}
.item_desc_shopcar{
    height: 28px;
    display: inline-block;
    /* width: 30px; */
    line-height: 28px;
    padding: 0 10px;
    border: 1px solid #ddd;
    color: #333;
    text-align: center;
    border-radius: 2px;
}

</style>
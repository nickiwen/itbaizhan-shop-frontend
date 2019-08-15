<template>
    <div class="shoppayment">
        <TopNav />
        <div class="ShopPayment">
            <div class="logo">
                <h1 style="color:red;">百战购物商城</h1>
            </div>
            <div class="bar"></div>
        </div>
        <div class="order">
            <!-- 核算订单 -->
            <div class="order_text">
                <span>填写并核对账单</span>
            </div>
            <!-- 这个订单 -->
            <div class="order_conter">
                <!-- 收件人 -->
                <div class="order_conter_title">
                    <h3>收件人信息</h3>
                </div>
                <!--收件人地址  -->
                <div class="order_info">
                    <div class="order_info_name">Sev</div>
                    <div class="order_info_name_address">
                        <span>Sev</span>
                        <span>北京朝阳区</span>
                        <span>123456779</span>
                    </div>
                </div>
                <!-- 自提柜 -->
                <div class="order_info_cabinet">
                    <div class="order_info_pick">
                        <span class="order_info_pick_jd">京东自提</span>
                        <span class="order_info_pick_every">随时取</span>
                        <span class="details">详情</span>
                    </div>
                    <div class="order_info_name">Sev</div>
                    <div class="order_info_name_address">
                        <span>Sev</span>
                        <span>蓝筹名座自提柜</span>
                        <span>北京市朝阳区吉</span>
                        <span>Sev</span>
                        <span>123456779</span>
                        <span>距收货人 2.7千米</span>
                        <span id="distance">距离最近</span>
                        <a href="#">修改自提点</a>
                    </div>
                </div>
                <!-- 支付方式 -->
                <div class="order_conter_title">
                    <h3>支付方式</h3>
                </div>
                <div class="order_info">
                    <div class="order_info_name price">货到付款</div>
                    <div class="order_info_name pay">在线支付</div>
                    <div class="more">更多 》</div>
                </div>
                <!-- 送货清单 -->
                <div class="order_conter_title">
                    <h3>送货清单</h3>
                </div>
                <div class="list">
                    <div class="list_left">
                        <div class="list_left_content">
                            <!-- 配送方式 -->
                            <div class="list_left_title">
                                <span>配送方式</span>
                                <div class="list_left_shop">
                                    <span>对应商品</span>
                                </div>
                            </div>
                            <div class="list_left_expressage">
                                <span>京东快递</span>
                            </div>
                            <!-- 准时达 -->
                            <div class="shop_time">
                                <span class="shop_time_send">标 准 达：</span>
                                <div class="shop_time_order">预计 8月13日[周二] 09:00-15:00 送达</div>
                                <a href="#" class="add">修改</a>
                            </div>
                            <!-- 空白 -->
                            <div class="shop_time"></div>
                            <!-- 退款 -->
                            <div class="rufund">
                                <div class="refund_price">
                                    <input type="checkbox" />
                                    <span class="free">退换无忧</span>
                                    <span class="free_price">￥0.40</span>
                                </div>
                                <div class="refund_desc">
                                    自签收后7天内退货，15天内换货，可享1次上门取件服务
                                    <a href="#">查看详情</a>
                                </div>
                            </div>
                            <!-- 重量 -->
                            <div class="weight">
                                <span>总重量:</span>
                                <span>0.480kg</span>
                            </div>
                        </div>
                    </div>
                    <div class="list_right">
                        <!-- 商家自营 -->
                        <div class="list_left_title">
                            <span>商家：京东自营</span>
                        </div>
                        <!-- 内容 -->
                        <div class="goods_items" v-for="(item,index) in product" :key="index">
                            <div class="goods_items_photo">
                                <img :src="item.image" alt />
                            </div>
                            <div class="goods_items_msg">
                                <a href="#">{{ item.title }}</a>
                                <div class="style">
                                    <strong class="color">颜色：</strong>
                                    <span>冰川蓝</span>
                                    <strong class="size">尺码：</strong>
                                    <span>8GB+128GB</span>
                                </div>
                            </div>
                            <div class="p_price">
                                <div class="p_price_price">{{ (item.price/100) }}.00</div>
                                <div class="p_price_num">x{{ item.num }}</div>
                                <div class="p_price_available">有货</div>
                                <div class="p_price_wieght">0.48kg</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hr"></div>
            </div>
            <el-button class="btn" @click.once="commitOrder">提交订单</el-button>
        </div>
    </div>
</template>

<script>
import TopNav from "../../../components/TopNav";
import { mapState } from "vuex"
export default {
    name: "PayMent",
    components: {
        TopNav
    },
    props: ["product"],
    watch: {
        product(value) {
            console.log(value);
        }
    },
    computed: {
        ...mapState(["cartcookie","userid"])
    },
    methods: {
        // 参数格式转化
        formatParams(arr) {
            var currentArr = [];
            for (var i = 0; i < arr.length; i++) {
                var temp = {
                    itemId: arr[i].id,
                    num: arr[i].num,
                    price: arr[i].price,
                    totalFee: 999,
                    title: arr[i].title,
                    picPath: arr[i].image
                };
                currentArr.push(temp)
            }
            return currentArr;
        },
        // 解析cookie
        formatCookie(cookie){
            return cookie.replace("CART_COOKIE_NAME=","");
        },
        commitOrder() {
            this.$api.getInsertOrder({
                    orderItem: JSON.stringify(this.formatParams(this.product)),
                    cartKey:this.formatCookie(this.cartcookie),
                    userId:this.userid,
                    receiverName: "尚学堂",
                    receiverMobile: "15891588888",
                    receiverState: "北京",
                    receiverCity: "北京",
                    receiverDistrict: "昌平区",
                    receiverAddress: "西三旗 xxxxxxxxx",
                    paymentType: 1,
                    payment: 20000
                })
                .then(res => {
                    if(res.data.status === 200){
                        this.$router.push({
                            name:"ShopSuccess",
                            params:{order:res.data.data}
                        })
                    }else{
                        console.log("请求失败");
                    }
                });
        }
    }
};
</script>
<style scoped>
.btn {
    background-color: #e33d3f;
    margin-top: 10px;
    margin-right: 20px;
    color: #fff;
    font-weight: 700;
    float: right;
    width: 140px;
    height: 40px;
    font-size: 16px;
}
.ShopPayment {
    padding: 20px 0 10px;
    margin: 0 auto;
    height: 50px;
    width: 1120px;
}
.logo {
    float: left;
    width: 276px;
    line-height: 50px;
    text-align: center;
    height: 50px;
}
h1{
    color:red;
}
.order {
    width: 990px;
    margin: 0 auto;
}
.order_text {
    -webkit-font-smoothing: antialiased;
    color: #666;
    line-height: 42px;
    font-size: 16px;
}
.order_conter {
    background-color: #fff;
    padding: 0 20px;
    height: 610px;
    border: 1px solid #f0f0f0;
}

.order_info,
.order_info_cabinet {
    height: 42px;
    margin: 0 10px 0 20px;
    border-bottom: 1px solid #f0f0f0;
}
.order_info_cabinet {
    height: 81px;
}
.order_info_name {
    text-align: center;
    float: left;
    width: 120px;
    font-size: 12px;
    color: #999;
    border: 2px solid #e4393c;
    padding: 4px 10px;
}
.order_info_name_address {
    float: left;
    line-height: 30px;
}
.order_info_name_address span {
    font-size: 12px;
    color: #999;
    display: inline-block;
    margin-left: 10px;
}
.order_info_name_address a {
    font-size: 12px;
    color: #005ea7;
    display: inline-block;
    margin-left: 10px;
}
.list {
    width: 100%;
    display: flex;
    /* margin-bottom: 10px; */
}

.list_left {
    flex: 2;
    height: 284px;
    background-color: #f1f1f1;
    padding: 10px 10px 10px 20px;
}
.list_right {
    flex: 8;
    height: 12px;
    height: 284px;
    background-color: #f3fbfe;
    padding: 10px 10px 10px 20px;
}
.list_left_content {
    margin-bottom: 50px;
}
.list_left_title {
    height: 20px;
    color: #666;
    line-height: 20px;
    padding: 2px 0;
}
.list_left_shop {
    float: right;
}
.list_left_expressage {
    margin: 10px 0 20px;
}
.list_left_expressage > span {
    border: 2px solid #e4393c;
    padding: 4px 40px;
    height: 18px;
    font-size: 12px;
    line-height: 18px;
    line-height: 18px;
}
.shop_time {
    padding: 5px 0;
    line-height: 22px;
    height: 22px;
    border-bottom: 1px solid #ddd;
    width: 300px;
}
.shop_time_send {
    float: left;
    min-width: 60px;
    color: #999;
    font-size: 12px;
}
.shop_time_order {
    float: left;
    max-width: 206px;
    font-size: 12px;
}
.add {
    float: left;
    text-decoration: none;
    font-size: 12px;
    margin-left: 10px;
}
h3 {
    font-size: 14px;
    margin-bottom: 10px;
}
.order_info_pick {
    margin-bottom: 10px;
    margin-top: 10px;
}
.order_info_pick_jd {
    color: #fff;
    padding: 0 4px;
    background-color: #e4393c;
    border-radius: 3px;
    line-height: 18px;
    height: 18px;
    font-size: 12px;
    display: inline-block;
}
.order_info_pick_every {
    color: #999;
    margin-left: 5px;
    font-size: 12px;
}
#distance {
    z-index: 999;
    color: #e4393c;
    font-size: 12px;
    padding: 2px;
    border-radius: 2px;
    border: 1px solid #e4393c;
    margin-left: 10px;
    line-height: 1;
    font-weight: 400;
}
.details {
    color: #005ea7;
    font-size: 12px;
    margin-left: 10px;
}
.order_conter_title {
    line-height: 40px;
    height: 40px;
    color: #333;
}
.price {
    width: 48px;
    color: #000;
    padding: 4px 23px;
}
.pay {
    margin-left: 10px;
    color: #000;
    border: 1px solid #ddd;
    width: 48px;
    padding: 5px 24px;
}
.more {
    float: left;
    position: relative;
    height: 18px;
    color: #333;
    font-size: 12px;
    line-height: 18px;
    padding: 5px 12px;
}
.rufund {
    padding: 5px 0;
    line-height: 22px;
    border-bottom: 1px solid #ddd;
    width: 300px;
}
.refund_price {
    margin-bottom: 5px;
}
.refund_price > input {
    width: 13px;
    height: 13px;
    margin: 3px 3px 3px 4px;
    margin-right: 5px;
    border-radius: 5px;
}
.free {
    font-size: 12px;
    color: #333;
}
.free_price {
    color: #e4393c;
    margin-left: 10px;
}
.refund_desc {
    font-size: 12px;
    color: #666;
}
.refund_desc > a {
    color: #005ea7;
    margin-left: 5px;
}
.weight {
    margin-top: 30px;
}
.weight > span {
    color: #666;
    font-size: 12px;
}
.goods_items {
    padding: 10px 0;
    overflow: hidden;
    margin: 20px 0;
}
.goods_items_photo {
    float: left;
    width: 80px;
    height: 80px;
    border: 1px solid #ddd;
    margin-right: 10px;
    background-color: #fff;
}
.goods_items_photo > img {
    width: 80px;
    height: 80px;
}
.goods_items_msg {
    float: left;
    width: 43%;
    /* height: 3em; */
    line-height: 1.5em;
    overflow: hidden;
    margin-bottom: 10px;
}
.goods_items_msg > a {
    font-size: 12px;
    float: left;
    width: 100%;
    line-height: 25px !important;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #666;
}
.style {
    margin-top: 52px;
}
.style > span {
    color: #666;
    font-size: 12px;
}
.size {
    color: #666;
    /* float: right; */
    margin-left: 50px;
}
.color {
    color: #666;
}
.p_price {
    font-size: 12px;
    margin: 0 0 5px;
}
.p_price_price {
    float: left;
    width: 100px;
    font-weight: 700;
    color: red;
    text-align: right;
}
.p_price_num {
    float: left;
    width: 70px;

    color: #666;
    text-align: right;
}
.p_price_available {
    float: left;
    width: 70px;
    color: #666;
    text-align: right;
}
.p_price_wieght {
    float: left;
    color: #666;
    text-align: right;
    width: 100px;
}
</style>
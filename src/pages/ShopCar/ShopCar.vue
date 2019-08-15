<template>
    <div class="shopCar">
        <TopList />
        <div class="header">
            <p class="ego">
                <a href="##">百战购物商城</a>
            </p>
            <p class="shopcar-search">
                <input type="text" placeholder="自营" />
                <button>搜索</button>
            </p>
        </div>
        <div class="shopcar-top">
            <a href="##">
                <strong>全部商品</strong>
            </a>
            <p>
                <span>配送至：</span>
                <input type="text" value="北京昌平区城区以外" />
                <i class="select-down"></i>
            </p>
        </div>
        <div class="product-des">
            <p>
                <input type="checkbox" />
                <span>全选</span>
                <span>商品</span>
            </p>
            <p class="operate">
                <span class="subtotal">小计</span>
                <span>操作</span>
            </p>
            <p class="price-count">
                <span>单价</span>
                <span>数量</span>
            </p>
        </div>
        <div class="detail-top">
            <p>
                <input type="checkbox" />
                <span>CAPON眼镜旗舰店</span>
                <img src="../../assets/img/search/3.png" alt title="联系客服" />
            </p>
            <p>
                <i class="offer"></i>
            </p>
        </div>
        <div v-if="cartData.length>0">
            <div class="detail" v-for="(item,index) in cartData" :key="index">
                <ShopItem
                    @onDelProduct="delProductHandler"
                    :item="item"
                    @onPrice="getPrice"
                    @onGoodsSeleted="getGoodsSeleted"
                />
            </div>
        </div>
        <div class="pay">
            <p>
                <input type="checkbox" />
                <span>全选</span>
                <a href="##">删除选中商品</a>
                <a href="##">移到关注</a>
                <a href="##">
                    <strong>清理购物车</strong>
                </a>
            </p>
            <div class="product-pay">
                <a href="##">
                    已选择
                    <span>0</span>件商品
                    <i></i>
                </a>
                <p>
                    <span>总价：</span>
                    <strong>￥{{ (this.totalPrice/200).toFixed(2) }}</strong>
                    <i></i>
                    <em>促销：-￥0.00</em>
                </p>
                <button @click="paymentHandler">去结算</button>
            </div>
        </div>
        <FooterNav />
    </div>
</template>
<script>
import Counter from "../../components/Counter";
import TopList from "../../components/TopNav/TopNavList";
import FooterNav from "../../components/FooterNav";
import ShopItem from "./ShopItem";
import { mapState } from "vuex";
export default {
    name: "ShopCar",
    components: {
        Counter,
        TopList,
        FooterNav,
        ShopItem
    },
    // id
    data() {
        return {
            counterData: {
                min: 1,
                max: 10
            },
            subtotal: 199,
            selected: this.getAttr,
            cartData: {},
            totalPrice: 0,
            selecteds: []
        };
    },
    mounted() {
        this.http();
    },
    computed: {
        ...mapState(["counter", "currentGoodsId", "loginToken","userid"]),
        getAttr() {
            if (this.counter > 1) {
                this.$refs.selected.style.checked = "checked";
            } else {
                return;
            }
            return this.$refs.selected.style.checked;
        }
    },
    methods: {
        http() {
            this.$api.getShowCart({
                userId:this.userid
            }).then(res => {
                console.log(res.data);
                if (res.data.status === 200) {
                    this.cartData = res.data.data;
                }else{
                    console.log("购物车数据获取失败");
                }
            });
        },
        getPrice(data) {
            data += data;
            this.totalPrice = data;
        },
        paymentHandler() {
            // 去结算接口
            let idsArray = [];
            for (var i = 0; i < this.selecteds.length; i++) {
                idsArray.push(this.selecteds[i].id);
            }
            if (idsArray.length > 0) {
                this.$api
                    .getItemList({
                        ids: idsArray,
                        token: this.loginToken,
                        userId:this.userid
                    })
                    .then(res => {
                        console.log(res.data);
                        if (res.data) {
                            if(res.data.status === 200){
                                this.$router.push({
                                    name:"Payment",
                                    params:{product:res.data.data}
                                })
                            }
                        } else {
                            this.$router.push({
                                path:"/login"
                            })
                        }
                    });
            } else {
                alert("请选择要结算的商品");
            }
        },
        getGoodsSeleted(data) {
            if (data.seleted) {
                this.selecteds.push(data);
            } else {
                this.removeAaary(this.selecteds, data);
            }
        },
        removeAaary(_arr, _obj) {
            var length = _arr.length;
            for (var i = 0; i < length; i++) {
                if (_arr[i].id == _obj.id) {
                    if (i == 0) {
                        _arr.shift(); //删除并返回数组的第一个元素
                        return _arr;
                    } else if (i == length - 1) {
                        _arr.pop(); //删除并返回数组的最后一个元素
                        return _arr;
                    } else {
                        _arr.splice(i, 1); //删除下标为i的元素
                        return _arr;
                    }
                }
            }
        },
        /**
         * 删除接口
         */
        delProductHandler(data) {
            console.log(data);
            this.$api.getDeleteItemFromCart({
                    itemId: data,
                    userId: this.userid
                })
                .then(res => {
                    if (res.data.status === 200) {
                        // 刷新
                        this.http();
                    } else {
                        alert("删除失败");
                    }
                });
        }
    }
};
</script>
<style lang="less" scoped>
.shopCar {
    width: 100%;
    .header {
        width: 1200px;
        margin: 0 auto;
        height: 50px;
        line-height: 50px;
        margin-bottom: 20px;
        .ego {
            float: left;
            a {
                color: #333;
                font-size: 20px;
            }
        }
        .shopcar-search {
            margin-left: 625px;
            input {
                width: 300px;
                height: 20px;
                border: 2px solid red;
                padding-left: 10px;
                line-height: 20px;
            }
            button {
                width: 50px;
                height: 26.5px;
                line-height: 26px;
                margin-left: -2px;
                text-align: center;
                background: red;
                outline: none;
                border: none;
            }
        }
    }
    .shopcar-top {
        width: 1200px;
        margin: 0 auto;
        font-size: 12px;
        color: gray;
        a {
            font-size: 16px;
            color: red;
            padding-bottom: 10px;
            border-bottom: 1px solid red;
        }
        p {
            float: right;
            position: relative;
            input {
                color: gray;
                font-size: 12px;
            }
            .select-down {
                position: absolute;
                top: -4px;
                right: 2px;
                display: inline-block;
                width: 20px;
                height: 20px;
                background: url("../../assets/img/search/search.ele.png");
                background-position: 2px 11px;
                margin-left: 2px;
            }
        }
    }
    .product-des {
        width: 1200px;
        margin: 0 auto;
        margin-top: 10px;
        height: 38px;
        line-height: 38px;
        font-size: 12px;
        color: gray;
        background: #f5f5f5;
        border: 1px solid #ddd;
        p {
            float: left;
            position: relative;
            input {
                margin-right: 10px;
                position: absolute;
                top: 10px;
                left: 10px;
            }
            span {
                display: inline-block;
                margin-left: 30px;
                margin-right: 40px;
            }
        }
        .price-count {
            float: right;
        }
        .operate {
            float: right;
            margin-right: 60px;
            .subtotal {
                margin-right: 10px;
            }
        }
    }
    .detail-top {
        width: 1200px;
        margin: 0 auto;
        margin-top: 10px;
        height: 38px;
        line-height: 38px;
        font-size: 12px;
        color: gray;
        background: #fff;
        border-bottom: 2px solid gray;
        p {
            float: left;
            position: relative;
            input {
                margin-right: 10px;
                position: absolute;
                top: 10px;
                left: 10px;
            }
            span {
                display: inline-block;
                margin-left: 30px;
                margin-right: 40px;
            }
            img {
                position: absolute;
                top: 12px;
                right: 15px;
            }
            .offer {
                display: inline-block;
                width: 80px;
                height: 25px;
                line-height: 25px;
                background: url("../../assets/img/search/cart02.png");
                background-position: 0px 0px;
                position: absolute;
                left: 300px;
                top: 3px;
            }
        }
    }
    .changeColor {
        background: #fff4ef;
    }
    .detail {
        width: 1200px;
        margin-top: -1px;
        min-height: 150px;
        margin: 0 auto;
        font-size: 12px;
        color: gray;
        background: #fff;
        border: 1px solid #ddd;
        position: relative;
        input {
            top: 15px;
            left: 10px;
        }
        .product-detail {
            position: absolute;
            left: 40px;
            top: 15px;
            .img {
                float: left;
                img {
                    width: 80px;
                    height: 80px;
                }
            }
            .des {
                float: left;
                position: absolute;
                left: 90px;
                width: 210px;
                a:hover {
                    color: red;
                }
                span {
                    position: absolute;
                    left: 240px;
                    top: 0px;
                    width: 150px;
                }
            }
            .present1 {
                position: absolute;
                top: 90px;
                left: -8px;
                width: 380px;
                a {
                    color: gray;
                }
                a:hover {
                    color: red;
                }
                .lookprice {
                    color: black;
                }
                span {
                    margin-left: 10px;
                    margin-right: 10px;
                    display: inline-block;
                }
            }
            .present2 {
                position: absolute;
                top: 110px;
                left: -8px;
                width: 380px;
                a {
                    color: gray;
                }
                a:hover {
                    color: red;
                }
                .lookprice {
                    color: black;
                }
                span {
                    display: inline-block;
                    margin-left: 10px;
                    margin-right: 10px;
                }
            }
        }
    }

    .price {
        position: absolute;
        top: 15px;
        left: 570px;
    }
    .product-subtotal {
        position: absolute;
        top: 15px;
        left: 790px;
    }
    .handle {
        position: absolute;
        top: 15px;
        left: 870px;
        a:hover {
            color: red;
        }
    }
    .pay {
        width: 1200px;
        margin: 0 auto;
        margin-top: 10px;
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        color: gray;
        background: #fff;
        border: 1px solid #ddd;
        position: relative;
        margin-bottom: 20px;
        p {
            float: left;
            position: relative;
            input {
                margin-right: 10px;
                position: absolute;
                top: 18px;
                left: 10px;
            }
            span {
                margin-left: 35px;
            }
            a {
                display: inline-block;
                margin-left: 6px;
                color: gray;
            }
            a:hover {
                color: red;
            }
        }
        .product-pay {
            float: right;
            color: gray;
            a {
                color: gray;
                position: absolute;
                right: 265px;
                top: -10px;
                span {
                    color: red;
                    margin-right: 3px;
                    margin-left: 3px;
                }
                i {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: url("../../assets/img/search/search.ele.png");
                    background-position: 2px -24px;
                    margin-left: 3px;
                }
            }
            p {
                span {
                    width: 45px;
                    position: absolute;
                    top: -10px;
                    right: 112px;
                }
                strong {
                    color: red;
                    font-size: 16px;
                    margin-right: 10px;
                    position: absolute;
                    right: 7px;
                    top: -10px;
                }
                i {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: url("../../assets/img/search/price-tips.png")
                        no-repeat;
                    position: absolute;
                    top: 6px;
                    right: -14px;
                }
                em {
                    width: 100px;
                    position: absolute;
                    top: 12px;
                    right: -34px;
                    color: gray;
                }
            }
            button {
                width: 80px;
                height: 50px;
                line-height: 50px;
                background: red;
                color: white;
                font-size: 16px;
                outline: none;
                border: none;
                margin-left: 20px;
            }
        }
    }
}
.counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    left: 675px;
    top: -10px;
}
.counter-show {
    float: left;
}
.counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 50px;
    outline: none;
    text-align: center;
}
.counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 15px;
    text-align: center;
    cursor: pointer;
}
</style>



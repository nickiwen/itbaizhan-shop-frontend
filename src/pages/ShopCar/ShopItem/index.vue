<template>
    <div class="detail">
        <input type="checkbox" v-model="selected" />
        <div class="product-detail">
            <p class="img">
                <img :src="item.image" alt />
            </p>
            <p class="des">
                <a href="##">{{ item.title }}</a>
                <span :title="item.sellPoint">{{ item.sellPoint }}</span>
            </p>
            <p class="present1">
                <a href="##">【赠品】自拍杆，多种颜色随机，(下单关注店铺即送)</a>
                <span>X1</span>
                <a href="##" class="lookprice">查看价格</a>
            </p>
            <p class="present2">
                <a href="##">【赠品】自拍杆，多种颜色随机，(下单关注店铺即送)</a>
                <span>X1</span>
                <a href="##" class="lookprice">查看价格</a>
            </p>
        </div>
        <div class="price">
            <a href="##">
                <span>单价:￥{{ (item.price/100) }}</span>
            </a>
        </div>
        <div class="counter">
            <!-- <Counter :counterData="{min:1,currentNum:item.num,id:item.id,max:10}" /> -->
            <div class="counter-component">
                <div class="counter-btn" @click="mins(item.num)">-</div>
                <div class="counter-show">
                    <input type="text" v-model="item.num" />
                </div>
                <div class="counter-btn" @click="maxs(item.num)">+</div>
            </div>
        </div>
        <div class="product-subtotal">
            <a href="##">
                <span>￥{{ totalPrice(item.num,item.price) }}</span>
            </a>
        </div>
        <div class="handle">
            <p>
                <a href="javascript:;" @click="delProdcut">删除</a>
            </p>
            <p>
                <a href="##">移到我的关注</a>
            </p>
        </div>
    </div>
</template>
<script>

import { mapState } from "vuex"

export default {
    name: "Item",
    props: ["item"],
    data() {
        return {
            selected:false
        };
    },
    watch: {
        selected(value){
            this.$emit("onGoodsSeleted",{id:this.item.id,seleted:value})
        }
    },
    computed: {
        ...mapState(["loginToken","userid"])
    },
    methods: {
        mins(num) {
            this.item.num--;
            this.$api
                .getUpdateItemNum({
                    itemId: this.item.id,
                    num: this.item.num,
                    userId:this.userid
                }).then(res => {
                    if (res.data.status === 500) {
                        alert("稍等服务器开销差了");
                    }
                });
        },
        maxs(num) {
            this.item.num++;
            this.$api
                .getUpdateItemNum({
                    itemId: this.item.id,
                    num: this.item.num,
                    userId:this.userid
                }).then(res => {
                    if (res.data.status === 500) {
                        alert("稍等服务器开小差了");
                    }
                }); 
        },
        totalPrice(num,price){
            this.$emit("onPrice",num*price);
            return (num*price/100).toFixed(2)
        },
        delProdcut(){
            this.$emit("onDelProduct",this.item.id)
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
                right: 230px;
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
                    background-position: 2px -24px;
                    margin-left: 3px;
                }
            }
            p {
                span {
                    width: 45px;
                    position: absolute;
                    top: -10px;
                    right: 55px;
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
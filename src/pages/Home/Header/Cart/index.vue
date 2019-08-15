<template>
    <div class="cart" @click="backShopcar">
                <div class="cart-icon">
                    <i class="count">0</i>
                    <i class="icon"></i>
                    <a href="#">我的购物车</a>
                </div>
                <div class="dowload">
                    <div class="dowload-pop">
                         <div class="cart_empty">
                             <i class="cart_empty_img"></i>
                             购物车中还没有商品，赶紧选购吧！
                         </div>
                    </div>
                </div>
            </div>
</template>
<script>

export default {
    name:'Cart',
    data(){
        return {

        }
    },
    components:{
    },
    methods:{
        backShopcar(){
            this.$router.push('/shopcar');
        }
    }
}
</script>
<style lang="less" scoped>
.cart{
            position: absolute;
            right: 185px;
            top: 25px;
            z-index: 21;
            .cart-icon{
                width: 188px;
                height: 33px;
                background-color: #fff;
                text-align: center;
                line-height: 33px;
                overflow: hidden;
                position: relative;
                z-index: 1;
                float: left;
                border: 1px solid #e3e4e5;
                .count{
                    position: absolute;
                    top: 0px;
                    left: 140px;
                    right: auto;
                    display: inline-block;
                    padding: 1px;
                    font-size: 12px;
                    line-height: 12px;
                    color: #fff;
                    background-color: #f10215;
                    -moz-border-radius: 7px;
                    border-radius: 8px;
                    min-width: 12px;
                    text-align: center;
                    font-style: initial;
                }
                .icon{
                    margin-right: 3px;
                    display: inline-block;
                    background-repeat: no-repeat;
                    background-position: 0 -274px;
                    width: 24px;
                    height: 15px;
                    background-image: url("../../../../assets/img/header/tubiao.png");
                }
                a{
                    color: #f10214;
                    font-size: 12px;
                }
            }
            .dowload{
                display: none;
                position: absolute;
                top: 35px;
                right: 0;
                width: 308px;
                // border: 1px solid #ccc;
                background-color: #fff;
                box-shadow: 1px 2px 1px rgba(0,0,0,.1);
                .dowload-pop{
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    background: #fff;
                    .cart_empty{
                        height: 49px;
                        margin: auto;
                        padding: 10px 0;
                        text-align: center;
                        line-height: 49px;
                        overflow: hidden;
                        color: #999;
                        .cart_empty_img{
                            display: inline-block;
                            vertical-align: middle;
                            width: 56px;
                            height: 49px;
                            background-image: url("../../../../assets/img/header/cart_empty.png");
                        }
                    }
                }
            }
            .cart:hover .dowload{
                    display: block;
            }
        }
</style>


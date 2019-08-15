<template>
    <div class="product">
        <div class="product-box">
            <div class="product-inner">
                <div class="item">
                    <a href="#">
                        <div class="item_box">
                            <img src="../../../../assets/img/header/3e7093b76fba6d4f.jpg" alt="">
                        </div>
                    </a>
                </div>
                <div class="item">
                    <a href="#">
                        <div class="item_box">
                            <img src="../../../../assets/img/header/ea3ea9f1fce631dc.jpg" alt="">
                        </div>
                    </a>
                </div>
                <div class="item">
                    <a href="#">
                        <div class="item_box">
                            <img src="../../../../assets/img/header/3d54a978517643b2.jpg" alt="">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Product',
    data(){
        return {}
    },
    components:{}
}
</script>
<style lang="less" scoped>
.product{
    width: 190px;
    height: 480px;
    float: left;
    .product-box{
        float: left;
        width: 190px;
        .product-inner{
            .item{
                width: 190px;
                height: 150px;
                margin-top: 10px;
                a{
                    width: 190px;
                    height: 150px;
                    display: block;
                    transition: opacity .2s ease;
                    color: #666;
                    .item_box{
                        background: transparent;
                        position: relative;
                        overflow: hidden;
                        display: block;
                        width: 190px;
                        height: 150px;
                        img{
                            opacity: 1;
                        }
                    }
                }
                a:hover{
                    opacity: .8;
                    color: #c81623;
                }
            }
        }
    }
}
</style>


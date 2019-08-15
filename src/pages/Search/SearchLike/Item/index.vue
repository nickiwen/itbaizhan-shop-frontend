<template>
    <div class="left-item">
        <div class="item-img">
            <img src="../../../../assets/img/search/7fc6e208a3009353.jpg" alt="">
        </div>
        <div class="item-des">
            <p class="product-des">
                <a href="##">
                <span>伊利奶粉</span> 
                <span>金领冠系列</span>  
                <span>塞纳牧幼儿有机配方奶粉</span>  
                <span>3段</span>  
                </a>
            </p>
            <p class="product-appraise">已有<span>34万+</span>人评价</p>
            <p class="product-price"><span>￥368.00</span></p>
        </div>
    </div>
</template>
<script>
export default {
    name:'Item',
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
.left-item{
    padding: 10px;
    width: 160px;
    margin-left: 20px;
    .item-img{
        text-align: center;
        img{
            display: inline-block;
            margin-left: -10px;
            width: 130px;
            height: 130px;
        }
    }
    .item-des{
        padding-left: 10px;
        text-align: center;
        p{
            font-size:12px;
            margin-top: 10px;
        }
        .product-price{
            font-size:12px;
            color:red;
        }
        .product-des{
            white-space: wrap;
            overflow: hidden;
            
            a{
                 color:gray;
                span{
                    margin-right: 5px;
                }
            }
        }
        .product-appraise{
            color:#005aa0;
            
        }
    }
   

}

</style>



<template>
    <div class="left-item" @click="backDetail">
        <div class="item-img">
            <img src="../../../../../assets/img/search/7fc6e208a3009353.jpg" alt="">
        </div>
        <div class="item-des">
            <p class="product-price"><span>￥368.00</span></p>
            <p class="product-des">
                <a href="##">
                <span>伊利奶粉</span> 
                <span>金领冠系列</span>  
                <span>塞纳牧幼儿有机配方奶粉</span>  
                <span>3段</span>  
                </a>
            </p>
            <p class="product-appraise">已有<span>34万+</span>人评价</p>
        </div>


    </div>
</template>
<script>
export default {
    name:'Item',
    data(){
        return{

        }
    },
    methods:{
        backDetail(){
            this.$router.push('/detail');
        }
    }
}
</script>

<style lang="less" scoped>
.left-item{
    padding: 10px;
    width: 200px;
    .item-img{
         width: 160px;
        img{
            display: inline-block;
            margin-left: -10px;
        }
    }
    .item-des{
        padding-left: 10px;
        p{
            font-size:12px;
            margin-top: 10px;
        }
        .product-price{
            font-size:16px;
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
            color:gray;
            span{
                color:#005aa0;

            }
        }
    }
   

}

</style>



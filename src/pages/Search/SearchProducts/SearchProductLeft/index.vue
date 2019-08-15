<template>
    <div class="product-left">
        <div class="left-title">
            <h4>商品精选</h4>
        </div>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
     
    </div>
</template>
<script>
import Item from './Item'
export default {
    name:'SearchProductLeft',
    data(){
        return{

        }
    },
    components:{
        Item,
    }
}
</script>

<style lang="less" scoped>
.product-left{
    flex:1.2;
    border:1px solid #ddd;
    float: left;
    .left-title{
        margin-left: 10px;
        margin-top: 5px;
    }
}

</style>



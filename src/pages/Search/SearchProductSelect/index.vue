<template>
    <div class="main-select">
        <p>商品精选</p>
        <div class="mainSelect-content">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        


    </div>
</template>
<script>
import Item from './Item'
export default {
    name:'SearchProductSelect',
    components:{
        Item,
    }
}
</script>
<style lang="less" scoped>
.main-select{
    width: 90%;
    margin: 0 auto;
    border:1px solid #ddd;
    box-sizing: border-box;
    margin-top: 40px;
    margin-bottom: 20px;
    p{
        padding-left: 10px;
        padding-top: 10px;
    }
    .mainSelect-content{
        display: flex;
        width: 100%;
        margin-left: 70px;
    }
}
</style>



<template>
    <div class="product-wrap">
        <SearchProductLeft />
        <SearchProductContent :content="content"/>
    </div>
</template>
<script>
import SearchProductLeft from './SearchProductLeft'
import SearchProductContent from './SearchProductContent'
export default {
    name:'SearchProducts',
    components:{
        SearchProductLeft,
        SearchProductContent
    },
    props:["content"]
}
</script>

<style lang="less" scoped>
.product-wrap{
    width: 90%;
    margin: 10px auto;
    display: flex;
}

</style>



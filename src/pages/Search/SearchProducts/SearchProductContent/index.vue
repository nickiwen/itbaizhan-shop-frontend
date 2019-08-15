<template>
    <div class="product-content">
        <SearchProductNav />
        <SearchProductMain :content="content"/>
    </div>
</template>
<script>
import SearchProductNav from './SearchProductNav'
import SearchProductMain  from './SearchProductMain'
import SearchProductSearch  from './SearchProductSearch'
export default {
    name:'SearchProductSearch',
    data(){
        return{

        }
    },
    props:["content"],
    components:{
        SearchProductNav,
        SearchProductMain,
        SearchProductSearch,
    },
    mounted() {
    },
}
</script>

<style lang="less" scoped>
.product-content{
    flex: 8.8;
    border-top: 1px solid #ddd;
    float: right;
    margin-left: 10px;
}

</style>



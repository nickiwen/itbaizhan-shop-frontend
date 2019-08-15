<template>
    <div class="search-like">
        <p>猜你喜欢</p>
        <div class="like-content">
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
    name:'SearchLike',
    components:{
        Item,
    }
}
</script>
<style lang="less" scoped>
.search-like{
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
    .like-content{
         display: flex;
        width: 100%;
        margin-left: 70px;
    }

}

</style>



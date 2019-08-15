<template>
    <div class="header">
        <div class="wrap">
            <div class="logo"></div>    
            <Search />
            <Cart />
            <SearchHot />
            <div class="treasure"></div>
        </div>
    </div>
</template>
<script>
import SearchHot from '../../pages/Home/Header/SearchHot'
import Cart from '../../pages/Home/Header/Cart'
import HomeSearch from '../../pages/Home/Header/Search'
export default {
    name:'TopNav',
    data(){
        return {}
    },
    components:{
        SearchHot,
        Cart,
        Search,
    }
}
</script>
<style lang="less" scoped>
.header{
    width:100%;
    height: 140px;
    .wrap{
        position: relative;
        width: 1200px;
        height: 140px;
        margin: 0 auto;
        .logo{
            position: absolute;
            z-index: 2;
            left: 0;
            top: -31px;
            width: 190px;
            height: 170px;
            box-shadow: 0 -12px 10px rgba(0,0,0,.2);
            background-color: #fff;
            border-bottom: 1px solid #ededed;
            background-position: 0 0;
            background-image: url('../../../assets/img/header/sprite.head.png');
        }
        .treasure{
            float: left;
            position: absolute;
            right: 0;
            bottom: 10px;
            width: 190px;
            height: 40px;
    }
        
    }
}
</style>

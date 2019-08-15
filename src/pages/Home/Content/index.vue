<template>
    <div class="content">
        <div class="content-box">
            <HDM />
            <LunBo />
            <Product />
            <HeaderLogin />
        </div>
    </div>
</template>
<script>
import HDM from './HDM'
import LunBo from './LunBo'
import Product from './Product'
import HeaderLogin from './HeaderLogin'
export default {
    name:'Content',
    data(){
        return {}
    },
    components:{
        HDM,
        LunBo,
        Product,
        HeaderLogin
    }
}
</script>
<style lang="less" scoped>
.content{
    z-index: 9;
    position: relative;
    top:10px;
    .content-box{
            z-index: 1;
            height: 480px;
            background-color: #f0f3ef;
            position: relative;
            margin: 0 auto;
            width: 1200px;
    }
}
</style>


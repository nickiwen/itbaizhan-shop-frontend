 
<template>
    <div class="search-hot">
        <a href="#" class="title">脉动爽一夏</a>
        <a href="#">鲜奶</a>
        <a href="#">全城热练</a>
        <a href="#">驱蚊</a>
        <a href="#">5折秒杀</a>
        <a href="#">手机</a>
        <a href="#">每100-50</a>
        <a href="#">清凉节</a>
        <a href="#">水杯</a>
    </div>
</template>
<script>
export default {
    name:'SearchHot',
    data(){
        return {}
    },
    components:{
    }
}
</script>
<style lang="less" scoped>
.search-hot{
    overflow: hidden;
    position: absolute;
    left: 193px;
    top: 65px;
    width: 550px;
    height: 20px;
    line-height: 20px;
    a{
        color: #999;
        width: 700px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 10px;
        font-size: 12px;
    }
    a:hover{
        color:#c81623
    }
    .title{
        color: #f10215;
    }
    
}
</style>


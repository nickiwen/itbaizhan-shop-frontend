<template>
    <div class="navitem">
        <ul>
            <li><a href="#" class="select">秒杀</a></li>
            <li><a href="#" class="select">优惠券</a></li>
            <li><a href="#">PLUS会员</a></li>
            <li><a href="#">品牌闪购</a></li>
        </ul>
        <div class="spacer"></div>
        <ul>
            <li><a href="#">拍卖</a></li>
            <li><a href="#">百战时尚</a></li>
            <li><a href="#">百战超市</a></li>
            <li><a href="#">百战生鲜</a></li>
        </ul>
        <div class="spacer"></div>
        <ul>
            <li><a href="#">海囤全球</a></li>
            <li><a href="#">百战金融</a></li>
        </ul>
    </div>
</template>
<script>

export default {
    name:'NavItem',
    data(){
        return {}
    },
    components:{
    }
}
</script>
<style lang="less" scoped>
.navitem{
    overflow: hidden;
    position: absolute;
    left: 200px;
    bottom: 0;
    width: 790px;
    height: 40px;
    padding-top: 20px;
    ul{
        float: left;
        li{
            float: left;
            margin-left: 25px;
            a{
                position: relative;
                display: block;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                color: #333;
            }
            .select{
                color:#c81623;
            }
            a:hover{
                color: #c81623;
            }
        }
    }
    .spacer{
        overflow: hidden;
        float: left;
        margin-top: 15px;
        margin-left: 17px;
        margin-right: -7px;
        width: 1px;
        height: 10px;
        background-color: #ccc;
    }
}
</style>


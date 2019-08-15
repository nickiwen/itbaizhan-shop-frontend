<template>
    <div class="top_hidden top_hidden3">
         <div class="top-hidden-clict">客户</div>
         <div class="top-hidden-list">
             <a href="#">帮助中心</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">售后服务</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">在线客服</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">意见建议</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">电话客服</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">客服邮箱</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">金融咨询</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">全球售客服</a>
         </div>
         <div class="top-hidden-clict top-hidden-business">商户</div>
         <div class="top-hidden-list">
             <a href="#">合作招商</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">成长中心</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">商家后台</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">京麦工作台</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">商家帮助</a>
         </div>
         <div class="top-hidden-list">
             <a href="#">规则平台</a>
         </div>
    </div>
</template>
<script>

export default {
    name:'ServiceHidden',
    components:{
    }
}
</script>
<style lang="less" scoped>
.top_hidden {
        display: none;
        position: absolute;
        border: 1px solid #ccc;
        background-color: #fff;
        box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
        z-index: 999;
        .top-hidden-clict{
            padding-left: 15px;
            font-weight: 700;
            color: #666;
        }
        .top-hidden-business{
            margin-top: 5px;
            padding-top: 5px;
            border-top: 1px dotted #eee;
            text-align: left;
        }
        .top-hidden-list {
            display: inline-block;
            width: 70px;
            padding-left: 15px;
                a{
                    color: #999;
                    font-size: 12px;
                }
                a:hover {
                    color: #f10215;
                }
            }
    }
    .top_hidden3 {
        top:2px;
        right:-163px;
        width: 170px;
        padding: 10px 0;
        text-align: left;
    }
</style>


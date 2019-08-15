<template>
     <div class="search-look">
         <div class="isLook">
             <span>您是不是要找:</span>
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>|
             <a href="##">奶粉成人</a>
         </div>
         <div class="reLook">
             <strong>重新搜索:</strong>
             <input type="text" value="奶粉">
             <button>搜索</button>
             <a href="##">说说我使用搜索的感受</a>
         </div>
     </div>
</template>
<script>
export default {
    name:'SearchLook',

}
</script>
<style lang="less" scoped>
.search-look{
    width: 90%;
    margin: 0 auto;
    border: 1px solid #ddd;
    background: #F9F9F9;
    margin-bottom: 20px;
    .isLook{
        width: 100%;
        margin-left: 40px;
        margin-top: 20px;
        font-size: 12px;
        color:#ddd;
        span{
            color: #333;
            padding-right: 10px;
        }
        a{
            color: #005aa0;
            margin-right: 10px;
            margin-left: 10px;
        }
    }
    .reLook{
        width: 100%;
        margin-left: 40px;
        margin-top: 10px;
        font-size: 12px;
        margin-bottom: 20px;
        input{
            width: 300px;
            margin-left: 40px;
            height: 28px;
            line-height: 28px;
        }
        button{
            width: 60px;
            height: 35px;
            line-height: 35px;
            background: #E74649;
            color:white;
            outline: none;
            border:1px solid #ddd;
            margin-left: 10px;
            margin-right: 40px;
        }
        a{
            color:#005aa0;
        }
    }
}

</style>



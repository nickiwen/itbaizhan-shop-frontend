<template>
    <div class="hdm-hidden">
        <div class="cate_item1 clearfix">
            <Hidden :value="value"/>
        </div>
        <div class="cate_item2">
            <div class="cate_item2_img">
                <a href="#">
                    <img src="../../../../../assets/img/header/562f4971Na5379aba.jpg" alt="">
                </a>
                <a href="#">
                    <img src="../../../../../assets/img/header/5be51276fdf065e3.jpg" alt="">
                </a>
                <a href="#">
                    <img src="../../../../../assets/img/header/1f4b1355bdb18cae.jpg" alt="">
                </a>
                <a href="#">
                    <img src="../../../../../assets/img/header/57f9fa89N6ddb14fc.jpg" alt="">
                </a>
                <a href="#">
                    <img src="../../../../../assets/img/header/574c0755Nc8f19944.jpg" alt="">
                </a>
                <a href="#">
                    <img src="../../../../../assets/img/header/823e24e3a2acd047.jpg" alt="">
                </a>
                <a href="#">
                    <img src="../../../../../assets/img/header/6f74f61cd9c7a7b9.jpg" alt="">
                </a>
                <a href="#">
                    <img src="../../../../../assets/img/header/890312111d77e347.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="cate_item3">
            <a href="#">
                <img src="../../../../../assets/img/header/57176c897cb9d778.jpg" alt="">
            </a>
            <a href="#">
                <img src="../../../../../assets/img/header/331a9c8fdb4a4e34.jpg" alt="">
            </a>
        </div>
    </div>
</template>
<script>

import HDMHiddenTitle from "./HDMHiddenTitle"
import Hidden from "./Hidden"

export default {
    name:'HDMHidden',
    data(){
        return {
            
        }
    },
    props:["value","hdmHiddenData"],
    components:{
        HDMHiddenTitle,Hidden
    },
    mounted(){
    }
}
</script>
<style lang="less" scoped>
.hdm-hidden{
    .clearfix::after {
        visibility: hidden;
        clear: both;
        display: block;
        content: ".";
        height: 0;
    } 
    .cate_item1{
        display: block;
        padding: 20px 0 10px;
    }
    .cate_item2{
        float: right;
        width: 198px;
        margin-top: -463px;
        .cate_item2_img{
            margin: auto;
            width: 168px;
            a{
                display: inline-block;
                width: 83px;
                height: 35px;
                margin: 0 0 1px 1px;
                background-color: #e7e7e7;
                img{
                    border: 0;
                    vertical-align: middle;
                }
            }
        }
    }
    .cate_item3{
        margin: 10px auto 0;
        width: 168px;
        margin-right: 14px;
        margin-top: -302px;
        a{
            display: block;
            color: #666;
            margin-bottom: 1px;
            height: 134px;
            background-color: #e7e7e7;
            img{
                border: 0;
                vertical-align: middle;
            }
        }
    }

}
</style>


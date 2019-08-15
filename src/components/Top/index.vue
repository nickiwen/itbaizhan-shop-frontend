<template>
    <div :class="{top:isShow}">
        <div class="top-search">
            <div class="logo">
                <a href="#">百战购物商城</a>
            </div>
            <div class="top-from">
                <div class="search">
                <div class="search-left">
                    <div class="from">
                        <!-- 搜索 -->
                        <input type="text" class="txt" v-model="searchContent" placeholder="扫地机器人 智能" >
                        <span class="search-from-photo">
                            <div class="search-photo" >
                                <span class="camera"></span>
                                <input type="file" class="txt1">
                            </div>
                        </span>
                        <button class="button">
                            <i class="icon-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Top',
    data(){
        return {
            searchContent:""
        }
    },
    props:['isShow'],
    components:{
       
    }
}
</script>
<style lang="less" scoped>
.top{
    // display: none;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 2px solid #f10214;
    background-color: #fff;
    box-shadow: 2px 2px 2px rgba(0,0,0,.2);
    .top-search{
        margin: auto;
        width: 1200px;
        height: 48px;
        position: relative;
        z-index: 1s;
        .logo{
            width: 190px;
            height: 40px;
            a{
                color: #f10214;
                font-size: 30px;
            }
        }
        .top-from{
            position: absolute;
            left: 0;
            top: -18px;
            .search{
            .search-left{
                position: relative;
                z-index: 1;
                height: 60px;
                .from{
                    position: absolute;
                    left: 253px;
                    top: 25px;
                    width: 550px;
                    height: 35px;
                    .txt{
                        left: 0;
                        padding: 4px 44px 4px 20px;
                        width: 450px;
                        height: 25px;
                        border: 1px solid transparent;
                        line-height: 25px;
                        font-size: 12px;
                        position: absolute;
                        top: 0;
                        outline: none;
                        color: #989898;
                        background-color: #f5f5f5;
                    }
                    .search-from-photo{
                        position: absolute;
                        right: 65px;
                        top: 10px;
                        width: 19px;
                        height: 15px;
                        overflow: hidden;
                        .search-photo{
                            .camera{
                                display: block;
                                width: 19px;
                                height: 15px;
                                background: url("../../assets/img/header/sprite-photo-search.png") no-repeat;
                                cursor: pointer;
                            }
                            .search-from-photo:hover .camera{
                                background-position: -30px 0;
                                color: #f10215;
                            }
                            .txt1{
                                position: absolute;
                                right: 0;
                                top: 0;
                                z-index: 3;
                                width: 500px;
                                height: 500px;
                                cursor: pointer;
                                opacity: 0
                            }
                        }
                    }
                    .button{
                        border-radius: 0;
                        right: 0;
                        width: 50px;
                        height: 35px;
                        line-height: 35px;
                        border: none;
                        background-color: #f10215;
                        font-size: 20px;
                        font-weight: 700;
                        color: #fff;
                        position: absolute;
                        top: 0;
                        outline: none;
                    }
                    input{
                        color:#333;
                        background: transparent none repeat scroll 0% 0%;
                    }
                }
            }
        }
            
        }
    }
}
</style>


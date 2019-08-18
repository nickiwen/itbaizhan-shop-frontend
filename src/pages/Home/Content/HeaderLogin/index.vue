<template>
    <div class="HeaderLogin">
        <div class="user">
            <div class="user-box">
                 <div class="user-info">
                     <a href="#">
                         <img src="../../../../assets/img/header/no_login.jpg" alt="">
                     </a>
                 </div>
                 <div class="user-show">
                    <p>Hi~{{ username }}欢迎来到易购</p>
                    <p>
                        <a href="#">登录</a>
                        <a href="#">注册</a>
                    </p>
                </div>
                <div class="user_profit">
                    <a href="#" class="user_new">新人福利</a>
                    <a href="#" class="user_plus">PLUS会员</a>
                </div>
            </div>
           <div class="news">
               <div class="news-box">
                   <div class="news-title">
                       <h5>京东快报</h5>
                       <a href="#">
                           更多
                            <i></i>
                       </a>
                   </div>
                   <ul class="news-content"> 
                       <li class="news-content-li1">
                           <a href="#">
                               <span>热评</span>
                               荣耀9X官宣：无法低调7月23日正式发布
                           </a>
                        </li>
                      <li class="news-content-li2">
                           <a href="#">
                               <span>HOT</span>
                               iPhone XR2提前曝光，后置双摄+iOS 13
                           </a>
                        </li>
                       <li class="news-content-li3">
                           <a href="#">
                               <span>热门</span>
                               iPhone 11国行售价曝光，XR2也相应而出
                           </a>
                        </li>
                       <li class="news-content-li4">
                           <a href="#">
                               <span>推荐</span>
                               华为Mate 20系列全线下撤！麒麟980机型又被抢！
                           </a>
                        </li>
                   </ul>
               </div>
           </div>
           <div class="service">
               <div class="service_entry">
                   <ul>
                       <li>
                           <a href="#">
                               <span>话费</span>
                           </a>
                       </li>
                        <li>
                           <a href="#">
                               <span>机票</span>
                           </a>
                       </li>
                        <li>
                           <a href="#">
                               <span>酒店</span>
                           </a>
                       </li>
                        <li>
                           <a href="#">
                               <span>游戏</span>
                           </a>
                       </li>
                   </ul>
                   <div class="service_title">
                       <ul>
                           <li><a href="#">话费充值</a></li>
                           <li><a href="#">流量充值</a></li>
                           <li><a href="#">套餐变更</a></li>
                       </ul>
                       <div class="service-from">
                        <div class="service-box">
                           <dl>
                               <dt>
                                   <label for="">号码</label>
                               </dt>
                               <dd>
                                   <input type="text" value="移动/ 联通/ 电信">
                               </dd>
                           </dl>
                           <dl class="form-bottom">
                               <dt>
                                   <label for="">流量</label>
                               </dt>
                               <dd>
                                   <select  id="areaSelect">
                                       <option>全国</option>
                                       <option>省内</option>
                                   </select>
                               </dd>
                               <dd>
                                   <select  id="faceSelect">
                                       <option value="50">50M</option>
                                       <option value="100">100M</option>
                                       <option value="200">200M</option>
                                       <option value="300">300M</option>
                                       <option value="500">500M</option>
                                   </select>
                               </dd>
                           </dl>
                           <div class="price">
                                <p>￥7.5-￥10.0</p>
                            </div>
                            <div class="recharge">
                                <input type="button" value="快速充值">
                            </div>
                            <p>
                                <a href="#">
                                     App Store充值卡
                                </a>
                            </p>
                        </div>      
                   </div>
                   </div>           
               </div>
               
           </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    name:'HeaderLogin',
    data(){
        return {}
    },
    computed: {
        ...mapState(["username"])
    },
    components:{}
}
</script>
<style lang="less" scoped>
.HeaderLogin{
    float: right;
    width: 190px;
    height: 480px;
    .user{
        height: 150px;
        background: #fff;
        margin-top: 10px;
        text-align: center;
        .user-box{
            position: relative;
            padding-top: 62px;
            height: 78px;
            .user-info{
                position: absolute;
                left: 50%;
                top: -10px;
                margin-left: -34px;
                width: 65px;
                height: 65px;
                a{
                    display: block;
                    width: 55px;
                    height: 55px;
                    border: 5px solid #e3e1df;
                    border-radius: 50%;
                    overflow: hidden;
                    box-shadow: 3px 6px 25px #c3c3c3;
                    img{
                        display: block;
                        width: 55px;
                        height: 55px;
                    }
                }
            }
        }
        .user-show{
            padding: 0 10px;
            p{
                overflow: hidden;
                line-height: 20px;
                width: 100%;
                font-size: 12px;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #888;
                a{
                    padding: 0 2px;
                    color: #666;
                }
                a:hover{
                    color: #c81623;
                }
            }
        }
        .user_profit{
            margin-top: 10px;
            height: 25px;
            font-size: 0;
            a{
                display: inline-block;
                margin: 0 5px;
                width: 70px;
                height: 25px;
                line-height: 25px;
                font-size: 12px;
                text-align: center;
                color: #e43f3b;
                border-radius: 13px;
                box-shadow: 6px 8px 20px rgba(45,45,45,.15);
                transition: background .3s ease,color .3s ease;
            }
            .user_new{
                background-color: #e01222;
                color: #fff;
            }
            .user_plus{
                background: #363634;
                color: #e5d790;
            }
            a:hover{
                background-color: #e01222;
                color: #fff;
            }

        }
        .news{
            overflow: hidden;
            height: 130px;
            background: #fff;
            .news-title{
                padding: 8px 0 0;
                position: relative;
                line-height: 13px;
                text-align: left;
                h5{
                    display: inline-block;
                    font-size: 13px;
                    margin-left: 15px;
                    color: #1e1e1e;
                }
                a{
                    position: absolute;
                    right: 12px;
                    top: 8px;
                    font-size: 12px;
                    color: #999;
                    i{
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        background-repeat: no-repeat;
                        background-position: -26px -99px;
                        background-image: url("../../../../assets/img/header/iconn.png")
                    }
                }
            }
            .news-content{
                position: relative;
                padding-top: 8px;
                margin: 0 15px;
                height: 88px;
                width: 160px;
                li{
                    line-height: 21px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: #999;
                    line-height: 21px;
                    a{
                        color: #666;
                        font-size: 12px;
                        span{
                            display: inline-block;
                            position: relative;
                            font-size: 12px;
                            height: 16px;
                            width: 35px;
                            line-height: 16px;
                            text-align: center;
                            border-radius: 2px;
                            color: #fff;
                            background-color: #e47f7f;
                            margin-right: 6px;
                        }
                    }
                    a:hover{
                        color: #c81623;
                    }
                }
                .news-content-li1{
                    padding-right: 5px;
                }
                .news-content-li2{
                    padding-right: 13px;
                }
                .news-content-li3{
                    padding-right: 9px;
                }
                .news-content-li4{
                    padding-right: 7px;
                }
            }
        }
        .news-box:hover{
            color: currentColor;
        }
        .service{
            overflow: hidden;
            position: relative;
            height: 200px;
            font-size: 12px;
            transition: all .2s ease;
            .service_entry{
                overflow: hidden;
                padding: 18px 11px 11px;
                background: #fff;
                ul{
                    height: 26px;
                    li{
                        overflow: visible;
                        position: relative;
                        float: left;
                        width: 42px;
                        height: 26px;
                        background: #fff;
                        text-align: center;
                        a{
                            display: block;
                            position: relative;
                            padding-top: 6px;
                            transition: all .2s linear;
                            span{
                                display: block;
                                background: none;
                                color: #666;
                                height: 14px;
                                line-height: 14px;
                                padding-bottom: 4px;
                                border-bottom: 2px solid #fff;
                                transition: color .15s ease;
                            }
                            .service-txt{
                                color: #e01121;
                                border-bottom-color: #e01121;
                            }
                            span:hover {
                                color: #e01121;
                                border-bottom-color: #e01121;
                            }
                        }
                        a:hover{
                            color: #c81623;
                        }
                    }
                }
            }
            .service_title{
                color: #666;
                width: 160px;
                height: 180px;
                ul{
                    width: 168px;
                    height: 21px;
                    padding-top: 12px;
                    overflow: hidden;
                    li{
                        float: left;
                        width: 56px;
                        a{
                            position: relative;
                            display: block;
                            line-height: 16px;
                            color: #666;
                            white-space: nowrap;
                            height: 21px;
                            font-size: 12px;
                        }   
                    }
                }
                .service-from{
                    color: #666;
                    width: 160px;
                    .service-box{
                        position: relative;
                        // height: 146px;
                        dl{
                            margin-top: 5px;
                            height: auto;
                            overflow: hidden;
                            dt{
                                float: left;
                                display: inline;
                                overflow: hidden;
                                label{
                                    display: inline-block;
                                    width: 34px;
                                    margin-top: 3px;
                                }
                            }
                            dd{
                                float: left;
                                display: inline;
                                overflow: hidden;
                                input{
                                    width: 122px;
                                    color: #c2c2c2;
                                    float: left;
                                    height: 20px;
                                    margin: 0;
                                    line-height: 20px;
                                    border: 1px solid #e7e7e7;
                                    text-indent: .6em;
                                    box-sizing: border-box;
                                    text-align: left;
                                }
                                select{
                                    height: 20px;
                                    width: 57px;
                                    border: 1px solid #e7e7e7;
                                    margin-right: 6px;
                                    color: inherit;
                                    font: inherit;
                                }
                            }
                        }
                        .price{
                             width: 160px;
                             height: 32px;
                             margin-left: 0;
                             float: left;
                            p{  
                                color: #e01222;
                                line-height: 1;
                                margin: 10px 0;
                                font-size: 12px;
                            }
                        }
                        .recharge{
                            height: 20px;
                            width: 60px;
                            display: inline-block;
                            overflow: hidden;
                            input{
                                font-size: 12px;
                                width: 60px;
                                height: 20px;
                                background: #e40015;
                                border-radius: 10px;
                                color: #fff;
                                text-align: center;
                                line-height: 18px;
                                border: 0;
                                margin-right: 8px;
                            }
                        }
                        p{
                            display: inline-block;
                            height: 20px; 
                            line-height: 20px;
                            overflow: hidden;
                            color: #999;
                            margin-left: 5px;
                            a{
                                color: #5476db;
                            }
                        }
                        .form-bottom{
                            margin-top: 8px;
                        }
                    }
                    
                }
            }
            
            
        }
        .service::after {
            content: "";
            position: absolute;
            top: 0;
            display: block;
            width: 160px;
            left: 15px;
            height: 1px;
            background: #ebeaea;
            z-index: 1;
        }
    }


}
</style>

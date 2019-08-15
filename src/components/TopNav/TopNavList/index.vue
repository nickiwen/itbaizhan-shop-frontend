<template>
    <div class="top-nav">
        <div class="top-nav-right">
            <ul class="top-nav-left">
                <li>
                    <router-link to="/" @click="backHome">商城首页</router-link>
                </li>
                <li class="cityList">
                    <div class="city">
                        <i class="dingwei"></i>
                        <a href="##">北京</a>
                    </div>
                    <div class="city-box">
                        <TopCity />
                    </div>
                </li>
            </ul>
            <ul>
                <li class="top-nav-login">
                    <a href="javascript:;" @click="loginHandler" v-if="getToken">你好，请登录</a>
                    <a href="javascript:;" v-else>{{username}}</a>
                    <a href="javascript:;" class="active f1">免费注册</a>
                    <a
                        href="javascript:;"
                        style="margin-left:10px;"
                        v-if="username"
                        @click="logoutHandler"
                    >退出登陆</a>
                </li>
                <li class="top-nav-spacer"></li>
                <li>
                    <a href="#">我的订单</a>
                </li>
                <li class="top-nav-spacer"></li>
                <li class="yigou">
                    <div class="top-nav-a">
                        <a href="#">我的百战</a>
                        <i class="iconfont"></i>
                    </div>
                    <div class="top_hidden top_hidden1">
                        <MineHiddern />
                    </div>
                </li>

                <li class="top-nav-spacer"></li>
                <li>
                    <a href="#">百战会员</a>
                </li>
                <li class="top-nav-spacer"></li>
                <li class="enterprise">
                    <div class="top-nav-a">
                        <a href="#" class="active">企业采购</a>
                        <i class="iconfont"></i>
                    </div>
                    <div class="top_hidden top_hidden2">
                        <EnterpriseHidden />
                    </div>
                </li>
                <li class="top-nav-spacer"></li>
                <li class="service">
                    <div class="top-nav-a">
                        <span>客户服务</span>
                        <i class="iconfont"></i>
                    </div>
                    <div class="top_hidden top_hidden3">
                        <ServiceHidden />
                    </div>
                </li>
                <li class="top-nav-spacer"></li>
                <li class="sites">
                    <div class="top-nav-a">
                        <span>网站导航</span>
                        <i class="iconfont"></i>
                    </div>
                    <div class="top_hidden top_hidden4">
                        <SitesHidden />
                    </div>
                </li>
                <li class="top-nav-spacer"></li>
                <li>
                    <span>手机百战</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import TopCity from "../TopCity";
import Storages from "../../../utils/Storages";
import { mapActions, mapState,mapMutations } from "vuex";
import MineHiddern from "../MineHiddern";
import EnterpriseHidden from "../EnterpriseHidden";
import ServiceHidden from "../ServiceHidden";
import SitesHidden from "../SitesHidden";
import { clearCookie } from "../../../utils/Cookies"
export default {
    inject: ["reload"],
    name: "TopNavList",
    data() {
        return {
            password: "",
            isHave: true
        };
    },
    computed: {
        ...mapState(["username", "loginToken"]),
        getToken() {
            if (localStorage.getItem("loginToken")) {
                this.isHave = false;
                // this.value=this.username;
            }
            // else{
            //   this.value='你好,请登录';
            // }
            return this.isHave;
        }
    },
    components: {
        TopCity,
        MineHiddern,
        EnterpriseHidden,
        ServiceHidden,
        SitesHidden,
        TopCity
    },
    methods: {
        ...mapActions(["setTokenActions","updateUsernameActions"]),
        ...mapMutations(["setUserId","removeCartCookie"]),
        loginHandler() {
            this.$router.push("/login");
        },
        backHome() {
            this.$router.push("/");
        },
        /**
         * 登出操作
         */
        logoutHandler() {
            this.$api.getLogOut({
                    token: this.loginToken
                })
                .then(res => {
                    if (res.data.status === 200) {
                        localStorage.removeItem("loginToken", null);
                        localStorage.removeItem("userid", null);
                        localStorage.removeItem("username", null);
                        this.setUserId(null);
                        this.removeCartCookie();
                        this.setTokenActions(null);
                        this.updateUsernameActions(null);
                        clearCookie("CART_COOKIE_NAME");
                        // this.reload();
                        this.$router.replace("/login");
                    } else {
                        alert("退出登陆失败");
                    }
                });
        }
    }
};
</script>
<style lang="less" scoped>
.top-nav {
    height: 30px;
    border-bottom: 1px solid #ddd;
    background-color: #e3e4e5;
    .top-nav-right {
        width: 1200px;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        color: #999;
        .top-nav-left {
            float: left;
            margin-left: 200px;
        }
        ul {
            float: right;
            li {
                float: left;
                font-size: 12px;
                margin-left: 10px;
                position: relative;
                .active {
                    color: #f10215;
                }
                .f1 {
                    padding-left: 10px;
                }
                .top-nav-a {
                    height: 28px;
                    line-height: 28px;
                }
                a {
                    cursor: pointer;
                    color: #999;
                }
                .iconfont {
                    display: inline-block;
                    width: 11px;
                    height: 7px;
                    margin-left: 3px;
                    background-repeat: no-repeat;
                    background-image: url("../../../assets/img/header/iconn.png");
                }
                .iconfont {
                    background-position: 0 0;
                }
                .dingwei {
                    display: inline-block;
                    width: 13px;
                    height: 15px;
                    margin-right: 5px;
                    background-repeat: no-repeat;
                    background-image: url("../../../assets/img/header/timg.jpg");
                }

                a:hover {
                    color: #f10215;
                }
                span {
                    color: #999;
                }
                .top-nav-login {
                    margin-right: 8px;
                    z-index: 20;
                }
                .city-box {
                    width: 300px;
                    padding: 10px;
                    line-height: 24px;
                    display: none;
                    position: absolute;
                    left: 0;
                    top: 30px;
                    border: 1px solid #ccc;
                    background-color: #fff;
                    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
                    z-index: 12;
                }
            }
            .top-nav-spacer {
                overflow: hidden;
                margin: 11px 10px 0;
                width: 1px;
                height: 10px;
                background-color: #ccc;
            }
            .top_hidden {
                display: none;
                position: absolute;
                border: 1px solid #ccc;
                background-color: #fff;
                box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
                z-index: 999;
                transition: all 0.5s;
            }
            .yigou:hover .top_hidden1,
            .enterprise:hover .top_hidden2,
            .service:hover .top_hidden3,
            .sites:hover .top_hidden4 {
                display: block;
            }
        }
        .cityList:hover .city-box {
            display: block;
        }
    }
    .top-nav-left {
        float: left;
    }
}
</style>
<template>
    <div class="login">
        <!-- 头部 -->
        <div class="login-top">
            <p>
                <router-link tag="span" to="/">百战商城</router-link>
                <a href="##">
                    <i></i>
                    <em>登录页面，问卷调查</em>
                </a>
            </p>
        </div>
        <!-- 登录模块 -->
        <div class="login-verify">
            <form action>
                <p>账户登录</p>
                <input type="text" v-model="username" placeholder="用户名" />
                <br />
                <input type="password" v-model="password" placeholder="密码" />
                <br />
                <button type @click="loginHandler">登录</button>
                <p>
                    <a href="/register" class="reg" style="outline: rgb(109, 109, 109) none 0px;">
                        <b></b>立即注册
                    </a>
                </p>
            </form>
        </div>
        <!-- 底部  -->
        <div class="login-footer">
            <div class="login-link">
                <a href="##">关于我们</a>|
                <a href="##">联系我们</a>|
                <a href="##">人才招聘</a>|
                <a href="##">商家入驻</a>|
                <a href="##">广告服务</a>|
                <a href="##">手机易购</a>|
                <a href="##">友情链接</a>|
                <a href="##">销售联盟</a>|
                <a href="##">易购社区</a>|
                <a href="##">易购公益</a>|
                <a href="##">English Site</a>
            </div>
            <div class="copyRight">Copyright © 2004-2019 易购Ego.com 版权所有</div>
        </div>
    </div>
</template>
<script>
import { mapActions,mapMutations } from "vuex";
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(["setTokenActions", "updateUsernameActions"]),
        ...mapMutations(["setUserId"]),
        loginHandler(event) {
            event.preventDefault();
            this.$api
                .getLogin({
                    username: this.username,
                    password: this.password
                })
                .then(res => {
                    if (res.data.status === 200) {
                        //存储token,vuex
                        this.setTokenActions(res.data.data.token);
                        this.updateUsernameActions(res.data.data.username);
                        this.setUserId(res.data.data.userid);
                        //本地存储
                        localStorage.setItem("loginToken", res.data.data.token);
                        localStorage.setItem("username", res.data.data.username);
                        localStorage.setItem("userid",res.data.data.userid);
                        window.history.back();
                    }else{
                      alert(res.data.msg);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
<style lang="less" scoped>
.login {
    .login-top {
        margin-top: 10px;
        margin-bottom: 10px;
        p {
            height: 60px;
            line-height: 60px;
            position: relative;
            span {
                font-size: 24px;
                color: gray;
                display: inline-block;
                position: absolute;
                top: 0px;
                cursor: pointer;
                left: 228px;
            }
            a {
                position: absolute;
                top: 23px;
                right: 200px;
                i {
                    background: url("../../assets/img/search/q-icon.png");
                    display: inline-block;
                    width: 18px;
                    height: 14px;
                    position: absolute;
                    top: 25px;
                    left: -25px;
                }
                em {
                    display: inline-block;
                    font-size: 12px;
                    color: gray;
                }
                em:hover {
                    color: red;
                    text-decoration: underline;
                }
            }
        }
    }
    .login-verify {
        width: 100%;
        height: 500px;
        background: url("../../assets/img/search/4.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        form {
            width: 400px;
            height: 240px;
            border: 1px solid #ddd;
            position: absolute;
            top: 100px;
            right: 100px;
            background: #fff;
            text-align: center;
            p {
                text-align: center;
                font-size: 20px;
                color: red;
                margin-top: 10px;
                margin-bottom: 20px;
                .reg {
                    font-size: 12px;
                    float: right;
                    padding: 0 50px;
                    box-sizing: border-box;
                }
            }
            input {
                width: 300px;
                height: 30px;
                color: gray;
                padding-left: 10px;
                margin-bottom: 20px;
            }
            button {
                width: 310px;
                height: 40px;
                line-height: 40px;
                background: red;
                border: 1px solid #ddd;
                outline: none;
                font-size: 20px;
                color: white;
                letter-spacing: 20px;
            }
        }
    }
    .login-footer {
        padding-bottom: 30px;
        text-align: center;
        margin-top: 20px;
        .login-link {
            font-size: 12px;
            color: gray;
            a {
                margin: 0 10px;
            }
            a:hover {
                color: red;
                text-decoration: underline;
            }
        }
        .copyRight {
            margin: 10px 0;
            color: gray;
            font-size: 12px;
        }
    }
}
</style>



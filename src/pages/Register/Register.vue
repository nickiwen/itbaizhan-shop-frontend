<template>
    <div class="main">
        <div class="reg-form">            
                <div id="step2-wrap">
                    <div class="form-item form-item-account" id="form-item-account">
                        <label>用　户　名</label>
                        <input type="text"  class="field" v-focus="picFocusStatus" v-model="userInfo.username" placeholder="您的账户名和登录名" @blur="checkReg(1)">
                    </div>
                    <div class="input-tip">
                        <span></span>
                    </div>
                    <div class="form-item">
                        <label>设 置 密 码</label>
                        <input autocomplete="off" type="password" v-model="userInfo.password" class="field" placeholder="建议使用两种或两种以上字符组合" >                      
                   </div>   
                   <div class="input-tip">
                        <span></span>
                    </div>               
                    <div class="form-item">
                        <label>电 话 号 码</label>
                        <input type="text"  class="field"  v-model="userInfo.phone" placeholder="请输入电话号码"  @blur="checkReg(2)">
                   </div>
                   <div class="input-tip">
                        <span></span>
                    </div>
                    <div class="form-item">
                        <label>电 子 邮 箱</label>
                        <input type="email"  class="field" v-model="userInfo.email" placeholder="请输入电子邮箱">
                   </div>
                   <div class="input-tip">
                        <span></span>
                    </div>
                    <div>
                        <button class="btn-register" @click="register">立即注册</button>
                    </div>
                </div>     
        </div>
    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    name: "Register",
    data(){
        return{
                userInfo:{
                    username:"",
                    password:"",
                    phone : "",
                    email:""
                },
                picFocusStatus:true
            }
    },
    methods:{
        register() {
            var userPattern = /^[a-zA-Z0-9_-]{4,16}$/;//4到16位（字母，数字，下划线，减号）
            ////密码强度正则，6到20位（字母，数字，下划线，减号）
            var pwdPattern = /^[a-zA-Z0-9_-]{6,20}$/;
            var telPattern =/^1[3456789]\d{9}$/;
            var ePattern =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (this.userInfo.username.trim() == "" || !userPattern.test(this.userInfo.username)) {
                this.$message.error('请输入正确的用户名 长度为4到16位');
                return;
            } 
             if (this.userInfo.password.trim() == "" || !pwdPattern.test(this.userInfo.password)) {
                this.$message.error('请输入正确的密码');
                return;
            } 
             if (this.userInfo.phone.trim() == "" || !telPattern.test(this.userInfo.phone)) {
                this.$message.error('请输入正确的电话号码');
                return;
            } 
             if (this.userInfo.email.trim() == "" || !ePattern.test(this.userInfo.email)) {
                this.$message.error('请输入正确的电子邮箱');
                return;
            } 
            this.$api.register(
                this.userInfo
            )
            .then(res =>{
                console.log(res.data);   
                if (res.data.msg == "OK" && res.data.status == 200) {
                    this.$confirm('注册成功', '注册成功', {
                        confirmButtonText: '确定',
                        type: 'success',
                        center: true
                        }).then(() => {
                            this.$router.push({
                                path:"/login"
                            }) 
                        });
                }             
            })
        },
        checkReg(flag){
             var userPattern = /^[a-zA-Z0-9_-]{4,16}$/;//4到16位（字母，数字，下划线，减号）
            var telPattern =/^1[3456789]\d{9}$/;
            let value = "";
            if(flag == 1){
                if (this.userInfo.username.trim() == "" || !userPattern.test(this.userInfo.username)) {
                    this.$message.error('请输入正确的用户名 长度为4到16位');
                    return;
                 } 
                value = this.userInfo.username;
            }else if(flag == 2){
                if (this.userInfo.phone.trim() == "" || !telPattern.test(this.userInfo.phone)) {
                    this.$message.error('请输入正确的电话号码');
                    return;
                } 
                value = this.userInfo.phone;
            }
            this.$api.checkRegister(
                value,flag
            )
            .then(res =>{
                console.log(res.data);
                if (res.data.status == 500) {
                    this.$message.error("数据已存在");
                }
            })
        }
    },
}
</script>
<style lang="less" scoped>
   .main {
        margin: 50px auto 186px;
        width: 400px;
        .form-item-account {
            z-index: 13;
        }
        .form-item {
            position: relative;
            border: solid 1px #ddd;
            width: 398px;
            height: 52px;
            z-index: 0;
            label {
                float: left;
                width: 87px;
                height: 50px;
                line-height: 50px;
                padding-left: 20px;
            }
            .field {
                border: 0 none;
                font-size: 14px;
                width: 220px;
                height: 19px;
                padding-bottom: 11px;
                padding-left: 20px;
                padding-top: 16px;
            }
        }
        .input-tip {
            color: #c5c5c5;
            height: 27px;
            font-size: 12px;
            padding-top: 5px;
        }
        .btn-register {
            width: 100%;
            height: 54px;
            line-height: 54px;
            text-align: center;
            color: #fff;
            background: #e2231a;
            border: 0;
            font-size: 16px;
            font-family: "Microsoft YaHei","Hiragino Sans GB";
            cursor: pointer;
        }
    }
</style>



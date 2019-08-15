var express=require('express');
var router=express.Router();
var Mock = require('mockjs');
var SearchData=require('./data/search.js')
var request = require('request');

router.get('/',(req,res)=>{
    res.send(Mock.mock({
        "data|7": [
            "@integer(100, 10000)"
        ]
    }))
})

/**
 * 登录接口
 */
router.post('/login',(req,res)=>{
    var username=req.body.username;
    var password=req.body.password;
    //判断用户名和密码
    if(username&&password){
        res.send({
            msg:'登录成功',
            status:200,
            user:{
                name:username,
                age:22
            },
            loginToken:'eddhhutdsijwby' 
            })
    }else{
        res.send({
            msg:'登陆失败',
            status:401
        })
    }
})

/**
 * 测试token接口
 */
router.get('/product',(req,res)=>{
    var loginToken =req.headers.authorization;
    if(loginToken==='eddhhutdsijwby'){
        res.send([
            {
                name:'huahua',
                age:20
            },
            {
                name:'iwen',
                age:24
            }
        ])
    }else{
        res.send({
            msg:'token验证失败'
        })
    }
})

/**
 * 搜索数据
 */

 router.get('/search',(req,res)=>{
     var value =req.query.value;
     console.log(value);
     for(var i=0;i<SearchData.data.length;i++){
         if(value===SearchData.data[i].value){
           res.send(SearchData.data[i]);
       }
     }
 })

module.exports=router;
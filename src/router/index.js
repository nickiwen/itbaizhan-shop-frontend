import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //首页
    {
      path:'/',
      name:'home',
      component:Home
    },
    // 登录页
    {
      path:'/login',
      name:'login',
      component:() => import('../pages/Login/Login.vue'),
    },
    // 注册页
    {
      path:'/register',
      name:'register',
      component:() => import('../pages/Register/Register')
    },
    // 搜索页
    {
      path:'/search/:content?',
      name:'Search',
      component:()=>import('../pages/Search/Search.vue'),
      props:true,
      // meta:{
      //   //需要登录
      //   isLogin:true
      // }
    },
    // 购物车加入成功页面
    {
      path:"/shopcartadd",
      name:"ShopCartAdd",
      component: () => import("../pages/ShopCar/ShopCarAdd")
    },
    // 购物车页
    {
      path:'/shopcar',
      name:'Shopcar',
      component:()=>import('../pages/ShopCar/ShopCar.vue'),
      // meta:{
      //   //需要登录
      //   isLogin:true
      // }
    },
    // 结算页面 
    {
      path:"/payment/:product?",
      name:"Payment",
      component:() => import("../pages/ShopCar/ShopPayment"),
      props:true
    },
    // 购买成功页面
    {
      path:"/shopsuccess/:order",
      name:"ShopSuccess",
      component:() => import("../pages/ShopCar/ShopSuccess"),
      props:true
    },
    // 详情页
    {
      path:'/detail/:id?',
      name:'Detail',
      component:()=>import('../pages/Details/Details.vue'),
      props:true
      // meta:{
      //   //需要登录
      //   isLogin:true
      // }
    }
  ]
})

/**
 * 路由权限
 * 路由守卫
 */

import router from './index';
import store from '../store';

router.beforeEach((to,from,next)=>{
    if(to.matched.some(item => item.meta.isLogin)){
        const loginToken=store.state.loginToken;
        if(loginToken){
            next()
        }else{
            next({
            path:'/login'
          })
        }
    }else{
        next()
    }
})


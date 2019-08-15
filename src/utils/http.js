import axios from 'axios';
import qs from 'querystring';
import store from '../store/index';
import router from '../router/index';


//回到登录页
const toLogin=function(){
  router.push('/login')
}

//创建实例
const instance=axios.create({
    timeout:3000 //timeout:3000,3秒后中断网络请求
});

// 错误信息整理
const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            console.log("信息校验失败");
            break;
        case 401:
            console.log("认证失败");
            break;
        case 403:
            console.log("token校验失败");
            toLogin();
            break;
        case 404:
            console.log("请求的资源不存在");
            break;
        default:
            console.log(other);
            break;
    }
}


//axios全局配置
instance.defaults.withCredentials = true;
instance.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

// 拦截器
//请求拦截
instance.interceptors.request.use(function (config) {
    
    if (config.method === "post") {
        config.data = qs.stringify(config.data);
    }
    //读取token
    const loginToken=store.state.loginToken;
    config.headers.Authorization=loginToken;
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use(
    
    res => {
        return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
    },
    error => {
        /**
         * error= {
         *  res:错误信息
         * }
         */
        const { response } = error;
        if (response) {
            errorHandle(response.status, response.data);
            return Promise.reject(response);
        } else {
            console.log("请求失败");
        }
    }
);

export default instance;
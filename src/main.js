import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import echarts from './plugins/echarts' 
import i18n from "./plugins/i18n"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/common.css'
import 'element-ui/lib/theme-chalk/index.css';
import '../node_modules/echarts/map/js/china.js'
import './plugins/element.js'
import './router/guard.js'
import './directives'
import './server-filter'
import './assets/css/common.css'
import './assets/css/iconfont.css'
import './assets/css/font.css'
import 'swiper/dist/css/swiper.css'

Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.use(echarts)
Vue.use(VueAwesomeSwiper)

//保持vuex和本地的同步
if(localStorage.getItem('loginToken')){
  store.dispatch('setTokenActions',localStorage.getItem('loginToken'))
  store.commit('setUserId',localStorage.getItem('userid'))
  store.dispatch('updateUsernameActions',localStorage.getItem('username'))
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

/**
 * 自定义指令
 */
import Vue from 'vue'
Vue.directive('focus',{
    inserted:function(el){
        el.focus()
    }
})
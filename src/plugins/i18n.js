import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const i18n = new VueI18n({
    // 默认语言的设置
    locale: localStorage.getItem("lang") || 'zh',
    messages: {
        'zh': require('@/assets/languages/zh.json'),
        'en': require('@/assets/languages/en.json')
    }
})
export default i18n
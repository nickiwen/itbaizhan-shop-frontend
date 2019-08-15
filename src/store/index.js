import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import myPlugin from './plugins'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const store= new Vuex.Store({
   // 开启严格模式
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
  //插件
  // plugins:[myPlugin,createLogger()]
})

/**
 * 热重载
 */

if (module.hot) {
  // 使 action 和 mutation、state和getters 成为可热重载模块
  module.hot.accept(["./state","./mutations","./actions","./getters"],() =>{
      // 获取更新后的模块
      // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
      const newState = require("./state").default
      const newMutations = require('./mutations').default
      const newActions = require("./actions").default
      const newGetters = require("./getters").default
      // 加载新模块
      store.hotUpdate({
          state:newState,
          mutations:newMutations,
          actions:newActions,
          getters:newGetters
      })
  })
}



export default store;

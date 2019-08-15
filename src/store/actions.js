import {SETTOKEN,ADDCOUNTER,REDUCECOUNTER,SETVALUE,MENUDATA,UPDATEUSERNAME} from './mutation-type'
export default {
    setTokenActions({commit},payload){
        commit(SETTOKEN,payload)
      },
    addCounterActions({commit}){
      commit(ADDCOUNTER)
    },
    reduceCounterActions({commit}){
      commit(REDUCECOUNTER)
    },
    setValueActions({commit},payload){
      commit(SETVALUE,payload)
    },
    updateUsernameActions({commit},payload){
      commit(UPDATEUSERNAME,payload)
    },
    changeMenuData({commit},payload){
      commit(MENUDATA,payload)
    }
}
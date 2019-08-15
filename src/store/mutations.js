import { SETTOKEN, ADDCOUNTER, REDUCECOUNTER, SETVALUE, MENUDATA, UPDATEUSERNAME } from './mutation-type'
export default {
  [SETTOKEN](state, payload) {
    state.loginToken = payload
  },
  // 购物车中的件数
  [ADDCOUNTER](state,num) {
    state.counter = num;
  },
  [REDUCECOUNTER](state) {
    state.counter--;
  },
  [SETVALUE](state, payload) {
    state.value = payload;
  },
  // //用户名
  [UPDATEUSERNAME](state, name) {
    state.username = name;
  },
  [MENUDATA](state, arr) {
    state.menuItemData = arr;
  },
  setSearchContent(state, content) {
    state.searchContent = content;
  },
  setCartCookie(state, cookies) {
    state.cartcookie = cookies;
  },
  removeCartCookie(state) {
    state.cartcookie = ""
  },
  setGoodsId(state,id){
    state.currentGoodsId = id;
  },
  setCartGoods(state,goods){
    state.cartGoods = goods;
  },
  setCartGoodsNum(state,num){
    
  },
  setUserId(state,id){
    state.userid = id;
  }

}
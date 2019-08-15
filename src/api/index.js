import axios from '../utils/http';
import base from './base';

const api={
    /**
     * 模拟分页数据
     */
    getPage(params){
        return axios.get(base.sxtBaseUrl+base.page,{params:params})
    },
    /**
     * 左侧菜单接口
     */
    getMenuItem(){
        return axios.get(base.baseUrl+base.menuItem);
    },
    /**
     * 搜索接口
     */
    getSearch(params){
        return axios.post(base.searchBaseUrl + base.search,params)
    },
    /**
     * 首页 焦点轮播图接口
     */
    selectFrontendContentByAD(){
        return axios.get(base.baseUrl + base.selectFrontendContentByAD)
    },
    /**
     * 注册 接口
     */
    register(params){
        return axios.post(base.registerBaseUrl + base.register,params)
    },
    /**
     * 注册验证
     */
    checkRegister(value,flag){
        return axios.get(base.registerBaseUrl+base.checkRegister+"/"+value+"/"+flag);
    },
    /*
     * 详情页 详情接口
     */
    getSelectItemInfo(params){
        return axios.post(base.baseUrl+base.selectItemInfo,params);
    },
    /**
     * 详情页 商品展示
     */
    getSelectItemDescByItemId(params){
        return axios.post(base.baseUrl+base.selectItemDescByItemId,params);
    },
    /**
     * 详情页 规格参数
     */
    getSelectTbItemParamItemByItemId(params){
        return axios.post(base.baseUrl+base.selectTbItemParamItemByItemId,params)
    },
    /**
     * 加入购物车
     * 
     */
    getAddItem(params){
        // return axios.post(base.shopcarBaseUrl+base.addItem,params);
        return axios.get(base.shopcarBaseUrl+base.addItem,{
            params:params
        });
    },
  
    /**
     * 登陆接口
     *  username
     *  password
     */
    getLogin(params){
        return axios.post(base.registerBaseUrl + base.login,params);
    },
    getLogOut(params){
        return axios.post(base.registerBaseUrl + base.logOut,params);
    },
    /**
     * 购物车列表
     *  
     */
    getShowCart(params){
        return axios.post(base.shopcarBaseUrl + base.showCart,params)
    },
    /**
     * 购物车数量变化
     *  {itemId}/{num}
     */
    getUpdateItemNum(params){
        return axios.post(base.shopcarBaseUrl + base.updateItemNum,params)
    },
    /**
     * 购物车删除接口
     */
    getDeleteItemFromCart(params){
        return axios.post(base.shopcarBaseUrl + base.deleteItemFromCart,params);
    },
    /**
     * 去结算接口
     */
    getItemList(params){
        return axios.post(base.shopcarBaseUrl + base.getItemList,params);
    },
    /**
     * 提交订单
     */
    getInsertOrder(params){
        return axios.post(base.payMentBaseUrl + base.insertOrder,params)
    }
}

export default api;
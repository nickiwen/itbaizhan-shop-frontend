const base = {
    baseUrl: '/api',
    sxtBaseUrl: '/sxt',
    shopcarBaseUrl: "/shopcar_api",
    searchBaseUrl: "/search_api",
    registerBaseUrl: "/register_api",
    payMentBaseUrl:"/payment_api",
    // 左侧菜单
    menuItem: "/itemCategory/selectItemCategoryAll",
    // 搜索接口
    search: "/search/list",
    // 首页 焦点轮播图接口
    selectFrontendContentByAD: "/content/selectFrontendContentByAD",
    // 注册接口
    register: '/sso/userRegister',
    // 注册验证
    checkRegister: "/sso/checkUserInfo",
    // 登陆接口
    login: "/sso/userLogin",
    // 退出登陆
    logOut:"/sso/logOut",
    // 商品详情页 详情接口
    selectItemInfo: "/item/selectItemInfo",
    // 商品详情页 商品介绍
    selectItemDescByItemId: "/item/selectItemDescByItemId",
    // 商品详情页 规格参数
    selectTbItemParamItemByItemId: "/item/selectTbItemParamItemByItemId",
    // 加入购物车
    addItem: "/cart/addItem/",
    // 购物车列表
    showCart:"/cart/showCart",
    // 购物车数量变化
    updateItemNum:"/cart/updateItemNum",
    // 购物车删除接口
    deleteItemFromCart:"/cart/deleteItemFromCart",
    // 去结算地址
    getItemList:"/cart/goSettlement",
    // 提交订单
    insertOrder:"/order/insertOrder"
}

export default base;

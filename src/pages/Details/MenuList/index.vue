<template>
  <div class="details-shop-header">
    <div class="details-shop-brand">
      <img src="../../../assets/img/details/b4904a4ce16d4010.png" alt />
      <div class="details-shop-name">
        <span class="details-shop-name-title">三宅一生(ISSEY MIYAKE)香氛京东自营官方旗舰店</span>
        <a href="javascript:void(0)" class="details-follow-me">关注我</a>
      </div>
    </div>
    <div class="details-shop-container">
      <div class="details-shop-wrap">
        <ul class="details-menu-list">
          <li class="details-menu">
            <a href class="details-main-link" style="font-weight: bold;">首页</a>
          </li>
          <li class="details-menu details-all-cate">
            <a href="#" class="details-main-link">
              全部分类
              <span class="details-arrow"></span>
            </a>
            <div class="details-sub-menu-wrap">
              <dl class="details-sub-pannel">
                <dt class="details-sub-title">
                  <a href class="details-sub-tit-link">礼盒</a>
                </dt>
                <dd class="details-sub-list">
                  <ul class="details-leaf-list">
                    <li class="details-leaf">
                      <a href class="details-leaf-link">EPD香水</a>
                    </li>
                    <li class="details-leaf">
                      <a href class="details-leaf-link">ETD香水</a>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl class="details-sub-pannel">
                <dt class="details-sub-title">
                  <a href class="details-sub-tit-link">男士香水</a>
                </dt>
                <dd class="details-sub-list">
                  <ul class="details-leaf-list">
                    <li class="details-leaf">
                      <a href class="details-leaf-link">EPD香水</a>
                    </li>
                  </ul>
                </dd>
              </dl>
              <div class="details-all-goods-wrap">
                <a href class="details-all-goods-link">查看所有商品</a>
              </div>
            </div>
          </li>
          <li class="details-menu">
            <a href="#" class="details-main-link">香水礼盒</a>
          </li>
          <li class="details-menu">
            <a href="#" class="details-main-link">女士香水</a>
          </li>
          <li class="details-menu">
            <a href="#" class="details-main-link">男士香水</a>
          </li>
          <li class="details-menu">
            <a href="#" class="details-main-link">正品保证</a>
          </li>
          <li class="details-menu">
            <a href="#" class="details-main-link">品牌故事</a>
          </li>
        </ul>
        <div class="details-s-form">
          <div class="details-form-body">
            <input type="text" class="details-form-search" />
            <input type="text" class="details-form-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuList"
};
</script>

<style scoped>
/* logo和品牌名称开始 */
.details-shop-header {
  width: 100%;
  height: 150px;
}
.details-shop-brand {
  position: relative;
  margin: 0 auto;
  width: 990px;
  height: 110px;
  line-height: 110px;
  overflow: hidden;
}
.details-shop-brand img {
  vertical-align: middle;
}

.details-shop-name {
  position: absolute;
  top: 15%;
  margin-top: -30px;
  height: 60px;
  left: 190px;
  vertical-align: top;
}
.details-shop-name-title {
  font-size: 18px;
  color: #333;
}
.details-follow-me {
  position: absolute;
  bottom: -40px;
  left: 0;
  display: inline-block;
  padding-left: 24px;
  width: 47px;
  height: 23px;
  line-height: 23px;
  color: #fff;
  font-size: 12px;
  background: url(../../../assets/img/details/下载.png) 0 -66px no-repeat;
}
.details-follow-me:hover {
  background: url(../../../assets/img/details/下载.png) 0 -34px no-repeat;
}
/* 购物选项栏开始 */
.details-shop-container {
  width: 100%;
  height: 40px;
  background-color: #000000;
}
.details-shop-wrap {
  font: 14px/1.5 "\5fae\8f6f\96c5\9ed1", Arial, sans-serif;
  position: relative;
  margin: 0 auto;
  height: 40px;
  font-size: 14px;
  color: #333;
  width: 1210px;
}
.details-menu-list {
  width: 100%;
  height: 40px;
}
.details-menu {
  float: left;
  line-height: 24px;
  height: 24px;
  padding: 8px 0;
}
.details-main-link {
  position: relative;
  display: block;
  color: #ffffff;
  padding: 0 15px;
}
.details-arrow {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  font-size: 0;
  line-height: 0;
  height: 0;
  width: 0;
  border-bottom: 0;
  border-left: 5px dashed transparent;
  border-right: 5px dashed transparent;
  border-top: 5px solid #666;
}
.details-main-link:hover {
  border-radius: 12px;
  background-color: #333;
}
/* 隐藏的全部分类下拉列表 */
.details-sub-menu-wrap {
  display: none;
  position: absolute;
  left: 0;
  top: 39px;
  right: 0;
  z-index: 99;
  padding: 20px 40px;
  border: 1px solid #bebab0;
  background-color: rgba(247, 242, 234, 0.9);
}

.details-all-cate:hover .details-sub-menu-wrap {
  display: block;
}

.details-sub-pannel {
  float: left;
  padding: 0;
  height: 146px;
}
.details-sub-title {
  margin-bottom: 13px;
  height: 54px;
  line-height: 54px;
  border-bottom: dashed 1px #c9c9c9;
  padding: 0 20px;
}
.details-sub-tit-link {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  line-height: 24px;
  display: inline-block;
  height: 24px;
  padding: 0 10px;
  margin-left: -10px;
  border-radius: 12px;
  min-width: 74px;
}
.details-sub-tit-link:hover {
  border: solid 1px #e4393c;
  color: #e4393c;
}
.details-sub-list {
  padding: 0 20px;
}
.details-leaf {
  font-size: 12px;
  height: 26px;
  line-height: 26px;
}
.details-leaf-link {
  color: #666666;
}
.details-leaf-link:hover {
  color: #c81623;
}
.details-all-goods-wrap {
  clear: both;
  padding-left: 20px;
}
.details-all-goods-link {
  font-weight: bold;
  color: #333;
  padding-left: 20px;
  border: solid 1px #666;
  border-radius: 12px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
}
/* 右侧的选择框开始 */
.details-s-form {
  position: absolute;
  top: 8px;
  right: 0;
}
.details-form-search {
  padding: 0 0 0 10px;
  width: 130px;
  line-height: 22px;
  height: 22px;
  background-color: #ffffff;
  color: #c9c9c9;
  vertical-align: top;
  outline: none;
  border: solid 1px #e1e1e1;
  border-top-left-radius: 11px;
  border-bottom-left-radius: 11px;
}
.details-form-icon {
  margin-left: -5px;
  padding: 0 10px;
  border: 0;
  height: 24px;
  width: 46px;
  cursor: pointer;
  border-top-right-radius: 11px;
  border-bottom-right-radius: 11px;
  background: #333 url(../../../assets/img/details/583543d4Nc7e0c1a4.png) no-repeat
    center;
}
</style>


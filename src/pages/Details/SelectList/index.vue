<template>
  <div class="details-crumb">
    <div class="details-crumb-wrap">
      <div class="details-left details-fl">
        <div class="details-item">
          <a href>美妆护肤</a>
        </div>
        <div class="details-item details-sep">></div>
        <div class="details-item">
          <a href>香水彩妆</a>
        </div>
        <div class="details-item details-sep">></div>
        <div class="details-item">
          <a href>香水</a>
        </div>
        <div class="details-item details-sep">></div>
        <div class="details-item">
          <a href>ISSEY MIYAKE</a>
        </div>
        <div class="details-item details-sep">></div>
        <div class="details-item">
          <span>ISSEY MIYAKE香水</span>
        </div>
      </div>
      <div class="details-right details-fr">
        <div class="details-right-name">
          <span class="details-u-jd">自营</span>
        </div>
        <div class="details-right-hover details-fr">
          <div class="details-right-item">
            <div class="details-right-item-name">
              <a href>三宅一生(ISSEY MIYAKE)香氛京东自营官方旗舰店</a>
            </div>
          </div>
          <div class="details-right-item">
            <div class="details-customer-service">
              <i class="details-right-icon"></i>
              <a href>联系客服</a>
            </div>
          </div>
          <div class="details-right-item">
            <div class="details-customer-service">
              <i class="details-right-icon2"></i>
              <a href>关注店铺</a>
            </div>
          </div>
          <div class="details-right-hidden">
            <div class="details-right-hidden-warp">
              <div class="details-right-hidden-text">
                <div>
                  <span>客服</span>
                </div>
                <div class="details-customer-service">
                  <i class="details-right-icon"></i>
                  <a href>联系客服</a>
                </div>
                <div class="details-right-hidden-img">
                  <img src="../../../assets/img/details/wechat.png" alt />
                  <span>手机下单</span>
                </div>
              </div>
            </div>
            <div class="details-hidden-btn">
              <div class="details-hidden-btn-warp">
                <div class="details-customer-service details-fl">
                  <i class="details-right-hidden-icon"></i>
                  <a href>进店逛逛</a>
                  <span class="details-hidden-line">|</span>
                </div>
                <div class="details-customer-service details-fr">
                  <i class="details-right-icon2"></i>
                  <a href>关注店铺</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectList"
};
</script>

<style scoped>
.details-crumb {
  width: 100%;
  height: 40px;
  background: #f2f2f2;
  clear: both;
}
.details-crumb-wrap {
  width: 1210px;
  margin: 0 auto;
  position: relative;
  z-index: 4;
}
.details-left {
  padding: 13px 0 9px;
  text-align: center;
}
.details-fl {
  float: left;
}
.details-item {
  float: left;
  margin-top: -7px;
}
.details-item a,
span {
  color: #666;
  font-size: 12px;
}
.details-item a:hover {
  color: #f30213;
}
.details-sep {
  font-family: simsun;
  padding: 3px 10px;
}
/* 右边样式开始 */
.details-right {
  padding: 13px 0 0;
  /* position: relative; */
  /* z-index: 4; */
  margin-top: -6px;
}
.details-fr {
  float: right;
}
.details-right-name {
  float: left;
  margin-right: 10px;
}
.details-u-jd {
  display: inline-block;
  height: 14px;
  padding: 1px;
  line-height: 14px;
  font-size: 12px;
  font-family: arial, simsun;
  color: #fff;
  background: #e4393c;
  margin-left: 6px;
  cursor: pointer;
}
.details-right-item {
  float: left;
}
.details-right-item-name a {
  margin-right: 10px;
  font-size: 12px;
  color: #666;
  display: inline-block;
  margin-top: 5px;
}
.details-customer-service {
  float: left;
  margin-right: 10px;
  white-space: nowrap;
}
.details-right-icon,
.details-right-icon2 {
  display: inline-block;
  width: 16px;
  vertical-align: text-top;
  height: 16px;
  margin-top: 5px;
  margin-right: 3px;
}
.details-right-icon {
  background-image: url(../../../assets/img/details/__sprite.png);
  /* background-position: -34px -16px; */
  background-position: -34px -16px;
}
.details-customer-service a {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}

.details-right-icon2 {
  background-position: -34px 0;
  background-image: url(../../../assets/img/details/__sprite.png);
}

.details-right a:hover {
  color: #e4393c;
}
/* 隐藏的div */
.details-right-hidden {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 40px;
  width: 200px;
  height: 260px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.details-right-hidden-warp {
  width: 90%;
  height: 220px;
  margin: 0 auto;
}
.details-right-hidden-img {
  overflow: hidden;
  text-align: center;
  width: 120px;
  margin: 40px auto;
  overflow: hidden;
}
.details-right-hidden-img img {
  width: 100%;
  border: 1px solid #ccc;
}
.details-hidden-btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #f3f3f3;
  text-align: center;
}
.details-hidden-btn-warp {
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
.details-right-hidden-icon {
  background-position: -17px -17px;
  background-image: url(../../../assets/img/details/__sprite.png);
  display: inline-block;
  width: 16px;
  vertical-align: text-top;
  height: 16px;
  margin-top: 5px;
  margin-right: 3px;
}
.details-hidden-line {
  display: inline-block;
  margin-left: 16px;
  margin-right: 6.5px;
}
.details-right-hover:hover .details-right-hidden {
  display: block;
}
</style>




<template>
  <div>
    <div class="details-rec-summary details-rec-summary-first">
      <div class="details-rec-summary-price-wrap">
        <!-- 京东价 -->
        <div class="details-rec-summary-price">
          <div class="details-rec-dt dt">京 东 价</div>
          <div class="details-rec-dd">
            <span class="details-rec-p-price">
              <span>￥</span>
              <span class="details-rec-price">{{ getPrice }}</span>
            </span>
            <a href class="details-rec-notice">降价通知</a>
          </div>
          <div class="details-rec-summary-info">
            <div class="details-rec-summary-item">
              <p class="details-rec-summary-comment">累计评价</p>
              <a href class="details-rec-summary-count">1000+</a>
            </div>
          </div>
          <!-- 促销 -->
          <div class="details-rec-li">
            <div class="details-rec-promotion">
              <div class="details-rec-summary-promotion" id="details-rec-summary-promotion">
                <div class="details-rec-dt">促　　销</div>
                <div class="details-rec-dd details-rec-prom-wrap details-rec-promotions-wrap">
                  <div class="details-rec-p-promotions">
                    <div class="details-rec-prom-gift">
                      <div class="details-rec-gift">
                        <div class="gift-box">
                          <span class="details-rec-gift-label">
                            <em class="details-rec-gift-tit">赠品</em>
                          </span>
                        </div>
                        <div class="details-rec-gift-list">
                          <div class="details-rec-gift-item">
                            <a href>
                              <img
                                src="../../../../../assets/img/details/6aeb2d1c0736ff1b.jpg"
                                alt
                                class="gift-img"
                              />
                            </a>
                            <span class="gift-number">× 1</span>
                          </div>
                          <div class="details-rec-gift-item">
                            <a href>
                              <img
                                src="../../../../../assets/img/details/6aeb2d1c0736ff1b.jpg"
                                alt
                                class="gift-img"
                              />
                            </a>
                            <span class="gift-number">× 1</span>
                          </div>
                          <div class="details-rec-gift-item">
                            <a href>
                              <img
                                src="../../../../../assets/img/details/6aeb2d1c0736ff1b.jpg"
                                alt
                                class="gift-img"
                              />
                            </a>
                            <span class="gift-number">× 1</span>
                            <span class="gift-text">(赠完即止)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="details-rec-p-promotions details-rec-p">
                    <div class="details-rec-prom-gift">
                      <div class="details-rec-gift">
                        <div class="gift-box gift-box-red">
                          <div>
                            <span class="details-rec-red">满减</span>
                            <span class="details-rec-red">满减</span>
                          </div>
                        </div>
                        <div class="details-rec-gift-list"></div>
                      </div>
                    </div>
                    <div class="details-rec-load">
                      展开促销
                      <a href class="details-rec-load-link">
                        <i class="details-rec-link"></i>
                      </a>
                    </div>                         
                  </div>
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
  computed: {
    getPrice(){
      let currentPrice = this.price / 100;
      return currentPrice.toFixed(2)
    }
  },
  props:["price"]
};
</script>

<style scoped>
.details-rec-summary {
  position: relative;
  padding-bottom: 5px;
}
.details-rec-summary-price {
  position: relative;
  margin-bottom: 5px;
  /* line-height: 22px; */
}
.details-rec-summary-price-wrap {
  padding: 10px 0 0;
  background: #f3f3f3;
  height: 107px;
}
.details-rec-dt {
  float: left;
  padding-left: 10px;
  font-family: simsun;
  color: #999;
}
.dt {
  margin-top: 10px;
}
.details-rec-dd {
  margin-left: 70px;
}
.details-rec-p-price {
  color: #e4393c;
  font-family: "microsoft yahei";
  margin-right: 10px;
}
.details-rec-p-price span {
  font-size: 16px;
}
.details-rec-p-price .details-rec-price {
  font-size: 22px;
}
.details-rec-notice {
  color: #005aa0;
  vertical-align: 2px;
  font-size: 12px;
}
.details-rec-summary-info {
  position: absolute;
  z-index: 1;
  right: 10px;
  top: 8px;
  color: #999;
}
.details-rec-summary-item {
  border-left: solid 1px #e6e6e6;
  text-align: center;
  padding: 0 10px;
  line-height: 15px;
  margin-top: -6px;
}
.details-rec-summary-comment {
  color: #999;
  font-size: 12px;
}
.details-rec-summary-count {
  font: 14px verdana;
  color: #005ea7;
}
.details-rec-li {
  margin-bottom: 3px;
  line-height: 32px;
  display: block;
  padding-bottom: 2px;
  position: relative;
}
.li:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
/* 促销样式开始 */
.details-rec-promotion {
  /* position: relative; */
  z-index: 4;
  margin-top: 12px;
}
#details-rec-summary-promotion {
  background: url(../../../../../assets/img/details/price-bg.png) 0 -12px repeat-x
    #efefef;
  padding-bottom: 5px;
  height: 65px;
}
.details-rec-promotions-wrap {
  height: 60px;
  position: relative;
  overflow: hidden;
}
.details-rec-p-promotions {
  position: relative;
  height: 30px;
  line-height: 30px;
  padding-right: 90px;
  overflow: hidden;
}
.details-rec-gift {
  padding-left: 5px;
}
.gift-box {
  width: 50px;
  height: 30px;
  float: left;
}
.details-rec-gift-label {
  width: 40px;
}
.details-rec-gift-tit {
  color: #df3033;
  background: 0 0;
  border: 1px solid #df3033;
  padding: 2px 3px;
  margin-right: 5px;
  display: inline-block;
  line-height: 16px;
  font-size: 12px;
}
.details-rec-gift-list {
  float: left;
  height: 30px;
}
.details-rec-gift-item {
  padding: 2px 5px;
  float: left;
  height: 30px;
  white-space: nowrap;
}
.gift-img {
  width: 25px;
  height: 25px;
}
.gift-number {
  display: inline-block;
  font-size: 12px;
  font-family: arial;
  color: #e4393c;
  position: relative;
  top: -5px;
  left: 2px;
}
.gift-text {
  display: inline-block;
  font-size: 12px;
  font-family: arial;
  color: #999;
  position: relative;
  top: -5px;
  left: 12px;
}
.gift-box-red {
  width: 80px;
}
.details-rec-red {
  color: #df3033;
  border: 1px solid #df3033;
  padding: 2px 3px;
  font-size: 12px;
  margin-right: 5px;
}
.details-rec-p {
  padding-right: 0;
}
.details-rec-load {
  font-size: 12px;
  color: #999;
  position: relative;
  left: 360px;
}
.details-rec-link {
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
  width: 13px;
  height: 7px;
  background-image: url(../../../../../assets/img/details/__sprite2.png);
  background-position: -27px -20px;
}
/*  */

</style>



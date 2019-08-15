<template>
    <div>
            <div class="details-rec-stock">
        <div class="details-rec-dt dt">配 送 至</div>

        <div class="details-rec-stock-address">
          <div class="details-rec-area-wrap">
            <div class="details-rec-text-wrap">
              <div class="details-rec-add-text">江苏徐州市铜山区伊庄镇</div>
              <b></b>
            </div>
          </div>
        </div>
        <div class="details-rec-store-prompt">
          <strong>有货</strong>
        </div>
        <div class="details-rec-promise-support fl">
          <div class="details-rec-support">支持</div>
          <div class="details-rec-support-list">
            <a href>次日达</a>
            <a href>自提</a>
            <a href>闪电退款</a>
            <a href>99元免基础运费(10kg内)</a>
          </div>
        </div>
      </div>
      <div class="details-rec-cls">
        <div class="details-rec-summary-service">
          由
          <span>京东</span>
          发货, 并提供售后服务. 16:00前下单，预计
          <b>明天(07月16日)</b>
          送达
        </div>
      </div>
      <!-- 重量 -->
      <div class="details-rec-weight">
        <div class="details-rec-dt">重　　量</div>
        <div class="details-rec-kg">0.16kg</div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.details-rec-stock {
  overflow: hidden;
  width: 590px;
  height: 48px;
}
.details-rec-stock-address {
  float: left;
  margin-top: 5px;
  margin-left: 5px;
}
.details-rec-area-wrap {
  position: relative;
  z-index: 3;
  height: 26px;
  margin-right: 6px;
}
.details-rec-text-wrap {
  float: left;
  position: relative;
  top: 0;
  height: 23px;
  background: #fff;
  border: 1px solid #cecbce;
  padding: 0 24px 0 4px;
  line-height: 23px;
  overflow: hidden;
}
.details-rec-add-text {
  font-size: 12px;
  color: #666;
}
.details-rec-text-wrap b {
  display: block;
  position: absolute;
  top: 3px;
  right: 4px;
  width: 17px;
  height: 17px;
  background: url(../../../../../assets/img/details/59088392N8b6279bb.png)
    no-repeat 3px 5px;
  overflow: hidden;
}

.details-rec-store-prompt {
  margin-top: 10px;
  margin-right: 10px;
  color: #999;
  height: 24px;
  float: left;
}
.details-rec-store-prompt {
  margin-right: 5px;
  /* float: left; */
  font-size: 12px;
}

.details-rec-promise-support {
  height: 24px;
  position: relative;
  left: 70px;
  overflow: hidden;
}
.details-rec-support {
  margin-right: 5px;
  color: #666;
  font-size: 12px;
  float: left;
}
.details-rec-support-list {
  position: relative;
  top: -2px;
  height: 20px;
  overflow: hidden;
  margin-left: 28px;
}
.details-rec-support-list a {
  color: #646fb0;
  float: left;
  overflow: hidden;
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 5px;
  padding: 0 10px;
  border-right: 1px solid #eaeaea;
  white-space: nowrap;
}
.details-rec-cls {
  clear: both;
}
.details-rec-weight {
  margin-bottom: 3px;
  line-height: 32px;
  display: block;
}
.details-rec-summary-service {
  position: relative;
  top: 5px;
  left: 70px;
  font-size: 12px;
  color: #999;
  margin-bottom: 3px;
  line-height: 32px;
}
.details-rec-summary-service span {
  color: #e4393c;
}

.details-rec-kg {
  /* position: relative;
  top: 9px; */
  margin-left: 70px;
  font-size: 12px;
  color: #666;
}

.details-rec-summary-line {
  overflow: hidden;
  height: 0;
  overflow: hidden;
  border-bottom: 1px dotted #dfdfdf;
  margin-bottom: 15px;
}
</style>



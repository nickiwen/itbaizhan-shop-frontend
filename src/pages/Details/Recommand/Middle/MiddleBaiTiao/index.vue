<template>
  <div>
    <div class="details-rec-choose-baitiao">
      <div class="details-rec-dt">白条分期</div>
      <div class="details-rec-dd dd">
        <div class="details-rec-baitiao-list">
          <div class="details-rec-type-item item">
            <a href>不分期</a>
            <div class="baitiao-tips hide">
              <ul>
                <li>无服务</li>
              </ul>
            </div>
          </div>
          <div class="details-rec-type-item item">
            <a href>不分期</a>
            <div class="baitiao-tips hide">
              <ul>
                <li>无服务</li>
              </ul>
            </div>
          </div>
          <div class="details-rec-type-item item">
            <a href>含服务费：费率0.5%起，￥2.4起×3期</a>
            <div class="baitiao-tips hide">
              <ul>
                <li>含服务费：费率0.5%起，￥2.4起×3期</li>
              </ul>
            </div>
          </div>
          <div class="details-rec-type-item item">
            <a href>不分期</a>
            <div class="baitiao-tips hide">
              <ul>
                <li>无服务</li>
              </ul>
            </div>
          </div>
          <div class="details-rec-type-item item">
            <a href>不分期</a>
            <div class="baitiao-tips hide">
              <ul>
                <li>无服务</li>
              </ul>
            </div>
          </div>
          <div class="details-bt-info-tips">
            <a href="javascript:void(0)" class="details-bt-question"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.details-rec-choose-baitiao {
  margin-bottom: 3px;
  line-height: 32px;
  display: block;
  width: 590px;
  height: 77px;
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
.details-rec-choose-baitiao {
  margin-bottom: 3px;
  line-height: 32px;
  display: block;
  height: 77px;
}
.details-rec-baitiao-list {
  float: left;
}
.details-rec-type-item a,
.baitiao-tips {
  color: #666;
  font-size: 12px;
}
.details-rec-type-item a {
  border: 1px solid #ccc;
  padding: 0 13px;
  display: block;
  white-space: nowrap;
}
.baitiao-tips {
  position: absolute;
  z-index: 6;
  top: 32px;
  left: 0;
  width: 250px;
  padding: 5px 10px;
  background: #fefff7;
  border: 1px solid #ccc;
  color: #666;
}
.hide {
  display: none;
}
.baitiao-tips ul {
  padding-bottom: 3px;
}
.baitiao-tips li {
  margin-top: 5px;
  line-height: 18px;
}
.details-rec-type-item:hover .hide {
  display: block;
}
.details-bt-info-tips {
  float: left;
  height: 39px;
}
.details-bt-info-tips > .details-bt-question {
  background-image: url(../../../../../assets/img/details/question.png);
  width: 16px;
  height: 16px;
  overflow: hidden;
  line-height: 1000px;
  margin-top: 8px;
  margin-right: 5px;
  display: inline-block;
}
.item {
  float: left;
  color: #666;
  background-color: #fff;
  margin-right: 7px;
  margin-bottom: 4px;
}
.details-rec-type-item {
  float: left;
  position: relative;
}
</style>



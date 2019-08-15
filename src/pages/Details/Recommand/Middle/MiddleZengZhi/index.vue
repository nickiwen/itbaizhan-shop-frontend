<template>
  <div>
     <div class="details-rec-choose-service">
    <div class="details-rec-dt dt">增值保障</div>
    <div class="details-rec-dd dd">
      <div class="details-rec-service-type">
        <div class="details-rec-type-item item">
          <div class="details-rec-item-change">
            <img
              src="../../../../../assets/img/details/5992a59bNd253524f.png"
              alt
              class="details-rec-change-icon"
            />
            <span class="details-rec-change-name">意外换新</span>
            <span class="details-rec-change-price">￥16.9</span>
            <i class="details-rec-change-arrow"></i>
          </div>
          <div class="details-rec-item-change">
            <img
              src="../../../../../assets/img/details/5992a59bNd253524f.png"
              alt
              class="details-rec-change-icon"
            />
            <span class="details-rec-change-name">意外换新</span>
            <span class="details-rec-change-price">￥16.9</span>
            <i class="details-rec-change-arrow"></i>
          </div>
        </div>
      </div>
    </div>
     </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.details-rec-choose-service {
  overflow: hidden;
  margin-bottom: 7px;
  line-height: 18px;
  display: block;
  width: 593px;
}
.details-rec-service-type {
  position: relative;
}
.details-rec-type-item {
  float: left;
  position: relative;
}
.item {
  float: left;
  color: #666;
  background-color: #fff;
  margin-right: 7px;
  margin-bottom: 4px;
}
.details-rec-item-change {
  padding: 4px 5px 4px 6px;
  margin: 5px 7px 2px 0;
  border: 1px solid #ccc;
  line-height: 20px;
  position: relative;
  font-size: 0;
  cursor: pointer;
  float: left;
}
.details-rec-change-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  display: inline-block;
  position: relative;
  top: 6px;
}
.details-rec-change-name {
  height: 20px;
  overflow: hidden;
  display: inline-block;
  font-size: 12px;
  margin-right: 4px;
  vertical-align: middle;
  max-width: 60px;
}
.details-rec-change-price {
  margin-right: 5px;
  vertical-align: middle;
  font: 12px/150% Arial, Verdana, "\5b8b\4f53";
}
.details-rec-change-arrow {
  width: 15px;
  height: 10px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 3px;
  line-height: 32px;
  background: url(../../../../../assets/img/details/service-icon.png) -2px -1px;
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
</style>




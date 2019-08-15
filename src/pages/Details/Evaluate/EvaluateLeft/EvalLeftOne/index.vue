<template>
  <div class="details-eval-m-aside">
    <div class="details-eval-popbox-inner">
      <div class="details-eval-mt">
        <a href>
          <h3>三宅一生(ISSEY MIYAKE)香氛京东自营官方旗舰店</h3>
        </a>
      </div>
      <div class="details-eval-im-wrap clearfix">
        <a href class="details-eval-popbox-im">
          <div class="details-eval-popbox-im">
            <i class="details-eval-sprite"></i>
          </div>
        </a>
      </div>
    </div>
    <div class="details-eval-mc">
      <div class="details-eval-score-summary">
        <div class="details-eval-btn">
          <a href class="details-eval-btn-def">
            <i class="details-eval-sprite-enter"></i>
            <span>进店逛逛</span>
          </a>
          <a href class="details-eval-btn-def eval-follow-shop">
            <i class="details-eval-sprite-follow"></i>
            <span>关注店铺</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.details-eval-box {
  width: 1210px;
  margin: 0 auto;
  margin-top: 50px;
  color: #666;
  font-size: 12px;
}
.details-eval-aside {
  float: left;
  width: 210px;
  height: 1291px;
  margin-bottom: 20px;
}
.details-eval-m-aside {
  margin-bottom: 15px;
}

.details-eval-mt {
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #eee;
  height: 18px;
}
.details-eval-mt h3 {
  float: left;
  max-width: 150px;
  height: 18px;
  overflow: hidden;
}
.details-eval-mt h3:hover{
  color: #e4393c
}
.details-eval-im-wrap {
  width: 16px;
  height: 18px;
  margin-left: 5px;
  float: left;
}
.details-eval-popbox-im {
  float: left;
}
.details-eval-sprite {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(../../../../../assets/img/details/__sprite1.png);
  background-position: 0 -34px;
  vertical-align: text-top;
  margin-left: 160px;
  margin-top: -25px;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.details-eval-mc {
  padding: 0 10px 0;
  border: 1px solid #eee;
  border-top: none;
  overflow: visible;
  background-color: #fff;
}
.details-eval-score-summary .details-eval-btn {
  padding: 10px 0;
  font-size: 0;
  text-align: center;
}
.details-eval-btn-def {
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  color: #666;
  width: 88px;
  height: 34px;
  line-height: 34px;
  margin-right: 8px;
  margin-left: -90px;
  /* margin-top: 10px; */
  font-size: 12px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
}
.details-eval-sprite-enter {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(../../../../../assets/img/details/__sprite.png);
  background-position: -17px -17px;
}
.eval-follow-shop {
  margin-right: 10px;
  position: relative;
  right: -90px;
}
.details-eval-sprite-follow {
  width: 16px;
  height: 16px;
  background-image: url(../../../../../assets/img/details/__sprite.png);
 
   background-position: -34px 0;
  display: inline-block;
  vertical-align: -2px;
}
</style>



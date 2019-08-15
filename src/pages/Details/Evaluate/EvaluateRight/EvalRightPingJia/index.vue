<template>
  <div>
    <div class="details-eval-m-content">
      <div class="details-eval-mt">
        <h3>商品评价</h3>
      </div>
      <div class="details-eval-mc">
        <div class="comment-info">
          <div class="comment-percent">
            <strong class="percent-tit">好评度</strong>
            <div class="percent-con">
              96
              <span>%</span>
            </div>
          </div>
          <div class="percent-info">
            <div class="tag-list tag-available">
              <span class="tag-1">透明磨砂(1)</span>
            </div>
          </div>
        </div>
        <div class="J-comments-list comments-list ETab">
          <div class="tab-main small">
            <ul class="filter-list">
              <li class="current">
                <a href>全部评价</a>
                <em>(1000+)</em>
              </li>
              <li>
                <a href>晒图</a>
                <em>(43)</em>
              </li>
              <li>
                <a href>视频晒单</a>
                <em>(1)</em>
              </li>
              <li>
                <a href>好评</a>
                <em>(300+)</em>
              </li>
              <li>
                <a href>中评</a>
                <em>(300+)</em>
              </li>
              <li>
                <a href>差评</a>
                <em>(300+)</em>
              </li>
              <li>
                <span>
                  <input type="checkbox" name id="comm-curr-sku" />
                  <label for="comm-curr-sku">只看当前商品评价</label>
                </span>
              </li>
            </ul>
            <div class="details-eval-extra">
              <div class="sort-select J-sort-select">
                <div class="current">
                  <span class="J-current-sortType">推荐排序</span>
                  <i></i>
                </div>
                <div class="others">
                  <div class="curr">
                    <span class="J-current-sortType">推荐排序</span>
                    <i></i>
                  </div>
                  <ul>
                    <li class="J-sortType-item">推荐排序</li>
                    <li class="J-sortType-item">时间排序</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <PingJia/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PingJia from './PingJia'
export default {
  components:{
    PingJia
  }
};
</script>

<style scoped>
.details-eval-m-content {
  margin-bottom: 15px;
  overflow: hidden;
}
.details-eval-mt {
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #eee;
  height: 18px;
}
.comment-info {
  overflow: hidden;
  zoom: 1;
  padding: 25px 0;
}
.comment-info .comment-percent {
  width: 90px;
  padding: 15px 0 0 40px;
  float: left;
}
.comment-info .percent-tit {
  font-size: 12px;
  color: #666;
  font-weight: 400;
}
.comment-info .percent-con {
  line-height: 110%;
  font-size: 45px;
  color: #e4393c;
  font-family: arial;
}
.comment-info .percent-con span {
  font-size: 23px;
  display: inline-block;
  margin-left: -13px;
}
.comment-info .percent-info {
  margin-left: 90px;
}
.comment-info .tag-list {
  padding-left: 20px;
}
.comment-info .percent-info .tag-list {
  height: auto;
  overflow: visible;
}
.tag-available span.tag-1 {
  color: #999;
  border-color: #e0e0e0;
}
.tag-list span {
  display: inline-block;
  line-height: 20px;
  padding: 0 9px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.comments-list {
  min-height: 93px;
}
.ETab div.small {
  border: 1px solid #f5f5f5;
  background-color: #fafafa;
  padding-left: 10px;
  line-height: 32px;
  height: 32px;
}
.ETab .tab-main {
  position: relative;
  display: block;
}
.ETab .tab-main ul {
  margin-top: -1px;
}
.ETab li {
  float: left;
  padding: 5px 10px;
}
.ETab li.current a {
  background: #fafafa;
  color: #e4393c;
}
.details-eval-extra {
  position: absolute;
  top: 0;
  right: 0;
}
.sort-select {
  position: relative;
  white-space: nowrap;
  line-height: 30px;
  margin-right: 10px;
}
.sort-select .current {
  margin-right: 10px;
  padding: 0 10px;
}
.sort-select .current span {
  display: inline-block;
  height: 30px;
  vertical-align: top;
}
.sort-select .current i {
  display: inline-block;
  width: 16px;
  height: 30px;
  background: url(../../../../../assets/img/details/commentsListIcons1.png) 1px -19px
    no-repeat;
  vertical-align: top;
}
.sort-select .others {
  position: absolute;
  top: -1px;
  right: 9px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 2px 0 #888;
  display: none;
}
.sort-select:hover .others {
  display: block;
}
.others .curr {
  padding: 0 10px;
}
.others .curr span {
  display: inline-block;
  height: 30px;
  vertical-align: top;
}
.sort-select .others .curr i {
  display: inline-block;
  width: 16px;
  height: 30px;
  background: url(../../../../../assets/img/details/commentsListIcons1.png) 1px -42px
    no-repeat;
  vertical-align: top;
}
.sort-select .others ul {
  margin-top: 0;
}
.sort-select .others ul li {
  cursor: pointer;
  padding: 0 20px 0 10px;
  display: block;
}

</style>


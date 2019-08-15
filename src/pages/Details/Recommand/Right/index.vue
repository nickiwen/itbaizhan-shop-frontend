<template>
  <div>
    <div class="details-rec-track">
      <div class="details-rec-extra">
        <div class="details-rec-extra-title">
          <h3>看了又看</h3>
          <span></span>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="details-rec-track-con">
        <ul class="details-rec-track-ul">
          <li>
            <a href>
              <img src="../../../../assets/img/details/afed83eae848c355.jpg" alt />
              <div>三宅一生（ISSEY MIYAKE）一生之水 凝净 女士淡香水 30ml（EDT香水 麝香水香花香 进口）</div>
              <p class="J-p-100001840257">￥480.00</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../../../../assets/img/details/afed83eae848c355.jpg" alt />
              <div>三宅一生（ISSEY MIYAKE）一生之水 凝净 女士淡香水 30ml（EDT香水 麝香水香花香 进口）</div>
              <p class="J-p-100001840257">￥460.00</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../../../../assets/img/details/afed83eae848c355.jpg" alt />
              <div>三宅一生（ISSEY MIYAKE）一生之水 凝净 女士淡香水 30ml（EDT香水 麝香水香花香 进口）</div>
              <p class="J-p-100001840257">￥420.00</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../../../../assets/img/details/afed83eae848c355.jpg" alt />
              <div>三宅一生（ISSEY MIYAKE）一生之水 凝净 女士淡香水 30ml（EDT香水 麝香水香花香 进口）</div>
              <p class="J-p-100001840257">￥400.00</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="details-rec-track-more">
        <a href="void:0" class="track-more-prev" @click="totop">上翻</a>
        <a href="void:0" class="track-more-next" @click="todown">下翻</a>
      </div>
    </div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      height: 0,
      down: 0
    };
  },
  methods: {
    totop() {
      var top = document.querySelectorAll(".details-rec-track-ul li")[0];
      var ul = document.getElementsByClassName("details-rec-track-ul")[0];
      var ulheight = ul.offsetHeight;
      var liheigth = top.offsetHeight;
      this.height = this.height + liheigth;
      ul.style.marginTop = -this.height + "px";
      // 获取外层div的高
      var box = document.getElementsByClassName("details-rec-track-con")[0];
      if (this.height > box.offsetHeight) {
        ul.style.marginTop = 0 + "px";
      }
    },
    todown() {
      var top = document.querySelectorAll(".details-rec-track-ul li")[0];
      var ul = document.getElementsByClassName("details-rec-track-ul")[0];
      var ulheight = ul.offsetHeight;
      var liheigth = top.offsetHeight;
      this.down = this.down + liheigth;
      ul.style.marginTop = this.down + "px";
      // 获取外层div的高
      var box = document.getElementsByClassName("details-rec-track-con")[0];
      if (this.down > box.offsetHeight) {
        ul.style.marginTop = 0 + "px";
      }
    }
  }
};
</script>

<style>
.details-rec-track {
  width: 210px;
  position: static;
  float: right;
  right: auto;
}
.details-rec-extra {
  display: block;
  right: auto;
  left: auto;
  box-shadow: none;
}
.details-rec-extra-title {
  position: relative;
  line-height: 50px;
  font-size: 12px;
  color: #666;
  font-weight: 400;
  text-align: center;
}
.details-rec-extra-title h3 {
  position: relative;
  z-index: 2;
  display: inline-block;
  background: #fff;
  padding: 0 25px;
}
.details-rec-extra-title span {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 25px;
  height: 1px;
  background: #f2f2f2;
}
/* 轮播图 */
.details-rec-track-con {
  position: relative;
  width: 150px;
  height: 564px;
  overflow: hidden;
}
.details-rec-track-ul {
  position: absolute;
  width: 150px;
  height: 1504px;
  top: 0px;
  left: 0px;
  font-size: 12px;
}
.details-rec-track-ul li {
  position: relative;
  padding: 10px 0;
  float: left;
}
.details-rec-track-ul a {
  position: relative;
  display: inline-block;
}
.details-rec-track-ul img {
  width: 150px;
  border: 0;
  vertical-align: middle;
}
.details-rec-track-ul div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  left: 0;
  right: 0;
  top: 126px;
  line-height: 12px;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px;
}
.details-rec-track-ul div:hover {
  color: #c81623;
}
.J-p-100001840257 {
  line-height: 18px;
  color: #c81623;
  text-align: center;
}
/* 上下图标 */
.details-rec-track-more {
  padding-top: 10px;
  text-align: center;
  clear: both;
}
.track-more-prev {
  display: inline-block;
  position: relative;
  left: -30px;
  background-position: -28px 0;
  width: 28px;
  height: 15px;
  background-image: url(../../../../assets/img/details/__sprite3.png);
}
.track-more-next {
  background-position: 0 0;
  display: inline-block;
  position: relative;
  left: -20px;
  width: 28px;
  height: 15px;
  background-image: url(../../../../assets/img/details/__sprite3.png);
}
.details-rec-track-more a {
  display: inline-block;
  margin: 0 10px;
  text-indent: -9999px;
  overflow: hidden;
}
</style>


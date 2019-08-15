<template>
  <div>
    <div class="details-rec-product-intro">
      <div class="details-rec-preview-wrap">
        <div class="details-rec-preview">
          <div class="details-rec-jqzoom details-rec-main-img">
            <ul class="details-rec-ul"></ul>
            <img
              :src="productDetailsData.image"
              alt
              id="details-rec-spec-img"
            />
            <i></i>
          </div>

          <div class="details-rec-pic-list">
            <a href="javascript:void(0)" class="arrow-prev disabled">
              <i class="details-rec-sprite-arrow-prev"></i>
            </a>
            <a href="javascript:void(0)" class="arrow-next disabled">
              <i class="details-rec-sprite-arrow-next"></i>
            </a>
            <ul>
              <li @mousemove="img">
                <img
                  src="../../../../assets/img/details/397c7f90cf4655ac(2).jpg"
                  alt
                  style="wideth=50"
                  height="50"
                />
              </li>
              <li>
                <img
                  src="../../../../assets/img/details/9d28eda31d5bcebe.jpg"
                  alt
                  style="wideth=50"
                  height="50"
                />
              </li>
              <li>
                <img
                  src="../../../../assets/img/details/b023700894ad89f8.jpg"
                  alt
                  style="wideth=50"
                  height="50"
                />
              </li>
              <li>
                <img
                  src="../../../../assets/img/details/d9bd4dab5b68a51f.jpg"
                  alt
                  style="wideth=50"
                  height="50"
                />
              </li>
              <li>
                <img
                  src="../../../../assets/img/details/395a4545c64e5179.jpg"
                  alt
                  style="wideth=50"
                  height="50"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="details-rec-preview-info">
          <div class="details-rec-info-left-btns">
            <a href class="details-rec-follow">
              <i class="details-rec-info-sprite-follow"></i>
              <em>关注</em>
            </a>
            <a href class="details-rec-share">
              <i class="details-rec-info-sprite-share"></i>
              <em>分享</em>
            </a>
          </div>
          <div class="details-rec-info-right-btns">
            <a href class="details-rec-info-right-report">举报</a>
          </div>
        </div>
        <div class="details-rec-purchase-op">
          <a href class="details-rec-volume-purchase">企业购更优惠</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:["productDetailsData"],
  methods: {
    img() {
      var li = document.querySelectorAll(".details-rec-pic-list li");
    }
  }
};
</script>
<style scoped>
.details-rec-product-intro {
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
}
.details-rec-preview-wrap {
  width: 352px;
  float: left;
}
.details-rec-preview {
  position: relative;
}
.details-rec-jqzoom {
  position: relative;
  padding: 0;
}
.details-rec-main-img {
  border: 1px solid #eee;
  margin-bottom: 20px;
}
.details-rec-main-img img {
  width: 350px;
  border: 0;
  vertical-align: middle;
}
.details-rec-main-img i {
  width: 30px;
  height: 30px;
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  background: url(../../../../assets/img/details/sprite-magnify.png) no-repeat;
}
.details-rec-ul {
  position: absolute;
  z-index: 5;
  bottom: 62px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}
.details-rec-pic-list {
  width: 300px;
  height: 54px;
  margin: 0 auto;
}
.details-rec-pic-list li {
  float: left;
  margin: 0 2px;
}
.details-rec-pic-list li img {
  border: 2px solid #fff;
}
.arrow-prev {
  display: block;
  width: 22px;
  height: 32px;
  float: left;
  position: absolute;
  cursor: pointer;
  bottom: 10px;
  left: 0;
  margin-top: -16px;
}
.arrow-next {
  display: block;
  width: 22px;
  height: 32px;
  float: left;
  position: absolute;
  cursor: pointer;
  bottom: 10px;
  right: 0;
  margin-top: -16px;
}
.details-rec-sprite-arrow-prev {
  display: inline-block;
  width: 22px;
  height: 32px;
  background: url(../../../../assets/img/details/disabled-prev.png);
}
.details-rec-sprite-arrow-next {
  display: inline-block;
  width: 22px;
  height: 32px;
  background: url(../../../../assets/img/details/disabled-next.png);
}
.details-rec-preview-info {
  height: 20px;
  margin-top: 10px;
}
.details-rec-info-left-btns {
  float: left;
}
.details-rec-follow,
.details-rec-share {
  margin-right: 2px;
}
.details-rec-info-sprite-follow,
.details-rec-info-sprite-share {
  display: inline-block;
  margin-right: 10px;
  width: 14px;
  height: 13px;
}

.details-rec-info-sprite-follow {
  background-image: url(../../../../assets/img/details/1.png);
  background-position: -44px -40px;
}
.details-rec-info-sprite-share {
  background-image: url(../../../../assets/img/details/1.png);
  background-position: -45px -24px;
  margin-left: 10px;
}
.details-rec-info-right-btns {
  float: right;
}
.details-rec-info-right-report {
  color: #666;
  font-size: 12px;
}
.details-rec-purchase-op {
  padding-top: 30px;
  text-align: center;
}
.details-rec-volume-purchase {
  display: inline-block;
  line-height: 26px;
  padding: 0 16px;
  border: 1px solid #ccc;
  color: #666;
}
.details-rec-follow:hover,
.details-rec-share:hover {
  color: #e4393c;
}
.details-rec-volume-purchase:hover {
  border: 1px solid #e4393c;
}
</style>

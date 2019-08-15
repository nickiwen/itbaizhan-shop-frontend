<template>
  <div class="bottom-top-nav">
    <div class="bottom-top-nav-box">
      <ul>
        <li>
          <div class="bottom-top-title">
              <span class="icon1"></span>
              <p class="bottom-top-txt">品类齐全，轻松购物</p>
          </div>
        </li>
        <li>
          <div class="bottom-top-title">
              <span class="icon2"></span>
              <p class="bottom-top-txt">多仓直发，极速配送</p>
          </div>
        </li>
        <li>
          <div class="bottom-top-title">
              <span class="icon3"></span>
              <p class="bottom-top-txt">正品行货，精致服务</p>
          </div>
        </li>
        <li>
          <div class="bottom-top-title">
              <span class="icon4"></span>
              <p class="bottom-top-txt">天天低价，畅选无忧</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomTop",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less" scoped>
.bottom-top-nav {
  padding: 30px 0;
  border-bottom: 1px solid #dedede;
  .bottom-top-nav-box {
    margin: 0 auto;
    width: 1200px;
    ul {
      overflow: hidden;
      height: 42px;
      li {
        float: left;
        width: 297px;
        .bottom-top-title {
          position: relative;
          margin: 0 auto;
          padding-left: 45px;
          width: 180px;
          span{
              display: inline-block;
              position: absolute;
              left: 0;
              top: 0;
              width: 36px;
              height: 42px;
              background-repeat: no-repeat;
              background-image: url("../../../assets/img/header/sprite.footer.png");
              overflow: hidden;
          }
          .icon1{
               background-position: 0 -192px;
          }
          .icon2{
               background-position: -41px -192px;
          }
          .icon3{
               background-position: -82px -192px;
          }
          .icon4{
               background-position: -123px -192px;
          }
          .bottom-top-txt{
              width: 100%;
              height: 42px;
              line-height: 42px;
              font-size: 18px;
              font-weight: 700;
              color: #444;
          }
        }
      }
    }
  }
}
</style>


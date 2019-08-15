<template>
  <div>
    <div class="city-wrap">
      <div class="city-content">
        <div class="city-content-list">
          <div class="item">
            <a href="#" class="item1">北京</a>
          </div>
          <div class="item">
            <a href="#">上海</a>
          </div>
          <div class="item">
            <a href="#">天津</a>
          </div>
          <div class="item">
            <a href="#">重庆</a>
          </div>
          <div class="item">
            <a href="#">河北</a>
          </div>
          <div class="item">
            <a href="#">山西</a>
          </div>
          <div class="item">
            <a href="#">河南</a>
          </div>
          <div class="item">
            <a href="#">辽宁</a>
          </div>
          <div class="item">
            <a href="#">吉林</a>
          </div>
          <div class="item">
            <a href="#">黑龙江</a>
          </div>
          <div class="item">
            <a href="#">内蒙古</a>
          </div>
          <div class="item">
            <a href="#">江苏</a>
          </div>
          <div class="item">
            <a href="#">山东</a>
          </div>
          <div class="item">
            <a href="#">安徽</a>
          </div>
          <div class="item">
            <a href="#">浙江</a>
          </div>
          <div class="item">
            <a href="#">福建</a>
          </div>
          <div class="item">
            <a href="#">湖北</a>
          </div>
          <div class="item">
            <a href="#">湖南</a>
          </div>
          <div class="item">
            <a href="#">广东</a>
          </div>
          <div class="item">
            <a href="#">广西</a>
          </div>
          <div class="item">
            <a href="#">江西</a>
          </div>
          <div class="item">
            <a href="#">四川</a>
          </div>
          <div class="item">
            <a href="#">海南</a>
          </div>
          <div class="item">
            <a href="#">贵州</a>
          </div>
          <div class="item">
            <a href="#">云南</a>
          </div>
          <div class="item">
            <a href="#">西藏</a>
          </div>
          <div class="item">
            <a href="#">陕西</a>
          </div>
          <div class="item">
            <a href="#">甘肃</a>
          </div>
          <div class="item">
            <a href="#">青海</a>
          </div>
          <div class="item">
            <a href="#">宁夏</a>
          </div>
          <div class="item">
            <a href="#">新疆</a>
          </div>
          <div class="item">
            <a href="#">港澳</a>
          </div>
          <div class="item">
            <a href="#">台湾</a>
          </div>
          <div class="item">
            <a href="#">钓鱼岛</a>
          </div>
          <div class="item">
            <a href="#">海外</a>
          </div>
        </div>
      </div>
    </div>
    <div class="region">
      <div class="region-split"></div>
      <p class="box-p">地区专享版本</p>
      <a href="#">中國港澳</a>
    </div>
    <div class="state"> 
      <div class="region-split"></div>
      <p>Available Sites</p>
      <ul>
        <li>
          <a href="#" class="bottom-nav-title">
            <i class="bottom_copyright_inter global"></i>
            Global Site
          </a>
        </li>
        <li>
          <a href="#" class="bottom-nav-title">
            <i class="bottom_copyright_inter cant"></i>
            Сайт России
          </a>
        </li>
        <li>
          <a href="#" class="bottom-nav-title">
            <i class="bottom_copyright_inter situs"></i>
            Situs Indonesia
          </a>
        </li>
        <li>
          <a href="#" class="bottom-nav-title">
            <i class="bottom_copyright_inter sitio"></i>
            Sitio de España
          </a>
        </li>
        <li>
          <a href="#" class="bottom-nav-title">
            <i class="bottom_copyright_inter siss"></i>
            เว็บไซต์ประเทศไทย
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopCity"
};
</script>
<style lang="less" scoped>
.city-wrap {
  .city-content {
    .city-content-list {
      overflow: hidden;

      .item {
        float: left;
        width: 60px;
        padding: 2px 0;
        a {
          float: left;
          padding: 0 8px;
          color: #999;
        }
        .item1 {
          background-color: #f10215;
          color: #fff;
        }
        a:hover {
          color: #e33333;
          background-color: #f4f4f4;
        }
      }
    }
  }
}
.region {
  margin: 10px 0 10px 10px;
  text-align: left;
  .region-split {
    width: 262px;
    border-bottom: dotted 1px #eee;
  }
  .box-p {
    margin: 9px 0;
    color: #8f8f8f;
  }

  a {
    color: #999;
  }
  a:hover {
    color: #e33333;
  }
}
.state {
  margin: 10px 0 10px 10px;
  text-align: left;
  .region-split {
    width: 262px;
    border-bottom: dotted 1px #eee;
  }
  p {
    margin: 9px 0;
    color: #8f8f8f;
  }
  ul {
    overflow: hidden;
    li {
      float: left;
      width: 145px;
      height: 26px;
      line-height: 26px;
      a {
        color: #999;
        display: block;
        overflow: hidden;
        .bottom_copyright_inter {
          display: inline-block;
          width: 15px;
          height: 10px;
          vertical-align: -1px;
          margin-right: 10px;
          background-repeat: no-repeat;
        }
        .global,
        .siss,
        .sitio,
        .situs,
        .cant {
          background-repeat: no-repeat;
          margin-top: -1px;
          background-image: url("../../../assets/img/header/sprite.footer.png");
        }
        .global {
          width: 15px;
          height: 12px;
          background-position: -108px -155px;
        }
        .cant {
          background-position: -168px -155px;
        }
        .situs {
          background-position: -148px -155px;
        }
        .sitio {
          background-position: -128px -155px;
        }
        .siss {
          background-position: -108px -172px;
        }
        p {
          float: left;
          width: 120px;
        }
      }
      a:hover {
        color: #e33333;
      }
    }
  }
}
</style>

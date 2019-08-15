<template>
  <div class="main-item" @click="backDetail">
    <div class="item-img">
      <img :src="item.item_image" alt />
    </div>
    <div class="item-des">
      <p class="product-price">
        <span>￥{{ item.item_price/100 }}.00</span>
      </p>
      <p class="product-des">
        <a href="##">
          <span class="des-one">京东超市</span>
          <span v-html="item.item_title"></span>
        </a>
      </p>
      <p class="product-appraise">
        <a href="##">
          <span>34万+</span>
        </a>条评价
      </p>
      <p class="product-shop">
        <a href="##">
          伊利母婴京东自营旗舰店
          <img src="../../../../../../assets/img/search/3.png" alt title="联系客服" />
        </a>
      </p>
      <p class="shop-des">
        <span title="京东自营,品质保障" class="self">自营</span>
        <span title="品牌限时特卖" class="sale">闪购</span>
        <span title="购买本商品送赠品" class="grant">赠</span>
        <span title="品质服务，放心购物" class="assure">放心购</span>
      </p>
      <p class="product-operate">
        <a href="##">
          <i class="compare"></i>
          <span>对比</span>
        </a>
        <a href="##">
          <i class="focus"></i>
          <span>关注</span>
        </a>
        <a href="##">
          <i class="shopCar"></i>
          <span class="car-red">加入购物车</span>
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Item",
  data() {
    return {};
  },
  props:["item"],
  methods:{
    backDetail(){
      this.$router.push({
        name:"Detail",
        params:{id:this.item.id}
      });
    }
  }
};
</script>

<style lang="less" scoped>
// 该部分开始
.main-item {
  width: 20%;
  padding: 9px;
  float: left;
  box-sizing: border-box;
  position: relative;
  border:1px solid #fff;
  margin-right: -2px;
  // 图片
  .item-img {
    img {
      width: 210px;
      height: 220px;
    }
  }
  // 商品的描述
  .item-des {
    p {
      font-size: 12px;
      margin-top: 10px;
      a {
        color: gray;
      }
    }
    // 价格
    .product-price {
      font-size: 16px;
      color: red;
    }

    .product-des {
      white-space: wrap;
      overflow: hidden;
      a {
        color: gray;
        span {
          margin-right: 5px;
        }
        .des-one {
          height: 16px;
          padding: 0 3px;
          margin-top: 2px;
          margin-right: 3px;
          overflow: hidden;
          color: #fff;
          font: 12px/16px "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
          background: #c81623;
          border-radius: 2px;
        }
      }
    }

    .product-appraise {
      color: gray;
      a {
        span {
          color: #005aa0;
        }
      }
    }

    .product-shop {
      box-sizing: border-box;
      a {
        position: relative;
        img {
          position: absolute;
          top: 2px;
          right: -20px;
        }
      }
    }

    .shop-des {
      span {
        line-height: 16px;
        padding: 0 3px;
        margin-right: 3px;
        overflow: hidden;
        text-align: center;
        font-style: normal;
        font-size: 12px;
        font-family: "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
        border-radius: 2px;
        color: #e23a3a;
      }
      .self {
        height: 16px;
        background: #e23a3a;
        color: #fff;
        cursor: default;
      }
      .sale {
        height: 14px;
        border: 1px solid #e23a3a;
      }
      .grant {
        height: 14px;
        border: 1px solid #e23a3a;
      }
      .assure {
        height: 14px;
        border: 1px solid #4d88ff;
        border-color: #4d88ff;
        color: #4d88ff;
      }
    }
    .product-operate {
      a {
        box-sizing: border-box;
        height: 25px;
        line-height: 27px;
        border: 1px solid #ddd;
        padding: 5px 5px;
        background: #fff;
        color: #999;
         position: relative;
        i {
          display: inline-block;
          width: 18px;
          height: 18px;
          margin-right: -1px;
        }
        span{
          display: inline-block;
          margin-left: 20px;
        }
        .car-red{
          color:red;
        }
        
        .compare {
          border: 1px solid #ddd;
          width: 12px;
          height: 12px;
          margin-right: 3px;
          position: absolute;
          top: 6px;
          left: 5px;
        }
        .focus {
          background: url("../../../../../../assets/img/search/search.ele.png");
          background-position: 2px -411px;
           position: absolute;
           top: 4px;
           left: 5px;
        }
        .shopCar {
          background: url("../../../../../../assets/img/search/search.ele.png");
          background-position: -3px -271px;
          position: absolute;
           top: 4px;
           left: 5px;
        }
      }
      a:hover{
        border:1px solid red;
        color:red;
      }
      a:hover .compare{
        border:1px solid red;
      }
      a:hover .focus{
        background-position: 2px -436px;
      }
    }
  }
}
.main-item:hover{
  border:1px solid #ddd;
}
</style>



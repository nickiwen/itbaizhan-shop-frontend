<template>
  <div>
    <div class="details-rec-itemInfo-wrap">
      <div class="details-rec-sku-name">{{ productDetailsData.title }}</div>
      <div class="details-rec-news" v-html="productDetailsData.sellPoint"></div>
      <!--价钱 -->
      <MiddlePrice :price="productDetailsData.price"/>
      <!-- 配送 -->
     <MiddlePeiSong/>
      <!-- 虚线 -->
      <div class="details-rec-summary-line"></div>
      <!-- 选择产品 -->

      <MiddleSelect />

      <!-- 增值保障 -->

      <MiddleZengZhi />

      <!-- 白条 -->

      <MiddleBaiTiao />

      <!-- 虚线 -->
      <div class="details-rec-summary-line"></div>
      <!-- 按钮 -->

      <MiddBtn :productId="productDetailsData.id"/>
    </div>
  </div>
</template>
<script>
import MiddleBaiTiao from "./MiddleBaiTiao";
import MiddleZengZhi from "./MiddleZengZhi";
import MiddlePeiSong from './MiddlePeiSong'
import MiddleSelect from "./MiddleSelect";
import MiddlePrice from "./MiddlePrice";
import MiddBtn from "./MiddleBtn";
export default {
  components: {
    MiddleBaiTiao,
    MiddleZengZhi,
    MiddlePeiSong,
    MiddleSelect,
    MiddlePrice,
    MiddBtn
  },
  props:["productDetailsData"],
  mounted() {
  },
};
</script>

<style scoped>
.details-rec-itemInfo-wrap {
  width: 590px;
  height: 393px;
  float: left;
  margin-left: 30px;
}
.details-rec-sku-name {
  font: 700 16px Arial, "microsoft yahei";
  color: #666;
  padding-top: 10px;
  line-height: 28px;
  margin-bottom: 5px;
}
.details-rec-news {
  color: #e4393c;
  margin-bottom: 5px;
  font-size: 12px;
}
.details-rec-news a {
  text-decoration: underline;
  color: #5e69ad;
  font-size: 12px;
}
/* 价钱样式开始  */


/* 京东价样式开始 */

/* 配送地址开始 */


.details-rec-summary-line {
  overflow: hidden;
  height: 0;
  overflow: hidden;
  border-bottom: 1px dotted #dfdfdf;
  margin-bottom: 15px;
}
/* 选择产品 */

/* 增值保障开始 */

/* 白条样式开始 */

/* 按钮开始 */
</style>
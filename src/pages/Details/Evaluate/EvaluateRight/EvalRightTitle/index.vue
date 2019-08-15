<template>
  <div class="details-eval-tab-header">
    <Tabs :currentIndex="currentIndex" @onIndexChange="getIndex" class="tabs">
      <Tab index="1" tabName="商品介绍" class="shop-list ">
        <div>
          <EvalRightJieShao :id="id"/>
          <EvalRightShouHou />
          <EvalRightPingJia />
          <EvalRightWenDa />
          <EvalRightHaoPing />
        </div>
      </Tab>
      <Tab index="2" tabName="规格与包装" class="shop-list">
        <div>
          <EvalRightGuiGe :id="id"/>
          <EvalRightShouHou />
          <EvalRightPingJia />
          <EvalRightWenDa />
          <EvalRightHaoPing />
        </div>
      </Tab>
      <Tab index="3" tabName="售后保障" class="shop-list">
        <EvalRightShouHou />
        <EvalRightPingJia />
        <EvalRightWenDa />
        <EvalRightHaoPing />
      </Tab>
      <Tab index="4" tabName="商品评价(1000+)" class="shop-list">
        <EvalRightPingJia />
        <EvalRightWenDa />
        <EvalRightHaoPing />
      </Tab>
      <Tab index="5" tabName="店好评商品" class="shop-list">
        <EvalRightHaoPing />
      </Tab>
    </Tabs>

    <!--  -->
    <div class="details-eval-extra">
      <div class="details-eval-extra-item">
        <div class="details-eval-EDropdown">
          <div class="details-eval-header">
            <div class="details-eval-btn-primary">
              <a href>加入购物车</a>
            </div>
          </div>
          <div class="details-eval-btn-hide">
            <div class="eval-mini-product-info">
              <div class="details-eval-p-img fl">
                <img src="../../../../../assets/img/details/da305be5a4abc1b6.jpg" alt />
              </div>
              <div class="details-eval-p-info">
                <div class="details-eval-p-name">三宅一生（ISSEY MIYAKE）一生之水女士淡香水25ml（EDT香水 花香水香木香 经典 进口）</div>
                <div class="details-eval-p-price">
                  <strong J-p-100002495802>480.00</strong>
                  <span>
                    X
                    <span>1</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "../../../tabs/tabs";
import Tab from "../../../tabs/tab";
import EvalRightJieShao from "../EvalRightJieShao";
import EvalRightShouHou from "../EvalRightShouHou";
import EvalRightPingJia from "../EvalRightPingJia";
import EvalRightWenDa from "../EvalRightWenDa";
import EvalRightHaoPing from "../EvluateRightHaoPing";
import EvalRightGuiGe from "../EvalRightGuiGe";
export default {
  data() {
    return {
      currentIndex: "1"
    };
  },
  components: {
    Tabs,
    Tab,
    EvalRightJieShao,
    EvalRightShouHou,
    EvalRightPingJia,
    EvalRightWenDa,
    EvalRightHaoPing,
    EvalRightGuiGe
  },
  methods: {
    getIndex(index) {
      this.currentIndex = index;
    }
  },
  props:["id"]
};
</script>

<style scoped>
.details-eval-tab-header {
  position: relative;
}
.details-eval-tab-header {
  display: block;
  overflow: hidden;
  /* height: 38px; */
}

/* .details-eval-tab-header ul {
  margin-top: -1px;
}
.details-eval-tab-header li {
  float: left;
  padding: 10px 25px;
  font-size: 14px;
  cursor: pointer;
} */


.details-eval-extra {
  position: absolute;
  top: 0;
  right: 0;
}
.details-eval-extra-item {
  float: right;
  margin-right: 10px;
  padding-top: 8px;
}
.details-eval-EDropdown {
  position: relative;
}
.details-eval-EDropdown:hover .details-eval-btn-hide {
  display: block;
}
.details-eval-header {
  height: 23px;
  line-height: 23px;
  float: left;
  z-index: 1;
  padding: 1px 1px 0;
  cursor: pointer;
}
.details-eval-btn-primary {
  margin-top: -3px;
  height: 28px;
  line-height: 28px;
  padding: 0 16px;
  background-color: #df3033;
  color: #fff;
}
.details-eval-btn-hide {
  top: 26px;
  right: 0;
  left: auto;
  position: absolute;
  background-color: #fff;
  display: none;
}
.eval-mini-product-info {
  background-color: #fff;
  width: 224px;
  height: 101px;
  padding: 10px;
  border: 1px solid #ccc;
  display: block;
}
.details-eval-p-img {
  margin-right: 10px;
  padding-bottom: 5px;
}
.details-eval-p-img img {
  width: 100px;
  border: 0;
  vertical-align: middle;
}
.fl {
  float: left;
}
.details-eval-p-name {
  max-height: 3em;
  min-height: 36px;
  line-height: 1.5em;
  margin-bottom: 5px;
  overflow: hidden;
}
.details-eval-p-price {
  text-align: center;
}
.details-eval-p-price strong {
  color: #e4393c;
  font-size: 14px;
  font-family: Verdana;
  margin-left: -35px;
}
</style>

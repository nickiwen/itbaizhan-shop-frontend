<template>
  <div class="details-eval-m-aside details-eval-pop-hot" id="details-eval-pop-hot">
    <div class="details-eval-mc no-padding">
      <div class="details-eval-ETab">
        <div class="details-eval-tab-main large">
          <ul>
            <li class="current">店铺热销</li>
            <li>热门关注</li>
          </ul>
            <FourImg/>
       
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FourImg from "./FourImg";
import EvalLeftReMen from "./EvalLeftReMen";

export default {
  components: {

    FourImg,
    EvalLeftReMen
  },
  data() {
    return {
      currentIndex: "1"
    };
  }
};
</script>

<style scoped>
.details-eval-mt {
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #eee;
  height: 18px;
}
.details-eval-mc {
  padding: 0 10px 0;
  border: 1px solid #eee;
  border-top: none;
  overflow: visible;
  background-color: #fff;
}
.details-eval-m-aside {
  margin-bottom: 15px;
}
.details-eval-tab-main {
  position: relative;
  background-color: #f7f7f7;
  border: 1px solid #eee;
  border-bottom: 1px solid #e4393c;
  display: block;
  width: 206px;
  height: 37px;
}
.details-eval-tab-main ul {
  margin-top: -1px;
  float: left;
}
.no-padding {
  padding: 0;
}
.details-eval-tab-main li {
  padding: 10px 22px;
  font-size: 14px;
  width: 56px;
  position: relative;
  display: inline-block;
  font-family: "microsoft yahei";
  cursor: pointer;
}
.details-eval-tab-main .current {
  background-color: #e4393c;
  color: #fff;
  cursor: default;
}
</style>


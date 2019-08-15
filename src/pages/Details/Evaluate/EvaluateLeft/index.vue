<template>
  <div>
     <div class="details-eval-aside">
    <!-- 第一块 -->
    <EvalLeftOne />
    <!-- 第二块 -->
    <EvalLeftTwo />
    <!-- 第三块 -->
    <EvalLeftThree/>
    <!-- 第四部分 -->
    <EvalLeftFour />
      </div>
  </div>
</template>

<script>
import EvalLeftOne from "./EvalLeftOne";
import EvalLeftTwo from "./EvalLeftTwo";
import EvalLeftThree from "./EvalLeftThree";
import EvalLeftFour from "./EvalLeftFour";
export default {
  components: {
    EvalLeftOne,
    EvalLeftTwo,
    EvalLeftThree,
    EvalLeftFour
  }
};
</script>

<style>
.details-eval-box {
  width: 1210px;
  /* height: 1921px; */
  margin: 0 auto;
  margin-top: 50px;
  color: #666;
  font-size: 12px;
  overflow: hidden;
}
.details-eval-aside {
  float: left;
  width: 210px;
  height: 1291px;
  margin-bottom: 20px;
}
</style>

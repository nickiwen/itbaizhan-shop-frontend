<template>
  <div>
    <div class="details-eval-details">
      <EvalRightTitle :id="id"/>
      <!-- <EvalRightJieShao />
      <EvalRightShouHou />
      <EvalRightPingJia />
      <EvalRightWenDa />
      <EvalRightHaoPing /> -->
    </div>
  </div>
</template>

<script>
import EvalRightTitle from "./EvalRightTitle";
// import EvalRightJieShao from "./EvalRightJieShao";
// import EvalRightShouHou from "./EvalRightShouHou";
// import EvalRightPingJia from "./EvalRightPingJia";
// import EvalRightWenDa from "./EvalRightWenDa";
// import EvalRightHaoPing from "./EvluateRightHaoPing";
export default {
  components: {
    EvalRightTitle,
    // EvalRightJieShao,
    // EvalRightShouHou,
    // EvalRightPingJia,
    // EvalRightWenDa,
    // EvalRightHaoPing
  },
  props:["id"]
};
</script>

<style>
.details-eval-details {
  width: 990px;
   /* height:13050px; */
  float: right;
}
</style>

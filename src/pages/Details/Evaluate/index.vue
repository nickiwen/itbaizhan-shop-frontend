<template>
  <div class="details-eval-box">
    <EvalateLeft />
    <EvalateRight :id="id"/>
  </div>
</template>

<script>
import EvalateLeft from "./EvaluateLeft";
import EvalateRight from "./EvaluateRight";
export default {
  components: {
    EvalateLeft,
    EvalateRight
  },
  props:["id"]
};
</script>

<style scoped>
/* 左边 */

/* 右边 */
</style>


<template>
  <div ref="loadMore">加载更多</div>
</template>
<script>
const winHeight = document.documentElement.clientHeight;
let timer = null;
export default {
  name: "LoadMore",
  mounted() {
    window.addEventListener("scroll", event => {
      //防抖的操作
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (this.$refs.loadMore.getBoundingClientRect().top < winHeight) {
          //请求数据
        }
      }, 100);
    });
  }
};
</script>
<style lang="less" scoped>
</style>



<template>
  <div class="header">
    <div class="wrap">
      <div class="logo">
        <p>百战购物商城</p>
      </div>
      <Search />
      <Cart />
      <SearchHot />
      <NavItem />
      <div class="treasure"></div>
    </div>
  </div>
</template>
<script>
import SearchHot from "./SearchHot";
import Cart from "./Cart";
import Search from "./Search";
import NavItem from "./NavItem";
export default {
  name: "TopNav",
  data() {
    return {};
  },
  components: {
    SearchHot,
    Cart,
    Search,
    NavItem
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 140px;
  .wrap {
    position: relative;
    width: 1200px;
    height: 140px;
    margin: 0 auto;
    .logo {
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0px;
      width: 205px;
      height: 100px;
      p {
        position: absolute;
        top: 27px;
        left:36px;
        color: #a30412;
        font-size: 28px;
      }
    }
    .treasure {
      float: left;
      position: absolute;
      right: 0;
      bottom: 10px;
      width: 190px;
      height: 40px;
    }
  }
}
</style>

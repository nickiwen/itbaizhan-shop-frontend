<template>
  <div class="search">
    <TopNav />
    <SearchHeader @onContent="getContent"/>
    <SearchTopNav />
    <SearchSelect />
    <SearchProducts :content="content" />
    <Pagations />
    <SearchProductSelect />
    <SearchLook />
    <SearchLike />
    <div class="search-img">
      <img src="../../assets/img/search/3e.jpg" alt />
    </div>
    <FooterNav />
    <BackTop />
  </div>
</template>
<script>
import TopNav from "../../components/TopNav/TopNavList";
import SearchHeader from "./SearchHeader";
import SearchTopNav from "./SearchTopNav";
import SearchSelect from "./SearchSelect";
import SearchProducts from "./SearchProducts";
import Pagations from "../../components/Pagations";
import BackTop from "../../components/BackTop";
import SearchProductSelect from "./SearchProductSelect";
import SearchLook from "./SearchLook";
import SearchLike from "./SearchLike";
import FooterNav from "../../components/FooterNav";

import { mapMutations } from "vuex"

export default {
  name: "SearchPage",
  components: {
    TopNav,
    SearchHeader,
    SearchTopNav,
    SearchSelect,
    SearchProducts,
    Pagations,
    BackTop,
    SearchProductSelect,
    SearchLook,
    SearchLike,
    FooterNav
  },
  data() {
    return {
      currentContent:""
    };
  },
  props:["content"],
  mounted() {
  },
  methods:{
    ...mapMutations(["setSearchContent"]),
    getContent(data){
      this.setSearchContent(data)
    }
  }
};
</script>
<style lang="less" scoped>
.search {
  width: 100%;
  .search-img {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
    img {
      width: 100%;
    }
  }
}
</style>



<template>
  <div class="home">
    <Top :isShow="isShow" v-if="isShow" />
    <div class="top">
      <TopNav />
      <Header />
      <Content />
    </div>
    <div class="home_page">
      <Spike />
      <Panking />
      <Me />
      <Mind />
      <Digital />
      <Life />
      <Fresh />
      <Optimal />
      <Made />
      <Fashion />
      <Cool />
      <Enjoy />
      <Firm />
      <Joy />
      <Feature />
      <Live />
      <Shopping />
    </div>
    <FooterNav />
    <BackTop />
  </div>
</template>

<script>
import TopNav from "../../components/TopNav";
import Header from "./Header";
import FooterNav from "../../components/FooterNav";
import Content from "./Content";
import Spike from "./Spike/Spike";
import Panking from "./Panking/Panking";
import Me from "./Me/Me";
import Mind from "./Mind/Mind";
import Digital from "./Digital/Digital";
import Life from "./Life/Life";
import Fresh from "./Fresh/Fresh";
import Optimal from "./Optimal/Optimal";
import Made from "./Made/Made";
import Fashion from "./Fashion/Fashion";
import Cool from "./Cool/Cool";
import Enjoy from "./Enjoy/Enjoy";
import Firm from "./Firm/Firm";
import Joy from "./Joy/Joy";
import Feature from "./Feature/Feature";
import Live from "./Live/Live";
import Shopping from "./Shopping/Shopping";
import BackTop from "../../components/BackTop";
import Top from "../../components/Top";

export default {
  name: "home",
  components: {
    Top,
    TopNav,
    Header,
    Content,
    FooterNav,
    Spike,
    Panking,
    Me,
    Mind,
    Digital,
    Life,
    Fresh,
    Optimal,
    Made,
    Fashion,
    Cool,
    Enjoy,
    Firm,
    Joy,
    Feature,
    Live,
    Shopping,
    BackTop
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 300) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  text-align: center;
}
.home {
  width: 100%;
  overflow: hidden;
  background-color: #f0f3ef;
}
.home_page {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
</style>


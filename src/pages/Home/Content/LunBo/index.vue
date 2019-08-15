<template>
  <div class="lunbo">
    <div class="lunbo-box">
      <div class="lunbo-main">
        <div class="lunbo_list">
          <div class="slider_list">
            <swiper :options="swiperOption" ref="mySwiper" class>
              <swiper-slide v-for="(item,index) in swiperData" :key="index">
                <img :src="item.src" alt />
              </swiper-slide>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "LunBo",
  data() {
    return {
      swiperData:[],
      swiperOption: {
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: true
      }
    };
  },
  created() {
    this.$api.selectFrontendContentByAD()
    .then(res => {
      if(res.data.status === 200){
        this.swiperData = res.data.data;
      }else{
        console.log("请求失败");
      }
    })
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="less" scoped>
.lunbo {
  float: left;
  width: 590px;
  height: 480px;
  margin-right: 10px;
  .lunbo-box {
    position: relative;
    float: left;
    width: 590px;
    height: 470px;
    margin-top: 10px;
    overflow: hidden;
    .lunbo-main {
      height: 470px;
      .lunbo_list {
        overflow: hidden;
        width: 100%;
        height: 100%;
        .slider_list {
          overflow: hidden;
          .swiper-button-prev,
          .swiper-container-rtl .swiper-button-next {
            background-image: url("../../../../assets/img/Home/left.png");
            width: 20px;
            height: 40px;
          }
          .swiper-button-next,
          .swiper-container-rtl .swiper-button-prev {
            background-image: url("../../../../assets/img/Home/right.png");
            width: 20px;
            height: 40px;
          }
        }
      }
    }
  }
}
.swiper-pagination .swiper-pagination-bullet-active {
  background: #fff;
}
img{
  width: 590px;
  height: 470px;
}
</style>


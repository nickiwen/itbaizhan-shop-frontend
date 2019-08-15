<template>
  <div class="box_index">
    <div class="panking">
      <!-- 排行榜 -->
      <div class="pank">
        <div class="pank_top">
          <h3>排行榜</h3>
          <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
          <span>专属你的购物指南</span>
        </div>
        <ul class="pank_nav">
          <PakingTab />
        </ul>
      </div>
      <!-- 会买专辑 -->
      <div class="cd">
        <swiper :options="swiperOptions" ref="mySwiper" class="spike_swiper">
          <swiper-slide>
            <div class="album">
              <div class="album_top">
                <h3>会买专辑</h3>
                <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                <span>甄选优质好物</span>
              </div>
              <img src="../../../assets/img/Home/26e040920f4d6a68.jpg" alt />
              <div class="album_img">
                <img src="../../../assets/img/Home/119de2ce5cedd43a.jpg" alt />
                <img src="../../../assets/img/Home/119de2ce5cedd43a.jpg" alt />
                <img src="../../../assets/img/Home/119de2ce5cedd43a.jpg" alt />
              </div>
              <div class="album_text">
                <span>塑腕间高级气场，商务表贵气炸场</span>
                <p>身处职场，当然要注意自己的形象，专业又干练的商务形象，必然少不了一款高级商务手表的助力。精选日韩手表，风格简单大气又不失稳重，上好的材质自带质感，佩戴在手上商务气息浓郁，让人一眼就会注意到。</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="album">
              <div class="album_top">
                <h3>会买专辑</h3>
                <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                <span>甄选优质好物</span>
              </div>
              <img src="../../../assets/img/Home/26e040920f4d6a68.jpg" alt />
              <div class="album_img">
                <img src="../../../assets/img/Home/119de2ce5cedd43a.jpg" alt />
                <img src="../../../assets/img/Home/119de2ce5cedd43a.jpg" alt />
                <img src="../../../assets/img/Home/119de2ce5cedd43a.jpg" alt />
              </div>
              <div class="album_text">
                <span>塑腕间高级气场，商务表贵气炸场</span>
                <p>身处职场，当然要注意自己的形象，专业又干练的商务形象，必然少不了一款高级商务手表的助力。精选日韩手表，风格简单大气又不失稳重，上好的材质自带质感，佩戴在手上商务气息浓郁，让人一眼就会注意到。</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="album">
              <div class="album_top">
                <h3>会买专辑</h3>
                <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                <span>甄选优质好物</span>
              </div>
              <img src="../../../assets/img/Home/26e040920f4d6a68.jpg" alt />
              <div class="album_img">
                <img src="../../../assets/img/Home/119de2ce5cedd43a.jpg" alt />
                <img src="../../../assets/img/Home/119de2ce5cedd43a.jpg" alt />
                <img src="../../../assets/img/Home/119de2ce5cedd43a.jpg" alt />
              </div>
              <div class="album_text">
                <span>塑腕间高级气场，商务表贵气炸场</span>
                <p>身处职场，当然要注意自己的形象，专业又干练的商务形象，必然少不了一款高级商务手表的助力。精选日韩手表，风格简单大气又不失稳重，上好的材质自带质感，佩戴在手上商务气息浓郁，让人一眼就会注意到。</p>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

        <!-- 领券中心 -->
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <div class="coupon">
              <div class="album_top">
                <h3>领券中心</h3>
                <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                <span>前往领券中心</span>
              </div>
              <div class="coupon_page">
                <div class="coupon_page_img">
                  <img src="../../../assets/img/Home/534690de273701cf.png" alt />
                </div>
                <div class="coupon_page_text">
                  <i>￥</i>
                  <span>700</span>
                  <p>满3999元可用</p>
                  <b>汇日翼电器专营店</b>
                </div>
                <div class="coupon_page_right">
                  <p>更多电器券</p>
                </div>
              </div>

              <div class="coupon_page_c">
                <div class="coupon_page_img">
                  <img src="../../../assets/img/Home/534690de273701cf.png" alt />
                </div>
                <div class="coupon_page_text">
                  <i>￥</i>
                  <span>700</span>
                  <p>满3999元可用</p>
                  <b>汇日翼电器专营店</b>
                </div>
                <div class="coupon_page_right">
                  <p>更多电器券</p>
                </div>
              </div>

              <div class="coupon_page">
                <div class="coupon_page_img">
                  <img src="../../../assets/img/Home/534690de273701cf.png" alt />
                </div>
                <div class="coupon_page_text">
                  <i>￥</i>
                  <span>700</span>
                  <p>满3999元可用</p>
                  <b>汇日翼电器专营店</b>
                </div>
                <div class="coupon_page_right">
                  <p>更多电器券</p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="coupon">
              <div class="album_top">
                <h3>领券中心</h3>
                <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                <span>前往领券中心</span>
              </div>
              <div class="coupon_page">
                <div class="coupon_page_img">
                  <img src="../../../assets/img/Home/534690de273701cf.png" alt />
                </div>
                <div class="coupon_page_text">
                  <i>￥</i>
                  <span>700</span>
                  <p>满3999元可用</p>
                  <b>汇日翼电器专营店</b>
                </div>
                <div class="coupon_page_right">
                  <p>更多电器券</p>
                </div>
              </div>

              <div class="coupon_page_c">
                <div class="coupon_page_img">
                  <img src="../../../assets/img/Home/534690de273701cf.png" alt />
                </div>
                <div class="coupon_page_text">
                  <i>￥</i>
                  <span>700</span>
                  <p>满3999元可用</p>
                  <b>汇日翼电器专营店</b>
                </div>
                <div class="coupon_page_right">
                  <p>更多电器券</p>
                </div>
              </div>

              <div class="coupon_page">
                <div class="coupon_page_img">
                  <img src="../../../assets/img/Home/534690de273701cf.png" alt />
                </div>
                <div class="coupon_page_text">
                  <i>￥</i>
                  <span>700</span>
                  <p>满3999元可用</p>
                  <b>汇日翼电器专营店</b>
                </div>
                <div class="coupon_page_right">
                  <p>更多电器券</p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import PakingTab from "./PankingTab";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Panking",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        autoplay: {
          delay: 7000
        }
      }
    };
  },
  props: {
    swiperSlides: {}
  },
  components: {
    swiper,
    swiperSlide,
    PakingTab
  }
};
</script>
<style  >
/* 排行榜 */
.panking {
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  top: 30px;
}
  

.pank {
  width: 390px;
  height: 470px;
  cursor: pointer;
  float: left;
  margin-right: 15px;
  background-color: #fff;
}
.album,
.coupon,
.stroll {
  width: 390px;
  height: 450px;
  background-color: #ffffff;
  cursor: pointer;
  float: left;
  margin-right: 15px;
}
.pank_top,
.album_top,
.pank_tops {
  width: 390px;
  height: 60px;
  position: relative;
}
.pank_top {
  background-color: #ffffff;
  height: 70px;
}
.pank_top h3,
.album_top h3,
.pank_tops h3 {
  float: left;
  font-weight: normal;
  font-size: 22px;
  color: #222;
  padding: 20px 20px;
  box-sizing: border-box;
}
.pank_top img {
  position: absolute;
  top: 25px;
  left: 95px;
}
.pank_top span,
.album_top span,
.pank_tops span {
  color: #999;
  font-size: 14px;
  float: left;
  margin: 25px;
}
/* 会买专辑 */
.album_top img {
  position: absolute;
  left: 118px;
  top: 25px;
}
.album_text span {
  font-size: 18px;
  color: #222;
  font-weight: bold;
}
.album_text p {
  font-size: 14px;
  height: 36px;
  color: #666;
  overflow: hidden;
  margin: 10px 15px;
}
/* 领券中心 */
.coupon,
.stroll {
  margin-right: 0;
}
.coupon_page {
  background-color: #f6f6f6;
}
.coupon_page,
.coupon_page_c {
  width: 350px;
  height: 108px;
  margin-left: 20px;
  float: left;
  border-radius: 10px;
}
.coupon_page_c {
  background-color: #eeefed;
}
.coupon_page_img img {
  float: left;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 11px 20px;
}
.coupon_page_text {
  float: left;
  margin-top: 10px;
}
.coupon_page_text i {
  margin-right: 3px;
  color: #e33333;
  font-style: normal;
}
.coupon_page_text span {
  font-size: 34px;
  color: #e33333;
  font-family: Impact, sans-serif;
}
.coupon_page_text p {
  color: #b1b3b0;
  font-size: 14px;
  margin-top: 0;
}
.coupon_page_text b {
  color: #767b77;
  font-size: 14px;
  font-weight: 500;
}
.coupon_page_right {
  float: right;
  margin-right: 30px;
  width: 1px;
  height: 15px;
}
.coupon_page_right p {
  font-size: 14px;
  color: #333;
  margin-top: 6px;
}

</style> 


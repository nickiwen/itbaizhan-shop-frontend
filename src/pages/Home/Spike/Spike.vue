<template>
  <div class="box_index">
    <div class="spike">
      <div class="spike_1">
        <h2>易购秒杀</h2>
        <p>FLASH DEALS</p>
        <img src="../../../assets/img/Home/14bde026c1c107fadd.png" alt />
        <i>本场距离结束还剩</i>
        <timer />
      </div>

      <swiper :options="swiperOptionss" ref="mySwiper"  class="spike_page_swiper">
        <swiper-slide>
          <div class="spike_page">
            <div class="spike_2">
              <img src="../../../assets/img/Home/7f105b739908a1a2.jpg" alt />
              <p>惠普（HP）暗影精灵4Pro 15.6英寸游戏笔记本电脑（i5-8300H 8G 512G RTX2060 6G独显 60Hz）</p>
              <div class="spike_2_price">
                <div class="spike_2_hong">
                  <i>￥</i>
                  <span>6966.00</span>
                </div>
                <div class="spike_2_bai">
                  <i>￥</i>
                  <span>
                    <del>8299.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div class="spike_2">
              <img src="../../../assets/img/Home/7f105b739908a1a2.jpg" alt />
              <p>惠普（HP）暗影精灵4Pro 15.6英寸游戏笔记本电脑（i5-8300H 8G 512G RTX2060 6G独显 60Hz）</p>
              <div class="spike_2_price">
                <div class="spike_2_hong">
                  <i>￥</i>
                  <span>6966.00</span>
                </div>
                <div class="spike_2_bai">
                  <i>￥</i>
                  <span>
                    <del>8299.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div class="spike_2">
              <img src="../../../assets/img/Home/7f105b739908a1a2.jpg" alt />
              <p>惠普（HP）暗影精灵4Pro 15.6英寸游戏笔记本电脑（i5-8300H 8G 512G RTX2060 6G独显 60Hz）</p>
              <div class="spike_2_price">
                <div class="spike_2_hong">
                  <i>￥</i>
                  <span>6966.00</span>
                </div>
                <div class="spike_2_bai">
                  <i>￥</i>
                  <span>
                    <del>8299.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div class="spike_2">
              <img src="../../../assets/img/Home/7f105b739908a1a2.jpg" alt />
              <p>惠普（HP）暗影精灵4Pro 15.6英寸游戏笔记本电脑（i5-8300H 8G 512G RTX2060 6G独显 60Hz）</p>
              <div class="spike_2_price">
                <div class="spike_2_hong">
                  <i>￥</i>
                  <span>6966.00</span>
                </div>
                <div class="spike_2_bai">
                  <i>￥</i>
                  <span>
                    <del>8299.00</del>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="spike_page">
            <div class="spike_2">
              <img src="../../../assets/img/Home/7f105b739908a1a2.jpg" alt />
              <p>惠普（HP）暗影精灵4Pro 15.6英寸游戏笔记本电脑（i5-8300H 8G 512G RTX2060 6G独显 60Hz）</p>
              <div class="spike_2_price">
                <div class="spike_2_hong">
                  <i>￥</i>
                  <span>6966.00</span>
                </div>
                <div class="spike_2_bai">
                  <i>￥</i>
                  <span>
                    <del>8299.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div class="spike_2">
              <img src="../../../assets/img/Home/7f105b739908a1a2.jpg" alt />
              <p>惠普（HP）暗影精灵4Pro 15.6英寸游戏笔记本电脑（i5-8300H 8G 512G RTX2060 6G独显 60Hz）</p>
              <div class="spike_2_price">
                <div class="spike_2_hong">
                  <i>￥</i>
                  <span>6966.00</span>
                </div>
                <div class="spike_2_bai">
                  <i>￥</i>
                  <span>
                    <del>8299.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div class="spike_2">
              <img src="../../../assets/img/Home/7f105b739908a1a2.jpg" alt />
              <p>惠普（HP）暗影精灵4Pro 15.6英寸游戏笔记本电脑（i5-8300H 8G 512G RTX2060 6G独显 60Hz）</p>
              <div class="spike_2_price">
                <div class="spike_2_hong">
                  <i>￥</i>
                  <span>6966.00</span>
                </div>
                <div class="spike_2_bai">
                  <i>￥</i>
                  <span>
                    <del>8299.00</del>
                  </span>
                </div>
              </div>
            </div>

            <div class="spike_2">
              <img src="../../../assets/img/Home/7f105b739908a1a2.jpg" alt />
              <p>惠普（HP）暗影精灵4Pro 15.6英寸游戏笔记本电脑（i5-8300H 8G 512G RTX2060 6G独显 60Hz）</p>
              <div class="spike_2_price">
                <div class="spike_2_hong">
                  <i>￥</i>
                  <span>6966.00</span>
                </div>
                <div class="spike_2_bai">
                  <i>￥</i>
                  <span>
                    <del>8299.00</del>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>4
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <swiper :options="swiperOption" ref="mySwiper"  class="spike_3_swiper">
        <swiper-slide>
          <div class="spike_3">
            <div class="spike_3_top">
              <p>品类秒杀</p>
              <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
            </div>
            <img src="../../../assets/img/Home/d3b71d6da52118bc.jpg" alt />
            <div class="spike_3_bottom">
              <p>雅迪品牌专场</p>
              <span>新国标直降300起</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="spike_3">
            <div class="spike_3_top">
              <p>品类秒杀</p>
              <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
            </div>
            <img src="../../../assets/img/Home/d3b71d6da52118bc.jpg" alt />
            <div class="spike_3_bottom">
              <p>雅迪品牌专场</p>
              <span>新国标直降300起</span>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import timer from "../../../components/timer/timer"

export default {
name: "Spike",
data() {
    return {
      	swiperOption: {
			pagination: {
				el: ".swiper-pagination"
			},
				loop: true,
				autoplay: {
					delay: 4000,
				},
		},
		swiperOptionss: {
			pagination: {
				el: ".swiper-pagination"
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},

				loop: true,
		}
    };
},
	props: {
		swiperSlides: {}
	},
	components: {
		swiper,
    swiperSlide,
    timer
	},
};
</script>
<style>
.box_index {
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  top:40px;
}
.spike {
  width: 1200px;
}
.spike_1 {
  background-color: #e83632;
  position: relative;
}
.spike_1,
.spike_2,
.spike_3 {
  width: 199px;
  height: 275px;
  float: left;
  cursor: pointer;
}
.spike_page {
  width: 800px;
  height: 275px;
  float: left;
}
.spike_1 h2 {
  font-size: 34px;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  font-weight: normal;
  padding-top: 30px;
}
.spike_1 p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
}
.spike_1 i {
  color: #fff;
  font-size: 16px;
  position: absolute;
  bottom: 73px;
  left: 34px;
  font-style: normal;
}
.spike_1 img {
  margin-top: 20px;
}
.spike_2 {
  background-color: #fff;
  border-right: 1px solid #f0f0f0;
}
.spike_2_price {
  width: 160px;
  height: 20px;
  margin-left: 15px;
  border: 1px solid #e6382f;
  margin-top: 10px;
}
.spike_2 img {
  margin-top: 20px;
  width: 140px;
}
.spike_2_hong {
  background-color: #e6382f;
}
.spike_2_hong,
.spike_2_bai {
  width: 80px;
  height: 20px;
  float: left;
}
.spike_2_hong i,
.spike_2_hong span {
  color: #fff;
}
.spike_2_hong i,
.spike_2_bai i {
  font-size: 12px;
  margin-right: 3px;
  font-weight: 400;
  font-style: normal;
}
.spike_2_hong span,
.spike_2_bai span {
  font-size: 14px;
  font-weight: bold;
}
.spike_2_bai i,
.spike_2_bai span {
  color: #b7bcb8;
  font-weight: normal;
}
.spike_2 p {
  width: 160px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  padding: 0 15px;
  margin-top: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.spike_2 p:hover {
  color: #e6382f;
}
.spike_3 {
  background-color: #fff;
  position: relative;
}
.spike_3_top {
  margin: 15px 0;
}
.spike_3_top p {
  font-size: 14px;
  color: #222;
}
.spike_3_top img {
  width: 11.5px;
  height: 11.5px;
  position: absolute;
  top: 17px;
  right: 49px;
}
.spike_3_bottom {
  width: 100%;
  height: 74px;
  background-color: #8fb4cd;
}
.spike_3_bottom p {
  font-size: 14px;
  color: #fff;
  padding-top: 15px;
  box-sizing: border-box;
}
.spike_3_bottom span {
  color: #fff;
  margin-top: 5px;
  font-weight: 700;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 17px;
}
.spike_page_swiper {
  width: 800px;
  height: 275px;
  float: left;
}
.spike_3_swiper {
  width: 199px;
  height: 275px;
  float: left;
}
.swiper-pagination-bullet-active{
	background: #e33333;
}
.swiper-button-prev,.swiper-button-next{
    height: 40px;
    position: absolute;
}
.swiper-button-prev{
    left: 0;
}
.swiper-button-next{
    right: 0;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next{
  background-image: url("../../../assets/img/Home/left.png");
  width: 20px;
  height: 40px;
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev{
  background-image: url("../../../assets/img/Home/right.png");
  width: 20px;
  height: 40px;
}
</style>


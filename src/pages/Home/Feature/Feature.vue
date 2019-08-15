<template>
    <div class="box_index">
        <div class="mind">
            <h3>——&nbsp;特色推荐&nbsp;——</h3>
        </div>
    
        <swiper :options="swiperOption" ref="mySwiper"  class="feature_swiper">
            <swiper-slide>
                <div class="features">
                    <div class="feature">
                        <div class="album_top">
                            <h3>易购旅行</h3>
                            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                            <span>精选超值好物</span>
                        </div> 
                        <img src="../../../assets/img/Home/10ec878241799d5f.jpg" alt="">
                    </div>
                    <div class="feature">
                        <div class="album_top">
                            <h3>易购旅行</h3>
                            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                            <span>精选超值好物</span>
                        </div> 
                        <img src="../../../assets/img/Home/10ec878241799d5f.jpg" alt="">
                    </div>
                    <div class="feature">
                        <div class="album_top">
                            <h3>易购旅行</h3>
                            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                            <span>精选超值好物</span>
                        </div> 
                        <img src="../../../assets/img/Home/10ec878241799d5f.jpg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="features">
                    <div class="feature">
                        <div class="album_top">
                            <h3>易购旅行</h3>
                            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                            <span>精选超值好物</span>
                        </div> 
                        <img src="../../../assets/img/Home/10ec878241799d5f.jpg" alt="">
                    </div>
                    <div class="feature">
                        <div class="album_top">
                            <h3>易购旅行</h3>
                            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                            <span>精选超值好物</span>
                        </div> 
                        <img src="../../../assets/img/Home/10ec878241799d5f.jpg" alt="">
                    </div>
                    <div class="feature">
                        <div class="album_top">
                            <h3>易购旅行</h3>
                            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                            <span>精选超值好物</span>
                        </div> 
                        <img src="../../../assets/img/Home/10ec878241799d5f.jpg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="features">
                    <div class="feature">
                        <div class="album_top">
                            <h3>易购旅行</h3>
                            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                            <span>精选超值好物</span>
                        </div> 
                        <img src="../../../assets/img/Home/10ec878241799d5f.jpg" alt="">
                    </div>
                    <div class="feature">
                        <div class="album_top">
                            <h3>易购旅行</h3>
                            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                            <span>精选超值好物</span>
                        </div> 
                        <img src="../../../assets/img/Home/10ec878241799d5f.jpg" alt="">
                    </div>
                    <div class="feature">
                        <div class="album_top">
                            <h3>易购旅行</h3>
                            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                            <span>精选超值好物</span>
                        </div> 
                        <img src="../../../assets/img/Home/10ec878241799d5f.jpg" alt="">
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination dot"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
    name: "Spike",
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loop: true,
                autoplay: {
					delay: 5000,
				},
            }
        };
    },
    props: {
        swiperSlides: {}
    },
    components: {
        swiper,
        swiperSlide
    },
};
</script>
<style>
.feature_swiper{
    width: 1200px;
    height: 350px;
}
.features{
    width: 1200px;
    height: 350px;
}
.feature{
    width: 390px;
    height: 330px;
    background-color: #fff;
    float: left;
    margin-right: 15px;
    cursor: pointer;
}
.feature:last-child{
    margin-right: 0;
}
.swiper-pagination{
    position: relative;
}
.swiper-button-prev,.swiper-button-next{
    position: absolute;
}
.swiper-button-prev{
    left: 0;
}
.swiper-button-next{
    right: 0;
}
</style>


 
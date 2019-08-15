<template>
    <div class="carousel">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                <img :src="slide" alt />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
    name: "Carousel",
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination"
                },
                loop: true,
                autoplay: true
            }
        };
    },
    props: {
        swiperSlides: {}
    },
    components: {
        swiper,
        swiperSlide
    }
};
</script>
<style lang="less" scoped>

</style>

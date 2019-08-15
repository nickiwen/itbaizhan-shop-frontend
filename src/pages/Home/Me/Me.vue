<template>
	<div class="box_index">
		<div class="me">
			<!-- 觅 -->
			<swiper :options="swiperOption" ref="mySwiper"   class="spike_swiper">
				<swiper-slide>
					<div class="me_page">
						<div class="pank_tops">
							<h3>觅me</h3>
							<img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
							<span>探索生活</span>
						</div>
						<img src="../../../assets/img/Home/791685431f723851.jpg" alt />
						<div class="album_text">
							<h2>超强吸力，油烟机燃气灶套装让烹饪变得轻松愉快</h2>
							<p>家里面有孩子的话，我们需要给自己的宝贝买一些玩具，因为孩子可以游戏的时候学习很多的经验，现在我把自己的玩具选购方法和大家说一下，这样可以有利于大家给孩子选择玩具。</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="pank">
						<div class="pank_tops">
							<h3>觅me</h3>
							<img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
							<span>探索生活</span>
						</div>
						<img src="../../../assets/img/Home/791685431f723851.jpg" alt />
						<div class="album_text">
							<h2>超强吸力，油烟机燃气灶套装让烹饪变得轻松愉快</h2>
							<p>家里面有孩子的话，我们需要给自己的宝贝买一些玩具，因为孩子可以游戏的时候学习很多的经验，现在我把自己的玩具选购方法和大家说一下，这样可以有利于大家给孩子选择玩具。</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="pank">
						<div class="pank_tops">
							<h3>觅me</h3>
							<img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
							<span>探索生活</span>
						</div>
						<img src="../../../assets/img/Home/791685431f723851.jpg" alt />
						<div class="album_text">
							<h2>超强吸力，油烟机燃气灶套装让烹饪变得轻松愉快</h2>
							<p>家里面有孩子的话，我们需要给自己的宝贝买一些玩具，因为孩子可以游戏的时候学习很多的经验，现在我把自己的玩具选购方法和大家说一下，这样可以有利于大家给孩子选择玩具。</p>
						</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination dot"  slot="pagination"></div>
				<div class="swiper-button-prev" slot="button-prev"></div>
            	<div class="swiper-button-next" slot="button-next"></div>
			</swiper>
			<!-- 发现好货 -->
			<div class="album">
				<div class="album_top">
					<h3>发现好货</h3>
					<img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
					<span>发现品质生活</span>
				</div>
				<div class="find">
					<div class="find_page">
						<img src="../../../assets/img/Home/3a094c195d2d0972.jpg" alt />
						<p>黛珂 高机能 紫苏水</p>
						<span>产自日本的这款黛珂高机能紫苏水，有300毫升，很耐用；它采用紫苏叶和玫瑰花瓣等植物成分，很安全；换季皮肤敏感，紫苏水有镇静消炎的功效，能够消灭闭口，痘痘肌很适合。</span>
					</div>
					<div class="find_page">
						<img src="../../../assets/img/Home/3a094c195d2d0972.jpg" alt />
						<p>黛珂 高机能 紫苏水</p>
						<span>产自日本的这款黛珂高机能紫苏水，有300毫升，很耐用；它采用紫苏叶和玫瑰花瓣等植物成分，很安全；换季皮肤敏感，紫苏水有镇静消炎的功效，能够消灭闭口，痘痘肌很适合。</span>
					</div>
					<div class="find_page">
						<img src="../../../assets/img/Home/3a094c195d2d0972.jpg" alt />
						<p>黛珂 高机能 紫苏水</p>
						<span>产自日本的这款黛珂高机能紫苏水，有300毫升，很耐用；它采用紫苏叶和玫瑰花瓣等植物成分，很安全；换季皮肤敏感，紫苏水有镇静消炎的功效，能够消灭闭口，痘痘肌很适合。</span>
					</div>
					<div class="find_page">
						<img src="../../../assets/img/Home/3a094c195d2d0972.jpg" alt />
						<p>黛珂 高机能 紫苏水</p>
						<span>产自日本的这款黛珂高机能紫苏水，有300毫升，很耐用；它采用紫苏叶和玫瑰花瓣等植物成分，很安全；换季皮肤敏感，紫苏水有镇静消炎的功效，能够消灭闭口，痘痘肌很适合。</span>
					</div>
				</div>
			</div>
			<!-- 逛好店 -->
			<div class="stroll">
				<div class="pank_top">
					<h3>逛好店</h3>
					<img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
					<span>你想逛的都在这里</span>
				</div>
				<img src="../../../assets/img/Home/17eee9dbb08a8041.jpg" alt="">
				<img src="../../../assets/img/Home/3a094c195d2d0972.jpg" alt />
				<img src="../../../assets/img/Home/3a094c195d2d0972.jpg" alt />
				<img src="../../../assets/img/Home/3a094c195d2d0972.jpg" alt />

			</div>
		</div>
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
					delay: 6000,
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
/* 觅 */
.me{
	width: 1200px;
	margin-top: 30px;
}
.me_page{
	width: 390px;
	height: 450px;
	background-color: #fff;
}
.album_text h2 {
	width: 283px;
	font-size: 16px;
	color: #333;
	margin: 0 auto;
	font-weight: normal;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.pank_tops img{
    position: absolute;
    top: 25px;
    left: 84px;
}
/* 发现好货 */
.find{
	width: 390px;
	height: 378px;
	float: left;
	margin: 0 15px;
}
.find_page{
	width: 180px;
	height: 175px;
	float: left;
}
.find_page img{
	display: inline-block;
	text-align: center;
}
.find_page p{
	color: #3e8c96;
	font-size: 12px;
	margin-top: 12px;
	padding: 0 10px;
	display: inline-block;
	text-align: center;
}
.find_page span{
	width: 149px;
	height: 30px;
	display: inline-block;
	font-size: 12px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.spike_swiper{
	width: 390px;
	height: 450px;
	float: left;
	margin-right: 15px;
}
.spike_swipers{
	width: 390px;
	height: 450px;
	float: left;
}
/* 逛好店 */
</style>


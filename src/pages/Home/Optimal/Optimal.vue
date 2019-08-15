<template>
    <div class="box_index">
        <div class="mind">
            <h3>——&nbsp;居家优品&nbsp;——</h3>
        </div>
        <!-- 灯具节狂欢 -->
        <div class="digital_page">
            <div class="digital_page_img">
                <img src="../../../assets/img/Home/4cd1d8ca0e15a98c.jpg" alt />
            </div>
        </div>
        <!-- 家电馆 -->
        <div class="album">
            <div class="pank_top">
				<h3>家电馆</h3>
				<img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
				<span>家电好物节</span>
			</div>
            <div class="mind_img_img">
                <img src="../../../assets/img/Home/0361e56fecfc0b71.jpg" alt />
            </div>
            <div class="mind_img">
                <img src="../../../assets/img/Home/5b4c43a8Ndb67446f.jpg" alt="">
                <img src="../../../assets/img/Home/5b4c43a8Ndb67446f.jpg" alt="">
            </div>
        </div>
        <!-- 我爱我家 -->
        <div class="love">
            <div class="album_top">
                <h3>我爱我家</h3>
                <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                <span>品质生活家</span>
            </div> 
            <div class="mind_img_img">
                <img src="../../../assets/img/Home/0361e56fecfc0b71.jpg" alt />
            </div>
            <div class="mind_img">
                <img src="../../../assets/img/Home/5b4c43a8Ndb67446f.jpg" alt="">
                <img src="../../../assets/img/Home/5b4c43a8Ndb67446f.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<style>
.love{
    width: 390px;
    height: 450px;
    background-color: #ffffff;
    cursor: pointer;
    float: left;
}
.digital_page {
  position: relative;
}
.digital_page_img {
  position: relative;
  width: 100%;
  height: 100%;
}
.digital_page::before {
  content: "";
  position: absolute;
  display: block;
  width: 340px;
  height: 420px;
  border: solid 5px #333;
  top: 10px;
  left: 0;
}
</style>


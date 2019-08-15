<template>
  <div class="box_index">
    <div class="mind">
      <h3>——&nbsp;智能先锋&nbsp;——</h3>
    </div>
    <!-- 手机频道 -->
    <div class="album">
        <div class="album_top">
            <h3>手机频道</h3>
            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
            <span>一个极客的诞生</span>
        </div>
        <div class="mind_img">
            <img src="../../../assets/img/Home/41d8767a2ba111af (1).jpg" alt />
            <img src="../../../assets/img/Home/41d8767a2ba111af (1).jpg" alt />
        </div>
        <div class="mind_img_2">
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
            <img src="../../../assets/img/Home/dd7001dd7e01b779 (1).jpg" alt />
        </div>
    </div>
    <!-- 新品首发 -->
    <div class="album">
        <div class="album_top">
            <h3>新品首发</h3>
            <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
            <span>逛京东小魔方，发现超级新品</span>
        </div>
        <img src="../../../assets/img/Home/ef2238659b639bb7.jpg" alt />
    </div>
    <!-- 新品上市 -->
    <div class="qi">
      <div class="qi_img">
        <img src="../../../assets/img/Home/8a572892f3d84161.jpg" alt />
      </div>
    </div>
  </div>

  
</template>
<style>
/* 手机频道 */
.mind{
  margin: 20px 0;
}
.album,.qi{
  cursor: pointer;
}
.mind h3 {
  height: 45px;
  font-size: 28px;
}
.mind_img {
  width: 390px;
  height: 180px;
  float: left;
}
.mind_img img {
  width: 170px;
  height: 180px;
}
.mind_img img:first-child {
  margin-right: 10px;
}
.mind_img_2 {
  overflow: hidden;
  width: 350px;
  padding: 20px 0 0 20px;
}
.mind_img_2 img {
  border: 1px solid #ebeaea;
  width: 85px;
  height: 55px;
  margin-top: -5px;
}
.qi {
  position: relative;
}
.qi_img {
  position: relative;
  width: 100%;
  height: 100%;
}
.qi::before {
  content: "";
  position: absolute;
  display: block;
  width: 340px;
  height: 420px;
  border: solid 5px #333;
  top: 20px;
  right: 0;
}
</style>



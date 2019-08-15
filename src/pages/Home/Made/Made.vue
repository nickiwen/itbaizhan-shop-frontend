<template>
    <div class="box_index">
        <div class="mades">
            <!-- 易购易造 -->
            <div class="album">
                <div class="album_top">
                    <h3>易购易造</h3>
                    <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                    <span>易购自有品牌</span>
                </div>
                <div class="mind_img_img">
                    <img src="../../../assets/img/Home/53b65d6f76f65d1a.jpg" alt />
                </div>
                <div class="made">
                <div class="made_img">
                    <img src="../../../assets/img/Home/5cde5411N28b313c2.jpg" alt />
                    <span>￥12.90</span>
                    <br>
                    <i>性能表现远超标准</i>
                </div>
                <div class="made_imgs">
                    <img src="../../../assets/img/Home/5cde5411N28b313c2.jpg" alt />
                    <span>￥12.90</span>
                    <br>
                    <i>性能表现远超标准</i>
                </div>
                </div>
            </div>
            <!-- 经典绘本 -->
            <div class="photo">
                <div class="photo_page">
                    <h4>经典绘本<b>·</b><span>必读经典</span></h4>
                    <div class="photo_page_img">
                        <img src="../../../assets/img/Home/56b88f06770f1d56.jpg" alt=""> 
                    </div>
                    <div class="photo_page_img">
                        <img src="../../../assets/img/Home/56b88f06770f1d56.jpg" alt=""> 
                    </div>
                </div>
                        <hr color="#f3f2f1">
                <div class="photo_page">
                    <h4>玩具书<b>·</b><span>寓教于乐</span></h4>
                        <div class="photo_page_img">
                            <img src="../../../assets/img/Home/56b88f06770f1d56.jpg" alt=""> 
                        </div>
                        <div class="photo_page_img">
                            <img src="../../../assets/img/Home/56b88f06770f1d56.jpg" alt=""> 
                        </div>
                </div>
            </div>
            <!-- 家居用品 -->
            <div class="made_page">
                <div class="made_page_img">
                    <img src="../../../assets/img/Home/7718fbd16231840d.jpg" alt />
                    <img src="../../../assets/img/Home/7718fbd16231840d.jpg" alt />
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.mades{
    margin-top: 30px;
}
/* 易购易造 */
.made{
    margin: 10px 20px 0;
}
.made_img,.made_imgs{
    width: 174px;
    float: left;
    text-align: left;
}
.made_imgs {
    border-left: 1px solid #efefef;
    padding-left: 25px;
    box-sizing: border-box;
}
.made_img img,.made_imgs img{
    width: 150px;
    height: 150px;
}
.made_img span,.made_imgs span{
    color: #f62424;
    font-size: 14px;
}
.made_img i,.made_imgs i{
    color: #999;
    font-size: 14px;
    font-style: normal;
    margin-top: 5px;
}
/* 家居用品 */
.made_page{
    position: relative;
    cursor: pointer;
}
.made_page_img{
    position: relative;
    width: 100%;
    height: 100%;
}
.made_page::before {
  content: "";
  position: absolute;
  display: block;
  width: 340px;
  height: 420px;
  border: solid 5px #333;
  top: 10px;
  right: 0;
}
</style>

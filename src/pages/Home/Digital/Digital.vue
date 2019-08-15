<template>
    <div class="box_index">
        <div class="digital">   
            <!-- 潮流数码 -->
            <div class="digital_page">
                <div class="digital_page_img">
                    <img src="../../../assets/img/Home/b12cb981f76c59fd.jpg" alt />
                    <img src="../../../assets/img/Home/b12cb981f76c59fd.jpg" alt />
                </div>
            </div>
            <!-- 教你拍照 -->
            <div class="photo">
                <div class="photo_page">
                    <h4>教你拍照<b>·</b><span>会拍照的男朋友</span></h4>
                    <div class="photo_page_img">
                        <img src="../../../assets/img/Home/5cdd0d92Nb78895a6.jpg" alt=""> 
                    </div>
                    <div class="photo_page_img">
                        <img src="../../../assets/img/Home/5cdd0d92Nb78895a6.jpg" alt=""> 
                    </div>
                </div>
                <hr color="#f3f2f1">
                <div class="photo_page">
                    <h4>王者荣耀<b>·</b><span>最强王者</span></h4>
                    <div class="photo_page_img">
                        <img src="../../../assets/img/Home/5cdd0d92Nb78895a6.jpg" alt=""> 
                    </div>
                    <div class="photo_page_img">
                        <img src="../../../assets/img/Home/5cdd0d92Nb78895a6.jpg" alt=""> 
                    </div>
                </div>
            </div>
            <!-- 智能数码 -->
            <div class="smart">
                <div class="album_top">
                    <h3>智能数码</h3>
                    <img src="../../../assets/img/Home/sk_arrow@1x.png" alt />
                    <span>智能潮货 嗨购不停</span>
                </div>
                <img src="../../../assets/img/Home/40858af715dcfe1f.jpg" alt="">
                <img src="../../../assets/img/Home/40858af715dcfe1f.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<style>
/* 潮流数码 */
.digital{
    width: 1200px;
    height: 450px;
    margin-top: 30px;
    position: relative;
}
.digital_page,.photo,.smart{
    width: 390px;
    height: 450px;
    float: left;
    margin-right: 15px;
    cursor: pointer;
}
.digital_page_img{
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
/* 教你拍照 */
.photo,.smart{
    background-color: #fff;
}
.photo_page{
    height: 225px;
    float: left;
    margin: 0 20px;
}
.photo_page b{
    margin: 0 5px;
    font-weight: normal;
}
.photo h4{
    width: 390px;
    font-weight: normal;
    font-size: 18px;
    text-align: left;
    margin-top: 20px;
}
.photo h4 span{
    font-size: 14px;
    color: #999;
}
.photo_page_img{
    width: 175px;
    float: left;
    margin-top: 20px;
}
/* 智能数码 */
.smart{
    margin-right: 0;
}
</style>


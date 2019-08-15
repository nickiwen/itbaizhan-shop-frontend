<template>
    <div class="box_index">
        <div class="mind">
            <h3>——&nbsp;易购直播&nbsp;——</h3>
        </div>
        <div class="live">
            <div class="live_img">
                <img src="../../../assets/img/Home/067397e79b08d65a.jpg" alt="">
                <img src="../../../assets/img/Home/111.png" class="live_imgs" alt="">
                <p>爆款直降 直播专享  优惠多多</p>
            </div>
            <div class="live_img">
                <img src="../../../assets/img/Home/067397e79b08d65a.jpg" alt="">
                <img src="../../../assets/img/Home/111.png" class="live_imgs" alt="">
                <p>爆款直降 直播专享  优惠多多</p>
            </div>
            <div class="live_img">
                <img src="../../../assets/img/Home/067397e79b08d65a.jpg" alt="">
                <img src="../../../assets/img/Home/111.png" class="live_imgs" alt="">
                <p>爆款直降 直播专享  优惠多多</p>
            </div>
            <div class="live_img">
                <img src="../../../assets/img/Home/067397e79b08d65a.jpg" alt="">
                <img src="../../../assets/img/Home/111.png" class="live_imgs" alt="">
                <p>爆款直降 直播专享  优惠多多</p>
            </div>
        </div>
        <div class="lives">
            <img src="../../../assets/img/Home/e891d1c9439ec0d3.jpg" alt="">
            <img src="../../../assets/img/Home/111.png" class="lives_imgs" alt="">
            <p>透真丨7月大促又来了</p>
            <span>美妆秒杀</span>
        </div>
        <div class="live">
            <div class="live_img">
                <img src="../../../assets/img/Home/067397e79b08d65a.jpg" alt="">
                <img src="../../../assets/img/Home/111.png" class="live_imgs" alt="">
                <p>爆款直降 直播专享  优惠多多</p>
            </div>
            <div class="live_img">
                <img src="../../../assets/img/Home/067397e79b08d65a.jpg" alt="">
                <img src="../../../assets/img/Home/111.png" class="live_imgs" alt="">
                <p>爆款直降 直播专享  优惠多多</p>
            </div>
            <div class="live_img">
                <img src="../../../assets/img/Home/067397e79b08d65a.jpg" alt="">
                <img src="../../../assets/img/Home/111.png" class="live_imgs" alt="">
                <p>爆款直降 直播专享  优惠多多</p>
            </div>
            <div class="live_img">
                <img src="../../../assets/img/Home/067397e79b08d65a.jpg" alt="">
                <img src="../../../assets/img/Home/111.png" class="live_imgs" alt="">
                <p>爆款直降 直播专享  优惠多多</p>
            </div>
        </div>
    </div>
</template>
<style>
.live{
    width: 390px;
    height: 425px;
    background-color: #fff;
    float: left;
    padding-left: 20px;
    padding-top: 15px;
    box-sizing: border-box;
    cursor: pointer;
}
.live_imgs{
    width: 44px;
    position: absolute;
    top: 65px;
    left: 65px;
} 
.live_img{
    float: left;
    position: relative; 
}
.live_img:after{
    content: '';
    position: absolute;
    width: 170px;
    height: 190px;
    top: 5px;
    left: 0;
    background: rgba(0, 0, 0, 0.3); 
}
.live_img:hover::after,.lives:hover::after{
    background: rgba(0, 0, 0, 0);
}
.lives:after{
    content: '';
    position: absolute;
    width: 350px;
    height: 390px;
    top:20px;
    left:20px;
    background: rgba(0, 0, 0, 0.3);
}
.live_img img{
    margin-top: 5px;
}
.live_img:nth-child(2n){
    margin-left: 10px;
}
.live_img p{
    font-size: 14px;
    color: #fff;
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    bottom: 20px;
    left: 10px;
}
.lives{
    width: 390px;
    height: 425px;
    background-color: #fff;
    float: left;
    margin: 0 15px;
    position: relative;
    cursor: pointer;
}
.lives_imgs{
    position: absolute;
    top: 170px;
    left: 170px;
}
.lives img{
    margin-top: 20px;
}
.lives p{
    font-size: 18px;
    color: #fff;
    position: absolute;
    left: 110px;
    bottom: 85px;
}
.lives span{
    font-size: 14px;
    color: #fff;
    position: absolute;
    left: 170px;
    bottom: 60px;
}
</style>

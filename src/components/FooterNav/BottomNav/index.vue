<template >
  <div class="bottom-nav">
      <div class="bottom-nav-n">
        <ul class="bottom-nav-ul">
            <li>
                <a href="#">关于我们</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">联系我们</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">联系客服</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">合作招商</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">商家帮助</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">营销中心</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">手机易购</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">友情链接</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">销售联盟</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">易购社区</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">风险监测</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">隐私政测</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">English Site</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">Media & IR</a>
            </li>
        </ul>
      </div>
    
    <div class="bottom_copyright_info">
        <div>
            <p>
                <a href="#" class="bottom-nav-title">京公网安备 11000002000088号</a>
                <span>|</span>
                <span>京ICP证070359号</span>
                <span>|</span>
                <a href="#" class="bottom-nav-title">互联网药品信息服务资格证编号(京)-经营性-2014-0008</a>
                <span>|</span>
                <span>新出发京零 字第大120007号</span>
            </p>
            <p>
                <span>互联网出版许可证编号新出网证(京)字150号</span>
                <span>|</span>
                <a href="#" class="bottom-nav-title">出版物经营许可证</a>
                <span>|</span>
                <a href="#" class="bottom-nav-title">网络文化经营许可证京网文[2014]2148-348号</a>
                <span>|</span>
                <span>违法和不良信息举报电话：4006561155</span>
            </p>
            <p>
                <span>Copyright © 2004 - 2019 京东JD.com 版权所有</span>
                <span>|</span>
                <span>消费者维权热线：4006067733</span>
                <a href="#" class="bottom-nav-title">经营证照</a>
                <span>|</span>
                <span>(京)网械平台备字(2018)第00003号</span>
                <span>|</span>
                <a href="#" class="bottom-nav-title">营业执照</a>
            </p>
        </div>
        <div>
            <p>
                <a href="#" class="bottom-nav-title ">
                <i class=" bottom_copyright_inter global"></i>
                Global Site
                </a>
                <span>|</span>
                <a href="#" class="bottom-nav-title">
                <i class=" bottom_copyright_inter cant"></i>
                Сайт России
                </a>
                <span>|</span>
                <a href="#" class="bottom-nav-title">
                <i class="bottom_copyright_inter situs"></i>
                Situs Indonesia
                </a>
                <span>|</span>
                <a href="#" class="bottom-nav-title">
                <i class=" bottom_copyright_inter sitio"></i>
                Sitio de España
                </a>
                <span>|</span>
                <a href="#" class="bottom-nav-title">
                <i class="bottom_copyright_inter siss"></i>
                เว็บไซต์ประเทศไทย
                </a>
            </p>
        </div>
        <div>
            <p>
                <span>京东旗下网站：</span>
                <a href="#" class="bottom-nav-title">京东钱包</a>
                <span>|</span>
                <a href="#" class="bottom-nav-title">京东云</a>
            </p>
        </div>
    </div>
    <p class="bottom_copyright">
      <a href="#" class="bottom-nav-title bottom_copyright_icon icon2">可信网站信用评估</a>
      <a href="#" class="bottom-nav-title bottom_copyright_icon icon3">网络警察提醒你</a>
      <a href="#" class="bottom-nav-title bottom_copyright_icon icon4">诚信网站</a>
      <a href="#" class="bottom-nav-title bottom_copyright_icon icon5">中国互联网举报中心</a>
      <a href="#" class="bottom-nav-title bottom_copyright_icon icon6">网络举报APP下载</a>
    </p>
  </div>
</template>
<script>
export default {
  name: "BottomNav",
  data() {
    return {};
  },
  components: {}
};
</script>
<style  scoped>
.bottom-nav {
    width: 100%;
    bottom:0;
}
.bottom-nav-n{
    width: 1200px;
    height: 40px;
    margin: 0 auto;
}
.bottom-nav-ul {
    padding-left: 104px;
  border-top: 1px solid #e1e1e1;
}
li {
    float: left;
    padding: 15px 0;
    cursor: pointer;
}
a {
  color: #666;
  display: inline-block;
  margin: 0 auto;
  font-size: 12px;
}
.bottom-nav-title {
  color: #999;
}
a:hover {
  color: #c81623;
}
span {
  margin: 0 10px;
  color: #999;
  font-size: 12px;
}
.bottom_copyright_info{
    padding: 10px 0;
    line-height: 22px;
    color: #999;
    text-align: center;
}
.bottom_copyright_inter{
    display: inline-block;
    width: 15px;
    height: 10px;
    vertical-align: -1px;
    margin-right: 10px;
    background-repeat: no-repeat
}
.global,.siss,.sitio,.situs,.cant{
    background-repeat: no-repeat;
    margin-top: -1px;
    background-image: url("../../../assets/img/header/sprite.footer.png");
}
.global{
    width: 15px;
    height: 12px;
    background-position: -108px -155px;
}
.cant{
    background-position: -168px -155px;
}
.situs{
    background-position: -148px -155px;
}
.sitio{
    background-position: -128px -155px;
}
.siss{
    background-position: -108px -172px;
}
.bottom_copyright{
    padding: 25px 0;
     text-align: center;
}
.bottom_copyright_icon {
  overflow: hidden;
  display: inline-block;
  margin: 0 3px;
  width: 103px;
  height: 32px;
  line-height: 1000px;
}
.icon2,.icon3,.icon4,.icon5,.icon6{
    background-repeat: no-repeat; 
    background-image: url("../../../assets/img/header/sprite.footer.png")
}
.icon2{
    background-position: -205px -111px;
}
.icon3{
    background-position: -205px -74px;
}
.icon4{
    background-position: -205px -37px;
}
.icon5{
    background-position: -205px 0;
}
.icon6{
   background-position: 0 -155px;
}
</style>

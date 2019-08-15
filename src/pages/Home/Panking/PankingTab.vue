<template>
<div class="pankTab">
    <swiper :options="swiperOption" ref="mySwiper"  class="swiper1">
        <swiper-slide>
            <div class="panking_tabs">
            <Tabs :currentIndex="currentIndex" @onIndexChange="getIndex">
                <Tab index="1" tabName="垂钓用品" name>
                    <div class="pank_bottom">
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>1</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>2</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>3</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                    </div>
                </Tab>
                <Tab index="2" tabName="厨房卫浴">
                    <div class="pank_bottom">
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/eda0a5d14f535c49.jpg" alt />
                        <span>1</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/eda0a5d14f535c49.jpg" alt />
                        <span>2</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/eda0a5d14f535c49.jpg" alt />
                        <span>3</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                    </div>
                </Tab>
                <Tab index="3" tabName="功能箱包">
                    <div class="pank_bottom">
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/550d75dd53bfd03d.jpg" alt />
                        <span>1</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/550d75dd53bfd03d.jpg" alt />
                        <span>2</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/550d75dd53bfd03d.jpg" alt />
                        <span>3</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                    </div>
                </Tab>
                <Tab index="4" tabName="厨房小电">
                    <div class="pank_bottom">
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>1</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>2</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>3</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                    </div>
                </Tab>
                <Tab index="5" tabName="生活电器">
                    <div class="pank_bottom">
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>1</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>2</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>3</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            </div>
        </swiper-slide>
        <swiper-slide >
            <div class="panking_tabs">
            <Tabs :currentIndex="currentIndex" @onIndexChange="getIndex">
                <Tab index="1" tabName="垂钓用品">
                    <div class="pank_bottom">
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>1</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>2</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>3</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                    </div>
                </Tab>
                <Tab index="2" tabName="厨房卫浴">
                    <div class="pank_bottom">
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>1</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>2</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>3</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                    </div>
                </Tab>
                <Tab index="3" tabName="功能箱包">
                    <div class="pank_bottom">
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>1</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>2</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>3</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                    </div>
                </Tab>
                <Tab index="4" tabName="厨房小电">
                    <div class="pank_bottom">
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>1</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>2</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>3</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                    </div>
                </Tab>
                <Tab index="5" tabName="生活电器">
                    <div class="pank_bottom">
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>1</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>2</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                        <div class="pank_bottom_page">
                        <img src="../../../assets/img/Home/40949dd48ba08105.jpg" alt />
                        <span>3</span>
                        <p>傻瓜渔网 第五代鱼网撒网飞盘手抛网甩网手撒飞盘式易抛撒抛小网眼半指 升级轮胎线飞盘式360钢坠</p>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
    
  
</template>
<script>
import Tabs from '../tabs/tabs'
import Tab from '../tabs/tab'
export default {
  name: "PankingTab",
  components:{
      Tabs,
      Tab

  },
  data() {
    return {
      currentIndex: "1",
      swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                },
                loop: true,
                
            },
    };
  },
  methods: {
    getIndex(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style >

.swiper1{
    width: 390px;
    height: 360px;
}
.box_index{
    position: relative;
}
.panking_tabs{
    width: 390px;
    height: 320px;
    position: absolute;
    top: 0px;
    left: 0;
}
.pank_bottom{
    width: 390px;
    height: 320px;
    background-color: #fff;
}
.pank_bottom_page{
    overflow: hidden;
    height: 100px;
    width: 100%;
}
.pank_bottom_page img{
    width: 80px;
    margin-top: 15px;
    float: left;
    margin-left: 20px;
}
.pank_bottom_page span{
    width: 30px;
    height: 40px;
    float: left;
    margin: 36px 0 0 10px;
    color: #e74240;
    font-size: 32px;
    font-family: Impact, sans-serif;
}
.pank_bottom_page p{
    width: 240px;
    height: 32px;
    color: #333;
    font-size: 12px;
    padding-top: 40px;
    overflow: hidden;
    margin-right: 15px;
}
.pank_bottom_page p:hover{
    color: #e74240;
}

</style>


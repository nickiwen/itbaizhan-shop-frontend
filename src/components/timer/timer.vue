<template>
    <div class="spike_time">
          <div class="spike_time_d">
            <span>{{d}}</span>
          </div>
          <div class="spike_time_h">
            <span>{{h}}</span>
          </div>
          <div class="spike_time_m">
            <span>{{m}}</span>
          </div>
          <div class="spike_time_s">
            <span>{{s}}</span>
          </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            d:null,
            h:null,
            m:null,
            s:null,
            isEnd:false,//倒计时是否结束
            endTime:'2019-7-31 00:00:00',
        }
    },
    created(){
        let that = this;
        that.setEndTime();
    },
    methods:{
    setEndTime(){
        var that = this;
            var interval = setInterval(function timestampToTime(){
            var date = (new Date(that.endTime)) - (new Date()); //计算剩余的毫秒数
            if(date == 0){
                that.isEnd = true;
                clearInterval(interval)
            }else{
                that.d = parseInt(date / 1000 / 60 / 60 / 24 , 10);
                that.h = parseInt(date / 1000 / 60 / 60 % 24 , 10);
                if(that.h < 10){
                    that.h = "0" +　that.h
                }
                that.m = parseInt(date / 1000 / 60 % 60, 10);//计算剩余的分钟
                if(that.m < 10){
                    that.m = "0" +　that.m
                } 
                that.s = parseInt(date / 1000 % 60, 10);//计算剩余的秒数 
                if(that.s < 10){
                    that.s = "0" +　that.s
                }
            return that.d+that.h+that.m+that.s;	
            }
            },1000);
        },

  },
}
</script>
<style>
.spike_1{
    position: relative;
}
.spike_time{
  position: absolute;
  top: 215px;
  left: 20px;
  float: left;
  font-size: 20px;
  line-height: 36px;
  color:#fff;
}
.spike_time:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    height: 1px;
    background: #e83632;
}
.spike_time div{
  float: left;
  width: 36px;
  height: 36px;
  background-color: #2f3430;
  margin-right: 5px;
}
</style>


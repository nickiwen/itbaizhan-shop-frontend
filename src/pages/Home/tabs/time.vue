<script>
export default {
    data(){
        return{
            isEnd:false,//倒计时是否结束
            endTime:'2019-10-29 08:00:00',//应为接口获取到的结束时间
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
                    that.time.D = parseInt(date / 1000 / 60 / 60 / 24 , 10);
                    that.time.h = parseInt(date / 1000 / 60 / 60 % 24 , 10);
                    if(that.time.h < 10){
                        that.time.h = "0" +　that.time.h
                    }
                    that.time.m = parseInt(date / 1000 / 60 % 60, 10);//计算剩余的分钟
                    if(that.time.m < 10){
                        that.time.m = "0" +　that.time.m
                    } 
                    that.time.s = parseInt(date / 1000 % 60, 10);//计算剩余的秒数 
                    if(that.time.s < 10){
                        that.time.s = "0" +　that.time.s
                    }
                    return that.time.D+that.time.h+that.time.m+that.time.s;	
                }
            },1000);
        },
    },

}
</script>

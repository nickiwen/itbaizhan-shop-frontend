<template>
  <div id="page">
    <span class="page-num">
      <a href="##" class="disabled" @click="backPrepage">上一页</a>
      <a href="##" ref="currentShow" 
       @click="getValue(index+1)" v-for="(item,index) in numArr" :key="index"
       :class="{'num-select':index===current}"
       >
        {{item}}
      </a>
      <b>...</b>
      <a href="##" @click="backNext">下一页</a>
    </span>
    <span class="page-skib">
      <em>
        共
        <b>100</b>
        页&nbsp;&nbsp;到第
      </em>
      <input type="text" value="1" v-model="value"/>
      <em>页</em>
      <a href="##" @click="backNum">确定</a>
    </span>
  </div>
</template>
<script>
import { log } from 'util';
export default {
  name: "Pagations",
  data() {
    return {
        value:'1',
        numArr:[1,2,3,4,5,6,7],
        current:0,
    };
  },
  methods: {
      backPrepage(){

      },
      getValue(data){
        // console.log(data);
        this.$api.getPage({
          blueBerryjam_id:data
        })
        .then(res=>{
          console.log(res.data);
        })
        this.current=data-1;
        if(data>7){
          //total:总的页数，current：选择的页码
    function insertHtml(total,current){
        //获取元素,首先清空里面的内容
        var page=$(".ts-page").html('');
        
        //显示开始的点点
        if(current>3){
            page.append('<span>...</span>');
        }
        //显示页码数,定义开始的和结束的页码数
        var start=current-2;
        var end=current+2;
        //当current=2的时候，start=0；不满足条件
        if(current==2||current==1){
            start=1;
            end=total<5?total:5;
        }else if(current==total-1){
            start=current-3;
            end=total;
        }else if(current==total){
            start=current-4;
            end=total;
        }
        //因为不知道从哪一页开始，所以初始条件不写
        //当current=5=total-1的时候，显示数据为 2,3,4,5,6；current=6=total的时候，显示数据为2,3,4,5,6
        for(;start<=end;start++){
            if(start==current){
                page.append('<span class="ts-select">'+start+'</span>');
            }else{
                page.append('<span class="page">'+start+'</span>');
            }
        }
        //显示后面的点点,当总数大于5和当前选中的页码数小于total-2时显示后面的点点
        if(total>5&&current<total-2){
            page.append('<span class="ts-end">...</span>'); 
        }
        
    }


        }
        
        
  
        

      },
      backNum(){
          
      },
      backNext(){

      }
  }
};
</script>
<style lang="less" scoped>
#page {
  width: 100%;
  height: 38px;
  margin-top: 40px;
  position: relative;
  margin-left: 410px;
  .page-num {
      display: inline-block;
      margin-left: 300px;
    a {
       color: #333;
       background:#eee;
       border: 1px solid #ddd;
       padding: 5px 15px;
       margin-left: 5px;
    }
    .disabled{
        background: #fff;
        color:gray;
    }
    .num-select{
        color:red;
        background: white;
        border-color:#fff;
    }
    b{
        display: inline-block;
        margin-left: 5px;
        margin-right: 5px;
    }
  }
  .page-skib{
      input{
          width: 30px;
          text-align: center;
          margin-right: 5px;
      }
      a{
          padding: 5px 10px;
          background: #ddd;
          border:1px solid #ddd;
          margin-left: 10px;
      }
  }
}
</style>



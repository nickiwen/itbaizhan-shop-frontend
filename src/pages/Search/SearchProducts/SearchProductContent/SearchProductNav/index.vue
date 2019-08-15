<template>
  <div class="centent-top">
    <div class="top-sort">
      <a href="##" class="default">
        <span>综合</span>
        <i></i>
      </a>
      <a href="##">
        <span>销量</span>
        <i></i>
      </a>
      <a href="##">
        <span>评论数</span>
        <i></i>
      </a>
      <a href="##">
        <span>新品</span>
        <i></i>
      </a>
      <a href="##" class="price">
        <span>价格</span>
        <i></i>
      </a>
    </div>
    <div class="price-select">
        <input type="text" placeholder="￥">
        <span> - </span>
        <input type="text" placeholder="￥">
        <button>确定</button>
    </div>
    <div class="result-sum">
      <p>共<span>33万+</span>件商品</p>
    </div>
    <div class="page">
      <p>
        <strong>1</strong>/100
      </p>
      <p>
        <a href="##" class="select-left" > < </a>
        <a href="##" title="使用方向键右键也可翻到下一页" class="select-right"> > </a>
        
      </p>

    </div>
    
  </div>
</template>

<script>
export default {
  name: "SearchProductNav"
};
</script>
<style lang="less" scoped>
.centent-top {
  height: 25px;
  background: #f1f1f1;
  line-height: 25px;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  .top-sort {
    width: 300px;
    height: 23px;
    float: left;
    a {
      padding: 0 9px;
      height: 23px;
      border: 1px solid #ccc;
      line-height: 23px;
      margin-right: -1px;
      background: #fff;
      color: #333;
      span {
        font-size: 12px;
        padding-right: 5px;
      }
      i {
        width: 7px;
        height: 11px;
        overflow: hidden;
        background: url("../../../../../assets/img/search/sprite-arrow.png");
        background-position: 0px -100px;
        display: inline-block;
      }
    }
    .default {
      background: #e4393c;
      span {
        color: white;
      }
      i {
        background-position: 0px -120px;
      }
    }
    .price {
      i {
        background-position: -10px -96px;
        height: 18px;
      }
    }
    a:hover {
      border: 1px solid red;
      margin-right: 0px;
      span {
        color: red;
      }
      i {
        background-position: 0px -140px;
      }
    }
    .default:hover {
      border: 1px solid #ccc;
      span {
        color: white;
      }
      i {
        background-position: 0px -120px;
      }
    }
    .price:hover {
      i {
        background-position: -10px -136px;
      }
    }
  }
  .price-select{
    float: left;
    height: 23px;
    width: 300px;
    position: relative;
    input{
      width: 70px;
      height: 14px;
      line-height: 20px;
    }
    button{
      width: 50px;
      height: 20px;
      position: absolute;
      top:3px;
      left:170px;
      font-size: 12px;
    }

  }
  .result-sum{
    width: 100px;
    height: 25px;
    line-height: 25px;
    float: left;
    margin-left: 250px;
    p{
      font-size: 12px;
      color:gray;
      span{
        color:black
      }
    }
  }
  .page{
    // width: 200px;
    height: 23px;
    float: right;
    margin-right: 10px;
    p{
      color:gray;
      font-size: 12px;
      float: left;
      margin-left: 10px;
      strong{
        color:red;
      }
      a{
        display: inline-block;
        width: 50px;
        height: 23px;
        line-height: 23px;
        border: 1px solid #ddd;
        text-align: center;
        font-size: 16px;
        color: gray;
      }
      .select-left{
         background: #ddd;
      }
      .select-right{
        background: white;
      }
    }
  }
  
    
      
    
  
}
</style>



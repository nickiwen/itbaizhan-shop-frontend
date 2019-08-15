<template>
    <div class="advanceOption-wrap">
        <div class="advanceOption-title">
          <p>高级选项：</p>
        </div>
        <div class="advanceOption-des">
          <p v-for="(item,index) in options" :key="index">
            <a href="##">{{item}}</a>
            <i class="select-down"></i>
          </p>
        </div>
        <div class="advanceOption-other">
          <p>
            <a href="##">更多</a>
            <i class="select-down"></i>
          </p>
        </div>
      </div>
</template>

<script>
export default {
    name:'AdvanceOptions',
    data(){
        return{
           
        }
    },
    props:['options']
}
</script>

<style lang="less" scoped>
.advanceOption-wrap {
      width: 100%;
      display: flex;
      border-top: 1px solid #ddd;
      .advanceOption-title {
        flex: 1;
        background: #f3f3f3;
        p {
          padding-top: 10px;
          padding-left: 10px;
          font-size: 12px;
        }
      }
      .advanceOption-des {
        flex: 8;
        margin: 10px;
        p {
          height: 25px;
          border: 1px solid #ddd;
          line-height: 25px;
          padding: 0 5px;
          float: left;
          margin-right: 15px;
          font-size: 12px;
          a {
            color: #005aa0;
          }
          .select-down {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("../../../../../assets/img/search/search.ele.png");
            background-position: 2px 11px;
            margin-left: 2px;
          }
        }
      }
      .advanceOption-other {
        flex: 1;
        margin-left: -10px;
        p {
          width: 50px;
          height: 25px;
          border: 1px solid #ddd;
          line-height: 25px;
          padding: 0 5px;
          margin-top: 10px;
          float: left;
          margin-right: 5px;
          font-size: 12px;
          .select-down {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("../../../../../assets/img/search/search.ele.png");
            background-position: 2px 9px;
            margin-left: 2px;
          }
        }
      }
}
</style>



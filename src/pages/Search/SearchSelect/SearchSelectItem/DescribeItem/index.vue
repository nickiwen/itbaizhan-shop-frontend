<template>
     <div class="describe-wrap">
        <div class="describe-title">
          <p> <strong>{{title}}：</strong></p>
        </div>
        <div class="describe-des">
          <ul>
            <li v-for="(item,index) in kind" :key='index'>
              <a href="##">{{item}}</a>
            </li>
          </ul>
        </div>
        <div class="describe-other">
          <p>
            <a href="##">更多</a>
            <i class="select-down"></i>
          </p>
        </div>
      </div>
</template>
<script>
export default {
    name:'DescribeItem',
    data(){
        return{
          
        }
    },
    props:['title','kind']
}
</script>

<style lang="less" scoped>
.describe-wrap {
      width: 100%;
      display: flex;
      border-top: 1px solid #ddd;
      .describe-title {
        flex: 1;
        background: #f3f3f3;
        p {
          padding-top: 10px;
          padding-left: 10px;
          font-size: 12px;
        }
      }
      .describe-des {
        flex: 8;
        margin: 10px;
        ul {
          li {
            width: 130px;
            height: 26px;
            line-height: 26px;
            float: left;
            a {
              font-size: 12px;
              color: #005aa0;
            }
            a:hover{
            color:red;
          }
          }
        }
        }
      .describe-other {
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
         p:hover>a{
          color:red;
        }
        p:hover>.select-down{
           background-position: 2px -6px;
        }
      }
    }

</style>



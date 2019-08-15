<template>
  <div>
    <div class="brand-wrap">
        <div class="brand-title">
          <p><strong>品牌：</strong></p>
        </div>
        <div class="brand-des">
          <div class="brand-des-img">
            <ul>
              <li v-for="(item,index) in imgs" :key="index">
                <a href="##">
                  <img :src="item" alt />
                </a>
                <div class="brand-des-hover">
                  <a href="##">爱他美(Aptamil)</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="brand-other">
          <p>
            <a href="##">更多</a>
            <i class="select-down"></i>
          </p>
          <p>
            <i class="select-add"></i>
            <a href="##">多选</a>
          </p>
        </div>
      </div>
    </div>
</template>
<script>
const imgs1=require('../../../../../assets/img/search/1.jpg');
const imgs2=require('../../../../../assets/img/search/2.jpg')
export default {
  name: "BrandItem",
  data(){
    return{
        imgs:[imgs1,imgs2],
  }
},


}
</script>

<style lang="less" scoped>
.brand-wrap{
      width: 100%;
      display: flex;
      border-top: 1px solid #ddd;
      .brand-title {
        flex: 1;
        background: #f3f3f3;
        p{
            padding-top:10px;
            padding-left: 10px;
            font-size: 12px;
        }
      }
      .brand-des {
        flex: 8;
        margin: 10px;
        .brand-des-img {
          width: 100%;
          ul {
            position: relative;
            li {
              float: left;
              width: 116px;
              height: 48px;
              padding: 0;
              margin: -1px -1px 0 0;
              background: white;
              text-align: center;
              position: relative;
              .brand-des-hover {
                width: 114px;
                height: 46px;
                border: 2px solid red;
                position: absolute;
                top: 0;
                left: 0;
                text-align: center;
                line-height: 40px;
                display: none;
                z-index:999;
                background: white;
                a {
                  color: red;
                  font-size: 12px;
                }
              }
              a {
                display: block;
                font-size: 12px;
                color: #005aa0;
                text-align: center;
                width: 114px;
                height: 46px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height: 48px;
                border: 1px solid #ddd;
                img {
                  border: 0;
                }
              }
            }
            li:hover>.brand-des-hover{
              display: block;
            }
          }
        }
      }
      .brand-other {
        flex: 1;
        margin-left: -10px;
        p {
          width: 50px;
          height: 25px;
          border: 1px solid #ddd;
          line-height: 20px;
          padding: 0 5px;
          margin-top: 10px;
          float: left;
          margin-right: 5px;
          font-size: 12px;
          box-sizing: content-box;
          a{
            display: inline-block;
  
          }
          .select-down {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("../../../../../assets/img/search/search.ele.png");
            background-position: 2px 11px;
            margin-left: 2px;
  
          }
          .select-add {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("../../../../../assets/img/search/search.ele.png");
            background-position: 2px -59px;
            margin-left: 2px;
          }
        }
        p:hover>a{
          color:red;
        }
        p:hover>.select-down{
           background-position: 2px -6px;
        }
         p:hover>.select-add{
           background-position: 2px -80px;
        }
      }
    }
</style>



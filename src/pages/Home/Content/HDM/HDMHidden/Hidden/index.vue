<template>
  <div class="cate_part_col1">
    <div class="cate_part_title">
      <a href="#">
          家电馆
          <i class="icon"></i>
      </a>
     <a href="#">
          家电专卖店
          <i class="icon"></i>
      </a>
      <a href="#">
          家电服务
          <i class="icon"></i>
      </a>
      <a href="#">
          企业采购
          <i class="icon"></i>
      </a>
      <a href="#">
          商用电器
          <i class="icon"></i>
      </a>
    </div>
    <div class="cate_detail">
        <dl v-for="(item,index) in value" :key="index" :class="'cate_detail_item cate_detail_item'+index">
            <dt class="cate_detail_tit" clstag="h|keycount|head|category_01c01">
                <a href="#" class="cate_detail_tit_lk" target="_blank">{{item.n}}
                    <i class="iconfont cate_detail_tit_arrow"></i>
                </a>
            </dt>
            <dd class="cate_detail_con" clstag="h|keycount|head|category_01d01">
                <a href="#"  v-for="(itemInfo,index) in item.i" :key="index" class="cate_detail_con_lk" target="_blank">{{itemInfo}}</a>
            </dd>
        </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hidden",
  props:["value"],
  data() {
    return {
      
    };
  },
  components: {},
 
};
</script>
<style lang="less" scoped>
.cate_part_col1 {
  float: left;
  width: 800px;
    .cate_detail {
        overflow: hidden;
        *zoom: 1;
        padding: 10px 0 0 20px;
        .cate_detail_item {
            position: relative;
            padding-left: 80px;
            .cate_detail_tit {
                overflow: hidden;
                position: absolute;
                left: 0;
                top: 6px;
                width: 70px;
                text-align: right;
                font-weight: 700;
                white-space: nowrap;
                text-overflow: ellipsis;
                .cate_detail_tit_lk {
                    color: #333;
                    font-weight: 700;
                }
            }
            .cate_detail_con {
                overflow: hidden;
                *zoom: 1;
                padding: 5px 0;
                .cate_detail_con_lk {
                    float: left;
                    margin: 3px 0;
                    padding: 0 7px;
                    height: 16px;
                    line-height: 16px;
                    white-space: nowrap;
                }
            }
        }
    }
    .cate_part_title {
        overflow: hidden;
        padding-left: 20px;
        height: 24px;
        a {
        float: left;
        margin-right: 10px;
        padding: 0 10px;
        height: 24px;
        background-color: #333;
        line-height: 24px;
        color: #fff;
        font-size: 12px;
        a:hover{
                background-color: #5c5251;
                color: #fff;
        }
        .icon{
            margin-left: 5px;
            display: inline-block;
            width: 10px;
            height: 15px;
            background-repeat: no-repeat;
            background-position: -26px -94px;
            background-image: url("../../../../../../assets/img/header/iconn.png");
        }
        }
    }
    .detail{
        overflow: hidden;
        padding: 10px 0 0 20px;
        display: none;
        dl{
            position: relative;
            padding-left: 80px;
            dt{
                overflow: hidden;
                position: absolute;
                left: 0;
                top:6px;
                width: 70px;
                text-align: right;
                font-weight: 700;
                white-space: nowrap;
                text-overflow: ellipsis;
                .icon{
                    margin-left: 5px;
                    display: inline-block;
                    width: 10px;
                    height: 15px;
                    background-repeat: no-repeat;
                    background-position: -26px -94px;
                    background-image: url("../../../../../../assets/img/header/iconn.png");
                }
            }
            dd{
                overflow: hidden;
                padding: 5px 0;
                // width: 800px;
                float: left;
                a{
                    float: left;
                    margin: 3px 0;
                    padding: 0 10px;
                    height: 16px;
                    border-left: 1px solid #e0e0e0;
                    line-height: 16px;
                    white-space: nowrap;
                    color: #666;
                }
                a:hover{
                    color:#c81623;
                }
            }
        }

    }
}
</style>


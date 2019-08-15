<template>
    <div class="top_hidden top_hidden1">
         <div class="top-hidden-list">
            <div class="fore1">
                <div class="item">
                    <a href="#">待处理订单</a>
                    <span></span>
                </div>
                <div class="item">
                    <a href="#">返修退换货</a>
                    <span></span>
                </div>
                <div class="item">
                    <a href="#">降价商品</a>
                    <span></span>
                </div>
            </div>
            <div class="fore2">
                <div class="item">
                    <a href="#">消息</a>
                    <span></span>
                </div>
                <div class="item">
                    <a href="#">我的问答</a>
                    <span></span>
                </div>
                <div class="item">
                    <a href="#">我的关注</a>
                    <span></span>
                </div>
            </div>
          </div>
          <div class="top-hidden-list top-hidden-list2">
              <div class="fore1">
                <div class="item">
                    <a href="#">我的京豆</a>
                    <span></span>
                </div>
                <div class="item">
                    <a href="#">我的白条</a>
                    <span></span>
                </div>
            </div>
            <div class="fore2">
                <div class="item">
                    <a href="#">我的优惠券</a>
                    <span></span>
                </div>
                <div class="item">
                    <a href="#">我的理财</a>
                    <span></span>
                </div>
            </div>
          </div>
    </div>
</template>
<script>

export default {
    name:'MineHidden',
    components:{
    }
}
</script>
<style lang="less" scoped>
.top_hidden {
        display: none;
        position: absolute;
        border: 1px solid #ccc;
        background-color: #fff;
        box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
        z-index: 999;
        .top-hidden-list {
          padding: 10px 0 10px 15px;
          overflow: hidden;
          .fore1,.fore2{
                float: left;
                width: 126px;
                text-align: left;
                a{
                    color: #999;
                    font-size: 12px;
                }
                a:hover {
                    color: #f10215;
                }
                span {
                    color: #f10215;
                    margin-left: 4px;
                }
            }
          }
          .top-hidden-list2{
              border-top: 1px solid #f1f1f1;
          }
        }
        .top-nav-a:hover >.top_hidden {
            display: block;
    }
    .top_hidden1 {
        width: 280px;
        top: 2px;
        left: -11px;
    }
</style>


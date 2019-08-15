<template>
    <div class="top_hidden top_hidden2">
         <div class="top-hidden-list">
            <div class="fore1">
                <div class="item">
                    <a href="#">企业购</a>
                    <span></span>
                </div>
                <div class="item">
                    <a href="#">工业品</a>
                    <span></span>
                </div>
            </div>
            <div class="fore2">
                <div class="item">
                    <a href="#">商用场景馆</a>
                    <span></span>
                </div>
                <div class="item">
                    <a href="#">礼品卡</a>
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
       transition: all .5s;
        .top-hidden-list {
          padding: 10px 0 10px 10px;
          overflow: hidden;
          .fore1,.fore2{
                display: inline-block;
                width: 56px;
                white-space: nowrap;
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
    }
    .top_hidden2{
        width: 170px;
        top: 2px;
        right:-161px;
      }
</style>


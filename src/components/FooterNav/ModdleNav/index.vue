<template>
  <div class="mod-nav">
    <div class="mod-nav-help">
      <div class="mod_help_list">
        <div class="mod-nav-tit">
          <h5>购物指南</h5>
          <ul>
            <li>
              <a href="#">购物流程</a>
            </li>
            <li>
              <a href="#">会员介绍</a>
            </li>
            <li>
              <a href="#">生活旅行</a>
            </li>
            <li>
              <a href="#">常见问题</a>
            </li>
            <li>
              <a href="#">大家电</a>
            </li>
            <li>
              <a href="#">联系客服</a>
            </li>
          </ul>`
        </div>
        <div class="mod-nav-tit">
          <h5>配送方式</h5>
          <ul>
            <li>
              <a href="#">上门自提</a>
            </li>
            <li>
              <a href="#">211限时达</a>
            </li>
            <li>
              <a href="#">配送服务查询</a>
            </li>
            <li>
              <a href="#">配送费收取标准</a>
            </li>
            <li>
              <a href="#">海外配送</a>
            </li>
          </ul>
        </div>
        <div class="mod-nav-tit">
          <h5>支付方式</h5>
          <ul>
            <li>
              <a href="#">货到付款</a>
            </li>
            <li>
              <a href="#">在线支付</a>
            </li>
            <li>
              <a href="#">分期付款</a>
            </li>
            <li>
              <a href="#">邮局汇款</a>
            </li>
            <li>
              <a href="#">公司转账</a>
            </li>
          </ul>
        </div>
        <div class="mod-nav-tit">
          <h5>售后服务</h5>
          <ul>
            <li>
              <a href="#">售后政策</a>
            </li>
            <li>
              <a href="#">价格保护</a>
            </li>
            <li>
              <a href="#">退款说明</a>
            </li>
            <li>
              <a href="#">返修/退换货</a>
            </li>
            <li>
              <a href="#">取消订单</a>
            </li>
          </ul>
        </div>
        <div class="mod-nav-tit">
          <h5>特色服务</h5>
          <ul>
            <li>
              <a href="#">夺宝岛</a>
            </li>
            <li>
              <a href="#">DIY装机</a>
            </li>
            <li>
              <a href="#">延保服务</a>
            </li>
            <li>
              <a href="#">易购E卡</a>
            </li>
            <li>
              <a href="#">易购通信</a>
            </li>
            <li>
              <a href="#">京鱼座智能</a>
            </li>
          </ul>
        </div>
        <div class="mod-nav-cover">
          <h5 class="mod-nav-title">京东自营覆盖区县</h5>
          <div class="mod-nav-cover-con">
              <p>京东已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。</p>
              <p class="mod-nav-cover-con-info">
                  <a href="#">查看详情
                      <i class="iconn"></i>
                  </a>
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModdleNav"
};
</script>
<style lang="less" scoped>
.mod-nav {
  padding: 20px 0;
  .mod-nav-help {
    width: 1200px;
    margin: 0 auto;
    .mod_help_list {
      overflow: hidden;
      height: 160px;
      .mod-nav-tit {
        float: left;
        width: 198px;
        line-height: 22px;
        text-align: left;
        h5 {
          margin-bottom: 5px;
          font-size: 14px;
        }
        ul {
          li {
            font-size: 12px;
            a {
              color: #666;
            }
            a:hover {
              color: #c81623;
            }
          }
        }
      }
      .mod-nav-cover {
        background-repeat: no-repeat;
        background-position: 0 0;
        float: right;
        width: 200px;
        height: 150px;
        color:#666;
        background-image: url("../../../assets/img/header/sprite.footer.png");
        .mod-nav-cover-con {
          width: 180px;
          padding: 0 10px;
          text-align: left;
          p{
              font-size: 12px;
          }
          .mod-nav-cover-con-info{
              text-align: right;
              .iconn{
                   background-repeat: no-repeat;
                   background-position: -27px -100px;
                   width: 13px;
                   height: 9px;
                   background-image: url("../../../assets/img/header/iconn.png");
                   display:inline-block;
              }
              a:hover{
                  color: #c81623;
              }
          }
        }
        .mod-nav-title{
            margin-bottom: 15px;
            font-size: 14px;
            text-align: center;
        }
      }
    }
  }
}
</style>
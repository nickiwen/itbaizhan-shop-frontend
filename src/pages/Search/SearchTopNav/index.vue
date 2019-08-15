<template>
  <div class="search-topNav">
    <div class="search-topNav-content">
      <div class="all-goods">
        <p>
          <a href="##">全部商品分类</a>
        </p>
      </div>
      <div class="search-topNav-ul">
        <ul>
          <li>
            <a href="##">京东时尚</a>
          </li>
          <li>
            <a href="##">美妆馆</a>
          </li>
          <li>
            <a href="##">超市</a>
          </li>
          <li>
            <a href="##">生鲜</a>
          </li>
          <li>
            <a href="##">海囤全球</a>
          </li>
          <li>
            <a href="##">闪购</a>
          </li>
          <li>
            <a href="##">拍卖</a>
          </li>
          <li>
            <a href="##">金融</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchTopNav"
};
</script>

<style lang="less" scoped>
.search-topNav {
  line-height: 33px;
  height: 33px;
  border-bottom: 2px solid #f30213;
  width: 100%;
  margin-top: 10px;
  .search-topNav-content {
    width: 90%;
    margin: 0 auto;
    display: flex;
    .all-goods {
      flex: 1;
      text-align: right;
      p {
        padding-top: -5px;
        width: 190px;
        height: 33px;
        background: #f30213;
        text-align: center;
        float: right;
        a {
          color: white;
        }
      }
    }
    .search-topNav-ul {
      flex: 9;
      ul {
        li {
          float: left;
          margin: 0 20px;
          a {
            font-weight: bold;
          }
          a:hover {
            color: red;
          }
        }
      }
    }
  }
}
</style>



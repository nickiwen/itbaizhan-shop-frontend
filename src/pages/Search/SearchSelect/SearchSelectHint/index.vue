<template>
    <div class="searchSelect-hint">
      <p>
        <a href="##">全部结果</a>
        <i class="select-right"></i>
        <a href="##">
          <span>{{result}}</span>
        </a>
      </p>
    </div>
</template>

<script>
export default {
    name:'SearchSelectHint',
    data(){
      return{
        result:'"奶粉"',
      }
    }
}
</script>

<style lang="less" scoped>
.searchSelect-hint {
    width: 90%;
    margin: 10px auto;
    height: 24px;
    line-height: 24px;
    p {
      font-size: 12px;
      font-family: "宋体";
      .select-right {
        display: inline-block;
        background: url("../../../../assets/img/search/sprite-arrow.png");
        width: 10px;
        height: 10px;
        margin: 0 5px 0 10px;
        background-position: -30px -100px;
      }
      a {
        span {
          font-weight: bold;
        }
      }
    }
  }
</style>



<template>
  <div>
    <div class=" askAnswer ">
      <div class="details-eval-mt">
        <h3>商品问答</h3>
      </div>
      <div class="details-eval-mc">
          <div class="ask-wrap">
              <i class="icon-dog"></i>
              <span>心中疑惑就问问买过此商品的同学吧~</span>
              <a href="" class="J-btn-ask btn-ask">我要提问</a>
          </div>
          <div>
              <AnswerList/>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
import AnswerList from './AnswerList'
export default {
    components:{
        AnswerList
    }
};
</script>
<style scoped>
.askAnswer {
    margin-bottom: 15px;
    
}
.details-eval-mt {
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #eee;
  height: 18px;
}
.askAnswer .ask-wrap {
    height: 75px;
    text-align: center;
    color: #333;
    background: url(../../../../../assets/img/details/radius-rect.png) top center no-repeat #f9f9f9;
}
.ask-wrap .icon-dog {
    display: inline-block;
    width: 123px;
    height: 67px;
    margin-top: 8px;
    background: url(../../../../../assets/img/details/icon-dog.png) no-repeat;
    vertical-align: middle;
    margin-right: 15px;
}
.askAnswer .ask-wrap .btn-ask {
    display: inline-block;
    line-height: 26px;
    padding: 0 18px;
    margin-left: 12px;
    border: 1px solid #e4393c;
    border-radius: 13px;
    vertical-align: middle;
    color: #e4393c;
}
</style>



<template>
  <div class="askAnswer-list">
    <div class="askAnswer-item">
      <div class="ask">
        <i class="icon-ask">问</i>
        <div class="item-con">
          <p class="ank-list-text">好闻吗？会有刺鼻的味道吗</p>
          <span>jd_4504caf9fad70 2019-05-16 07:33</span>
        </div>
      </div>
      <div class="answer">
        <i class="icon-answer">答</i>
        <div class="item-con">
          <ul class="answer-list">
            <li>
              <p class="answer-list-text">味道很清新，不会刺鼻</p>
              <span>lin-lin_ 2019-07-10 15:12</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.askAnswer .askAnswer-item {
  padding-top: 18px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}

.askAnswer-item .ask {
  overflow: hidden;
  zoom: 1;
}
.icon-ask {
  background: #f91;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  float: left;
}
 .item-con {
  margin-left: 25px;
  overflow: hidden;
  zoom: 1;
}
.ank-list-text {
  float: left;
  color: #333;
  font-weight: 700;
}

.answer-list-text {
  float: left;
  color: #333;
  font-weight: 400;
}
.item-con span {
  float: right;
  color: #999;
}
.askAnswer .icon-answer {
  background: #9b1;
  margin-top: 15px;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  float: left;
}
.answer .item-con {
  line-height: 50px;
}
.answer p {
  width: 770px;
  padding: 10px 0 8px;
  line-height: 220%;
}
</style>

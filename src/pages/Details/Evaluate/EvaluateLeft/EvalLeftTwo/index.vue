<template>
  <div class="details-eval-m-aside">
    <div class="details-eval-popbox-inner">
      <div class="details-eval-mt">
        <a href>
          <h3>店内搜索</h3>
        </a>
      </div>
    </div>
    <div class="details-eval-mc">
      <div class="details-eval-score-summary">
        <p class="details-eval-form-item1">
          <label for="sp-keyword">关键字：</label>
          <span>
            <input type="text" id="sp-keyword" />
          </span>
        </p>
        <p class="details-eval-form-item2">
          <label for="sp-price">价　格：</label>
          <span>
            <input type="text" id="sp-price" /> 到
            <input type="text" id="sp-price1" />
          </span>
        </p>
        <p class="details-eval-form-item3">
          <label for></label>
          <span>
            <input type="submit" value="搜索" />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.details-eval-mt {
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #eee;
  height: 18px;
}
.details-eval-mc {
  padding: 0 10px 0;
  border: 1px solid #eee;
  border-top: none;
  overflow: visible;
  background-color: #fff;
}
.details-eval-m-aside {
  margin-bottom: 15px;
}
.details-eval-score-summary p {
  overflow: hidden;
  padding: 2px;
}
.details-eval-score-summary p label {
  width: 5em;
  text-align: right;
}
.details-eval-score-summary p span {
  display: inline-block;
}
.details-eval-form-item1 input {
  width: 104px;
  border: 1px solid #ccc;
  margin: 2px;
}
.details-eval-form-item2 input {
  width: 3em;
}
.details-eval-form-item3 input {
  padding: 3px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f3f2f2;
  margin-left: 50px;
  margin-bottom: 10px;
}
</style>


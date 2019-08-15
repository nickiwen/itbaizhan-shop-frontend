
<template>
  <div class="search-hot">
    <a href="#" v-for="(item,index) in data" :key="index">
      {{item}}
    </a>
  </div>
</template>
<script>
export default {
  name: "SearchHot",
  data() {
    return {};
  },
  components: {},
  props: ["data"]
};
</script>
<style lang="less" scoped>
.search-hot {
  overflow: hidden;
  position: absolute;
  left: 426px;
  top: 91px;
  width: 550px;
  height: 16px;
  line-height: 16px;
  color: #ddd;
  a {
    color: #999;
    width: 700px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 5px;
    margin-left: 5px;
    font-size: 12px;
    border-right: 1px solid #ddd;
    padding-right: 10px;
  }
 a:last-child{
     border-right: 1px solid transparent;
 }
  a:hover {
    color: #c81623;
  }
  .title {
    color: #f10215;
  }
}
</style>


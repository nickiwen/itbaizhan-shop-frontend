<template>
  <div>
    <div class="Ptable">
      <div class="Ptable-item" v-if="paramsData.length>0">
        <dl style="margin:0" v-for="(item,index) in paramsData" :key="index">
          <dt>{{ item.value }}</dt>
          <dd v-for="(itemDesc,index) in item.children" :key="index">{{ itemDesc.childValue }} {{ itemDesc.value }}</dd>
        </dl>
      </div>
      <div v-else>
        暂无规格参数
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"EvalEightGuiGe",
  data(){
    return{
      paramsData:[]
    }
  },
  props:["id"],
  mounted() {
    // 规格参数格式不正确
    this.$api.getSelectTbItemParamItemByItemId({
      itemId:this.id
    })
    .then(res => {
      this.paramsData = JSON.parse(decodeURIComponent(res.data.data.paramData))
    })
  },
};
</script>

<style scoped>
.Ptable {
  margin: 10px 0;
}
.Ptable-item {
  padding: 12px 0;
  line-height: 220%;
  color: #999;
  font-size: 12px;
}
.Ptable-item h3 {
  width: 110px;
  text-align: right;
  font-weight: 400;
  font-size: 12px;
  float: left;
}
.Ptable-item dl {
  margin-left: 110px;
}
.Ptable-item dt {
  width: 160px;
  float: left;
  text-align: right;
  padding-right: 5px;
}
.Ptable-item dd {
  margin-left: 210px;
}
</style>


<template>
  <div class="search-select-content">
      <BrandItem />

      <DescribeItem title="奶粉" :kind="milkKind"/>
      <DescribeItem title="饮料冲调" :kind="drinkKind"/>
      <DescribeItem title="进口食品" :kind="importFoodKind"/>
      <DescribeItem title="医疗保健" :kind="healthKind"/>
      <AdvanceOptions :options="options"/>


  </div>
</template>
<script>
import BrandItem from './BrandItem'
import DescribeItem from './DescribeItem'
import AdvanceOptions from './AdvanceOptions'

export default {
  name: "SearchSelectItem",
  components:{
      BrandItem,
      DescribeItem,
      AdvanceOptions
  },
  data(){
      return{
          milkKind:['婴幼奶粉','孕妈奶粉'],
          drinkKind:['成人奶粉','牛奶乳品','冲饮谷物'],
          importFoodKind:['牛奶','冲调品','咖啡豆','蛋糕'],
          healthKind:['医疗护理','肠胃调理','强化免疫','健骨补钙','宠物驱虫'],
          options:['净含量','国产/进口','适用年龄','包装单位','段位','配方'],
         
      }
  },
 
};
</script>

<style lang="less" scoped>
.search-select-content {
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
}
</style>



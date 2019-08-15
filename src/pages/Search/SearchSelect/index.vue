<template>
  <div class="search-select">
    <SearchSelectHint />
    <SearchSelectItem />

   

  </div>
</template>
<script>
import SearchSelectHint from './SearchSelectHint';
import SearchSelectItem from "./SearchSelectItem";
export default {
  name: "SearchSelect",
  components: {
      SearchSelectHint,
      SearchSelectItem
  },
  data() {
    return {};
  },
 
};
</script>

<style lang="less" scoped>
.search-select {
  width: 100%;
}
</style>



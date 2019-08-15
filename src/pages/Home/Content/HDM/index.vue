<template>
  <div class="hdm">
    <div class="hdm_box" >
      <ul>
         <li v-for="item in this.menuItemData" :key="item.n">
          {{item.n}}
          <HDMHidden class="hdm-hidden" :value="item.i"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import HDMHidden from "./HDMHidden";
export default {
  name: "HDM",
  data() {
    return {
      menuItemData:[],
    };
  },
  created(){
    this.$api.getMenuItem()
    .then(res => {
       this.menuItemData = res.data.data.data;
    })
  },
  components: {
    HDMHidden
  },
};
</script>
<style lang="less" scoped>
.hdm {
  width: 190px;
  float: left;
  height: 480px;
  margin-right: 10px;
  .hdm_box {
    position: relative;
    z-index: 2;
    ul {
      padding: 6px 0;
      height: 468px;
      overflow: hidden;
      background-color: #fefefe;
      color: #636363;
      li {
        height: 26px;
        line-height: 26px;
        overflow: hidden;
        padding-left: 18px;
        text-align: left;
        transition: background-color 0.2s ease;
        a {
          font-size: 14px;
          color: #626262;
          transition: color 0.2s ease;
        }
        a:hover {
          color: #c81623;
        }

        span {
          padding: 0 2px;
          font-size: 12px;
        }
        .hdm-hidden {
          top: 0px;
          display: none;
          left: 191px;
          background-color: #fff;
          position: absolute;
          width: 998px;
          height: 480px;
          border: 1px solid #f7f7f7;
          background-color: #fff;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
          transition: top 0.25s ease;
        }
      }
      li:hover .hdm-hidden{
        display: block;
      }
    }
  }
}


</style>


<template>
  <div class="search">
    <div class="logo">
      <p>百战购物商城</p>
    </div>
    <div class="search-left">
      <div class="from">
        <input type="text" class="txt" placeholder="奶粉" @keydown="backSearch" />
        <span class="search-from-photo">
          <div class="search-photo">
            <span class="camera"></span>
            <input type="file" class="txt1" />
          </div>
        </span>
        <button class="button" @click="backSearch1">搜索</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
     
    };
  },
  components: {},
  methods: {
    backSearch(event) {
      if (event.keyCode === 13) {
        this.$router.push("/search");
        console.log(this.value);
      }
    },
    backSearch1(){
      this.$router.push("/search");
    }
  }
};
</script>
<style lang="less" scoped>
.search {
  .logo {
      position: relative;
    p {
        position: absolute;
        top:20px;
        left:100px;
      color: gray;
      font-size: 20px;
    }
  }
  .search-left {
    position: relative;
    z-index: 1;
    height: 60px;
    .from {
      position: absolute;
      left: 423px;
      top: 22px;
      width: 550px;
      height: 35px;
      .txt {
        left: 0;
        padding: 4px 44px 4px 4px;
        width: 550px;
        height: 25px;
        border: 2px solid red;
        line-height: 25px;
        font-size: 14px;
        position: absolute;
        top: 0;
        outline: none;
        color: #989898;
        background-color: #fff;
      }
      .search-from-photo {
        position: absolute;
        right: 25px;
        top: 10px;
        width: 19px;
        height: 15px;
        overflow: hidden;
        .search-photo {
          .camera {
            display: block;
            width: 19px;
            height: 15px;
            background: url("../../assets/img/header/sprite-photo-search.png")
              no-repeat;
            cursor: pointer;
          }
          .search-from-photo:hover .camera {
            background-position: -30px 0;
            color: #f10215;
          }
          .txt1 {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 3;
            width: 500px;
            height: 500px;
            cursor: pointer;
            opacity: 0;
          }
        }
      }
      .button {
        border-radius: 0;
        right: 0;
        width: 65px;
        height: 35px;
        line-height: 35px;
        border: none;
        background-color: #f10215;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        position: absolute;
        top: 0;
        left:537px;
        outline: none;
      }
      input {
        color: #333;
        background: transparent none repeat scroll 0% 0%;
      }
    }
  }
}
</style>


<script>
export default {
  name: "Tab",
  data() {
    return {};
  },
  props: {
    index: {
      type: [String, Number],
      default: "1"
    },
    tabName: {
      type: String,
      default: "tab"
    }
  },
  mounted() {
    // this:当前组件
    this.$parent.contents.push(this);
  },
  computed: {
    active() {
      return this.$parent.currentIndex == this.index;
    }
  },
  methods: {
    clickTabHandler() {
      this.$parent.onChangeIndex(this.index);
    }
  },
  render() {
    let className = {
      tab: true,
      active: this.active
    };
    return (
      <li class={className} onClick={this.clickTabHandler}>
        {this.tabName}
      </li>
    );
  }
};
</script>
<style scoped>
.tab {
  /* flex: 1; */
  /* list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center; */
  padding: 10px 25px;
  font-size: 14px;
  /* width: 18px; */
  /* float: left; */
}

.tab.active {
    background-color: #e4393c;
  color: #fff;
  cursor: default;
}
</style>

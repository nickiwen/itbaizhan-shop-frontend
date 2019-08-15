<script>
import Content from "./content";
export default {
  name: "Tabs",
  data() {
    return {
      contents: []
    };
  },
  components: {
    Content
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: "1"
    }
  },
  methods: {
    onChangeIndex(index) {
      this.$emit("onIndexChange", index);
    }
  },
  render() {
    return (
      <div>
        <ul class="tabs-header">{this.$slots.default}</ul>
        <Content contents={this.contents} />
      </div>
    );
  }
};
</script>
<style scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #eee;
  width: 990px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #e4393c;
  cursor: pointer;
  /* border-bottom: 2px solid #ededed; */
}
</style>


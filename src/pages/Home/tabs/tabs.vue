<script>
import Content from "./content";
export default {
    name: "Tabs",
    data() {
        return {
            contents:[]
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
                    <Content contents={ this.contents }/>
                </div>
        );
    }
};
</script>
<style scoped>
.tabs-header {
    width: 390px;
    height: 34px;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>


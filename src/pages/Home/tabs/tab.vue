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
        tabName:{
            type:String,
            default:"tab"
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
    methods:{
        clickTabHandler(){
            this.$parent.onChangeIndex(this.index);
        }
    },
    render() {
        let className = {
            tab: true,
            active: this.active
        };
        return <li class={className} onClick={this.clickTabHandler}>{ this.tabName }</li>;
    }
};
</script>
<style scoped>
.tab {
    width: 390px;
    height: 34px;
    line-height: 34px;
    background-color: #f7f7f7;
    list-style: none;
    text-align: center;
    cursor: pointer;
    font-size: 12px;
}
.tab.active {
    color: red;
}
</style>

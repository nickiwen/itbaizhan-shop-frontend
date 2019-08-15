<template>
    <div class="product-main">
        {{ getContent }}
        <Item v-for="(item,index) in itemData" :key="index" :item="item" />
    </div>
</template>
<script>
import Item from "./Item";
import { mapState } from "vuex";
export default {
    name: "SearchProductMain",
    data() {
        return {
            itemData: []
        };
    },
    components: {
        Item
    },
    computed: {
        ...mapState(["searchContent"]),
        getContent() {
            this.$api
                .getSearch({
                    q: this.searchContent
                })
                .then(res => {
                    this.itemData = res.data;
                });
        }
    },
    props: ["content"],
    mounted() {
        this.$api
            .getSearch({
                q: this.searchContent
            })
            .then(res => {
                this.itemData = res.data;
            });
    }
};
</script>
<style lang="less" scoped>
.product-main {
    width: 100%;
    margin-top: 10px;
}
</style>



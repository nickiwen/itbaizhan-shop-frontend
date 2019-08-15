<template>
    <div class="details-rec-box">
        <!-- 左边部分 -->
        <Left :productDetailsData="productDetailsData"/>
        <!-- 中间部分 -->
        <Middle :productDetailsData="productDetailsData"/>
        <!-- 右边部分 -->
        <Right />
    </div>
</template>

<script>
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
export default {
    components: {
        Middle,
        Right,
        Left
    },
    data(){
        return{
            productDetailsData:{}
        }
    },
    props: ["id"],
    mounted() {
        this.$api.getSelectItemInfo({
            itemId:this.id
        })
        .then(res => {
            this.productDetailsData = res.data.data
        })
    }
};
</script>

<style scoped>
.details-rec-box {
    width: 1210px;
    height: 680px;
    margin: 0 auto;
}
</style>
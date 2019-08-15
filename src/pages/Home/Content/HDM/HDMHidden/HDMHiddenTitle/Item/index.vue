<template>
    <div class="menu-item">
        <span v-for="(item,index) in itemI" :key="index">{{ item }}</span>
    </div>
</template>
<script>
export default {
    name:"Item",
    props:["itemI"]
}
</script>
<style scoped>

.menu-item span{
    display: inline-block;
    margin: 0 5px;
}

</style>

<template>
    <div>
        <ul>
            <li v-for="(item,index) in hdmHiddenData" :key="index">
                <span class="menu-title">{{ item.n }}</span>
                <Item class="item" :itemI="item.i"/>
            </li>
        </ul>
    </div>
</template>
<script>

import Item from "./Item"

export default {
    name:"HDMHiddenTitle",
    data(){
        return{

        }
    },
    components:{
        Item
    },
    props:["hdmHiddenData"],
    mounted() {
    },
}
</script>
<style scoped>

.item{
    display: inline;
}

.menu-title{
    color: black;
    font-weight: 700;
}

</style>


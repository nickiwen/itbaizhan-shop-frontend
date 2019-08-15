<template >
    <div>
        <div class="footer-nav">
            <BottomTop />
            <ModdleNav />
            <BottomNav />
        </div>
    </div>
</template>
<script>
import BottomNav from './BottomNav'
import ModdleNav from './ModdleNav'
import BottomTop from './BottomTop'
export default {
    name:'FooterNav',
    data(){
        return {

        }
    },
    components:{
        BottomTop,
        ModdleNav,
        BottomNav
    }
}
</script>
<style lang="less" scoped>
.footer-nav{
    bottom:0;
    background: #f0f3ef;
}
</style>

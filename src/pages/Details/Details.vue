<template>
    <div>
        <TopNav />
        <CommonSerch />
        <CommonSearchList :data="headerList"/>
        <Cart />
        <MenuList/>
        <SelectList/>
        <Recommand :id="id"/>
        <Evaluate :id="id"/>
        <FooterNav />
        <BackTop />
    </div>
</template>
<script>
import MenuList from  './MenuList'
import SelectList from './SelectList'
import Recommand from './Recommand'
import Evaluate from './Evaluate'
import TopNav from '../../components/TopNav'
import FooterNav from '../../components/FooterNav'
import BackTop from '../../components/BackTop'
import CommonSerch from '../../components/CommonSearch'
import CommonSearchList from '../../components/CommonSearchList'
import Cart from '../../components/Cart'
export default {
    name:'Details',
    components:{
        TopNav,
        CommonSerch,
        CommonSearchList,
        Cart,
        MenuList,
        SelectList,
        Recommand,
        Evaluate,
        FooterNav,
        BackTop
    },
    props:["id"],
    data(){
        return{
            headerList:['奶粉成人','奶粉1段','奶粉3段','中老年奶粉','牛奶','学生奶粉','婴儿奶粉','脱脂奶粉']
        }
    },
    mounted() {
    },
}
</script>

<style lang="less">

</style>



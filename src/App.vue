<template>
    <div id="app">
        <router-link to="/"></router-link>
        <router-link to="/search"></router-link>
        <router-link to="/detail"></router-link>
        <router-link to="/shopcar"></router-link>
        <router-link to="/login"></router-link>
        <!--缓存，切换页面，不改变  -->
        <router-view v-if="isRouterAlive"></router-view>
        <keep-alive></keep-alive>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            isRouterAlive: true
        };
    },
    provide() {
        return {
            reload: this.reload
        };
    },
    components: {},
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(() => (this.isRouterAlive = true));
        }
    }
};
</script>

<style>
</style>

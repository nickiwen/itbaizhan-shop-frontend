<template>
    <div class="search">
        <div class="search-left">
            <div class="from">
                <input
                    type="text"
                    class="txt"
                    placeholder="扫地机器人 智能"
                    @keydown="backSearch"
                    v-model="message"
                />
                <span class="search-from-photo">
                    <div class="search-photo">
                        <span class="camera"></span>
                        <input type="file" class="txt1" />
                    </div>
                </span>
                <button class="button" @click="backSearch1">
                    <i class="icon-search"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>

import { mapMutations } from "vuex"

export default {
    name: "Search",
    data() {
        return {};
    },
    components: {},
    computed: {
        message: {
            get() {
                return this.$store.state.value;
            },
            set(value) {
                this.$store.commit("SETVALUE", value);
            }
        }
    },
    methods: {
        ...mapMutations(["setSearchContent"]),
        backSearch(event) {
            if (event.keyCode === 13) {
                // 写入vuex
                this.setSearchContent(this.message)
                this.$router.push({
                    name: "Search",
                    params: { content: this.message }
                });
            }
        },
        backSearch1() {
            if (this.message === "") {
                return;
            }
            this.setSearchContent(this.message);
            this.$router.push({
                name: "Search",
                params: { content: this.message }
            });
        }
    }
};
</script>
<style lang="less" scoped>
.search {
    .search-left {
        position: relative;
        z-index: 1;
        height: 60px;
        .from {
            position: absolute;
            left: 253px;
            top: 25px;
            width: 550px;
            height: 35px;
            .txt {
                left: 0;
                padding: 4px 44px 4px 20px;
                width: 450px;
                height: 25px;
                border: 1px solid transparent;
                line-height: 25px;
                font-size: 12px;
                position: absolute;
                top: 0;
                outline: none;
                color: #989898;
                background-color: #fff;
            }
            .search-from-photo {
                position: absolute;
                right: 65px;
                top: 10px;
                width: 19px;
                height: 15px;
                overflow: hidden;
                .search-photo {
                    .camera {
                        display: block;
                        width: 19px;
                        height: 15px;
                        background: url("../../../../assets/img/header/sprite-photo-search.png")
                            no-repeat;
                        cursor: pointer;
                    }
                    .search-from-photo:hover .camera {
                        background-position: -30px 0;
                        color: #f10215;
                    }
                    .txt1 {
                        position: absolute;
                        right: 0;
                        top: 0;
                        z-index: 3;
                        width: 500px;
                        height: 500px;
                        cursor: pointer;
                        opacity: 0;
                    }
                }
            }
            .button {
                border-radius: 0;
                right: 0;
                width: 50px;
                height: 35px;
                line-height: 35px;
                border: none;
                background-color: #f10215;
                font-size: 20px;
                font-weight: 700;
                color: #fff;
                position: absolute;
                top: 0;
                outline: none;
            }
            input {
                color: #333;
                background: transparent none repeat scroll 0% 0%;
            }
        }
    }
}
</style>


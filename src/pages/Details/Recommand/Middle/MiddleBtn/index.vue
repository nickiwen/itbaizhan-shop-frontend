<template>
    <div>
        <div class="details-rec-choose-btns">
            <div class="details-rec-choose-amount">
                <div class="details-rec-wrap-input">
                    <input type="text" class="details-rec-text" v-model="counter" />
                    <a href="javascript:void(0)" class="details-res-btn-reduce" @click="mins">-</a>
                    <a href="javascript:void(0)" class="details-res-btn-add" @click="add">+</a>
                </div>
            </div>
            <a @click="backShopcar" class="details-res-btn-special1 details-res-btn-lg">加入购物车</a>
            <!-- 提示 -->
            <div class="details-rec-summary-tips">
                <div class="details-rec-dt dt-red">温馨提示</div>
                <div class="details-rec-dd">
                    <ol class="details-rec-tips-list">
                        <li class="details-rec-local-txt">·支持7天无理由退货(拆封后不支持)</li>
                        <li class="details-rec-local-txt">·国家药监局提示您：请正确认识化妆品功效，化妆品不能替代药品，不能治疗皮肤病等疾病。</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";

export default {
    data() {
        return {
            counter: 1
        };
    },
    props: ["productId"],
    computed: {
        ...mapState(["loginToken","userid"]),
    },
    methods: {
        ...mapMutations(["setCartCookie"]),
        mins() {
            if (this.counter <= 1) {
                return;
            } else {
                this.counter--;
            }
        },
        add() {
            if (this.counter >= 10) {
                return;
            }
            this.counter++;
        },
        backShopcar() {
            this.$api.getAddItem({
                    itemId: this.productId,
                    userId: this.userid
                    // 暂时不要传递
                    // num:this.counter
                })
                .then(res => {
                    console.log(res.data);
                    if (res.data.status === 200) {
                        this.setCartCookie(document.cookie);
                        // 加入购物车id
                        this.$router.push({
                            name: "ShopCartAdd",
                            params: this.productId
                        });
                    //     /** 登陆失败或者token失效 */
                    //     // 清楚本地和vuex中的token和用户信息
                    //     // this.setTokenActions(null);
                    //     // this.updateUsernameActions(null);
                    //     // localStorage.removeItem("loginToken");
                    //     // localStorage.removeItem("username");
                    }  else {
                        alert("加入购物车失败");
                    }
                });
        }
    }
};
</script>

<style>
.details-rec-choose-btns {
    margin-top: 10px;
    /* margin-bottom: 20px; */
    padding: 0 10px;
}
.details-rec-choose-amount {
    width: 58px;
    height: 44px;
    overflow: hidden;
    border: 1px solid #ccc;
    position: relative;
    margin-right: 10px;
    float: left;
}
.details-rec-text {
    display: block;
    width: 43px;
    height: 42px;
    line-height: 42px;
    position: absolute;
    top: 1px;
    left: 0;
    border: none;
    border: 0;
    text-align: center;
}
.details-res-btn-reduce {
    bottom: -1px;
}
.disabled {
    color: #ccc;
    cursor: not-allowed;
}
.details-rec-wrap-input a {
    display: block;
    width: 15px;
    text-align: center;
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    background: #f1f1f1;
    position: absolute;
    right: -1px;
    border: 1px solid #ccc;
}
.details-res-btn-add {
    top: -1px;
}
.details-rec-choose-btns .details-res-btn-special1 {
    background-color: #df3033;
    color: #fff;
    font-weight: 700;
}
.details-res-btn-lg {
    margin-right: 10px;
    float: left;
    height: 46px;
    line-height: 46px;
    padding: 0 26px;
    font-size: 18px;
    font-family: "microsoft yahei";
}
/* 提示 */
.details-rec-summary-tips {
    margin-bottom: 5px;
    clear: both;
    width: 100%;
    position: relative;
    top: 20px;
}
.details-rec-dt {
    float: left;
    padding-left: 10px;
    font-family: simsun;
    color: #999;
    font-size: 12px;
}

.dt-red {
    position: relative;
    left: -10px;
}
.details-rec-dd {
    margin-left: 70px;
}
.details-rec-local-txt {
    float: left;
    margin-right: 15px;
    margin-left: -15px;
    font-family: simsun;
    color: #999;
    font-size: 12px;
}
</style>

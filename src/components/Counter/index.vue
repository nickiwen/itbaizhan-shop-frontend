<template>
    <div class="counter-component">
        <div class="counter-btn" @click="mins">-</div>
        <div class="counter-show">
            <input type="text" v-model="counter" @keyup="inputHandler" />
        </div>
        <div class="counter-btn" @click="maxs">+</div>
    </div>
</template>
<script>
export default {
    name: "Counter",
    data() {
        return {
        };
    },
    computed: {
        counter: {
            get() {
                return this.$store.state.counter;
            },
            set(value) {
                if (value) {
                    this.$store.commit("ADDCOUNTER", value);
                } else {
                    this.$store.commit(
                        "ADDCOUNTER",
                        this.counterData.currentNum
                    );
                }
            }
        }
    },
    props: {
        counterData: {
            type: Object,
            required: true
        }
    },
    mounted() {
      this.$store.commit("ADDCOUNTER", this.counterData.currentNum);
      this.$store.commit("setGoodsId",this.counterData.id);
    },
    methods: {
        mins() {
            if (this.counter <= this.counterData.min) {
                return;
            }
            this.counter--;
            this.$store.commit("ADDCOUNTER", this.counter);
        },
        maxs() {
            if (this.counter >= this.counterData.max) {
                return;
            }
            this.counter++;
            this.$store.commit("ADDCOUNTER", this.counter);
        },
        inputHandler() {
            let fix;
            if (typeof this.counter === "string") {
                //把非数字转为空
                fix = Number(this.counter.replace(/\D/g, ""));
            } else {
                fix = this.counterData.min;
            }
            if (
                this.counter > this.counterData.max ||
                this.counter < this.counterData.min
            ) {
                fix = this.counterData.min;
            }
            this.counter = fix;
        }
    }
};
</script>
<style lang="less" scoped>
.counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    left: 675px;
    top: 10px;
}
.counter-show {
    float: left;
}
.counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 50px;
    outline: none;
    text-align: center;
}
.counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 15px;
    text-align: center;
    cursor: pointer;
}
</style>


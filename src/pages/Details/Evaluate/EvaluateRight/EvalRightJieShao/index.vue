<template>
    <div>
        <div class="details-eval-p-parameter">
            <div v-html="introductionData.itemDesc"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EvalRightJieShao",
    data() {
        return {
            introductionData: {}
        };
    },
    props: ["id"],
    mounted() {
        setTimeout(() => {
            this.$api
                .getSelectItemDescByItemId({
                    itemId: this.id
                })
                .then(res => {
                    console.log(res.data);
                    if (res.data.status === 200) {
                        this.introductionData = res.data.data;
                    }
                });
        }, 1000);
    }
};
</script>

<style scoped>
.details-eval-p-parameter {
    height: 171px;
    margin-top: 10px;
}
.details-eval-p-parameter-list {
    padding: 20px 0 15px;
    overflow: hidden;
}
#parameter-brand li {
    width: 50%;
    padding-left: 42px;
    float: left;
    margin-bottom: 5px;
}
.details-eval-p-parameter li {
    width: 200px;
    padding-left: 42px;
    float: left;
    margin-bottom: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.details-eval-more-par {
    padding-right: 20px;
    margin-top: -5px;
    text-align: right;
}
.details-eval-more-par a,
.details-eval-more-par sapn {
    color: #005aa0;
}

/* 图片 */
.details-eval-detail-content {
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    background: #f7f7f7;
    overflow: hidden;
}
.details-eval-detail-content-wrap {
    width: 100%;
    float: left;
    background-color: #fff;
}
#detail-video-player {
    display: block;
    margin: 0 auto;
}
.video-js {
    font-size: 14px;
    overflow: hidden;
}
.video-js {
    vertical-align: top;
    box-sizing: border-box;
    position: relative;
    padding: 0;
    line-height: 1;
    font-weight: 400;
    font-style: normal;
    font-family: Arial, Helvetica, sans-serif;
}
.detail-video-player-dimensions {
    width: 750px;
    height: 422px;
}
.detail-eval-content-item {
    width: 100%;
}
.detail-eval-content-item img {
    border: 0;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
}
</style>



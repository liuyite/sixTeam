<template>
    <div class="cmt-floor" v-if="data">
        <div class="cmt-content" @mouseenter="enter(data.level)" @mouseleave="leave(data.level)">
            <div class="cmt-info">
                <img :src="`http://127.0.0.1:1337${data.account.defaultAvatar}`" alt />
                {{data.account.nickname}}
                <i>{{data.updated_at | timer}}</i>
                <span>{{data.level}}</span>
            </div>
            <p class="cmt-message">{{data.content}}</p>
            <el-row>
                <div class="pic" v-for="(items,index1) in data.pics" :key="index1">
                    <img :src="`http://127.0.0.1:1337${items.url}`" alt />
                </div>
            </el-row>
            <div class="cmt-ctrl">
                <span to="#" v-show="isShow &&current===data.level">回复</span>
            </div>
        </div>
        <comments :data="data.parent"></comments>
    </div>
</template>

<script>
import moment from "moment";
export default {
    name: "comments",
    data() {
        return {
            isShow: false
        };
    },
    props: ["data"],
    filters: {
        timer(time) {
            return moment(time).format("YYYY-MM-DD HH:mm");
        }
    },
    methods: {
        enter(index) {
            this.isShow = true;
            this.current = index;
        },
        leave(index) {
            this.isShow = false;
            this.current = -1;
        }
    }
};
</script>

<style lang="less" scoped>
.cmt-floor {
    display: flex;
    flex-direction: column-reverse;
    background: #f9f9f9;
    border: 1px solid #ddd;
    padding: 2px;
}
.cmt-content {
    padding: 5px 10px 0;
}
.cmt-info {
    margin-bottom: 10px;
    font-size: 12px;
    color: #666;
    img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }
    i {
        color: #999;
    }
    span {
        float: right;
    }
}
.cmt-message {
    margin-top: 10px;
}
.cmt-ctrl {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #1e50a2;
    text-align: right;
    span {
        cursor: pointer;
    }
}
.pic {
    width: 92px;
    height: 92px;
    border-radius: 6px;
    overflow: hidden;
    margin-right: 5px;
    margin-top: 10px;
    padding: 5px;
    border: 1px dashed #ddd;
    img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        display: block;
    }
}
</style>
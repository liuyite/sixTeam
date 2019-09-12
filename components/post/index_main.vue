<template>
    <div class="index-main">
        <div v-for="(item,index) in content" :key="index">
            <div class="post-item" v-if="item.images.length >=3">
                <h4 class="post-title">
                    <nuxt-link
                        data-v-2372b9a8
                        :to="`/post/detail?id=${item.id}`"
                        class
                    >{{item.title}}</nuxt-link>
                </h4>
                <p class="post-desc">
                    <nuxt-link :to="`/post/detail?id=${item.id}`">{{item.summary}}</nuxt-link>
                </p>
                <el-row class="img-row">
                    <nuxt-link
                        :to="`/post/detail?id=${item.id}`"
                        v-for="(imgs,index1) in item.images"
                        :key="index1"
                    >
                        <img :src="imgs" v-show="index1<3" alt />
                    </nuxt-link>
                </el-row>
                <el-row class="post-info">
                    <div class="post-info-left">
                        <span class="addr">
                            <i class="el-icon-location-outline"></i>
                            {{item.cityName}}
                        </span>
                        <div class="post-user">
                            by
                            <nuxt-link to="#">
                                <img
                                    :src="`http://127.0.0.1:1337${item.account.defaultAvatar}`"
                                    alt
                                />
                            </nuxt-link>
                            <nuxt-link to="#">{{item.account.nickname}}</nuxt-link>
                        </div>
                        <span class="see">
                            <i class="el-icon-view"></i>
                            {{item.watch}}
                        </span>
                    </div>

                    <div class="post-info-right">{{item.like?item.like:0}}赞</div>
                </el-row>
            </div>

            <div class="post-item flexed" v-if="item.images.length <3">
                <div class="post-cover">
                    <nuxt-link :to="`/post/detail?id=${item.id}`">
                        <img :src="item.images[0]" alt />
                    </nuxt-link>
                </div>
                <div class="post-content">
                    <h4>
                        <nuxt-link :to="`/post/detail?id=${item.id}`">{{item.title}}</nuxt-link>
                    </h4>
                    <p class="post-desc">
                        <nuxt-link :to="`/post/detail?id=${item.id}`">{{item.summary}}</nuxt-link>
                    </p>
                    <el-row class="post-info">
                        <div class="post-info-left">
                            <span class="addr">
                                <i class="el-icon-location-outline"></i>
                                {{item.cityName}}
                            </span>
                            <div class="post-user">
                                by
                                <nuxt-link to="#">
                                    <img
                                        :src="`http://127.0.0.1:1337${item.account.defaultAvatar}`"
                                        alt
                                    />
                                </nuxt-link>
                                <nuxt-link to="#">{{item.account.nickname}}</nuxt-link>
                            </div>
                            <span class="see">
                                <i class="el-icon-view"></i>
                                {{item.watch}}
                            </span>
                        </div>

                        <div class="post-info-right">{{item.like?item.like:0}}赞</div>
                    </el-row>
                </div>
            </div>
        </div>
        <el-row class="footer">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageIndex"
                :page-sizes="[3, 5, 10, 15]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
            ></el-pagination>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageSize: 3, //当前每一页多少条
            pageIndex: 1, //当前在第几页
            total: 0, //总共多少条信息
            content: [], //推荐攻略内容
            urlCity: "" //获取路由的city
        };
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val;
            this.init();
        },
        handleCurrentChange(val) {
            this.pageIndex = val;
            this.init();
        },
        init() {
            let params = {};
            if (this.urlCity !== "") {
                params = {
                    _start: (this.pageIndex - 1) * this.pageSize,
                    _limit: this.pageSize,
                    city: this.urlCity
                };
            } else {
                params = {
                    _start: (this.pageIndex - 1) * this.pageSize,
                    _limit: this.pageSize
                };
            }
            this.$axios({
                url: "posts",
                params
            }).then(res => {
                this.content = res.data.data;
                console.log(res.data.data);
                this.total = res.data.total;
            });
        }
    },
    mounted() {
        this.init();
    },
    watch: {
        $route() {
            this.urlCity = this.$route.query.city;
            this.init();
        }
    }
};
</script >

<style scoped lang="less">
.card {
    // display: none;
}
.index-main {
    width: 100%;
    overflow: none;
}
.post-item {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
}
.flexed {
    display: flex;
}
.post-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 18px;
    a {
        color: inherit;
        &:hover {
            color: orange;
        }
    }
}
.post-desc {
    margin-bottom: 15px;
    line-height: 1.5;
    font-size: 14px;
    height: 63px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    a {
        color: #666;
    }
}
.img-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    a {
        display: block;
        // width: 220px;
        height: 150px;
        &:nth-child(2) {
            padding: 0 20px;
            flex: 1;
        }
        img {
            width: 220px;
            height: 100%;
        }
    }
}
.post-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
    .post-info-left {
        flex: 1;
        display: flex;
        align-items: center;
        .addr {
            margin-right: 10px;
        }
        .post-user {
            display: flex;
            align-items: center;
            margin-right: 10px;
            a {
                color: orange;
                img {
                    width: 16px;
                    height: 16px;
                    margin: 5px;
                    display: block;
                    border-radius: 50%;
                }
            }
        }
        .see {
            margin-right: 10px;
        }
        i {
            padding-right: 3px;
        }
    }

    .post-info-right {
        color: orange;
        font-size: 16px;
    }
}

.post-cover {
    width: 220px;
    height: 150px;
    margin-right: 10px;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
.post-content {
    width: 470px;
    h4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 18px;
        a {
            &:hover {
                color: orange;
            }
        }
    }
    .post-desc {
        margin-bottom: 15px;
        line-height: 1.5;
        font-size: 14px;
        height: 63px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
.footer {
    height: 32px;
    margin-top: 10px;
    width: 100%;
    .el-pagination {
        padding: 0;
    }
}
</style>
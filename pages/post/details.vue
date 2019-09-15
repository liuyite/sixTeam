<template>
    <div class="details">
        <el-container>
            <el-main class="main" justify="spance-between">
                <div class="container">
                    <!-- 面包屑 -->
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">旅游攻略</el-breadcrumb-item>
                        <el-breadcrumb-item>旅游攻略</el-breadcrumb-item>
                    </el-breadcrumb>
                    <!-- 主题 -->
                    <h1 class="title">{{postInfo.title}}</h1>
                    <div class="info">
                        <span>攻略：{{postInfo.created_at | timer}}</span>
                        <span>阅读：{{postInfo.watch}}</span>
                    </div>

                    <div class="content" v-html="postInfo.content"></div>

                    <el-row type="flex" justify="center">
                        <div class="ctrl-item">
                            <i class="iconfont icon-pinglun1"></i>
                            <p>评论({{postInfo.comments.length}})</p>
                        </div>
                        <div class="ctrl-item" @click="shoucang">
                            <i class="iconfont icon-shoucang"></i>
                            <p>收藏</p>
                        </div>
                        <div class="ctrl-item">
                            <i class="iconfont icon-fenxiang"></i>
                            <p>分享</p>
                        </div>
                        <div class="ctrl-item" @click="zan">
                            <i class="iconfont icon-zan"></i>
                            <p>点赞({{postInfo.like?postInfo.like:0}})</p>
                        </div>
                    </el-row>
                </div>
                <div class="cmt-wrapper">
                    <h4 class="cmt-title">评论</h4>
                    <div class="cmt-input">
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="说点什么吧..."
                            v-model="commentInfo.content"
                            resize="none"
                        ></el-input>
                    </div>
                    <div class="cmt-input-ctrls">
                        <div class="pct">
                            <el-upload
                                action="http://127.0.0.1:1337/upload"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove"
                                :on-success="handleSuccess"
                                name="files"
                                ref="upload"
                            >
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogFormVisible">
                                 <img :src="`http://127.0.0.1:1337${urls}`" alt style="width:100%;height:100% ;" />
                            </el-dialog>
                        </div>
                        <div class="btn">
                            <el-button type="primary" size="small" @click="submitBtn">提交</el-button>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="cmt-list">
                            <div class="cmt-item" v-for="(item,index) in cData" :key="index">
                                <div class="cmt-content">
                                    <div class="cmt-info">
                                        <img
                                            :src="`http://127.0.0.1:1337${item.account.defaultAvatar}`"
                                            alt
                                        />
                                        {{item.account.nickname}}
                                        <i>{{item.updated_at | timer}}</i>
                                        <span>{{item.level}}</span>
                                    </div>
                                    <comment :data="item.parent"></comment>
                                    <div
                                        class="cmt-new"
                                        @mouseenter="enter(index)"
                                        @mouseleave="leave(index)"
                                    >
                                        <p class="cmt-message">{{item.content}}</p>
                                        <el-row class="pic_content">
                                            <div
                                                class="pic"
                                                v-for="(items,index1) in item.pics"
                                                :key="index1"
                                                @click="imgBtn(items.url)">
                                                <img :src="`http://127.0.0.1:1337${items.url}`" alt />
                                            </div>
                                        </el-row>
                                        <div class="cmt-ctrl">
                                            <nuxt-link to="#" v-show="isShow &&current===index">回复</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 分页 -->
                        <el-row>
                            <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="pageIndex"
                                :page-sizes="[2,3,4,5]"
                                :page-size="pageSize"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total"
                            ></el-pagination>
                        </el-row>
                    </div>
                </div>
            </el-main>

            <el-aside width="280px">
                <div class="aside">
                    <h4>相关攻略</h4>
                    <nuxt-link
                        to="/"
                        style="dispaly:block"
                        v-for="(item,index) in postAsideDate"
                        :key="index"
                    >
                        <div class="post-imgText">
                            <div class="image">
                                <img :src="item.images[0]" alt />
                            </div>
                            <div class="text">
                                <h3>{{item.title}}</h3>
                                <p>{{item.created_at | timer}} 阅读 {{item.watch?item.watch:0}}</p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import moment from "moment";
import comment from "../../components/post/comment";
export default {
    components: { comment },
    data() {
        return {
            dialogFormVisible: false,
            dialogImageUrl: "",
            dialogVisible: false,
            commentInfo: {
                content: "",
                pics: [],
                post: ""
            },
            files: "",
            postInfo: {
                comments: []
            },
            cData: [],
            isShow: false,
            current: -1,
            pageSize: 2,
            pageIndex: 1,
            total: 0,
            //存储推荐文章数据
            postAsideDate: [],
            urls:''
        };
    },
    methods: {
        imgBtn(urls){
            this.dialogFormVisible = true;
            this.urls = urls;
        },
        submitBtn() {
            console.log(this.commentInfo);
            this.$axios({
                url: "comments",
                method: "post",
                data: this.commentInfo,
                headers: {
                    Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
                }
            }).then(res => {
                this.$message.success("提交成功！！！");
                this.commentInfo = {
                    content: "",
                    pics: [],
                    post: this.$route.query.id
                };
                this.$refs.upload.clearFiles();
                this.init();
            });
        },
        handleSuccess(response, file, fileList) {
            console.log(response);
            this.commentInfo.pics.push(response[0]);
            console.log(this.commentInfo);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList, 321);
            this.commentInfo.pics = this.commentInfo.pics.filter(e => {
                return e.name !== file.name;
            });
            console.log(this.commentInfo);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        shoucang() {
            this.$axios({
                url: "/posts/star",
                params: { id: this.$route.query.id },
                headers: {
                    Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
                }
            })
                .then(res => {
                    this.$message.success(res.data.message);
                })
                .catch(() => {});
        },
        zan() {
            this.$axios({
                url: "/posts/like",
                params: { id: this.$route.query.id },
                headers: {
                    Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
                }
            })
                .then(res => {
                    this.$message.success(res.data.message);
                    this.postInfo.like += 1;
                })
                .catch(() => {});
        },
        init() {
            this.$axios({
                url: "/posts/comments",
                params: {
                    post: this.$route.query.id,
                    _start: (this.pageIndex - 1) * this.pageSize,
                    _limit: this.pageSize
                }
            }).then(res => {
                this.cData = res.data.data;
                this.total = res.data.total;
                console.log(this.cData);
            });
        },
        enter(index) {
            this.isShow = true;
            this.current = index;
        },
        leave(index) {
            this.isShow = false;
            this.current = -1;
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.init();
        },
        handleCurrentChange(val) {
            this.pageIndex = val;
            this.init();
        }
    },
    mounted() {
        this.commentInfo.post = this.$route.query.id;
        setTimeout(() => {
            this.init();
            this.$axios({
                url: "/posts",
                params: {
                    id: this.$route.query.id
                }
            }).then(res => {
                this.postInfo = res.data.data[0];
                console.log(this.postInfo);
            });

            //推荐文章
            this.$axios({
                url: "/posts/recommend",
                params: { id: this.$route.query.id }
            }).then(res => {
                this.postAsideDate = res.data.data;
            });
        }, 20);
    },
    filters: {
        timer(time) {
            return moment(time).format("YYYY-MM-DD HH:mm");
        }
    }
};
</script>

<style lang="less" scoped>
.pic_content {
    display: flex;
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
.details {
    width: 1000px;
    margin: 0 auto;
}
.el-container {
    padding: 20px 0;
}
.main {
    width: 700px;
    margin-right: 20px;
    padding: 0;
    .container {
        .title {
            // width: 700px;
            padding: 20px 0;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
            font-size: 32px;
        }
    }
}
.info {
    display: block;
    color: #999;
    text-align: right;
    padding: 20px;
    font-size: 16px;
    &:first-child {
        margin-right: 20px;
    }
}
.content {
    // font-size:18px;
    text-align: left;
    // margin-top:25px;
    // margin-bottom:25px;
    margin: 0 auto;
    width: 700px;
    /deep/ img {
        width: 100%;
        height: 100%;
        margin: 10px 0;
        // &:nth-child(2){
        //   width: 16px;
        // }
    }
    /deep/ img[src*=".png"] {
        width: 56px;
    }
}

.el-aside {
    background-color: #fff;
    color: #333;
    margin-top: 2px;
    // text-align: center;
    // line-height: 200px;
}

.aside {
    width: 280px;
    h4 {
        font-weight: 400;
        font-size: 18px;
        padding: 20px 0;
        border-bottom: 1px solid #ddd;
    }
    .post-imgText {
        border-bottom: 1px solid #ddd;
        display: flex;
        padding: 20px 0;
        .text {
            width: 170px;
            position: relative;
            p {
                position: absolute;
                bottom: 0;
                left: 0;
                font-size: 12px;
                color: #999;
            }
            h3 {
                line-height: 1.4em;
                height: 2.8em;
                overflow: hidden;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                font-weight: normal;
                font-size: 16px;
            }
        }
        .image {
            width: 100px;
            height: 80px;
            flex-shrink: 0;
            overflow: hidden;
            margin-right: 10px;
            background-color: #ddd;
            border: 1px solid #ccc;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
.ctrl-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    margin-top: 5px;
    color: #999;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    i {
        display: block;
        font-size: 28px;
        color: orange;
    }
}
.cmt-list {
    // height: 600px;
    border: 1px solid #ddd;
    .cmt-item {
        border-bottom: 1px dashed #ddd;
        padding: 20px 20px 5px;
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
        .cmt-new {
            .cmt-message {
                margin-top: 10px;
            }
            .cmt-ctrl {
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                color: #1e50a2;
                text-align: right;
            }
        }
    }
}
.cmt-title {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
}
.cmt-input {
    margin-bottom: 10px;
}
.pct {
    /deep/.el-upload--picture-card {
        width: 100px;
        height: 100px;
        line-height: 100px;
        margin-bottom: 12px;
    }
}
.cmt-input-ctrls {
    display: flex;
    justify-content: space-between;
    margin: 0 0 30px 0;
}
/deep/ .el-upload-list__item-thumbnail {
    width: 100px;
    height: 100px;
}
/deep/ .el-upload-list__item {
    width: 100px;
    height: 100px;
}
</style>

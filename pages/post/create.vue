<template>
    <div class="contianer">
        <el-row type="flex" justify="space-between">
            <div class="main">
                <h2>发表新攻略</h2>
                <p class="create-desc">分享你的个人游记，让更多人看到</p>
                <el-form class="main-content">
                    <el-form-item class="content-form">
                        <el-input placeholder="请输入标题" class="content-title" v-model="form.title"></el-input>
                    </el-form-item>
                    <!-- 富文本框 -->
                    <el-form-item>
                        <div class="conent-editor">
                            <VueEditor :config="config" class="editorText" ref="vueEditor" />
                        </div>
                    </el-form-item>
                    <!-- 选择城市 -->
                    <el-form-item label="选择城市">
                        <el-autocomplete
                            :fetch-suggestions="querySearchAsync"
                            v-model="form.cityData"
                            @select="handleSelect"
                        ></el-autocomplete>
                    </el-form-item>
                </el-form>
                <!-- 发布或保存到草稿箱 -->
                <div class="create-button">
                    <!-- 按钮 -->
                    <el-button type="primary" size="small" @click="sendAddText">发布</el-button>
                    <span class="submit-side">
                        或者
                        <nuxt-link to="#" @click.native="handleSaveDratf">保存到草稿箱</nuxt-link>
                    </span>
                </div>
            </div>
            <!-- 草稿箱 -->
            <createDraft @setDataList="setDataList"></createDraft>
        </el-row>
    </div>
</template>
<script>
import createDraft from "@/components/post/createDraft.vue";

import "quill/dist/quill.snow.css";
let VueEditor;

if (process.browser) {
    VueEditor = require("vue-word-editor").default;
}
export default {
    data() {
        return {
            form: {
                // 标题
                title: "",
                // 富文本框内的内容
                content: "",
                // 城市
                cityData: ""
            },
            dataArr: [],
            // 存储后台返回城市的数组
            departData: [],
            config: {
                modules: {
                    // 工具栏
                    toolbar: [
                        ["bold", "italic", "underline", "strike"], // toggled buttons
                        [{ header: 1 }, { header: 2 }], // custom button values
                        ["image", "video"]
                    ]
                },
                // 主题
                theme: "snow",
                uploadImage: {
                    url: "http://157.122.54.189:9095/upload",
                    name: "files",
                    uploadBefore(file) {
                        return true;
                    },
                    uploadProgress(res) {},
                    uploadSuccess(res, insert) {
                        insert("http://157.122.54.189:9095" + res.data[0].url);
                    },
                    uploadError() {},
                    showProgress: false
                },

                uploadVideo: {
                    //url: "http://157.122.54.189:9095/upload",
                    url: "http://157.122.54.189:9095/upload",
                    name: "files",
                    uploadBefore(file) {
                        return true;
                    },
                    uploadProgress(res) {},
                    uploadSuccess(res, insert) {
                        insert("http://157.122.54.189:9095" + res.data[0].url);
                    },
                    uploadError() {}
                }
            }
        };
    },
    components: {
        VueEditor,
        createDraft
    },
    methods: {
        // 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它 Function(queryString, callback)
        querySearchAsync(value, cb) {
            // 如果输入框内没有值，则不显示下拉框
            if (!value) {
                cb([]);
                return;
            }
            this.$axios({
                url: "/airs/city",
                params: {
                    name: value
                }
            }).then(res => {

                const { data } = res.data;
                const newData = [];
                data.forEach(e => {
                    e.value = e.name;
                    newData.push(e);
                });

                this.departData = newData;
                // 显示在下来列表中
                cb(newData);
            });
        },

        // select 选中 input 中的文字
        handleSelect(item) {
            item = this.form.cityData;
        },

        //点击保存到草稿箱
        handleSaveDratf() {
            const { title } = this.form;

            // 获取富文本框内的值，并赋值给form对象里面的content
            this.form.content = this.$refs.vueEditor.editor.root.innerHTML;

            // 标题不能为空
            if (!title) {
                this.$message.error("标题不能为空");
                return;
            }

            // 获取实时时间
            this.form.date = new Date();

            // 调用store的方法，把this.form存到store中
            this.$store.commit("post/setAddText", this.form);

            // 点击保存草稿箱之后，重置标题和城市
            this.form = {};

            // 点击保存草稿箱之后，重置文本框的内容
            this.$refs.vueEditor.editor.root.innerHTML = "";
        },

        // 接收子组件发射事件的值,然后渲染到页面
        setDataList(arr) {
            this.$set(this.form, "title", arr.title);
            this.$refs.vueEditor.editor.root.innerHTML = arr.content;
            this.$set(this.form, "cityData", arr.cityData);
        },

        // 发布文章
        sendAddText() {
            // 结构出所需要的值
            const { cityData, title } = this.form;

            // 获取富文本框内的值，并赋值给form对象里面的content
            this.form.content = this.$refs.vueEditor.editor.root.innerHTML;

            // 标题不能为空
            if (!title) {
                this.$message.error("标题不能为空");
                return;
            }

            // 内容不能为空
            if (!this.form.content) {
                this.$message.error("内容不能为空");
                return false;
            }

            // 城市不能为空
            if (!cityData) {
                this.$message.error("城市不能为空");
                return;
            }

            this.$axios({
                url: "/posts",
                method: "post",
                data: {
                    content: this.form.content,
                    title: this.form.title,
                    city: this.form.cityData
                },
                headers: {
                    Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
                }
            }).then(res => {
                if (res.status === 200) {
                    // 提示新增成功
                    this.$message.success("新增成功");
                    // 点击保存草稿箱之后，重置标题和城市
                    this.form = {};

                    // 点击保存草稿箱之后，重置文本框的内容
                    this.$refs.vueEditor.editor.root.innerHTML = "";
                    // 发布之后，跳转到攻略首页
                    this.$router.push("/post");
                }
            });
        }
    }
};
</script>
<style lang="less" scoped>
.contianer {
    width: 1000px;
    margin: 20px auto;

    .main {
        h2 {
            font-weight: normal;
            font-size: 22px;
            margin-bottom: 10px;
        }

        p {
            font-size: 12px;
            color: #999;
            margin-bottom: 10px;
        }
    }
}
.main-content {
    width: 750px;

    .content-form {
        margin-bottom: 20px;

        .content-title {
            width: 100%;
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;
        }
    }
}
.editorText {
    height: 330px;
    margin-bottom: 50px;
}
.submit-side {
    margin-left: 10px;
    font-size: 14px;
    > a {
        color: orange;
    }
}
</style>
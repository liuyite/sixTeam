<template>
  <div class="contianer">
    <el-row type="flex" justify="space-between">
      <div class="main">
        <h2>发表新攻略</h2>
        <p class="create-desc">分享你的个人游记，让更多人看到</p>
        <el-form class="main-content">
          <el-form-item class="content-form">
            <el-input placeholder="请输入标题" class="content-title"></el-input>
          </el-form-item>
          <!-- 富文本框 -->
          <el-form-item>
            <div class="conent-editor">
              <VueEditor :config="config"  class="editorText"/>
            </div>
          </el-form-item>
          <!-- 选择城市 -->
          <el-form-item label="选择城市">
            <el-autocomplete
            :fetch-suggestions="querySearchAsync"
            @select="handleSelect"
            ></el-autocomplete>
          </el-form-item>
        </el-form>
        <!-- 发布或保存到草稿箱 -->
        <div class="create-button">
            <!-- 按钮 -->
            <el-button type="primary" size="small">发布</el-button>
            <span class="submit-side">或者 
                <nuxt-link to="#">保存到草稿箱</nuxt-link>
            </span>
        </div>
      </div>
      <div class="draft">
          <div class="draft-box">
              <h4>草稿箱(1)</h4>
              <div class="draft-list">
                  <div class="draft-item">
                      <div class="draft-post-title">
                          熊大
                          <span><i class="el-icon-edit"></i></span>
                          <p>2019-09-12</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </el-row>
  </div>
</template>
<script>
import "quill/dist/quill.snow.css";
let VueEditor;

if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}
export default {
  data() {
    return {
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
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {},
          showProgress: false
        },

        uploadVideo: {
          //url: "http://157.122.54.189:9095/upload",
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {}
        }
      }
    };
  },
  components: {
    VueEditor
  },
  methods:{
      // 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它 Function(queryString, callback)
      querySearchAsync(queryString, cb){},

      // select 选中 input 中的文字
      handleSelect(item) {
        console.log(item);
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

.draft {
    width: 200px;
    .draft-box {
        border: 1px #ddd solid;
        padding: 10px;

        h4 {
            margin-bottom: 10px;
            font-weight: normal;
            color:#666;
        }
    }
}

.draft-item {
    margin-bottom: 10px;
    font-size: 14px;

    .draft-post-title {
        cursor: pointer;

        p {
             color:#999;
        }
    }
}
</style>
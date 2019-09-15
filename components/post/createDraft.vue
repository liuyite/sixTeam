<template>
  <div class="draft">
    <div class="draft-box">
      <h4>草稿箱({{ good }})</h4>
      <div class="draft-list">
        <div class="draft-item" v-for="(item,index) in arrInfo" :key="index">
          <div class="draft-post-title">
            <div @click="backText(index)">
            {{ item.title }}
            <span>
              <i class="el-icon-edit"></i>
                <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              size="mini"
              @click="delDraft(index)"
              class="delbtn"
            ></el-button>
            </span>
            </div>
          
          </div>
          <p>{{ item.date | timer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      addForm: {
        title: "",
        content: "",
        cityData: ""
      },
      arrInfo: [{}],
      good: 0
    };
  },
  watch: {
    "$store.state.post.draft"() {
      const arrData = this.$store.state.post.draft;
      this.arrInfo = arrData;
      this.good = this.arrInfo.length;
    }
  },
  mounted() {
    setTimeout(() => {
      const arrData = this.$store.state.post.draft;
      this.arrInfo = arrData;
    }, 20);
  },
  filters: {
    timer(time) {
      return moment(time).format("YYYY-MM-DD");
    }
  },
  methods: {
    delDraft(index) {
    const arr = [...this.$store.state.post.draft]
    // console.log(arr)
    arr.splice(index,1)
    this.$store.commit('post/setDraft',arr)
    // console.log(arr)
    },
    backText(index) {
        const one = this.$store.state.post.draft;
        // console.log(one)
        this.$emit('setDataList',one[index])
    }
  }
};
</script>
<style lang="less" scoped>
.draft {
  width: 200px;
  .draft-box {
    border: 1px #ddd solid;
    padding: 10px;

    h4 {
      margin-bottom: 10px;
      font-weight: normal;
      color: #666;
    }
  }
}

.draft-item {
  margin-bottom: 10px;
  font-size: 14px;

  .draft-post-title {
    cursor: pointer;

    p {
      color: #999;
    }
  }
}
.delbtn {
  float: right;
}
</style>
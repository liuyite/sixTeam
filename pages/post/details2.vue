<template>
  <div class="details2">
    <el-container>
      <el-main class="main" justify="spance-between">
        <div class="container">
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">旅游攻略</el-breadcrumb-item>
            <el-breadcrumb-item>旅游攻略</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 主题 -->
          <h1 class="title">
            <nuxt-link to="#">远东行：用好奇心打量这座城 —— 最值得收藏的海参崴出行攻略</nuxt-link>
          </h1>
          <div class="info">
            <span>攻略：2019-05-22 12:59</span>
            <span>阅读：1110</span>
          </div>
          <div class="content">
            <p>
              <span style="color: rgb(68, 68, 68);">想象一下一个距离&nbsp;</span>
              <a
                href="https://www.mafengwo.cn/travel-scenic-spot/mafengwo/10065.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >北京</a>
              <span style="color: rgb(68, 68, 68);">&nbsp;只有2.5小时飞行距离的城市：身处&nbsp;</span>
              <a
                href="https://www.mafengwo.cn/travel-scenic-spot/mafengwo/52314.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >亚洲</a>
              <span
                style="color: rgb(68, 68, 68);"
              >&nbsp;却能感受到十足的欧陆风情——欧式建筑和街道，金发碧眼的路人，正宗的西餐外加只有国内一半售价的帝王蟹可以敞开吃——更难能可贵的是，这里对国人（实质）免签，有直飞航班，低廉的物价，且尚未有太多的游客涉足还保留着原汁原味的传统风情！</span>
            </p>
            <p>
              <span style="color: rgb(68, 68, 68);">
                <span class="ql-cursor"></span>
              </span>
            </p>
            <p>
              <img
                src="https://p3-q.mafengwo.net/s13/M00/41/C4/wKgEaVyaOs2AA9IKAAj8Lg2YzaU64.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
              />
            </p>"
          </div>
        </div>
      </el-main>

      <el-aside width="280px">
        <div class="aside">
          <h4>相关攻略</h4>
          <nuxt-link to="/" style="dispaly:block">
            <div class="post-imgText">
              <div class="image">
                <img
                  src="http://157.122.54.189:9095/uploads/da193301bd7c48b099725b0c75b8429b.jpg"
                  alt
                />
              </div>
              <div class="text">
                <h3>北京</h3>
                <p>2019-09-12 9:13 阅读 1</p>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/" style="dispaly:block">
            <div class="post-imgText">
              <div class="image">
                <img
                  src="http://157.122.54.189:9095/uploads/da193301bd7c48b099725b0c75b8429b.jpg"
                  alt
                />
              </div>
              <div class="text">
                <h3>北京</h3>
                <p>2019-09-12 9:13 阅读 1</p>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/" style="dispaly:block">
            <div class="post-imgText">
              <div class="image">
                <img
                  src="http://157.122.54.189:9095/uploads/da193301bd7c48b099725b0c75b8429b.jpg"
                  alt
                />
              </div>
              <div class="text">
                <h3>北京</h3>
                <p>2019-09-12 9:13 阅读 1</p>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/" style="dispaly:block">
            <div class="post-imgText">
              <div class="image">
                <img
                  src="http://157.122.54.189:9095/uploads/da193301bd7c48b099725b0c75b8429b.jpg"
                  alt
                />
              </div>
              <div class="text">
                <h3>北京</h3>
                <p>2019-09-12 9:13 阅读 1</p>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/" style="dispaly:block">
            <div class="post-imgText">
              <div class="image">
                <img
                  src="http://157.122.54.189:9095/uploads/da193301bd7c48b099725b0c75b8429b.jpg"
                  alt
                />
              </div>
              <div class="text">
                <h3>北京</h3>
                <p>2019-09-12 9:13 阅读 1</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-container {
  width: 1000px;
  margin: 0 auto;
}
.main {
  width: 700px;
  padding: 20px 0;
  margin-right: 20px;
  .container {
    .title {
      width: 700px;
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
  text-align: left;
  margin: 0 auto;
  width: 700px;
  img {
    width: 100%;
    height: 100%;
    margin: 10px 0;
  }
}

.el-aside {
  background-color: #fff;
  color: #333;
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
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

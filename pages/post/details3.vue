<template>
  <div class="details3">
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
            <nuxt-link to="#">这里是成都！一座来了就不想走的城市～</nuxt-link>
          </h1>
          <div class="info">
            <span>攻略：2019-05-22 1:04</span>
            <span>阅读：840</span>
          </div>

          <div class="content">
            <p class="ql-align-justify">时间：2019年4月30日～2019年5月4日</p>
            <p class="ql-align-justify">人物：我们一家三口</p>
            <p class="ql-align-justify">
              地点：&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10035.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >成都</a>&nbsp;
            </p>
            <p class="ql-align-justify">设备：7M2+FE55F1.8</p>
            <p class="ql-align-justify">行李：一个28寸行李箱</p>
            <p class="ql-align-justify">熊娃现在是小学二年级下学期了，今年她听完了凯叔三国演义，最喜欢刘备的蜀国，会嫌弃阿斗太笨是被摔傻了……</p>
            <p class="ql-align-justify">
              于是在五一假期从1天变成4天的之后，我订了来回&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10035.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >成都</a>&nbsp;的机票，决定带她来看一看刘备的蜀国～
            </p>
            <p class="ql-align-justify">
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/12703.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >四川</a>&nbsp;很大，可以玩的地方很多，但是只有4天，开始还安排了去&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10323.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >青城山</a>&nbsp;和&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10163.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >都江堰</a>&nbsp;，后面决定还是市区走走吃吃就好了～
            </p>
            <p class="ql-align-justify">出发前行程</p>
            <p>
              <a
                href="http://www.mafengwo.cn/photo/10035/scenery_12598030/462592160.html"
                target="_blank"
                style="color: rgb(255, 157, 0); background-color: rgb(252, 242, 220);"
              >
                <img
                  src="http://n4-q.mafengwo.net/s13/M00/B7/94/wKgEaVzLgBeAAEP6AAQP-fApUus99.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
                />
              </a>
            </p>
            <p class="ql-align-justify">行前准备：</p>
            <p class="ql-align-justify">1、机票</p>
            <p class="ql-align-justify">机票是深航里程兑换，没太多可以说的。</p>
            <p class="ql-align-justify">2、酒店</p>
            <p class="ql-align-justify">
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10035.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >成都</a>&nbsp;的酒店很多，各种价位总能找到你心水的。我们这次主要游玩的是市区，除了最远的大熊猫基地要十几公里外，其他都集中在二环以内。我们出行主要的交通工具是滴滴，所以考虑要找个在这些比较中心的地方住会比较方便。一开始想住在春熙路，方便逛，看了好几家网红酒店。后面我哥跟我说飞猪F2每年有两次住宿权益让我关注下，那天正好周四，明宇还有五折，最后就选了明宇旗下的尚雅酒店订了下来，酒店位置很好，距离各大景区都在三四公里内，订下来尚雅客房才354一晚，性价比超高！
            </p>
            <p
              class="ql-align-justify"
            >不过飞猪只能定两晚，剩下的一晚也是支付宝活动，缤客288返现88，订了一晚最低价的旅行者客房426.87，再返现88，起来是338.87，然后入住的时候不出意外滴升级到和前两晚一样的房型了，省得换房！住下来感觉性价比超高的！</p>
            <p class="ql-align-justify">最后一晚，因为4号是早上八点多的飞机，我们不愿意早起，于是就跑机场旁边去住了，也是三百多～</p>
            <p class="ql-align-justify">3、门票</p>
            <p class="ql-align-justify">
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10035.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >成都</a>&nbsp;的景点门票都不贵，线上线下也都很方便，而且几乎没便宜多少，有的还会更贵，&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/63538.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >比如</a>&nbsp;武侯祠门票50，线上卖到了五十几，还要门口排队取票，我果断退款了线上票，门口直接买了，还快了不少。更有大熊猫繁育研究基地是打车路上提前买的，结果后面大门口的时候，电子票爆满，实体票&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/18875.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >通道</a>&nbsp;一个人都没有，我内心是崩溃的～
            </p>
            <p class="ql-align-justify">所以真心不着急线上买，到时候为了省线上几块钱，多排半个小时您觉着划算吗？</p>
            <p class="ql-align-justify">唯一行前定下的就是芙蓉国粹的票，飞猪上用里程抵扣后3张甲等票509.99，位置超好！这个可以有！</p>
            <p class="ql-align-justify">PS：不过线不线上买还是具体看地方，杜甫草堂的时候，线上还是有优势的～只能说具体看了</p>
            <p class="ql-align-justify">4、保险</p>
            <p class="ql-align-justify">依然是买个保险傍身，只是国内游没太多要求，随意买就行了～</p>
            <p class="ql-align-justify">5、主要用用到的APP</p>
            <p class="ql-align-justify">飞猪、携程、大众点评、百度地图、滴滴</p>
            <p
              class="ql-align-justify"
            >PS：我们比较懒，懒的走，地铁虽然方便但是有一种叫走死在到地铁站的路上，所以一般国内城市出行我都选尽量近的住宿靠滴滴，实在需要地铁的城市选择住地铁站附近～这次团了两个滴滴五一的套餐，正好覆盖了五一出行的四天</p>
            <h2>第一天 4.30 我们出发啦！宽窄巷子</h2>
            <p class="ql-align-justify">你</p>
            <p>
              <a
                href="http://www.mafengwo.cn/photo/10035/scenery_12598030/463087188.html"
                target="_blank"
                style="color: rgb(255, 157, 0); background-color: rgb(252, 242, 220);"
              >
                <img
                  src="http://b3-q.mafengwo.net/s13/M00/FF/47/wKgEaVzMTOCAHX9_AAnidFWU9K466.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
                />
              </a>
            </p>
            <p>
              <a
                href="http://www.mafengwo.cn/poi/5306906.html"
                target="_blank"
                style="color: rgb(153, 153, 153); background-color: transparent;"
              >泉州晋江机场</a>
            </p>
            <p class="ql-align-justify">
              我们是下午一点半的飞机，于是给熊娃请了假一放学就赶飞机去了。从&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/11246.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >泉州</a>&nbsp;到&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10035.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >成都</a>&nbsp;要三个小时，所以到&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10035.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >成都</a>&nbsp;已然饭点了。
            </p>
            <p class="ql-align-justify">
              本来想好了第一餐是想吃&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10035.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >成都</a>&nbsp;吃客的，于是下了飞机就在手机上排了号，结果30那天大堵车平时二十分钟能到的酒店活生生走了四五十分钟，而排号也在我们快到酒店前过号了。
            </p>
            <p class="ql-align-justify">酒店位置不错，除了宽窄巷子，其他景点都在二十分钟车程以内，这样方便我们回酒店午休～</p>
            <p class="ql-align-justify">带孩子出门吃饭和睡觉是最重要的</p>
            <p>
              <a
                href="http://www.mafengwo.cn/photo/10035/scenery_12598030/463090023.html"
                target="_blank"
                style="color: rgb(255, 157, 0); background-color: rgb(252, 242, 220);"
              >
                <img
                  src="http://p4-q.mafengwo.net/s13/M00/02/39/wKgEaVzMTgKALFi5AAaKsyezLBE34.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
                />
              </a>
            </p>
            <p>
              <a
                href="http://www.mafengwo.cn/poi/2629820.html"
                target="_blank"
                style="color: rgb(153, 153, 153); background-color: transparent;"
              >成都明宇尚雅饭店</a>
            </p>
            <p
              class="ql-align-justify"
            >在酒店放下行李，就准备到宽窄巷子吃饭，结果很尴尬的事发生了，竟然叫不到车。最后只能门口扫了两辆摩拜骑过去了，还好也不远，骑车宽窄巷子二十几分钟。</p>
            <p>
              <a
                href="http://www.mafengwo.cn/photo/10035/scenery_12598030/463090042.html"
                target="_blank"
                style="color: rgb(255, 157, 0); background-color: rgb(252, 242, 220);"
              >
                <img
                  src="http://n2-q.mafengwo.net/s13/M00/02/3E/wKgEaVzMTgOAeSLFAAha5pnV_4A12.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
                />
              </a>
            </p>
            <p>
              <a
                href="http://www.mafengwo.cn/poi/87950.html"
                target="_blank"
                style="color: rgb(153, 153, 153); background-color: transparent;"
              >宽窄巷子景区</a>
            </p>
            <p class="ql-align-justify">
              宽窄巷子分为宽巷子（巷子比较宽），窄巷子（巷子比较窄），井巷子（巷子里有口井），是清朝旗人的居住地，所以和&nbsp;
              <a
                href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10065.html"
                target="_blank"
                style="color: rgb(77, 77, 77);"
              >北京</a>&nbsp;的巷子文化有异曲同工之妙。现在的宽窄巷子多为翻建的建筑，里面遍布了不少有意思的店铺，如果人不多，不赶时间可以好好逛逛。我们主要走了窄巷子，人潮那个汹涌，所以没有时间慢慢逛。宽巷子和井巷子也稍微逛了一下，好像还是窄巷子人最多。
            </p>
            <p>
              <br />
            </p>
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

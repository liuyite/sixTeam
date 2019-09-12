<template>
  <!-- 主体内容 -->
  <div class="area-main">
    <!-- 左边选项 -->
    <el-row type="flex" justify class="option-row">
      <el-col :span="14">
        <!-- 区域 -->
        <el-row type="flex" justify class="Area">
          <el-col :span="3">
            区域
            <i class="el-icon-location"></i>
            :
          </el-col>
          <el-col :span="21">
            <nuxt-link to="#" class="scenics-box">全部</nuxt-link>
            <nuxt-link to="#">镇兴路沿线</nuxt-link>
            <nuxt-link to="#">视觉艺术学院</nuxt-link>
            <nuxt-link to="#">大成名店</nuxt-link>
            <nuxt-link to="#">南京西站</nuxt-link>
            <nuxt-link to="#">铜山镇</nuxt-link>
            <nuxt-link to="#">大桥南路</nuxt-link>
            <nuxt-link to="#">宝塔路沿线</nuxt-link>
            <nuxt-link to="#">宝塔路/万辰苏果</nuxt-link>
            <nuxt-link to="#">珠江路沿线</nuxt-link>
            <nuxt-link to="#">华侨城</nuxt-link>
          </el-col>
        </el-row>

        <!-- 攻略 -->
        <el-row type="flex" justify class="Strategy">
          <el-col :span="3">
            攻略
            <i class="el-icon-thumb"></i>
            :
          </el-col>
          <el-col :span="21">
            <p
              class="Strategy-text"
            >北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</p>
          </el-col>
        </el-row>

        <!-- 均价 -->
        <el-row type="flex" justify class="Average">
          <el-col :span="3">
            均价
            <el-tooltip
              class="item"
              effect="dark"
              content="等级均价由平日价格计算得出，节假日价格会有上浮。"
              placement="top-start"
            >
              <i class="el-icon-warning"></i>
              <!-- <el-button>上左</el-button> -->
            </el-tooltip>:
          </el-col>
          <el-col :span="21">
            <!-- 评分 -->
            <el-row type="flex" justify>
              <el-col :span="6">
                <i class="el-icon-delete"></i>
                <i class="el-icon-delete"></i>
                <i class="el-icon-delete"></i>
                <span>¥332</span>
              </el-col>
              <el-col :span="6">
                <i class="el-icon-delete"></i>
                <i class="el-icon-delete"></i>
                <i class="el-icon-delete"></i>
                <span>¥332</span>
              </el-col>
              <el-col :span="6">
                <i class="el-icon-delete"></i>
                <i class="el-icon-delete"></i>
                <i class="el-icon-delete"></i>
                <span>¥332</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>

      <!-- 右边地图 -->
      <el-col :span="10">
        <!-- 插入地图 -->
        <div id="container"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  mounted() {
    // 等待下面url加载完毕之后再执行
    window.onLoad = function() {
      // 创建地图， container是容器的id
      var map = new AMap.Map("container", {
        zoom: 13, //级别
        center: [113.75, 23.04] //中心点坐标
      });

      // 创建一个 Marker 实例：
      var marker1 = new AMap.Marker({
        // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        position: new AMap.LngLat(118.8718107, 31.32846821),
        title: "xx酒店",
        content: `<div style="width:20px; height:20px; border-radius: 50%; background:red; color:#fff; line-height:20px; text-align:center;">1</div>`
      });
      var marker2 = new AMap.Marker({
        // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        position: new AMap.LngLat(118.92251, 31.75561),
        title: "xx酒店"
      });
      // 将创建的点标记添加到已有的地图实例：
      map.add([marker1, marker2]);

      //实时路况图层
      var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
      });
      map.add(trafficLayer); //添加图层到地图
    };

    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=ea43afc6e5a6cd630e4b928287ef73fc&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style lang='less' scoped>
// 主体内容
.area-main {
  width: 1000px;
  margin: 0 auto;
  //ROW样式
  .option-row {
    margin-bottom: 20px;
    color: #666;
    font-size: 14px;
  }
  // 区域
  .Area {
    margin-top: 20px;
    color: #666;
    font-size: 14px;
    //全部
    .scenics-box {
      background: #eee;
      cursor: auto;
      text-decoration: none;
      color: #666;
      font-size: 14px;
    }
  }
  // 攻略
  .Strategy {
    margin-top: 20px;
    color: #666;
    font-size: 14px;
  }
  //均价
  .Average {
    margin-top: 20px;
    color: #666;
    font-size: 14px;
  }
}
.el-tooltip__popper .popper__arrow,
.el-tooltip__popper .popper__arrow::after {
  border-style: solid;
}
// 地图组件
#container {
  width: 420px;
  height: 260px;
}
</style>
<template>
    <div class="container">
        <!-- 面包屑 -->
        <div class="nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/hotel?city=74' }">酒店</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/hotel?city=74' }">南京酒店</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item,index) in hotelData" :key="index">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 酒店名称和地址 -->
        <div class="main_header" v-for="(item,index) in hotelData" :key="index">
            <div class="main_title">
                <h2>
                    {{item.name}}
                    <span v-for="(e,i) in item.hotellevel.level" :key="i">
                        <i class="iconfont iconhuangguan item" v-if="(i>=0)" style="color:#f90"></i>
                    </span>
                </h2>
            </div>
            <div class="spell">
                <span>{{item.alias}}</span>
            </div>
            <div class="address">
                <i class="el-icon-location"></i>
                <span>{{item.address}}</span>
            </div>
        </div>

        <!-- 酒店图片 -->
        <div class="main_photo clearfix">
            <div class="main_photo_left">
                <img :src="current" alt />
            </div>
            <div class="main_photo_right clearfix">
                <div
                    class="pto"
                    v-for="(item,index) in photo"
                    :key="index"
                    @click="handleImg(item)"
                >
                    <a href="javascript:;">
                        <img :src="item.img" alt />
                    </a>
                </div>
            </div>
        </div>

        <!-- 酒店相关价格 -->
        <div class="main_price">
            <el-table :data="hotelPrice" style="width: 100%" @row-click="openDetails">
                <el-table-column prop="name" label="价格来源" width="420" class="com"></el-table-column>
                <el-table-column prop="bestType" label="低价房型" width="420" class="com"></el-table-column>
                <el-table-column prop="price" label="最低价格/每晚" class="com"></el-table-column>
            </el-table>
        </div>

        <!-- 地图 -->
        <div class="map clearfix">
            <div id="container" class="map_detail"></div>
            <!-- 地图具体位置 -->
            <div class="location">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="风景" name="first" class="fengjing">
                        <div class="view com" @mouseover="view(1)">
                            <span>高淳老街</span>
                            <span>0.12公里</span>
                        </div>
                        <div class="view com" @mouseenter="view(2)">
                            <span>红太阳广场</span>
                            <span>0.16公里</span>
                        </div>
                        <div class="view com" @mouseenter="view(3)">
                            <span>甘霖广场</span>
                            <span>0.34公里</span>
                        </div>
                        <div class="view com" @mouseenter="view(4)">
                            <span>跬步居</span>
                            <span>0.31公里</span>
                        </div>
                        <div class="view com" @mouseenter="view(0)">
                            <span>凤岭公园</span>
                            <span>0.14公里</span>
                        </div>
                        <div class="view com" @mouseenter="view(5)">
                            <span>红宝丽广场</span>
                            <span>0.42公里</span>
                        </div>
                        <div class="view com" @mouseenter="view(6)">
                            <span>人民广场</span>
                            <span>0.22公里</span>
                        </div>
                        <div class="view com" @mouseenter="view(7)">
                            <span>高淳婚礼文化广场</span>
                            <span>0.13公里</span>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="交通" name="second">
                        <div class="traffic com">
                            <span>甘霖路口(公交站)</span>
                            <span>0.03公里</span>
                        </div>
                        <div class="traffic com">
                            <span>凤岭公园(公交站)</span>
                            <span>0.22公里</span>
                        </div>
                        <div class="traffic com">
                            <span>停车场(镇兴大厦西南)</span>
                            <span>0.14公里</span>
                        </div>
                        <div class="traffic com">
                            <span>镇兴大厦停车场</span>
                            <span>0.34公里</span>
                        </div>
                        <div class="traffic com">
                            <span>高淳(地铁站)</span>
                            <span>0.12公里</span>
                        </div>
                        <div class="traffic com">
                            <span>停车场(镇兴大厦西)</span>
                            <span>0.12公里</span>
                        </div>
                        <div class="traffic com">
                            <span>怡城花园(公交站)</span>
                            <span>0.45公里</span>
                        </div>
                        <div class="traffic com">
                            <span>停车场(甘霖路)</span>
                            <span>0.78公里</span>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <!-- 酒店信息 -->
        <div class="main_info">
            <div class="base_info el-row common">
                <div class="base_info_left el-col el-col-4">基本信息</div>
                <div class="base_info_right el-col el-col-20">
                    <div class="enterTime miu">入住时间:14:00之后</div>
                    <div class="leaveTime miu">离店时间: 12:00之前</div>
                    <div class="open miu">2010年开业 / 2015年装修</div>
                    <div class="model miu">酒店规模: 148间客房</div>
                </div>
            </div>
            <div class="base_serve el-row common">
                <div class="base_serve_left el-col el-col-4">主要设施</div>
                <div class="base_serve_right el-col el-col-20">
                    <span v-for="(itens,ins) in hotelData[0].hotelassets" :key="ins">{{itens.name}}</span>
                </div>
            </div>
            <div class="base_carpark el-row common">
                <div class="base_carpark_left el-col el-col-4">停车服务</div>
                <div class="base_carparkright el-col el-col-20">-</div>
            </div>
            <div class="base_brand el-row common">
                <div class="base_brand_left el-col el-col-4">品牌信息</div>
                <div class="base_brand_right el-col el-col-20">-</div>
            </div>
        </div>

        <!-- 用户评论 -->
        <div class="main_comment">
            <div class="comment_header">
                <h4>0条真实用户评论</h4>
            </div>
            <div class="comment_content el-row">
                <div class="content_left el-col el-col-4">
                    <div>总评数:{{hotelData[0].all_remarks}}</div>
                    <div>好评数: {{hotelData[0].good_remarks}}</div>
                    <div>差评数: {{hotelData[0].bad_remarks}}</div>
                </div>
                <div class="content_right el-col el-col-20">
                    <div class="score">
                        <div class="star">
                            <el-rate
                                v-model="value"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}分"
                            ></el-rate>
                        </div>

                        <div class="intro">推荐</div>
                    </div>
                    <div class="environment com">
                        <div>环境</div>
                        <span>{{hotelData[0].scores.environment?hotelData[0].scores.environment:9.1}}</span>
                    </div>
                    <div class="product com">
                        <div>产品</div>
                        <span>{{hotelData[0].scores.product?hotelData[0].scores.product:8.8}}</span>
                    </div>
                    <div class="server com">
                        <div>服务</div>
                        <span>{{hotelData[0].scores.service?hotelData[0].scores.service:8.5}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hotelData: [{ hotelassets: [], hotellevel: {}, scores: {} }],

            hotelPrice: [],
            photo: [
                {
                    img: require("@/assets/hotel/1.png")
                },
                {
                    img: require("@/assets/hotel/2.png")
                },
                {
                    img: require("@/assets/hotel/3.png")
                },
                {
                    img: require("@/assets/hotel/4.png")
                },
                {
                    img: require("@/assets/hotel/5.png")
                },
                {
                    img: require("@/assets/hotel/6.png")
                }
            ],
            current: require("@/assets/hotel/6.png"),
            activeName: "first",
            value: "",
            form: [
                [118.8718107, 31.32846821],
                [118.92251, 31.75561],
                [118.8718107, 31.32846821],
                [118.732841, 32.077242],
                [118.881561, 31.701331],
                [118.754533, 32.092903],
                [118.903576, 31.33001],
                [118.882451, 31.323772]
            ],
            currentForm: []
        };
    },
    methods: {
        view(index) {
            this.currentForm = this.form[index];
        },
        openDetails(row) {
            location.href = "https://hotels.ctrip.com/hotel/694679.html";
        },
        handleImg(item) {
            this.current = item.img;
        },
        handleClick() {}
    },
    mounted() {
        this.$axios({
            url: "/hotels",
            baseURL: "http://157.122.54.189:9095",
            params: {
                id: this.$route.query.id
            }
        }).then(res => {
            console.log(res);
            this.hotelData = res.data.data;
            this.value = this.hotelData[0].stars;
            this.hotelPrice = res.data.data[0].products;

            this.hotelPrice.forEach(e => {
                e.price = `￥ ${e.price} 起 >`;
            });
        }),
            window.onLoad = () => {
                console.log(this.currentForm);
                var map = new AMap.Map("container", {
                    zoom: 11,
                    center: [118.8718107, 31.32846821]
                });
                var marker1 = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    position: new AMap.LngLat(118.8718107, 31.32846821),
                    title: "得月楼饭店1"
                });

                var marker2 = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    position: new AMap.LngLat(118.92251, 31.75561),
                    title: "得月楼饭店"
                });

                var marker3 = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    position: new AMap.LngLat(118.8718107, 31.32846821),
                    title: "日出花园艺术酒店(南京仙林大学城店)"
                });

                var marker4 = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    position: new AMap.LngLat(118.732841, 32.077242),
                    title: "南京世茂滨江希尔顿酒店(南京仙林大学城店)"
                });

                var marker5 = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    position: new AMap.LngLat(118.881561, 31.701331),
                    title: "日出花园艺术酒店(协春园旅馆(南京禄口机场店))"
                });

                var marker6 = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    position: new AMap.LngLat(118.754533, 32.092903),
                    title: "古南都大桥饭店(南京仙林大学城店)"
                });

                var marker7 = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    position: new AMap.LngLat(118.903576, 31.33001),
                    title: "漫耕假日酒店(原全季酒店高淳店)"
                });

                var marker8 = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    position: new AMap.LngLat(118.882451, 31.323772),
                    title: "罗曼假日精品酒店(高淳八佰伴老街店)"
                });

                var marker9 = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    position: new AMap.LngLat(118.787727, 32.057976),
                    title: "南京古都文化酒店（鼓楼店）(如家联盟)"
                });

                var marker10 = new AMap.Marker({
                    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    position: new AMap.LngLat(118.732506, 32.126942),
                    title: "7天连锁酒店(南京长江大桥店)"
                });

                // 将创建的点标记添加到已有的地图实例：
                map.add([
                    marker1,
                    marker2,
                    marker3,
                    marker4,
                    marker5,
                    marker6,
                    marker7,
                    marker8,
                    marker9,
                    marker10
                ]);
            };
        var url =
            "https://webapi.amap.com/maps?v=1.4.15&key=5b475092c2f57a9246a1cec17fa27c65&callback=onLoad";
        var jsapi = document.createElement("script");
        jsapi.charset = "utf-8";
        jsapi.src = url;
        document.head.appendChild(jsapi);
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 1000px;
    margin: 0 auto;
    .nav {
        padding: 20px 0;
    }
    .main_header {
        margin-bottom: 20px;
        .main_title {
            h2 {
                font-weight: normal;
                span {
                    .crown {
                        color: #f90;
                    }
                }
            }
        }
        .spell {
            font-size: 14px;
            color: #666;
        }
        .address {
            font-size: 14px;
            color: #666;
        }
    }
    .main_photo {
        margin: 40px 0;
        .main_photo_left {
            width: 66.66%;
            float: left;
            img {
                display: block;
                width: 640px;
                height: 360px;
            }
        }
        .main_photo_right {
            font-size: 14px;
            width: 33.33%;
            float: left;
            .pto {
                padding-left: 10px;
                padding-right: 10px;
                width: 50%;
                float: left;
                img {
                    width: 160px;
                    margin-bottom: 10px;
                }
            }
        }
    }
    .main_price {
        /deep/ .el-table__row {
            &:hover {
                cursor: pointer;
            }
        }
    }
    .map {
        margin: 40px 0;
        #container {
            width: 650px;
            height: 300px;
        }
        .map_detail {
            float: left;
        }
        .location {
            font-size: 14px;
            color: #666;
            float: left;
            width: 350px;
            padding-left: 20px;
            .com {
                display: flex;
                justify-content: space-between;
                cursor: pointer;
            }
        }
    }

    .main_info {
        margin: 40px 0;
        font-size: 14px;
        color: #666;
        .common {
            padding: 20px 10px;
            border-bottom: 1px solid #eee;
        }
        .base_info {
            .base_info_right {
                display: flex;
            }
            .miu {
                flex: 1;
            }
        }
        .base_serve {
            .base_serve_right {
                display: flex;
                span {
                    padding: 4px 10px;
                    margin-right: 10px;
                    background-color: #eee;
                    border-radius: 5px;
                }
            }
        }
    }
    .main_comment {
        .comment_content {
            display: flex;
            color: #666;
            font-size: 16px;
            padding: 20px 0;
            .content_right {
                display: flex;
                color: #fa3;
                .score {
                    position: relative;
                    margin-right: 60px;
                    .star {
                        i {
                            margin-top: 20px;
                            font-size: 22px;
                        }
                    }
                    .intro {
                        position: absolute;
                        left: 30px;
                        top: 0px;
                        font-size: 25px;
                        width: 70px;
                        height: 70px;
                        text-align: center;
                        line-height: 70px;
                        border: 1px solid #fa3;
                        border-radius: 50%;
                        opacity: 0.3;
                        transform: rotate(-30deg);
                    }
                }
                .com {
                    width: 70px;
                    height: 70px;
                    line-height: 50px;
                    text-align: center;
                    position: relative;
                    border: 2px solid #fa3;
                    border-radius: 50%;
                    margin-right: 55px;
                    span {
                        position: absolute;
                        top: 20px;
                        left: 20px;
                    }
                }
            }
        }
    }
}
.view,
.traffic {
    display: flex;
    margin: 0 20px 20px 10px;
    cursor: pointer;
}
</style>
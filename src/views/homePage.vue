<template>
  <div>
    <header>
      <div class="header-left"></div>
      <div class="header-right"></div>
    </header>
    <div class="bigBodyContent">
      <div class="the-left-sidebar">
        <ul class="newslist">
          <li v-for="(items, index) in proLists" :key="index">
            <p
              @click="openFunc(index)"
              class="big-options"
              :class="{ clickOnHeadline: changeRed == index }"
            >
              <!-- <img src="/static/svg/tbm.svg" alt="" /> -->
              <span
                >{{ items.name }}
                <span
                  :id="'theUpAndDownIcon' + index"
                  class="el-icon-arrow-up"
                  style="font-weight: bold; float: right; margin-right: 15px"
                ></span
              ></span>
            </p>
            <div class="small-options" ref="liCon">
              <div
                @click="clickOpenTheOption(index + '-' + index2)"
                style="padding: 15px 10px 15px 35px"
                v-for="(items, index2) in items.list"
                :key="index2"
                class="small-options-hover"
                :class="{
                  clickOnHeadLineSmall: changeSmall == index + '-' + index2,
                }"
              >
                {{ items }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="the-right-sidebar">
        <!-- <monitoringTheMap /> -->
        <MapDemo v-if="theShowComponentKey == '0-0'" />
        <generalViewOfTheSite v-if="theShowComponentKey == '0-1'" />
        <theEquipmentList v-if="theShowComponentKey == '0-2'" />
        <focusOnTheHomePage v-if="theShowComponentKey == '0-3'" />
        <realTimeDataList v-if="theShowComponentKey == '1-0'" />
      </div>
    </div>
  </div>
</template>

<script>

// import monitoringTheMap from "./homeMenuItem/monitoringTheMap.vue";
import MapDemo from "./homeMenuItem/MapDemo";
import generalViewOfTheSite from "./homeMenuItem/generalViewOfTheSite";
import theEquipmentList from "./homeMenuItem/theEquipmentList";
import focusOnTheHomePage from "./homeMenuItem/focusOnTheHomePage";
import realTimeDataList from "./homeMenuItem/realTimeDataList";


export default {
  name: "homePage",
  data() {
    return {
      options: [
        {
          value: "1",
          label: "华电青海发电厂汽轮机",
        },
        {
          value: "2",
          label: "成都发电厂汽轮机",
        },
      ],
      value: "",
      theShowComponentKey: "0-0",
      changeRed: -1,
      changeSmall: -1,
      liConHeight: 0, // 折叠面板内容初始高度
      proLists: [
        {
          name: "总貌图",
          list: ["监测地图", "现场总貌图", "设备列表", "重点关注"],
        },
        {
          name: "数据展示",
          list: ["实时数据列表", "设备近况", "设备状态"],
        },
        {
          name: "数据分析",
          list: ["111", "222"],
        },
      ],
      // clientHeight: document.body.clientHeight - 60
    };
  },
  components: {
    // monitoringTheMap,
    MapDemo,
    generalViewOfTheSite,
    theEquipmentList,
    focusOnTheHomePage,
    realTimeDataList
  },
  mounted() {
    this.openFunc(0);

    this.clickOpenTheOption("0-0");
  },
  created() {
    console.log(this.clientHeight);
  },
  methods: {
    theMouseout(index) {
      // console.log(index);
    },
    clickOpenTheOption(indexKey) {
      this.changeSmall = indexKey;
      this.theShowComponentKey = indexKey;
      console.log(indexKey);
    },
    openFunc(i) {
      this.changeRed = i;
      console.log(i);
      const THEELEMENT = document.getElementById("theUpAndDownIcon" + i);
      const liCon = this.$refs.liCon[i];
      let height = liCon.offsetHeight;
      if (height === this.liConHeight) {
        // 展开
        THEELEMENT.style.transform = "rotate(-180deg)";
        liCon.style.height = "auto";
        height = liCon.offsetHeight;
        liCon.style.height = this.liConHeight + "px";
        // eslint-disable-next-line no-unused-vars
        let f = document.body.offsetHeight; // 必加
        liCon.style.height = height + "px";
      } else {
        // 收缩
        THEELEMENT.style.transform = "rotate(360deg)";
        liCon.style.height = this.liConHeight + "px";
      }
    },
  },
};
</script>
<style>
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
<style lang="scss" scoped>
.bigBodyContent {
  background-color: #282d2f;
  width: 100%;
  position: absolute;
  top: 60px;
  bottom: 0px;
  left: 0px;
}
.newslist > li > div {
  height: 0px;
  overflow: hidden;
  transition: height 0.3s; // 动画效果
}
.newslist {
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  list-style: none;
  padding-left: 0;
  margin: 0;
  cursor: pointer;
}
.small-options {
  font-size: 1.1rem;
  font-weight: normal;
}
.big-options {
  margin: 0;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-left: 3px solid #282d2f;
  &:hover {
    background: #232829;
  }
}
.clickOnHeadline {
  background: #232829;
  border-left: 3px solid #1ca2ce;
}
.clickOnHeadLineSmall {
  color: #ffd04b;
}
.small-options-hover {
  &:hover {
    background: #232829;
  }
}

.header-left {
  width: 240px;
  height: 60px;
  position: relative;
  z-index: 1300;
  background-image: url("../static/png/logo_zzqa.png");
  background-repeat: no-repeat;
  -webkit-background-size: 90% auto;
  background-size: 90% auto;
  background-position: 50% 50%;
  background-color: #2f3638;
}
.header-right {
  margin-left: 240px;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  bottom: 60px;
  display: flex;
  align-items: center;
}

header {
  background-color: #2f3638;
  height: 60px;
  z-index: 1000;
  position: relative;
  min-width: 1280px;
}
.the-left-sidebar {
  min-height: 800px;
  height: 100%;
  position: absolute;
  width: 240px;
  transition: all 0.4s ease-in-out;
  background-color: #282d2f;
}
@media screen and (max-width: 1290px) {
  .the-left-sidebar {
    width: 180px;
  }
  .the-right-sidebar {
    margin-left: 180px !important;
  }

  .newslist {
    font-size: 1.2rem;
  }
  .small-options {
    font-size: 1rem;
  }
}
.the-right-sidebar {
  min-height: 800px;
  min-width: 1100px;
  // min-height: 900px;
  height: 100%;
  margin-left: 240px;
  transition: all 0.4s ease-in-out;
  background-color: #101d42;
  background: url("../static/png/star-field-space.png") no-repeat;
  background-size: 100% 100%;
  // position: absolute;
  // top: 60px;
  // right: 0;
  // bottom: 0;
}
/deep/.el-input__inner {
  height: 35px;
  line-height: 35px;
  background-color: #8e9198;
  border: 1px solid #8e9198;
  border-color: #8e9198 !important;
  color: #fff;
  &:focus {
    border-color: #8e9198 !important;
  }
}
/deep/.el-select {
  margin-right: 15px;
}
</style>

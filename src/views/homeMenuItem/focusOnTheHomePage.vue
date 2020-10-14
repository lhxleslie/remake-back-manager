<template>
  <div style="height: 100%; width: 100%">
    <div class="selectThatDevice">
      <el-select v-model="valueOne" placeholder="请选择">
        <el-option
          v-for="item in optionsOne"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-select v-model="valueTwo" placeholder="请选择">
        <el-option
          v-for="item in optionsTwo"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="positionNameContent">
      <p class="positionName">
        <span class="nameArea"> {{ valueOne + "重点关注" }}</span>
        <span class="nameAfter"></span>
      </p>
    </div>

    <div class="wideContainer">
      <div class="outerContainer">
        <div class="focusOnTheDisplayBox">
          <div class="focusOnTheDisplayBoxBody">
            
            <div class="focusOnTheDisplayBoxOption" style="height: 25%">
              <div class="focusOnTheDisplayBoxOptionTitle">
                <span>1号汽轮发电机组</span>
              </div>

              <div class="focusOnTheDisplayBoxOptionBody">
                <img src="../../static/png/qilunji.png" alt="" />
                <p>汽轮机发电设备</p>
              </div>
            </div>
            <div
              class="focusOnTheDisplayBoxOption"
              style="height: 13%; justify-content: space-between"
            >
              <div class="focusOnTheDisplayBoxOptionTitle">
                <span>实时数据</span>
              </div>
              <div class="focusOnTheDisplayBoxRealTimeData">
                <div>
                  <p>当前状态：<span style="color: #1bc71b">正常</span></p>
                  <p>转速：<span>1855rpm</span></p>
                </div>
              </div>
            </div>
            <div class="focusOnTheDisplayBoxOption" style="height: 62%">
              <div class="focusOnTheDisplayBoxOptionTitle">
                <span>历史报警事件</span>
              </div>
              <div class="focusOnStartAndEndTimeParent">
                起止时间：
                <div class="focusOnStartAndEndTime">2020-03-18</div>
                <span>至</span>
                <div class="focusOnStartAndEndTime">2020-04-17</div>
              </div>
              <div class="focusOnStartTable">
                <table>
                  <tr>
                    <td style="width: 35%">报警时间</td>
                    <td>事件</td>
                  </tr>
                  <tr style="color: red">
                    <td>2019-4-5 19:56</td>
                    <td>主轴承径向从预警 (高) 到报警 (亮)</td>
                  </tr>
                  <tr style="color: red">
                    <td>2019-4-5 19:56</td>
                    <td>主轴承径向从预警 (高) 到报警 (亮)</td>
                  </tr>
                  <tr style="color: red">
                    <td>2019-4-5 19:56</td>
                    <td>主轴承径向从预警 (高) 到报警 (亮)</td>
                  </tr>
                  <tr style="color: yellow">
                    <td>2019-4-5 19:56</td>
                    <td>主轴承径向从预警 (高) 到报警 (亮)</td>
                  </tr>
                  <tr style="color: yellow">
                    <td>2019-4-5 19:56</td>
                    <td>主轴承径向从预警 (高) 到报警 (亮)</td>
                  </tr>
                  <tr style="color: yellow">
                    <td>2019-4-5 19:56</td>
                    <td>主轴承径向从预警 (高) 到报警 (亮)</td>
                  </tr>
                  <tr style="color: yellow">
                    <td>2019-4-5 19:56</td>
                    <td>主轴承径向从预警 (高) 到报警 (亮)</td>
                  </tr>
                </table>
              </div>
              <div class="theExpertSystem">
                <div>专家系统</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "focusOnTheHomePage",
  data() {
    return {
      colorChange: false,
      optionsOne: [
        {
          value: "华电青海发电厂汽轮机",
          label: "华电青海发电厂汽轮机",
        },
        {
          value: "成都发电厂汽轮机",
          label: "成都发电厂汽轮机",
        },
      ],
      valueOne: "华电青海发电厂汽轮机",
      optionsTwo: [
        {
          value: "一号汽轮发电机组",
          label: "一号汽轮发电机组",
        },
        {
          value: "二号汽轮发电机组",
          label: "二号汽轮发电机组",
        },
      ],
      valueTwo: "一号汽轮发电机组",
    };
  },
  mounted() {},
  methods: {},
};
</script>


<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.picturesContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  color: white;
  overflow-y: auto;
}
.selectThatDevice {
  display: inline-block;
  position: absolute;
  top: -46px;
  z-index: 9999;
  left: 260px;
}

table {
  font-size: 1rem;
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  text-align: center;
  td {
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    // word-break: keep-all;
    // white-space: nowrap;
    border: 1px solid #1398a9;
    height: 33px;
  }
}
.wideContainer {
  height: 100%;
  position: relative;
  bottom: 80px;
  padding: 80px 10px 20px;
  box-sizing: border-box;
  .outerContainer {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    height: 100%;
    flex-wrap: wrap;
    // overflow: scroll;
    //   position: absolute;
    // left: 0;
    // top: 0;
    // right: -17px;
    // bottom: 0;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
.focusOnTheDisplayBox {
  width: 25%;
  height: 100%;
  color: white;
  font-size: 1.4rem;
  box-sizing: border-box;
  padding: 10px;
  // border-radius: 10px;
  // background-color: rgba(255, 255, 255, 0.15);
  .focusOnTheDisplayBoxBody {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.15);
    width: 100%;
    height: 100%;
  }
  .focusOnTheDisplayBoxOption {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    .focusOnTheDisplayBoxOptionTitle {
      // padding: 0 20px;
      padding-left: 6%;
      span {
        // display: inline-block;
        border-left: 2px solid white;
        padding-left: 2%;
      }
    }
    .focusOnTheDisplayBoxOptionBody {
      text-align: center;
      img {
        width: 45%;
      }
      p {
        margin: 0;
      }
    }
    .focusOnTheDisplayBoxRealTimeData {
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      // padding: 0 30px;
      padding: 0 6%;
      div {
        letter-spacing: 2px;
        width: 100%;
        font-size: 1.1rem;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.15);
        padding: 7px 15px;
        p {
          margin: 0;
          line-height: 1.6rem;
        }
      }
    }
    .focusOnStartAndEndTimeParent {
      // margin-bottom: 20px;
      font-size: 1rem;
      box-sizing: border-box;
      // padding: 0 30px;
      padding: 0 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .focusOnStartAndEndTime {
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.15);
        padding: 5px 10px;
      }
      span {
        padding: 0 5px;
      }
    }
    .focusOnStartTable {
      box-sizing: border-box;
      // padding: 0 30px;
      padding: 0 6%;
    }
    .theExpertSystem {
      margin-top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.15rem;
      div {
        background-color: #82848a;
        border-radius: 4px;
        padding: 3px 10px;
      }
    }
  }
}

@media screen and (max-width: 1600px) {
  .focusOnTheDisplayBox {
    width: 33.3%;
  }
}
</style>
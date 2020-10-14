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

      <el-select v-model="valueThr" placeholder="请选择">
        <el-option
          v-for="item in optionsThr"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-select v-model="valueFour" placeholder="请选择">
        <el-option
          v-for="item in optionsFour"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="positionNameContent">
      <p class="positionName">
        <span class="nameArea">
          {{
            valueOne + " - " + valueTwo + " - " + valueThr + " - " + valueFour
          }}</span
        >
        <span class="nameAfter"></span>
      </p>
    </div>
    <div class="wideContainer">
      <div class="outerContainer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "realTimeDataList",
  data() {
    return {
      optionsOne: [
        {
          value: "大唐瓜州桥第一发电厂",
          label: "大唐瓜州桥第一发电厂",
        },
        {
          value: "大唐瓜州桥第二发电厂",
          label: "大唐瓜州桥第二发电厂",
        },
      ],
      valueOne: "大唐瓜州桥第一发电厂",
      optionsTwo: [
        {
          value: "c02号机组",
          label: "c02号机组",
        },
        {
          value: "c03号机组",
          label: "c03号机组",
        },
      ],
      valueTwo: "c02号机组",
      optionsThr: [
        {
          value: "主承轴A径向",
          label: "主承轴A径向",
        },
        {
          value: "主承轴B径向",
          label: "主承轴B径向",
        },
      ],
      valueThr: "主承轴A径向",
      optionsFour: [
        {
          value: "报警数据列表",
          label: "报警数据列表",
        },
        {
          value: "实时数据列表",
          label: "实时数据列表",
        },
      ],
      valueFour: "报警数据列表",
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
</style>

<style lang="scss" >
.positionNameContent {
  position: relative;
  z-index: 999;
  padding: 20px;
  .positionName {
    margin: 0;
    height: 38px;
    line-height: 38px;
    font-size: 1.3rem;
    color: #fff;
    border-bottom: 2px solid rgba(45, 158, 208, 0.65);
    .nameArea {
      display: block;
      float: left;
      height: 38px;
      background: url("../../static/png/name_bgi.png");
      padding: 0 1em;
    }
    .nameAfter {
      display: block;
      float: left;
      height: 38px;
      width: 39px;
      background: url("../../static/png/name_after.png");
      color: transparent;
    }
  }
}
</style>
<template>
  <div style="height: 100%; width: 100%">
    <div class="selectThatDevice">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>

    <div class="positionNameContent">
      <p class="positionName">
        <span class="nameArea"> {{ value }}</span>
        <span class="nameAfter"></span>
      </p>
    </div>

    <div class="wideContainer">
      <div class="outerContainer">
        <img src="../../static/png/asdasdas.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// import monitoringTheMap from "./monitoringTheMap.vue";
export default {
  name: "generalViewOfTheSite",
  // components: { monitoringTheMap },
  data() {
    return {
      options: [
        {
          value: "华电青海发电厂汽轮机",
          label: "华电青海发电厂汽轮机",
        },
        {
          value: "成都发电厂汽轮机",
          label: "成都发电厂汽轮机",
        },
      ],
      value: "华电青海发电厂汽轮机",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.picturesContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px 20px 20px;
  img {
    width: 85%;
  }
}
.selectThatDevice {
  display: inline-block;
  position: absolute;
  top: -46px;
  z-index: 9999;
  left: 260px;
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
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    overflow-x: hidden;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
      height: 80%;
    }
  }
}
</style>
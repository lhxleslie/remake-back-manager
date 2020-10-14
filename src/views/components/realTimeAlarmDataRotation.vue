<template>
  <div class="realTimeAlarmData">
    <div class="realTimeAlarmDataTitle">实时报警数据</div>
    <dv-scroll-board :config="config"
      style="width: 100%;height:90%" />
  </div>
</template>

<script>
export default {
  name: "realTimeAlarmDataRotation",
  data() {
    return {
      config: {
        header: ["时间", "机组", "测点", "报警<br>次数", "报警<br>类型"],
        data: [
          [
            '<span style="color:red;">2020.04.14-13:51</span>',
            '<span style="color:red;">56机组</span>',
            '<span style="color:red;">VIA13223</span>',
            '<span style="color:red;">1</span>',
            '<span style="color:red;">报警</span>'
          ],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"],
          ["2020.04.14-13:51", "56机组", "VIA13223", "1", "预警"]
        ],
        index: true,
        columnWidth: [50, 150],
        align: ["center", "center", "center", "center", "center", "center"],
        headerBGC: "rgba(64, 158, 255, 0.62)",
        oddRowBGC: "rgba(160, 207, 255, 0.12)",
        evenRowBGC: "rgba(58, 142, 230, 0.12)",
        rowNum: 10,
        // waitTime: 100000,
        indexHeader: "序号",
        headerHeight: 48
      }
    };
  },
  // rgba(58, 142, 230, 0.12)
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.realTimeAlarmDataTitle {
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  padding: 10px 0;
  box-sizing: border-box;
}
/deep/.header-item {
  line-height: 20px !important;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.realTimeAlarmData {
  // background-color: rgba(255, 255, 255, 0.15);
  height: 100%;
}
</style>
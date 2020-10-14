<template>
  <div class="theEquipmentListBox">
    <div class="equipmentListBoxTabs">
      <div @click="openWhat(0)"
        class="tabs_1"
        :style="theIndex === 0 ? { 'background-color': '#47bfe4' } : ''">
        全部 15
      </div>
      <div @click="openWhat(1)"
        class="tabs_2"
        :style="theIndex === 1 ? { 'background-color': '#47bfe4' } : ''">
        正常 25
      </div>
      <div @click="openWhat(2)"
        class="tabs_3"
        :style="theIndex === 2 ? { 'background-color': '#47bfe4' } : ''">
        报警 26
      </div>
      <div @click="openWhat(3)"
        class="tabs_4"
        :style="theIndex === 3 ? { 'background-color': '#47bfe4' } : ''">
        预警 6
      </div>
      <div @click="openWhat(4)"
        class="tabs_5"
        :style="theIndex === 4 ? { 'background-color': '#47bfe4' } : ''">
        关注 55
      </div>
    </div>
    <el-row>
      <el-col :span="20">
        <div class="theEquipmentListBoxLeft">
          <div class="equipmentListBoxLeftBody">
            <div v-show="theIndex === 0">
              <table class="equipmentForm"
                border="1"
                cellspacing="0"
                cellpadding="0">
                <tr>
                  <td>设备名</td>
                  <td>转速</td>
                  <td>设备情况</td>
                </tr>
                <tr>
                  <td>MAS2326</td>
                  <td>1768rpm</td>
                  <td>良好</td>
                </tr>
              </table>
              <table class="equipmentForm"
                border="1"
                cellspacing="0"
                cellpadding="0">
                <tr>
                  <td>设备名</td>
                  <td>转速</td>
                  <td>设备情况</td>
                </tr>
                <tr>
                  <td>MAS2326</td>
                  <td>1768rpm</td>
                  <td>良好</td>
                </tr>
              </table>
              <table class="equipmentForm"
                border="1"
                cellspacing="0"
                cellpadding="0">
                <tr>
                  <td>设备名</td>
                  <td>转速</td>
                  <td>设备情况</td>
                </tr>
                <tr>
                  <td>MAS2326</td>
                  <td>1768rpm</td>
                  <td>良好</td>
                </tr>
              </table>
              <table class="equipmentForm"
                border="1"
                cellspacing="0"
                cellpadding="0">
                <tr>
                  <td>设备名</td>
                  <td>转速</td>
                  <td>设备情况</td>
                </tr>
                <tr>
                  <td>MAS2326</td>
                  <td>1768rpm</td>
                  <td>良好</td>
                </tr>
              </table>
            </div>
            <div v-show="theIndex === 1">cv</div>
            <div v-show="theIndex === 2">wew</div>
            <div v-show="theIndex === 3">vc</div>
            <div v-show="theIndex === 4">trr</div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">

      </el-col>
    </el-row>
    <!-- <div class="flexContent">
      <div class="theEquipmentListBoxLeft">
        <div class="equipmentListBoxLeftBody">
          <div v-show="theIndex === 0">
            <table class="equipmentForm"
              border="1"
              cellspacing="0"
              cellpadding="0">
              <tr>
                <td>设备名</td>
                <td>转速</td>
                <td>设备情况</td>
              </tr>
              <tr>
                <td>MAS2326</td>
                <td>1768rpm</td>
                <td>良好</td>
              </tr>
            </table>
            <table class="equipmentForm"
              border="1"
              cellspacing="0"
              cellpadding="0">
              <tr>
                <td>设备名</td>
                <td>转速</td>
                <td>设备情况</td>
              </tr>
              <tr>
                <td>MAS2326</td>
                <td>1768rpm</td>
                <td>良好</td>
              </tr>
            </table>
            <table class="equipmentForm"
              border="1"
              cellspacing="0"
              cellpadding="0">
              <tr>
                <td>设备名</td>
                <td>转速</td>
                <td>设备情况</td>
              </tr>
              <tr>
                <td>MAS2326</td>
                <td>1768rpm</td>
                <td>良好</td>
              </tr>
            </table>
            <table class="equipmentForm"
              border="1"
              cellspacing="0"
              cellpadding="0">
              <tr>
                <td>设备名</td>
                <td>转速</td>
                <td>设备情况</td>
              </tr>
              <tr>
                <td>MAS2326</td>
                <td>1768rpm</td>
                <td>良好</td>
              </tr>
            </table>
          </div>
          <div v-show="theIndex === 1">cv</div>
          <div v-show="theIndex === 2">wew</div>
          <div v-show="theIndex === 3">vc</div>
          <div v-show="theIndex === 4">trr</div>
        </div>
      </div>
      <div class="theEquipmentListBoxRight">
        <div class="equipmentListBoxRightBody">
          <dv-scroll-board :config="config"
            style="width: 100%; height: 735px" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "theEquipmentList",
  components: {},
  data() {
    return {
      loadDom: false,
      theIndex: "",
      activeName: "first",
      config: {
        header: ["工厂名"],
        data: [
          ["西安热工院发电厂"],
          ["宁波热工院发电厂"],
          ["黑龙江热工院发电厂"],
          ["重庆热工院发电厂"],
          ["北京热工院发电厂"],
          ["杭州热工院发电厂"],
          ["新疆热工院发电厂"],
          ["吉林热工院发电厂"],
          ["福建热工院发电厂"],
          ["嘉兴热工院发电厂"],
          ["拉萨热工院发电厂"],
          ["乌鲁木齐热工院发电厂"],
          ["重庆热工院发电厂"],
          ["北京热工院发电厂"],
          ["杭州热工院发电厂"],
          ["新疆热工院发电厂"],
          ["吉林热工院发电厂"],
          ["福建热工院发电厂"],
          ["嘉兴热工院发电厂"],
          ["重庆热工院发电厂"],
          ["北京热工院发电厂"],
          ["杭州热工院发电厂"],
          ["新疆热工院发电厂"],
          ["吉林热工院发电厂"],
          ["福建热工院发电厂"],
          ["嘉兴热工院发电厂"],
          ["重庆热工院发电厂"],
          ["北京热工院发电厂"],
          ["杭州热工院发电厂"],
          ["新疆热工院发电厂"],
          ["吉林热工院发电厂"],
          ["福建热工院发电厂"],
          ["嘉兴热工院发电厂"]
        ],
        index: true,
        columnWidth: [50, 150],
        align: ["center", "center"],
        headerBGC: "#409eff9e",
        oddRowBGC: "#a0cfff24",
        evenRowBGC: "#3a8ee61f",
        rowNum: 12,
        // waitTime: 100000,
        indexHeader: "序号",
        headerHeight: 48
      }
    };
  },
  mounted() {
    // this.calculateHeight =
    //   document.getElementsByClassName("the-right-sidebar")[0].clientHeight - 30;
    // this.loadDom = true;
    this.openWhat(0);
  },
  methods: {
    openWhat(index) {
      this.theIndex = index;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
.theEquipmentListBox {
  height: 100%;
  .theEquipmentListBoxLeft {
    width: 80%;
  }
  .theEquipmentListBoxRight {
    width: 20%;
    height: 100%;
    // background: white;
  }
}
.equipmentListBoxTabs {
  width: 50%;
  height: 36px;
  display: flex;
  padding: 20px;
  cursor: pointer;
  div {
    color: white;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
    background-color: rgba(63, 128, 159, 0.8);
    border-right: 2px solid #828882;
    &:hover {
      background-color: #47bfe4;
    }
  }
  :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right: none;
  }
}
.equipmentListBoxLeftBody {
  div {
    display: flex;
    flex-wrap: wrap;
  }
  width: 100%;
  // padding: 20px;
background-color: rgba(255, 255, 255, 0.1);
  color: white;
  height: 100%;
}
.flexContent {
  display: flex;
  height: 735px;
}
.equipmentForm {
  td {
    padding: 10px 5px;
  }
  text-align: center;
  margin: 3%;
  width: 27%;
}
</style>
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
    </div>

    <div class="positionNameContent">
      <div class="positionName">
        <span class="nameArea"> {{ valueOne + valueTwo + valueThr   }}</span>
        <span class="nameAfter"></span>

        <div style="display: inline-block; float: right">
          <div class="addFocus">
            加入重点关注：<span
              class="el-icon-star-on"
              style="cursor: pointer"
              :style="colorChange ? { color: '#FCC40E' } : { color: 'white' }"
              @click="changeColor"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div class="wideContainer">
      <div class="outerContainer">
        <div class="outerTableContainer">
          <table>
            <thead>
              <tr>
                <td>振动通道名称</td>
                <td>高报</td>
                <td>高高报</td>
              </tr>
            </thead>

            <tr>
              <td>vib-1</td>
              <td>80</td>
              <td>100</td>
            </tr>
            <tr>
              <td>vib-1</td>
              <td>80</td>
              <td>100</td>
            </tr>
            <tr>
              <td>vib-1</td>
              <td>80</td>
              <td>100</td>
            </tr>
            <tr>
              <td>vib-1</td>
              <td>80</td>
              <td>100</td>
            </tr>
            <tr>
              <td>vib-1</td>
              <td>80</td>
              <td>100</td>
            </tr>
            <tr>
              <td>vib-1</td>
              <td>80</td>
              <td>100</td>
            </tr>
            <tr>
              <td>vib-1</td>
              <td>80</td>
              <td>100</td>
            </tr>
            <tr>
              <td>vib-1</td>
              <td>80</td>
              <td>100</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "theEquipmentList",
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
      optionsThr: [
        {
          value: "转速键",
          label: "转速键",
        },
        {
          value: "萨达键",
          label: "萨达键",
        },
      ],
      valueThr: "转速键",
    };
  },
  mounted() {},
  methods: {
    changeColor() {
      if (this.colorChange) {
        this.colorChange = false;
      } else {
        this.colorChange = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
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
    .outerTableContainer {
      box-sizing: border-box;
      width: 50%;
      height: 50%;
      padding: 10px;
    }
  }
}

.selectThatDevice {
  display: inline-block;
  position: absolute;
  top: -46px;
  z-index: 9999;
  left: 260px;
}
.addFocus {
  color: #fff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  span {
    font-size: 2rem;
  }
}

table {
  color: #fff;
  font-size: 1.1rem;
  // border: 1px solid white;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  table-layout: fixed;
  text-align: center;
  td {
    border: 1px solid #1398a9;
    height: 35px;
  }
  thead {
    background-color: #16428b;
    font-size: 1.2rem;
    td {
      height: 40px;
    }
  }
}
</style>
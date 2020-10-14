<template>
  <div id="systemCoverageIndex">545454</div>
</template>
<script>
import echarts from "echarts/lib/echarts";

export default {
  name: "systemCoverageIndex",
  data() {
    return {};
  },
  created() {
    console.log("sdasdwqwqqw");
    this.$nextTick(() => {
      this.drawTheRicle();
    });
    // this.drawTheRicle();
  },
  mounted() {
    console.log("sdsadsa");
    // console.log("草拟吗");

  },
  methods: {
    drawTheRicle() {
      const myChart_example = echarts.init(
        document.getElementById("systemCoverageIndex")
      );
      var e = 80
      const option = {
        	title:{
			        show:true,
			        text:e+'%',
			        x:'center',
		        	y:'center',
			        textStyle: {
	                    fontSize: '25',
	                    color:'white',
	                    fontWeight: 'bold'
	                }
		       },
		    tooltip: {
		        trigger: 'item',
		        formatter: "{d}%",
		        show:false
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        show:false
		    },
		    series: 
		        {
		            name:'',
		            type:'pie',
		            radius: ['65%', '85%'],
		            avoidLabelOverlap: true,
		            hoverAnimation:false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: false
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:e, name:''},
		                {value:100-e, name:''}
		            ]
		        }
		    
		};
      myChart_example.setOption(option);
      // window.onresize = myChart_example.resize;
      window.addEventListener("resize", function () {
        myChart_example.resize();
      });
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
#systemCoverageIndex {
  width: 200px;
  height: 200px;
}
</style>
<template>
  <div>
    <b-card>
    <div class="mb-2" style="display: flex; justify-content: space-around;">
    <b-avatar badge="0" badge-variant="danger" size="5rem">危险</b-avatar>
    <b-avatar badge="0" badge-variant="warning" size="5rem">预警</b-avatar>
    <b-avatar badge="6" badge-variant="success" size="5rem">正常运行</b-avatar>
    </div>
    </b-card>
    <div id="container" :style="{height: '300px'}"></div>
    <div>
      <b-button variant="primary" @click="$router.push({name: 'readdev', params:{ devid: 'AAAAAAAAA'}}) ">设备详情</b-button>
      <b-button variant="secondary" to="readall">我的设备</b-button>
      <b-button variant="success" to="ctrldev">控制设备/温度/湿度/CO2设定</b-button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      devs: [],
      temperatures: [],
      humiditys: [],
      co2s: [],
    };
  },
  mounted() {
    this.drawTable();
  },
  methods: {
    ...mapActions('devModule', { Readall: 'readall' }),
    drawTable() {
      this.Readall().then((res) => {
        this.devs = res.data.devs;
        this.temperatures = res.data.temperatures;
        this.humiditys = res.data.humiditys;
        this.co2s = res.data.co2s;
      }).then(() => {
        const myChart = this.$echarts.init(document.getElementById('container'));
        myChart.setOption({
          title: { text: '设备当前状态' },
          tooltip: {},
          xAxis: {
            naem: '设备',
            data: this.devs,
            axisLabel: {
              textStyle: {
                fontSize: 7,
              },
            },
          },
          yAxis: {},
          series: [{
            name: '温度',
            type: 'bar',
            itemStyle: {
              color: 'red',
            },
            data: this.temperatures,
          },
          {
            name: '湿度',
            type: 'bar',
            itemStyle: {
              color: 'blue',
            },
            data: this.humiditys,
          },
          {
            name: 'CO2',
            type: 'bar',
            itemStyle: {
              color: 'grey',
            },
            data: this.co2s,
          }],
        });
      });
    },
  },
};
</script>
<style>
.bar_container{
  width: 500px;
  height: 500px;
}
</style>

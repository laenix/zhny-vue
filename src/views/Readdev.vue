<template>
  <div>
    <div id="container" style="height: 70vh;"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      devdata: {
        Time: ['1', '2', '3'],
        Devtemperature: ['1', '2', '3'],
        Devhumidity: ['1', '1', '1'],
        Devco2: ['1', '20', '10'],
      },
    };
  },
  mounted() {
    this.Readdev();
  },
  methods: {
    ...mapActions('devModule', { readdev: 'readdev' }),
    Readdev() {
      this.readdev('AAAAAAAAA').then((res) => {
        this.devdata = res.data.devdatas;
      }).then(() => {
        const myChart = this.$echarts.init(document.getElementById('container'));
        const options = {
          legend: {
            data: ['温度', '湿度', 'CO2'],
          },
          tooltip: {
            trigger: 'item',
          },
          toolbox: {
            show: true,
          },
          xAxis: {
            type: 'category',
            name: '时间',
            data: this.devdata.Time,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#a9a9a9', // 更改坐标轴文字颜色
                fontSize: 10, // 更改坐标轴文字大小
              },
              rotate: 40,
              formatter(v) {
                const date = new Date(v);
                return `${(`0${date.getHours()}`).slice(-2)}:${(`0${date.getMinutes()}`).slice(-2)}`;
              },
            },
          },
          yAxis: {
            type: 'value',
            name: '数据',
          },
          series: [
            {
              name: '温度',
              type: 'line',
              data: this.devdata.Devtemperature,
            },
            {
              name: '湿度',
              type: 'line',
              data: this.devdata.Devhumidity,
            },
            {
              name: 'CO2',
              type: 'line',
              data: this.devdata.Devco2,
            },
          ],
        };
        myChart.setOption(options);
      });
    },
  },
};
</script>
<style>
</style>

<template>
  <div>
    <b-table striped hover :items="items" @click="$router.push({name: 'readdev'})"></b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      items: [
        {
          设备: '测试1', 温度: 20, 湿度: 20, CO2: 5,
        },
        {
          设备: '测试2', 温度: 21, 湿度: 21, CO2: 6,
        },
        {
          设备: '测试3', 温度: 19, 湿度: 23, CO2: 5,
        },
        {
          设备: '测试4', 温度: 20, 湿度: 22, CO2: 5,
        },
      ],
    };
  },
  mounted() {
    this.Readalldevs();
  },
  methods: {
    ...mapActions('devModule', { Readall: 'readall' }),
    Readalldevs() {
      this.Readall().then((res) => {
        this.items = res.data.data;
      });
    },
  },
};
</script>

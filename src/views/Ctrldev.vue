<template>
  <div>
    <b-form-select v-model="cmd.devid" :options="options">
    </b-form-select>
    <b-form-group label="选择命令">
      <b-form-radio v-model="cmdtype" name="some-radios" value="T">温度</b-form-radio>
      <b-form-radio v-model="cmdtype" name="some-radios" value="H">湿度</b-form-radio>
      <b-form-radio v-model="cmdtype" name="some-radios" value="C">排风</b-form-radio>
    </b-form-group>
    <b-form-input v-model="cmdvalue" placeholder="预定数值"></b-form-input>
    <b-button variant="primary" @click="sendcmd">发送命令</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      options: [],
      cmd: {
        devid: '',
        cmd: '',
      },
      cmdvalue: '',
      cmdtype: '',
    };
  },
  created() {
    this.Readalldevs();
  },
  methods: {
    ...mapActions('devModule', { readall: 'readall', ctrldev: 'ctrldev' }),
    Readalldevs() {
      this.readall().then((res) => {
        this.options = res.data.devs;
      });
    },
    sendcmd() {
      this.cmd.cmd = this.cmdtype + this.cmdvalue;
      this.ctrldev(this.cmd)
        .then((res) => {
          this.$bvToast.toast(res.data.msg, {
            title: '发布命令',
            variant: 'success',
            autoHideDelay: 2000,
            solid: true,
          });
        }).catch((err) => {
          this.$bvToast.toast(err.response.data.msg, {
            title: '发布命令',
            variant: 'danger',
            autoHideDelay: 2000,
            solid: true,
          });
        });
    },
  },
};
</script>

<style>

</style>

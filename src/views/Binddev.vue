<template>
  <div class="register">
    <b-row class="mt-5">
      <b-col
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
      >
        <b-card title="设备绑定">
          <b-form>
            <b-form-group label="设备id">
              <b-form-input
                v-model="$v.dev.devid.$model"
                type="text"
                placeholder="输入您的设备id"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="设备密码">
              <b-form-input
                v-model="$v.dev.devpass.$model"
                type="password"
                placeholder="输入设备密码"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-button
                @click="Binddev"
                variant="outline-primary"
                block
              >绑定设备</b-button>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      dev: {
        devid: '',
        devpass: '',
      },
    };
  },
  validations: {
    dev: {
      devid: {
        required,
      },
      devpass: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    ...mapActions('devModule', { binddev: 'binddev' }),
    validateState(name) {
      // 这里是es6 解构赋值
      const { $dirty, $error } = this.$v.dev[name];
      return $dirty ? !$error : null;
    },
    Binddev() {
      // 验证数据
      this.$v.dev.$touch();
      if (this.$v.dev.$anyError) {
        return;
      }
      // 请求
      this.binddev(this.dev).then((res) => {
        this.$bvToast.toast(res.data.msg, {
          title: '设备绑定',
          variant: 'success',
          autoHideDelay: 2000,
        });
      }).then(() => {
        // 跳转主页
        const that = this;
        setTimeout(() => { that.$router.replace({ name: 'console' }); }, 2200);
      }).catch((err) => {
        this.$bvToast.toast(err.response.data.msg, {
          title: '数据验证错误',
          variant: 'danger',
          solid: true,
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>

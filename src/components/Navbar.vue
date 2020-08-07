<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click="$router.push({name: 'Home'})">
      <img src=../assets/zh_logo.png height=48>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="userInfo">
          <template v-slot:button-content>
            <em>{{userInfo.Name}}</em>
          </template>
          <b-dropdown-item @click="$router.push({name: 'console'})">控制台</b-dropdown-item>
          <b-dropdown-item @click="$router.push({name: 'binddev'})">绑定设备</b-dropdown-item>
          <b-dropdown-item @click="logout">登出</b-dropdown-item>
        </b-nav-item-dropdown>
        <div v-if="!userInfo">
              <b-nav-item
                v-if="$route.name != 'login'"
                @click="$router.replace({name: 'login'})"
              >登录</b-nav-item>
              <b-nav-item
                v-if="$route.name != 'register'"
                @click="$router.replace({name: 'register'})"
              >注册</b-nav-item>
            </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState({
    userInfo: (state) => state.userModule.userInfo,
  }),
  methods: mapActions('userModule', ['logout']),
};
</script>

<style lang="scss">
</style>

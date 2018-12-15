<template>
  <div class="login-view">
    <div class="login-panel">
      <h1 class="login-title">登录</h1>
      <form @submit.prevent="onSubmit()">
        <div class="input-item">
          <input v-model="username" type="text" name="username" placeholder="用户名">
        </div>
        <div class="input-item">
          <input v-model="password" type="password" name="password" placeholder="密码">
        </div>

        <button :disabled="isDisabled" class="submit" type="submit">{{loginState}}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import common from "@/common/common.js";
export default {
  name: "login",
  data() {
    return {
      isDisabled: false,
      loginState: "登录"
    };
  },
  computed: {
    // Getting Vuex State from store
    ...mapState({
      username: state => state.user.login_username,
      password: state => state.user.login_password
    })
  },
  methods: {
    beforeSubmit() {
      // console.log('Submiting...')
      this.isDisabled = true;
      this.loginState = "正在登录...";
    },

    onSubmit() {
      this.beforeSubmit();
      const _self = this;

      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
          common.setCookie("session", "55555jjiij");
          _self.$store.state.isLogin = true;
          _self.$router.push("/home");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-view {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-primary;
  .login-panel {
    width: 400px;
    height: 300px;
    background: #fff;
    box-shadow: $box-shadow;
    padding: 16px;
    .login-title {
      text-align: center;
      height: 64px;
      line-height: 64px;
      letter-spacing: 16px;
      font-size: 20px;
      font-weight: 500;
      color: $color-primary;
    }

    .input-item {
      margin-bottom: 16px;
    }

    input[type="email"],
    input[type="text"],
    input[type="password"] {
      display: inline-block;
      width: 100%;
      height: 40px;
      padding: 0 16px;
      box-sizing: border-box;
      font-size: 16px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: 0;
    }

    .submit {
      cursor: pointer;
      width: 100%;
      padding: 8px 16px;
      margin-top: 16px;
      font-size: 14px;
      text-align: center;
      color: #fff;
      background: $color-primary;
      border-radius: 4px;
      border: none;
      outline: none;

      &:hover {
        background: darken($color-primary, 10%);
      }
    }
  }
}
</style>

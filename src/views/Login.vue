<template>
  <div class="container-fluid login-view-container">
    <div class="login-screen-top-space"></div>
    <div class="d-flex justify-content-center align-items-center">
      <LoginBox msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginBox from "@/components/LoginBox.vue";

export default {
  name: "Login",
  components: {
    LoginBox,
  },
};
</script>

<style scoped lang="scss">
.login-view-container {
  height: 100vh;
}
.login-screen-top-space {
  height: 10vh;
}
</style>

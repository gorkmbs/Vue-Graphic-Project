<template>
  <div
    class="
      login-view-container
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <LoginBox msg="Welcome to Your Vue.js App" />
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
</style>

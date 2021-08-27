<template>
  <div class="login-box-container m-4 p-4 d-flex align-items-center">
    <div class="container">
      <form @submit.prevent="handleLoginSubmit">
        <div class="">
          <input
            type="text"
            class="form-control login-input-box"
            id="exampleInputEmail1"
            aria-describedby="usernameHelp"
            placeholder="Username"
            v-model="formData.username"
          />
        </div>
        <div class="login-box-line"></div>
        <div class="">
          <input
            type="password"
            class="form-control login-input-box"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="formData.password"
          />
        </div>
        <div class="login-box-line mb-4"></div>
        <div class="mb-3">
          <router-link class="linkWithoutBlueUnderline" to="/"
            >Can't remember password ?</router-link
          >
        </div>
        <p v-if="isError" class="text-danger error-message">
          {{ errorMsg }}
        </p>
        <button type="submit" class="btn login-box-btn m-0 p-2">
          <i class="fas fa-arrow-right"></i> ENTER
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "LoginBox",
  props: {},
  data() {
    return {
      isError: false,
      errorMsg:
        "Lütfen kullanıcı adınızı ve parolanızı doğru girip tekrar deneyiniz.",
      formData: {
        username: "tamzirtapoz",
        password: "tamzirtapoz",
      },
    };
  },
  computed: {
    ...mapState(["loginStatus"]),
    ...mapState(["username"]),
    ...mapState(["password"]),
  },
  mounted() {
    if (this.loginStatus === true) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    ...mapActions(["userLoggedIn"]),
    handleLoginSubmit() {
      if (
        this.formData.username === this.username &&
        this.formData.password === this.password
      ) {
        this.isError = false;
        this.userLoggedIn();
        this.$router.push("/dashboard");
      } else {
        this.isError = true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-box-container {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.5);
  width: 300px;
  height: 250px;
  max-width: 90vw;
  color: rgba(0, 0, 0, 0.5);
}
.linkWithoutBlueUnderline {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.linkWithoutBlueUnderline:hover {
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
}
.login-input-box {
  border: none;
  background: transparent;
}
.login-box-line {
  height: 1px;
  background: rgba(0, 0, 0, 0.5);
}
.login-box-btn {
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}
.login-box-btn:hover {
  color: rgba(0, 0, 0, 0.5);
}
.error-message {
  font-size: 10px;
}
</style>

<template>
  <div class="login-box-container m-4 p-4"><h1>Test</h1></div>
</template>

<script>
export default {
  name: "LoginBox",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-box-container {
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.3);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

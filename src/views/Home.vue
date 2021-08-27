<template>
  <div
    class="d-flex justify-content-center align-items-center home-view-container"
  >
    <div class="container-fluid">
      <h1>Username: tamzirtapoz</h1>
      <h1>Password: tamzirtapoz</h1>
      <button class="btn btn-success" @click="startButtonPressed">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    startButtonPressed() {
      window.location.pathname = "/login";
    },
  },
};
</script>

<style scoped lang="scss">
.home-view-container {
  height: 100vh;
}
</style>

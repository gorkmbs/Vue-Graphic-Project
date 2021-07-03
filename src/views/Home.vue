<template>
  <div
    class="d-flex justify-content-center align-items-center home-view-container"
  >
    <button class="btn btn-success" @click="startButtonPressed">BAŞLAT</button>
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

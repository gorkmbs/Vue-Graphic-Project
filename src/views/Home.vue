<template>
  <div
    class="d-flex justify-content-center align-items-center home-view-container"
  >
    <div class="container-fluid">
      <h1>Kullanıcı Adı: limonist</h1>
      <h1>Parola: limonist</h1>
      <button class="btn btn-success" @click="startButtonPressed">
        BAŞLAT
      </button>
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

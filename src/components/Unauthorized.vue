<template>
  <div
    class="
      d-flex
      justify-content-center
      align-items-center
      unauthorized-view-container
    "
  >
    <div class="container-fluid">
      <h1>401 Unauthorized</h1>

      <button class="btn btn-primary" @click="backToLoginScreen">
        GİRİŞ EKRANINA DÖN
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backToLoginScreen() {
      window.location.pathname = "/login";
    },
  },
};
</script>

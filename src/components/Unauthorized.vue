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
        Go Back To Home
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

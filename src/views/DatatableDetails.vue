<template>
  <div
    :style="{
      position: 'fixed',
      top: '5px',
      left: '5px',
      zIndex: '100',
    }"
    v-if="loginStatus"
  >
    <button class="btn btn-secondary" @click="backToDatatablePage">Geri</button>
  </div>
  <div
    class="d-flex justify-content-center align-items-center"
    :style="{ height: '100vh' }"
    v-if="loginStatus"
  >
    <h1>Detail Page For {{ detailPageFor.th }}</h1>
  </div>
  <div
    class="d-flex justify-content-center align-items-center"
    :style="{ height: '100vh' }"
    v-if="!loginStatus"
  >
    <div class="container">
      <h1>Not logged in</h1>
      <button class="btn btn-primary" @click="backToLoginScreen">
        GİRİŞ EKRANINA DÖN
      </button>
    </div>
  </div>
</template>

<script>
import datatableItems from "@/data/datatableItems";
import { mapState } from "vuex";

export default {
  data() {
    return {
      detailPageFor: datatableItems.items[this.$route.params.id],
    };
  },
  methods: {
    backToDatatablePage() {
      this.$router.push("/dashboard");
    },
    backToLoginScreen() {
      window.location.pathname = "/login";
    },
  },
  computed: {
    ...mapState(["loginStatus"]),
  },
};
</script>

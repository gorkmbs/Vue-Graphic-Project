<template>
  <div
    :style="{
      position: 'fixed',
      top: '5px',
      left: '5px',
      zIndex: '100',
    }"
  >
    <button class="btn btn-secondary" @click="backToDatatablePage">Geri</button>
  </div>
  <div
    class="d-flex justify-content-center align-items-center"
    :style="{ height: '100vh' }"
  >
    <h1>Detail Page For {{ detailPageFor.th }}</h1>
  </div>
</template>

<script>
import datatableItems from "@/data/datatableItems";

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
  },
};
</script>

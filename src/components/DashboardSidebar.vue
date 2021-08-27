<template>
  <div
    class="d-flex align-items-center justify-content-center"
    :style="{ height: '15vh' }"
  >
    <img :src="logo" class="img-fluid m-2" :style="{ maxWidth: '120px' }" />
  </div>
  <div
    class="container mt-4"
    :style="{ height: '10vh', color: 'rgba(0,0,0,0.5)' }"
  >
    <button class="btn m-0 p-1" @click="showHighcharts">Home</button>
    <button class="btn m-0 p-1" @click="showDatatable">Datatable</button>
  </div>
  <div :style="{ height: '35vh', color: 'black' }"></div>
  <div class="container" :style="{ height: '10vh', color: 'rgba(0,0,0,0.5)' }">
    <button class="btn m-1 btn-dashboard-left-bottom">Test User</button>
    <button class="btn m-1 btn-dashboard-left-bottom">Role</button>
    <button class="btn m-1 p-1" @click="userLogout">Exit</button>
  </div>
</template>

<script>
export default {
  props: ["logo", "showHighcharts", "showDatatable", "userLogout"],
};
</script>

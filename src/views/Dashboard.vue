<template>
  <div
    class="dashboard-view-container container-fluid m-0 p-0"
    v-if="!loginStatus"
  >
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
  </div>
  <div
    class="dashboard-view-container container-fluid m-0 p-0"
    v-if="loginStatus"
  >
    <div class="top-space-for-dashboard d-flex justify-content-start m-0 p-0">
      <div class="two-line-for-dashboard-left-top"></div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="dashboard-sidebar-container">
        <div
          class="d-flex align-items-center justify-content-center"
          :style="{ height: '15vh' }"
        >
          <img
            :src="logo"
            class="img-fluid m-2"
            :style="{ maxWidth: '120px' }"
          />
        </div>
        <div
          class="container"
          :style="{ height: '10vh', color: 'rgba(0,0,0,0.5)' }"
        >
          <button class="btn m-0 p-1" @click="showHighcharts">Anasayfa</button>
          <button class="btn m-0 p-1" @click="showDatatable">Datatable</button>
        </div>
        <div :style="{ height: '35vh', color: 'black' }"></div>
        <div
          class="container"
          :style="{ height: '10vh', color: 'rgba(0,0,0,0.5)' }"
        >
          <button class="btn m-1 btn-dashboard-left-bottom">Test User</button>
          <button class="btn m-1 btn-dashboard-left-bottom">Role</button>
          <button class="btn m-1 p-1" @click="userLogout">Çıkış</button>
        </div>
      </div>
      <div
        class="d-flex align-items-top flex-column"
        v-if="dashboardScreen === 'highcharts'"
      >
        <div class="d-flex justify-content-center dashboard-plots-container">
          <div
            class="d-flex justify-content-center plots-view-container m-1 p-0"
          >
            <div class="d-flex justify-content-around m-0 p-4 flex-wrap">
              <div class="m-4 p-0"><PieDrilldown /></div>
              <div class="m-4 p-0"><ColumnDrilldown /></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex align-items-top flex-column"
        v-if="dashboardScreen === 'datatable'"
      >
        <div class="d-flex justify-content-center dashboard-plots-container">
          <div
            class="d-flex justify-content-center plots-view-container m-1 p-0"
          >
            <div class="d-flex justify-content-center m-0 p-0">
              <div class="m-4 p-0"><Datatable /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="fixed-bottom">
      <div
        class="d-flex justify-content-start"
        :style="{
          width: windowWidth - 150 + 'px',
          transform: 'translate(150px, 0px)',
          background: 'rgba(255,255,255,1)',
        }"
      >
        <p class="m-1 p-1 text-dark">
          Copyright © 2021
          <span :style="{ color: 'rgba(0,50,200,1)' }"
            ><a
              class="linkWithoutBlueUnderline"
              href="https://www.limonist.com/"
              target="_blank"
              >Limonist</a
            ></span
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ColumnDrilldown from "@/components/ColumnDrilldown.vue";
import PieDrilldown from "@/components/PieDrilldown.vue";
import Datatable from "@/components/Datatable.vue";
import { mapState, mapActions } from "vuex";
import image001 from "@/assets/image001.png";

export default {
  name: "Dashboard",
  components: {
    ColumnDrilldown,
    PieDrilldown,
    Datatable,
  },
  data() {
    return {
      logo: image001,
    };
  },
  methods: {
    ...mapActions([
      "windowWidthUpdate",
      "userLoggedOut",
      "dashboardViewChange",
    ]),
    updateWindowWidth() {
      this.windowWidthUpdate({ width: window.innerWidth });
    },
    backToLoginScreen() {
      window.location.pathname = "/login";
    },
    userLogout() {
      this.userLoggedOut();
    },
    showHighcharts() {
      this.dashboardViewChange({ view: "highcharts" });
    },
    showDatatable() {
      this.dashboardViewChange({ view: "datatable" });
    },
  },
  computed: {
    ...mapState(["loginStatus", "windowWidth", "dashboardScreen"]),
  },
  mounted() {
    this.windowWidthUpdate({ width: window.innerWidth });
    window.addEventListener("resize", this.updateWindowWidth);
  },
  unmounted() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
};
</script>

<style lang="scss">
.top-space-for-dashboard {
  height: 8vh;
}
.dashboard-plots-container {
  min-width: 80vw;
  height: auto;
  min-height: 350px;
}
.two-line-for-dashboard-left-top {
  margin-left: 5px;
  width: 50px;
  height: 8vh;
  border-right: 3px solid rgba(0, 0, 0, 0.1);
  border-left: 3px solid rgba(0, 0, 0, 0.1);
}
.linkWithoutBlueUnderline {
  color: rgba(0, 50, 200, 1);
  text-decoration: none;
}
.linkWithoutBlueUnderline:hover {
  color: rgba(100, 100, 255, 1);
  text-decoration: none;
}
.unauthorized-view-container {
  height: 100vh;
}
</style>

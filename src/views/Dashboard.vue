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
    :style="{ minWidth: dashboardScreen === 'highcharts' ? '350px' : '900px' }"
  >
    <div
      :style="{
        position: 'fixed',
        top: '5px',
        left: '5px',
        zIndex: '100',
      }"
      v-if="windowWidth < 951"
    >
      <button class="btn btn-secondary" @click="toggleMenu">Menu</button>
    </div>
    <div class="top-space-for-dashboard d-flex justify-content-start m-0 p-0">
      <div class="two-line-for-dashboard-left-top"></div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="dashboard-sidebar-container" :class="siderbarPosition()">
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
        @click="closeMenu"
      >
        <div class="d-flex justify-content-center dashboard-plots-container">
          <div
            class="d-flex justify-content-center plots-view-container m-1 p-0"
          >
            <div class="d-flex justify-content-around m-0 p-2 flex-wrap">
              <div class="m-1 p-0"><PieDrilldown /></div>
              <div class="m-1 p-0"><ColumnDrilldown /></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex align-items-top flex-column"
        v-if="dashboardScreen === 'datatable'"
        @click="closeMenu"
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
          transform:
            windowWidth > 950 || showSidebar ? 'translate(150px, 0px)' : '',
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
      showSidebar: false,
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
    siderbarPosition() {
      let sidebarClass = "";
      if (this.windowWidth > 950) {
        sidebarClass = "bigger-screeen-sidebar";
      } else if (this.showSidebar === true) {
        sidebarClass = "small-screen-show-sidebar";
      } else if (this.showSidebar === false) {
        sidebarClass = "small-screen-hide-sidebar";
      }
      return sidebarClass;
    },
    toggleMenu() {
      this.showSidebar = !this.showSidebar;
    },
    closeMenu() {
      this.showSidebar = false;
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
.bigger-screeen-sidebar {
  position: relative;
  animation: leftToRightk 0.5s linear 0;
  z-index: 150;
}

@keyframes leftToRightk {
  from {
    transform: translate(-100vw, 0px);
  }
  to {
    transform: translate(0px, 0px);
  }
}

@keyframes outRightToLeftk {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(-100vw, 0px);
  }
}

.small-screen-show-sidebar {
  position: relative;
  animation: leftToRightk 0.5s ease-out;
}

.small-screen-hide-sidebar {
  position: absolute;
  transform: translate(-150px, 0px);
  animation: outRightToLeftk 1s ease-out;
}

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

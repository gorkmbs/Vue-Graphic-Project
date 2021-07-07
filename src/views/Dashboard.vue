<template>
  <div
    class="dashboard-view-container container-fluid m-0 p-0"
    v-if="!loginStatus"
  >
    <Unauthorized />
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
        <DashboardSidebar
          :logo="logo"
          :showHighcharts="showHighcharts"
          :showDatatable="showDatatable"
          :userLogout="userLogout"
        />
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
              <div class="m-1 p-0">
                <PieDrilldown :Highcharts="Highcharts" />
              </div>
              <div class="m-1 p-0">
                <ColumnDrilldown :Highcharts="Highcharts" />
              </div>
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
    <DashboardFooter :showSidebar="showSidebar" :windowWidth="windowWidth" />
  </div>
</template>

<script>
// @ is an alias to /src
import ColumnDrilldown from "@/components/ColumnDrilldown.vue";
import PieDrilldown from "@/components/PieDrilldown.vue";
import Unauthorized from "@/components/Unauthorized.vue";
import DashboardFooter from "@/components/DashboardFooter.vue";
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import Datatable from "@/components/Datatable.vue";
import { mapState, mapActions } from "vuex";
import image001 from "@/assets/image001.png";

import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
// Initialize exporting module.
Exporting(Highcharts);
import Drilldown from "highcharts/modules/drilldown";
Drilldown(Highcharts);

export default {
  name: "Dashboard",
  components: {
    ColumnDrilldown,
    PieDrilldown,
    Unauthorized,
    Datatable,
    DashboardFooter,
    DashboardSidebar,
  },
  data() {
    return {
      logo: image001,
      showSidebar: false,
      Highcharts: Highcharts,
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
      if (this.showSidebar === false) {
        window.scrollTo(0, 0);
      }
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
</style>

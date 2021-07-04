<template>
  <PieDrilldown v-if="loginStatus" />
  <ColumnDrilldown v-if="loginStatus" />
</template>

<script>
// @ is an alias to /src
import ColumnDrilldown from "@/components/ColumnDrilldown.vue";
import PieDrilldown from "@/components/PieDrilldown.vue";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    ColumnDrilldown,
    PieDrilldown,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["loginStatus"]),
  },
};
</script>

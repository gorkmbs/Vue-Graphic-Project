<template>
  <PieDrilldown />
  <ColumnDrilldown />
</template>

<script>
// @ is an alias to /src
import ColumnDrilldown from "@/components/ColumnDrilldown.vue";
import PieDrilldown from "@/components/PieDrilldown.vue";

export default {
  name: "Dashboard",
  components: {
    ColumnDrilldown,
    PieDrilldown,
  },
};
</script>

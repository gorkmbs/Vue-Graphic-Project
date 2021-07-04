<template>
  <figure class="highcharts-figure">
    <div id="container1"></div>
  </figure>
</template>

<script>
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import { mapGetters } from "vuex";
// Initialize exporting module.
Exporting(Highcharts);
import Drilldown from "highcharts/modules/drilldown";
Drilldown(Highcharts);
export default {
  data() {
    return {
      loadHighchart() {
        // Create the chart
        Highcharts.chart("container1", {
          ...this.columnDrilldownProperties,
        });
      },
    };
  },
  computed: {
    ...mapGetters(["columnDrilldownProperties"]),
  },

  mounted() {
    this.loadHighchart();
  },
};
</script>

<style lang="scss">
.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}

#container {
  height: 400px;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>

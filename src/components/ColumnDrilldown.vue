<template>
  <figure class="highcharts-figure">
    <div
      id="container1"
      :style="{ width: windowWidth > 1303 ? '40vw' : '80vw' }"
      class="container-fluid"
    ></div>
  </figure>
</template>

<script>
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import { mapGetters, mapState } from "vuex";
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
          chart: {
            type: "column",
            // width: 500,
            // width: this.windowWidth > 768 ? 500 : this.windowWidth - 250,
          },
          ...this.columnDrilldownProperties,
        });
      },
    };
  },
  computed: {
    ...mapGetters(["columnDrilldownProperties"]),
    ...mapState(["windowWidth"]),
  },

  mounted() {
    this.loadHighchart();
    // window.addEventListener("resize", this.loadHighchart);
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

#container1 {
  height: 400px;
  min-width: 310px;
  max-width: 500px;
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

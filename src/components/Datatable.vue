<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-between m-2 align-items-center">
      <div>
        <p class="text-dark">
          <i class="fas fa-calendar-alt m-1" :style="{ color: 'orange' }"></i>
          <i class="fas fa-angle-left" :style="{ color: 'orange' }"></i> 24
          Şubat 2021
          <i class="fas fa-angle-right" :style="{ color: 'orange' }"></i>
        </p>
      </div>
      <div
        class="d-flex justify-content-around text-muted align-items-center"
        :style="{ width: '650px' }"
      >
        <div class="d-flex">
          <div class="p-1 datatable-start-point" :style="{ width: '200px' }">
            Başlangıç Tarihi
          </div>
          <div class="p-1 datatable-split-point" :style="{ width: '40px' }">
            -
          </div>
          <div class="p-1 datatable-end-point" :style="{ width: '200px' }">
            Bitiş Tarihi
          </div>
        </div>
        <div class="d-flex">
          <button class="btn text-muted datatable-buttons m-1 p-1">
            Filtrele</button
          ><button class="btn text-muted datatable-buttons m-1 p-1">
            Temizle
          </button>
        </div>
      </div>
    </div>
    <div class="datatable-graph-content">
      <table class="table caption-top table-bordered">
        <thead>
          <tr>
            <th
              scope="col"
              v-for="(headers, index) in datatableItems.headers"
              :key="index"
              :style="{ color: 'orange' }"
            >
              {{ headers }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items, index) in datatableItems.items" :key="index">
            <th scope="row" :style="{ color: 'orange', fontSize: '10px' }">
              {{ items.th }}
            </th>
            <td v-for="(td, index2) in items.td" :key="index2">{{ td }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import datatableItems from "@/data/datatableItems";
export default {
  data() {
    return {
      datatableItems,
    };
  },
};
</script>

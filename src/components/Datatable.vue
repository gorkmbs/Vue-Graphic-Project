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
          <button
            class="btn text-muted datatable-buttons m-1 p-1"
            @click="filterItems"
          >
            Filtrele</button
          ><button
            class="btn text-muted datatable-buttons m-1 p-1"
            @click="resetFilter"
          >
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
              v-for="(headers, index) in shownDatatableItems.headers"
              :key="index"
              :style="{ color: 'orange' }"
            >
              <input
                type="text"
                class="form-control login-input-box"
                aria-describedby="serch"
                placeholder="Filtrele"
                v-model="searchItems[index]"
                @keyup="filterItems"
              />
            </th>
          </tr>
          <tr>
            <th
              scope="col"
              v-for="(headers, index) in shownDatatableItems.headers"
              :key="index"
              :style="{ color: 'orange' }"
            >
              {{ headers }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in shownDatatableItems.items" :key="items.id">
            <th scope="row">
              <router-link
                :to="`/datatable/details/id/${items.id}`"
                :style="{ color: 'orange', fontSize: '10px' }"
              >
                {{ items.th }}
              </router-link>
            </th>
            <td v-for="(td, index2) in items.td" :key="index2">{{ td }}</td>
          </tr>
        </tbody>
      </table>
      <div
        v-if="shownDatatableItems.items.length === 0"
        class="container-fluid"
      >
        <h1>Eşleşme bulunamadı...</h1>
      </div>
    </div>
  </div>
</template>

<script>
import datatableItems from "@/data/datatableItems";
export default {
  data() {
    return {
      datatableItems,
      shownDatatableItems: { ...datatableItems },
      searchItems: Array.from({ length: datatableItems.headers.length }, () => {
        return "";
      }),
    };
  },
  methods: {
    filterItems() {
      this.shownDatatableItems.items = this.datatableItems.items.filter(
        (item) =>
          item.th.toUpperCase().includes(this.searchItems[0].toUpperCase())
      );
      for (let i = 1; i < this.searchItems.length; i++) {
        this.shownDatatableItems.items = this.shownDatatableItems.items.filter(
          (item) =>
            item.td[i - 1]
              .toUpperCase()
              .includes(this.searchItems[i].toUpperCase())
        );
      }
    },
    resetFilter() {
      this.searchItems = Array.from(
        { length: datatableItems.headers.length },
        () => {
          let emptyString = "";
          return emptyString;
        }
      );
      this.filterItems();
    },
  },
};
</script>

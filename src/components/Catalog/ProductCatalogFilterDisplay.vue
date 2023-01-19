<template>
  <div class="filter-display">
    <div
      class="filter-display_item"
      v-for="filter in formattedFilters"
      :key="filter.name"
    >
      {{ filter.value }}
      <span class="display-close" @click="deleteFilter(filter)">&#215;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Object,
    },
  },
  methods: {
    deleteFilter(filter) {
      const editedFilters = { ...this.filters };

      console.log(filter, editedFilters);
    },
  },
  computed: {
    formattedFilters() {
      const formatFilters = [];

      for (const key in this.filters) {
        if (typeof this.filters[key] === 'string' && this.filters[key]) {
          formatFilters.push({
            name: key,
            value: this.filters[key],
          });
        } else if (key === 'priceLimit') {
          formatFilters.push({
            name: key,
            value: `Цена: от ${this.filters[key][0]} до ${this.filters[key][1]}`,
          });
        } else if (Array.isArray(this.filters[key])) {
          this.filters[key].forEach((filter) => {
            formatFilters.push({
              name: key,
              value: filter,
            });
          });
        }
      }
      return formatFilters;
    },
  },
};
</script>

<style lang="scss">
.filter-display {
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .filter-display_item {
    padding: 5px 12px;

    height: 30px;
    // margin-bottom: 8px;

    background: #ededed;
    border-radius: 16px;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: #333333;

    .display-close {
      font-size: 1.7em;
      vertical-align: bottom;
      margin-left: 7px;
      line-height: 20px;
      color: #333333;
      cursor: pointer;
    }
  }
}
</style>

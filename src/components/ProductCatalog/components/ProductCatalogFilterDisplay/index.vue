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
  name: 'ProductCatalogFilterDisplay',
  props: {
    filters: {
      type: Object,
    },
  },
  methods: {
    deleteFilter(filter) {
      this.$store.dispatch('DELETE_FILTER', filter);
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
@use './style.scss';
</style>

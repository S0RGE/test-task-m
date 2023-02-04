<template>
  <div class="catalog_sort-by">
    <div class="sort-by_list">
      <span class="sort-by_title">Сортировать по: </span>
      <span
        class="sort-by_item"
        :class="{ active: index === selectedSort, ascend: sortType === 'asc' }"
        @click="setSort(item, index)"
        v-for="(item, index) in sortItems"
        :key="item.name"
        >{{ item.value }}</span
      >
    </div>
    <div class="sort-by_scale">
      <div
        class="sort_scale_max"
        :class="{ active: selectedScale === 'maxScale' }"
        @click="setPageScale('maxScale')"
      >
        <div class="sort_scale-item" v-for="n in 9" :key="n"></div>
      </div>
      <div
        class="sort_scale_min"
        :class="{ active: selectedScale === 'minScale' }"
        @click="setPageScale('minScale')"
      >
        <div class="sort_scale-item" v-for="n in 4" :key="n"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCatalogSortBy',
  data() {
    return {
      selectedSort: '',
      sortType: 'asc',
      selectedScale: 'minScale',
      sortItems: [
        { name: 'messages', value: 'Популярности' },
        { name: 'raiting', value: 'Рейтингу' },
        { name: 'price', value: 'Цене' },
        { name: 'discount', value: 'Скидке' },
        { name: 'updated', value: 'Обновлению' },
      ],
    };
  },
  emits: {
    'set-sort-by': (value) => typeof value === 'object',
    'set-page-scale': (value) => typeof value === 'string',
  },
  methods: {
    setSort(sortBy, index) {
      // TODO: ascending/descending
      if (this.selectedSort === index) {
        this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
        this.$emit('set-sort-by', { ...sortBy, type: this.sortType });
      } else {
        this.selectedSort = index;
        this.sortType = 'asc';
        this.$emit('set-sort-by', { ...sortBy, type: this.sortType });
      }
    },
    setPageScale(scale) {
      this.selectedScale = scale;
      this.$emit('set-page-scale', scale);
    },
  },
};
</script>

<style lang="scss">
@use './style.scss';
</style>

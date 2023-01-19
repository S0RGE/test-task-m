<template>
  <div class="catalog_sort-by">
    <span class="sort-by_title">Сортировать по: </span>
    <span
      class="sort-by_item"
      :class="{ active: index === selectedSort }"
      @click="setSort(item, index)"
      v-for="(item, index) in sortItems"
      :key="item.name"
      >{{ item.value }}</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSort: '',
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
    'set-sort-by': (value) => typeof value === 'string',
  },
  methods: {
    setSort(sortBy, index) {
      if (this.selectedSort === index) {
        this.selectedSort = null;
        this.$emit('set-sort-by', {});
      } else {
        this.selectedSort = index;
        this.$emit('set-sort-by', sortBy);
      }
    },
  },
};
</script>

<style lang="scss">
.catalog_sort-by {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  margin-bottom: 2em;

  .sort-by_title {
    margin-right: 1em;
    color: #bdbdbd; // $color-secondary-grey;
  }

  .sort-by_item {
    color: #333333; // $color-primary-black;
    cursor: pointer;
  }

  .sort-by_item.active {
    color: #279fb9;
  }

  .sort-by_item + .sort-by_item {
    margin-left: 12px;
  }
}
</style>

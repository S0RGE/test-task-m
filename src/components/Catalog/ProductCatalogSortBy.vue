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
.catalog_sort-by {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  margin-bottom: 2em;

  display: flex;
  justify-content: space-between;

  .sort-by_title {
    margin-right: 1em;
    color: #bdbdbd; // $color-secondary-grey;
  }

  .sort-by_item {
    color: #333333; // $color-primary-black;
    cursor: pointer;
    position: relative;
  }

  .sort-by_item.active {
    color: #279fb9;
    margin-right: 16px;
  }

  .sort-by_item.active::after {
    content: url('@/assets/images/arrow.png');
    position: absolute;
    right: -14px;
  }

  .sort-by_item.ascend.active::after {
    transform: rotate(180deg);
  }

  .sort-by_item + .sort-by_item {
    margin-left: 12px;
  }

  .sort-by_scale {
    margin-right: 10px;
    display: flex;
    .sort_scale_max,
    .sort_scale_min {
      cursor: pointer;
    }

    .sort_scale_max {
      width: 24px;
      height: 24px;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);

      grid-gap: 1px;
      .sort_scale-item {
        background-color: #e0e0e0;
        border-radius: 1px;
      }
      &.active .sort_scale-item {
        background-color: #279fb9;
      }
    }

    .sort_scale_min {
      margin-left: 24px;
      width: 24px;
      height: 24px;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);

      grid-gap: 2px;
      & .sort_scale-item {
        background-color: #e0e0e0;
        border-radius: 1px;
      }

      &.active .sort_scale-item {
        background-color: #279fb9;
      }
    }
  }
}
</style>

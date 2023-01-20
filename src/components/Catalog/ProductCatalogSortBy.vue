<template>
  <div class="catalog_sort-by">
    <div class="sort-by_list">
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
    <div class="sort-by_scale">
      <div class="sort_scale_max" @click="setPageScale('maxScale')">
        <div v-for="n in 9" :key="n"></div>
      </div>
      <div class="sort_scale_min" @click="setPageScale('minScale')">
        <div v-for="n in 4" :key="n"></div>
      </div>
    </div>
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
    'set-page-scale': (value) => typeof value === 'string',
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
    setPageScale(scale) {
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
  }

  .sort-by_item.active {
    color: #279fb9;
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
      div {
        background-color: #279fb9;
        border-radius: 1px;
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
      div {
        background-color: #279fb9;
        border-radius: 1px;
      }
    }
  }
}
</style>

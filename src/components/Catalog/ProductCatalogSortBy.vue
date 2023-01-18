<template>
  <div class="catalog_sort-by">
    <span class="sort-by_title">Сортировать по: </span>
    <span class="sort-by_item" v-for="item in sortItems" :key="item">{{
      item
    }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortItems: ['Популярности', 'Рейтингу', 'Цене', 'Скидке', 'Обновлению'],
    };
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
    color: #bdbdbd; // $color-secodary-grey;
  }

  .sort-by_item {
    color: #333333; // $color-primary-black;
  }

  .sort-by_item + .sort-by_item {
    margin-left: 12px;
  }
}
</style>

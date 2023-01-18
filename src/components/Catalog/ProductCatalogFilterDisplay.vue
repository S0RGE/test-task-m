<template>
  <div class="filter-display">
    <div class="filter-display_item" v-for="filter in filters" :key="filter">
      {{ filter }}
      <span class="display-close">&#215;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      default: () => {
        return [
          'Цена: от 321 до  10 203',
          'Легковая техника',
          'Легковая техника',
          'Start Scale Models (SSM)',
          'Bronco',
          '1:43',
          '1:72',
          '1:32',
        ];
      },
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

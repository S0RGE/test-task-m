<template>
  <div class="main-menu_per-page">
    <p>Показывать на странице</p>
    <select
      class="main-menu_per-page_select"
      v-model="productsPerPage"
      @change="setProductsPerPage"
    >
      <option value="10">10 товаров</option>
      <option value="50">50 товаров</option>
      <option value="100">100 товаров</option>
      <option value="160">160 товаров</option>
      <option value="All">Все товары</option>
    </select>
    <v-icon class="down-icon" icon="mdi-chevron-right"></v-icon>
  </div>
</template>

<script>
export default {
  name: 'MainMenuProductsPerPage',
  data() {
    return {
      productsPerPage: 10,
    };
  },
  emits: {
    'set-products-per-page': (value) => typeof value === 'string',
  },
  methods: {
    setProductsPerPage() {
      this.$emit('set-products-per-page', this.productsPerPage);
    },
  },
};
</script>

<style lang="scss"></style>

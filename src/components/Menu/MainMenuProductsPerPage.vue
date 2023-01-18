<template>
  <p>Показывать на странице</p>
  <select v-model="productsPerPage" @change="setProductsPerPage">
    <option value="10">10</option>
    <option value="50">50</option>
    <option value="100">100</option>
    <option value="All">Все</option>
  </select>
</template>

<script>
export default {
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

<style></style>

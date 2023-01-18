<template>
  <header class="header">
    <catalog-header />
  </header>
  <main class="main">
    <main-menu />
    <product-catalog
      :products="products"
      :products-per-page="productsPerPage"
    />
  </main>
</template>

<script>
import CatalogHeader from '@/components/CatalogHeader.vue';
import MainMenu from '@/components/Menu/MainMenu.vue';
import ProductCatalog from '@/components/Catalog/ProductCatalog.vue';

export default {
  data() {
    return {
      productsPerPage: 20,
    };
  },
  components: {
    CatalogHeader,
    MainMenu,
    ProductCatalog,
  },
  created() {
    this.$store.dispatch('GET_PRODUCTS');
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    productsCount() {
      return this.products.length;
    },
  },
};
</script>

<style lang="scss"></style>

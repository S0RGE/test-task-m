<template>
  <v-container fluid>
    <header class="header">
      <catalog-header />
    </header>
    <main class="main">
      <main-menu @set-product-per-page="setProductPerPage" />
      <product-catalog :products-per-page="productsPerPage" />
    </main>
  </v-container>
</template>

<script>
import CatalogHeader from '@/components/CatalogHeader';
import MainMenu from '@/components/Menu';
import ProductCatalog from '@/components/ProductCatalog';

export default {
  name: 'HomeView',
  data() {
    return {
      productsPerPage: 10,
    };
  },
  methods: {
    setProductPerPage(quantity) {
      if (!isNaN(quantity)) {
        this.productsPerPage = +quantity;
      } else {
        this.productsPerPage = this.productsCount;
      }
    },
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
    productsCount() {
      return this.$store.getters.getProducts.length;
    },
  },
};
</script>

<style lang="scss">
@use './style.scss';
</style>

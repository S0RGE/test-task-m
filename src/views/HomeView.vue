<template>
  <v-container fluid>
    <header class="header">
      <catalog-header />
    </header>
    <main class="main">
      <main-menu
        @set-product-per-page="setProductPerPage"
        @update-filters="updateFilters"
      />
      <product-catalog
        :products="products"
        :products-per-page="productsPerPage"
        :filters="filters"
      />
    </main>
  </v-container>
</template>

<script>
import CatalogHeader from '@/components/CatalogHeader.vue';
import MainMenu from '@/components/Menu/MainMenu.vue';
import ProductCatalog from '@/components/Catalog/ProductCatalog.vue';

export default {
  data() {
    return {
      productsPerPage: 10,
      filters: {
        category: '',
        companies: [],
        priceLimit: [0, 10000],
        inStock: false,
      },
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
    updateFilters(filters) {
      this.filters = filters;
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

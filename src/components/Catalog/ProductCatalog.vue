<template>
  <div class="product-catalog_wrapper">
    <product-catalog-filter-display />
    <product-catalog-sort-by />
    <div class="product-catalog">
      <product-catalog-card
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCatalogCard from './ProductCatalogCard.vue';
import ProductCatalogFilterDisplay from './ProductCatalogFilterDisplay.vue';
import ProductCatalogSortBy from './ProductCatalogSortBy.vue';

export default {
  data() {
    return {
      page: 1,
    };
  },
  props: {
    products: {
      type: Array,
    },
    productsPerPage: {
      type: Number,
      required: true,
    },
  },
  components: {
    ProductCatalogCard,
    ProductCatalogFilterDisplay,
    ProductCatalogSortBy,
  },
  computed: {
    paginatedProducts() {
      return this.products.slice(this.startIndex, this.endIndex);
    },
    startIndex() {
      return (this.page - 1) * this.productsPerPage;
    },
    endIndex() {
      return this.page * this.productsPerPage;
    },
  },
};
</script>

<style lang="scss">
.product-catalog_wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  .product-catalog {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 260px);
    gap: 40px 32px;
  }
}
</style>

<template>
  <div class="product-catalog_wrapper">
    <product-catalog-filter-display :filters="formattedFilters" />
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
    filters: {
      type: Object,
      default: () => ({
        category: '',
        companies: [],
        priceLimit: [0, 10000],
        inStock: false,
      }),
    },
  },
  components: {
    ProductCatalogCard,
    ProductCatalogFilterDisplay,
    ProductCatalogSortBy,
  },
  computed: {
    filteredProducts() {
      let result = this.products;
      // фильтр по категориям
      if (this.filters.category) {
        result = this.products.filter(
          (product) => product?.category === this.filters.category
        );
      }
      // фильтр по наличию
      if (this.filters.inStock) {
        result = result.filter(
          (product) => product.inStock === this.filters.inStock
        );
      }
      // фильтр по компании
      if (this.filters.companies.length)
        result = result.filter((product) =>
          this.filters.companies.includes(product.company)
        );

      // фильтр по цене
      // result = result.filter(
      //   (product) =>
      //     product.price <= this.filters.priceLimit[1] &&
      //     product.price >= this.filters.priceLimit[0]
      // );
      return result;
    },
    paginatedProducts() {
      return this.filteredProducts.slice(this.startIndex, this.endIndex);
    },
    startIndex() {
      return (this.page - 1) * this.productsPerPage;
    },
    endIndex() {
      return this.page * this.productsPerPage;
    },
    formattedFilters() {
      // return this.filters;
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

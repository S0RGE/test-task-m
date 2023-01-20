<template>
  <div class="product-catalog_wrapper">
    <product-catalog-filter-display :filters="filters" />
    <product-catalog-sort-by
      @set-sort-by="setSortBy"
      @set-page-scale="setPageScale"
    />
    <div class="minScale" ref="productCatalog">
      <div class="product-catalog">
        <product-catalog-card
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
          :isInCart="isInCart(product)"
        />
      </div>
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
      sortBy: '',
    };
  },
  props: {
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
  methods: {
    setSortBy(sortBy) {
      this.sortBy = sortBy;
    },
    sortProducts(products) {
      let result = [...products];
      result.sort((a, b) => {
        return a[this.sortBy.name] - b[this.sortBy.name];
      });

      return result;
    },
    isInCart(product) {
      return !!this.cart.find((p) => p.id === product.id);
    },
    setPageScale(scale) {
      console.log(scale);
      const productCatalog = this.$refs.productCatalog;
      if (productCatalog.className == scale) {
        return;
      }
      productCatalog.className = scale;
    },
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
      result = result.filter(
        (product) =>
          product.price <= this.filters.priceLimit[1] &&
          product.price >= this.filters.priceLimit[0]
      );
      return result;
    },
    paginatedProducts() {
      return this.sortProducts(this.filteredProducts).slice(
        this.startIndex,
        this.endIndex
      );
    },
    startIndex() {
      return (this.page - 1) * this.productsPerPage;
    },
    endIndex() {
      return this.page * this.productsPerPage;
    },
    filters() {
      return this.$store.getters.getFilters;
    },
    products() {
      return this.$store.getters.getProducts;
    },
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>

<style lang="scss">
.product-catalog_wrapper {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 30px;

  .minScale,
  .maxScale {
    min-width: 100%;
  }
}

.minScale .product-catalog {
  grid-template-columns: repeat(auto-fit, 260px);
  gap: 40px 32px;
  .product-card_wrapper {
    min-height: 382px;
  }
}

.maxScale .product-catalog {
  grid-template-columns: repeat(auto-fit, 202px);
  gap: 40px 32px;
  .product-card_wrapper {
    min-height: 328px;
  }
}

.product-catalog {
  width: 100%;
  display: grid;
}
</style>

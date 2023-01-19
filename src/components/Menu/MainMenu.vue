<template>
  <div class="main-menu-category">
    <main-menu-category
      @set-category-filter="setCategoryFilter"
      :categories="categories"
    />
    <div class="product-filter company">
      <main-menu-companies
        :companies="companies"
        @set-company-filter="setCompanyFilter"
      />
    </div>
    <div class="product-filter scale">
      <main-menu-product-scale />
    </div>
    <div class="product-filter price-filter">
      <main-menu-price-filter
        @set-max-price="setMaxPrice"
        @set-min-price="setMinPrice"
      />
    </div>
    <div class="product-filter in-stock">
      <main-menu-product-instock @set-instock="setInstockFilter" />
    </div>
    <div class="product-per-page">
      <main-menu-products-per-page @set-products-per-page="setProductPerPage" />
    </div>
    <div class="reset-filters">
      <button @click="resetFilter">Сбросить товары</button>
    </div>
    <div class="liked-filter">Сохранить подборку &#x2764;</div>
  </div>
</template>

<script>
import MainMenuCategory from './MainMenuCategory.vue';
import MainMenuCompanies from './MainMenuCompanies.vue';
import MainMenuPriceFilter from './MainMenuPriceFilter.vue';
import MainMenuProductInstock from './MainMenuProductInstock.vue';
import MainMenuProductScale from './MainMenuProductScale.vue';
import MainMenuProductsPerPage from './MainMenuProductsPerPage.vue';

export default {
  data() {
    return {};
  },
  components: {
    MainMenuCategory,
    MainMenuCompanies,
    MainMenuProductInstock,
    MainMenuProductScale,
    MainMenuPriceFilter,
    MainMenuProductsPerPage,
  },
  emits: {
    'set-product-per-page': (value) => typeof value === 'string',
  },
  methods: {
    setCategoryFilter(categoryIndex) {
      this.filters.category = this.categories[categoryIndex];
      this.updateFilters();
    },
    setInstockFilter(instock) {
      this.filters.inStock = instock;
      this.updateFilters();
    },
    setCompanyFilter(company) {
      if (company.checked) {
        this.filters.companies.push(this.companies[company.index]);
      } else {
        this.filters.companies.splice(company.index, 1);
      }
      this.updateFilters();
    },
    setMaxPrice(price) {
      this.filters.priceLimit[1] = price;
      this.updateFilters();
    },
    setMinPrice(price) {
      this.filters.priceLimit[0] = price;
      this.updateFilters();
    },
    setProductPerPage(quantity) {
      this.$emit('set-product-per-page', quantity);
    },
    updateFilters() {
      this.$store.dispatch('ADD_FILTERS', this.filters);
    },
    resetFilter() {
      this.filters = {
        category: '',
        companies: [],
        priceLimit: [0, 10000],
        inStock: false,
      };
      this.updateFilters();
    },
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
    companies() {
      return this.$store.getters.getCompanies;
    },
    filters() {
      return this.$store.getters.getFilters;
    },
  },
};
</script>

<style></style>

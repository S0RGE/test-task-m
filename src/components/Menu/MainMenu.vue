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
      <main-menu-price-filter />
    </div>
    <div class="product-filter in-stock">
      <main-menu-product-instock />
    </div>
    <div class="product-per-page">
      <main-menu-products-per-page />
    </div>
    <div class="reset-filters">
      <button>Сбросить товары</button>
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
    return {
      filters: {
        category: '',
        companies: [],
      },
    };
  },
  components: {
    MainMenuCategory,
    MainMenuCompanies,
    MainMenuProductInstock,
    MainMenuProductScale,
    MainMenuPriceFilter,
    MainMenuProductsPerPage,
  },
  methods: {
    setCategoryFilter(categoryIndex) {
      this.filters.category = this.categories[categoryIndex];
    },
    setCompanyFilter(company) {
      if (company.checked) {
        this.filters.companies.push(this.companies[company.index]);
      } else {
        this.filters.companies.splice(company.index, 1);
      }
    },
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
    companies() {
      return this.$store.getters.getCompanies;
    },
  },
};
</script>

<style></style>

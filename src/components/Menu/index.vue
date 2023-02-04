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
      <main-menu-product-scale @set-filter-scale="setFilterScale" />
    </div>
    <div class="product-filter price-filter">
      <main-menu-price-filter @set-price-range="setPriceRange" />
    </div>
    <div class="product-filter in-stock">
      <main-menu-product-instock @set-instock="setInstockFilter" />
    </div>
    <div class="product-per-page">
      <main-menu-products-per-page @set-products-per-page="setProductPerPage" />
    </div>
    <div class="reset-filters">
      <button class="reset-filters_button" @click="resetFilter">
        Сбросить товары
      </button>
    </div>
    <div class="liked-filter">
      Сохранить подборку
      <v-icon icon="mdi-cards-heart-outline"></v-icon>
    </div>
  </div>
</template>

<script>
import MainMenuCategory from './components/MainMenuCategory';
import MainMenuCompanies from './components/MainMenuCompanies';
import MainMenuPriceFilter from './components/MainMenuPriceFilter';
import MainMenuProductInstock from './components/MainMenuProductInstock';
import MainMenuProductScale from './components/MainMenuProductScale';
import MainMenuProductsPerPage from './components/MainMenuProductsPerPage';

export default {
  name: 'MainMenu',
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
      let updatedFilters = { ...this.filters };
      if (!categoryIndex) {
        updatedFilters = { ...updatedFilters, category: '' };
      } else {
        updatedFilters = {
          ...updatedFilters,
          category: this.categories[categoryIndex],
        };
      }
      this.updateFilters(updatedFilters);
    },
    setInstockFilter(instock) {
      const updatedFilters = { ...this.filters, inStock: instock };
      this.updateFilters(updatedFilters);
    },
    setCompanyFilter(editedCompany) {
      const updatedFilters = { ...this.filters };

      const companyIndex = this.filters.companies.findIndex(
        (company) => company === editedCompany.name
      );

      if (companyIndex === -1) {
        updatedFilters.companies.push(editedCompany.name);
      } else {
        updatedFilters.companies.splice(companyIndex, 1);
      }

      this.updateFilters(updatedFilters);
    },
    setPriceRange(priceRange) {
      const updatedFilters = this.filters;
      updatedFilters.priceLimit = priceRange;
      this.updateFilters(updatedFilters);
    },
    setMaxPrice(price) {
      const updatedFilters = this.filters;
      updatedFilters.priceLimit[1] = price;
      this.updateFilters(updatedFilters);
    },
    setMinPrice(price) {
      const updatedFilters = this.filters;
      updatedFilters.priceLimit[0] = price;
      this.updateFilters(updatedFilters);
    },
    setProductPerPage(quantity) {
      this.$emit('set-product-per-page', quantity);
    },
    setFilterScale(scale) {
      const updatedFilters = this.filters;
      if (scale.checked) {
        updatedFilters.scales.push(scale.name);
      } else {
        const index = updatedFilters.scales.findIndex((s) => s === scale.name);
        if (index === -1) return;
        updatedFilters.scales.splice(index, 1);
      }
      this.updateFilters(updatedFilters);
    },
    updateFilters(filters) {
      this.$store.dispatch('ADD_FILTERS', filters);
    },
    resetFilter() {
      const resetFilters = {
        category: '',
        companies: [],
        priceLimit: [0, 10000],
        inStock: false,
      };
      this.updateFilters(resetFilters);
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

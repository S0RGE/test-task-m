<template>
  <h3 class="menu-item_header">Производитель</h3>
  <v-text-field
    class="mt-2"
    hide-details="auto"
    variant="outlined"
    density="compact"
    append-inner-icon="mdi-magnify"
    @change="onInput"
    v-model="companyFilter"
  ></v-text-field>
  <div class="companies-filter">
    <div
      v-for="company in filteredCompanies"
      :key="company"
      class="companies-filter_item"
    >
      <menu-item
        :items-count="getCompanyProductCount(company)"
        :label="company"
        @set-item-filter="setCompanyFilter"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from '../MenuItem';

export default {
  name: 'MainMenuCompanies',
  components: { MenuItem },
  data() {
    return {
      companyFilter: '',
    };
  },
  props: {
    companies: {
      type: Array,
      required: true,
    },
  },
  emits: {
    'set-company-filter': (value) => typeof value === 'object',
  },
  methods: {
    onInput(search) {
      this.companyFilter = search;
    },
    setCompanyFilter(company) {
      this.$emit('set-company-filter', company);
    },
    getCompanyProductCount(company) {
      const result = this.products.reduce((acc, item) => {
        if (item.company === company) {
          return acc + 1;
        }
        return acc;
      }, 0);

      return result;
    },
  },
  created() {
    this.$store.dispatch('GET_COMPANIES');
  },
  computed: {
    filteredCompanies() {
      return this.companies.filter((company) =>
        company.toLowerCase().includes(this.companyFilter.toLowerCase())
      );
    },
    products() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>

<style lang="scss"></style>

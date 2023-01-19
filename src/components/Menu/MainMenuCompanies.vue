<template>
  <h3 class="menu-item_header">Производитель</h3>
  <v-text-field
    hide-details="auto"
    variant="outlined"
    density="compact"
    rounded
    @change="onInput"
    v-model="companyFilter"
  ></v-text-field>
  <div class="companies-filter">
    <div
      v-for="(company, index) in filteredCompanies"
      :key="company"
      class="companies-filter_item"
    >
      <company-item
        :company="company"
        :index="index"
        @set-company-filter="setCompanyFilter"
      />
    </div>
  </div>
</template>

<script>
import CompanyItem from './CompanyItem.vue';

export default {
  components: { CompanyItem },
  data() {
    return {
      companyFilter: '',
      checkbox1: false,
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
  },
};
</script>

<style lang="scss"></style>

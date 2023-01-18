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
      ref="companyFilterItems"
    >
      <input
        @change="setCompanyFilter(index)"
        type="checkbox"
        :id="`company_${index}`"
      />
      <label :for="`company_${index}`"> {{ company }} </label>
      <span> 12 </span>
    </div>
  </div>
</template>

<script>
export default {
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
    setCompanyFilter(companyIndex) {
      const checked =
        this.$refs.companyFilterItems[companyIndex].children[0].checked;
      this.$emit('set-company-filter', { index: companyIndex, checked });
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

<template>
  <input
    @change="setCompanyFilter(index)"
    type="checkbox"
    :id="`company_${index}`"
    v-model="companyEnters"
  />
  <label :for="`company_${index}`"> {{ company }} </label>
  <span> 12 </span>
</template>

<script>
export default {
  props: {
    company: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  emits: {
    'set-company-filter': (value) => typeof value === 'object',
  },
  data() {
    return {
      companyEnters: false,
    };
  },
  methods: {
    setCompanyFilter() {
      this.$emit('set-company-filter', {
        checked: this.companyEnters,
        index: this.index,
        name: this.company,
      });
    },
  },
};
</script>

<style></style>

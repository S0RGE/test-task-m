<template>
  <v-checkbox
    v-model="companyEnters"
    color="red"
    value="false"
    inline="true"
    hide-details="true"
    density="true"
    @click="setCompanyFilter"
    :label="company"
  ></v-checkbox>
  <span> {{ itemsCount }} </span>
</template>

<script>
export default {
  props: {
    company: {
      type: String,
    },
    itemsCount: {
      type: String,
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

<style lang="scss">
.mdi-checkbox-marked::before {
  color: #279fb9;
}
.v-label.v-label--clickable {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  opacity: 1;
}
</style>

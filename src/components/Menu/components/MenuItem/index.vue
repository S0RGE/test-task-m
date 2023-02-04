<template>
  <v-checkbox
    v-model="itemEnters"
    color="red"
    :inline="true"
    hide-details="true"
    density="compact"
    @change="setItemFilter"
    :label="label"
  ></v-checkbox>
  <span> {{ itemsCount }} </span>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    label: {
      type: String,
    },
    itemsCount: {
      type: Number,
    },
  },
  emits: {
    'set-item-filter': (value) => typeof value === 'object',
  },
  data() {
    return {
      itemEnters: false,
    };
  },
  methods: {
    setItemFilter() {
      this.$emit('set-item-filter', {
        checked: this.itemEnters,
        name: this.label,
      });
    },
  },
};
</script>

<style lang="scss">
@use './style.scss';
</style>

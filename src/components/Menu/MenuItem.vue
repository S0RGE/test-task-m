<template>
  <v-checkbox
    v-model="itemEnters"
    color="red"
    value="false"
    :inline="true"
    hide-details="true"
    density="compact"
    @click="setItemFilter"
    :label="label"
  ></v-checkbox>
  <span> {{ itemsCount }} </span>
</template>

<script>
export default {
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

.v-input--density-compact {
  --v-input-control-height: auto;
}
</style>

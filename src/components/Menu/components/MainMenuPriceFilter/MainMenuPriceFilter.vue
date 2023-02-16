<template>
  <div class="price-display">
    <div class="price-display_item">
      <span class="price-display_text">От</span>
      <input
        class="price-display_value"
        v-model.lazy="priceRange[0]"
        @input="setPriceRange"
      />
    </div>
    <div class="price-display_item">
      <span class="price-display_text">До</span>
      <input
        class="price-display_value"
        v-model.lazy="priceRange[1]"
        @input="setPriceRange"
      />
    </div>
  </div>
  <div class="price-slider">
    <v-range-slider
      :step="1"
      v-model.lazy="priceRange"
      :min="0"
      :max="10000"
      color="#279fb9"
    ></v-range-slider>
  </div>
</template>

<script>
export default {
  name: 'MainMenuPriceFilter',
  data() {
    return {
      priceRange: [0, 10000],
    };
  },
  emits: {
    'set-price-range': (value) => typeof value === 'object',
  },
  methods: {
    setPriceRange() {
      this.$emit('set-price-range', this.priceRange);
    },
  },
  watch: {
    priceRange() {
      this.setPriceRange();
    },
  },
};
</script>

<style lang="scss">
@use './style.scss';
</style>

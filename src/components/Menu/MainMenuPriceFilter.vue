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
.price-display {
  display: flex;
  column-gap: 12px;

  .price-display_text {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #757575;
    margin-bottom: 4px;
  }

  .price-display_item {
    display: flex;
    flex-direction: column;
  }

  .price-display_value {
    border: 1px solid #e0e0e0;
    border-radius: 9px;

    width: 98px;
    height: 36px;

    padding: 8px 12px;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>

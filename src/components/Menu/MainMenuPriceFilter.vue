<template>
  <div class="price-display">
    <div class="price-display_from">
      <span class="price-display_text">От</span>
      <input
        class="price-display_value"
        v-model="minPrice"
        @input="setMinPrice"
      />
    </div>
    <div class="price-display_to">
      <span class="price-display_text">До</span>
      <input
        class="price-display_value"
        v-model="minPrice"
        @input="setMinPrice"
      />
    </div>
  </div>
  <div class="price-slider"></div>
</template>

<script>
export default {
  data() {
    return {
      minPrice: 0,
      maxPrice: 10000,
    };
  },
  emits: {
    'set-min-price': (value) => typeof value === 'string',
    'set-max-price': (value) => typeof value === 'string',
  },
  methods: {
    setMinPrice() {
      this.$emit('set-min-price', this.minPrice);
    },
    setMaxPrice() {
      this.$emit('set-max-price', this.maxPrice);
    },
  },
};
</script>

<style lang="scss">
.price-slider {
  position: relative;

  input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    pointer-events: none;
    // -webkit-appearance: none;
  }

  input[type='range']::-webkit-slider-thumb {
    pointer-events: auto;
    -webkit-appearance: none;
  }

  input[type='range']::-moz-range-thumb {
    pointer-events: auto;
    -moz-appearance: none;
  }
}
</style>

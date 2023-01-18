<template>
  <div class="price-display">
    <div class="price-display_from">
      <span class="price-display_text">От</span>
      <span class="price-display_value">{{ priceMin }}</span>
    </div>
    <div class="price-display_to">
      <span class="price-display_text">До</span>
      <span class="price-display_value">{{ priceMax }}</span>
    </div>
  </div>
  <div class="price-slider"></div>
</template>

<script>
export default {
  data() {
    return {
      priceMin: 0,
      priceMax: 100,
    };
  },
  watch: {
    priceValues() {
      // TODO:create
      console.log('Price values: ', this.priceValues);
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

<template>
  <div class="switch-wrapper">
    <label class="switch">
      <input type="checkbox" @change="setInstockFilter" v-model="instock" />
      <span class="slider round"></span>
    </label>
  </div>
  <div>Только товары в наличии</div>
</template>

<script>
export default {
  name: 'MainMenuProductInstock',
  data() {
    return {
      instock: false,
    };
  },
  emits: {
    'set-instock': (value) => typeof value === 'boolean',
  },
  methods: {
    setInstockFilter() {
      this.$emit('set-instock', this.instock);
    },
  },
};
</script>

<style lang="scss" scoped>
@use './style.scss';
</style>

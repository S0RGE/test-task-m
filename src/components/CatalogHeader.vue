<template>
  <bread-crumbs />
  <h1>
    Каталог <span> {{ productCount }} товара</span>
  </h1>
</template>

<script>
import BreadCrumbs from './BreadCrumbs.vue';
export default {
  data() {
    return {
      productCount: 0,
    };
  },
  mounted() {
    this.productCount = this.$store.getters.getProducts.length;
  },
  components: { BreadCrumbs },
};
</script>

<style lang="scss"></style>

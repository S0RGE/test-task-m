<template>
  <bread-crumbs />
  <h1>
    Каталог <span> {{ productCount }} товара</span>
  </h1>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs';
export default {
  name: 'CatalogHeader',
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

<style lang="scss">
@use './style.scss';
</style>

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
      productCount: 123,
    };
  },
  components: { BreadCrumbs },
};
</script>

<style lang="scss"></style>

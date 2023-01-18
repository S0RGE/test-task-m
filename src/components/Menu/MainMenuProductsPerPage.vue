<template>
  <p>Показывать на странице</p>
  <v-select
    v-model="productsPerPage"
    :items="['10', '20', '30', '50', '100', 'Все']"
  ></v-select>
</template>

<script>
export default {
  data() {
    return {
      productsPerPage: 10,
    };
  },
};
</script>

<style></style>

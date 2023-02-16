<template>
  <v-breadcrumbs :items="items" class="bread-crumbs">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  data: () => ({
    items: [
      {
        title: 'Главная',
        disabled: false,
        href: '/',
      },
      {
        title: 'Автомобили и мотоциклы',
        disabled: false,
        href: '/',
      },
      {
        title: 'Легковые',
        disabled: false,
        href: '/',
      },
      {
        title: 'Tamiya',
        disabled: false,
        href: '/',
      },
      {
        title: 'Porsche 959',
        disabled: true,
        href: '/',
      },
    ],
  }),
};
</script>

<style lang="scss">
@use './style.scss';
</style>

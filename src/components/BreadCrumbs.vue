<template>
  <v-breadcrumbs :items="items" class="bread-crumbs">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
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
.bread-crumbs {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.v-breadcrumbs-item--disabled {
  color: #bdbdbd;
}
</style>

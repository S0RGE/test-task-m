<template>
  <h3 class="main-menu_header">Категории</h3>
  <div class="product-categories">
    <div
      class="product-category_button menu-item"
      v-for="(category, index) in categories"
      :class="{ active: index === activeCategory }"
      :key="category"
      @click="setCategory(index)"
    >
      {{ category }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenuCategory',
  mounted() {
    this.$store.dispatch('GET_CATEGORIES');
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeCategory: '',
    };
  },
  emits: {
    'set-category-filter': (value) => typeof value === 'number',
  },
  methods: {
    setCategory(indexOfCategory) {
      if (this.activeCategory === indexOfCategory) {
        this.activeCategory = null;
        this.$emit('set-category-filter', null);
      } else {
        this.activeCategory = indexOfCategory;
        this.$emit('set-category-filter', indexOfCategory);
      }
    },
  },
};
</script>

<style></style>

<template>
  <h3 class="menu-item_header">Масштаб</h3>
  <v-text-field
    class="mt-2"
    hide-details="auto"
    variant="outlined"
    density="compact"
    rounded
    append-inner-icon="mdi-magnify"
    @change="onInput"
    v-model="scaleFilter"
  ></v-text-field>
  <div class="scale-views">
    <div
      class="companies-filter_item"
      v-for="scale in filteredScales"
      :key="scale"
    >
      <menu-item :label="scale" :items-count="12" @set-item-filter="onInput" />
    </div>
  </div>
</template>

<script>
import MenuItem from '../MenuItem';
export default {
  name: 'MainMenuProductScale',
  components: { MenuItem },
  data() {
    return {
      scaleFilter: '',
    };
  },
  emits: {
    'set-filter-scale': (value) => typeof value === 'object',
  },
  methods: {
    onInput(scale) {
      this.$emit('set-filter-scale', scale);
    },
  },
  computed: {
    filteredScales() {
      return this.scales.filter((scale) =>
        scale.toLowerCase().includes(this.scaleFilter.toLowerCase())
      );
    },
    scales() {
      return this.$store.getters.getScales;
    },
  },
  created() {
    this.$store.dispatch('GET_SCALES');
  },
};
</script>

<style></style>

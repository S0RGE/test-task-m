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
import MenuItem from './MenuItem.vue';
export default {
  components: { MenuItem },
  data() {
    return {
      scaleViews: [
        '1:24',
        '1:6',
        '1:12',
        '1:9',
        '1:32',
        '1:45',
        '1:43',
        '1:16',
      ],
      scaleFilter: '',
    };
  },
  methods: {
    onInput(search) {
      // TODO:create
      console.log('Method not implemented', search);
    },
  },
  computed: {
    filteredScales() {
      return this.scaleViews.filter((scale) =>
        scale.toLowerCase().includes(this.scaleFilter.toLowerCase())
      );
    },
  },
};
</script>

<style></style>

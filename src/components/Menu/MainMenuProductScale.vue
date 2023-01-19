<template>
  <h3 class="menu-item_header">Масштаб</h3>
  <v-text-field
    hide-details="auto"
    variant="outlined"
    density="compact"
    rounded
    @change="onInput"
  ></v-text-field>
  <div class="scale-views">
    <div class="scale-view_value" v-for="scale in scaleViews" :key="scale">
      <menu-item :label="scale" :items-count="12" />
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
    };
  },
  methods: {
    onInput(search) {
      // TODO:create
      console.log('Method not implemented', search);
    },
  },
};
</script>

<style></style>

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
      <input type="checkbox" />
      1:{{ scale.value }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scaleViews: [
        { value: 24 },
        { value: 6 },
        { value: 12 },
        { value: 9 },
        { value: 32 },
        { value: 45 },
        { value: 43 },
        { value: 16 },
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

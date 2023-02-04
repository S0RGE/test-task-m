<template>
  <div class="product-card_wrapper">
    <div class="product-card">
      <div
        class="product-card_liked"
        :class="{ 'product-card_like': product.liked }"
      >
        <v-icon icon="mdi-cards-heart"></v-icon>
      </div>
      <div class="product-card_image">
        <img :src="getImage()" alt="img" />
      </div>
      <div class="product-card_data">
        <div class="product-card_price">{{ product.price }} &#8381;</div>
        <p>{{ product.name }}</p>
        <div class="product-card_scale">
          <span class="product-card_scale_badge">{{ product.scale }}</span>
          <span>AVD Models </span>
        </div>
        <div class="product-card_rating">
          <div class="product-card_stars" style="color: yellow">
            <v-rating
              model-value="product.raiting"
              size="small"
              density="compact"
              v-model="raiting"
            ></v-rating>
          </div>
          <div class="product-card_review">{{ product.messages }} отзывов</div>
        </div>
      </div>
      <div class="card-action">
        <button
          @click="toggleCard"
          :class="isInCart ? 'in-cart' : 'not-in-cart'"
        >
          {{ isInCart ? 'В корзине' : 'В корзину' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCatalogCard',
  data() {
    return {
      raiting: 0,
    };
  },
  props: {
    product: {
      type: Object,
    },
    isInCart: {
      type: Boolean,
    },
  },
  methods: {
    getImage() {
      return require(`../../../../${this.product.image}`);
      // return require(`@/assets/images/${this.product.image}`);
    },
    toggleCard() {
      this.$store.dispatch('TOGGLE_CARD', this.product.id);
    },
  },
  created() {
    this.raiting = this.product.raiting;
  },
};
</script>

<style lang="scss">
@use './style.scss';
</style>

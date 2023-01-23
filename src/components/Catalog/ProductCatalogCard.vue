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
      return require(`../../${this.product.image}`);
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
.product-card_wrapper {
  position: relative;
}

.maxScale {
  .product-card_wrapper {
    max-width: 202px;
  }
}

.product-card {
  position: absolute;
  left: 0;
  top: 0;

  transition: all 0.7ms;
  display: flex;
  flex-direction: column;

  width: 100%;

  filter: drop-shadow(1px 1px 15px rgba(0, 0, 0, 0.1));
  border-radius: 16px;
  background-color: #fff;

  .product-card_liked,
  .card-action {
    display: none;
  }

  &:hover {
    .product-card_liked {
      display: block;
      position: absolute;
      width: 18px;
      height: 16px;
      right: 7px;
      top: 4px;

      font-size: 12px;

      .mdi-cards-heart::before {
        cursor: pointer;
        color: #fff;
      }
    }

    .card-action {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 12px 0 12px;
      margin-bottom: 8px;
      gap: 10px;

      button {
        width: 244px;
        height: 32px;
        align-self: center;
        border-radius: 8px;
        cursor: pointer;
      }

      button.not-in-cart {
        background: #279fb9;

        color: #fff;
      }

      button.in-cart {
        background: #ffc020;

        color: #333333;
      }
    }
  }

  .product-card_image {
    width: 100%;
    height: 50%;
    img {
      width: 100%;
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
    }
  }

  .product-card_data {
    display: flex;
    flex-direction: column;
    padding: 8px;

    .product-card_price {
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #333333;
      margin: 8px 0 20px 0;
    }

    .product-card_scale {
      display: flex;
      align-items: center;
      column-gap: 8px;
      height: 24px;
      margin-bottom: 8px;
    }

    .product-card_scale_badge {
      display: flex;
      width: 40px;
      height: 24px;
      line-height: 24px;
      color: #ffffff;

      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      text-align: center;

      box-sizing: border-box;

      padding: 4px 8px;

      background: #ed7853;
      border-radius: 4px;
    }
  }

  .product-card_rating {
    .product-card_review {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #bdbdbd;
    }
  }
}
</style>

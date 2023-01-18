<template>
  <div class="product-card">
    <div
      class="product-card_liked"
      :class="{ 'product-card_like': product.liked }"
    >
      &#x2764;
    </div>
    <div class="product-card_image"></div>
    <div class="product-card_data">
      <div class="product-card_price">{{ product.price }} &#8381;</div>
      <p>{{ product.name }}</p>
      <div class="product-card_scale">
        <span class="product-card_scale_badge">1:43</span> AVD Models
      </div>
      <div class="product-card_rating">
        <div class="product-card_stars" style="color: yellow">
          &#9734;&#9734;&#9734;&#9734;&#9734;
        </div>
        <div class="product-card_review">{{ product.messages }} отзывов</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.product-card {
  position: relative;

  display: flex;
  flex-direction: column;

  height: 382px;
  width: 100%;

  filter: drop-shadow(1px 1px 15px rgba(0, 0, 0, 0.1));
  border-radius: 16px;
  background-color: #fff;

  .product-card_liked {
    position: absolute;
    width: 18px;
    height: 16px;
    right: 17px;
    top: 0;
    font-size: 2rem;
    &.product-card_like {
      color: #ff0000;
      cursor: pointer;
    }
  }

  .product-card_image {
    width: 100%;
    height: 202px;
    background: url('@/assets/images/product_image_1.png') center no-repeat;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
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
    }

    .product-card_scale_badge {
      display: inline-block;
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

<template>
  <div
    class="component justify-content-center bg-grey price-info my-2 text-center p-3 elevation-1 rounded-2"
  >
    <h2 class="font text-decoration-underline">{{ price.store_name }}</h2>
    <h4 class="text-primary lighten-10">{{ price.name }}</h4>
    <div class="d-flex text-center justify-content-center gap-3">
      <p class=" text-muted"><b>Price:</b> {{ price.price_text }}</p>

      <p class="text-muted"><b>Updated:</b> {{ price.updated_at_ago }}</p>
    </div>
    <a class="btn button-51 elevation-5" :href="price.url" target="_blank"
      >Buy here!</a
    >
  </div>
</template>

<script>
import { ActiveBoardGamePrice } from "../../models/BoardGame/ActiveBoardGamePrice.js";

export default {
  props: {
    price: {
      type: ActiveBoardGamePrice,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.price-info {
  background-color: rgb(225, 241, 217);
}

.font {
  font-family: "Baloo 2", cursive;
  font-weight: 700;
}
</style>

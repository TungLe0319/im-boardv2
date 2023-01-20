<template>
  <div class="ABGReviews-card card gradient-box my-2 elevation-3">
    <div class="d-flex align-items-center">
      <img
        :src="review.picture"
        alt=""
        class="rounded-circle forcedImg ms-4 my-2"
      />
      <h4 class="ms-3 mt-3">{{ review.name }}</h4>
    </div>

    <div class="bg-custom rounded m-1">
      <p class="px-5 pt-2 mt-3">{{ review.description }}</p>
    </div>
  </div>
</template>

<script>
import { ABGReviews } from "../../models/BoardGame/ABGReviews.js";

export default {
  props: {
    review: {
      type: ABGReviews,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.bg-custom {
  background-color: #f7f5f5;
}

.forcedImg {
  height: 60px;
  width: 60px;
  object-fit: cover;
}
</style>

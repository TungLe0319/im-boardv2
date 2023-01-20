<template>
  <a :href="forumPost?.postUrl" target="_blank">
    <div class="card bg-transparent border-0 my-2" v-if="forumPost">
      <img
        :src="forumPost?.images.small"
        :alt="forumPost?.title"
        class="forcedImg rounded"
        @error="badImg"
      />

      <div class="card-body p-1 rounded-bottom">
        <p class="card-title">
          <a class="text-dark" :href="forumPost?.postUrl" target="_blank">
            <div class="text-wrap p-1">
              <h6>{{ forumPost?.title }}</h6>
            </div>
          </a>
        </p>
      </div>
    </div>
    <div v-else>loading...</div>
  </a>
</template>

<script>
import { ForumPost } from "../../models/BoardGame/ForumPost.js";

export default {
  props: {
    forumPost: { type: ForumPost, required: true },
  },
  setup(props) {
    return {
      badImg(event) {
        event.target.src =
          "https://cd1.boardgamesmaker.com/images/site/promos/FI_8637.jpg";
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}

.forcedImg {
  height: 170px;
  width: auto;
  object-fit: cover;
  transition: object-fit 0.5s ease;
}

.card {
  border: none;
  transition: 0.5s ease;
}

.card:hover {
  transform: scale(1.01);
  filter: brightness(105%);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  transition: all 0.5s ease;
}
</style>

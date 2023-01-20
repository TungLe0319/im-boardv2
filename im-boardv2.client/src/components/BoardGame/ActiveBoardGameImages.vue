<template>
  <img
    :src="images.original"
    alt=""
    data-bs-toggle="modal"
    data-bs-target="#activeImage"
    @click="setActiveImage()"
    class="forcedImg rounded elevation-2"
  />
</template>

<script>
// Import Swiper Vue.js components


// Import Swiper styles

// import required modules
import { ActiveBoardGameImage } from "../../models/BoardGame/ActiveBoardGameImage.js";
import { AppState } from "../../AppState.js";

export default {
  props: {
    images: {
      type: ActiveBoardGameImage,
      required: true,
    },
  },
  setup(props) {
    return {
      setActiveImage() {
        AppState.activeImage = props.images.original;
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
  height: 200px;
  width: auto;
  object-fit: cover;
}

.card {
  border: none;
}
</style>

<template>
  
  <div class="bg-transparent card my-4   " v-if="boardGame">
    <router-link
      class="text-center"
      :to="{ name: 'BoardGameDetails', params: { id: boardGame?.id } }"
    >
      <img
        :src="boardGame?.coverImg"
        alt=""
        class="forcedImg rounded position-relative p-2"
        @error="badImg"
      />
    </router-link>

    <div class="card-body p-1 mt-2 bg-grey rounded-bottom" >
      <span class="text-center">
        <h6 class="text-decoration-underline text-truncate" :title="boardGame?.name">
          {{ boardGame?.name }}
        </h6>
      </span>

      <div class="card-text d-flex justify-content-center align-items-center">
        <div
          class="player-Icon-And-Players d-flex justify-content-around align-items-center me-3"
          :title="boardGame?.players + ' recommended Players'"
        >
          <i class="mdi mdi-account fs-5"></i>
          <p class="mb-0">{{ boardGame?.players }}</p>
        </div>

        <div class="d-flex justify-content-around align-items-center" :title="boardGame?.playtime + ' minute average playtime'">
          <i class="mdi mdi-clock fs-5"></i>
          <p class="mb-0">{{ boardGame?.playtime }}</p>
        </div>
      </div>
      <div
        class="card-text d-flex justify-content-center"
        :title=" boardGame?.average_user_rating .toFixed(2)+' Average User Rating'"
      >
        <i class="mdi mdi-star text-warning"></i>
        {{ boardGame?.average_user_rating.toFixed(2) }}
      </div>
      <div class="d-flex justify-content-center" v-if="boardGame?.price > 0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2178/2178616.png"
          alt=""
          height="15"
        />
        <p>${{ boardGame?.price }}</p>
        <small class="text-decoration-line-through ms-3 me-1 revealOnHover animate__animated animate__fadeInLeft" :title="boardGame?.retailPrice + ' Retail Price'">
          {{ boardGame?.retailPrice }}
        </small>
        <small class="revealOnHover animate__animated animate__fadeInLeft">rp</small>
      </div>
      <div class="d-flex justify-content-center align-items-center" v-else>
        <img
          src="https://cdn-icons-png.flaticon.com/512/8634/8634777.png"
          alt=""
          height="40"
          width="40"
        />
        <p class="mb-0">Currently unavailable</p>
      </div>

      <div class="d-flex justify-content-center"></div>
      <div
        class="d-flex justify-content-center discount"
        v-if="boardGame?.discount > 0"
      >
        {{ (boardGame?.discount * 100).toFixed(0) }} <small>%off</small>
      </div>
    </div>
  </div>
  <div v-else><div class="skeleton-load card"></div></div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { AppState } from "../../AppState.js";
import { BoardGame } from "../../models/BoardGame/BoardGame.js";
import { BoardGameCategory } from "../../models/BoardGame/BoardGameCategory.js";
import AddToList from "../BoardGame/AddToList.vue";

export default {
  props: {
    boardGame: { type: BoardGame, required: true },
  },
  setup(props) {
    const route = useRoute();
    return {
      route,
      badImg(event) {
        event.target.src =
          "https://cd1.boardgamesmaker.com/images/site/promos/FI_8637.jpg";
      },
    };
  },
  components: { AddToList },
};
</script>

<style lang="scss" scoped>
.revealOnHover {
  opacity: 0%;
  transition: all 0.5s ease;
}

.hvr-bob {
  transition: all 0.5s ease;
}

.discount {
  top: -5px;
  position: absolute;
  font-weight: 500;
  font-size: 16pt;
  font-style: oblique;
  color: rgb(240, 69, 69);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}

.addToList {
  opacity: 0;
  transition: all 0.5s ease;
}

.addToList:hover {
  opacity: 100%;
  transition: all 0.5s ease;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}

.forcedImg {
  height: 125px;
  width: auto;
  object-fit: contain;
}

.card {
  border: none;
  transition: 0.5s ease;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  .revealOnHover {
    opacity: 0%;
    display: none;
    transition: all 0.5s ease;
  }
}

.card:hover {
  transform: scale(1.01);
  filter: brightness(101%);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  transition: all 0.5s ease;

  .revealOnHover {
    opacity: 75%;
    transition: all 0.5s ease;
    display: inline-block;
  }
}
</style>

<template>
  <div class="bg-transparent card my-2 elevation-3" v-if="boardGame">
    <router-link
      class="text-center"
      :to="{ name: 'BoardGameDetails', params: { id: boardGame?.id } }"
    >
      <img
        :src="boardGame?.coverImg"
        alt=""
        class="forcedImg rounded position-relative"
        @error="badImg"
      />
    </router-link>

    <div class="card-body p-1 mt-2 bg-grey rounded">
      <span class="text-center" :title="boardGame?.name">
        <router-link
          class="text-center"
          :to="{ name: 'BoardGameDetails', params: { id: boardGame?.id } }"
        >
          <p class="text-decoration-underline text-truncate text-dark">
            {{ boardGame?.name }}
          </p>
        </router-link>
      </span>

      <!-- <div class="card-text d-flex justify-content-center">
          Categories: 
        </div> -->
      <div
        class="card-text d-flex justify-content-center"
        title="Recommended Players"
      >
        <i class="mdi mdi-account"></i>
        {{ boardGame?.players }}
      </div>
      <div
        class="card-text d-flex justify-content-center"
        title="Average User Rating"
      >
        <i class="mdi mdi-star text-warning"></i>
        {{ boardGame?.average_user_rating.toFixed(2) }}
      </div>
      <div class="d-flex justify-content-center" title="Price">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2178/2178616.png"
          alt=""
          height="15"
        />
        ${{ boardGame.price }}
      </div>
      <div
        class="d-flex justify-content-center discount"
        v-if="boardGame.discount * 100 >= 45"
        title="Discounted Percent"
      >
        {{ (boardGame.discount * 100).toFixed(0) }}
        <i class="mdi mdi-percent"></i>
        <p>off</p>
      </div>
      <!-- <div class="addToList">
            <p class="d-flex justify-content-center " >
          <AddToList :boardGameOnHomePage="boardGame" />
        </p>
        </div> -->
    </div>
  </div>
  <div v-else>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { AppState } from "../../AppState.js";
import { BoardGame } from "../../models/BoardGame/BoardGame.js";
import { BoardGameCategory } from "../../models/BoardGame/BoardGameCategory.js";
import AddToList from "./AddToList.vue";

export default {
  props: {
    boardGame: { type: BoardGame, required: true },
  },
  setup(props) {
    const route = useRoute();
    return {
      badImg(event) {
        event.target.src =
          "https://s3-us-west-1.amazonaws.com/5cc.images/350x350/games/empty%20box.jpg";
      },

      route,
      //  categories : props.boardGame.categories.map(b=> new BoardGameCategory(b)),

      //TODO SORTING BOARD GAME CATEGORIES TO SHOW ON THE HOMEPAGE CARD
      //NEED TO MATCH THE ID AND FIND THE NAME ATTACHED
    };
  },
  components: { AddToList },
};
</script>

<style lang="scss" scoped>
.hvr-bob {
  transition: all 0.5s ease;
}

.discount {
  top: -30px;
  position: absolute;
  font-weight: 700;
  font-size: 20pt;
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
}

.card:hover {
  transform: scale(1.04);
  filter: brightness(110%);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  transition: all 0.5s ease;
}
</style>

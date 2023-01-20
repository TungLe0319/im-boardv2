<template>
  <div class="container-fluid">
    <form @submit.prevent="searchByCoolMethod()">
      <div class="row justify-content-evenly align-items-center">
        <div class="dropdown col-md-3 my-1" id="dropdown">
          <button class="dropdown-toggle collapsed button-50 p-2 focus" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Categories
          </button>
          <div class="row scrollableY p-2 dropdown-menu bg-dark">
            <div class="col-md-12">
              <div class="dropdown-item  inputBox d-flex text-light" v-for="c in categories" :key="c.id"
                id="CategoryDiv">
                <input class="checkBox" type="checkbox" :value="c.id" v-model="filters1" />
                <label for="card-game" class="ms-2">{{ c.name }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown col-md-3 my-1" id="dropdown2">
          <div class="dropdown-item">
            <button class="dropdown-toggle collapsed button-50 p-2 focus" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Mechanics
            </button>
            <div class="row scrollableY p-2 dropdown-menu bg-dark">
              <div class="col-md-12">
                <div class="dropdown-item inputBox d-flex text-light" v-for="m in mechanics" :key="m.id">
                  <input class="checkBox" type="checkbox" :value="m.id" v-model="filters2" />
                  <label for="card-game" class="ms-2">{{ m.name }}</label>
                </div>
              </div>
              <!-- <button @click="getBoardGamesByCategories('eX8uuNlQkQ')">card-game</button> -->
            </div>
          </div>
        </div>

        <div class="col-md-2 my-1">
          <div>Player count</div>
          <select class="form-select" aria-label="Select Number of Players" v-model="playerCount" id="playerCount">
            <option selected></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10+</option>
          </select>
        </div>

        <div class="col-md-2 my-1">
          <div>Play time</div>
          <select class="form-select" aria-label="Select Number of Players" v-model="playTime" id="playerCount">
            <option selected></option>
            <option value="10">10 mins</option>
            <option value="15">15 mins </option>
            <option value="20">20 mins </option>
            <option value="25">25 mins</option>
            <option value="30">30 mins </option>
            <option value="35">35 mins</option>
            <option value="40">40 mins</option>
            <option value="45">45 mins</option>
            <option value="50">50 mins </option>
            <option value="55">55 mins </option>
            <option value="60">60+ mins</option>
          </select>
        </div>

        <div class="col-md-1">
          <button class="btn button-51" type="submit" @click="newSearch()">
            SUBMIT
          </button>
        </div>


      </div>
    </form>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState.js";
import { ref, watchEffect } from "vue";
import Pop from "../../utils/Pop.js";
import { atlasGamesService } from "../../services/AtlasGamesService.js";

export default {
  setup() {
    const playerCount = ref("");
    const playTime = ref("");

    const filters1 = ref([]);
    const filters2 = ref([]);
    let isSearch = false;

    // watchEffect(() => {
    //   AppState.skip
    //   this.searchByCoolMethod()
    // })

    return {
      isSearch,
      filters1,
      filters2,
      playerCount,
      playTime,

      categories: computed(() => AppState.bgCategories),
      mechanics: computed(() => AppState.bgMechanics),
      async searchByCoolMethod() {
        try {
          AppState.itsAMaybe = 12;
          AppState.hopeItWorks = 0;
          // AppState.skip = 0;
          let categoriesSearch = `categories=${filters1.value}`;
          let mechanicsSearch = `mechanics=${filters2.value}`;

          let search = `gt_max_players=${playerCount.value}`;
          let search2 = `lt_max_playtime=${playTime.value}`;
          // let skipQuery = `skip=${AppState.skip}`;

          AppState.queryFilter = [
            ...AppState.queryFilter,
            search,
            search2,

            categoriesSearch,
            mechanicsSearch,
            // skipQuery,
          ];
          const arrToUse = AppState.queryFilter;
          AppState.nextQueryFilter = AppState.queryFilter;
          let finalSearch = arrToUse.join("&");
          AppState.activeSearchQuery = arrToUse
          await atlasGamesService.getBoardGames(finalSearch);
          if (AppState.boardgames <= 0) {
            Pop.toast("Refine your search...");
            AppState.queryFilter = [];

          } else {
            AppState.queryFilter = [];
            
          }
        } catch (error) {
          Pop.error(error, "[Cool Search Method]");
        }
      },

      async incrementSkip(x) {
        try {
          switch (x) {
            case "next":
              AppState.skip += 10;
              break;
            case "prev":
              if (AppState.skip <= 0) {
                return;
              } else {
                AppState.skip -= 10;
              }
              break;

            default:
              break;
          }
        } catch (error) {
          Pop.error("[INCREMENT SKIP]", error);
        }
      },
      newSearch() {
        AppState.skip = 0;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.scrollableY {
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}

.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

button:focus {
  color: rgb(31, 28, 28);

  background: linear-gradient(to bottom right, #ff5e00, #ffbb00);
}

.no-clicky {
  pointer-events: none;
}
</style>

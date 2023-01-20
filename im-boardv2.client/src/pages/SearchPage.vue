<template>
  <div class="container-fluid px-3 animate__animated animate__fadeInRight" v-if="boardGames">
    <div class="row justify-content-center g-md-0">
      <div class="col-md-12 border-secondary border-3 rounded-bottom">
        <div class="d-flex flex-column align-items-center">
          <!-- <h6 class="searchText pt-3 text-dark">Search for board games by name</h6> -->
          <div class=" col-md-4 my-3">

            <Searchbar />
          </div>
          <h5 class="text-dark"> Or search by..</h5>
        </div>
      </div>

      <div class="col-md-11 d-flex bg-dark lighten-10 rounded p-3">
        <FilterBar />
      </div>



      <div class="col-md-2">
        <FiltersSideBar />
      </div>
      <div class="col-md-10">

        <div class="row mx-2">

          <TransitionGroup name="custom-classes" enterActiveClass="animate__fadeIn animate__animated"
            leaveActiveClass="animate__fadeOut animate__animated">
            <div class="col-md-3 mt-3" v-for="b in boardGames" :key="b.id">
              <BoardGameCardSearchPage :boardGame="b" />
            </div>
          </TransitionGroup>
        </div>
        <div class=" col-md-12 d-flex  flex-column justify-content-center align-items-center"
          v-if="boardGames.length <= 0">
          <h1>Currently no results </h1>
          <img src="https://cdn-icons-png.flaticon.com/512/2621/2621165.png" alt="no results found" width="400"
            height="400">
        </div>
        <div class=" d-flex justify-content-center my-2">
          <button class="btn button-51 mx-1" @click="incrementSkip('prev')" type="button" :disabled="hopeItWorks == 0">
            Previous
          </button>
          <button class="btn button-52 mx-1" @click="incrementSkip('next')" type="button" :disabled="
  boardGames.length <= 0 ||
  boardGames.length < itsAMaybe - hopeItWorks
          ">
            Next
          </button>
        </div>
        <!--  -->
        <!-- <div class=" d-flex justify-content-center my-2">
          <button class="btn button-51 mx-1" type="button" @click="previousSet()" >
            Previous
          </button>
          <button class="btn button-52 mx-1" @click="nextSet()"  type="button" 
          >
            Next
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { atlasGamesService } from "../services/AtlasGamesService.js";
import Pop from "../utils/Pop.js";
import Filters from "../components/SearchPage/FiltersSideBar.vue";
import Searchbar from "../components/SearchPage/Searchbar.vue";
import BoardGameCard from "../components/BoardGame/BoardGameCard.vue";
import { AppState } from "../AppState.js";

import BGCardSearchPage from "../components/SearchPage/BoardGameCardSearchPage.vue";
import BoardGameCardSearchPage from "../components/SearchPage/BoardGameCardSearchPage.vue";
import FilterBar from "../components/SearchPage/FilterBar.vue";
import FiltersSideBar from "../components/SearchPage/FiltersSideBar.vue";

export default {
  setup() {
    const editable = ref("");

    async function getCategoryList() {
      try {
        await atlasGamesService.getBoardGameCategoriesList();
      } catch (error) {
        Pop.error(error, "[getCategoryList]");
      }
    }

    async function getMechanicsList() {
      try {
        await atlasGamesService.getBoardGameMechanicsList();
      } catch (error) {
        Pop.error(error, "[getMechanicsList]");
      }
    }
    onMounted(() => {
      getCategoryList();
      getMechanicsList();
    });

    return {
      editable,
      boardGames: computed(() =>
        AppState.boardgames.slice(AppState.hopeItWorks, AppState.itsAMaybe)
      ),
      categories: computed(() => AppState.bgCategories),
      skip: computed(() => AppState.skip),
      hopeItWorks: computed(() => AppState.hopeItWorks),
      itsAMaybe: computed(() => AppState.itsAMaybe),


      async incrementSkip(x) {
        try {
          switch (x) {
            case "next":
              if (AppState.itsAMaybe == AppState.boardgames.length) {
                AppState.skip += 48;
                AppState.nextQueryFilter[
                  AppState.nextQueryFilter.length - 1
                ] = `skip=${AppState.skip}`;
                const nextSearch = AppState.nextQueryFilter.join("&");
          
                await atlasGamesService.getBoardGames(nextSearch);
                AppState.itsAMaybe = 12;
                AppState.hopeItWorks = 0;
              }
              AppState.itsAMaybe += 12;
              AppState.hopeItWorks += 12;
              break;
            case "prev":
              if (AppState.hopeItWorks > 0) {
                AppState.hopeItWorks -= 12;
              }
              if (AppState.itsAMaybe >= 22) {
                AppState.itsAMaybe -= 12;
              }
              break;

            default:
              AppState.itsAMaybe += 0;
              AppState.hopeItWorks += 0;
              break;
          }
        } catch (error) {
          Pop.error("[INCREMENT SKIP]", error);
        }
      },



      async paginationAttempt2(prevOrNext) {
        try {
          const activeSearchQuery = AppState.activeSearchQuery.join('&')

          if (prevOrNext == 'prev') {
            AppState.nextSet += 25
            await atlasGamesService.getBoardGames(activeSearchQuery)
          } else
            AppState.nextSet -= 25
          await atlasGamesService.getBoardGames(activeSearchQuery)
        } catch (error) {
          Pop.error(error, '[paginationAttempt2]')
        }
      },
      async nextSet() {
        try {
          AppState.nextSet += 25
          await atlasGamesService.getBoardGamesByOrder_By()
       
        } catch (error) {
          Pop.error(error, '[nextSet]')
        }
      },
      async previousSet() {
        try {
          AppState.nextSet -= 25
          await atlasGamesService.getBoardGamesByOrder_By()

     
        } catch (error) {
          Pop.error(error, '[previousSet]')
        }
      }
    };
  },
  components: {
    Filters,
    Searchbar,
    BoardGameCard,
    BGCardSearchPage,
    BoardGameCardSearchPage,
    FilterBar,
    FiltersSideBar,
  },
};
</script>

<style scoped lang="scss">
.searchText {

  font-weight: 900;
}

.filterBy {
  font-weight: 900;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.searchcol {
  height: 90.7vh;
}

.btn {
  width: 175px;
  height: 50px;
  overflow: hidden;
  font-size: larger;
  font-weight: bold;
  padding: 10px;
  font-family: "Baloo 2", cursive;
}

.homepage {
  min-height: 90vh;
  background-image: url(../assets/img/karthik-balakrishnan-NrS53eUKgiE-unsplash.jpg);
  background-attachment: fixed;
  background-position: center;
}

.scrollableY {
  max-height: 79vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.presetfilters {
  background-color: #2c2c2fe7;
}

.next-prev {
  position: fixed;
  bottom: 0px;
}

// @media screen AND (max-width: 768px){

// }
</style>

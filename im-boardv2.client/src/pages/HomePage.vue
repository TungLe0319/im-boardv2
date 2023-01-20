<template>
  <div
    class="container px-4 homepage animate__animated animate__fadeInLeft"

  >
    <div class="row justify-content-center">
      <div class="col-md-12 my-2">
        <HomePageBanner class="mt-4" />
      </div>

      <div class="col-md-12 pt-5" >
        <div class="hvr-sweep-to-right bg-c4 rounded-1 p-2">
          <h5 class="rowTitle p-1 mt-1">Popular Board Games</h5>
        </div>
      </div>
      <div class="row mx-2">
        <div class="col-md-12 d-flex justify-content-center">
    <TransitionGroup
          name="custom-classes"
          enterActiveClass="animate__fadeInRight animate__animated"
          leaveActiveClass="animate__fadeOutLeft animate__animated"
        >
          <div
            class="col-md-2 mt-3"
            v-for="pop in popularBoardGames"
            :key="pop.id "
          >
<BoardGameCardSearchPage  :boardGame="pop" class="mx-2"/>
            <!-- <BoardGameCard :boardGame="pop" class="mx-2" /> -->
          </div>
    
        </TransitionGroup>
        </div>
    <div class="col-md-12 d-flex justify-content-center ">
   <!-- <router-link :to="{name: 'Search', params:{ }}" @click="getPopularGames()"> 
   <p>See More</p>
   </router-link> -->
     
      <button @click="pagination('prev')" class="btn button-51 me-2 pt-0" :disabled="paginationForPopular <=0">Previous </button>
      <button @click="pagination('next')" class="btn button-52 pt-0">Next</button>
    </div>


      </div>



    <!-- SECTION  -->
      <div class="col-md-12 pt-2">
        <div class="hvr-sweep-to-right rounded-1 p-2 bg-c4 mt-4">
          <h5 class="rowTitle p-1 mt-1">Games On Discount</h5>
        </div>
      </div>
      <div class="row mx-2">
        <div class="col-md-12 d-flex justify-content-center">
  <TransitionGroup
          name="custom-classes"
          enterActiveClass="animate__fadeInRight animate__animated"
          leaveActiveClass="animate__fadeOutLeft animate__animated"
        >
          <div
            class="col-md-2 mt-3 mb-2"
            v-for="d in discountBoardGames"
            :key="d.id"
          >
            <BoardGameCardSearchPage :boardGame="d" class="mx-2" />
          </div>
        </TransitionGroup>
        </div>
      
          <div class="col-md-12 d-flex justify-content-center">
      <button @click="paginationDiscount('prev')" class="btn button-51 me-2 pt-0" :disabled="paginationForDiscount <=0">previous</button>
      <button @click="paginationDiscount('next')" class="btn button-52 pt-0">Next</button>
    </div>
      </div>



      <div class="col-md-12 pt-5">
        <div class="hvr-sweep-to-right bg-c4 rounded-1 p-2 mt-3">
          <h5 class="rowTitle p-1 mt-1">Editor's Choice Board Games</h5>
        </div>
      </div>
      <div class="row mx-2 horizontal-scrollable mt-3">
        <TransitionGroup
          name="custom-classes"
          enterActiveClass="animate__fadeInRight animate__animated"
          leaveActiveClass="animate__fadeOutLeft animate__animated"
        >
          <div
            class="col-md-2 mt-3 mb-2"
            v-for="e in editorsChoice"
            :key="e.id"
          >
            <BoardGameCardSearchPage :boardGame="e" />
          </div>
        </TransitionGroup>
      </div>

  
      <div class="my-5 d-flex justify-content-center">
        <!-- <RowSeperate class="mt-5" /> -->
        <hr class="shine" />
      </div>

      <div class="col-md-12 mt-3 pt-4">
        <a href="https://www.boardgameatlas.com/" target="_blank">
          <div class="hoverable hvr-sweep-to-left rounded-1 p-2 bg-c5">
            <h5 class="pt-2">
              <b>Articles from </b>
              <img
                src="https://www.boardgameatlas.com/imgs/5cc-api-logo.png"
                alt=""
                height="30"
              />
              <b class="text-primary lighten-10"> Board Game Atlas </b>
            </h5>
          </div>
        </a>
      </div>

      

      <div class="row horizontal-scrollable mt-4">
        <div class="col-md-3 mt-2" v-for="f in forumPosts" :key="f.id">
          <ForumPosts :forumPost="f" />
        </div>
      </div>
    </div>
  
    
    <div class="pt-5 mb-5">
      <div class="rounded-3">
      <Articles /></div></div>
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

import ForumPosts from "../components/HomePage/AtlasGamesForumPosts.vue";
import Articles from "../components/HomePage/Articles.vue";
import HomePageBanner from "../components/HomePage/HomePageBanner.vue";

import RowSeperate from "../components/HomePage/RowSeperate.vue";
import { inboxService } from "../services/InboxService.js";
import BoardGameCardSearchPage from "../components/SearchPage/BoardGameCardSearchPage.vue";

export default {
  setup() {
    const editable = ref("");
    async function getBoardGamesByDiscount() {
      try {
        await atlasGamesService.getBoardGamesByDiscount();
      } catch (error) {
        Pop.error(error, "[getBoardGames]");
      }
    }

    async function getBoardGamesByPopularity() {
      try {
        await atlasGamesService.getBoardGamesByPopularity();
      } catch (error) {
        Pop.error(error, "[getBoardGames]");
      }
    }

    async function editorsChoiceGames() {
      try {
        await atlasGamesService.getBoardGamesByIds();
      } catch (error) {
        Pop.error(error, "[EDITORS_CHOICE_GAMES]");
      }
    }

    async function getForumPosts() {
      try {
        await atlasGamesService.getForumPosts();
      } catch (error) {
        Pop.error(error, "[getForumPosts]");
      }
    }

    onMounted(() => {
      getBoardGamesByPopularity();
      getBoardGamesByDiscount();
      editorsChoiceGames();
      // getForumPosts();
      // getInvitee()
    });

    return {
      editable,
      
      popularBoardGames: computed(() => AppState.popularBoardGames),
      boardGames: computed(() => AppState.boardgames),
      forumPosts: computed(() =>
        AppState.forumPosts.sort(() => Math.random() - 0.5)
      ),
      discountBoardGames: computed(() => AppState.discountBoardGames),
      editorsChoice: computed(() =>
        AppState.editorsChoiceGames.sort(() => Math.random() - 0.5)
      ),
paginationForDiscount : computed(()=> AppState.paginationDiscount),
paginationForPopular : computed(()=> AppState.nextSet),




      async pagination(x){
        try {
          if (x == 'prev') {
            // AppState.popularBoardGames = []
            AppState.nextSet -= 6
              await atlasGamesService.getBoardGamesByPopularity()
          
          } else{
                // AppState.popularBoardGames = []
             AppState.nextSet += 6
            await atlasGamesService.getBoardGamesByPopularity()
          }
         
          } catch (error) {
            Pop.error(error,'[pagination]')
          }
      },
           async paginationDiscount(x){
        try {
          if (x == 'prev') {
             AppState.discountBoardGames = []
            AppState.paginationDiscount -= 6
              await atlasGamesService.getBoardGamesByDiscount()
          
          } else{
             AppState.discountBoardGames = []
             AppState.paginationDiscount += 6
            await atlasGamesService.getBoardGamesByDiscount()
          }
         
          } catch (error) {
            Pop.error(error,'[pagination]')
          }
      },
      async getPopularGames(){
        try {
            await atlasGamesService.getBoardGamesByPopularity()
          } catch (error) {
            Pop.error(error,'[]')
          }
      }
    };
  },
  components: {
    Filters,
    Searchbar,
    BoardGameCard,
    ForumPosts,
    Articles,
    HomePageBanner,
    RowSeperate,
    BoardGameCardSearchPage
},
};
</script>

<style scoped lang="scss">
.rowTitle {
  font-weight: 700;
}

.card-title {
  font-size: 50pt;
  font-weight: 700;
  text-shadow: 2px 2px 0px rgba(190, 205, 208, 0.92);
}

.card-img {
  height: 300px;
  object-fit: cover;
  box-shadow: inset 0 0 10px 10px #000;
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

.scrollableY {
  max-height: 79vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.scrollableX {
  border-radius: 4px;

  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
}

.presetfilters {
  background-color: #2c2c2fe7;
}

.shine {
  height: 20px;
  width: 90%;
  background-image: radial-gradient(
    farthest-side at 50% -50%,
    hsla(0, 0%, 0%, 0.5),
    hsla(0, 0%, 0%, 0)
  );
  position: relative;
}

.shine::before {
  height: 1px;
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    90deg,
    hsla(0, 0%, 0%, 0),
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0)
  );
}

@media screen and (max-width: 576px) {
  .username {
    font-size: 1.5rem;
  }
}
</style>

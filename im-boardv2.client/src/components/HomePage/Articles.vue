<template>
    
  <div class="col-md-12 mt-4">
    <div class="hvr-sweep-to-left rounded-1 p-2 bg-c5">
      <h5 class="rowTitle p-1 pt-2"> <b>Editor's Choice Articles</b></h5>
    </div>
  </div>
  <div class="row horizontal-scrollable mb-4 mt-4">
    <div class="col-md-3 mb-3" v-for="a in articles">
      <a :href="a.url" target="_blank" class="text-dark">
        <div class="bg-transparent card my-2">
          <img :src="a.coverImg" alt="" class="forcedImg rounded" />

          <div class="card-body p-2 rounded text-wrap">
            <h6 class="">{{ a.name }}</h6>

            <small class="text-primary darken-10">{{ a.credit }}</small>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { AppState } from "../../AppState.js";

export default {
  setup() {
    const route = useRoute();
    return {
      route,

      articles: computed(() =>
        AppState.articles.sort(() => Math.random() - 0.5)
      ),
    };
  },
};
</script>

<style lang="scss" scoped>



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
  height: 200px;
  width: auto;
  object-fit: cover;
  object-position: center;
  
  transition: all 0.5s ease;
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

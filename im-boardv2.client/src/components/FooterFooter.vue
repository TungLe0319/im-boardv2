<template>
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center">
      <div class="d-flex justify-content-center align-items-center">
 <button
        type="button"
        class="btn bg-transparent"
        data-bs-toggle="modal"
        data-bs-target="#CopyRightModal"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3146/3146182.png"
          alt=" copyright Icon"
          height="40"
          width="40"
        />
      </button>

      <i
        class="mdi mdi-google-maps text-warning selectable fs-1"
        data-bs-toggle="modal"
        data-bs-target="#googleMapModal"
        title="support your local game stores!"
      ></i>
      </div>
     

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted footer-text">Home</a>
        </li>
        <li class="nav-item">
          <a
            href="#/search"
            @click="scrollToTop"
            class="nav-link px-2 text-muted footer-text"
            >Search</a
          >
        </li>

        <li class="nav-item">
          <a
            href="#/faq"
            class="nav-link px-2 text-muted footer-text"
            @click="scrollToTop"
          >
            FAQ
          </a>
        </li>
        <li class="nav-item">
          <a
            href="#/about"
            class="nav-link px-2 text-muted footer-text"
            @click="scrollToTop"
            >About</a
          >
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState.js';


export default {
  props: {},
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    return {
      route,
      router,
      groupPage: computed(() => AppState.activeGroup),
      scrollToTop() {
        document.documentElement.scrollTop = 0;
      },
    };
  },
  components: {  },
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
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.footer-text {
  background: linear-gradient(to right, #ffbb00, #ff5e00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  font-family: 'Baloo 2', cursive;
}
</style>

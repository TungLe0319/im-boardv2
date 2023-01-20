<template>
  <div class="card text-bg-dark elevation-4">
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ftoplayishuman.com%2Fwp-content%2Fuploads%2F2019%2F01%2FIMG_20190130_152747_418.jpg%3Ffit%3D5036%252C2988%26ssl%3D1&f=1&nofb=1&ipt=9e11893fac6ce63d012fa63be477227bf1f90ae9e1d1700105291a01b6d9b874&ipo=images"
      class="card-img"
      alt="..."
    />
    <div class="card-img-overlay">
      <div class="d-flex">
        <h5 class="card-title p-2 rounded-1">Find the board game that speaks to you!</h5>
      </div>
      <div class="d-flex">
        <p class="card-text col-md-5 p-4 rounded-4">
          Welcome to <span class="fs-4 text-c6">I'm Game!</span> An app for
          those who have a passion for table top gaming. Our goal is to give
          users the ability to find and purchase new games they will love, keep
          track of games in their own collection, collaborate with friends, and
          much more!<br /><br />

          New to the app? Click <router-link :to="{name: 'Faq'}" >
              <a name="" id="" class="text-c6" href="#" role="button">here</a>
            </router-link> for instructions on how to navigate your
          experience!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../../AppState.js';

export default {
  setup() {
    return {
      urls: computed(() => AppState.homePageBannerUrls),
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 0;
  transition: all 0.5s ease;
  .card-title {
    font-size: 40pt;
    font-weight: 700;
    text-shadow: 2px 2px 0px rgba(190, 205, 208, 0.92);
    background-color: #79bd9add;
    color: #2c2c2f;
  }

  .card-text {
    background-color: #2c2c2ff0;
    color: #e4e4e4;
    font-weight: 700;
    letter-spacing: 0.06em;
  }
  .card-img {
    height: 400px;
    object-fit: cover;
    object-position: center;
    box-shadow: inset 0 0 10px 10px #000;
  }
}

.card:hover {
  transition: all 0.5s ease;

  filter: contrast(105%);
  filter: brightness(105%);
}
@media screen and (max-width: 576px) {
  .card {
    overflow: scroll;
    .card-title {
      font-size: 25pt;
    }

    .card-text {
      text-overflow: ellipsis;
    }
  }
}
</style>

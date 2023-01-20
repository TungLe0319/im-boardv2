<template>
  <div class="container-fluid backgroundImage">
    <!-- <div class="row justify-content-center">
      <div class="col-md-4 d-flex justify-content-end align-items-center">
        <p class="t1 text-dark text-shadow3d border-1">
          Who <br />
          We <br />
          Are.
        </p>
      </div>

      <div class="p-5 col-md-6">
        <h5 class="message">
          We <b>LOVE</b> board games! far deeper than the cliche
          <i class="mdi mdi-format-quote-open fs-3"></i> because they're fun<i
            class="mdi mdi-format-quote-close fs-3"
          ></i
          >. We believe they are capable of authentically building relationships
          and genuine community with friends and strangers. We chose to create
          an app that can display the vast variety of different boardgames as
          well as bring friends together where they can share common board game
          interest and plan game nights together to challenge themselves, build
          memories, and bring more joy and laughter to their lives.
        </h5>
      </div>
    </div> -->
    <div class="row justify-content-center mt-2">

      <AuthorCard />


    </div>
  </div>
</template>

<script>
import AuthorCard from '../components/AuthorCard.vue';
export default {
  setup() {
    return {};
  },
  components: { AuthorCard },
};
</script>

<style scoped lang="scss">
.backgroundImage {}

.message {
  letter-spacing: 0.07em;
  line-height: 2.5em;
}

.text-shadow3d {
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}

.t1 {
  font-size: 60pt;
  font-family: sans-serif;
}

.cardSection {
  max-height: 50vh;
}

.teamText {
  font-size: 50pt;
  font-weight: 700;
  font-family: Helvetica;
  color: #2c2c2c;
  background-color: #d5d5d5;
  letter-spacing: 0.05em;
  text-shadow: 4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2);
}

.banner {
  height: 600px;
  object-fit: cover;
}

.aboutPage {
  height: 100vh;
  background-image: url(https://mj-gallery.com/c8886f1a-3612-4f2e-a100-764330c494be/grid_0.png);
  background-position: center;
  background-size: cover;
}
</style>

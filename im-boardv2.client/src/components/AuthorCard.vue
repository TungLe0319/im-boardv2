<template>
  <!-- Tung -->
  <div class="col-md-3">
    <div class="card text-bg-dark border-0 authorCard">
      <img
        src="../assets/img/TungLe4.jpg"
        class="card-img"
        alt="Tung Le photo"
      />
      <div class="card-img-overlay d-flex flex-column justify-content-between">
        <div class="d-flex flex-column align-items-end rounded">
          <a
            href="https://github.com/TungLe0319 "
            target="_blank"
            title="Github"
            class="authorIcons"
          >
            <i class="mdi mdi-github fs-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tung-le0319
"
            target="_blank"
            title="LinkedIn"
            class="authorIcons"
          >
            <i class="mdi mdi-linkedin fs-2"></i>
          </a>
          <!-- <a
            href="mailto:tung.le0319@gmail.com"
            title="Email"
            class="authorIcons"
          >
            <i class="mdi mdi-email fs-2"></i>
          </a> -->
        </div>
        <div class="d-flex align-items-end">
          <h4 class="authorName">Tung Le</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- !Tung -->
  <!-- Tri -->
  <div class="col-md-3">
    <div class="card text-bg-dark border-0 authorCard">
      <img
        src="../assets/img/tri-le.jpg"
        class="card-img"
        alt="Tung Le photo"
      />
      <div class="card-img-overlay d-flex flex-column justify-content-between">
        <div class="d-flex flex-column align-items-end rounded">
          <a
            href="https://github.com/TriLe1122"
            target="_blank"
            title="Github"
            class="authorIcons"
          >
            <i class="mdi mdi-github fs-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tri-le1122
"
            target="_blank"
            title="LinkedIn"
            class="authorIcons"
          >
            <i class="mdi mdi-linkedin fs-2"></i>
          </a>
          <!-- <a href="" title="Email" class="authorIcons">
            <i class="mdi mdi-email fs-2"></i>
          </a> -->
        </div>
        <div class="d-flex align-items-end">
          <h4 class="authorName">Tri Le</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- !Tri -->
  <!-- Molly -->
  <div class="col-md-3">
    <div class="card text-bg-dark border-0 authorCard">
      <img src="../assets/img/molly.png" class="card-img" alt="Tung Le photo" />
      <div class="card-img-overlay d-flex flex-column justify-content-between">
        <div class="d-flex flex-column align-items-end rounded">
          <a
            href="https://github.com/molly-nettleton"
            target="_blank"
            title="Github"
            class="authorIcons"
          >
            <i class="mdi mdi-github fs-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/molly-nettleton
"
            target="_blank"
            title="LinkedIn"
            class="authorIcons"
          >
            <i class="mdi mdi-linkedin fs-2"></i>
          </a>
          <!-- <a href="" title="Email" class="authorIcons">
            <i class="mdi mdi-email fs-2"></i>
          </a> -->
        </div>
        <div class="d-flex align-items-end">
          <h4 class="authorName">Molly Nettleton</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- !Molly -->
  <!-- Daniel -->
  <div class="col-md-3">
    <div class="card text-bg-dark border-0 authorCard">
      <img
        src="../assets/img/daniel-le.jpg"
        class="card-img"
        alt="daniel le photo"
      />
      <div class="card-img-overlay d-flex flex-column justify-content-between">
        <div class="d-flex flex-column align-items-end rounded">
          <a
            href="https://github.com/daniel-le97"
            target="_blank"
            title="Github"
            class="authorIcons"
          >
            <i class="mdi mdi-github fs-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-le97/
"
            target="_blank"
            title="LinkedIn"
            class="authorIcons"
          >
            <i class="mdi mdi-linkedin fs-2"></i>
          </a>
          <!-- <a
            href="mailto:daniel97.le@gmail.com"
            title="Email"
            class="authorIcons"
            target="_blank"
          >
            <i class="mdi mdi-email fs-2"></i>
          </a> -->
        </div>
        <div class="d-flex align-items-end">
          <h4 class="authorName">Daniel Le</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- !Daniel -->
  <!-- Kevin -->
  <div class="col-md-3 mt-3">
    <div class="card text-bg-dark border-0 authorCard">
      <img
        src="../assets/img/kevin.jpg"
        class="card-img"
        alt="daniel le photo"
      />
      <div class="card-img-overlay d-flex flex-column justify-content-between">
        <div class="d-flex flex-column align-items-end rounded">
          <a
            href="https://www.linkedin.com/in/kevin-kelley2022/"
            target="_blank"
            title="Github"
            class="authorIcons"
          >
            <i class="mdi mdi-github fs-2"></i>
          </a>
          <a
            href="https://github.com/ksquaredcoding
  "
            target="_blank"
            title="LinkedIn"
            class="authorIcons"
          >
            <i class="mdi mdi-linkedin fs-2"></i>
          </a>
          <a
            href="https://www.ksquaredcoding.com/#/"
            title="Email"
            class="authorIcons"
            target="_blank"
          >
            <!-- <i class="mdi mdi-email fs-2"></i> -->
          </a>
        </div>
        <div class="d-flex align-items-end">
          <h4 class="authorName">Kevin Kelley</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- !Kevin -->
</template>

<script>
export default {
  props: {},

  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.authorName {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  font-family: "Roboto Condensed", sans-serif;
}

.card-img {
  height: 300px;

  object-fit: cover;
  object-position: top;
}

.tri-card-img {
  height: 300px;
  width: 300px;
  object-fit: contain;
}

.nameText {
  font-weight: 700;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.06em;
}

.forcedImg {
}

.profileImg {
  height: 150px;
  border-radius: 50%;
  border: 8px solid rgb(255, 255, 255);
  position: absolute;
  top: -175px;
  left: 25px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}
</style>

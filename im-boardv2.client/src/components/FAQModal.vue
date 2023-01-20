<template>
  <div
    class="modal fade"
    id="FAQ"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="FAQLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h1 class="modal-title fs-5" id="FAQLabel">Site Tour</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body container-fluid text-light bg-dark">
          <div class="row">
            <div class="col-md-12 d-flex mt-2 mb-4">
              <span>
                <a class="btn button-51 py-1 px-2 mx-2"> Create Group </a>
              </span>

              <div class="d-flex align-items-center justify-content-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6096/6096669.png"
                  alt=""
                  height="40"
                  class="mx-4"
                />
                <p>
                  Start a group to invite your friends to and share your owned
                  list of board games
                </p>
              </div>
            </div>

            <div class="col-md-8">
              <img
                src=""
                alt=""
                class="img-fluid rounded"
              />

              <img
                src="https://cdn-icons-png.flaticon.com/512/6096/6096669.png"
                alt=""
                height="40"
                class=""
              />
            </div>
            <div class="col-md-4">
              <img
                src=""
                alt=""
                class="img-fluid rounded border-2 border-light"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer bg-dark text-light">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GroupForm from "./GroupPage/GroupForm.vue";

export default {
  props: {},
  setup(props) {
    return {};
  },
  components: { GroupForm },
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

img {
  transition: all 0.75s ease;
}

img:hover {
  transform: scale(1.01);
  transition: all 0.75s ease;
  filter: saturate(110%);
  filter: brightness(105%);
}
</style>

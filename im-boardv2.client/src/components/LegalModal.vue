<template>
  <!-- Button trigger modal -->
  <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#CopyRightModal">
  Launch demo modal
</button> -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="CopyRightModal"
    tabindex="-1"
    aria-labelledby="CopyRightModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3146/3146182.png"
            alt=""
            height="40"
            width="40"
          />
          <h1 class="modal-title ms-3 fs-5" id="CopyRightModalLabel">
            Copy Right Notice
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <span> <h2>Open Source Credit</h2></span>
            <h6>
              We use a a lot of open source software to create this and would
              like to give a big thank you to
            </h6>
          </div>
          <div class="">
            <a
              href="https://www.boardgameatlas.com/"
              target="_blank"
              class="my-3"
            >
              <div class="d-flex align-items-center justify-content-center p-2 my-5">
                <img
                  src="https://www.boardgameatlas.com/imgs/5cc-api-logo.png"
                  alt="atlas board games logo"
                  width="50"
                  height="50"
                  class="me-3"
                />
                <h3 class="p-0 m-0">Board Game Atlas</h3>
              </div>
            </a>
            <div> <h6>For wonderfully providing free usage and amazing documentation of their Api that allowed us to produce what we were able to accomplish with this.</h6></div>
            <div>
              <h4>We adhere to the following layed out by Atlas Board Games policy of their api</h4>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="p-lg-2">
                  <h1 class="mt-0 mb-2 font-weight-bold">
                    Use of Board Game Atlas Data
                  </h1>
                  <p>
                    Board Game Atlas provides our data free of charge for the
                    purpose of creating commercial or non-commercial Board Game
                    software, performing research, or creating community content
                    like videos, reviews, etc.
                  </p>
                  <p>
                    When using the Board Game Atlas data, you must adhere to the
                    following guidelines.
                  </p>
                  <ul>
                    <li>
                      You may not use the Board Game Atlas logos or name in a
                      way that implies that Board Game Atlas has endorsed you,
                      the application, or corporation in any way.
                    </li>
                    <li>
                      You may not require any payment or exchange of goods for
                      access to Board Game Atlas data.
                    </li>
                    <li>
                      You may not change the price links gathered from Board
                      Game Atlas, meaning that you cannot replace our affiliate
                      codes with your own.
                    </li>
                  </ul>
                  <!--p Please also review our image guidelines.-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    return {};
  },
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
</style>

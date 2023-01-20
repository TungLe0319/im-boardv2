<template>
  <header class="bg-dark" style="z-index: 10">
    <Navbar
      class="animate__animated animate__fadeInDown d-none d-md-flex"
      v-if="user"
    />
  </header>
  <main style="z-index: 9">
    <router-view />
  </main>
  <footer class="p-2 bg-dark mt-1">
    <Navbar class="animate__animated animate__fadeInDown d-md-none" />
    <Footer />
  </footer>
  <GroupForm />
  <EditGroupForm />
  <EditBanner />
  <EditName />
  <EditPic />
  <GoogleMapModal />
  <FAQModal />
  <GameNightForm />
  <InviteMemberForm />
  <LegalModal/>
    <!-- MODAL -->
  <div
    class="modal fade"
    id="activeImage"
    tabindex="-1"
    aria-labelledby="activeImageLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <img :src="modalImage" alt="" class="rounded elevation-2 customSize"  v-if="modalImage"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watchEffect } from "vue";
import { AppState } from "./AppState";
import Navbar from "./components/Navbar.vue";

import EditBanner from "./components/AccountProfilePage/EditAccountModal.vue";
import EditName from "./components/AccountProfilePage/EditName.vue";
import EditPic from "./components/AccountProfilePage/EditPic.vue";
import Filters from "./components/SearchPage/FiltersSideBar.vue";
import { useRoute } from "vue-router";
import Footer from "./components/FooterFooter.vue";
import GoogleMapModal from "./components/GoogleMapModal.vue";
import FAQModal from "./components/FAQModal.vue";
import GameNightForm from "./components/GroupPage/GameNightForm.vue";
import GroupForm from "./components/GroupPage/GroupForm.vue";
import EditGroupForm from "./components/GroupPage/EditGroupForm.vue";
import InviteMemberForm from "./components/GroupPage/InviteMemberForm.vue";
import Pop from "./utils/Pop.js";

import LegalModal from "./components/LegalModal.vue";

export default {
  setup() {
    const route = useRoute();

    return {
      route,
      user: computed(() => AppState.inbox),
      appState: computed(() => AppState),
         modalImage: computed(() => AppState.activeImage),
    };
  },
  components: {
    Navbar,
    EditBanner,
    EditName,
    EditPic,
    Filters,
    Footer,
    GoogleMapModal,
    FAQModal,
    GameNightForm,
    GroupForm,
    EditGroupForm,
    InviteMemberForm,
    LegalModal
},
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>

<template>
  <!-- <a name="" id="" class="btn bg-c4 px-2" href="#" role="button">Logout</a> -->
  <button
    class="btn selectable button-50 py-1 px-2 mx-2 font"
    @click="login"
    v-if="!user.isAuthenticated"
  >
    Login
  </button>

  <div class="btn button-51 py-1 px-2 mx-2" v-else>
    <div class="hoverable font" @click="logout">Logout</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import { AuthService } from "../services/AuthService";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}

.dropdown-menu.show {
  transform: scale(1);
}

.hoverable {
  cursor: pointer;
}

.btn {
  width: 70px;
  font-weight: 600;
}

.font {
  font-family: "Baloo 2", cursive;
}
</style>

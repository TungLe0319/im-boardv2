<template>
  <div class="bg-dark rounded ms-2">
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="d-flex justify-content-between">
          <div class="p-2 mt-2 ms-1">Add post. . .</div>
          <button
            class="btn bg-c6 mx-2 my-2 rounded-pill"
            type="submit"
            aria-label="Submit Post"
            title="Submit"
          >
            Post
          </button>
        </div>
      </div>
      <div class="text-start d-flex justify-content-center">
        <div class="">
          <div class="form-group text-center m-1">
            <textarea
              class="p-2 rounded w-100"
              rows="2"
              v-model="editable.body"
              cols="150"
              placeholder=""
              required
              name="postcontent"
            ></textarea>
          </div>
        </div>
        <div></div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../../AppState.js";
import { AuthService } from "../../services/AuthService.js";
import { groupChatsService } from "../../services/GroupChatsService.js";
import Pop from "../../utils/Pop.js";

export default {
  setup() {
    let editable = ref({});
    const route = useRoute();
    return {
      editable,
      async handleSubmit() {
        try {
          if (!AppState.account.id) {
            return AuthService.loginWithPopup();
          }
          const id = route.params.id;
          editable.value.groupId = id;
          await groupChatsService.addGroupChat(editable.value);
          editable.value = {};
        } catch (error) {
          Pop.error(error, "handleChatSubmit");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>

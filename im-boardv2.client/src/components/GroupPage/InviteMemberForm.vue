<template>
  <div
    class="modal fade"
    id="inviteMemberForm"
    tabindex="-1"
    aria-labelledby="groupFormLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark">
        <div class="modal-body FORM">
          <!-- -------------------SECTION FORM----------------------------------- -->
          <form @submit.prevent="handleSubmit" class="">
            <div class="row">
              <div class="col-md-6">
                <div class="mt-3 inputBox">
                  <div class="font" >User</div>
                 
                  <div >
                     <div class="d-flex align-items-center bg-success rounded p-2  hover hoverable " :title="profileIdToInvite.name" v-if="profileIdToInvite">
           <img :src="profileIdToInvite.picture" alt="" height="30" width="30" class="rounded-circle me-3"> 
           <p class="mb-0 text-truncate"> {{profileIdToInvite.name.split('@')[0]}}</p>
        </div>
                  </div>
                </div>
                <div class="mt-3 inputBox">
                  <div class="font">send a message!</div>
                  <input
                    type="text"
                    class="bg-grey text-dark"
                    v-model="editable.description"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            <div class="my-3">
              <button
                class="btn button-51 selectable font"
                type="submit"
                data-bs-dismiss="modal"
              >
                Invite Member
              </button>
            </div>
          </form>

          <div>
          <SearchProfiles />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref, watchEffect } from "vue";

// import { groupsService } from "../../services/GroupsService.js";
import Pop from "../../utils/Pop.js";
import { AppState } from "../../AppState.js";
import { useRoute } from "vue-router";
import { groupsService } from "../../services/GroupsService.js";
import SearchProfiles from "./SearchProfiles.vue";

export default {
    setup() {
      watchEffect(()=>{
        if (AppState.profileIdToInviteBy) {
  editable.value.recipientId = AppState.profileIdToInviteBy.id
        }
      })
        const editable = ref({});
        // editable.description = ref(`${group.name}`);
        const route = useRoute();
        return {
            editable,
            group: computed(() => AppState.groups.find((g) => g.id == route.params.id)),
            profileIdToInvite: computed(()=> AppState.profileIdToInviteBy),
            async handleSubmit() {
                try {
                    let id = route.params.id;
                    editable.value.groupId = id;
               
                    await groupsService.inviteMember(editable.value);
                    editable.value = {};
                    Pop.success(`${AppState.profileIdToInviteBy.name.split('@')[0]} Invited`)
                }
                catch (error) {
                    Pop.error(error, "[handleSubmit(inviteMember)]");
                }
            },
        };
    },
    components: { SearchProfiles }
};
</script>

<style scoped>
.forcedImg {
  border-radius: 4px;
  border: dashed 4px #686868;
}

.checkbox {
  width: 30px;
  height: 30px;
}

.smallerImg {
  height: 200px;
  width: 375px;
  object-fit: cover;
}

.form-Banner {
  background-image: url(https://i.pinimg.com/564x/ca/db/46/cadb46a6ac190342d8152d4240952333.jpg);
  background-position: center;
  background-size: cover;
}

.Img1 {
  transition: all 0.5s ease;
}

.Img1:hover {
  transform: scale(1.01);
  transition: all 0.4s ease;
  filter: brightness(110%);
}

.checkBoxInput input {
  color: #27132a;
  background-color: #27132a;
  padding: 0 10px;
  font-size: 0.65em;

  border: 1px solid #ff5e00;

  letter-spacing: 0.2em;
  transition: all 1s ease;
}

.inputBox {
  position: relative;
  width: 250px;
}

.inputBox input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ffbb00;
  border-bottom: 3px solid #ff5e00;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 1em;
  background-color: transparent;
  transition: all 1.5s ease;
  box-shadow: 0.25px 0.25px 10px rgba(243, 236, 236, 0.308);
}

.inputBox span {
  position: absolute;
  left: 0;

  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  text-transform: uppercase;
  color: #13121380;
  transition: all 1s ease;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: #27132a;
  transform: translateX(10px) translateY(-7px);
  padding: 0 10px;
  font-size: 0.65em;
  border-radius: 4px;
  font-weight: bold;
  background: #ffbb00;
  border-left: 1px solid #ff5e00;
  border-right: 1px solid #ff5e00;
  letter-spacing: 0.2em;
  transition: all 1s ease;
}

.modal-body {
  background-image: url(https://images.unsplash.com/photo-1615775642101-402e4d2c0e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
  background-size: cover;
  background-position: center;
  box-shadow: 1px 1px 10px rgba(243, 236, 236, 0.308);
}

.font {
  font-family: "Baloo 2", cursive;
}
</style>

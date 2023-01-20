<template v-if="group">
  <div class="col-md-11 rounded  banner elevation-3 " :style="{ backgroundImage: `url(${group?.coverImg})` }">
   
    <div class="d-flex">
      <button class="btn text-light hover rounded-circle " type="button" data-bs-toggle="collapse" data-bs-target="#groupButtons"
        aria-expanded="false" aria-controls="collapseWidthExample">
        <i class="mdi mdi-dots-horizontal fs-1 text-white hover rounded-5 dropdownbtn"></i>
      </button>

      <div class="collapse" id="groupButtons">
        <div class="logicButtons d-flex">

          <div v-if="groupOwner">
            <button class="btn btn-warning button-51 py-1 px-2 m-2" data-bs-toggle="modal"
              data-bs-target="#inviteMemberForm">
              Invite Member
            </button>
          </div>

          <button class="btn button-51 py-1 px-2 m-2" data-bs-toggle="modal" data-bs-target="#gameNightForm">
            Create Gamenight
          </button>

          <div v-if="groupOwner">
            <button @click="editGroup()" class="btn btn-warning button-51 py-1 px-2 m-2" data-bs-toggle="modal"
              data-bs-target="#editForm">
              Edit group
            </button>
          </div>

          <button @click="addGroupMember()" class="btn button-50 py-1 px-2 m-2" v-if="!alreadyAMember">
            Join Group
          </button>
          <div v-else>
            <button @click="leaveGroup()" class="btn button-51 py-1 px-2 m-2">
              Leave Group
            </button>
          </div>

          <button @click="removeGroup()" class="btn btn-danger button-51 py-1 px-2 m-2" v-if="groupOwner">
            Delete Group
          </button>
          <div v-else></div>

        </div>


      </div>
    </div>


    <div class="row justify-content-center mb-3">
      <div class="col-md-6 text-center bannerBg my-2 rounded text-light elevation-3">
        <span class="name">{{ group?.name }}</span>

        <div class="mb-3">
          <span>
            <div class="text-shadow fs-4">Members</div>
          </span>
          <div
            class="d-flex justify-content-center align-items-center bg-c1 p-2 rounded-5 mb-2 groupMemberBar flex-wrap">
            <router-link :to="{ name: 'Profile', params: { id: g?.accountId } }" v-for="g in groupMember" :key="g?.id">
              <img :src="g.profile?.picture" :alt="g.profile?.name" :title="g.profile?.name" height="45" width="45"
                class="rounded-circle box-shadow m-1 profile-img position-relative" />
              <span class="rounded-circle onlineThing  bg-success position-absolute end-50 glow2"
                v-if="g.profile.isOnline"> </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/reactivity";

import { ref } from "vue";
import { AppState } from "../../AppState.js";
import { Account } from "../../models/Account.js";
import { ActiveGroup } from "../../models/GroupsAndGameNight/ActiveGroup.js";
// import { GroupMemberShip } from "../../models/GroupsAndGameNight/GroupMembership.js";
import { groupMembersService } from "../../services/GroupMembersService.js";
import { groupsService } from "../../services/GroupsService.js";
import Pop from "../../utils/Pop.js";

export default {
  props: {
    group: { type: ActiveGroup, required: true }
  },
  setup(props) {
    const editable = ref({});
    return {
      editable,
      groupMember: computed(() => AppState.groupMembers),
      alreadyAMember: computed(() =>
        AppState.groupMembers.find((b) => b.accountId == AppState.account.id)
      ),
      groupOwner: computed(() => props.group.creatorId == AppState.account.id),
      memberId: computed(() =>
        AppState.groupMembers.find((g) => g.accountId == AppState.account.id)
      ),
      async removeGroup() {
        try {
          if (!this.groupOwner) {
            Pop.toast("Forbidden: Not Your Group", "warning", "top-end", 1000);
          }
          if (props.group.groupMemberIds > 1) {
            Pop.toast(
              "Group has members, leave group instead.",
              "warning",
              "top-end",
              1000
            );
          }
          const yes = await Pop.confirm();
          if (!yes) {
            return;
          }
          await groupsService.removeGroup(props.group.id);
          Pop.success("Group Removed");
        } catch (error) {
          Pop.error(error, "[removeGroupMember]");
        }
      },
      async addGroupMember() {
        try {
          if (props.group.creatorId == AppState.account.id) {
            Pop.error("Already made this group and are already part of it");
          } else {
            await groupMembersService.addGroupMember(props.group.id);
            Pop.success(`You Joined ${props.group.name} !`);
          }
        } catch (error) {
          Pop.error(error, "[addMemberToGroup]");
        }
      },
      async leaveGroup() {
        try {
          if (props.group.creatorId == AppState.account.id) {
            const yes = await Pop.confirm(
              "Are you sure you want to leave? You'll have to choose a new group owner..."
            );
            if (!yes) {
              return;
            }
          }
          const yes = await Pop.confirm("Are you sure you want to leave?");
          if (!yes) {
            return;
          }
          await groupMembersService.leaveGroup(this.memberId.id);
          Pop.success(`Left ${props.group.name}`);
        } catch (error) {
          Pop.error(error, "[leaveGroup]");
        }
      },
      async editGroup() {
        try {
        } catch (error) {
          Pop.error(error, "[edit Group]");
        }
      },
    };
  },
};
</script>
<style lang="scss" scoped>
/* CSS */

.onlineThing {
  height: 20px;
  width: 20px;
}

.groupMemberBar {
  // box-shadow: inset 0 2px 5px 0 #082f46e8;;
  transition: 1s ease;
  margin-inline: 7rem;
}

.bannerBg {
  background-color: #2c2c2fd5;
}

.banner {
  background-size: cover;

  background-position: center;
  background-position: fixed;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px #2c2c2f, 0px 0px 5px #79bd9a;
  font-weight: bold;
  letter-spacing: 0.09rem;
  /* Second Color  in text-shadow is the blur */
}

.name {
  font-size: 45px;
}

* {
  font-family: "Baloo 2", cursive;
}

.glow {
  filter: drop-shadow(0 0 4px rgb(0, 255, 183)) drop-shadow(0 0 20px rgb(255, 255, 225)) drop-shadow(0 0 40px rgba(255, 255, 225, 0.524));
  color: rgb(242, 242, 171);
}

.glow2 {
  filter: drop-shadow(0 0 4px rgb(0, 255, 183));
  color: rgb(242, 242, 171);
}

.profile-img:hover {
  filter: drop-shadow(0 0 4px rgb(255, 170, 0)) drop-shadow(0 0 20px rgb(255, 255, 225)) drop-shadow(0 0 40px rgba(255, 255, 225, 0.524));
  color: rgb(242, 242, 171);
}
</style>

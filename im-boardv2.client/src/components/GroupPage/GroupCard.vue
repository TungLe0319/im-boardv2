<template>
  <router-link :to="{ name: 'Group', params: { id: group?.groupId } }">
    <div class="card text-bg-dark my-2 elevation-3 groupCard mx-3 mx-md-2 "
      :style="{ backgroundImage: `url(${group.group.coverImg})` }">
      <!-- <img :src="group?.group.coverImg" class="card-img" alt="..." /> -->
      <div class="card-img-overlay text-shadow d-flex flex-column justify-content-between">
        <h3 class="card-title p-1 text-center rounded-1">
          {{ group?.group.name }}
        </h3>
        <div class="card-title text-center p-1 rounded-1 ">
          <div class="card-text">Owner: {{ group.group.creator.name }}</div>
          <div v-if="group.group.groupMemberIds.length == 1">
            {{ group.group.groupMemberIds.length }}
            Member
          </div>
          <div v-else>{{ group.group.groupMemberIds.length }} Members</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { AppState } from "../../AppState.js";
import { GroupMemberShip } from "../../models/GroupsAndGameNight/GroupMembership.js";
import { Group } from "../../models/GroupsAndGameNight/Group.js";
export default {
  props: {
    group: { type: GroupMemberShip, required: true },
  },

  setup(props) {
    return {
      setActiveGroup() {
        let group = AppState.groups.find(
          (g) => g.groupId == props.group.groupId
        );
        AppState.activeGroup = group;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.card {}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px #79bd9a;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}

.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.groupCard {
  transition: all 0.55s ease;
  filter: brightness(85%);
  min-height: 30vh;
  border: none;
  background-size: cover;
  background-position: center;
}

.groupCard:hover {
  // box-shadow: 0px 10px 20px #4c4747 inset !important;
  transform: scale(95%);
  transition: all 0.55s ease;
  filter: saturate(105%);
  filter: brightness(100%);
}

.card-img {
  // height: 30vh;
  overflow: hidden;
  max-width: auto;
  max-height: 16rem;
}

.card-title {
  transform: translateY(-15px);
  font-weight: 700;
}

* {
  font-family: "Baloo 2", cursive;
}

@media (max-width: 576px) {
  .groupCard {
    max-height: 30vh;
    min-height: 30vh;
  }
}
</style>

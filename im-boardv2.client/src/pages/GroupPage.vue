<template>
  <div v-if="!group" class="animate__animated animate__fadeOut">
    loading....
  </div>
  <div class="group-page animate__animated animate__fadeInRight container-fluid" v-else>
    <div class="row justify-content-center mb-4 mt-2">
      <GroupBanner class="mt-2 rounded" :group="group" />
      <!-- ----------------Group CHAT -->
    </div>
    <div class="row justify-content-center">
      <div class="col-md-3 bg-dark rounded mt-2">
        <div class="bg-c6 rounded px-2 py-2 my-2 text-center mx-5">
          <h4>Group Chat</h4>
        </div>

        <div class="overflow-auto groupchatbox bg-dark lighten-10 rounded" id="chatbox">
          <div class="col-md-12" v-for="c in chats" :key="c.id">
            <Chat :chat="c" />
          </div>
        </div>
        <GroupChatInput />
      </div>

      <!-- ---------------GAME NIGHT -->
      <div class="col-md-5 overflow-auto gamecardbox mx-5">
        <div class="px-1">
          <GameNightCard v-for="g in gamenights" :gamenight="g" />
        </div>
      </div>
      <!-- -------------GROUP GAMES -->
      <div class="col-md-3 overflow-auto gamecardbox bg-dark pt-2 mt-2 rounded">
        <div class="bg-c1 rounded text-center pt-2 pb-1 mx-5">
          <h4>Group Games</h4>
        </div>
        <div class="mt-2">
          <div class="row flex-wrap">
            <div v-for="g in lists" :key="g.id" class="mt-4 col-12">
              <GroupGamesCard :boardGameList="g" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GroupBanner from '../components/GroupPage/GroupBanner.vue';
import GameNightCard from '../components/GroupPage/GameNightCard.vue';
import GroupChatInput from '../components/GroupPage/GroupChatInput.vue';
import GroupGamesCard from '../components/GroupPage/GroupGamesCard.vue';
import Pop from '../utils/Pop.js';
import { groupsService } from '../services/GroupsService.js';
import { onMounted, watchEffect } from 'vue';


import { AppState } from '../AppState.js';

import { onBeforeRouteLeave, useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';

import { listsService } from '../services/ListsService.js';
import { groupChatsService } from '../services/GroupChatsService.js';
import Chat from '../components/GroupPage/Chat.vue';
import { gameNightsService } from '../services/GameNightsService.js';
import GameNightForm from '../components/GroupPage/GameNightForm.vue';
import { GroupHandler } from "../handlers/GroupHandler.js";


export default {
  setup() {
    const route = useRoute();
    async function getGroupById() {
      try {
        await groupsService.getGroupById(route.params.id);
      } catch (error) {
        Pop.error(error, '[getGroupById]');
      }
    }

    async function getGroupMembersByGroupId() {
      try {
        await groupsService.getGroupMembers(route.params.id);
      } catch (error) {
        Pop.error(error, '[getGroupMemberByGroupId]');
      }
    }

    async function getListsByGroupId() {
      try {
        await listsService.getListsByGroupId(route.params.id);
      } catch (error) {
        Pop.error(error, '[getListsByGroupId]');
      }
    }
    async function getGroupChatsByGroupId() {
      try {
        await groupChatsService.getGroupChatsByGroupId(route.params.id);
      } catch (error) {
        Pop.error(error, '[getListsByGroupId]');
      }
    }
    async function getGroupGameNights() {
      try {
        await gameNightsService.getGroupGameNights(route.params.id);
      } catch (error) {
        Pop.error(error, '[groupGameNights]');
      }
    }

    function scrollToBottom() {
      let chatbox = document.getElementById('chatbox');
      if (!chatbox) {
        return setTimeout(scrollToBottom, 500);
      }
      chatbox.scrollTop = 9999;
    }

    onMounted(() => {


      getGroupById();
      getGroupMembersByGroupId();
      getListsByGroupId();
      getGroupChatsByGroupId();
      getGroupGameNights();
      scrollToBottom();
      GroupHandler.EnterGroup(route.params.id);
    });


    onBeforeRouteLeave(() => {

      GroupHandler.LeaveGroup(route.params.id);
    });
    // ANCHOR this essentially works as an observer.. think 'AppState.on'
    // watchEffect(() => {
    //   AppState.account;
    //   getGroupById();
    //   getGroupMembersByGroupId();
    // });

    return {
      chats: computed(() => AppState.groupChats),
      group: computed(() => AppState.activeGroup),
      lists: computed(() => AppState.groupFilteredLists),
      account: computed(() => AppState.account),
      gamenights: computed(() => AppState.groupGameNights.reverse()),
      groupOwner: computed(
        () => AppState.activeGroup.creatorId == AppState.account.id
      ),
      async createGroup() {
        try {
          await groupsService.createGroup();
        } catch (error) {
          Pop.error(error, '[createGroup]');
        }
      },
    };
  },
  components: {
    GroupBanner,
    GameNightCard,
    GroupChatInput,
    GroupGamesCard,
    Chat,
    GameNightForm,
  },
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}

.bricks {
  columns: 2;
}

// 

.groupchatbox {
  height: 80vh;
  scroll-behavior: smooth;
}

.gamecardbox {
  height: 113vh;
}

* {
  font-family: 'Baloo 2', cursive;
}
</style>

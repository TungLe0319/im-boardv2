<template>
  <div class="profile component">

    <img :src="profile.picture" :alt="profile.name" :title="profile.name">
  </div>
</template>

<script>
import { Account } from "../models/Account.js";

export default {
  props: {
profile: {type: Account, required:true}
  },

  setup(props) {

    return {

    };
  },
};
</script>

<style lang="scss" scoped>

.forcedImg{
  height: 300px;
  width: 300px;
  object-fit: cover;
}


</style>

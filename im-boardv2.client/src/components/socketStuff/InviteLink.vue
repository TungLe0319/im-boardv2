<template>
  <div class="component p-2">
    <input type="text width " :value="account?.id" @focus="$event.target.select()" />
    <!-- <label for="" class="border">{{ account?.id }}</label> -->
    <button class="btn button-51">your Link</button>
  </div>
</template>

<script>
export default {
  props: {
    account: { type: Object, required: true },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.width {
  min-width: 5rem;
}
</style>

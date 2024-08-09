<template>
  <div class="top-bar-wrapper">
    {{state}}
  </div>
</template>

<script>
import {state} from "./state.js";

export default {
  name: 'TopBar',
  computed: {
    state() {
      return state
    }
  }
}
</script>

<style lang="scss" scoped>
.top-bar-wrapper {
  width: 100%;
  height: 32px;
}
</style>

<template>
  <div class="big-screen-editor">
    <TopBar></TopBar>
    <DesignBoard></DesignBoard>
  </div>
</template>

<script>
import DesignBoard from "./DesignBoard.vue";
import TopBar from "./TopBar.vue";

export default {
  components: {
    TopBar,
    DesignBoard
  }
}
</script>

<style lang="scss" scoped>
.big-screen-editor {
  display: flex;
  flex-direction: column;
}
</style>

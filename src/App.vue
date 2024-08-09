<template>
  <div class="app">
    <Editor class="bs-editor"></Editor>
  </div>
</template>

<script>
import { Editor } from "./components/big-screen-editor";
export default {
  components: {
    Editor
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.app {
  width: 100vw;
  height: 100vh;

  .bs-editor {
    width: 100%;
    height: 100%;
  }
}
</style>

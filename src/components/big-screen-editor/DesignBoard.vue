<template>
  <div class="design-board">
    <svg class="bg" style="z-index: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgb(20, 22, 24);"><defs><pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle fill="#42454F" cx="12" cy="12" r="2"></circle></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect></svg>
    <Rulers>
      <div class="pan-zoom-container" ref="container" @wheel.capture.prevent.stop="handleWheel">
        <div class="content" ref="content" :style="contentStyle">
        </div>
      </div>
    </Rulers>
  </div>
</template>

<script>
import Rulers from "./Rulers.vue";
import {state, initState, handleWheelPan, handleWheelZoom} from "./state.js";

export default {
  name: 'DesignBoard',
  components: {
    Rulers
  },
  computed: {
    contentStyle() {
      return {
        width: `${state.width}px`,
        height: `${state.height}px`,
        transform: `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`
      };
    }
  },
  mounted() {
    initState(this.$refs.container.getBoundingClientRect(), 1920, 1080);
  },
  methods: {
    handleWheel(event) {
      if (event.ctrlKey) {
        const containerRect = this.$refs.container.getBoundingClientRect();
        const contentRect = this.$refs.content.getBoundingClientRect();
        const pointerPosition = [
            event.clientX - containerRect.left,
            event.clientY - containerRect.top,
        ]
        handleWheelZoom(containerRect, contentRect, pointerPosition, event.deltaY);
      } else {
        const {deltaX, deltaY} = event;
        handleWheelPan(deltaX, deltaY);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.design-board {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .pan-zoom-container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .content {
    will-change: transform;
    transition: transform 0.1s linear;
    position: absolute;
    left: 0;
    top: 0;
    width: 500px;
    height: 300px;
    background-color: green;
  }
}
</style>

<template>
  <div class="rulers">
    <div class="corner"></div>
    <div class="ruler-x"><canvas ref="canvasX"></canvas></div>
    <div class="ruler-y"><canvas ref="canvasY"></canvas></div>
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rulers'
}
</script>

<style lang="scss" scoped>
.rulers {
  --size: 15px;

  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: unset;
  height: unset;

  .corner {
    top: 0;
    left: 0;
    width: var(--size);
    height: var(--size);
    position: absolute;
    background: #222429 no-repeat center/contain url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAC/0lEQVR4Xu3dMW7lSAwE0DnaHm0yw3WpOZoHwlpJEy1A/WU09+97AFMGVFXY0K9fAAAAAAAAAAAAAAAAAAAAAADwNj4+Pv75/Pz8/eqMe+EtHAVJ8vXqjHvhLSgIXFAQuKAgcEFB4IKCwAUFgQsKAhcUBC4oCFxQELigIHBBQeCCgsAFBYELCgIXFAQAAAAAAAAAAAAAAAAAflKSP6/OE78++35RWHbfnXEvvOQ7WF+vzIMFKbvvzrgXXhIFgbkoCMxFQWAuCgJzURCYi4LAXBQE5qIgMBcFgbkoCMxFQWAuCgJzURCYi4LAXBQE5o5wPzHj3ruOgow7V2bcCwAAAAAAAAAAAAAAAPyw43HQEzPuXTHuXJ1x713jvtUZ9/IfdHzI8anoyox7V8STW7rpFIYoCN10CkMUhG46hSEKQjedwhAFoZtOYYiC0E2nMERB6KZTGKIgdNMpDFEQuukUhigI3XQKQxSEbjqFIQpCN53CEAWhm05hiILQTacwREHoplMYoiB00ykMURAAAAAAAAAAAAAAAAAA3k7+fT330jz4eq7svjvj3hXjzpV5t5v8b30f8euVeTAMZffdGfeuiJtwijAUcRNOEYYibsIpwlDETThFGIq4CacIQxE34RRhKOImnCIMRdyEU4ShiJtwijAUcRNOEYYibsIpwlDETThFGIq4CacIQxE34RRhKOImnCIMRdyE0/Ehn5hx711HGMadKzPuXTHuXJ1x712dbgIAAAAAAAAAAAAAAABTx0OYJ2bcu2LcuTrj3rvGfasz7l0x7lydce9d477VGfe2d7zyGp9Frsy4d0U8Ly3iJnspSNUpDHGTvRSk6hSGuMleClJ1CkPcZC8FqTqFIW6yl4JUncIQN9lLQapOYYib7KUgVacwxE32UpCqUxjiJnspSNUpDHGTvRSk6hSGuMleClJ1CkPcZC8FqTqFIW6yl4JUncIQN9lLQapOYYib7KUgVacwxE32UpCqUxjiJgAAAAAAAAAAAAAAAAAAAAAAG/wFqlQU297xdpAAAAAASUVORK5CYII=');
  }

  .ruler-x, .ruler-y {
    position: absolute;

    canvas {
      width: 100%;
      height: 100%;
      background: #222429;
    }
  }
  .ruler-x {
    left: var(--size);
    right: 0;
    top: 0;
    height: var(--size);
    width: 100%;
  }
  .ruler-y {
    left: 0;
    top: var(--size);
    width: var(--size);
    bottom: 0;
  }
  .content-wrapper {
    position: absolute;
    left: var(--size);
    top: var(--size);
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
}
</style>

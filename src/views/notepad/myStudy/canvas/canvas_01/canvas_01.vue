<template>
  <div class="canvas-01" id="canvas1">
    <canvas ref="canvas" width="500" height="500"></canvas>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "Canvas_01",
  setup() {
    let canvas = ref(null);
    onMounted(() => {
      let ctx = canvas.value.getContext("2d");
      console.log(canvas);

      // let ctx = canvas.getContext("2d");
      // ctx.translate(300, 300);
    });
    return {};
  },
});
</script>
<style lang="scss" scoped>
.canvas-01 {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
  background: linear-gradient(to bottom, #dcdcdc 0%, palevioletred 100%);
}
</style>

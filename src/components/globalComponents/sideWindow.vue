<template>
  <div
    v-if="showStatus"
    :style="{ zIndex: `${zIndex}` }"
    class="side-window"
    @click="closeWindow"
  >
    <div class="win-body" :style="{ zIndex: `${zIndex + 1}` }"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from "vue";
export default defineComponent({
  name: "SideWindow",
  props: {
    //显示控制
    show: {
      type: Boolean,
      default: false,
    },
    //弹出层级
    zIndex: {
      type: Number,
      default: 999,
    },
  },
  setup(props) {
    let showStatus = ref();
    //关闭窗口
    function closeWindow() {
      showStatus.value = false;
    }
    watch(
      () => props.show,
      (value: Boolean) => {
        if (!value) {
          closeWindow();
        } else {
          showStatus.value = value;
        }
      },
      { deep: true }
    );
    return {
      showStatus,
      closeWindow,
    };
  },
});
</script>
<style lang="scss" scoped>
.side-window {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: inline-flex;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  .win-body {
    height: 100%;
    background-color: #fff;
    position: relative;
    animation: theanimation 0.5s;
    transition: all 0.5s;
    @media screen and (min-width: 0) {
      width: 16rem;
      @keyframes theanimation {
        0% {
          left: 20%;
          opacity: 0;
        }
        25% {
          left: -3rem;
          opacity: 1;
        }
        50% {
          left: -1rem;
          opacity: 1;
        }
        75% {
          left: 10%;
          opacity: 1;
        }
        100% {
          left: 0rem;
          opacity: 1;
        }
      }
    }
    @media screen and (min-width: 45em) {
      width: 20rem;
    }
    @media screen and (min-width: 70em) {
      width: 20rem;
    }
  }
}
</style>

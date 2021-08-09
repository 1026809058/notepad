<template>
  <transition name="side">
    <div
      v-if="showStatus"
      :style="{ zIndex: `${zIndex}` }"
      class="side-window"
      @click.self="shadowClose"
      @touchstart="touchstart"
      @touchmove="touchmove"
    >
      <div class="win-content" :style="{ zIndex: `${zIndex + 1}` }">
        <div class="w-header">
          <slot name="header"></slot>
        </div>
        <div class="w-body">
          <slot></slot>
        </div>
        <div class="w-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
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
    //是否点击阴影关闭
    isShadowClose: {
      type: Boolean,
      default: true,
    },
    //弹窗方向,未添加功能
    isRight: {
      type: Boolean,
      default: true,
    },
    //是否显示阴影,未添加功能
    isShadow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    let showStatus = ref();
    //点击阴影关闭
    function shadowClose() {
      if (props.isShadowClose) closeWindow();
    }
    //关闭窗口
    function closeWindow() {
      emit("update:show", false);
      showStatus.value = false;
    }
    //移动端获取触发坐标
    let startX: any, moveX;
    function touchstart(e: any) {
      // 如果你要阻止点击事件，请反注释下一行代码
      // e.preventDefault()
      startX = e.touches[0].clientX;
    }
    //移动端滑动
    function touchmove(e: any) {
      // e.preventDefault()
      moveX = e.touches[0].clientX;
      startX - moveX <= 200 ? console.log("你在往右滑") : closeWindow();
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
      touchstart,
      touchmove,
      shadowClose,
    };
  },
});
</script>
<style lang="scss" scoped>
@keyframes animationIn {
  0% {
    background: rgba(0, 0, 0, 0);
  }
  1% {
    background: rgba(0, 0, 0, 0.3);
  }
  100% {
    background: rgba(0, 0, 0, 0.6);
  }
}
@keyframes animationOut {
  0% {
    transform: translateX(0);
    background: rgba(0, 0, 0, 0);
  }
  100% {
    transform: translateX(-100%);
    background: rgba(0, 0, 0, 0);
  }
}
.side-enter {
  transform: translate(0, 0);
}
.side-enter-active {
  animation: animationIn 0.5s;
}
.side-leave {
  transform: translate(0, 0);
}
.side-leave-active {
  animation: animationOut 0.5s;
}
.side-window {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: inline-flex;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  .win-content {
    height: 100%;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    transition: all 0.5s;
    width: 20rem;
    animation: animationBody 0.5s;
    display: flex;
    flex-direction: column;
    .w-header {
      height: 3rem;
      width: 100%;
    }
    .w-body {
      flex: 1;
      overflow-y: auto;
    }
    .w-footer {
      height: 3rem;
      width: 100%;
    }
  }
}
@keyframes animationBody {
  0% {
    width: 22rem;
    padding-left: 2rem;
    left: -22rem;
  }
  25% {
    width: 22rem;
    padding-left: 2rem;
    left: 0;
  }
  50% {
    width: 20rem;
    padding-left: 0;
    left: -0.5rem;
  }
  75% {
    width: 20.5rem;
    padding-left: 0.5rem;
    left: -0.5rem;
  }
  100% {
    width: 20rem;
    padding-left: 0;
    left: 0;
  }
}
</style>

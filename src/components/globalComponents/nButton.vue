<template>
  <button
    :style="{
      width: `${sizeW}rem`,
      height: `${sizeH}rem`,
      color: `${color}`,
      background: `${background}`,
    }"
    :class="type"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from "vue";
export default defineComponent({
  name: "NButton",
  props: {
    //按钮宽rem
    sizeW: {
      type: [Number, String],
    },
    //按钮高rem
    sizeH: {
      type: [Number, String],
    },
    //字体颜色
    color: {
      type: String,
      default: "",
    },
    //按钮背景
    background: {
      type: String,
      default: "",
    },
    //按钮样式
    type: {
      type: String,
      default: "btn-routine-01",
    },
  },
});
</script>
<style lang="scss" scoped>
button {
  min-width: 4rem;
  min-height: 2rem;
  padding: 0.1rem 0.5rem;
  font-size: 0.5rem;
  border-radius: 4px;
  outline: none;
  border: 0.1rem solid #dcdfe6;
}
.btn-routine-01 {
  background-color: white;
  border: 0.1rem solid #dcdfe6;
  &:visited {
    background-color: rgb(236, 245, 255);
    color: rgb(136, 158, 255);
    border: 0.1rem solid rgb(136, 158, 255);
  }
  &:hover {
    background-color: rgb(236, 245, 255);
    color: rgb(136, 158, 255);
  }
  &:active {
    background-color: rgb(236, 245, 255);
    color: rgb(136, 158, 255);
    border: 0.1rem solid rgb(136, 158, 255);
  }
}
.btn-bevel-01 {
  &:active {
    background-color: rgb(236, 245, 255);
    color: rgb(136, 158, 255);
    border: 0.1rem solid rgb(136, 158, 255);
  }
}
</style>

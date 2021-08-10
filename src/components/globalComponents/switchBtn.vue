<template>
  <div class="switch-btn">
    <div class="switch-btn-1" @click="labelVal(labelLeft)">{{ labelLeft }}</div>
    <div class="switch-btn-2" @click="labelVal(labelRight)">
      {{ labelRight }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SwitchBtn",
  props: {
    labelLeft: {
      type: String,
      default: "",
    },
    labelRight: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    //点击标签的labelVal传给父组件
    function labelVal(val: String) {
      emit("update:label", val);
    }
    return {
      labelVal,
    };
  },
});
</script>
<style lang="scss" scoped>
$width: 100%;
$height: 2rem;
.switch-btn {
  font-size: 0.5rem;
  color: #fff;
  text-align: center;
  line-height: 2rem;
  width: $width;
  height: $height;
  cursor: pointer;
  display: flex;
  .switch-btn-1 {
    width: calc(50% - 1rem);
    height: 100%;
    border-radius: 1rem 0 0 1rem;
    background: linear-gradient(to right, #04b404, #c8fe2e);
    margin-right: 1rem;
    &::after {
      border-left: 1rem solid #c8fe2e;
      border-bottom: 2rem solid transparent;
      content: " ";
      width: 0;
      height: 0;
      display: block;
      position: relative;
      left: 100%;
      top: -100%;
    }
  }
  .switch-btn-2 {
    width: calc(50% - 1rem);
    height: 100%;
    border-radius: 0 1rem 1rem 0;
    background: linear-gradient(to right, #1ac8fb, #1c71f0);
    margin-left: 1rem;
    &::after {
      border-right: 1rem solid #1ac8fb;
      border-top: 2rem solid transparent;
      content: " ";
      width: 0;
      height: 0;
      display: block;
      position: relative;
      left: -1rem;
      top: -100%;
    }
  }
}
</style>

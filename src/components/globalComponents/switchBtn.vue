<template>
  <div class="switch-btn">
    <div class="switch-btn-1">{{ labelLeft }}</div>
    <div class="span"></div>
    <div class="switch-btn-2">{{ labelRight }}</div>
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
});
</script>
<style lang="scss" scoped>
$width: 100%;
$height: 2rem;
.switch-btn {
  font-size: 0.5rem;
  border: 0.1rem solid red;
  color: #fff;
  text-align: center;
  line-height: 2rem;
  width: $width;
  height: $height;
  cursor: pointer;
  display: flex;
  .switch-btn-1 {
    width: 45%;
    height: 100%;
    border-radius: 2rem 0 0 0;
    background: linear-gradient(to right, #1c71f0, #1ac8fb);
  }
  .switch-btn-2 {
    width: 50%;
    height: 100%;
    border-radius: 0 0 2rem 0;
    background: linear-gradient(to right, #1ac8fb, #1c71f0);
  }
  .span {
    width: 0.5rem;
    height: 2rem;
    transform: skewX(-45deg);
  }
}
</style>

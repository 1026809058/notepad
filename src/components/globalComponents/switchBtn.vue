<template>
  <div class="switch-btn">
    <div
      class="switch-btn-1"
      :class="{ 'switch-btn-1-active': active }"
      @click="labelVal(labelLeft)"
    >
      {{ labelLeft }}
    </div>
    <div
      class="switch-btn-2"
      :class="{ 'switch-btn-2-active': !active }"
      @click="labelVal(labelRight)"
    >
      {{ labelRight }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
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
    let active = ref(true);
    //点击标签的labelVal传给父组件
    function labelVal(val: String) {
      emit("update:label", val);
      val === props.labelLeft ? (active.value = true) : (active.value = false);
    }
    return {
      labelVal,
      active,
    };
  },
});
</script>
<style lang="scss" scoped>
$width: 100%;
$height: 2rem;
.switch-btn {
  font-size: 0.5rem;
  color: #000;
  font-size: 0.8rem;
  text-align: center;
  line-height: 2rem;
  width: $width;
  height: $height;
  cursor: pointer;
  display: flex;
  .switch-btn-1 {
    width: calc(50% - 1rem);
    height: 100%;
    color: rgba(4, 180, 4, 1);
    border-radius: 1rem 0 0 1rem;
    margin-right: 1rem;
    background: linear-gradient(
      to right,
      rgba(4, 180, 4, 0.2),
      rgba(200, 254, 46, 0.2)
    );
    &::after {
      border-left: 1rem solid rgba(200, 254, 46, 0.2);
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
  .switch-btn-1-active {
    background: linear-gradient(to right, #04b404, #c8fe2e);
    color: #fff;
    &::after {
      border-left: 1rem solid #c8fe2e;
    }
  }
  .switch-btn-2 {
    width: calc(50% - 1rem);
    height: 100%;
    color: rgba(28, 113, 240, 1);
    border-radius: 0 1rem 1rem 0;
    background: linear-gradient(
      to right,
      rgba(26, 200, 251, 0.5),
      rgba(28, 113, 240, 0.5)
    );
    margin-left: 1rem;
    &::after {
      border-right: 1rem solid rgba(26, 200, 251, 0.5);
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
  .switch-btn-2-active {
    background: linear-gradient(
      to right,
      rgba(26, 200, 251, 1),
      rgba(28, 113, 240, 1)
    );
    color: #fff;
    &::after {
      border-right: 1rem solid rgba(26, 200, 251, 1);
    }
  }
}
</style>

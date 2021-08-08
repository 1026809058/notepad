<template>
  <div
    :class="['iconfont', id]"
    :style="{ fontSize: `${size}rem`, color: `${color}` }"
  ></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "IconFont",
  props: {
    //icon类名
    id: {
      type: String,
      default: "",
    },
    //icon颜色
    color: {
      type: String,
      default: "",
    },
    //icon大小，rem
    size: {
      type: [Number, String], // 字体大小类型有string和number两种
      default: 40,
    },
  },
});
</script>

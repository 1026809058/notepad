<template>
  <div class="tags" :class="{ 'tags-choose': isChoose }">
    <div class="tag-body">
      <slot></slot>
    </div>
    <div class="tag-close">
      <icon-font :class="'icon-close'" :size="1" :color="'#000'"></icon-font>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LabelPage",
  props: {
    isChoose: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.tags {
  width: 100%;
  max-height: 1.8rem;
  border-radius: 0.2rem;
  display: flex;
  &:hover {
    background-color: rgba(234, 234, 234, 0.5);
  }
  .tag-body {
    flex: 1;
  }
  .tag-close {
    width: 1.8rem;
    height: 1.8rem;
    text-align: center;
    line-height: 1.8rem;
  }
  .tag-close:hover ::before {
    background-color: rgb(215, 215, 215);
  }
}
.tags-choose {
  box-shadow: 0.1rem 0.1rem 0.3rem 0.1rem rgb(193, 193, 193);
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
}
</style>

<template>
  <header>
    <div class="logo">
      <icon-font
        :class="'icon-dynamic-filling'"
        :size="2"
        :color="'#fff'"
      ></icon-font>
    </div>
    <div class="menu-icon" @click="openSide">
      <icon-font
        :class="'icon-toggle-right'"
        :size="2"
        :color="'#fff'"
      ></icon-font>
    </div>
    <div class="head-title">notebook</div>
    <div class="functional-group"></div>
  </header>
  <!--侧边菜单弹窗-->
  <side-window v-model:show="show" :isRight="false"></side-window>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "Head",
  setup() {
    let show = ref<Boolean>(false);
    function openSide() {
      show.value = true;
    }
    return {
      show,
      openSide,
    };
  },
});
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 100%;
  display: inline-flex;
  overflow: hidden;
}
.menu-icon {
  width: 3rem;
  height: 100%;
  text-align: center;
  line-height: 3rem;
}
@media screen and (min-width: 0) {
  @import "@/style/framework/head/head_0em.scss";
}
@media screen and (min-width: 45em) {
  @import "@/style/framework/head/head_45em.scss";
}
@media screen and (min-width: 70em) {
  @import "@/style/framework/head/head_70em.scss";
}
</style>

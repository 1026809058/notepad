<template>
  <div class="side-bar-head" :style="{ background: `${headbackground}` }">
    <div class="logo">
      <icon-font
        :class="'icon-dynamic-filling'"
        :size="2"
        :color="'#fff'"
      ></icon-font>
    </div>
  </div>
  <div class="side-bar-menu">
    <SideBarMenu></SideBarMenu>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch } from "vue";
import { useStore } from "vuex";
import SideBarMenu from "./components/sideBarMenu.vue";
import setting from "../../../../setting/setting";
export default defineComponent({
  name: "SideBar",
  components: { SideBarMenu },
  setup() {
    //使用vuex
    const store = useStore();
    //页面设置
    const headbackground = setting.sideBar.background;
    watch(
      () => store.state.pageSetData.screenWidth,
      (val) => {}
    );
    return {
      headbackground,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/style/theme.scss";
.side-bar-menu {
  border-right: 1px solid #e6e6e6;
  height: calc(100% - 3rem);
}

@media screen and (min-width: 0) {
  @import "@/style/framework/sideBar/sideBar_0em";
}
@media screen and (min-width: 45em) {
  @import "@/style/framework/sideBar/sideBar_45em";
}
@media screen and (min-width: 70em) {
  @import "@/style/framework/sideBar/sideBar_70em";
}
</style>

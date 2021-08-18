<template>
  <div class="flex-shell">
    <div class="flex-left" v-if="showSideBar"></div>
    <div class="flex-right">
      <div class="header"><Head /></div>
      <div class="main"><Bodys /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Footer from "../views/system/framework/footer/index.vue";
import Head from "../views/system/framework/head/index.vue";
import Bodys from "../views/system/framework/bodys/index.vue";
import SideBar from "../views/system/framework/sideBar/index.vue";
import setting from "../setting/setting";

export default defineComponent({
  name: "",
  components: {
    Footer,
    Head,
    SideBar,
    Bodys,
  },
  setup() {
    //是否显示侧边栏
    const showSideBar = setting.showSideBar;
    return {
      showSideBar,
    };
  },
});
</script>
<style lang="scss" scoped>
.flex-shell {
  width: 100%;
  height: 100%;
  display: inline-flex;
}
.flex-right {
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 0) {
  @import "../style/framework/home/home_0em.scss";
}
@media screen and (min-width: 45em) {
}
@media screen and (min-width: 70em) {
}
</style>

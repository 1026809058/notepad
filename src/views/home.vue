<template>
  <div class="flex-shell">
    <div
      class="flex-left"
      v-if="showSideBar"
      :class="{
        'side-bar-with1': sideBarWith === false,
        'side-bar-with2': sideBarWith === true,
      }"
    >
      <SideBar></SideBar>
    </div>
    <div class="flex-right">
      <header class="header"><Head /></header>
      <main class="main" :class="{ 'main-height': showFooter }"><Bodys /></main>
      <footer class="footer" v-if="showFooter"></footer>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import { useStore } from "vuex";
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
    //使用vuex
    const store = useStore();
    //是否显示侧边栏
    const showSideBar = setting.showSideBar;
    //是否显示页脚
    const showFooter = setting.showFooter;
    let sideBarWith = ref();
    //监听窗口宽度变化
    window.onresize = function () {
      store.commit("getScreenWidth", document.documentElement.clientWidth);
      store.commit("getScreenHeight", document.documentElement.clientWidth);
    };
    watch(
      () => store.state.pageSetData.sideBarType,
      (val) => {
        sideBarWith.value = val;
      },
      {
        immediate: true,
      }
    );
    return {
      showSideBar,
      showFooter,
      sideBarWith,
    };
  },
});
</script>
<style lang="scss" scoped>
.flex-shell {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  display: flex;
}
.flex-left {
  transition: all 0.5s;
  min-width: 20rem;
}
.flex-right {
  $footer-height: 4rem;
  flex: 1;
  min-width: calc(100% - 20rem);
  max-width: 100%;
  max-height: 100%;
  .main-height {
    height: calc(100% - 7rem);
  }
  .footer {
    height: $footer-height;
  }
}
.side-bar-with1 {
  min-width: 20rem;
}
.side-bar-with2 {
  min-width: 4.2rem;
}

@media screen and (min-width: 0) {
  @import "../style/framework/home/home_0em.scss";
}
@media screen and (min-width: 45em) {
  @import "../style/framework/home/home_45em.scss";
}
@media screen and (min-width: 70em) {
  @import "../style/framework/home/home_70em.scss";
}
</style>

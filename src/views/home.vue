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
import { defineComponent, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Footer from "../views/system/framework/footer/index.vue";
import Head from "../views/system/framework/head/index.vue";
import Bodys from "../views/system/framework/bodys/index.vue";
import SideBar from "../views/system/framework/sideBar/index.vue";
import setting from "../setting/setting";
import { rotuerName, requireAuth } from "../utils/routers/routers";

export default defineComponent({
  name: "",
  components: {
    Footer,
    Head,
    SideBar,
    Bodys,
  },
  setup() {
    //vuex
    const $store = useStore();
    //路由
    const $route = useRoute();
    const $router = useRouter();
    //是否显示侧边栏
    const showSideBar = setting.showSideBar;
    //获取路由列表的登录权限
    const routesList = requireAuth($router.getRoutes());
    //路由列表存入vuex
    $store.commit("upIsRequireAuth", routesList);
    console.log($store.state.router.requireAuth.isRequireAuth[0].path);
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

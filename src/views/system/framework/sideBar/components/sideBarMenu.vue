<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    router="true"
    :collapse="sideBar"
    @open="handleOpen"
    @close="handleClose"
  >
    <menu-tree :data="navigationArr"></menu-tree>
  </el-menu>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, watch, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { clearChildrenRouter } from "../../../../../utils/routers/routers";
import MenuTree from "@/components/menuTree/menuTree.vue";
export default defineComponent({
  name: "SideBarMenu",
  components: { MenuTree },
  setup() {
    const store = useStore();
    const router = useRouter();
    let isShowRoutes = store.state.router.requireAuth.isShowRoutes;
    //获取导航栏列表
    let navigationArr: Array<Object | null> = clearChildrenRouter(isShowRoutes);
    //展开回调
    function handleOpen(key: String, keyPath: String[]) {
      console.log(111, key, keyPath);
    }
    //收起回调
    function handleClose(key: String, keyPath: String[]) {
      console.log(222, key, keyPath);
    }
    let sideBar = ref(true);
    watch(
      () => store.state.pageSetData.sideBarType,
      (val) => {
        sideBar.value = val;
        console.log(sideBar.value);
      }
    );
    return {
      sideBar,
      navigationArr,
      handleOpen,
      handleClose,
    };
  },
});
</script>
<style lang="scss" scoped>
:deep(.el-menu) {
  border: none;
}
</style>

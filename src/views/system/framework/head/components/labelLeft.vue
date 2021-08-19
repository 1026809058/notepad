<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    router="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <menu-tree :data="navigationArr"></menu-tree>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { clearChildrenRouter } from "../../../../../utils/routers/routers";
import MenuTree from "@/components/menuTree/menuTree.vue";
export default defineComponent({
  name: "LabelLeft",
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
    return {
      navigationArr,
      handleOpen,
      handleClose,
    };
  },
});
</script>

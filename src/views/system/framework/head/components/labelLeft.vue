<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    router="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-submenu
      :index="item.path"
      v-for="(item, index) in navigationArr"
      :key="index"
    >
      <template #title>
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-submenu
        :index="childrenItem.path"
        v-for="(childrenItem, index2) in item.children"
        :key="index2"
      >
        <template #title>
          <i :class="childrenItem.meta.icon"></i>
          <span>{{ childrenItem.meta.title }}</span></template
        >
        <el-menu-item :index="childrenItem.path">
          {{ childrenItem.meta.title }}
        </el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "LabelLeft",
  setup() {
    const store = useStore();
    const router = useRouter();
    let isShowRoutes = store.state.router.requireAuth.isShowRoutes;
    let navigationArr: Array<Object | null> = [];
    console.log(isShowRoutes);
    isShowRoutes.forEach((item: any) => {
      if (item.children.length > 0) {
        navigationArr.push(item);
      }
    });
    console.log(navigationArr);
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

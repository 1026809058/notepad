<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template #title>分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template #title>选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LabelLeft",
  setup() {
    //展开回调
    function handleOpen(key: String, keyPath: String[]) {
      console.log(111, key, keyPath);
    }
    //收起回调
    function handleClose(key: String, keyPath: String[]) {
      console.log(222, key, keyPath);
    }
    return {
      handleOpen,
      handleClose,
    };
  },
});
</script>

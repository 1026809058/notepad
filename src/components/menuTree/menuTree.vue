<!--@el-menu二次封装无限多级菜单栏
 使用时外层嵌套elementui的
 <el-menu>
  <menu-tree :data="导航列表"></menu-tree>
 </el-menu>
-->
<template>
  <div>
    <template v-for="(item, index) in data" :key="index">
      <el-submenu :index="item.path" v-if="item.children.length > 0">
        <template #title>
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <menu-tree :data="item.children"></menu-tree>
      </el-submenu>

      <el-menu-item :index="item.path" :key="index" v-else>
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MenuTree",
  props: {
    data: {
      type: Array,
      defualt: [],
    },
  },
});
</script>

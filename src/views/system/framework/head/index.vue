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
  <side-window v-model:show="show" :isRight="false">
    <template v-slot:header>
      <switch-btn
        class="head-switch-btn"
        labelLeft="路由列表"
        labelRight="标签页"
        v-model:label="labelVal"
      ></switch-btn>
    </template>
    <div>
      <div v-if="labelVal.value === '路由列表'">{{ labelVal.value }}</div>
      <div v-if="labelVal.value === '标签页'">{{ labelVal.value }}</div>
    </div>
  </side-window>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import SwitchBtn from "@/components/globalComponents/SwitchBtn.vue";
export default defineComponent({
  components: { SwitchBtn },
  name: "Head",
  setup() {
    let show = ref<Boolean>(false);
    let labelVal = ref<String>("路由列表");
    function openSide() {
      show.value = true;
    }
    watch(
      () => labelVal.value,
      (value: String) => {
        console.log(value === "路由列表");
      }
    );
    return {
      show,
      labelVal,
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
.head-switch-btn {
  width: 18rem;
  margin: 0.5rem 1rem;
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

<template>
  <header :style="{ background: `${headbackground}` }">
    <div class="menu-icon menu-icon_45" @click="openSideWin">
      <icon-font
        :class="{
          'icon-toggle-left': sideBarIcon === false,
          'icon-toggle-right': sideBarIcon === true,
        }"
        :size="1.8"
        :color="'#fff'"
      ></icon-font>
    </div>
    <div class="menu-icon menu-icon_70" @click="openSide">
      <icon-font
        :class="{
          'icon-toggle-left': sideBarIcon === false,
          'icon-toggle-right': sideBarIcon === true,
        }"
        :size="1.8"
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
        :labelLeft="label.labelLeft"
        :labelRight="label.labelRight"
        v-model:label="labelVal"
      ></switch-btn>
    </template>
    <div class="center-body">
      <LabelLeft v-if="labelVal === label.labelLeft"></LabelLeft>
      <LabelRight v-if="labelVal === label.labelRight"></LabelRight>
    </div>
  </side-window>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import setting from "../../../../setting/setting";
import { labelT } from "../../../../types/systemTs/headT";
import LabelLeft from "./components/labelLeft.vue";
import LabelRight from "./components/labelRight.vue";
export default defineComponent({
  components: { LabelLeft, LabelRight },
  name: "Head",
  setup() {
    //vuex
    const store = useStore();
    //页面设置
    const headbackground = setting.header.background;
    let show = ref(false);
    let label: labelT = reactive({
      labelLeft: "菜单栏",
      labelRight: "标签栏",
    });
    let labelVal = ref(label.labelLeft);
    function openSideWin() {
      show.value = true;
    }
    //展开收起侧边栏
    function openSide() {
      store.commit("getSideBarType", !store.state.pageSetData.sideBarType);
    }
    watch(
      () => labelVal.value,
      (value: String | Number) => {
        console.log(value);
      }
    );
    let sideBarIcon = ref();
    watch(
      () => store.state.pageSetData.sideBarType,
      (val) => {
        sideBarIcon.value = val;
      },
      {
        immediate: true,
      }
    );
    return {
      show,
      label,
      labelVal,
      headbackground,
      sideBarIcon,
      openSideWin,
      openSide,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/style/theme.scss";
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
.center-body {
  width: 100%;
  height: 100%;
}
.w-header {
  margin: auto;
  .switch-btn {
    width: 18rem;
    margin: 0.5rem 1rem;
  }
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

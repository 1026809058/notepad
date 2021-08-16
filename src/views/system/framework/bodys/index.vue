<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LabelPage from "@/components/labelPage/LabelPage.vue";
export default defineComponent({
  name: "Body",
  components: { LabelPage },
  setup() {},
});
</script>
<style lang="scss" scoped></style>

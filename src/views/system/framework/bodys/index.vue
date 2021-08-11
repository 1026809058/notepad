<template>
  <div class="tags">
    <LabelPage></LabelPage>
  </div>
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
<style lang="scss" scoped>
.tags {
  width: 17rem;
  height: 5rem;
}
</style>

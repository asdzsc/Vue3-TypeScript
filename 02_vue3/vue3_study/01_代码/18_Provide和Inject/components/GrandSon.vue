<template>
  <h1 :style="{ color }">GrandSon组件</h1>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "GrandSon",
  setup() {
    const color = inject("color");
    return {
      color,
    };
  },
});
</script>
<style  scoped>
</style>